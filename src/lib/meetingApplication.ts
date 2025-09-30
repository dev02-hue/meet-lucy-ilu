"use server";

import { supabase } from "./supabaseClient";

export interface MeetingApplicationData {
  // Personal Info
  fullName: string;
  email: string;
  phone: string;
  
  // Meeting Details
  motivation: string;
  location: string;
  preferredDate: string;
  
  // Meeting Plan
  selectedPlan: string;
  planPrice: number;
  
  // Payment
  paymentMethod?: string;
}

export interface SavedApplication extends MeetingApplicationData {
  id: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

 

export async function saveMeetingApplication(
    applicationData: MeetingApplicationData
  ): Promise<{ success: boolean; error?: string; applicationId?: string }> {
    console.log("📥 saveMeetingApplication called with data:", applicationData);
  
    try {
 
      const {
        fullName,
        email,
        phone,
        motivation,
        location,
        preferredDate,
        selectedPlan,
        planPrice,
        paymentMethod
      } = applicationData;
  
      console.log("✅ Extracted fields:", {
        fullName,
        email,
        phone,
        motivation,
        location,
        preferredDate,
        selectedPlan,
        planPrice,
        paymentMethod
      });
  
      // Validate required fields
      if (!fullName || !email || !phone || !motivation || !location || !preferredDate) {
        console.warn("⚠️ Validation failed - Missing required fields");
        return { success: false, error: "All required fields must be filled" };
      }
  
      console.log("🛠 Inserting into Supabase...");
  
      const { data, error } = await supabase
        .from("meeting_applications")
        .insert([
          {
            full_name: fullName,
            email: email,
            phone: phone,
            motivation: motivation,
            location: location,
            preferred_date: preferredDate,
            selected_plan: selectedPlan,
            plan_price: planPrice,
            payment_method: paymentMethod,
            status: "pending"
          }
        ])
        .select()
        .single();
  
      console.log("🔎 Supabase insert result:", { data, error });
  
      if (error) {
        console.error("❌ Error saving meeting application:", error);
        return { success: false, error: "Failed to save application: " + error.message };
      }
  
      console.log("🎉 Application saved successfully with ID:", data.id);
  
      return { 
        success: true, 
        applicationId: data.id 
      };
    } catch (err) {
      console.error("🚨 Unexpected error in saveMeetingApplication:", err);
      return { success: false, error: "An unexpected error occurred" };
    }
  }

export async function getAllMeetingApplications(): Promise<{ 
  data?: SavedApplication[]; 
  error?: string 
}> {
  try {
    const { data, error } = await supabase
      .from("meeting_applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching meeting applications:", error);
      return { error: "Failed to fetch applications" };
    }

    // Transform the data to match our interface
    const transformedData: SavedApplication[] = data.map(app => ({
      id: app.id,
      fullName: app.full_name,
      email: app.email,
      phone: app.phone,
      motivation: app.motivation,
      location: app.location,
      preferredDate: app.preferred_date,
      selectedPlan: app.selected_plan,
      planPrice: app.plan_price,
      paymentMethod: app.payment_method,
      status: app.status,
      createdAt: app.created_at,
      updatedAt: app.updated_at
    }));

    return { data: transformedData };
  } catch (err) {
    console.error("Unexpected error in getAllMeetingApplications:", err);
    return { error: "An unexpected error occurred" };
  }
}

export async function getApplicationById(
  applicationId: string
): Promise<{ 
  data?: SavedApplication; 
  error?: string 
}> {
  try {
    const { data, error } = await supabase
      .from("meeting_applications")
      .select("*")
      .eq("id", applicationId)
      .single();

    if (error) {
      console.error("Error fetching application:", error);
      return { error: "Application not found" };
    }

    const transformedData: SavedApplication = {
      id: data.id,
      fullName: data.full_name,
      email: data.email,
      phone: data.phone,
      motivation: data.motivation,
      location: data.location,
      preferredDate: data.preferred_date,
      selectedPlan: data.selected_plan,
      planPrice: data.plan_price,
      paymentMethod: data.payment_method,
      status: data.status,
      createdAt: data.created_at,
      updatedAt: data.updated_at
    };

    return { data: transformedData };
  } catch (err) {
    console.error("Unexpected error in getApplicationById:", err);
    return { error: "An unexpected error occurred" };
  }
}

export async function updateApplicationStatus(
  applicationId: string,
  status: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from("meeting_applications")
      .update({ 
        status: status,
        updated_at: new Date().toISOString()
      })
      .eq("id", applicationId);

    if (error) {
      console.error("Error updating application status:", error);
      return { success: false, error: "Failed to update application status" };
    }

    return { success: true };
  } catch (err) {
    console.error("Unexpected error in updateApplicationStatus:", err);
    return { success: false, error: "An unexpected error occurred" };
  }
}

export async function getApplicationsByEmail(
  email: string
): Promise<{ 
  data?: SavedApplication[]; 
  error?: string 
}> {
  try {
    const { data, error } = await supabase
      .from("meeting_applications")
      .select("*")
      .eq("email", email)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching applications by email:", error);
      return { error: "Failed to fetch applications" };
    }

    const transformedData: SavedApplication[] = data.map(app => ({
      id: app.id,
      fullName: app.full_name,
      email: app.email,
      phone: app.phone,
      motivation: app.motivation,
      location: app.location,
      preferredDate: app.preferred_date,
      selectedPlan: app.selected_plan,
      planPrice: app.plan_price,
      paymentMethod: app.payment_method,
      status: app.status,
      createdAt: app.created_at,
      updatedAt: app.updated_at
    }));

    return { data: transformedData };
  } catch (err) {
    console.error("Unexpected error in getApplicationsByEmail:", err);
    return { error: "An unexpected error occurred" };
  }
}
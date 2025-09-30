"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt, FaArrowLeft, FaArrowRight, FaLock, FaGift, FaBitcoin } from "react-icons/fa";

const MEETING_PLAN = {
  basic: {
    price: 500,
    name: "Basic Meet & Greet",
    features: [
      "10-minute personal meeting",
      "Professional photo opportunity",
      "Signed photograph",
      "Group session with other fans"
    ]
  },
  standard: {
    price: 750,
    name: "Standard Experience",
    features: [
      "15-minute personal meeting",
      "Professional photo opportunity",
      "Signed merchandise",
      "Q&A session access",
      "Priority seating"
    ]
  },
  premium: {
    price: 1000,
    name: "Premium Package",
    features: [
      "30-minute personal meeting",
      "Professional photo shoot (3 digital photos)",
      "Signed merchandise package",
      "Exclusive Q&A session",
      "VIP seating",
      "Backstage access (where available)",
      "Commemorative gift"
    ]
  }
};

const STEPS = {
  PERSONAL_INFO: 0,
  MEETING_DETAILS: 1,
  MEETING_PLAN: 2,
  PAYMENT: 3,
  CONFIRMATION: 4
};

export default function MeetingApplication() {
  const [currentStep, setCurrentStep] = useState(STEPS.PERSONAL_INFO);
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    email: "",
    phone: "",
    
    // Meeting Details
    motivation: "",
    location: "",
    preferredDate: "",
    
    // Meeting Plan
    selectedPlan: "premium",
    
    // Payment
    paymentMethod: ""
  });

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, STEPS.CONFIRMATION));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, STEPS.PERSONAL_INFO));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep === STEPS.PAYMENT) {
      // Handle payment processing
      nextStep();
    }
  };

  const selectedPlan = MEETING_PLAN[formData.selectedPlan as keyof typeof MEETING_PLAN];

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0D0D0D] to-[#1a1a2e] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Apply to Meet <span className="text-[#6C63FF]">Lucy Ilu</span>
          </h1>
          <p className="text-xl text-gray-300">
            Complete your application and secure your spot for an unforgettable experience
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {Object.keys(STEPS)
              .filter(key => isNaN(Number(key)))
              .map((step, index) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      index <= currentStep
                        ? "bg-[#6C63FF] border-[#6C63FF] text-white"
                        : "border-gray-600 text-gray-600"
                    } transition-all duration-300`}
                  >
                    {index + 1}
                  </div>
                  <span className="text-sm mt-2 text-gray-400 capitalize">
                    {step.toLowerCase().replace('_', ' ')}
                  </span>
                </div>
              ))}
          </div>
          <div className="h-2 bg-gray-800 rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6C63FF] to-[#FF6584] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${(currentStep / (Object.keys(STEPS).length / 2 - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8"
        >
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Information */}
              {currentStep === STEPS.PERSONAL_INFO && (
                <motion.div
                  key="personal-info"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Personal Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => updateFormData("fullName", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#6C63FF] transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#6C63FF] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#6C63FF] transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end pt-6">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#6C63FF] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#5a52d5] transition-colors flex items-center gap-2"
                    >
                      Continue <FaArrowRight />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Meeting Details */}
              {currentStep === STEPS.MEETING_DETAILS && (
                <motion.div
                  key="meeting-details"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Meeting Details</h2>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Why do you want to meet Lucy? *</label>
                    <textarea
                      required
                      value={formData.motivation}
                      onChange={(e) => updateFormData("motivation", e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#6C63FF] transition-colors resize-none"
                      placeholder="Tell us about your connection to Lucy's work and why this meeting is important to you..."
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-300 mb-2">Preferred Location *</label>
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => updateFormData("location", e.target.value)}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#6C63FF] transition-colors"
                        placeholder="City, Country"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-300 mb-2">Preferred Date *</label>
                      <div className="relative">
                        <input
                          type="date"
                          required
                          value={formData.preferredDate}
                          onChange={(e) => updateFormData("preferredDate", e.target.value)}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#6C63FF] transition-colors pr-12"
                        />
                        <FaCalendarAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center gap-2"
                    >
                      <FaArrowLeft /> Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#6C63FF] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#5a52d5] transition-colors flex items-center gap-2"
                    >
                      Continue <FaArrowRight />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Meeting Plan Selection */}
              {currentStep === STEPS.MEETING_PLAN && (
                <motion.div
                  key="meeting-plan"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Choose Your Meeting Plan</h2>
                  <p className="text-gray-300 text-lg mb-8">
                    Select the experience that best fits your expectations. All plans include a personal meeting with Lucy.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {Object.entries(MEETING_PLAN).map(([key, plan]) => (
                      <div
                        key={key}
                        onClick={() => updateFormData("selectedPlan", key)}
                        className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                          formData.selectedPlan === key
                            ? "border-[#6C63FF] bg-[#6C63FF]/10"
                            : "border-white/10 bg-white/5 hover:border-white/20"
                        }`}
                      >
                        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-3xl font-bold text-[#FF6584] mb-4">
                          ${plan.price}
                        </div>
                        <ul className="space-y-2 mb-6">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                              <div className="w-2 h-2 bg-[#6C63FF] rounded-full" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <button
                          type="button"
                          className={`w-full py-2 rounded-lg font-semibold transition-colors ${
                            formData.selectedPlan === key
                              ? "bg-[#FF6584] text-white hover:bg-[#ff4b6f]"
                              : "bg-white/10 text-white hover:bg-white/20"
                          }`}
                        >
                          {formData.selectedPlan === key ? "Selected" : "Select Plan"}
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-[#6C63FF]/10 border border-[#6C63FF] rounded-xl p-6 mt-8">
                    <h4 className="text-lg font-semibold text-white mb-2">Selected Plan: {selectedPlan.name}</h4>
                    <p className="text-gray-300">
                      Total Amount: <span className="text-2xl font-bold text-[#FF6584]">${selectedPlan.price}</span>
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Payment is required to secure your booking. You&apos;ll be able to choose your preferred payment method in the next step.
                    </p>
                  </div>
                  
                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center gap-2"
                    >
                      <FaArrowLeft /> Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-[#6C63FF] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#5a52d5] transition-colors flex items-center gap-2"
                    >
                      Proceed to Payment <FaArrowRight />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Payment Method */}
              {currentStep === STEPS.PAYMENT && (
                <motion.div
                  key="payment"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">Payment Method</h2>
                  
                  <div className="bg-[#6C63FF]/10 border border-[#6C63FF] rounded-xl p-6 mb-8">
                    <h4 className="text-lg font-semibold text-white mb-2">Order Summary</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{selectedPlan.name}</span>
                      <span className="text-2xl font-bold text-[#FF6584]">${selectedPlan.price}</span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div
                      onClick={() => updateFormData("paymentMethod", "crypto")}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.paymentMethod === "crypto"
                          ? "border-[#6C63FF] bg-[#6C63FF]/10"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#6C63FF] rounded-lg flex items-center justify-center">
                          <FaBitcoin className="text-white text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Cryptocurrency</h3>
                          <p className="text-gray-400 text-sm">Pay with Bitcoin, Ethereum, or USDT</p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Instant confirmation</li>
                        <li>• Secure blockchain transaction</li>
                        <li>• Lower fees</li>
                      </ul>
                    </div>
                    
                    <div
                      onClick={() => updateFormData("paymentMethod", "giftcard")}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.paymentMethod === "giftcard"
                          ? "border-[#6C63FF] bg-[#6C63FF]/10"
                          : "border-white/10 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#FF6584] rounded-lg flex items-center justify-center">
                          <FaGift className="text-white text-xl" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Gift Card</h3>
                          <p className="text-gray-400 text-sm">Redeem your meeting gift card</p>
                        </div>
                      </div>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Easy redemption</li>
                        <li>• Pre-paid convenience</li>
                        <li>• Perfect for gifts</li>
                      </ul>
                    </div>
                  </div>
                  
                  {formData.paymentMethod && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="bg-white/5 rounded-xl p-6 border border-white/10"
                    >
                      <h4 className="text-lg font-semibold text-white mb-4">
                        {formData.paymentMethod === "crypto" ? "Cryptocurrency Payment" : "Gift Card Redemption"}
                      </h4>
                      {formData.paymentMethod === "crypto" ? (
                        <div className="space-y-4">
                          <p className="text-gray-300">
                            You&apos;ll be redirected to our secure cryptocurrency payment gateway after submitting your application.
                          </p>
                          <div className="bg-black/50 rounded-lg p-4">
                            <code className="text-sm text-gray-300">
                              Supported: BTC, ETH, USDT, USDC
                            </code>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <p className="text-gray-300">
                            Enter your gift card code in the next step. You&apos;ll receive confirmation within 24 hours.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  )}
                  
                  <div className="flex justify-between pt-6">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center gap-2"
                    >
                      <FaArrowLeft /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={!formData.paymentMethod}
                      className="bg-[#FF6584] text-white px-8 py-3 rounded-xl font-semibold hover:bg-[#ff4b6f] transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaLock /> Secure Payment
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 5: Confirmation */}
              {currentStep === STEPS.CONFIRMATION && (
                <motion.div
                  key="confirmation"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4">Application Submitted!</h2>
                  <p className="text-xl text-gray-300 mb-8">
                    Thank you for your interest in meeting Lucy Ilu!
                  </p>
                  
                  <div className="bg-white/5 rounded-2xl p-6 max-w-md mx-auto mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Next Steps:</h3>
                    <ul className="text-gray-300 space-y-2 text-left">
                      <li>• We&apos;ll review your application within 48 hours</li>
                      <li>• You&apos;ll receive payment instructions via email</li>
                      <li>• Once payment is confirmed, we&apos;ll schedule your meeting</li>
                      <li>• Our team will contact you with meeting details</li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setCurrentStep(STEPS.PERSONAL_INFO)}
                      className="bg-[#6C63FF] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#5a52d5] transition-colors"
                    >
                      Submit Another Application
                    </button>
                    <button
                      onClick={() => window.location.href = '/'}
                      className="bg-white/10 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition-colors"
                    >
                      Return Home
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
import About from "../component/About";
import Events from "../component/Events";
import Gallery from "../component/Gallery";
import Hero from "../component/Hero";
import MeetingApplication from "../component/MeetingApplication";

 
export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
      <Events />
      <MeetingApplication />
    </div>
   );
}

import Hero from "./components/hero";
import Subscribe from "./components/subscribe";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Testimonials />
      <Subscribe />
    </div>
  );
}
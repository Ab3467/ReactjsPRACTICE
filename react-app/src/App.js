import React, { useState} from 'react';
import About from "./components/About/About.js";
import Hero from "./components/Hero/Hero.js";
import Navbar from "./components/Navbar/Navbar.js";
import Program from "./components/program/Program.js";
import Title from "./components/title/Title.js";
import Campus from "./components/Campus/Campus.js"
import Testimonial from "./components/Testimonials/Testimonial.js";
import Contact from "./components/Contact/Contact.js";
import Footer from "./components/Footer/Footer.js";
import VideoPlayer from './components/VideoPlayer/VideoPlayer.js';

function App() {
  const [playstate, setplaystate] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle= "Our Program" title="What We Offer"/>
        <Program />
        <About setplaystate={setplaystate}/>
        <Title subTitle="Gallery" title="Campus Photos"/>
        <Campus/>
        <Title subTitle="TESTIMONIALS" title="What Student Says"/>
        <Testimonial/>
        <Title subTitle="CONTACT US" title="Get in Touch"/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playstate={playstate} setplaystate={setplaystate}/>
    </div>
  );
}

export default App;

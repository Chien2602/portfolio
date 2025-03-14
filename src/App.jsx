import React, { useRef } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Education from "./components/Education";

export default function App() {
  const homeRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const educationRef = useRef(null);

  const sectionRefs = {
    Home: homeRef,
    Skill: skillRef,
    Project: projectRef,
    Contact: contactRef,
    Education: educationRef,
  };

  return (
    <div className="bg-[url(./assets/image/background.png)] bg-cover bg-center bg-fixed">
      <div className="bg-[url(./assets/image/banner-bg.png)]">
        <Header sectionRefs={sectionRefs} />
        <div ref={homeRef}><Home /></div>
      </div>
      <div ref={skillRef}><Skill /></div>
      <div ref={projectRef}><Project /></div>
      <div ref={contactRef}><Contact /></div>
      <div ref={educationRef}><Education /></div>
      <footer className="mt-10 text-center text-3xl text-white font-bold">To be contiue...</footer>
    </div>
  );
}

import './services.css';
import React from "react";
import Particles from "./components/particles";

export default function Services() {
    const gridContent = [
        { title: "Pain Management", description: "Effective treatment options to alleviate chronic and acute pain." },
        { title: "Frozen Shoulder", description: "Rehabilitation to restore movement and reduce pain in frozen shoulder conditions." },
        { title: "Geriatric Rehab", description: "Personalized therapy to improve mobility and quality of life for seniors." },
        { title: "Pediatric Rehab", description: "Tailored therapy to address physical developmental needs in children." },
        { title: "Disc Herniation", description: "Specialized treatments for pain relief and healing of slipped discs." },
        { title: "Stroke Rehab", description: "Comprehensive rehabilitation to improve function after a stroke." },
        { title: "Sciatica Rehab", description: "Targeted therapies to relieve sciatica pain and restore mobility." },
        { title: "Sports Injuries", description: "Injury prevention and recovery treatments for athletes and active individuals." },
        { title: "Women's Health Therapy", description: "Therapeutic services addressing women's health issues, including pelvic health." }        
    ];
  return (
    <div className="servicesOuterContainer">
        <Particles className="particles" quantity={500} />
        <div className="gridContainer">
        {gridContent.map((item, index) => (
          <div className="gridItem" key={index}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
        </div>
    </div>
  );
}

import React from 'react'
import robowoman from '../assets/robowoman.png'


function Home() {
  return (
    <section className="hero"> 
      <div className="glass-panel">
        <h1>Sally Sghair</h1>
        <h2>Junior Software Developer</h2>
        <p>I am privileged to have had a diverse professional journey in multiple geo- locations that gave me exposure to different industries, in addition to various cultures and work ethics. However, I have always been drawn to programming and consider it my passion. I began self- learning from a range of resources and decided I was ready to learn in a structured professional environment which led to taking General Assembly’s Software Engineering Immersive Bootcamp.
I am eager to start my career in tech and progress my passion for programming in a professional environment.</p>
        <div className="glass-toolbar">
          <a href="/skills" className="glass-button">Skills</a>
          <a href="/portfolio" className="glass-button">Portfolio</a>
        </div>
      </div>
      <img src={robowoman} className="robowoman" />
    </section>
  )
}

export default Home
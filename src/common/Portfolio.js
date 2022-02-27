import React from 'react'
import pokeCenter from '../assets/pokeCenter.png'
import techConnect from '../assets/techConnect.png'
import snake from '../assets/snake.png'
import ketoKitchen from '../assets/ketoKitchen.png'


function Portfolio () {
  return (
    <main id="portfolio">
      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
            <div className="col">
              <div className="card shadow-lg">
                <img src={pokeCenter} className="bd-placeholder-img card-img-top" width="100%" height="250" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>

                <div className="card-body shadow-lg">
                  <p className="card-text">PokeCenter is a pair project that used an external API to extract data and show data. It displays and details pokemon cards, it also includes a search and shiny mode feature. </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href='https://pokemoncenter.netlify.app/' target="_blank" rel="noreferrer" className="btn sitelink" type="button">Go to site</a>
                    <a href='https://github.com/sallyali7/project-two' target="_blank" rel="noreferrer"className="btn sitelink" type="button">Github</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-lg">
                <img src={ketoKitchen} className="bd-placeholder-img card-img-top" width="100%" height="250" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>

                <div className="card-body shadow-lg">
                  <p className="card-text">KetoKitchen is A full-stack MERN webapp built by a group of us. Users can create authenticated profiles, browse through 4 courses of Keto recipes, filter, search and bookmark recipes.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href='https://ketokitchen-proj-three-sei.netlify.app/' target="_blank" rel="noreferrer" type="button" className="btn sitelink">Go to site</a>
                    <a href='https://github.com/tigeryant/sei-project-three-fe' target="_blank" rel="noreferrer" type="button" className="btn sitelink">Github</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-lg">
                <img src={techConnect} className="bd-placeholder-img card-img-top" width="100%" height="250" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>

                <div className="card-body shadow-lg">
                  <p className="card-text">TechConnect is a full-stack webapp that I did solo. Users can create authenticated profiles and apply for jobs directly. Admin can post jobs and blogposts using Django admin portal.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href='https://techconnect.netlify.app/' target="_blank" rel="noreferrer" className="btn sitelink">Go to site </a>
                    <a href='https://github.com/sallyali7/project4_frontend' target="_blank" rel="noreferrer" className="btn sitelink">Github</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-lg">
                <img src={snake} className="bd-placeholder-img card-img-top" width="100%" height="250" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>
                <div className="card-body shadow-lg">
                  <p className="card-text">A classic Snake game were I used a grid to create a snake that is directed using the keyboard to eat a randomly generated apple. The snake grows as it eats and dies if it hits the paramater.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <a href='https://sallyali7.github.io/sei-project-one-/' target="_blank" rel="noreferrer" type="button" className="btn sitelink">Go to site</a>
                    <a href='https://github.com/sallyali7/sei-project-one-' target="_blank" rel="noreferrer" type="button" className="btn sitelink">Github</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </main>
      
  )
}
  
export default Portfolio
import React from 'react'
import pokeCenter from '../assets/pokeCenter.png'
import techConnect from '../assets/techConnect.png'
import snake from '../assets/snake.png'
import ketoKitchen from '../assets/ketoKitchen.png'


function Portfolio () {
  return (
    <main>
      <div className="album py-5 bg-light">
        <div className="container">

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src={pokeCenter} className="bd-placeholder-img card-img-top" width="100%" height="250" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>

                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href='https://pokemoncenter.netlify.app/' target="_blank" rel="noreferrer"><button type="button" className="btn btn-sm btn-outline-secondary">Go to site</button></a>
                      <a href='https://github.com/sallyali7/project-two' target="_blank" rel="noreferrer"><button type="button" className="btn btn-sm btn-outline-secondary">Github</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={ketoKitchen} className="bd-placeholder-img card-img-top" width="100%" height="250" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>

                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href='https://ketokitchen-proj-three-sei.netlify.app/' target="_blank" rel="noreferrer"><button type="button" className="btn btn-sm btn-outline-secondary">Go to site</button></a>
                      <a href='https://github.com/tigeryant/sei-project-three-fe' target="_blank" rel="noreferrer"> <button type="button" className="btn btn-sm btn-outline-secondary">Github</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={techConnect} className="bd-placeholder-img card-img-top" width="100%" height="250" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>

                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href='https://techconnect.netlify.app/' target="_blank" rel="noreferrer"><button type="button" className="btn btn-sm btn-outline-secondary">Go to site </button></a>
                      <a href='https://github.com/sallyali7/project4_frontend' target="_blank" rel="noreferrer"><button type="button" className="btn btn-sm btn-outline-secondary">Github</button></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card shadow-sm">
                <img src={snake} className="bd-placeholder-img card-img-top" width="100%" height="250" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"/><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <a href='https://sallyali7.github.io/sei-project-one-/' target="_blank" rel="noreferrer"><button type="button" className="btn btn-sm btn-outline-secondary">Go to site</button></a>
                      <a href='https://github.com/sallyali7/sei-project-one-' target="_blank" rel="noreferrer"><button type="button" className="btn btn-sm btn-outline-secondary">Github</button></a>
                    </div>
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
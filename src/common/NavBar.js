
function NavBar() {
  return ( 
    <nav className="navbar navbar-expand-lg navbar-light rounded" aria-label="Twelfth navbar example">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse navbar-light justify-content-md-center" id="navbarsExample10">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
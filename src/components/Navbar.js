import React from "react";
import LogoPrincipal from "../Images/LogoPrincipal.png";
import '../index.css';

export default function Navbar() {
  const listaElementosNav = ["Home", "About us", "Technologies", "Contact"];

  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
  <div className="container">
    <a className="navbar-brand" href="#">
      <p className="tituloNavbar"><img src={LogoPrincipal} alt="..." height="56" />Biletly</p>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">About us</a>
        </li>
		<li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Technologies</a>
        </li>
		<li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Contact</a>
        </li>
      
      </ul>
    </div>
  </div>
</nav> */}
			<nav style={{height:100, backgroundColor: '#383838'}}>

			</nav>

    </>
  );
}

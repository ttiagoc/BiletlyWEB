import React from "react";
import "../index.css";
import img1 from "../images/technologiesIcons/img1.png";
import img2 from "../images/technologiesIcons/img2.png";
import img3 from "../images/technologiesIcons/img3.png";
import img4 from "../images/technologiesIcons/img4.png";

export default function Technologies() {
  return (
    <>
      <div style={{ backgroundColor: "black", paddingBottom:'66px' }}>
        <div className="container">
          <div className="m-auto contenedor">
            <h1 className="tituloTechnologies text-center">Technologies & objectives</h1>

            <div className="row">
              <div
                className="col m-5 colCentrada"
                
              >
                <img alt="img1" src={img1} className="icono"></img>
                <div className="divTitulos">
                  <h2>Tickets to NFT</h2>
                  <p>Access to tickets in a modern and transparent way</p>
                  
                </div>
              </div>

              <div
                className="col m-5 colCentrada">
                <img alt="img2" src={img2} className="icono"></img>
                <div className="divTitulos">
                  <h2>Security</h2>
                  <p>Provide security and comfort to the customers</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className="col m-5 colCentrada">
                <img alt="img3" src={img3} className="icono"></img>
                <div className="divTitulos">
                  <h2>Blockchain</h2>
                  <p>Give space to a new and growing market</p>
                </div>
              </div>

              <div
                className="col m-5 colCentrada">
                <img alt="img4" src={img4} className="icono"></img>
                <div className="divTitulos">
                  <h2>Ticket-tracking</h2>
                  <p>Follow the path of the NFTs in the Blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

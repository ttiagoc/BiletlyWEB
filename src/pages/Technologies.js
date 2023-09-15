import React from "react";
import "../index.css";
import img1 from "../images/technologiesIcons/img1.png";
import img2 from "../images/technologiesIcons/img2.png";
import img3 from "../images/technologiesIcons/img3.png";
import img4 from "../images/technologiesIcons/img4.png";

export default function Technologies() {
  return (
    <>
      <div style={{ backgroundColor: "black" }}>
        <div className="container">
          <div className="m-auto text-center contenedor">
            <h1 className="tituloTechnologies">Technologies & objectives</h1>

            <div className="row">
              <div
                className="col m-5"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img alt="img1" src={img1} className="icono"></img>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h2 style={{alignSelf:'self-start'}}>Tickets to NFT</h2>
                  <p style={{alignSelf:'self-start'}}>Access to tickets in a modern and transparent way</p>
                  
                </div>
              </div>

              <div
                className="col m-5"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img alt="img2" src={img2} className="icono"></img>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h2  style={{alignSelf:'self-start'}}>Security</h2>
                  <p style={{alignSelf:'self-start'}}>Provide security and comfort to the customers</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div
                className="col m-5"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img alt="img3" src={img3} className="icono"></img>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h2 style={{alignSelf:'self-start'}}>Blockchain</h2>
                  <p style={{alignSelf:'self-start'}}>Give space to a new and growing market</p>
                </div>
              </div>

              <div
                className="col m-5"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <img alt="img4" src={img4} className="icono"></img>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h2 style={{alignSelf:'self-start'}}>Ticket-tracking</h2>
                  <p style={{alignSelf:'self-start'}}>Follow the path of the NFTs in the Blockchain</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

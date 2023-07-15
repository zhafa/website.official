import React from "react";
import "./Frame1.css";

function Frame1(props) {
  const { kanan, title, place1, ellipse1, icon, group2, group3, place2, kiri, tengah } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-1 screen">
        <div className="overlap-group2">
          <div className="overlap-group3">
            <img className="kanan" src={kanan} alt="Kanan" />
            <div className="navigasi poppins-bold-bizarre-40px">
              <h1 className="title">{title}</h1>
              <div className="flex-col">
                <div className="place poppins-bold-bizarre-40px">{place1}</div>
                <div className="group-container">
                  <div className="overlap-group">
                    <img className="ellipse-1" src={ellipse1} alt="Ellipse 1" />
                    <div className="icon">{icon}</div>
                  </div>
                  <img className="group-2" src={group2} alt="Group 2" />
                  <img className="group-3" src={group3} alt="Group 3" />
                </div>
              </div>
              <div className="place-1">{place2}</div>
            </div>
            <img className="kiri" src={kiri} alt="Kiri" />
          </div>
          <img className="tengah" src={tengah} alt="Tengah " />
        </div>
      </div>
    </div>
  );
}

export default Frame1;

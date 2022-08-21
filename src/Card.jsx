import React from "react";
import {Link } from "react-router-dom";
import "./styles.css";
import Avatar from "@mui/material/Avatar";

function Card({ id, name, phone, email }) {
  
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <Avatar className="circle-avatar" />
      </div>

      <div className="bottom">
        <p className="info">{phone}</p>
        <p className="info">{email}</p>
      </div>
      <div className="detail">
        <Link to={`/contact/${id}`}> Details </Link>
      </div>
    </div>
  );
}

export default Card;

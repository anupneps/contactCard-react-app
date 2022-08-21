import axios from "axios";
import { useState, useEffect, React } from "react";
// import "./styles.css";
import Card from "./Card";
import { useParams } from "react-router-dom";

export default function Contact() {
  const [contact, setContact] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
   
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        
        setContact(response.data);
      });
  }, []);

  
  
  return (
    <div className = "contactDetails">
      <h5>Name: {contact.name}</h5>
      <h5>UserName: {contact.username}</h5>
      <h5>E-mail: {contact.email}</h5>
      <h5>Phone: {contact.phone}</h5>
      <h5>Company: {contact.company ? contact.company.name : ""}</h5>
      <h5>Website: {contact.website}</h5>
      <h5 className="address" >Address: </h5>
      <li className="address-list" > Street: {contact.address ? contact.address.street : ""} </li>
      <li className="address-list"> Suite: {contact.address ? contact.address.suite : ""} </li>
      <li className="address-list"> City: {contact.address ? contact.address.city : ""} </li>
      <li className="address-list"> Zip-Code: {contact.address ? contact.address.zipcode : ""} </li>
    </div>
  );
}

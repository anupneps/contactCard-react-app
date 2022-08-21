import axios from "axios";
import { useState, useEffect, React } from "react";
import "./styles.css";
import Card from "./Card";

function renderCard(card) {
  return (
    <Card
      key={card.id}
      id={card.id}
      name={card.name}
      phone={card.phone}
      email={card.email}
    />
  );
}

export default function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log("promise fulflled");
      setContacts(response.data);
    });
  }, []);
  

  return <div>{contacts.map(renderCard)}</div>;
}

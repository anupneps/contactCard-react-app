import { React } from "react";
import { Routes, Route} from "react-router-dom";
import "./styles.css";
import Contacts from "./Contacts";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="App">
      <h1>Contacts</h1>
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/contact/:id" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

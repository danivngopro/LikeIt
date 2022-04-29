import "./footer.css";
import React, { useState, useEffect } from "react";
import { CSVLink } from "react-csv";
import axios from "axios";
import { authentication } from "../Firebase/firebase";

function GetData() {
  const [csvData, setcsvData] = useState([]);
  // const [finalData, setFinalData] = useState(["image id", "likes", "dislikes", "likers", "dislikers", "updated at", "object id"]);

  useEffect(() => {
    axios.get(`http://localhost:3003/api/images/`).then((res) => {
      setcsvData(Object.values(res.data.map((obj) => Object.values(obj))));

      res.data.forEach(element => {
        
      });
    });
  }, []);

  return <CSVLink data={csvData}>Download me</CSVLink>;
}

function Footer() {
  return <div  className='Footer'><GetData></GetData></div>;
}

export default Footer;

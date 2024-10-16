import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Taha Yassine Romdhane  </span>
            from <span className="purple"> Sousse , Tunisia</span>
            <br />
            I am currently employed as a software developer at
            <span className="purple"> TEK-UP</span>  .
             
            <br />
            For my graduation project, 
            I developed 
            <span className="purple"> DocumentsIAscanner</span> 
            , a platform that helps companies and governments manage documents more efficiently
             It uses
             <span className="purple"> AI</span>   to scan, classify, and verify documents like IDs, signatures, and dates.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Taha Yassine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

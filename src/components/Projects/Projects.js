import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectOne from "../../Assets/Projects/project1.png";
import vaerdia from "../../Assets/VaerdiaLogo.png";
import projectTwo from "../../Assets/Projects/project2.png";
import projectThree from "../../Assets/Projects/project3.png";
import projectFour from "../../Assets/Projects/project4.png";
import projectFive from "../../Assets/Projects/project5.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={projectTwo}
                isBlog={false}
                title="PFE-IA-Docs-Manager"
                description={"For my final year project, I developed an AI-driven platform designed to automate document classification and verification, targeted toward company and government use. The system leverages machine learning to quickly analyze, categorize, and verify various documents, accelerating document processing times and ensuring compliance. Key functionalities include intelligent PDF extraction, categorization, and verification checks (such as date, signature, and ID verification) through an intuitive interface. This project strengthened my expertise in artificial intelligence, full-stack development, and automation, showcasing my skills in creating scalable solutions that streamline administrative processes."}
                ghLink="https://github.com/taha-yassine-romdhane/Summer-InternShip-CRM"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={projectThree}
                isBlog={false}
                title="Hotel Reservation System"
                description="Casalogy is a dedicated e-commerce app designed to provide healthcare professionals with easy access to premium medical attire. Focused on quality, comfort, and style, the app offers a curated selection of lab coats, scrubs, and essential accessories tailored to meet the demands of doctors, nurses, and other medical staff. With a user-friendly interface, Casalogy allows users to browse collections, filter by size and color, and securely complete purchases. Personalized recommendations and a focus on professional style make Casalogy the go-to solution for healthcare professionals seeking attire that meets the highest standards. "
                ghLink="https://github.com/taha-yassine-romdhane/Academic-Project-Property-Finder"

            />

          </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={projectOne}
                  isBlog={false}
                  title="Hotel Reservation System"
                  description="A full-featured hotel reservation platform built with Ruby on Rails, designed to simplify the booking process for guests and provide powerful management tools for hotel administrators. Key features include room search with real-time availability, secure online payments, user authentication, and an intuitive admin dashboard for managing bookings and room details. The platform is responsive, ensuring smooth performance across devices, and demonstrates my skills in building user-centric, full-stack applications with Rails, PostgreSQL, and Bootstrap."
                  ghLink="https://github.com/taha-yassine-romdhane/Academic-Project-Property-Finder"

              />
            </Col>



          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={projectFive}
                isBlog={false}
                title="Facebook Client-agent automation "
                description="This Make.com automation captures customer inquiries from Facebook, processes and organizes them, and stores the details in Google Sheets for easy tracking. Notifications are sent to alert the team to new messages, ensuring quick follow-ups and a seamless customer service experience."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={vaerdia}
                isBlog={false}
                title="Summer-InternShip-CRM"
                description={"During my engineering internship at VAERDIA, I developed a Customer Relationship Management (CRM) system aimed at optimizing communication and user tracking. This CRM facilitates efficient management of chat interactions, enabling the company to streamline customer support and monitor user presence seamlessly. This project enhanced my skills in designing user-focused solutions and provided valuable experience in developing functional CRM tools tailored to business needs."}
                ghLink="https://github.com/taha-yassine-romdhane/Summer-InternShip-CRM"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={projectFour}
                isBlog={false}
                title="Self-Restaurent-Desktop-App"
                description="this desktop app is that i build for my brother restaurant to manage his orders and products , i build it  with reactJs electronJs , nodejs , mongoDB "
                ghLink="https://github.com/taha-yassine-romdhane/Self-Restaurent-Desktop-App"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

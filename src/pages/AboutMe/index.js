import React from "react";
import Container from "../../components/Container/index";
import "./style.css";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import me from "../../img/me.jpg"
const AboutMe = () => {
  return (
    <Container>
      <Navbar />
      <section>
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-4">
              <img
                src={me}
                className="card-img"
                alt="me"
              ></img>
            </div>
            <div className="col-md-8 bg-dark p-2">
              <div className="card-body contact">
                <h1 className="card-title ">Luis Feliz</h1>
                <h2 className="card-text contact">
                  Computer Engineering and Technologies BA
                </h2>
                <h2 className="card-text contact">Software Developer</h2>
                <h2 className="card-text contact">New York, New York</h2>
                <h2 className="card-text contact">
                  E-Commerce/Web Applications
                </h2>
                <h2 className="card-text contact">LuisFeliz@gmail.com</h2>
                <h2 className="card-text contact">646 - 468 - 6190</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Container>
  );
};
export default AboutMe;

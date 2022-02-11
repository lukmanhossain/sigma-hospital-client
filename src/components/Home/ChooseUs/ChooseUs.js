import React from "react";
import { Container } from "react-bootstrap";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="section chooseUs-Fild ">
      <Container className="why-choose">
        <div className="outer-why-content row">
          <div className="col-lg-2"></div>
          <div className="why-content col-lg-10">
            <p className="why-choose-pragraph">why choose us</p>
            <h1 className="Turst-people">Why People Trust </h1>
            <h4 className="Treatment">Sigma Treatment</h4>
            <p className="sigma-text">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className=" row">
          <div className="col-lg-2"></div>
          <div className="peaper col-lg-10 row">
            <div className="paper-item col-lg-3 col-md-5 col-sm-12">
              <img
                src="https://wordpress.iqonic.design/kivicare/wp-content/uploads/2021/01/icon-3-1.png"
                alt=""
                className="image-icon"
              />

              <h5>Qualified Doctors</h5>
              <p className="content-pragraph">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin.
              </p>
              <button className="read-btn">
                READ MORE <i className="fas fa-plus btn-red"></i>
              </button>
            </div>
            <div className="paper-item col-lg-3 col-md-5 col-sm-12 ">
              <img
                src="https://wordpress.iqonic.design/kivicare/wp-content/uploads/2020/10/icon-2-1.png"
                alt=""
                className="image-icon"
              />

              <h5>Trusted Treatment</h5>
              <p className="content-pragraph">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin.
              </p>
              <button className="read-btn">
                READ MORE <i className="fas fa-plus btn-red"></i>
              </button>
            </div>
            <div className="paper-item col-lg-3 col-md-5 col-sm-12">
              <img
                src="https://wordpress.iqonic.design/kivicare/wp-content/uploads/2020/10/icon-1-1.png"
                alt=""
                className="image-icon"
              />

              <h5>24/7 Services</h5>
              <p className="content-pragraph">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin.
              </p>
              <button className="read-btn">
                READ MORE <i className="fas fa-plus btn-red"></i>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ChooseUs;

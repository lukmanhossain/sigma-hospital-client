import React from "react";
import "./SingleDonor.css";
import { Card } from "react-bootstrap";
import DonorModal from "../DonorModal/DonorModal";

const SingleDonor = (props) => {
  const { name, gender, bloodGroup, address } = props.donordata;

  return (
    <div className="col-lg-5 col-sm-12 mx-4 g-4 single-donor">
      <Card border="info">
        <Card.Header>
          {gender === "Male" ? (
            <i class="fas fa-user user-icon"></i>
          ) : (
            <i class="fas fa-female user-icon"></i>
          )}
          <small className="name-donor">{name}</small>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-titels ">
            Blood Group <strong className="blood-grp">{bloodGroup}</strong>
          </Card.Title>
          <p>Address : {address}</p>
          <Card.Text>
            <button className="contact-btn ">
              <DonorModal donar={props.donordata}></DonorModal>
            </button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleDonor;
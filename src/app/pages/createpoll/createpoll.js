import React from "react";
import { Form } from "react-bootstrap";

import { FaFilter, FaPlus, FaArrowDown, FaDate } from "react-icons/fa";

import styles from "./styles.module.css";
import { Link } from "react-router-dom";
const createpoll = () => {
  return (
    < div >
      <div className="text-right">
        <button className={`btn ${styles.btn}`} style={{ margin: "1rem 2rem" }}>
          <FaFilter style={{ margin: "0rem 0.3rem" }} />
          filters
        </button>
        <button className={`btn ${styles.btn}`} style={{ width: "9.8rem" }}>
          <FaPlus style={{ margin: "0rem 0.3rem" }} />
          create poll
        </button>
      </div>

      <div className="col-12 grid-margin" >
        <div className="card" style={{background: "#F8F9FF"}}>
          <div className="row">
            <div className="col-12 d-flex grid-margin">
              <div>
                <h5 style={{ fontWeight: "700", padding: "2rem" }}>
                  Create Poll
                </h5>
              </div>
              <div
                className="d-flex "
                style={{
                  flexFlow: "column-reverse",
                  marginBottom: "1rem",
                  marginLeft: "17rem",
                }}
              >
                <div>
                  <label
                    className={`form-label ${styles.eventLabel}`}
                    style={{ color: "black", fontWeight: "500" }}
                  >
                    Make thiz is a quiz
                  </label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className={`form-check-input ${styles.eventRadio}`}
                    type="checkbox"
                  />
                </div>
              </div>
            </div>

            <div className="text-right">
              {/* <i ><Form.Check type="switch"id="custom-switch" /></i>
								<p    style={{margin:" 0rem 7rem"}}>Make this quiz</p> */}
              {/* <div className='text-right'>
								
								<i style={{margin:"0rem 10rem"}}><Form.Check type="switch"id="custom-switch" /></i>
                                </div> */}
              {/* <div className="c1">
                                <div className="form-check form-switch">
                                    <input className={`form-check-input ${styles.eventRadio}`} 
                                    type="checkbox"
                                    style={{left:"17rem"}}
                                    />
                                </div>
                                <div>
                                <label className={`form-label ${styles.eventLabel}`}
                                    style={{color:"black",fontWeight:"500"}}
                                >add external registration link</label>
                                </div>    
								
                                </div> */}
            </div>
          </div>

          <div className="card-body">
            <form className="form-sample">
              {/* <p className="card-description"> Personal info </p> */}
              <div className="row">
                <div className="col-md-12">
                  <Form.Group className="row">
                    <div className="col-sm-12">
                      <p className="head2">Event Name</p>
                      <Form.Control type="text" placeholder="Event Name" />
                    </div>
                  </Form.Group>
                </div>
                {/* <div className="col-md-6">
								<Form.Group className="row">
									<div className="col-sm-12">
										<Form.Control type="text" placeholder="All Channel" />
									</div>
								</Form.Group>
							</div> */}
              </div>
              <div className="row">
                <div className="col-md-6">
                  <p className="head2">Start Date</p>
                  <Form.Group className="row,head23">
                    <div className="col-sm-12,head23">
                      <Form.Control type="date"></Form.Control>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <p className="head2">End Date</p>
                  <Form.Group className="row">
                    <div className="col-sm-10,head2">
                      <Form.Control type="date"></Form.Control>
                    </div>
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Question</Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Type here....."
                    />
                  </Form.Group>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Form.Group className="row">
                    <p className="head2">Option 1</p>
                    <div className="col-sm-12">
                      <Form.Control type="text" placeholder="Type here...." />
                    </div>
                    <div className={`${styles.cardHead1}`}>
                      <h5 style={{ fontWeight: "600", margin: "1rem 0.3rem" }}>
                        + ADD AN OPTION{" "}
                      </h5>
                    </div>
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  <Form.Group className="row">
                    <div className="col-sm-12">
                      <p className="head2">Option 2</p>
                      <Form.Control type="text" placeholder="tpe here..." />
                    </div>
                  </Form.Group>
                </div>
                <div className="text-right">
                  <Link
                    className={`btn ${styles.btn}`}
                    style={{ width: "9.8rem" }}
                    to="/user/polllist"
                  >
                    CREATE
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default createpoll;

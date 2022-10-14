// import React from "react";
// import "./services.css";
// import { FaStar } from 'react-icons/fa';
// import Ellipse from "../../img/Ellipse 13.png";
// import Ellipse1 from "../../img/Ellipse 12.png";
// import Ellipse2 from "../../assets/Logo/services.png";
// import Carousel from "react-elastic-carousel";
// import Item from "./Item";

// function service() {
// 	const breakPoints = [
// 		{ width: 1, itemsToShow: 1 },
// 		{ width: 550, itemsToShow: 2 },
// 		{ width: 1200, itemsToShow: 3 },
// 	];
// 	return (
// 		<>
// 			<section
// 				id="testimonials"
// 				className="services-area serviceSection services-eight">
// 				{/* <!--======  Start Section Title Five ======--> */}
// 				<div className="section-title-five">
// 					<div className="container">
// 						<div className="row">
// 							<div className="col-12">
// 								<div className="content">

// 									<h2 className="fw-bold">OVER 100+ SATISFIED</h2>
// 									<h2 className="fw-bold">CLIENTS SERVED</h2>
// 									{/* <p>
// 										Are you ready to be a part of KlivePay yet? See what others
// 										have to say!
// 									</p> */}
// 								</div>
// 							</div>
// 						</div>

// 					</div>
// 				</div>
// 			</section>
// 			<Carousel breakPoints={breakPoints} pagination={false} itemsToShow={3}>
// 				<Item>
// 					<section id="testimonials" className="services-area services-eight">
// 						<div className="section-title-five"></div>
// 						<div className="container">
// 							<div className="row">
// 								<div className="mx-auto col-lg-12 col-md-6">
// 									<div className="card cardSlider">
// 										<div className="card-body">
// 											<div className="single-services">
// 												<div className="d-flex mb-4">
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 												</div>
// 												<div className="service-content">
// 													<p>
// 														Lorem Ipsum is simply dummy text of the printing and typesetting industry.
// 														Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
// 													</p>
// 												</div>

// 												<div className="service-icon">
// 													<img src={Ellipse2} alt="testimonial" height={"75px"} style={{ borderRadius: "50%" }} />
// 													<div className="Paragrap">
// 														<h6>Charlie Kim</h6>
// 														<p>Finance Manager</p>
// 													</div>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</section>
// 				</Item>
// 				<Item>
// 					<section id="testimonials" className="services-area services-eight">
// 						<div className="section-title-five"></div>
// 						<div className="container">
// 							<div className="row">
// 								<div className="mx-auto col-lg-12 col-md-6">
// 									<div className="card cardSlider">
// 										<div className="card-body">
// 											<div className="single-services">
// 												<div className="d-flex mb-4">
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 												</div>
// 												<div className="service-content">
// 													<p>
// 														Lorem Ipsum is simply dummy text of the printing and typesetting industry.
// 														Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
// 													</p>
// 												</div>
// 												<div className="service-icon">
// 													<img src={Ellipse} alt="testimonial" height={"75px"} />
// 													<div className="Paragrap">
// 														<h6>Albert Flores</h6>
// 														<p>Head Of Finance</p>
// 													</div>
// 												</div>
// 												<div></div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</section>
// 				</Item>
// 				<Item>
// 					<section id="testimonials" className="services-area services-eight">
// 						<div className="section-title-five"></div>
// 						<div className="container">
// 							<div className="row">
// 								<div className="mx-auto col-lg-12 col-md-6">
// 									<div className="card cardSlider">
// 										<div className="card-body">
// 											<div className="single-services">
// 												<div className="d-flex mb-4">
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 												</div>
// 												<div className="service-content">
// 													<p>
// 														Lorem Ipsum is simply dummy text of the printing and typesetting industry.
// 														Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
// 													</p>
// 												</div>
// 												<div className="service-icon">

// 													<img src={Ellipse1} alt="testimonial" height={"75px"} />
// 													<div className="Paragrap">
// 														<h6>Charlie Kim</h6>
// 														<p>Finance Manager</p>
// 													</div>
// 												</div>
// 												<div></div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</section>
// 				</Item>
// 				<Item>
// 					<section id="testimonials" className="services-area services-eight">

// 						<div className="section-title-five"></div>

// 						<div className="container">
// 							<div className="row">
// 								<div className="mx-auto col-lg-12 col-md-6">
// 									<div className="card cardSlider">
// 										<div className="card-body">
// 											<div className="single-services">
// 												<div className="d-flex mb-4">
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 													<FaStar style={{ color: "#F5D700" }} />
// 												</div>
// 												<div className="service-content">
// 													<p>
// 														Lorem Ipsum is simply dummy text of the printing and typesetting industry.
// 														Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
// 													</p>
// 												</div>
// 												<div className="service-icon justify-content-between">
// 													<img src={Ellipse2} alt="testimonial" />
// 													<br />
// 													<div className="Paragrap">
// 														<h6>Theresa Webb</h6>
// 														<p>Head Of Finance</p>
// 													</div>
// 												</div>
// 												<div></div>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</section>
// 				</Item>
// 			</Carousel>
// 		</>
// 	);
// }

// export default service;

import React from "react";
import "./services.css";
import { FaStar } from "react-icons/fa";
import Ellipse from "../../../../assets/img/Ellipse 13.png";
import Ellipse1 from "../../../../assets/img/Ellipse 12.png";
import Ellipse2 from "../../../../assets/Logo/services.png";
import Carousel from "react-elastic-carousel";
import Item from "./Item";

function service() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div>
      <section
        id="testimonials"
        className="services-area serviceSection services-eight"
      >
        {/* <!--======  Start Section Title Five ======--> */}
        <div className="section-title-five">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="content" id="serviceservedback">
                  <h2 className="fw-bold">OVER 100+ SATISFIED</h2>
                  <h2 className="fw-bold">CLIENTS SERVED</h2>
                  {/* <p>
										Are you ready to be a part of KlivePay yet? See what others
										have to say!
									</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carousel breakPoints={breakPoints} pagination={false} itemsToShow={3}>
        <Item>
          <section id="testimonials" className="services-area services-eight">
            <div className="section-title-five"></div>
            <div className="container">
              <div className="row">
                <div className="mx-auto col-lg-12 col-md-6">
                  <div className="card cardSlider">
                    <div className="card-body">
                      <div className="single-services">
                        <div className="d-flex mb-4">
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                        </div>
                        <div
                          className="service-content"
                          style={{ color: "black" }}
                        >
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                          </p>
                        </div>

                        <div className="service-icon">
                          <img
                            src={Ellipse2}
                            alt="testimonial"
                            height={"75px"}
                            style={{ borderRadius: "50%" }}
                          />
                          <div className="Paragrap" style={{ color: "black" }}>
                            <h6>Charlie Kim</h6>
                            <p>Finance Manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Item>
        <Item>
          <section id="testimonials" className="services-area services-eight">
            <div className="section-title-five"></div>
            <div className="container">
              <div className="row">
                <div className="mx-auto col-lg-12 col-md-6">
                  <div className="card cardSlider">
                    <div className="card-body">
                      <div className="single-services">
                        <div className="d-flex mb-4">
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                        </div>
                        <div
                          className="service-content"
                          style={{ color: "black" }}
                        >
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                          </p>
                        </div>
                        <div className="service-icon">
                          <img
                            src={Ellipse}
                            alt="testimonial"
                            height={"75px"}
                          />
                          <div className="Paragrap" style={{ color: "black" }}>
                            <h6>Albert Flores</h6>
                            <p>Head Of Finance</p>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Item>
        <Item>
          <section id="testimonials" className="services-area services-eight">
            <div className="section-title-five"></div>
            <div className="container">
              <div className="row">
                <div className="mx-auto col-lg-12 col-md-6">
                  <div className="card cardSlider">
                    <div className="card-body">
                      <div className="single-services">
                        <div className="d-flex mb-4">
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                        </div>
                        <div
                          className="service-content"
                          style={{ color: "black" }}
                        >
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                          </p>
                        </div>
                        <div className="service-icon">
                          <img
                            src={Ellipse1}
                            alt="testimonial"
                            height={"75px"}
                          />
                          <div className="Paragrap" style={{ color: "black" }}>
                            <h6>Charlie Kim</h6>
                            <p>Finance Manager</p>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Item>
        <Item>
          <section id="testimonials" className="services-area services-eight">
            <div className="section-title-five"></div>

            <div className="container">
              <div className="row">
                <div className="mx-auto col-lg-12 col-md-6">
                  <div className="card cardSlider">
                    <div className="card-body">
                      <div className="single-services">
                        <div className="d-flex mb-4">
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                          <FaStar style={{ color: "#F5D700" }} />
                        </div>
                        <div
                          className="service-content"
                          style={{ color: "black" }}
                        >
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                          </p>
                        </div>
                        <div className="service-icon justify-content-between">
                          <img src={Ellipse2} alt="testimonial" />
                          <br />
                          <div className="Paragrap" style={{ color: "black" }}>
                            <h6>Theresa Webb</h6>
                            <p>Head Of Finance</p>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Item>
      </Carousel>
      <div></div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

export default service;

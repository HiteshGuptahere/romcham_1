// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import Rectangles1 from "../assets/img/Rectangles1.png"
// import Rectangles2 from "../assets/img/Rectangles2.png"
// import './Home.css'

// export const Banner = () => {
// 	// const [loopNum, setLoopNum] = useState(0);
// 	// const [isDeleting, setIsDeleting] = useState(false);
// 	// const [text, setText] = useState('');
// 	// const [delta, setDelta] = useState(300 - Math.random() * 100);
// 	// const [index, setIndex] = useState(1);
// 	// const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
// 	// const period = 2000;

// 	// useEffect(() => {
// 	//   let ticker = setInterval(() => {
// 	//     tick();
// 	//   }, delta);

// 	//   return () => { clearInterval(ticker) };
// 	// }, [text])

// 	// const tick = () => {
// 	//   let i = loopNum % toRotate.length;
// 	//   let fullText = toRotate[i];
// 	//   let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

// 	//   setText(updatedText);

// 	//   if (isDeleting) {
// 	//     setDelta(prevDelta => prevDelta / 2);
// 	//   }

// 	//   if (!isDeleting && updatedText === fullText) {
// 	//     setIsDeleting(true);
// 	//     setIndex(prevIndex => prevIndex - 1);
// 	//     setDelta(period);
// 	//   } else if (isDeleting && updatedText === '') {
// 	//     setIsDeleting(false);
// 	//     setLoopNum(loopNum + 1);
// 	//     setIndex(1);
// 	//     setDelta(500);
// 	//   } else {
// 	//     setIndex(prevIndex => prevIndex + 1);
// 	//   }
// 	// }

// 	return (
// 		<div>
// 			<section className="banner" id="home">
// 				<Container>
// 					<Row className="aligh-items-center">
// 						<Col xs={12} md={6} xl={7}>
// 							<TrackVisibility>
// 								{/* {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <span className="tagline">Welcome to my Portfolio</span>
//                 <h1>{`Hi! I'm Judy`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
//                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//                   <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
//               </div>} */}
// 								<span className="tagline">ROMANIAN CHAMBER</span>
// 								<h1>{`OF COMMERCE, SINGAPORE`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'></span></h1>
// 								<p>We serve and support a better business landscape build
// 									by authorities and top business professionals together.</p>
// 								<button >CREATE EVENT </button>
// 							</TrackVisibility>
// 						</Col>
// 						<Col xs={12} md={6} xl={5}>
// 							<TrackVisibility>
// 								{/* {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                   <img src={headerImg} alt="Header Img"/>
//                 </div>} */}
// 							</TrackVisibility>
// 						</Col>
// 					</Row>

// 				</Container>

// 			</section>

// 			<div className='head1'>
// 				<div className='header'>

// 					<img style={{ paddingBottom: "1rem", marginTop: "-160px" }} src={Rectangles1} alt="" />
// 				</div>
// 				<div className='box'>
// 					<img style={{ paddingBottom: "0rem" }} src={Rectangles2} alt="" />
// 					<div className='cards'>
// 						<div className='row'>
// 							<div className='col-xl-6 col-lg-4 col-md-4 col-sm-4 col-4'>
// 								<h5 className="card-title" style={{
// 									fontFamily: "Montserrat",
// 									fontStyle: "normal",
// 									fontWeight: "400",
// 									fontSize: "40px",
// 									lineHeight: "60px",

// 									letterSpacing: "0.02em",
// 									textTransform: "uppercase",

// 									color: "#FFAC2C"
// 								}}>Check Out Our Growing </h5>
// 								<h1 className="card-title" style={{
// 									fontFamily: "Montserrat",
// 									fontStyle: "normal",
// 									fontWeight: "700",
// 									fontSize: "40px",
// 									lineHeight: "60px",

// 									letterSpacing: "0.02em",
// 									textTransform: "uppercase",

// 									color: "#FFAC2C"
// 								}}> List Of Members</h1>
// 							</div>
// 							<div className='col-xl-6 col-lg-4 col-md-4 col-sm-4 col-4'>
// 								<button style={{
// 									color: "#002146",

// 									fontWeight: "700",
// 									textAlign: "center",
// 									display: "flex",
// 									padding: "30px",
// 									alignItems: "center",
// 									height: "35px",
// 									width: "190px",

// 									top: "648px",
// 									borderRadius: "60px",
// 									margin: "1rem 5rem",
// 									background: " linear-gradient(267.02deg, #FDCF17 4.24%, #F58935 94.31%)"
// 								}}>READ MORE</button>
// 							</div>
// 							{/* <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4'>
//           <div className="card" style={{height: "478px"}}>
//             <div className="card-body">
//               <h5 className="card-title">YOUR COMMITEE</h5>
//               <p className="card-text">
//               You're already a member of these<br/> Rochamp Committee
//               </p><br/>
//                <div className='section'>
//                <h6 style={{backgroundColor: "#F8F8F8"}}><span><TbAlertCircle/></span>&nbsp;&nbsp;&nbsp;&nbsp;IXIONO</h6><br/>
//                <h6><span><TbAlertCircle/></span>&nbsp;&nbsp;&nbsp;&nbsp;IXIONO</h6><br/>
//                <h6 style={{backgroundColor: "#EABB31"}}><span><TbAlertCircle/></span>&nbsp;&nbsp;&nbsp;&nbsp;IXIONO</h6><br/>
//                <h6><span><TbAlertCircle/></span>&nbsp;&nbsp;&nbsp;&nbsp;IXIONO</h6><br/>
//                <h6 style={{backgroundColor: "#F8F8F8"}}><span><TbAlertCircle/></span>&nbsp;&nbsp;&nbsp;&nbsp;IXIONO</h6><br/>
//                </div>
//              </div>
//            </div>
//           </div> */}
// 							{/* <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4'>
//           <div className="card" style={{height: "450px"}}>
//             <div className="card-body">
//               <h5 className="card-title">CREATE YOUR COMMITEE</h5>
//               <p className="card-text">
//               Create your committee on Rochamp and manage it like <br/>
//               a pro: chats, discussions, groups, events, polls all
//                at <br/> one place.
//               </p>
//               <div className='button'>
//               <button type="button" className="btn btn-warning">Get Started</button>

//               </div>
//              </div>
//            </div>
//           </div> */}
// 						</div>
// 					</div>
// 					{/* <div className='Rectangle4'>
//         <div className='row'>
//            <div className='col'>
//            <h2>NEED HELP TO DECIDE?</h2>
//            <p>Contact Management and Development team</p>
//            </div>
//            <div className='col'>
//              <button type="button" className="btn btn-light btn-lg">CONTACT US</button>
//            </div>
//         </div>
//        </div> */}
// 					{/* <div className='footer'>
//         <div className='container'>
//          <table className="table">
//            <thead>
//             <th scope="col">© 2022 Rocham Singapore All Rights Reserved.&nbsp;|</th>
//             <th scope="col">Vision</th>
//             <th scope="col">Benefits</th>
//             <th scope="col">Membership</th>
//             <th scope="col">Contact</th>
//             <th scope="col">|</th>&nbsp;
//             <th scope="col">contact Us:</th>
//             <th scope="col">
//               <div className='icons'>
//               <svg xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               className="bi bi-telephone"
//               viewBox="0 0 16 16">
//               <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
//               </svg>
//               </div>
//               </th>
//             <th scope="col">123456789 0</th>
//             <th scope="col">
//               <div className='icons'>
//               <svg xmlns="http://www.w3.org/2000/svg"
//               width="16"
//               height="16"
//               fill="currentColor"
//               className="bi bi-envelope"
//               viewBox="0 0 16 16">
//               <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
//               </svg>
//               </div>
//               </th>
//             <th scope="col">support@Rochamsingapore.com</th>
//             <th scope="col">
//               <div className='icons'>
//               <svg xmlns="http://www.w3.org/2000/svg"
//                width="16"
//                height="16"
//                fill="currentColor"
//                className="bi bi-facebook"
//                viewBox="0 0 16 16">
//                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
//                </svg>
//                 &nbsp;&nbsp;
//                <svg xmlns="http://www.w3.org/2000/svg"
//                width="16"
//                height="16"
//                fill="currentColor"
//                className="bi bi-instagram"
//                viewBox="0 0 16 16">
//                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
//                </svg>
//               </div>
//               </th>
//           </thead>
//         </table>
//        </div>
//       </div> */}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

import React from "react";
import banner1 from "../../../assets/img/banner1.png";
import styles from "./banner.module.css";
import pic8 from "../../../assets/pic8.png";
import pic9 from "../../../assets/pic9.png";

export const Banner = () => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src={banner1}
          className={`img-fluid w-100 ${styles.ig}`}
          alt="banner1"
        />
        <div className={`${styles.bannerHeadAlign}`}>
          <h2 className={`${styles.bannerHead}`}>
            romanian chamber <br></br>
            <span className="mt-2">of commerce, singapore</span>
          </h2>
          <p>
            We serve and support a better business landscape build by
            authorities and top <br></br>business professionals together.
          </p>
          <button className={`btn btn-primary ${styles.bannerBtn}`}>
            Create event
          </button>
        </div>

        <div className={`${styles.memberHeight}`}>
          <div style={{ position: "relative" }} className="">
            <img
              src={pic9}
              alt="pic7"
              style={{}}
              className={`w-100 ${styles.orangeBanner}`}
            />
            <img src={pic8} alt="pic8" className={`${styles.whiteBanner}`} />
            <div className={`${styles.checkList}`}>
              <div>
                <h6>check out our growing</h6>
                <h5>list of members</h5>
              </div>

              <div>
                <button className={`btn btn-primary ${styles.bannerBtn}`}>
                  Create event
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

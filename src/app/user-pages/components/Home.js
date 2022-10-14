// import React from 'react';
// import b2 from '../assets/img/b2.png'
// import b3 from '../assets/3 steps.png'
// import b4 from '../assets/img/b4.png'
// import logos1 from '../assets/img/logos1.png'
// import logos2 from '../assets/img/logos2.png'
// import './Home.css'

// export const Home = () => {

// 	return (
// 		<div>

// 			<div>
// 				<div className="card mb-3">
// 					<h1 style={{
// 						fontFamily: 'Montserrat',
// 						fontStyle: "normal",
// 						fontWeight: "700",
// 						fontSize: "48px",
// 						lineHeight: "60px",
// 						marginTop: "5rem",
// 						/* identical to box height, or 125% */

// 						textAlign: "center",
// 						textTransform: "uppercase", color: "#4E6FB7"
// 					}} >THE VISION WE SHARE</h1>
// 					<div className="row g-0">
// 						<div className="col-md-4">
// 							<img style={{ marginLeft: "8rem" }} src={b2} className="img-fluid rounded-start" alt="..." />
// 						</div>
// 						<div className="col-md-6">
// 							<div className="card-body" style={{ margin: "10rem 2rem" }}>
// 								<h5 className="card-title" style={{ color: "#FFAC2C", margin: "1rem 5rem" }}>about us</h5>
// 								<p className="card-text" style={{ color: "#7F7F7F", margin: "1rem 5rem", fontFamily: "Rubik" }}>To build a Business platform and Open Forum willing to bring significance and opening new and solid bridges through constructive dialog and comprehensive multifaceted approaches.</p>
// 								<button style={{
// 									color: "#002146",

// 									fontWeight: "600",

// 									display: "flex",
// 									padding: "30px",
// 									alignItems: "center",
// 									height: "35px",
// 									width: "190px",
// 									left: "57px",
// 									top: "648px",
// 									borderRadius: "50px",
// 									margin: "2rem 5rem",
// 									background: " linear-gradient(267.02deg, #FDCF17 4.24%, #F58935 94.31%)"
// 								}}>READ MORE</button>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="card mb-3" >
// 						<h1 style={{
// 							fontFamily: 'Montserrat',
// 							fontStyle: "normal",
// 							fontWeight: "700",
// 							fontSize: "48px",
// 							lineHeight: "60px",
// 							paddingBottom: "5rem",
// 							textAlign: "center",
// 							textTransform: "uppercase", color: "#4E6FB7"
// 						}} >ROCHAM BENEFITS</h1>

// 						<img style={{ marginLeft: "8rem", paddingRight: "15rem" }} src={b3} className="img-fluid rounded-start" alt="..." />
// 						<img style={{ marginLeft: "8rem", paddingRight: "15rem" }} src={b4} className="img-fluid rounded-start" alt="..." />
// 						<img className="cards2" style={{ width: "60px", height: "60px", marginLeft: "290px", marginTop: "-683px", marginBottom: "40rem" }} src={logos1} className="img-fluid rounded-start" alt="..." />
// 						<img style={{ width: "60px", height: "60px", marginLeft: "736px", marginTop: "-699px", marginBottom: "40rem" }} src={logos2} className="img-fluid rounded-start" alt="..." />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)

// }

import React from "react";
import b2 from "../../../assets/img/b2.png";
import b3 from "../../../assets/img/group.png";
import styles from "./home.module.css";
export const Home = () => {
  return (
    <div>
      <div className={`mt-3 ${styles.visionShare}`}>
        <h3>the vision we share</h3>
      </div>
      <div className={`container`}>
        <div className="row">
          <div className="col-md-6 col-12">
            <img src={b2} className="w-100" alt="b2" />
          </div>

          <div className="col-md-6 col-12">
            <div className={`${styles.visionAbout}`}>
              <h5>about us</h5>
              <p>
                To build a Business platform and Open Forum willing to bring
                significance and opening new and solid bridges through
                constructive dialog and comprehensive multifaceted approaches.
              </p>
              <div className={`${styles.visionBtnAlign}`}>
                <button className={`${styles.visionBtn}`}>READ MORE</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ROCHAM benefits */}
      <div style={{ position: "relative" }}>
        <div className={`mt-3 ${styles.visionShare}`}>
          <h3>rocham benefits</h3>
        </div>
        <div className={`${styles.visionImg}`}>
          <img src={b3} className="w-100" alt="b3" />
        </div>
      </div>
    </div>
  );
};

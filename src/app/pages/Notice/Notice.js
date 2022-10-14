import React from "react";
import "./Notice.css";
import { AiOutlineFileAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

function Notice() {
  return (
    <>
      <div className="">
        <div>
          {/* <div className="card-header" style={{height: "100vh",width: "900px"}}>
    
    </div> */}
        </div>
        <div className="">
          <div
            className="card-header"
            style={{
              height: "100vh",
              width: "300px",
              marginLeft: "120px",
              borderTopLeftRadius: "50px",
            }}
          >
            <div className="title">
              <h4>
                <b>Notice Board</b>
              </h4>
            </div>
            <hr />
            <div
              className="card-header"
              style={{
                height: "160px",
                width: "260px",
                position: "relative",
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <div className="container">
                <div className="circular-progress">
                  <div className="value-container">
                    <AiOutlineFileAdd />
                  </div>
                </div>
              </div>

              <div className="text">
                <p>
                  Add files or links that are <br />
                  important to this
                  <br />
                  community.
                </p>
              </div>
              <div style={{marginTop:"6rem"}}>
                {/* CREATE NOTICE */}
                {/* <Link  className="btn btn-success btn-lg" to="/user/PopUp"><b>CREATE NOTICE</b></Link> */}
                <Link
                  className={`btn btn-primary`}
                  style={{ width: "9.8rem" , borderRadius:"100px",background:"#2EB67D"}}
                  to="/user/PopUp"
                >
                  Create Notice
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Link
        className={`btn btn-primary`}
        style={{ width: "9.8rem" }}
        to="/user/PopUp"
      >
        view details
      </Link> */}
    </>
  );
}

export default Notice;
// import React from 'react';
// import './Notice.css';
// import { AiOutlineFileAdd } from 'react-icons/ai';
// import { Link } from "react-router-dom";

// function Notice() {
//   return (
//     <>
//         <div className='row'>
//   <div className='col-8'>
//     {/* <div className="card-header" style={{height: "100vh",width: "900px"}}>

//     </div> */}
//   </div>
//   <div className='col-3'>
//     <div className="card-header" style={{height: "100vh",width: "300px",marginLeft: "120px",borderTopLeftRadius: "50px",}}>
//      <div className='title'>
//       <h4><b>Notice Board</b></h4>
//      </div>
//      <hr/>
//        <div className="card-header" style={{height: "140px",width: "260px",position: "relative",backgroundColor: "white",borderRadius: "10px"}}>
//           <div className='container'>
//                <div className='circular-progress'>
//                    <div className='value-container'>
//                      <AiOutlineFileAdd/>
//                    </div>
//               </div>
//           </div>
//           <div className='text'>
//             <p>Add files or links that are <br/>
//             important to this
//             <br/>community.</p>
//           </div>
//           <div className='button'>
//               <button type="button" className="btn btn-success btn-lg" ><b>CREATE NOTICE</b></button>
//           </div>
//        </div>
//     </div>
//    </div>

// </div>

//     </>
//   )
// }

// export default Notice

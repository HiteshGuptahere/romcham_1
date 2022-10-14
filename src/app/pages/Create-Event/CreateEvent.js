import React from 'react';
import { FaFile,FaImages} from 'react-icons/fa';
import styles from './styles.module.css';
import { Link } from "react-router-dom";
const CreateEvent=()=>{

    return(

        <>
            <div className={`card ${styles.card}`}>
                <div className={`card-body`}>

                    <h5 className={`form-label ${styles.eventLabel}`} style={{color:"black",fontWeight:"500"}}>create event</h5>
                    <label className={`${styles.eventLabel}`}>event photo</label>
                    <div className={`${styles.eventImg}`}>
                        <FaImages className={`${styles.upImg}`}/>
                    </div>
                    
                    <div className='row mt-5'>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                          <div>
                               <label className={`form-label ${styles.eventLabel}`}>event name</label>

                                <input type="text" className={`form-control ${styles.eventInput}`} 
                                    placeholder="Event Name"
                                />
                            </div>
                            <div className='row mt-3'>
                            <label className={`form-label ${styles.eventLabel}`}>start</label>

                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                                    
                                    <div>
                                        
                                        <input type="date" className={`form-control mt-1 ${styles.eventInput}`} 
                                            placeholder="Event Name"
                                        />
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                                <div>
                                       
                                    <input type="date" className={`form-control mt-1 ${styles.eventInput}`} 
                                        placeholder="Event Name"
                                    />
                                </div>

                                </div>        
                            </div>
                        </div>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                        <div>
                            <label className={`form-label ${styles.eventLabel}`}>location</label>

                            <input type="text" className={`form-control ${styles.eventInput}`} 
                                placeholder="Type Location..."
                            />
                        </div>

                        <div className='row mt-3'>
                            <label className={`form-label ${styles.eventLabel}`}>end</label>

                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                                    
                                    <div>
                                        
                                        <input type="date" className={`form-control mt-1 ${styles.eventInput}`} 
                                            placeholder="Event Name"
                                        />
                                    </div>
                                </div>
                                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                                <div>
                                       
                                    <input type="date" className={`form-control mt-1 ${styles.eventInput}`} 
                                        placeholder="Event Name"
                                    />
                                </div>

                                </div>        
                            </div>

                        </div>                            
                    </div>
                    <div class="mt-3" style={{position:"relative"}}>
                    <div className={`${styles.faupload}`}>
                        <FaFile className={`${styles.FaFile}`}/>
                    </div>
                    <textarea className={`form-control ${styles.textarea}`} 
                        placeholder="Type here...">
                    
                        </textarea>
                    </div>

                    <div className='row mt-5'>

                        <label className={`form-label ${styles.eventLabel}`}>organizer deatils</label>
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                          <div>
                                <input type="text" className={`form-control ${styles.eventInput}`} 
                                    placeholder="Event Email address"
                                />
                            </div>

                            <div className="c1">
                                <div className="form-check form-switch">
                                    <input className={`form-check-input ${styles.eventRadio}`} type="checkbox"/>
                                </div>
                                <div>
                                <label className={`form-label ${styles.eventLabel}`}
                                    style={{color:"black",fontWeight:"500"}}
                                >capture attendance</label>
                                </div>    
                            </div>                            
                        </div>
  
                        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                        <div>
                          
                            <input type="text" className={`form-control ${styles.eventInput}`} 
                                placeholder="phone"
                            />
                        </div>

                        <div className="c1">
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
                            </div>

                        </div>                            
                    </div> 
                    <div style={{textAlign:"right"}}>
                        <Link className={`btn ${styles.btn}`} to="">save & preview</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateEvent;
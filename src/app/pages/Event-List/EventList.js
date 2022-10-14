import React from 'react'
import { FaFilter, FaPlus, FaArrowDown } from 'react-icons/fa'
import Logo from '../../../assets/img/rectangle.png'
import profile from '../../../assets/img/profile.png'
import styles from './styles.module.css'
import { Link } from 'react-router-dom'
const EventList = () => {
  return (
    <>
      <div className="text-right">
        <button className={`btn ${styles.btn}`} style={{ margin: '0rem 1rem' }}>
          <FaFilter style={{ margin: '0rem 0.3rem' }} />
          filters
        </button>
        <Link to="/CreateEvent/CreateEvent">
          <button className={`btn ${styles.btn}`} style={{ width: '9.8rem' }}>
            <FaPlus style={{ margin: '0rem 0.3rem' }} />
            create event
          </button>
        </Link>
      </div>
      <div className={`card mt-3 ${styles.card}`}>
        <div className={`card-body`}>
          <div className="d-flex justify-content-between mt-3">
            <div className="d-flex">
              <div>
                <img src={profile} alt="profile" width="70rem" />
              </div>

              <div style={{ padding: '0rem 2rem' }}>
                <h5 style={{ textTransform: 'capitalize', fontWeight: '500' }}>
                  anddy&apos;s makeover
                </h5>
                <p style={{ textTransform: 'capitalize', color: '#C2C2C2' }}>id:123456</p>
              </div>
            </div>

            <div>
              <FaArrowDown style={{ cursor: 'pointer' }} />
            </div>
          </div>
          <div className="mt-4">
            <img src={Logo} className="img-fluid" alt="logo" />
          </div>
          <div className="card mt-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card-body">
              <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12">
                  <div>
                    <h6 className={`${styles.heading}`}>aug 26</h6>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className={`${styles.cardHead}`}>
                    <h5 style={{ fontWeight: '600' }}>ixiono</h5>
                    <p style={{ textTransform: 'capitalize', fontWeight: 'normal' }}>
                      1 going - 0 intersted
                    </p>
                  </div>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="text-right">
                    <Link
                      className={`btn ${styles.btn}`}
                      style={{ width: '9.8rem' }}
                      to="/Event-Details/EventDetails"
                    >
                      view details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between mt-5">
            <div className="d-flex">
              <div>
                <img src={profile} alt="profile" width="70rem" />
              </div>

              <div style={{ padding: '0rem 2rem' }}>
                <h5 style={{ textTransform: 'capitalize', fontWeight: '500' }}>
                  anddy&apos;s makeover
                </h5>
                <p style={{ textTransform: 'capitalize', color: '#C2C2C2' }}>id:123456</p>
              </div>
            </div>

            <div>
              <FaArrowDown style={{ cursor: 'pointer' }} />
            </div>
          </div>
          <div className="mt-4">
            <img src={Logo} className="img-fluid" alt="logo" />
          </div>

          <div className="card mt-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="card-body">
              <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12">
                  <div>
                    <h6 className={`${styles.heading}`}>aug 26</h6>
                  </div>
                </div>

                <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                  <div className={`${styles.cardHead}`}>
                    <h5 style={{ fontWeight: '600' }}>ixiono</h5>
                    <p style={{ textTransform: 'capitalize', fontWeight: 'normal' }}>
                      1 going - 0 intersted
                    </p>
                  </div>
                </div>

                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="text-right">
                    <Link
                      className={`btn ${styles.btn}`}
                      style={{ width: '9.8rem' }}
                      to="/Event-Details/EventDetails"
                    >
                      view details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventList

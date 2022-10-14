import React from 'react'
import { Button } from 'react-bootstrap'
import { FaFilter, FaPlus, FaImages } from 'react-icons/fa'
import Logo from '../../../assets/img/rectangle.png'
import styles from './styles.module.css'

const EventDetails = () => {
  return (
    <>
      <div className="text-right">
        <button className={`btn ${styles.btn}`} style={{ margin: '0rem 1rem' }}>
          <FaFilter style={{ margin: '0rem 0.3rem' }} />
          filters
        </button>
        <button className={`btn ${styles.btn}`} style={{ width: '9.8rem' }}>
          <FaPlus style={{ margin: '0rem 0.3rem' }} />
          create event
        </button>
      </div>
      <div className={`card mt-3 ${styles.card}`}>
        <div className={`card-body`}>
          <h5
            className={`form-label ${styles.eventLabel}`}
            style={{ color: 'black', fontWeight: '500' }}
          >
            event deatils
          </h5>
          <label className={`${styles.eventLabel}`}>event photo</label>
          <div>
            <img src={Logo} className="img-fluid" alt="logo" />
          </div>
          <div className="mt-3 row">
            <label className={`col-sm-4 col-form-label ${styles.eventLabelDetails}`}>
              event name
            </label>
            <div className="col-sm-8">
              <label className={`col-sm-4 col-form-label ${styles.eventLabel}`}>ixiono</label>
            </div>
          </div>
          <div className="mb-3 row">
            <label className={`col-sm-4 col-form-label ${styles.eventLabelDetails}`}>
              event description
            </label>
            <div className="col-sm-8">
              <label className={`col-sm-12 col-form-label ${styles.eventLabel}`}>
                Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s.
              </label>
            </div>
          </div>
          <div className="mb-3 row">
            <label className={`col-sm-4 col-form-label ${styles.eventLabelDetails}`}>
              event start time
            </label>
            <div className="col-sm-8">
              {/* <label className={`col-sm-4 col-form-label ${styles.eventLabel}`}>ixiono</label> */}

              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <input
                    type="date"
                    className="form-control"
                    style={{ border: 'none', background: 'none' }}
                  />{' '}
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <input
                    type="date"
                    className="form-control"
                    style={{ border: 'none', background: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 row">
            <label className={`col-sm-4 col-form-label ${styles.eventLabelDetails}`}>
              event end time
            </label>
            <div className="col-sm-8">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <input
                    type="date"
                    className="form-control"
                    style={{ border: 'none', background: 'none' }}
                  />{' '}
                </div>

                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <input
                    type="date"
                    className="form-control"
                    style={{ border: 'none', background: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 row">
            <label className={`col-sm-4 col-form-label ${styles.eventLabelDetails}`}>
              event description
            </label>
            <div className="col-sm-8">
              <label className={`col-sm-12 col-form-label ${styles.eventLabel}`}>
                akshya nagar 1st block 1st cross,ramamurthy nagar,banglore-560016
              </label>
            </div>
          </div>
          <div className="text-right">
            <Button className={`btn ${styles.btn}`} style={{ width: '9.8rem' }}>
              publish
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(EventDetails)

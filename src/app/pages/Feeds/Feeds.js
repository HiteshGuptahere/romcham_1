import React from 'react'
import { FaSms, FaThList, FaFile, FaUserPlus } from 'react-icons/fa'
import styles from './styles.module.css'
const Feeds = () => {
  return (
    <>
      <div className={`card ${styles.card}`}>
        <div className="card-body">
          <div className={`${styles.header}`}>
            <h5 className={`${styles.heading}`}>
              <FaSms className={`${styles.FaSms}`} />
              discussion
            </h5>
            <FaThList />
          </div>

          <div className="mb-3">
            <textarea
              className={`form-control ${styles.textarea}`}
              placeholder="Start A Discussion"
            ></textarea>
          </div>

          <div className={`${styles.footer}`}>
            <div className={`${styles.faupload}`}>
              <FaFile className={`${styles.FaFile}`} />
            </div>
            <div style={{ paddingLeft: '1rem' }}>
              <button className={`btn btn-warning ${styles.button}`}>post</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="card" style={{ backgroundColor: '#F9FAFF', boxShadow: 'none' }}>
            <div className={`card-body  ${styles.cardBody}`}>
              <div style={{ fontSize: '3rem', color: '#2FB67D' }}>
                <FaUserPlus />
              </div>
              <div>
                <h6 className={`${styles.createnewgroup}`}>create new group</h6>
                <p style={{ color: '#C5C6C9' }}>
                  simply decide on a subject and choose <br></br>who to invite
                </p>
                <div>
                  <button className={`btn btn-warning ${styles.createBtn}`}>post</button>
                </div>

                <div style={{ marginTop: '5rem' }} className={`${styles.fauser}`}>
                  <FaUserPlus className={`${styles.fauserplus}`} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="card" style={{ backgroundColor: '#F9FAFF', boxShadow: 'none' }}>
            <div className={`card-body  ${styles.cardBody}`}>
              <div style={{ fontSize: '3rem', color: '#4E6EB7' }}>
                <FaUserPlus />
              </div>
              <div>
                <h6 className={`${styles.createnewgroup}`}>add new members</h6>
                <p style={{ color: '#C5C6C9' }}>
                  simply decide on a subject and choose <br></br>who to invite
                </p>
                <div>
                  <button className={`btn btn-warning ${styles.addmember}`}>add people</button>
                </div>

                <div style={{ marginTop: '5rem' }} className={`${styles.fauser}`}>
                  <FaUserPlus className={`${styles.fauserplus}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default React.memo(Feeds)

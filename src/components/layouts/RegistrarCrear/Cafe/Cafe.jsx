import React from 'react'
import styles from './Cafe.module.css';
/* import img_front from "./img/Image_front.jpg"; */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import logo from "./Logo.png"

export function Cafe() {
  return (
    <div className={styles.cn}>
          <div className={styles.container}>
    <input type="checkbox"  className={styles.flip} id="flip" />
    <div className={styles.cover}>
      <div className={styles.front}>
        <img className={styles['imgContainer']} src='https://metropoliabierta.elespanol.com/uploads/s1/83/27/49/cafeteri-a.jpeg' alt="" />
        <div className={styles.text}>
          <img src={logo}  className={styles.logoForm} alt=''></img>
          <span className={styles['text-1']}>Every new friend is <br /> a new adventure</span>
          <span className={styles['text-2']}>Let's get connected</span>
        </div>
      </div>
    </div>
    <form action="#">
      <div className={styles['form-content']}>
        <div className={styles['login-form']}>
          <div className={styles.title}>Login Cafe</div>
          <div className={styles['input-boxes']}>
            <div className={styles['input-box']}>
              <i className={`fas fa-envelope ${styles['icon']}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <input type="text" placeholder='Enter your email' required />
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-lock ${styles['icon']}`}>
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" placeholder='Enter your password' required />
            </div>
            <div className={styles.text}><a href=''>Forget password?</a></div>
            <div className={`${styles['button']} ${styles['input-box']}`}>
              <i className={`fas fa-envelope ${styles['icon']}`}></i>
              <button className={styles['button-form']} type='submit'>Log In</button>
            </div>
            <div className={styles['text login-text']}>Don't have an account? <label htmlFor="flip">SigUp now</label></div>
          </div>
        </div>

        <div className={styles['signup-form']}>
          <div className={styles.title}>SignUp Cafe</div>
          <div className={styles['input-boxes']}>
            <div className={styles['input-box']}>
              <i className={`fas fa-user ${styles['icon']}`}>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <input type="text" placeholder='Enter your name' required />
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-envelope ${styles['icon']}`}>
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <input type="text" placeholder='Enter your email' required />
            </div>
            <div className={styles['input-box']}>
              <i className={`fas fa-lock ${styles['icon']}`}>
                <FontAwesomeIcon icon={faLock} />
              </i>
              <input type="password" placeholder='Enter your password' required />
            </div>
            <div className={`${styles['button']} ${styles['input-box']}`}>
              <i className={`fas fa-envelope ${styles['icon']}`}></i>
              <button className={styles['button-form']} type='submit'>Sig Up</button>
            </div>
            <div className={styles['text signup-text']}>Already have an account? <label htmlFor="flip">Login now</label></div>
          </div>
        </div>
      </div>
    </form>
  </div>
    </div>
    )
}
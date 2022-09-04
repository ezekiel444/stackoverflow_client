import React, { Fragment } from "react";

import {ReactComponent as GitHub} from "../../../assets/GitHub.svg";
import {ReactComponent as Database} from "../../../assets/Database.svg";

import './Footer.styles.scss';

const Footer = () => {
  return <Fragment>
    <div className='footer'>
      <div className="socials">
        <div className="social-item">
          <a
            href='https://github.com/ezekiel444/stackoverflow_client'
            target='_blank'
            rel="noreferrer"
          >
            <GitHub/>
          </a>
          <p><strong>Frontend</strong></p>
        </div>
        <div className="social-item">
          <a
            href='https://github.com/ezekiel444/stackover_api'
            target='_blank'
            rel="noreferrer"
          >
            <Database/>
          </a>
          <p><strong>Backend</strong></p>
        </div>
      </div>
    </div>
      <div className="group4">
       <p>Simplon P#20 Groupe4 -Matomi, Aley, Salem, Mehdi. </p>
       <br />
      </div>
       <p>Source code owner Mayank0255 </p>
  </Fragment>
};

export default Footer;
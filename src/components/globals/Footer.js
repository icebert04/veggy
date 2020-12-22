import React, { Component } from "react";
import Plant from "../../images/Plant-Based.jpg";
import { Link } from "gatsby";

import { GrFacebook, GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

export default class Futer extends Component {
  render() {
    return (
      <section className="footer">
        <div className="footer-center">
          <article className="footer-item">
            <h5 className="footer-title">contact us</h5>
            <h6>For inquiries, orders, memberships, <br />and others</h6>

            <p>
              <b>
                <MdPhoneIphone />
              </b>
              0917-5691002
            </p>

            <p>
              <b>
                <FaPhoneAlt />
              </b>{" "}
              02-88090130
            </p>

            <br />
            <p>
              <b>
                <GrMail />
              </b>{" "}
              admin@veggy.com
            </p>
            <br />
           
          </article>

          <article className="footer-item">
            <div>
              <h5  className="footer-title">Green Manila</h5>
              <p>Build small Vertical Farms in our own homes</p>
              <a
                className="footer-btn"
                href="/"
                target="_new"
              >
                Join
              </a>
            </div>
            <div>
              <img src={Plant} className="footer-image" alt="Let's Green Up" />
            </div>
          </article>

          <div className="footer-item">
            <h5  className="footer-title">Site Links</h5>
            <ul className="footer-sites footer-link">
            <li>
            <Link to="/" target="_blank">
              get involved
            </Link>
            </li>
              <div className="seperator" />
            <li>
            <Link to="/" target="_blank">
              business opportunities
            </Link>
            </li>
              <div className="seperator" />
            <li>
                <Link to="/" target="_blank">
                  sell your products here
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-item">
            <span>
              <GrFacebook />
            </span>
            <h5  className="footer-title">Join our exclusive facebook group</h5>

            <p>
              Become part of our substantial & vibrant<br />"Plant-Based Community"
              
            </p>
            <a
              href="/"
              target="_new"
              className="footer-btn"
            >
              Join Now
            </a>
          </div>
        </div>

        <h6 className="copyright text-yellow">©2020 Balay Agila <br /> All Rights Reserved</h6>
      </section>
    );
  }
}
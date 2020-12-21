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
            <h6>Our team is at your disposal</h6>

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
              admin@balayagila.com
            </p>
            <br />
           
          </article>

          <article className="footer-item">
            <div>
              <h5  className="footer-title">Our Philippine Eagle is diminishing</h5>
              <p>Help the Philippine Eagle Foundation in your own way</p>
              <a
                className="footer-btn"
                href="https://www.philippineeaglefoundation.org/"
                target="_new"
              >
                Donate
              </a>
            </div>
            <div>
              <img src={Plant} className="footer-image" alt="Plant Based" />
            </div>
          </article>

          <div className="footer-item">
            <h5  className="footer-title">Site Links</h5>
            <ul className="footer-sites footer-link">
            <li>
            <Link to="/apply" target="_blank">
              FAQ
            </Link>
            </li>
              <div className="seperator" />
            <li>
            <Link to="/apply" target="_blank">
              insurance
            </Link>
            </li>
              <div className="seperator" />
            <li>
                <Link to="/apply" target="_blank">
                  Apply As Landlord
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
              Become part of our substantial & vibrant "Hosting Community"
              <br /> Get inside access
            </p>
            <a
              href="https://www.facebook.com/groups/203282164142189/"
              target="_new"
              className="footer-btn"
            >
              Join Now
            </a>
          </div>
        </div>

        <h6 className="copyright text-yellow">©2020 Balay Agila - All Rights Reserved</h6>
      </section>
    );
  }
}
import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";


// import BackgroundSection from "../components/globals/BackgroundSection";
// import Info from '../components/Home/info';


import Plant from "../images/Plant-Based.jpg";


// icons 
import {MdDirectionsBike} from "react-icons/md"
import {FcPhoneAndroid} from "react-icons/fc"
import {GiHotMeal} from "react-icons/gi"


const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    
    {/* <div className="row"><BackgroundSection 
      img={data.img.childImageSharp.fluid}
      title="" 
      styleClass="about-background "
      //styleClass="about-background" 
      />
    </div> */}
    
      <section id="about" >
      <div className="about-title">
        <h1>About Us</h1>
        <p className="lead text-muted mb-5">
        Good Pizza was founded by Ben Berman, <br/> a graduate student studying for his MBA at the Wharton School of the University of Pennsylvania.
        </p>
        <br/>
        <p className="lead text-muted mb-5">
        When the pandemic hit Philadelphia in March of 2020, Ben had a big batch of dough that he was planning to make into pizzas for a get together with friends.
        <br/>
        After realizing that large gatherings probably weren't the best idea, Ben needed a plan to get rid of all that dough...
                </p>
      </div>
            <div className="fullscreen-row">
            <div className="text-center">
            <div className="black-background colored-background">
            <h1 className="h1-1">I'm Ben and this is Good Pizza.</h1>
            <p>
              What's Good Pizza? Well, I make about 20 pizzas a week in my apartment, give them away for free, and hope to raise some money for good causes. And if it can make a few people smile along the way, that's great too. It's that simple. Every penny that comes in is given to a charity. Every pizza that's eaten is made in my home electric oven. It's a hobby turned into a chance to give back and I am so thankful for your support.
            </p>
            
            </div>
            
            <div className="white-background colored-background step">
            <h1 className="h1-1"> How It Works </h1>
            <p>We make about 20 pizzas a week and give them away for free. How do you get one? Sign up for a pizza drop lottery! Pizza is free; donations are always appreciated and 100% of what comes in is given away to good causes.</p>
            
            <ul className="li li-4">
              <li>
              
              <h2>STEP 1. ENTER the LOttery for a pizza drop</h2>
              <p> </p>
              
              <span className="icon">
                <FcPhoneAndroid/>
              </span>
              
              </li>
              <li>
            
              <h2>STEP 2. SCHEDULE YOUR PICKUP</h2>
              <p> </p>

              <span className="icon">
                <MdDirectionsBike/>
              </span>
              </li>
              <li>
              
              <h2>STEP 3. EAT!</h2>
              <p> </p>
              <span className="icon">
                <GiHotMeal/>
              </span>
              </li>
            </ul>
            
            
            </div>
            

            <div className="grey-background colored-background">
            <h1 className="h1-1">WHO WE HELP</h1>
            <p>All proceeds go to causes we think make the world a better place.</p>
              <Link to="/">
                <button className="btn text-uppercase btn-green">See Our Causes & Support</button>
              </Link>
            </div>
            


            <div className="white-background colored-background instagram">
                <h1 className="h1-1">Follow  Us On Instagram</h1>
                  <a className="instagram-link" href="https://www.instagram.com" target="_blank">@veggieVerde</a>
                  <img src={Plant}/>
                </div>
            
            
            </div>
            </div>
        </section>
    
    
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq:"about-background.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default AboutPage;

import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Aboutbg from "../components/globals/Aboutbg"
import Title from "../components/globals/Title"
// import BackgroundSection from "../components/globals/BackgroundSection";
// import Info from '../components/Home/info';
const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    
    <Aboutbg/>
    {/* <div className="row"><BackgroundSection 
      img={data.img.childImageSharp.fluid}
      title="" 
      styleClass="about-background "
      //styleClass="about-background" 
      />
    </div> */}
    
      <section className="py-5">
            <div className="container">
            <Title title="eat more plants"></Title>
            <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
            <h3>Why Shift to Plant-Based Diet</h3>
            <p></p>
            <ul>
              <li>Lose Weight Effortlessly</li>
              <li>Get Healthy Skin, Hair & Nails</li>
              <li>Supports your Immune System</li>
              <li>Lower your Risk from Cancer & Diabetes</li>
              <li>Saves on Hospital costs</li>
              <li>Live Longer</li>
            </ul>
            <p>And...</p>
            <h3>Save the Environment</h3>
            <p>Do you know that Animal Agriculture is responsible for more greenhouse gas emissions than the entire transportation sector?<br /> It's also responsible for nearly 90% of the deforestation and is a huge drain on our water supplies.</p>
            <p>So if you eat a plant-based diet, every single day...<br /> you'd be saving 1,100 gallons of water per day<br /> 30 square feet of forest<br /> 10 pounds of CO2 emissions<br /> and one animal... </p>
            <h3>Lean, mean and green protein</h3>
            <p>Show pics with 2 different plans...</p>
            <ul>
              <li>Starter Plan</li>
              <li>Premium Plan</li>
            </ul>

            <h3>#MeatFreeWeek</h3>

            <h3>#Flexitarian</h3>
            
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

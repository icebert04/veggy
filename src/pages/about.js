import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Aboutbg from "../components/globals/Aboutbg"
import Title from "../components/globals/Title"
// import BackgroundSection from "../components/globals/BackgroundSection";
// import Info from '../components/Home/info';

// icons 
import {FaWeight} from "react-icons/fa"
import {GiLipstick, GiBodyBalance, GiLifeBar, GiGasMask, GiForestCamp,GiWaterDrop} from "react-icons/gi"
import {RiMedicineBottleLine, RiHospitalLine} from "react-icons/ri"
import {SiHappycow} from "react-icons/si"


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
    
      <section id="about" >
      <div className="about-title"><Title  title="eat more plants"></Title></div>
            <div className="fullscreen-row">
            <div className="text-center">
            <div className="black-background colored-background">
            <h3>Why Shift to Plant-Based Diet</h3>
            <p></p>
            <ul className="li-3 li">
              <li>
              <span className="icon"><FaWeight/></span> 
              
              <br/> Lose Weight Effortlessly
              
              </li>
              <li>
              <span className="icon"><GiLipstick/></span> 
              
              <br/> Get Healthy Skin, Hair & Nails
              
              </li>
              <li>
              <span className="icon"><GiBodyBalance/></span> 
              
              <br/> Supports your Immune System
              
              </li>
              <li>
              <span className="icon"><RiMedicineBottleLine/></span> 
              
              <br/> Lower your Risk from Cancer & Diabetes
              
              </li>
              <li>
              <span className="icon"><RiHospitalLine/></span> 
              
              <br/> Saves on Hospital costs
              
              </li>
              <li>
              <span className="icon"><GiLifeBar/></span> 
              
              <br/> Live Longer
              
              </li>
            </ul>
            </div>
            
            <div className="white-background colored-background">
            <h3>Save the Environment</h3>
            <p>Do you know that Animal Agriculture is responsible for more greenhouse gas emissions than the entire transportation sector?<br /> It's also responsible for nearly 90% of the deforestation and is a huge drain on our water supplies.</p>
            
            <p>So if you eat a plant-based diet, every single day...<br /> you'd be saving  <br /><br /> <br /> </p> 
            <ul className="li li-4">
              <li>
              
              <p>1,100 gallons of water</p>
              
              <span className="icon">
              <GiWaterDrop/>
              </span>
              
              </li>
              <li>
            

              <p> 30 square feet of forest</p>

            <span className="icon">
            <GiForestCamp/>
            </span>
              </li>
              <li>
              

              <p>10 pounds of CO2 emissions</p>
              <span className="icon">
              <GiGasMask/>
              </span>
              </li>
              <li>
              
              <p> and one animal...</p>
              
              
              <span className="icon">
            <SiHappycow/>
            </span>
              </li>
            </ul>
            
            
            </div>
            

            <div className="grey-background colored-background">
            <h3>Lean, mean and green protein</h3>
            <p>Show pics with 2 different plans...</p>
            <ul>
              <li>Starter Plan</li>
              <li>Premium Plan</li>
            </ul>
            </div>
            


              <div className="white-background colored-background">
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

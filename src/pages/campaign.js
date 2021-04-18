import React from "react";
import { Link, graphql } from "gatsby";

import Plant from "../images/Plant-Based.jpg";
import PhilHealth  from "../images/PhilHealth.png"

import Layout from "../components/layout";
import SEO from "../components/seo";
// import BackgroundSection from "../components/globals/BackgroundSection";




const CampPage = ({ data }) => (
  <Layout>
    <SEO title="Campaign" keywords={[`gatsby`, `application`, `react`]} />
    {/* <BackgroundSection 
      img={data.img.childImageSharp.fluid}
      title="Articles"
      styleClass="" /> */}
      <section className="py-5">
            <div className="container">
            <h1 className="h1-1">How to donate</h1>
            <div className="fullscreen-row">
            <div className="  text-center">
            <p>
100% of donations go to nonprofits that directly impact the Philadelphia area. Use the link below to make your donation via Venmo. If you'd like to give directly to the charities, that's great too!            </p>
            <p>But let us know if Good Pizza inspired you to make the donation! You can find us on Venmo (<a href="https://www.instagram.com" target="_blank">@veggieVerde</a>). Please note: donations to Good Pizza are not tax deductible.</p>

            <span className="total">Raised to date: 63,017₱</span>

        <div class="blog-container">

          <article class="card">
            <img src={Plant}/>
            <h3>
            <Link to="../campaigns/campaign3">
              <a>Campaign 3</a>
              </Link>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore eius voluptatum sunt dolorum ipsa illo expedita at quo, perferendis vel ex beatae nostrum nesciunt architecto, doloremque libero est recusandae.</p>
          </article>
          
          <article class="card">
            <img src={Plant}/>
            <h3>
            <Link to="../campaigns/campaign2">
              <a>Campaign 2</a>
              </Link>
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatum voluptatem, explicabo dolore consequatur architecto! </p>
          </article>

          <article class="card">
            <img src={Plant}/>
            <h3>
            <Link to="../campaigns/campaign1">
            <a>Campaign 1</a>
            </Link>
            
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, cum! </p>
          </article>
        </div>

              <div className="blog-container sponsors">

                <div className="sponsor" >
                  <img src={PhilHealth} alt="philhealth"/>
                  <div className="learnmore">
                  <a target="_blank" href="/">
                  Learn More</a>
                  <br/>
                  <small>Phil Health</small>
                  </div>
                  
                  <h3 className="h2-1">PhilHealth</h3>
                </div>

                  <div className="sponsor" >
                  <img src={PhilHealth} alt="philhealth"/>
                  <div className="learnmore">
                  <a target="_blank" href="/">
                  Learn More</a>
                  <br/>
                  <small>Phil Health</small>
                  </div>
                  
                  <h3 className="h2-1">PhilHealth</h3>
                </div>

                  <div className="sponsor" >
                  <img src={PhilHealth} alt="philhealth"/>
                  <div className="learnmore">
                  <a target="_blank" href="/">
                  Learn More</a>
                  <br/>
                  <small>Phil Health</small>
                  </div>
                  
                  <h3 className="h2-1">PhilHealth</h3>
                </div>

              </div>
              
          </div>
        </div>
    </div>
        </section>
    
    
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq:"about-background.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default CampPage

import React from "react";
import { Link, graphql } from "gatsby";

import Plant from "../images/Plant-Based.jpg";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../components/globals/Title"
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
            <Title title="Campaign"></Title>
            <div className="fullscreen-row">
            <div className="  text-center">
            <p>
            So this is our campaigns...
            </p>
            <p>This is our 2nd paragraph</p>
        <div class="blog-container">
          <article class="card">
            <img src={Plant}/>
            <h3>
            <Link to="../campaigns/campaign4">
            <a>Campaign 4</a>
            </Link>

            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestias quis vero commodi unde fugit, dolorem magnam repudiandae ab aut. </p>
          </article>


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

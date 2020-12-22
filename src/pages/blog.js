import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Title from "../components/globals/Title"
// import BackgroundSection from "../components/globals/BackgroundSection";

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    {/* <BackgroundSection 
      img={data.img.childImageSharp.fluid}
      title="Articles"
      styleClass="" /> */}
      <section className="py-5">
            <div className="container">
            <Title title="Blog"></Title>
            <div className="row">
            <div className="col-10 col-sm-8 mx-auto text-center">
            <p>
            So this is our blog...
            </p>
            <p>This is our 2nd paragraph</p>
            
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

export default BlogPage

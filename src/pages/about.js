import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/globals/BackgroundSection";
import Info from '../components/Home/info';
const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
      img={data.img.childImageSharp.fluid}
      title="" 
      styleClass="about-background"
      //styleClass="about-background" 
      />
      <Info></Info>
    
    
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

export default AboutPage;

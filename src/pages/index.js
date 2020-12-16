import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/globals/BackgroundSection";
import Info from '../components/Home/info';
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
      img={data.img.childImageSharp.fluid}
      title=""
      styleClass="home-background" />
      <Info></Info>
    
    
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq:"home-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage

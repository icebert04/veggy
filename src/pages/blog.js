import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/globals/BackgroundSection";
import Info from '../components/Home/info';
const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
      img={data.img.childImageSharp.fluid}
      title="Articles"
      styleClass="" />
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

export default BlogPage

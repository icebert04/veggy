import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/globals/BackgroundSection";
import Info from '../components/Home/info';
import Menu from '../components/Home/menu';
import Contact from '../components/Home/contact';
const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BackgroundSection 
      img={data.img.childImageSharp.fluid}
      title=""
      styleClass="home-background" />
      <Info></Info>
      <Menu items={data.menu}>
      </Menu>
      <Contact />
    
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

menu: allContentfulVeggieItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }

  }
`;

export default IndexPage

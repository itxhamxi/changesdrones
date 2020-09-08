import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, StaticQuery} from "gatsby"
import {Row, Col} from 'reactstrap'
import Latest from '../components/Latest'
import Jumbeotron from "../components/Jumbeotron"
import Footer from '../components/Footer'
import Test from '../components/Test'
const IndexPage = () => (
    <Layout>
        <SEO title="Home"/>
        
        <Jumbeotron/>
        
        <div className="index-wrapper">
     
        <div className="container">
        
   
          <h1 className="sec"><div className="vr"><h1 className="heads">Featured Posts</h1></div></h1>
       <StaticQuery query={pageQuery} render={data =>{
         return (
           <div>
             <Row>
             {data.allStrapiArticle.edges.map(({node})=>{
               return (
         
                   <Col xs='12' md='4'>
                   <Test  path={node.Slug}
                fluid={node.image.childImageSharp.fluid}
                title={node.title}
                path={node.Slug}
                author={node.author.name}
                date={node.date}/>
                </Col>
                
              
             
               )
             })}
              </Row>
              
           </div>
         )
       }}/>
          
          </div>
         
          
      <Latest/>
    
      </div>
      <Footer/>
    </Layout>
)

export const pageQuery = graphql `
query AQuery {
  allStrapiArticle(filter: {categorie: {categoryname: {eq: "featured"}}}) {
    edges {
      node {
        id
        Slug
        date(formatString: "MMMM DD, YYYY")
        title
        image {
          childImageSharp {
            fluid(maxWidth: 600){
              ...GatsbyImageSharpFluid
            }
          }
        }
        author {
          name
         
        }
      }
    }
  }
}`
export default IndexPage

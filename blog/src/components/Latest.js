import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, StaticQuery} from "gatsby"
import Test from "../components/Test"
import {Row, Col} from 'reactstrap'
const Latest = () => (
    <Layout>
         <SEO title="Home"/>
        <div className="index-wrapper">
        <div className="container">
          <h1 className="sec"><div className="vr"><h1 className="heads">Latest Posts</h1></div></h1>
       <StaticQuery query={latestQuery} render={data =>{
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
          </div>

    </Layout>
)

export const latestQuery =graphql`
query MyQuery {
  allStrapiArticle(filter: {categorie: {categoryname: {eq: "latest"}}}) {
    edges {
      node {
        id
        date
        Slug
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
}
`
export default Latest

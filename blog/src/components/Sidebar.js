import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import {Row, Col} from 'reactstrap'
import {Link} from 'gatsby'
function Sidebar() {
    return (
        <div>
      
        <StaticQuery
          query={sidebarQuery}
          render={data => (
            <div>
              {data.allStrapiArticle.edges.map(({ node }) => (
                <div className="related-box">
               <Row>
                 <Col sm='12'>
                <Link to={`/${node.Slug}`} > <h1 style={{textTransform:'capitalize',color: 'black'}}>{node.title}</h1></Link>
                 </Col>
                 </Row>
                 <Row>
              <Col md='4'><span style={{textTransform:'capitalize',paddingLeft:'4px'}}>{node.author.name}</span></Col>
              <Col md='2'></Col>
              <Col md='6'>{node.date}</Col>
                 </Row>
              
                
              </div>
              ))}
            </div>
          )}
        />
  </div>
)
}

export default Sidebar
const sidebarQuery = graphql`
query sidebarQuery {
    allStrapiArticle( sort: {fields: date, order: DESC}, limit: 6) {
      edges {
        node {
          id
          image {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          author{
            name
          }
          content
          date(formatString: "MMMM DD, YYYY")
          Slug
        }
      }
    }
  }`

  // 
  // <div className="img">
  //                <Link to={`/${node.Slug}`}> <Img fluid={node.image.childImageSharp.fluid}></Img></Link>
  //               </div>
  //               <h1>{node.title}</h1>
  //                 <div className="icons">
                   
                   
  //                  </div>
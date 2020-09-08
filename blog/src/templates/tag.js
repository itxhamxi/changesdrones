import React from 'react'
import {graphql} from 'gatsby'
import {Row, Col} from 'reactstrap'
import Layout from '../components/layout'
import Jumbeotron from '../components/Jumbeotron'
import Posts from '../components/Posts'
import Footer from '../components/Footer'


const Tag = ({ data }) => (
  <Layout>
    <Jumbeotron/>
    <div className="index-wrapper">
    <div className="container">
    <h1 className="sec"><div className="vr"><h1 className="heads">Posts By Tag</h1></div></h1>
    <Row>
    
  {data.strapiTag.articles.map(article => (
    <Col md='4'>
     <Posts
     title={article.title}
    //  key={article.key}
     date={article.date}
     path={article.Slug}
     fluid={article.image.childImageSharp.fluid}
    
   
    
     />
     </Col>

))}
</Row>
</div>
</div>
<Footer/>
  </Layout>
)

export default Tag
export const zquery = graphql`
query Tag{
  strapiTag{
    articles{
      id
      title
      date
      Slug
      image {
        childImageSharp {
          fluid(maxWidth: 600){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`
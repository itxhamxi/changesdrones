import React from 'react'
import { graphql } from 'gatsby'
import { navigate } from "gatsby"
import Img from 'gatsby-image'
import Layout from '../components/layout'
import {Row,Col}  from "reactstrap"
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import ReactMarkdown from "react-markdown"
import Paper from '@material-ui/core/Paper';
import { FaFacebookSquare,FaGooglePlusG } from 'react-icons/fa';
import {DiscussionEmbed} from 'disqus-react'
const disqusShortname ='howtodrones'

const ArticleTemplate = ({ data}) => (
  <Layout>
    
    <div className="index-wrapper">
   
    <div className="container ">
    
    <Row>
     <Col sm='12'>
     <h1 className="post-font" style={{paddingTop:'60px',fontSize:'42px'}}>{data.strapiArticle.title}</h1>
     <p style={{paddingTop:'10px',textTransform:'capitalize',fontWeight:'bolder'}}><span>By </span>{data.strapiArticle.author.name}. published on {data.strapiArticle.date}</p>
  
     </Col>
     </Row>
     <Row>
       <Col sm='12'md='8'>
         <div className="article-card">
        
           <div className="article-img">
           
             <Img fluid={data.strapiArticle.image.childImageSharp.fluid}></Img>
            
           </div>
           
           <div className="text container">
           <Paper elevation={5}>
           <ReactMarkdown
            className="container py-5 pl-4 pr-4"
               source={data.strapiArticle.content}
                transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
/>
</Paper>
           </div>
           <button onClick={() => navigate(`/${data.strapiArticle.tag.tagname}`)} className="btn btn-outline-success tagbtn" >{data.strapiArticle.tag.tagname}</button>
          <div style={{marginTop:'40px',marginBottom:'20px'}}>
  
  </div>
         </div>
       </Col>
       
       <Col sm='12' md='4'><div className="box" style={{paddingBottom:'70px',marginBottom:'20px'}}>
      <div className="imgs">
        <Img style={{marginLeft:'0px',paddingLeft:'0px',paddingTop:'60px'}} fixed={data.strapiArticle.author.aimage.childImageSharp.fixed}></Img>
      </div> 
     <h1 className="post-font" style={{textTransform:'capitalize'}}>{data.strapiArticle.author.name}</h1>
      <Row>
        <Col md='2'></Col>
        <Col sm='12' md='8'>  <p style={{textAlign: 'center'}}>{data.strapiArticle.author.bio}</p></Col>
        <Col md='2'></Col>
    
      </Row>
        <div className="icons">
          <a target="_blank" rel=" nooppener noreferrer" href="https://www.facebook.com"><span className="fb"><FaFacebookSquare  size="30px"/></span> </a>
          <a target="_blank" rel=" nooppener noreferrer" href="https://www.facebook.com"><span className="google"><FaGooglePlusG  size="30px"/></span> </a>
       
         
         </div>
    </div>
       <h1 className="vr" style={{paddingTop:'4px',paddingBottom:'20px',paddingLeft:'10px',marginBottom:'20px'}}>Recent Posts</h1>
       <Sidebar/>
       </Col>

     </Row>
     <DiscussionEmbed shortname={disqusShortname} config={data.strapiArticle.id,data.strapiArticle.title,'https://www.disqus.com'}/>
    
    </div>
   
    </div>
    
  <Footer/>
  </Layout>
  
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($Slug: String!) {
    strapiArticle(Slug: {eq: $Slug}) {
      title
      content
      tag {
        tagname
        slug
        }
      Slug
      date(formatString: "MMMM DD, YYYY")
      image {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        author{
          name
          fbpath
          bio
          aimage{
            childImageSharp{
              fixed(width: 350,height: 400){
              ...GatsbyImageSharpFixed
            }
          }
         }
        }
    }
  }
`
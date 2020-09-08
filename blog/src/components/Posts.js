import React from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
import Paper from '@material-ui/core/Paper';
const Posts = ({title,date,content,path,fluid,author}) => {
    return (
        <>
          <Paper elevation={14}>
         <div >
      
           <Link to={`/${path}`}> <Img className="card" style={{width: '100%', backgroundImage:'rgba(0,0,0,0.9)'}} fluid={fluid}></Img></Link>
        
         <div className="title">
             <Link to={path}><h1 className="title">{title}</h1></Link>
         </div>
         <div className="date">
         </div>
      
         </div>
         </Paper>
         
    </>
    )
}

export default Posts


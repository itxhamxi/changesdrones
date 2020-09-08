import React from 'react'
import Img from 'gatsby-image'
import {Link} from 'gatsby'
const Authors = ({title,fbpath,fluid,googlepath,path}) => {
    return (
        <>
         <div >
           <Link to={path}> <Img className="card" style={{width: '100%',borderRadius:'20px', backgroundImage:'rgba(0,0,0,0.9)'}} fluid={fluid}></Img></Link>
        
         <div className="title">
             <Link to={path}><h1 style={{textAlign: 'center',textTransform:'capitalize',color: 'black'}}>{title}</h1></Link>
         </div>

         </div>
    </>
    )
}

export default Authors


import React from 'react'
import {Row,Col} from 'reactstrap'
import {Link} from 'gatsby'
import { FaFacebookSquare,FaInstagram,FaGoogle,FaLinkedinIn } from "react-icons/fa";
function Footer() {
	return (
		<div className="footer-wrapper">
			<div className="container">
			<Row>
						<Col md='3'>
						<h1 className="footer-brand">HowToDrones</h1>
						<div className="copyright">
					© HowToDrones 2020
					</div>
						</Col>
						<Col md='3'>
							<h3 style={{paddingTop:'40px',fontSize:'20px'}}>Quick Links</h3>
							<Link to={""}>	<h5 style={{paddingTop:'8px'}} className="footer-links">Advertise with us</h5></Link>
							<Link to={""}>	<h5 className="footer-links">About us</h5></Link>
							<Link to={""}><h5 className="footer-links">Contact us</h5></Link>
						</Col>
						<Col md='3'>
					<Link ><h3 style={{paddingTop:'40px',fontSize:'20px'}}>Legal Stuff</h3></Link>	
					<Link  to={""}>	<h5 style={{paddingTop:'8px'}} className="footer-links">Privacy Notice</h5></Link>
						<Link to={""}><h5 className="footer-links">Cookey Policy</h5></Link>
						<Link  to={""}><h5 className="footer-links">Term of Use</h5></Link>
						</Col>
						<Col md='3'>
						
						<h3 style={{paddingTop:'40px', fontSize:'20px'}}>Social Media</h3>
						<Link to={"www.facebook.com"}>  <FaFacebookSquare size="20px" style={{paddingRight:'8px'}}/></Link><Link to={""}><span style={{paddingTop:'8px',paddingLeft:'15px'}} className="footer-links">Facebook</span></Link><br></br>
					   <Link to={"www.facebook.com"}>  <FaInstagram  size="20px" style={{paddingRight:'8px'}}/></Link> <Link to={""}><span className="footer-links" >Instagram</span></Link><br></br>
					    <Link to={"www.facebook.com"}>  <FaGoogle  size="20px" style={{paddingRight:'8px'}}/></Link>  <Link to={""}> <span className="footer-links">Google</span></Link><br></br>
					   <Link to={"www.facebook.com"}> <FaLinkedinIn  size="20px" style={{paddingRight:'8px'}}/></Link>  <Link to={""}><span className="footer-links" style={{paddingBottom:'15px'}}>LinkedinIn</span></Link>
					 
						</Col>
			</Row>
		</div>
		</div>
	)
}

export default Footer


// 
{/* <Col md='4' style={{textAlign: 'center'}}>
				<span className="main-title footer-brand"><span className="nav-title-how ">How</span><span className="nav-title-to">To</span><span className="nav-title-drones">Drones</span></span>
				</Col>
				<Col md='4'></Col>
				<Col md='4'>
					<div className="text-wrapper">
					<h1> Media-Links</h1>
                     <div className="links-wrapper">
					<Link to={"www.facebook.com"}>  <FaFacebookSquare size="35px" style={{paddingRight:'8px'}}/></Link>
					<Link to={"www.facebook.com"}>  <FaInstagram  size="35px" style={{paddingRight:'8px'}}/></Link>
					<Link to={"www.facebook.com"}>  <FaGoogle  size="35px" style={{paddingRight:'8px'}}/></Link>
					<Link to={"www.facebook.com"}> <FaLinkedinIn  size="35px" style={{paddingRight:'8px'}}/></Link>
					  </div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col md='4'></Col>
				<Col md='4'>
					<div className="copyright">
					© HowToDrones 2020
					</div>
				</Col> */}
		
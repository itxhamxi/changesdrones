import React from 'react'
import { FaWhatsapp,FaFacebook, FaInstagram } from "react-icons/fa";
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from '../components/Footer'



function About() {

    return (
        <Layout>
             <SEO title="Home"/>
        <div className="index-wrapper">
         <div className="container">
                <section className="about-content">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 style={{paddingTop:'20px'}}>Who We Are</h1>
                            <hr className="about-who"></hr>
                            <p>Allin1quotes is a newest launched quotes,caption,poetry and motivation
                                sayings website.our mission is to provide you the best quotes, captions, poetry
                                and sayings to get you and your friends motivated.Allin1quotes has launched in
                                september 2020</p>

                        </div>
                        <div className="col-md-4 ">
                            <h1 style={{paddingTop:'20px'}}>90 Million</h1>
                            <hr className="about-90"></hr>
                            <p>Members</p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-8">
                        <h1>Message from Founders</h1>
                        <hr className="about-message"></hr>
                            <p>Reading is Fundamental. In fact, it is one of the most important ingredients
                                to becoming all that you can be. Reading develops your brain, provides a window
                                into the world around you and helps you do better in all school subjects. Most
                                importantly, reading can not only help you become a better student, but a better
                                person. You can learn from the brightest people whenever and wherever you
                                choose.</p>
                        </div>
                        <div className="col-md-4 ">
                            <h1>Founders</h1>
                            <hr className="about-founders"></hr>
                            <p>Hamza Hayat</p>
                            <p>ALi</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Support Us</h1>
                            <hr className="about-support"></hr>
                            <a className="icons"   href="https://www.whatsapp.com"><FaWhatsapp color="blue" size="4rem" /></a>
                            <a className="icons"  href="https://www.facebook.com"><FaFacebook color="blue" size="4rem" /></a>
                    <a  className="icons" href="https://www.instagram.com"><FaInstagram color="blue" size="4rem" /></a>
                        </div>
                    </div>
                </section>
               

            </div>
           
        
         <Footer/>
         </div>
         </Layout>
    )
}

export default About

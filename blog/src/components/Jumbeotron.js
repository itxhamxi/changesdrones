import React from 'react'
import {Row, Col} from 'reactstrap'




  
function Jumbeotron() {
    return (
        <div className="jumbotron-wrapper">
            <div className="container">
                <Row>
                    <Col md='8'>
                   
                        <h1 className="jumbo-heading">How to Drones</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md='4'>
                        <p className="jumbo-paragraph">Find The best Drones blog just the one you are looking for
                        </p>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Jumbeotron

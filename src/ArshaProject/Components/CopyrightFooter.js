import React from 'react'
import {Row } from 'reactstrap'
import "./footer.css"


export default function CopyrightFooter() {

    return (
        <div className="container-fluid" >
            <Row className="copyright mt-5 p-3">
                    <span className="fas fa-copyright p-1"></span>
                    <p>copyright &nbsp;</p><strong>Arsha.&nbsp;</strong> <h7>All Rights Reserved</h7>                        
            </Row>
            <Row className="copyright designed">        
                    <p>Designed By</p> <strong>Danish Imran</strong>
            </Row>
        </div>
    )
}

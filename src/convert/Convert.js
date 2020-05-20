import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'

const Converter = () => {

    // function formHToRGB(){
    //     var transformValue = document.getElementById('calcValue').value;
    //     c = transformValue.slice(1,3);
    //     d = transformValue.slice(3,5);
    //     e = transformValue.slice(5);
    //     document.getElementById('displayValue').value = "RBA("+parseInt(c,16)+","+parseInt(d,16)+","+parseInt(e,16)+")";
    // }

        // var redValEl = document.getElementById('redVal');
        // var greenValEl = document.getElementById('greenVal');
        // var blueValEl = document.getElementById('blueVal');
        // var hexValue = document.getElementById('displayHexValue');

        // function formRToHex(){
        //     var red = redValEl.value;
        //     var green = greenValEl.value;
        //     var blue = blueValEl.value;

        //     var hexColorCode = '#' + getHexa(red) + getHexa(green) + getHexa(blue);
        //     hexValue.value = hexColorCode;
        // }

        // function getHexa(value){
        //     var hex = parseInt(value).toString(16);
        //     return hex.length == 1 ? '0' + hex : hex;
        // }


    return (
        <div>
        <Container fluid id="converter">
            <Row>
                <Col className="left">
                    <div className="text-area-rgb">
                        <h2>#Hex to RGB</h2>
                        <p>Enter Hex value: <input type="text" placeholder="Include the #" id="calcValue" style={{zIndex: '1'}} /></p>
                        {/* <Button onClick={formHToRGB}>Convert</Button> */}
                        <p>Drum Roll Please: <input type="text" id="displayValue"/></p>
                    </div>
                </Col>
                <Col className="right">
                    <div className="text-area-hex">
                        <h2>RGB to #Hex</h2>
                        <p>Enter RBG value: 
                        <input type="text" placeholder="Red values" id="redVal"/>
                        <input type="text" placeholder="Green values" id="greenVal"/>
                        <input type="text" placeholder="Blue values" id="blueVal"/></p>
                        {/* <Button onClick={formRToHex}>Convert</Button> */}
                        <p className="style-g">Drum Roll Please: <input type="text" className="displayH" id="displayHexValue"/></p>
                    </div>
                </Col>

            </Row>
        </Container>


        </div>
    )
}

export default Converter;
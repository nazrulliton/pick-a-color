import React, {useRef} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap'

const Converter = () => {
    const calcValue = useRef();
    const displayValue = useRef();

    function formHToRGB(){
        var transformValue = calcValue.current.value;
       var c = transformValue.slice(1,3);
       var d = transformValue.slice(3,5);
        var e = transformValue.slice(5);
       displayValue.current.value = "RBA("+parseInt(c,16)+","+parseInt(d,16)+","+parseInt(e,16)+")";
    }


        const redVal = useRef();
        const greenVal = useRef();
        const blueVal = useRef();
        const disValue = useRef();

        var redValEl = redVal;
        var greenValEl = greenVal;
        var blueValEl = blueVal;
        var hexValue = disValue;

        function formRToHex(){
            var red = redValEl.current.value;
            var green = greenValEl.current.value;
            var blue = blueValEl.current.value;

            var hexColorCode = '#' + getHexa(red) + getHexa(green) + getHexa(blue);

            hexValue.current.value = hexColorCode;
        }

        function getHexa(value){
            var hex = parseInt(value).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }


    return (
        <div>
        <Container fluid id="converter">
            <Row>
                <Col className="left">
                    <div className="text-area-rgb">
                        <h2>#Hex to RGB</h2>
                        <p>Enter Hex value: <input type="text" placeholder="Include the #"  ref={calcValue} id="calcValue" style={{zIndex: '1'}} /></p>
                        <Button onClick={formHToRGB}>Convert</Button>
                        <p>Drum Roll Please: <input type="text"  ref ={displayValue} id="displayValue"/></p>
                    </div>
                </Col>
                <Col className="right">
                    <div className="text-area-hex">
                        <h2>RGB to #Hex</h2>
                        <p>Enter RBG value: 
                        <input type="text" placeholder="Red values" ref={redVal} id="redVal"/>
                        <input type="text" placeholder="Green values" ref={greenVal} id="greenVal"/>
                        <input type="text" placeholder="Blue values" ref={blueVal} id="blueVal"/></p>
                        <Button onClick={formRToHex}>Convert</Button>
                        <p className="style-g">Drum Roll Please: <input type="text" className="displayH" id="displayHexValue" ref={disValue}/></p>
                    </div>
                </Col>

            </Row>
        </Container>


        </div>
    )
}

export default Converter;
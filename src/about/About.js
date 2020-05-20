import React, { useState } from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap';
import { ChromePicker, SwatchesPicker, PhotoshopPicker } from 'react-color';


const About = () => {
   const [color, setColor] = useState('#fff')
   const [buttonCol, setButtonCol] = useState('lightgrey')
   const [showColorpicker, setShowColorpicker] = useState(false)
   const [showSwatchesPicker, setShowSwatchesPicker] = useState(false)
   const [showPhotoshop, seShowPhotoshop] = useState(false)
   
    return (
        <>
        <Container fluid className='about' style={{backgroundColor: color.hex}}>
            <Row style={{marginTop: '35px'}} >
                <Col className='aboutText'>
                <h3>Pick-A-Color</h3>    
                <p>This a tool to select colors and color palettes for all your UI and project needs. Select whichever color picker you require, then explore colors, the background colour will change. If you need to compare or contrast a combination of colours, selecting a colour using the Color[name] Picker will change the color of the Buttons only.</p>
                <h3>Convert between HEX and RBG colours.</h3>
                <p>Converting between Hexadecimal color and RGB color has never been easier, you can use our converter for this function and any converting need you require. All you need to do is enter the chosen color code/digit into the Hex or RBG input field and press convert - easy as that :)</p>
                </Col>
            </Row>
            <Row>
                <Col className='aboutButtons'>
                    <Button onClick={() => setShowColorpicker(showColorpicker => !showColorpicker)} style={{backgroundColor: buttonCol.hex}}> { showColorpicker? 'Close Color Picker' : 'Open Color Picker'}  </Button>
                    <Button onClick={()=>seShowPhotoshop(showPhotoshop => !showPhotoshop) } style={{backgroundColor: buttonCol.hex}}> {showPhotoshop ? 'Close PhotoShop picker' : 'Open Photoshop Picker'} </Button>
                    <Button onClick={() => setShowSwatchesPicker(showSwatchesPicker => !showSwatchesPicker)} style={{backgroundColor: buttonCol.hex}} > {showSwatchesPicker? 'Close Swatches Picker' : 'Open Swatches Picker'} </Button>
                    <Button onClick={() => setColor('#fff')}>Resit BG Color</Button>
                    <Button onClick={() => setButtonCol('lightGrey')}>Resit Button Color</Button>

                </Col>
            </Row>
            <Row>
                <Col>
                    
                      {
                    showSwatchesPicker &&  
                    <SwatchesPicker
                    color={color}
                    onChange={updatedColour => setColor(updatedColour)}
                    />
                    }
                </Col>
                <Col>
                    { showPhotoshop &&   
                    <PhotoshopPicker
                    color={color}
                    onChange={updatedColour => setColor(updatedColour)}
                    />}
                </Col>
                <Col>
                {
                    showColorpicker && 
                    <ChromePicker
                    color={color}
                    onChange={updatedColour => setButtonCol(updatedColour)}
                    />
                    }
                </Col>
            </Row>
        </Container> 
        </>
        )
}

export default About;
import React, { useState } from 'react'
import {Button} from 'react-bootstrap';
import { ChromePicker, SwatchesPicker, PhotoshopPicker } from 'react-color';


const About = () => {
   const [color, setColor] = useState('#fff')
   const [showColorpicker, setShowColorpicker] = useState(false)
   const [showSwatchesPicker, setShowSwatchesPicker] = useState(false)
   const [showPhotoshop, seShowPhotoshop] = useState(false)
   
    return (
        <div className='about' style={{backgroundColor: color.hex}}>
            <h2>Convert Colours between HEX and RBG colours.</h2>
            <p>You can play with our converter or slider to get started in your colour journey. Before diving into the world of colours and Palate, choose a base layour or main colour. The Slider is great for those that are looking for inspiration for projects and looking to create new combinations. Your only limit is your imagination. <br/>
            Alternatively you can mess around with our Google Colour picker and Palate to find inspirations for all of your quick comparisons or if you need a colour combination quickly.</p>

            <Button onClick={() => setShowColorpicker(showColorpicker => !showColorpicker)}> { showColorpicker? 'Close Color Picker' : 'Open Color Picker'}  </Button>
            <Button onClick={() => setShowSwatchesPicker(showSwatchesPicker => !showSwatchesPicker)} > {showSwatchesPicker? 'Close Swatches Picker' : 'open Swatches Picker'} </Button>
            <Button onClick={()=>seShowPhotoshop(showPhotoshop => !showPhotoshop) }> {showPhotoshop ? 'Close PhotoShop picker' : 'Open Photoshop Picker'} </Button>
            <Button onClick={() => setColor('#fff')}>Resit Color</Button>
            {
                showColorpicker && 
                <ChromePicker
                color={color}
                onChange={updatedColour => setColor(updatedColour)}
                />
            }
            {
                showSwatchesPicker &&  
                <SwatchesPicker
                color={color}
                onChange={updatedColour => setColor(updatedColour)}
                />
            }
            { showPhotoshop &&   
            <PhotoshopPicker
            color={color}
            onChange={updatedColour => setColor(updatedColour)}
            />}

         
            
           
        </div>
        )
}

export default About;
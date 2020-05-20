import React, { useState } from 'react'
import {Button} from 'react-bootstrap';
import { ChromePicker, SwatchesPicker } from 'react-color';


const About = () => {
   const [color, setColor] = useState('#fff')
   const [showColorpicker, setShowColorpicker] = useState(false)
    return (
        <div>
            <h2>Convert Colours between HEX and RBG colours.</h2>
            <p>You can play with our converter or slider to get started in your colour journey. Before diving into the world of colours and Palate, choose a base layour or main colour. The Slider is great for those that are looking for inspiration for projects and looking to create new combinations. Your only limit is your imagination. <br/>
            Alternatively you can mess around with our Google Colour picker and Palate to find inspirations for all of your quick comparisons or if you need a colour combination quickly.</p>

            <Button onClick={() => setShowColorpicker(showColorpicker => !showColorpicker)}> { showColorpicker? 'Close Color Picker' : 'Open Color Picker'}  </Button>
            {
                showColorpicker && 
                <ChromePicker
                color={color}
                onChange={updatedColour => setColor(updatedColour)}
                />
            }
            <SwatchesPicker/>
            
           
        </div>
        )
}

export default About;
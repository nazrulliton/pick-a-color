import React from 'react';
import {Container} from 'react-bootstrap';

const Slider = () => {
    // function changeRange(){
    //     //get R,G,B valyes and convert string into integer
    //     var r = parseInt(document.getElementById("r").value);
    //     var g = parseInt(document.getElementById("g").value);
    //     var b = parseInt(document.getElementById("b").value);
    
    //     //generate color. e
    //     var color = "#" + hex(r) + hex(g) + hex(b);
    
    //     // Change background color and text. 
    //     document.body.style.backgroundColor = color;
    
    //     document.getElementById("hex-label").innerHTML = color;
    //     document.getElementById("r-label").innerHTML = r;
    //     document.getElementById("g-label").innerHTML = g;
    //     document.getElementById("b-label").innerHTML = b;
    
    //     if (r < 100 && g < 100 && b < 100 ){
    //         document.getElementById("container").style.color = white;
    //     } else {
    //         document.getElementById("container").style.color = black;
    //     }
    
    // }


    return (
        <Container id="slider">
            <table>
            <tr>
                <th>Red</th>
                <th>Green</th>
                <th>Blue</th>
            </tr>
            <tr>
                <td><input type="range" min="0" max="255" id="r" onchange="changeRange()" value="155"/></td>
                <td><input type="range" min="0" max="255" id="g" onchange="changeRange()" value="155"/></td>
                <td><input type="range" min="0" max="255" id="b" onchange="changeRange()" value="200"/></td>
            </tr>
            <tr>
                <td id="r-label">255</td>
                <td id="g-label">255</td>
                <td id="b-label">255</td>
            </tr>
        </table>
        <h1 id="hex-label">#ffffff</h1>



        </Container>
    )
}

export default Slider;
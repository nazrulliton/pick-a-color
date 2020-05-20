import React from 'react'
import NavContainer from './nav/NavContainer'
import Converter from './convert/Convert'
import Slider from './slider/Slider'
import About from './about/About'

const MainContainer = () => {

    return (
        <div>
        <NavContainer/>
        <About/>
        <Converter/>
        <Slider/>
        </div>
        )
}

export default MainContainer;
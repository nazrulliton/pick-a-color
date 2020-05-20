import React from 'react'
import NavContainer from './nav/NavContainer'
import Converter from './convert/Convert'
import About from './about/About'

const MainContainer = () => {

    return (
        <div>
        <NavContainer/>
        <About/>
        <Converter/>
        </div>
        )
}

export default MainContainer;
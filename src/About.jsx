import React from 'react';
import web from "../src/images/hero-img.jpg";
import Common from './Common';
const About = () => {
    return (
        <>
           <Common  name='Welcome to About page' 
            imgsrc={web} 
            visit='/contact' 
            btname='Contact Here'/>
        </>
    )
}
export default About;


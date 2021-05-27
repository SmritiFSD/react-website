import React from 'react';
import web from "../src/images/4035541.jpg";
import Common from './Common';
const Home = () => {
    return (
        <>
            <Common 
            name='Grow Your Knowledge' 
            imgsrc={web} 
            visit='/service' 
            btname='Get Started'/>
        </>
    )
}
export default Home;
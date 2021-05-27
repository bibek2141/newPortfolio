import '../../App.css';
import React from 'react';
import Section1Home from '../Section1Home';
import Section3Home from '../Section3Home';
import Footer from '../Footer';
import Section2Home from '../Section2Home';

function Home(){
    return(
        <>
        <Section1Home/>
        <Section2Home/>
        <Section3Home/>
        <Footer/>
        </>
    )
}

export default Home;
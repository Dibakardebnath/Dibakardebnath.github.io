import React from 'react'
import { AboutMe } from './AboutMe'
import { Skills } from './Skills'
import { Project } from './Project'
import { Contacts } from './Contacts'
import { Box, Divider } from '@chakra-ui/react'
import { Intro } from './Intro'
import { Experience } from './Experience'
import { Education } from './Education'
import { Footer } from './Footer'

import "./Home.css"

import { Stats } from './Stats'






export const Home = () => {
    return (
        <Box id="home">
           
            <Intro/>
           
          <AboutMe />
         
          <Skills />
         
          <Experience/>

          <Education/>
         
          <Project /> 
         
           <Stats/> 
       
          <Contacts /> 

          <Footer/>
        </Box>
    )
}

import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import fur from './images/Alcazar.png'
import flip from './images/Myntra.png'


import { ProjectCard } from './ProjectCard'

export const Project = () => {
  return (
    <Box id="projects" >

      <Text data-aos="fade-right" data-aos-duration="1000"
        fontSize={["3xl", "4xl", "4xl", "4xl"]} mb={"30px"}
        color={"#03c8d7"} fontWeight={"700"}
        className='project-title'
        textAlign={"center"} border={"1px solid"} w={'max-content'} margin={"40px auto"} padding={"0px 40px"}>Projects</Text>

      <Box className='project_main'>
        <ProjectCard tech="  CSS | HTML | JavaScript | JSON | Netlify" github="https://github.com/AbhishekRS07/Myntra" link="https://649db92ef917bb0fe9195838--radiant-rabanadas-ca2929.netlify.app/" avatar={fur} name="Myntra" desc=" Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products." />
        <ProjectCard tech="  CSS | HTML | JavaScript | JSON | Netlify" github="" link="https://github.com/Dibakardebnath/Alcazar-project" avatar={flip} name="Alcazar"   desc="Alcazae ustomer service-oriented with 4 years of career experience in Travel and Tourism industries. Possesses expertise in strategic partnership identification and development" />
       
      </Box>
    </Box>
  )
}
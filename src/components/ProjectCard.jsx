import React from 'react'
import { Box, Button, Flex, Image, Text, Heading, Link} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
export const ProjectCard = ({name,desc,avatar,link,github,tech }) => {
  return (
    <Card  data-aos="zoom-in-down" data-aos-duration="1000" className="project-card" maxW={["290px", "sm", "350px", "md"]}  bg={"#03c8d7"} color={"white"} >
      <CardHeader>

        <Flex spacing='4'>
          <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap' >
            <Box data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" >  <Image id='card_img' 
              w={335}
              objectFit='contain'
              src={avatar}
              alt='Chakra UI'
            /></Box>
          </Flex>
        </Flex>

      </CardHeader>

      <CardBody>
        <Text mb={"20px"} mt={"10px"}> <Heading as='h3' className="project-title" fontSize={["lg","lg","3xl","2xl"]} 
        fontWeight='bold'  data-aos="fade-up" data-aos-duration="1000"> 
         {name}</Heading> </Text>
        <Text mt={"10px"} fontSize={["lg","lg","xl","xl"]} class="project-description"  data-aos="fade-down" data-aos-duration="1000">
         {desc}
        </Text>
        <Text mt={"10px"} data-aos="fade-up" data-aos-duration="1000" class="project-tech-stack" fontSize={["lg","lg","xl","xl"]}>  <span style={{ color: "#03c8d7", fontWeight: "700" }}>TECH STACK :</span>{tech} </Text>
      </CardBody>


      <CardFooter justify='space-between'  sx={{ '& > button': { minW: '136px', }, }} data-aos="fade-up"  >
        <Flex justifyContent={"space-between"} padding={"0px 20px"} w={"100%"}>
         
         
          <Link >  <button class="project-github-link" style={{color:"white", padding:'6'}} href={github} id='card_soco'  size={["sm", "sm", "md", "md"]}> <i class="fa-brands fa-github fa-2xl" style={{color: "#f9fafa"}}></i></button> </Link>
          <Button id='card_soco' color="white" padding={'5'} size={["sm", "sm", "md","md"]}> <Link class="project-deployed-link" href={link}><i class="fa-solid fa-eye fa-2xl"></i> Live </Link></Button>
        </Flex>
      </CardFooter>

    </Card>
  )
}
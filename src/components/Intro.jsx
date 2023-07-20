import { Box, Button, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { TypedText } from './TypedText';
import Dibakar from './images/Dibakar.png'


const handleclick = () => {
    return window.open(
        "https://drive.google.com/file/d/1TdTTYswIbyJU6tiZQ7ZNGWECGg6Fb5Ki/view?usp=sharing",
        "_blank"
    );
};
export const Intro = () => {


    return (
        <Box className='intro_box'  >
            <Box className='intro_left' data-aos="fade-up" data-aos-duration="1000">
                <Box  data-aos="fade-right" data-aos-duration="1000"> <Text fontSize={["18px", "20px", "22px", "2xl"]} fontWeight={"700"}> Hello It's Me</Text></Box>
                <Box data-aos="fade-left" data-aos-duration="1000">   <Text fontSize={["23px", "20px", "25px", "4xl"]} fontWeight={"700"} id="user-detail-name">Dibakar Debnath</Text></Box>
                <Box  data-aos="fade-right" data-aos-duration="1000">   <Text fontSize={["17px", "13px", "17px", "2xl"]} fontWeight={"700"}>And i'm a   <TypedText /> </Text></Box>
                <Box data-aos="fade-up-right">  <Text className='into_myself' mt={"16px"} 
                 id="user-detail-intro">Enthusiastic full stack web developer with a passion for creating dynamic and responsive applications</Text>

                    <Box  data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1500">
                        <Text mt={"20px"} letterSpacing={15}>
                        <Link  href='https://github.com/Dibakardebnath' className='soco_icon' color={"#f3390a"}> <i class="fa-brands fa-github fa-xl"></i></Link>
                            <Link  href='https://www.linkedin.com/in/dibakar-debnath-39865724a/' className='soco_icon'color={"#f3390a"}><i class="fa-brands fa-linkedin fa-xl"></i></Link>
                            <Link href='https://twitter.com/dibakar_deb321' className='soco_icon'color={"#f3390a"}><i class="fa-brands fa-twitter fa-xl"></i></Link>
                            <Link href='https://www.instagram.com/dibakar956/'  className='soco_icon'color={"#f3390a"} ><i class="fa-brands fa-instagram fa-xl"></i></Link>
                        </Text></Box>

                    <Text data-aos="zoom-out-up" data-aos-duration="1000" mt={"30px"} >
                        <Button size={["sm", "md", "md", "md"]} id="resume-button-2" onClick={handleclick}
                        href="https://drive.google.com/file/d/1TdTTYswIbyJU6tiZQ7ZNGWECGg6Fb5Ki/view?usp=sharing" as={Link}
                        target="_blank" download={true}
                        color={"white"}
                    
                        _hover={{ bg: "gray.900", color: "#f3390a", borderRadius: "10px" }}
                        bg={"#f8572f"} >
                       Download Resume</Button></Text>
                        
                        </Box>
            </Box>
            <Box className='intro_right' data-aos="fade-down"  data-aos-duration="1000">
                <img className='home-img' src={Dibakar} alt="" />
            </Box>

        </Box>
    )
}

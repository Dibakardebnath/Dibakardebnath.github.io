import { Box, Button, Link, Text, VStack, HStack, Heading } from '@chakra-ui/react'
import React from 'react'
import { TypedText } from './TypedText';
import { useDarkMode } from '../context/DarkModeContext';
import './Intro.css'
import dibakar_img from '../assets/Dibakar_image.png';

const handleclick = () => {
    return window.open(
        "https://drive.google.com/uc?id=1_iC4GevxSiYGFBwJ9xwnlVBFH2L8wLxW&export=download",
        "_blank"
    );
};

export const Intro = () => {
    const { isDarkMode } = useDarkMode();

    return (
        <Box
            id="home"
            className={`hero-section ${isDarkMode ? 'dark' : ''}`}
            minH="calc(100vh - 80px)"
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            overflow="hidden"
            bg={isDarkMode ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)' : 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #f1f5f9 100%)'}
        >
            {/* Animated background elements */}
            <Box className="hero-bg-gradient" />

            <Box
                className='hero-container'
                maxW="1280px"
                mx="auto"
                px={[4, 6, 8]}
                display="grid"
                gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}
                gap={[8, 12, 16]}
                alignItems="center"
                width="100%"
            >
                {/* Left Content */}
                <VStack
                    className='hero-content'
                    align="start"
                    spacing={6}
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    {/* Greeting */}
                    <Box data-aos="fade-right" data-aos-duration="800">
                        <Text
                            fontSize={["sm", "md", "lg"]}
                            fontWeight="600"
                            color="#7c3aed"
                            textTransform="uppercase"
                            letterSpacing="0.05em"
                        >
                            Hello, Welcome 👋
                        </Text>
                    </Box>

                    {/* Main Heading */}
                    <Box data-aos="fade-left" data-aos-duration="1000" width="100%">
                        <Heading
                            as="h1"
                            size="2xl"
                            fontWeight="800"
                            color={isDarkMode ? "#f1f5f9" : "#0f172a"}
                            lineHeight="1.2"
                            id="user-detail-name"
                        >
                            I'm Dibakar Debnath
                        </Heading>
                    </Box>

                    {/* Typed Text Role */}
                    <Box data-aos="fade-right" data-aos-duration="1200" width="100%">
                        <Text
                            fontSize={["lg", "xl", "2xl"]}
                            fontWeight="700"
                            color={isDarkMode ? "#cbd5e1" : "#475569"}
                        >
                            And I'm a <span style={{ color: "#7c3aed" }}>
                                <TypedText />
                            </span>
                        </Text>
                    </Box>

                    {/* Tagline */}
                    <Box data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        <Text
                            className='hero-tagline'
                            fontSize={["md", "lg"]}
                            color={isDarkMode ? "#94a3b8" : "#64748b"}
                            lineHeight="1.75"
                            id="user-detail-intro"
                            maxW="500px"
                        >
                            Crafting scalable web solutions with modern technologies. Passionate about building dynamic, responsive applications that make an impact.
                        </Text>
                    </Box>

                    {/* Location Badge */}
                    <Box data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">
                        <Box
                            display="flex"
                            alignItems="center"
                            gap={2}
                            px={4}
                            py={2}
                            borderRadius="20px"
                            bg={isDarkMode ? 'rgba(124, 58, 237, 0.1)' : 'rgba(124, 58, 237, 0.08)'}
                            border={`1px solid ${isDarkMode ? 'rgba(124, 58, 237, 0.3)' : 'rgba(124, 58, 237, 0.2)'}`}
                            width="fit-content"
                        >
                            <Text fontSize="lg">📍</Text>
                            <Text
                                fontSize="sm"
                                fontWeight="500"
                                color={isDarkMode ? "#cbd5e1" : "#475569"}
                            >
                                Agartala, Tripura, India
                            </Text>
                        </Box>
                    </Box>

                    {/* CTA Buttons */}
                    <HStack spacing={4} data-aos="flip-left" data-aos-duration="1000" data-aos-delay="600" width="100%">
                        <Button
                            as={Link}
                            href="#projects"
                            className="btn-cta-primary"
                            size="lg"
                            fontWeight="700"
                            bg="#7c3aed"
                            color="white"
                            _hover={{
                                bg: "#6d28d9",
                                transform: "translateY(-4px)",
                                boxShadow: "0 10px 25px rgba(124, 58, 237, 0.4)"
                            }}
                            transition="all 0.3s ease"
                            borderRadius="10px"
                            h="52px"
                            px={8}
                        >
                            View My Work
                        </Button>
                        <Button
                            onClick={handleclick}
                            className="btn-cta-secondary"
                            size="lg"
                            fontWeight="700"
                            bg="transparent"
                            color="#7c3aed"
                            border="2px solid #7c3aed"
                            _hover={{
                                bg: "#7c3aed",
                                color: "white",
                                transform: "translateY(-4px)"
                            }}
                            transition="all 0.3s ease"
                            borderRadius="10px"
                            h="52px"
                            px={8}
                        >
                            Download Resume
                        </Button>
                    </HStack>

                    {/* Social Icons */}
                    <HStack spacing={4} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800" mt={8}>
                        <Link
                            href='https://github.com/Dibakardebnath'
                            className='social-icon'
                            isExternal
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            w="48px"
                            h="48px"
                            borderRadius="12px"
                            bg={isDarkMode ? 'rgba(124, 58, 237, 0.1)' : 'rgba(124, 58, 237, 0.08)'}
                            color="#7c3aed"
                            _hover={{
                                bg: "#7c3aed",
                                color: "white",
                                transform: "translateY(-4px)"
                            }}
                            transition="all 0.3s ease"
                        >
                            <i className="fa-brands fa-github fa-lg"></i>
                        </Link>
                        <Link
                            href='https://www.linkedin.com/in/dibakar-debnath-39865724a/'
                            className='social-icon'
                            isExternal
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            w="48px"
                            h="48px"
                            borderRadius="12px"
                            bg={isDarkMode ? 'rgba(124, 58, 237, 0.1)' : 'rgba(124, 58, 237, 0.08)'}
                            color="#7c3aed"
                            _hover={{
                                bg: "#7c3aed",
                                color: "white",
                                transform: "translateY(-4px)"
                            }}
                            transition="all 0.3s ease"
                        >
                            <i className="fa-brands fa-linkedin fa-lg"></i>
                        </Link>
                        <Link
                            href='https://twitter.com/dibakar_deb321'
                            className='social-icon'
                            isExternal
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            w="48px"
                            h="48px"
                            borderRadius="12px"
                            bg={isDarkMode ? 'rgba(124, 58, 237, 0.1)' : 'rgba(124, 58, 237, 0.08)'}
                            color="#7c3aed"
                            _hover={{
                                bg: "#7c3aed",
                                color: "white",
                                transform: "translateY(-4px)"
                            }}
                            transition="all 0.3s ease"
                        >
                            <i className="fa-brands fa-twitter fa-lg"></i>
                        </Link>
                    </HStack>
                </VStack>

                {/* Right Image */}
                <Box
                    className='hero-image'
                    data-aos="fade-down"
                    data-aos-duration="1200"
                    display={["none", "none", "flex"]}
                    justifyContent="center"
                    alignItems="center"
                    position="relative"
                >
                    <Box
                        position="absolute"
                        w="300px"
                        h="300px"
                        borderRadius="full"
                        bg="linear-gradient(135deg, #a78bfa 0%, #8b5cf6 100%)"
                        filter="blur(60px)"
                        opacity="0.3"
                        animation="float 4s ease-in-out infinite"
                    />
                    <Box
                        position="relative"
                        zIndex={1}
                        w="280px"
                        h="280px"
                        borderRadius="20px"
                        overflow="hidden"
                        boxShadow="0 20px 60px rgba(124, 58, 237, 0.3)"
                        border="4px solid transparent"
                        bgGradient="linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
                        className="image-glow"
                    >
                        <img
                            className='home-img'
                            src={dibakar_img}
                            alt="Dibakar Debnath"
                            loading="lazy"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block"
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            {/* Scroll Indicator */}
            <Box
                className="scroll-indicator"
                position="absolute"
                bottom="40px"
                left="50%"
                transform="translateX(-50%)"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1200"
            >
                <Box
                    className="scroll-arrow"
                    animation="bounce 2s infinite"
                >
                    <i className="fa-solid fa-arrow-down"></i>
                </Box>
            </Box>
        </Box>
    )
}

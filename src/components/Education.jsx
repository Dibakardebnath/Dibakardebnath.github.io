import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
} from '@chakra-ui/react';
import { useDarkMode } from '../context/DarkModeContext';
import './Education.css';

export const Education = () => {
  const { isDarkMode } = useDarkMode();

  const educationList = [
    {
      id: 1,
      degree: "Bachelor of Technology",
      field: "Electronics & Communication Engineering",
      institution: "Techno College of Engineering Agartala",
      location: "Agartala, Tripura, India",
      duration: "2017 - 2021",
      icon: "🎓",
      type: "Bachelor's"
    },
    {
      id: 2,
      degree: "Full Stack Web Development",
      field: "Modern Web Technologies",
      institution: "Masai School",
      location: "Bengaluru, India",
      duration: "2023 - 2024",
      icon: "💻",
      type: "Bootcamp"
    },
    {
      id: 3,
      degree: "Intermediate",
      field: "General Education",
      institution: "Amarpur Higher Secondary School",
      location: "Agartala, Tripura, India",
      duration: "2015 - 2017",
      icon: "📚",
      type: "School"
    }
  ];

  return (
    <Box
      as="section"
      py={["80px", "100px"]}
      px={[4, 6, 8]}
      bg={isDarkMode ? "#1e293b" : "#f8fafc"}
      color={isDarkMode ? "#f1f5f9" : "#0f172a"}
      transition="all 0.3s ease"
    >
      <Box maxW="1280px" mx="auto">
        {/* Section Title */}
        <VStack align="start" spacing={12}>
          <Box width="100%">
            <Heading
              as="h2"
              size="2xl"
              fontWeight="800"
              mb={4}
              color={isDarkMode ? "#f1f5f9" : "#0f172a"}
              data-aos="fade-right"
              data-aos-duration="800"
            >
              Education
            </Heading>
            <Box
              w="80px"
              h="4px"
              bg="linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%)"
              borderRadius="2px"
            />
          </Box>

          {/* Education Cards Grid */}
          <VStack
            spacing={6}
            align="stretch"
            width="100%"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {educationList.map((edu, index) => (
              <Box
                key={edu.id}
                className="education-card"
                p={8}
                borderRadius="16px"
                bg={isDarkMode ? "#0f172a" : "#ffffff"}
                border={`2px solid ${isDarkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(0, 0, 0, 0.08)"}`}
                transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                _hover={{
                  borderColor: "#7c3aed",
                  transform: "translateY(-4px)",
                  boxShadow: `0 10px 30px ${isDarkMode ? "rgba(124, 58, 237, 0.2)" : "rgba(124, 58, 237, 0.1)"}`
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <HStack align="start" spacing={6}>
                  {/* Icon */}
                  <Box
                    className="education-icon"
                    minW="80px"
                    w="80px"
                    h="80px"
                    borderRadius="16px"
                    bg={isDarkMode ? "rgba(124, 58, 237, 0.1)" : "rgba(124, 58, 237, 0.08)"}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="2.5rem"
                    border={`2px solid ${isDarkMode ? "rgba(124, 58, 237, 0.2)" : "rgba(124, 58, 237, 0.15)"}`}
                  >
                    {edu.icon}
                  </Box>

                  {/* Content */}
                  <VStack align="start" spacing={3} flex={1}>
                    {/* Header */}
                    <VStack align="start" spacing={1} width="100%">
                      <Heading
                        as="h3"
                        size="md"
                        fontWeight="700"
                        color={isDarkMode ? "#f1f5f9" : "#0f172a"}
                      >
                        {edu.degree}
                      </Heading>
                      <Text
                        fontSize="sm"
                        color="#7c3aed"
                        fontWeight="600"
                        textTransform="uppercase"
                        letterSpacing="0.05em"
                      >
                        {edu.field}
                      </Text>
                    </VStack>

                    {/* Institution Info */}
                    <VStack align="start" spacing={2} width="100%">
                      <HStack spacing={2} flexWrap="wrap">
                        <Text
                          fontSize="md"
                          fontWeight="600"
                          color={isDarkMode ? "#cbd5e1" : "#475569"}
                        >
                          {edu.institution}
                        </Text>
                      </HStack>

                      {/* Duration and Location */}
                      <HStack spacing={6} flexWrap="wrap" fontSize="sm">
                        <HStack spacing={2} color={isDarkMode ? "#94a3b8" : "#64748b"}>
                          <Text>📅</Text>
                          <Text fontWeight="500">{edu.duration}</Text>
                        </HStack>
                        <HStack spacing={2} color={isDarkMode ? "#94a3b8" : "#64748b"}>
                          <Text>📍</Text>
                          <Text fontWeight="500">{edu.location}</Text>
                        </HStack>
                      </HStack>
                    </VStack>
                  </VStack>
                </HStack>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

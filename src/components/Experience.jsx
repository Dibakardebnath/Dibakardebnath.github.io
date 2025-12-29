import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Badge,
  Divider,
} from '@chakra-ui/react';
import { useDarkMode } from '../context/DarkModeContext';
import './Experience.css';

export const Experience = () => {
  const { isDarkMode } = useDarkMode();

  const experiences = [
    {
      id: 1,
      jobTitle: "Software Development Engineer",
      company: "Yupcha Softwares Pvt. Ltd.",
      duration: "June 2024 - Present",
      location: "Agartala, Tripura",
      isCurrent: true,
      achievements: [
        "Designed and developed robust full-stack applications with React, SolidJS, and Next.js",
        "Specialized in React ecosystem and modern frontend architectures",
        "Integrated third-party APIs and optimized application performance",
        "Built custom state management solutions for complex applications",
        "Collaborated with teams to deliver high-quality, scalable solutions",
        "Implemented best practices in code organization and maintainability"
      ],
      technologies: ["React", "Next.js", "SolidJS", "Node.js", "Firebase", "MongoDB"]
    }
  ];

  return (
    <Box
      id="experience"
      as="section"
      py={["80px", "100px"]}
      px={[4, 6, 8]}
      bg={isDarkMode ? "#0f172a" : "#ffffff"}
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
              Professional Experience
            </Heading>
            <Box
              w="80px"
              h="4px"
              bg="linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%)"
              borderRadius="2px"
            />
          </Box>

          {/* Timeline */}
          <VStack
            spacing={8}
            align="stretch"
            width="100%"
            position="relative"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Timeline vertical line */}
            <Box
              position="absolute"
              left={["20px", "40px"]}
              top="0"
              bottom="0"
              width="2px"
              bg={isDarkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(0, 0, 0, 0.1)"}
              display={["block", "block", "block"]}
            />

            {experiences.map((exp, index) => (
              <Box key={exp.id} position="relative" pl={["80px", "120px"]}>
                {/* Timeline dot */}
                <Box
                  position="absolute"
                  left={["8px", "28px"]}
                  top="8px"
                  width="24px"
                  height="24px"
                  borderRadius="50%"
                  bg={exp.isCurrent ? "#7c3aed" : "#a78bfa"}
                  border={`3px solid ${isDarkMode ? "#1e293b" : "#ffffff"}`}
                  boxShadow={`0 0 0 4px ${isDarkMode ? "rgba(124, 58, 237, 0.2)" : "rgba(124, 58, 237, 0.1)"}`}
                  zIndex={2}
                />

                {/* Experience Card */}
                <Box
                  className="experience-card"
                  p={8}
                  borderRadius="16px"
                  bg={isDarkMode ? "#1e293b" : "#f8fafc"}
                  border={`2px solid ${isDarkMode ? "rgba(148, 163, 184, 0.2)" : "rgba(0, 0, 0, 0.08)"}`}
                  transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  _hover={{
                    borderColor: "#7c3aed",
                    transform: "translateY(-4px)",
                    boxShadow: `0 10px 30px ${isDarkMode ? "rgba(124, 58, 237, 0.2)" : "rgba(124, 58, 237, 0.1)"}`
                  }}
                >
                  {/* Header with title and duration */}
                  <HStack justify="space-between" mb={4} flexWrap="wrap" spacing={4}>
                    <VStack align="start" spacing={2}>
                      <Heading
                        as="h3"
                        size="lg"
                        fontWeight="700"
                        color={isDarkMode ? "#f1f5f9" : "#0f172a"}
                      >
                        {exp.jobTitle}
                      </Heading>
                      <Text
                        fontSize="lg"
                        fontWeight="600"
                        color="#7c3aed"
                      >
                        {exp.company}
                      </Text>
                    </VStack>
                    {exp.isCurrent && (
                      <Badge
                        px={4}
                        py={2}
                        borderRadius="8px"
                        bg="linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)"
                        color="white"
                        fontWeight="700"
                        fontSize="0.875rem"
                        textTransform="uppercase"
                        letterSpacing="0.05em"
                      >
                        Currently Working
                      </Badge>
                    )}
                  </HStack>

                  {/* Duration and Location */}
                  <HStack spacing={4} mb={6} flexWrap="wrap">
                    <HStack spacing={2} color={isDarkMode ? "#94a3b8" : "#64748b"}>
                      <Text fontSize="sm">📅</Text>
                      <Text fontSize="sm" fontWeight="500">
                        {exp.duration}
                      </Text>
                    </HStack>
                    <HStack spacing={2} color={isDarkMode ? "#94a3b8" : "#64748b"}>
                      <Text fontSize="sm">📍</Text>
                      <Text fontSize="sm" fontWeight="500">
                        {exp.location}
                      </Text>
                    </HStack>
                  </HStack>

                  <Divider
                    my={6}
                    borderColor={isDarkMode ? "rgba(148, 163, 184, 0.1)" : "rgba(0, 0, 0, 0.08)"}
                  />

                  {/* Achievements */}
                  <VStack align="start" spacing={4} mb={6}>
                    <Text
                      fontSize="sm"
                      fontWeight="700"
                      textTransform="uppercase"
                      color="#7c3aed"
                      letterSpacing="0.05em"
                    >
                      Key Achievements
                    </Text>
                    <VStack align="start" spacing={3} width="100%">
                      {exp.achievements.map((achievement, idx) => (
                        <HStack key={idx} align="start" spacing={3}>
                          <Box
                            mt={1}
                            minW="20px"
                            h="20px"
                            borderRadius="50%"
                            bg="#7c3aed"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            color="white"
                            fontSize="xs"
                            fontWeight="bold"
                          >
                            ✓
                          </Box>
                          <Text
                            color={isDarkMode ? "#cbd5e1" : "#475569"}
                            fontSize="md"
                            lineHeight="1.6"
                          >
                            {achievement}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>

                  {/* Technologies */}
                  <Box>
                    <Text
                      fontSize="sm"
                      fontWeight="700"
                      textTransform="uppercase"
                      color="#7c3aed"
                      letterSpacing="0.05em"
                      mb={3}
                    >
                      Technologies Used
                    </Text>
                    <HStack spacing={2} flexWrap="wrap">
                      {exp.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          px={3}
                          py={1.5}
                          borderRadius="8px"
                          bg={isDarkMode ? "rgba(124, 58, 237, 0.1)" : "rgba(124, 58, 237, 0.08)"}
                          color="#7c3aed"
                          fontWeight="600"
                          fontSize="xs"
                          border={`1px solid ${isDarkMode ? "rgba(124, 58, 237, 0.3)" : "rgba(124, 58, 237, 0.2)"}`}
                          transition="all 0.3s ease"
                          _hover={{
                            bg: "#7c3aed",
                            color: "white",
                            transform: "translateY(-2px)"
                          }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </HStack>
                  </Box>
                </Box>
              </Box>
            ))}
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

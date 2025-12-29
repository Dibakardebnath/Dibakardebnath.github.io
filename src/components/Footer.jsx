import React from 'react';
import {
  Box,
  Container,
  HStack,
  VStack,
  Text,
  Link,
  Divider,
} from '@chakra-ui/react';
import { useDarkMode } from '../context/DarkModeContext';
import './Footer.css';

export const Footer = () => {
  const { isDarkMode } = useDarkMode();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: 'fa-github', url: 'https://github.com/Dibakardebnath', label: 'GitHub' },
    { icon: 'fa-linkedin', url: 'https://www.linkedin.com/in/dibakar-debnath-39865724a/', label: 'LinkedIn' },
    { icon: 'fa-twitter', url: 'https://twitter.com/dibakar_deb321', label: 'Twitter' },
  ];

  return (
    <Box
      as="footer"
      bg={isDarkMode ? "#0f172a" : "#f8fafc"}
      color={isDarkMode ? "#f1f5f9" : "#0f172a"}
      borderTop={`1px solid ${isDarkMode ? "rgba(148, 163, 184, 0.1)" : "rgba(0, 0, 0, 0.08)"}`}
      transition="all 0.3s ease"
      py={12}
    >
      <Container maxW="1280px" mx="auto" px={[4, 6, 8]}>
        {/* Main Footer Content */}
        <VStack spacing={12} align="stretch">
          {/* Top Section */}
          <Box
            display="grid"
            gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr"]}
            gap={8}
          >
            {/* Brand Section */}
            <VStack align="start" spacing={4}>
              <Box>
                <Text
                  fontSize="xl"
                  fontWeight="700"
                  color={isDarkMode ? "#f1f5f9" : "#0f172a"}
                >
                  Dibakar Debnath
                </Text>
                <Text
                  fontSize="sm"
                  color={isDarkMode ? "#94a3b8" : "#64748b"}
                  mt={2}
                >
                  Full Stack Web Developer & Problem Solver
                </Text>
              </Box>
              <Box>
                <Text
                  fontSize="xs"
                  fontWeight="700"
                  textTransform="uppercase"
                  color="#7c3aed"
                  letterSpacing="0.05em"
                  mb={2}
                >
                  Based In
                </Text>
                <Text
                  fontSize="sm"
                  color={isDarkMode ? "#cbd5e1" : "#475569"}
                >
                  Agartala, Tripura, India
                </Text>
              </Box>
            </VStack>

            {/* Quick Links */}
            <VStack align="start" spacing={3}>
              <Text
                fontSize="sm"
                fontWeight="700"
                textTransform="uppercase"
                color="#7c3aed"
                letterSpacing="0.05em"
              >
                Quick Links
              </Text>
              <VStack align="start" spacing={2}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    fontSize="sm"
                    color={isDarkMode ? "#cbd5e1" : "#475569"}
                    transition="all 0.3s ease"
                    _hover={{
                      color: "#7c3aed",
                      transform: "translateX(4px)",
                    }}
                    display="inline-block"
                  >
                    {link.label}
                  </Link>
                ))}
              </VStack>
            </VStack>

            {/* Social Links */}
            <VStack align="start" spacing={3}>
              <Text
                fontSize="sm"
                fontWeight="700"
                textTransform="uppercase"
                color="#7c3aed"
                letterSpacing="0.05em"
              >
                Connect
              </Text>
              <HStack spacing={3} flexWrap="wrap">
                {socialLinks.map((social) => (
                  <Link
                    key={social.label}
                    href={social.url}
                    isExternal
                    className="footer-social-link"
                    w="40px"
                    h="40px"
                    borderRadius="8px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    bg={isDarkMode ? "rgba(124, 58, 237, 0.1)" : "rgba(124, 58, 237, 0.08)"}
                    color="#7c3aed"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: "#7c3aed",
                      color: "white",
                      transform: "translateY(-4px)",
                    }}
                    title={social.label}
                  >
                    <i className={`fa-brands ${social.icon}`}></i>
                  </Link>
                ))}
              </HStack>
            </VStack>
          </Box>

          <Divider
            borderColor={isDarkMode ? "rgba(148, 163, 184, 0.1)" : "rgba(0, 0, 0, 0.08)"}
          />

          {/* Bottom Section */}
          <VStack spacing={4} align="center">
            <Text
              fontSize="sm"
              color={isDarkMode ? "#94a3b8" : "#64748b"}
              textAlign="center"
            >
              Built with <span style={{ color: "#7c3aed" }}>❤️</span> using React ⚛️, Chakra UI 💎, and Framer Motion ✨
            </Text>
            <Text
              fontSize="xs"
              color={isDarkMode ? "#64748b" : "#94a3b8"}
            >
              © {currentYear} Dibakar Debnath. All rights reserved.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

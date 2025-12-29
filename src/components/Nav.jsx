import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  Heading,
  Link,
  IconButton,
  useDisclosure,
  VStack,
  Spacer,
  Button,
  HStack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Link as ScrollLink } from "react-scroll";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useDarkMode } from "../context/DarkModeContext";
import "./Nav.css";

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResumeDownload = () => {
    window.open(
      "https://drive.google.com/uc?id=1_iC4GevxSiYGFBwJ9xwnlVBFH2L8wLxW&export=download",
      "_blank"
    );
  };

  const navLinks = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Skills", to: "skills" },
    { label: "Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <>
      <Box
        as="nav"
        id="nav-menu"
        className={`nav-header ${isScrolled ? "scrolled" : ""} ${
          isDarkMode ? "dark" : ""
        }`}
        position="sticky"
        top="0"
        zIndex="100"
        backdropFilter="blur(8px)"
        bg={isDarkMode ? "rgba(15, 23, 42, 0.8)" : "rgba(255, 255, 255, 0.8)"}
        borderBottom={`1px solid ${
          isDarkMode ? "rgba(148, 163, 184, 0.1)" : "rgba(0, 0, 0, 0.08)"
        }`}
        boxShadow={isScrolled ? "0 4px 12px rgba(0, 0, 0, 0.08)" : "none"}
        transition="all 0.3s ease"
      >
        <Container
          maxW="container.2xl"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          h="80px"
          px={[4, 6, 8]}
        >
          {/* Logo */}
          <Box className="nav-logo">
            <Heading
              as="h1"
              size="lg"
              fontWeight="700"
              cursor="pointer"
              color={isDarkMode ? "#f1f5f9" : "#0f172a"}
              display="flex"
              alignItems="center"
              gap="8px"
            >
              Dibakar
              <Box as="span" color="#7c3aed">
                Debnath
              </Box>
            </Heading>
          </Box>

          <Spacer />

          {/* Desktop Navigation */}
          <HStack
            as="ul"
            spacing={0}
            display={["none", "none", "none", "flex", "flex"]}
            listStyleType="none"
            className="nav-links-desktop"
          >
            {navLinks.map((link) => (
              <Box
                as="li"
                key={link.to}
                className="nav-link-item"
                position="relative"
              >
                <Link
                  as={ScrollLink}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  className="nav-link"
                  px="16px"
                  py="8px"
                  color={isDarkMode ? "#cbd5e1" : "#475569"}
                  fontSize="0.95rem"
                  fontWeight="500"
                  _hover={{
                    color: "#7c3aed",
                    transition: "color 0.3s ease",
                  }}
                  _activeLink={{
                    color: "#7c3aed",
                    fontWeight: "600",
                  }}
                  position="relative"
                  display="inline-block"
                >
                  {link.label}
                  <Box
                    className="nav-link-underline"
                    position="absolute"
                    bottom="-4px"
                    left="50%"
                    width="0"
                    height="2px"
                    bg="#7c3aed"
                    transition="all 0.3s ease"
                    transform="translateX(-50%)"
                  />
                </Link>
              </Box>
            ))}
          </HStack>

          {/* Action Buttons */}
          <HStack spacing={3} ml={8} display={["none", "none", "none", "flex"]}>
            <IconButton
              icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
              onClick={toggleDarkMode}
              variant="ghost"
              color={isDarkMode ? "#f1f5f9" : "#0f172a"}
              _hover={{
                bg: isDarkMode ? "rgba(124, 58, 237, 0.1)" : "rgba(124, 58, 237, 0.1)",
              }}
              aria-label="Toggle dark mode"
              borderRadius="8px"
            />
            <Button
              size="sm"
              className="btn-resume"
              onClick={handleResumeDownload}
              bg="#7c3aed"
              color="white"
              _hover={{ bg: "#6d28d9", transform: "translateY(-2px)" }}
              fontWeight="600"
              borderRadius="8px"
              transition="all 0.3s ease"
            >
              Resume
            </Button>
          </HStack>

          {/* Mobile Menu Button */}
          <HStack spacing={2} display={["flex", "flex", "flex", "none"]}>
            <IconButton
              icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
              onClick={toggleDarkMode}
              variant="ghost"
              color={isDarkMode ? "#f1f5f9" : "#0f172a"}
              _hover={{
                bg: isDarkMode ? "rgba(124, 58, 237, 0.1)" : "rgba(124, 58, 237, 0.1)",
              }}
              aria-label="Toggle dark mode"
              borderRadius="8px"
            />
            <IconButton
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="ghost"
              color={isDarkMode ? "#f1f5f9" : "#0f172a"}
              _hover={{
                bg: isDarkMode ? "rgba(148, 163, 184, 0.1)" : "rgba(0, 0, 0, 0.08)",
              }}
              aria-label="Open menu"
              borderRadius="8px"
            />
          </HStack>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bg={isDarkMode ? "#1e293b" : "#ffffff"}
          color={isDarkMode ? "#f1f5f9" : "#0f172a"}
        >
          <DrawerCloseButton
            color={isDarkMode ? "#f1f5f9" : "#0f172a"}
            mt="4"
          />
          <DrawerBody pt={12}>
            <VStack spacing={6} align="stretch">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  as={ScrollLink}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={400}
                  onClick={onClose}
                  fontSize="lg"
                  fontWeight="500"
                  color={isDarkMode ? "#cbd5e1" : "#475569"}
                  _hover={{ color: "#7c3aed" }}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                w="full"
                className="btn-resume"
                onClick={() => {
                  handleResumeDownload();
                  onClose();
                }}
                bg="#7c3aed"
                color="white"
                _hover={{ bg: "#6d28d9" }}
                fontWeight="600"
                borderRadius="8px"
                mt={4}
              >
                Download Resume
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};



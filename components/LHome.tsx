"use client";

import { Box, Flex, Text, Heading, Image, Link, Icon } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { BsGithub, BsTwitterX, BsArrowRight } from "react-icons/bs";
import {
  confirmationCommand,
  installationCommand,
  introCode,
} from "@/app/data/CodeSnippets";
import { ScrollRail } from "./ScrollRail";
import Footer from "./Footer";

export const Divider = () => <Box height="1px" bg="var(--border)" my={{ base: "32px", md: "64px" }} />;

const LHome = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto" pt={{ base: "60px", lg: "0" }}>
        <Box maxW="1000px" mx="auto" px={{ base: "16px", md: "48px" }} pt={{ base: "40px", md: "72px" }} pb="96px">
          <Box
            id="hero"
            data-section-title="Overview"
            scrollMarginTop="80px"
            position="relative"
            zIndex="1"
            mb="0"
          >
            <Flex 
              align="center" 
              gap={{ base: "10px", md: "20px" }} 
              mb="28px" 
              justifyContent="center"
              direction={{ base: "column", md: "row" }}
            >
              <Image
                src="https://ik.imagekit.io/cin2tn3bj/penta_logo_white.png"
                w={{ base: "60px", md: "100px" }}
                h={{ base: "60px", md: "100px" }}
              />
              <Text
                fontFamily="var(--font-display)"
                fontSize={{ base: "36px", md: "65px" }}
                fontWeight="800"
                letterSpacing="-0.04em"
                color="var(--text-1)"
                lineHeight="1"
                mt={{ base: "0", md: "20px" }}
              >
                PENTAGON
              </Text>
            </Flex>

            <Text
              fontFamily="var(--font-body)"
              fontSize={{ base: "15px", md: "17px" }}
              textAlign="center"
              color="var(--text-2)"
              lineHeight="1.75"
              maxW="100%"
              fontWeight="500"
              mb="24px"
            >
              A modern, blazing‑fast high‑performance Python web framework built
              for developers who want to ship APIs and applications without
              boilerplate.
            </Text>

            {/* Author + links row */}
            <Flex align="center" gap="6px" wrap="wrap" justify="center">
              {/* Avatar */}
              <Link
                as="a"
                href="https://github.com/abde1khaliq"
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                gap="7px"
                px="10px"
                py="5px"
                borderRadius="full"
                border="1px solid var(--border-mid)"
                bg="var(--bg-raised)"
                transition="border-color 180ms ease, background 180ms ease"
                _hover={{
                  borderColor: "var(--border-hi)",
                  bg: "var(--bg-hover)",
                }}
                textDecoration="none"
              >
                <Image
                  src="https://github.com/abdelkhaliq.png"
                  alt="@abdelkhaliq"
                  w="18px"
                  h="18px"
                  borderRadius="full"
                  flexShrink={0}
                />
                <Text
                  fontFamily="var(--font-mono)"
                  fontSize="11px"
                  color="var(--text-2)"
                  letterSpacing="0.02em"
                >
                  by @abdelkhaliq
                </Text>
              </Link>

              {/* Dot separator */}
              <Box
                w="3px"
                h="3px"
                borderRadius="full"
                bg="var(--text-4)"
                flexShrink={0}
              />

              {/* GitHub repo */}
              <Link
                as="a"
                href="https://github.com/abde1khaliq/pentagon"
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                gap="6px"
                px="10px"
                py="5px"
                borderRadius="full"
                border="1px solid var(--border-mid)"
                bg="var(--bg-raised)"
                transition="border-color 180ms ease, background 180ms ease, color 180ms ease"
                _hover={{
                  borderColor: "var(--border-hi)",
                  bg: "var(--bg-hover)",
                }}
                textDecoration="none"
              >
                <Icon as={BsGithub} boxSize="12px" color="var(--text-3)" />
                <Text
                  fontFamily="var(--font-mono)"
                  fontSize="11px"
                  color="var(--text-2)"
                  letterSpacing="0.02em"
                >
                  abde1khaliq/pentagon
                </Text>
              </Link>

              {/* Dot separator */}
              <Box
                w="3px"
                h="3px"
                borderRadius="full"
                bg="var(--text-4)"
                flexShrink={0}
              />

              {/* Twitter / X */}
              <Link
                as="a"
                href="https://twitter.com/abdelkhaliq"
                target="_blank"
                rel="noopener noreferrer"
                display="flex"
                alignItems="center"
                gap="6px"
                px="10px"
                py="5px"
                borderRadius="full"
                border="1px solid var(--border-mid)"
                bg="var(--bg-raised)"
                transition="border-color 180ms ease, background 180ms ease"
                _hover={{
                  borderColor: "var(--border-hi)",
                  bg: "var(--bg-hover)",
                }}
                textDecoration="none"
              >
                <Icon as={BsTwitterX} boxSize="11px" color="var(--text-3)" />
                <Text
                  fontFamily="var(--font-mono)"
                  fontSize="11px"
                  color="var(--text-2)"
                  letterSpacing="0.02em"
                >
                  @abdelkhaliq
                </Text>
              </Link>
            </Flex>
          </Box>

          <Divider />

          <Box
            id="introduction"
            data-section-title="Introduction"
            scrollMarginTop="80px"
          >
            <Heading
              fontFamily="var(--font-display)"
              fontSize={{ base: "24px", md: "30px" }}
              fontWeight="700"
              letterSpacing="-0.025em"
              color="var(--text-1)"
              mb="12px"
            >
              What is Pentagon?
            </Heading>
            <Text
              fontFamily="var(--font-body)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Pentagon is a lightning‑fast Python web framework built for
              developers who want to create APIs and web applications
              effortlessly. It combines speed with a clean, intuitive file
              structure, so you can focus on building instead of boilerplate.
              Take a look at how simple its syntax can be.
            </Text>
            <CodeSnippetBlock snippet={introCode} />
          </Box>

          <Divider />

          <Box
            id="installation"
            data-section-title="Installation"
            scrollMarginTop="80px"
          >
            <Heading
              fontFamily="var(--font-display)"
              fontSize={{ base: "24px", md: "30px" }}
              fontWeight="700"
              letterSpacing="-0.025em"
              color="var(--text-1)"
              mb="12px"
            >
              Installation
            </Heading>
            <Text
              fontFamily="var(--font-body)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Installing Pentagon is simple and straightforward. One command is
              all it takes to get started:
            </Text>
            <CodeSnippetBlock snippet={installationCommand} />
            <Text
              fontFamily="var(--font-body)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mt="24px"
              mb="20px"
              fontWeight="300"
              lineHeight="1.8"
            >
              To confirm everything installed correctly, run:
            </Text>
            <CodeSnippetBlock snippet={confirmationCommand} />
          </Box>

          <Link
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt="80px"
            px="20px"
            py="16px"
            borderRadius="10px"
            border="1px solid var(--border)"
            bg="var(--bg-surface)"
            transition="border-color 200ms ease, background 200ms ease"
            _hover={{
              borderColor: "var(--border-mid)",
              bg: "var(--bg-raised)",
            }}
            href="/your-first-project"
            textDecoration="none"
            cursor="pointer"
          >
            <Box>
              <Text
                fontFamily="var(--font-mono)"
                fontSize="9px"
                color="var(--text-3)"
                letterSpacing="0.12em"
                textTransform="uppercase"
                mb="4px"
              >
                Up next
              </Text>
              <Text
                fontFamily="var(--font-display)"
                fontSize="14px"
                fontWeight="600"
                color="var(--text-1)"
                letterSpacing="-0.01em"
              >
                Quick Start
              </Text>
            </Box>
            <Icon as={BsArrowRight} boxSize="16px" color="var(--text-3)" />
          </Link>

          <Footer />
        </Box>
      </Box>
      <ScrollRail />
    </>
  );
};

export default LHome;

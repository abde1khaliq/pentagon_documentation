"use client";

import { Box, Heading, Text, Link, Icon, Flex, Code } from "@chakra-ui/react";
import { Divider } from "./LHome";
import { BsArrowRight, BsCheckCircle, BsCodeSquare, BsDatabase, BsShieldCheck, BsTerminal } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const TutorialOverview = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto">
        <Box maxW="1000px" mx="auto" px="48px" pt="72px" pb="96px">
          <Box
            id="tutorial-overview"
            data-section-title="Tutorial Overview"
            scrollMarginTop="80px"
          >
            <Heading
              fontFamily="var(--font-syne)"
              fontSize="42px"
              fontWeight="800"
              letterSpacing="-0.04em"
              color="var(--text-1)"
              mb="16px"
            >
              The Task API Project
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="19px"
              color="var(--text-2)"
              mb="32px"
              fontWeight="300"
              lineHeight="1.8"
            >
              In this tutorial, we are going to build a **Task Management API**. This project
              is designed to teach you how Pentagon handles the entire lifecycle of a 
              backend request—from database modeling to exposing JSON endpoints.
            </Text>

            <Box 
              bg="var(--bg-surface)" 
              p="32px" 
              borderRadius="16px" 
              border="1px solid var(--border)"
              mb="48px"
            >
              <Heading size="md" mb="20px" color="var(--text-1)" fontFamily="var(--font-syne)">
                The Goal: What we're building
              </Heading>
              <Text color="var(--text-2)" mb="24px" fontSize="15px">
                We'll create a system where users can create tasks and list them. 
                Our API will return clean, structured JSON like this:
              </Text>
              <Box 
                bg="black" 
                p="20px" 
                borderRadius="8px" 
                border="1px solid var(--border-mid)"
                fontFamily="var(--font-mono)"
                fontSize="13px"
                color="var(--accent-bright)"
              >
                <pre>{`{
  "id": 1,
  "title": "Complete Pentagon Tutorial",
  "description": "Follow the steps to build a Task API",
  "completed": false
}`}</pre>
              </Box>
            </Box>
            
            <Heading size="md" mb="24px" color="var(--text-1)" fontFamily="var(--font-syne)">
                Project Roadmap
            </Heading>
            <Flex direction="column" gap="20px">
              {[
                {
                  title: "Initializing the Project",
                  desc: "Bootstrap your application from scratch using the Pentagon CLI.",
                  icon: BsTerminal,
                  href: "/tutorial/step-0"
                },
                {
                  title: "Defining the Task Model",
                  desc: "Create the database structure using SQLAlchemy.",
                  icon: BsDatabase,
                  href: "/tutorial/step-1"
                },
                {
                  title: "Creating Data Schemas",
                  desc: "Define request and response validation with Pydantic.",
                  icon: BsShieldCheck,
                  href: "/tutorial/step-2"
                },
                {
                  title: "Implementing the Service Layer",
                  desc: "Write the business logic to interact with the database.",
                  icon: BsCodeSquare,
                  href: "/tutorial/step-3"
                },
                {
                  title: "Building the Endpoints",
                  desc: "Create the HTTP routes to expose your logic to the world.",
                  icon: BsTerminal,
                  href: "/tutorial/step-4"
                }
              ].map((step, i) => (
                <Link 
                  key={i}
                  href={step.href}
                  display="flex"
                  alignItems="center"
                  gap="20px"
                  p="20px"
                  borderRadius="12px"
                  border="1px solid var(--border)"
                  bg="var(--bg-surface)"
                  transition="all 200ms ease"
                  _hover={{
                    borderColor: "var(--border-mid)",
                    bg: "var(--bg-raised)",
                  }}
                  textDecoration="none"
                >
                  <Box color="var(--accent-bright)">
                    <Icon as={step.icon} boxSize="18px" />
                  </Box>
                  <Box>
                    <Text fontWeight="600" color="var(--text-1)" fontSize="16px">
                      {step.title}
                    </Text>
                    <Text color="var(--text-3)" fontSize="13px">
                      {step.desc}
                    </Text>
                  </Box>
                </Link>
              ))}
            </Flex>
          </Box>

          <Divider />

          <Link
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt="80px"
            px="24px"
            py="18px"
            borderRadius="10px"
            border="1px solid var(--border)"
            bg="var(--bg-surface)"
            transition="border-color 200ms ease, background 200ms ease"
            _hover={{
              borderColor: "var(--border-mid)",
              bg: "var(--bg-raised)",
            }}
            href="/tutorial/step-0"
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
                fontFamily="var(--font-syne)"
                fontSize="14px"
                fontWeight="600"
                color="var(--text-1)"
                letterSpacing="-0.01em"
              >
                Initializing the Project
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

export default TutorialOverview;

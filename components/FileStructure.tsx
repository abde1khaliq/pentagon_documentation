"use client";

import { Box, Flex, Heading, Icon, Text, Image, Link } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const FileStructure = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto">
        <Box maxW="1000px" mx="auto" px="48px" pt="72px" pb="96px">
          <Box
            id="pentagons-file-structure"
            data-section-title="Pentagon's File Structure"
            scrollMarginTop="80px"
          >
            <Heading
              fontFamily="var(--font-display)"
              fontSize="30px"
              fontWeight="700"
              letterSpacing="-0.025em"
              color="var(--text-1)"
              mb="12px"
            >
              Pentagon's File Structure
            </Heading>
            <Text
              fontFamily="var(--font-body)"
              fontSize="15px"
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              The file structure of Pentagon is designed to be simple and
              intuitive, allowing developers to easily navigate and manage their
              projects. At the root of your project, you will find several key
              directories and files that are essential for the functioning of
              your application.
            </Text>
          </Box>

          {/* ── File tree + descriptions ── */}
          <Box mt="48px">
            {/* Tree card */}
            <Box
              bg="var(--bg-surface)"
              border="1px solid var(--border)"
              borderRadius="10px"
              overflow="hidden"
              mb="40px"
            >
              <Box px="24px" py="20px" overflowX="auto">
                <pre
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    lineHeight: "1.9",
                    color: "var(--text-2)",
                    whiteSpace: "pre",
                  }}
                >{`my_project/
├── runserver.py
├── README.md
├── config.py
└── app/
    ├── __init__.py
    ├── database/
    │   ├── __init__.py
    │   └── connection.py
    ├── models/
    │   └── __init__.py
    ├── router/
    │   ├── __init__.py
    │   └── index.py
    ├── services/
    │   └── __init__.py
    ├── schemas/
    │   └── __init__.py
    └── utils/
        └── __init__.py`}</pre>
              </Box>
            </Box>

            {/* Descriptions grid */}
            <Flex direction="column" gap="2px">
              {[
                {
                  name: "runserver.py",
                  desc: "Entry point. Run this file to start the development server.",
                },
                {
                  name: "config.py",
                  desc: "This config file is to load all web application components. such as routes and models",
                },
                {
                  name: "app/",
                  desc: "The core application package. Everything inside here is your actual product.",
                },
                {
                  name: "app/database/",
                  desc: "Database setup and connection logic. connection.py bootstraps your DB client and exposes a reusable session or engine.",
                },
                {
                  name: "app/models/",
                  desc: "ORM models or data classes that map to your database tables and define your data shapes.",
                },
                {
                  name: "app/router/",
                  desc: "Route definitions for your web application, index.py is just an example.",
                },
                {
                  name: "app/services/",
                  desc: "Business logic layer. Keeps your routes thin by handling data processing, external calls, and complex operations.",
                },
                {
                  name: "app/schemas/",
                  desc: "Request and response schemas. Defines validation rules and serialization for data coming in and going out.",
                },
                {
                  name: "app/utils/",
                  desc: "Shared helper functions and utilities that don't belong to a specific layer.",
                },
              ].map((item, i) => (
                <Flex
                  key={i}
                  align="flex-start"
                  gap="16px"
                  px="20px"
                  py="14px"
                  borderRadius="8px"
                  bg="transparent"
                  border="1px solid transparent"
                >

                  <Box>
                    <Text
                      fontFamily="var(--font-mono)"
                      fontSize="12.5px"
                      fontWeight="500"
                      color="var(--accent-bright)"
                      mb="3px"
                      letterSpacing="0.01em"
                    >
                      {item.name}
                    </Text>
                    <Text
                      fontFamily="var(--font-body)"
                      fontSize="13.5px"
                      color="var(--text-2)"
                      lineHeight="1.65"
                      fontWeight="300"
                    >
                      {item.desc}
                    </Text>
                  </Box>
                </Flex>
              ))}
            </Flex>
          </Box>

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
            href="/file-structure"
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
                File Structure
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

export default FileStructure;

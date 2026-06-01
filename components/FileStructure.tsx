"use client";

import { Box, Flex, Heading, Icon, Text, Image, Link } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const FileStructure = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto" pt={{ base: "60px", lg: "0" }}>
        <Box maxW="1000px" mx="auto" px={{ base: "16px", md: "48px" }} pt={{ base: "40px", md: "72px" }} pb="96px">
          <Box
            id="pentagons-file-structure"
            data-section-title="Pentagon's File Structure"
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
              Pentagon's File Structure
            </Heading>
            <Text
              fontFamily="var(--font-body)"
              fontSize={{ base: "15px", md: "17px" }}
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
                    fontSize: "14px",
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

            <Flex direction="column" gap="0">
              <Text
                fontFamily="var(--font-mono)"
                fontSize="14px"
                color="white"
                letterSpacing="0.14em"
                textTransform="uppercase"
                px="20px"
                pb="10px"
                pt="4px"
              >
                Root
              </Text>

              {[
                {
                  name: "runserver.py",
                  desc: "This file is used to start your web application.",
                },
                {
                  name: "config.py",
                  desc: "This file is what your web application uses to mount the endpoints, models etc automatically.",
                },
              ].map((item, i) => (
                <Flex
                  key={i}
                  align="flex-start"
                  gap="14px"
                  px="20px"
                  py="16px"
                  borderTop="1px solid var(--border)"
                  transition="background 160ms ease"
                  _hover={{ bg: "var(--bg-raised)" }}
                >
                  <Box flex="1">
                    <Flex align="center" gap="8px" mb="5px">
                      <Text
                        fontFamily="var(--font-syne)"
                        fontSize="17px"
                        fontWeight="500"
                        color="var(--text-1)"
                        letterSpacing="0.01em"
                      >
                        {item.name}
                      </Text>
                    </Flex>
                    <Text
                      fontFamily="var(--font-syne)"
                      fontSize="14px"
                      color="var(--text-2)"
                      lineHeight="1.7"
                      fontWeight="500"
                    >
                      {item.desc}
                    </Text>
                  </Box>
                </Flex>
              ))}

              {/* app/ group */}
              <Text
                fontFamily="var(--font-mono)"
                fontSize="14px"
                color="white"
                letterSpacing="0.14em"
                textTransform="uppercase"
                px="20px"
                pb="10px"
                pt="28px"
              >
                app/
              </Text>

              {[
                {
                  name: "database/",
                  desc: "This directory holds your database connections and anything related to talking to your database.",
                },
                {
                  name: "models/",
                  desc: "This directory is where you define your data models.",
                },
                {
                  name: "router/",
                  desc: "Your endpoints end up here, Pentagon mounts it automatically.",
                },
                {
                  name: "services/",
                  desc: "This is where you write your business logic.",
                },
                {
                  name: "schemas/",
                  desc: "This is where you define your data validation schemas.",
                },
                {
                  name: "utils/",
                  desc: "This is a general purpose utilities directory, you can put anything in here that doesn't fit in the other directories.",
                },
              ].map((item, i, arr) => (
                <Flex
                  key={i}
                  align="flex-start"
                  gap="14px"
                  px="20px"
                  py="16px"
                  borderTop="1px solid var(--border)"
                  borderBottom={
                    i === arr.length - 1 ? "1px solid var(--border)" : "none"
                  }
                  transition="background 160ms ease"
                  _hover={{ bg: "var(--bg-raised)" }}
                >
                  <Box flex="1">
                    <Flex align="center" gap="8px" mb="5px">
                      <Text
                        fontFamily="var(--font-syne)"
                        fontSize="17px"
                        fontWeight="500"
                        color="var(--text-1)"
                        letterSpacing="0.01em"
                      >
                        {item.name}
                      </Text>
                    </Flex>
                    <Text
                      fontFamily="var(--font-syne)"
                      fontSize="14px"
                      color="var(--text-2)"
                      lineHeight="1.7"
                      fontWeight="500"
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
            href="/your-first-project/runserver"
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
                runserver.py
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

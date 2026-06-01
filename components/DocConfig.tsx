"use client";

import { Box, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { configFileCode } from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const DocConfig = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto">
        <Box maxW="1000px" mx="auto" px="48px" pt="72px" pb="96px">
          <Box
            id="config-py"
            data-section-title="config.py"
            scrollMarginTop="80px"
          >
            <Heading
              fontFamily="var(--font-syne)"
              fontSize="30px"
              fontWeight="700"
              letterSpacing="-0.025em"
              color="var(--text-1)"
              mb="12px"
            >
              config.py
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              The{" "}
              <Text as="span" color="var(--text-1)" fontWeight="500">
                config.py
              </Text>{" "}
              file contains the logic for automatic component discovery. It
              ensures that your routers and models are correctly loaded into the
              Pentagon application without manual imports.
            </Text>
            <CodeSnippetBlock snippet={configFileCode} />
          </Box>

          <Divider />

          <Box
            id="how-it-works"
            data-section-title="How it works"
            scrollMarginTop="80px"
          >
            <Heading
              fontFamily="var(--font-syne)"
              fontSize="24px"
              fontWeight="700"
              color="var(--text-1)"
              mb="16px"
            >
              Automatic Discovery
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="16px"
              color="var(--text-2)"
              lineHeight="1.8"
              mb="24px"
            >
              The{" "}
              <Text as="span" color="var(--text-1)" fontWeight="500">
                setup_app
              </Text>{" "}
              function iterates through the{" "}
              <Text as="span" color="var(--text-1)" fontWeight="500">
                app/router/
              </Text>{" "}
              and{" "}
              <Text as="span" color="var(--text-1)" fontWeight="500">
                app/models/
              </Text>{" "}
              directories. For each Python file found (excluding{" "}
              <Text as="span" color="var(--text-1)">
                __init__.py
              </Text>
              ), it uses{" "}
              <Text as="span" color="var(--accent-bright)">
                importlib
              </Text>{" "}
              to dynamically import the module.
            </Text>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="16px"
              color="var(--text-2)"
              lineHeight="1.8"
            >
              By importing these modules, the route decorators (like{" "}
              <Text as="span" color="var(--accent-bright)">
                @app.get
              </Text>
              ) are executed, which registers the endpoints with the main
              Pentagon instance. This "magic" is what allows Pentagon to stay
              boilerplate-free.
            </Text>
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
            href="/your-first-project/database"
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
                database/connection.py
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

export default DocConfig;

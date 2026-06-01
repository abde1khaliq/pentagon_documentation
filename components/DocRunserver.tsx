"use client";

import { Box, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { runserverFileCode } from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const DocRunserver = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto" pt={{ base: "60px", lg: "0" }}>
        <Box maxW="1000px" mx="auto" px={{ base: "16px", md: "48px" }} pt={{ base: "40px", md: "72px" }} pb="96px">
          <Box
            id="runserver-py"
            data-section-title="runserver.py"
            scrollMarginTop="80px"
          >
            <Heading
              fontFamily="var(--font-syne)"
              fontSize={{ base: "24px", md: "30px" }}
              fontWeight="700"
              letterSpacing="-0.025em"
              color="var(--text-1)"
              mb="12px"
            >
              runserver.py
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              The{" "}
              <Text as="span" color="var(--text-1)" fontWeight="500">
                runserver.py
              </Text>{" "}
              file is the main entry point of your Pentagon application. It
              initializes the framework, sets up the application components, and
              starts the development server.
            </Text>
            <CodeSnippetBlock snippet={runserverFileCode} />
          </Box>

          <Divider />

          <Box
            id="initialization"
            data-section-title="Initialization"
            scrollMarginTop="80px"
          >
            <Heading
              fontFamily="var(--font-syne)"
              fontSize="24px"
              fontWeight="700"
              color="var(--text-1)"
              mb="16px"
            >
              Breaking it down
            </Heading>
            <Box mb="24px">
              <Text
                fontFamily="var(--font-mono)"
                fontSize="14px"
                color="var(--accent-bright)"
                mb="8px"
              >
                Pentagon(title=..., description=...)
              </Text>
              <Text
                fontFamily="var(--font-syne)"
                fontSize="16px"
                color="var(--text-2)"
                lineHeight="1.7"
              >
                This creates your main application instance. The title and
                description you provide here will be used in the automatic API
                documentation and the welcome page.
              </Text>
            </Box>

            <Box mb="24px">
              <Text
                fontFamily="var(--font-mono)"
                fontSize="14px"
                color="var(--accent-bright)"
                mb="8px"
              >
                setup_app(app)
              </Text>
              <Text
                fontFamily="var(--font-syne)"
                fontSize="16px"
                color="var(--text-2)"
                lineHeight="1.7"
              >
                This function (imported from{" "}
                <Text as="span" color="var(--text-1)">
                  config.py
                </Text>
                ) scans your project for routers and models and mounts them
                automatically.
              </Text>
            </Box>

            <Box mb="24px">
              <Text
                fontFamily="var(--font-mono)"
                fontSize="14px"
                color="var(--accent-bright)"
                mb="8px"
              >
                run_app(app, watch=True)
              </Text>
              <Text
                fontFamily="var(--font-syne)"
                fontSize="16px"
                color="var(--text-2)"
                lineHeight="1.7"
              >
                Starts the WSGI development server. When{" "}
                <Text as="span" color="var(--text-1)">
                  watch=True
                </Text>{" "}
                is set, the server will automatically reload whenever you make
                changes to your Python files.
              </Text>
            </Box>
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
            href="/your-first-project/config"
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
                config.py
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

export default DocRunserver;

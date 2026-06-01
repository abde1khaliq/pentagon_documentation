"use client";

import { Box, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { indexRouterFileCode } from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const DocIndexRouter = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto" pt={{ base: "60px", lg: "0" }}>
        <Box maxW="1000px" mx="auto" px={{ base: "16px", md: "48px" }} pt={{ base: "40px", md: "72px" }} pb="96px">
          <Box
            id="router-index-py"
            data-section-title="router/index.py"
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
              router/index.py
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              This is an example router file. It demonstrates how to define a
              simple GET endpoint that renders a welcome page.
            </Text>
            <CodeSnippetBlock snippet={indexRouterFileCode} />
          </Box>

          <Divider />

          <Box
            id="routing-logic"
            data-section-title="Routing Logic"
            scrollMarginTop="80px"
          >
            <Heading
              fontFamily="var(--font-syne)"
              fontSize="24px"
              fontWeight="700"
              color="var(--text-1)"
              mb="16px"
            >
              How it works
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="16px"
              color="var(--text-2)"
              lineHeight="1.8"
              mb="24px"
            >
              Notice how we import{" "}
              <Text as="span" color="var(--text-1)" fontWeight="500">
                app
              </Text>{" "}
              from{" "}
              <Text as="span" color="var(--text-1)" fontWeight="500">
                runserver
              </Text>
              . This is the same instance we initialized in our entry point.
            </Text>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="16px"
              color="var(--text-2)"
              lineHeight="1.8"
            >
              The{" "}
              <Text as="span" color="var(--accent-bright)">
                render_welcome
              </Text>{" "}
              function is a built-in utility that returns a beautiful, themed
              HTML response. You can replace this with your own logic to return
              JSON, strings, or custom HTML.
            </Text>
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
            href="/tutorial"
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
                Tutorial: Task API
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

export default DocIndexRouter;

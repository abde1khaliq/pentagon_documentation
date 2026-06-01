"use client";

import { Box, Heading, Icon, Text, Link } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { docsMetadataCode } from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const ApiDocs = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto">
        <Box maxW="1000px" mx="auto" px="48px" pt="72px" pb="96px">
          <Box
            id="automatic-documentation"
            data-section-title="Automatic Documentation"
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
              Automatic Documentation
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Pentagon comes with a built-in documentation generator that
              automatically creates a sleek, monochrome API reference for your
              application. You can access it by navigating to{" "}
              <Text as="span" color="var(--accent-bright)" fontWeight="500">
                /docs
              </Text>{" "}
              on your running server.
            </Text>
            <CodeSnippetBlock snippet={docsMetadataCode} />
          </Box>

          <Divider />

          <Box
            id="customizing-docs"
            data-section-title="Customizing Docs"
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
              Customizing Docs
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              You can customize how your endpoints appear in the documentation by
              providing{" "}
              <Text as="span" color="var(--text-1)" fontWeight="500">
                group
              </Text>{" "}
              and{" "}
              <Text as="span" color="var(--text-1)" fontWeight="500">
                description
              </Text>{" "}
              parameters to your route decorators. This allows you to organize
              your API into logical sections and provide clear explanations for
              each endpoint.
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
                Tutorial
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

export default ApiDocs;

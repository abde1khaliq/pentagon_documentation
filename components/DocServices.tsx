"use client";

import { Box, Heading, Text, Link, Icon, Stack } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { serviceLayerCode } from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight, BsCodeSquare } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const DocServices = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto">
        <Box maxW="1000px" mx="auto" px="48px" pt="72px" pb="96px">
          <Box
            id="service-layer"
            data-section-title="Service Layer"
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
              Service Layer
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              The Service Layer is the brain of your application. It 
              houses all your business logic, keeping it separate from 
              your transport layer (routes) and storage layer (models).
            </Text>

            <Box 
              bg="var(--bg-surface)" 
              p="24px" 
              borderRadius="12px" 
              border="1px solid var(--border)"
              mb="40px"
            >
              <Stack direction="row" align="center" gap="12px" mb="12px">
                <Icon as={BsCodeSquare} color="var(--accent-bright)" />
                <Text fontWeight="600" color="var(--text-1)">Clean & Testable Logic</Text>
              </Stack>
              <Text fontSize="14px" color="var(--text-2)" lineHeight="1.6">
                By decoupling logic from your endpoints, you make your 
                code significantly easier to test and reuse. A service 
                method can be called from a web route, a background 
                task, or even an interactive shell.
              </Text>
            </Box>

            <CodeSnippetBlock snippet={serviceLayerCode} />

            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mt="48px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Services provide the logic, but the **API Docs** provide 
              the visibility. In the next section, we'll explore how 
              Pentagon automatically generates documentation for your 
              system.
            </Text>
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
            href="/api-docs"
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
                API Docs
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

export default DocServices;

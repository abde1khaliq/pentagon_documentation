"use client";

import { Box, Heading, Icon, Text, Link } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import {
  serviceLayerCode,
  schemaValidationCode,
} from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const Architecture = () => {
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
              The service layer is where you write your business logic. By keeping
              your logic separate from your routes, you make your code more
              maintainable, testable, and reusable. These files should be located
              in the{" "}
              <Text as="span" color="var(--text-1)" fontWeight="500">
                app/services/
              </Text>{" "}
              directory.
            </Text>
            <CodeSnippetBlock snippet={serviceLayerCode} />
          </Box>

          <Divider />

          <Box
            id="schema-validation"
            data-section-title="Schema Validation"
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
              Schema Validation
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Data validation is crucial for any web application. Pentagon
              encourages using Pydantic for defining your data schemas. These
              schemas are used for validating incoming request data and formatting
              outgoing response data.
            </Text>
            <CodeSnippetBlock snippet={schemaValidationCode} />
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
            href="/routing"
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
                Routing
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

export default Architecture;

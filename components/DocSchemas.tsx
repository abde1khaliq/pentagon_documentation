"use client";

import { Box, Heading, Text, Link, Icon, Stack } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { schemaValidationCode } from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight, BsShieldFillCheck } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const DocSchemas = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto">
        <Box maxW="1000px" mx="auto" px="48px" pt="72px" pb="96px">
          <Box
            id="schemas-validation"
            data-section-title="Schemas & Validation"
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
              Schemas & Validation
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Schemas are the "blueprint" of your API. They define the 
              expected structure of incoming request data and the format 
               of outgoing response data using **Pydantic**.
            </Text>

            <Box 
              bg="var(--bg-surface)" 
              p="24px" 
              borderRadius="12px" 
              border="1px solid var(--border)"
              mb="40px"
            >
              <Stack direction="row" align="center" gap="12px" mb="12px">
                <Icon as={BsShieldFillCheck} color="var(--accent-bright)" />
                <Text fontWeight="600" color="var(--text-1)">Data Integrity</Text>
              </Stack>
              <Text fontSize="14px" color="var(--text-2)" lineHeight="1.6">
                Validation is your first line of defense. By defining 
                schemas, you ensure that your application only processes 
                data that meets your exact requirements, preventing 
                injection attacks and unexpected runtime errors.
              </Text>
            </Box>

            <CodeSnippetBlock snippet={schemaValidationCode} />

            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mt="48px"
              fontWeight="300"
              lineHeight="1.8"
            >
              While schemas define the shape of your data, the **Service 
              Layer** is where the actual logic happens. In the next 
              section, we'll see how to implement reusable business 
              logic.
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
            href="/services"
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
                Service Layer
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

export default DocSchemas;

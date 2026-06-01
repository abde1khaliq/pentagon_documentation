"use client";

import { Box, Heading, Text, Link, Icon, Stack, Flex, Badge } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { tutorialRouterCode } from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight, BsCompass } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const TutorialStep4 = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto" pt={{ base: "60px", lg: "0" }}>
        <Box maxW="1000px" mx="auto" px={{ base: "16px", md: "48px" }} pt={{ base: "40px", md: "72px" }} pb="96px">
          <Box
            id="building-the-endpoints"
            data-section-title="Building the Endpoints"
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
              Building the Endpoints
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              We've reached the final step. We've built the foundation, 
              defined the data shapes, and implemented the core logic. 
              Now, we just need to expose it to the world through 
              **HTTP Endpoints**.
            </Text>

            <Box 
              bg="var(--bg-surface)" 
              p="24px" 
              borderRadius="12px" 
              border="1px solid var(--border)"
              mb="40px"
            >
              <Stack direction="row" align="center" gap="12px" mb="16px">
                <Icon as={BsCompass} color="var(--accent-bright)" />
                <Text fontWeight="600" color="var(--text-1)">The Transport Layer</Text>
              </Stack>
              
              <Flex direction="column" gap="12px">
                {[
                  { method: "GET", color: "blue", desc: "Used for retrieving data. Safe and idempotent." },
                  { method: "POST", color: "green", desc: "Used for creating new resources. Not idempotent." },
                  { method: "PUT", color: "orange", desc: "Used for updating existing resources." },
                  { method: "DELETE", color: "red", desc: "Used for removing resources." }
                ].map((item, i) => (
                  <Flex key={i} gap="12px" align="center">
                    <Badge colorScheme={item.color} variant="solid" w="60px" textAlign="center" borderRadius="4px">
                      {item.method}
                    </Badge>
                    <Text fontSize="13px" color="var(--text-2)">{item.desc}</Text>
                  </Flex>
                ))}
              </Flex>
            </Box>

            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mb="24px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Create your task routes in{" "}
              <Text as="span" color="var(--text-1)" fontWeight="500">
                app/router/tasks.py
              </Text>:
            </Text>
            <CodeSnippetBlock snippet={tutorialRouterCode} />

            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mt="48px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Congratulations! You've built a full-featured, professionally 
              structured Task API from scratch. Your endpoints are now 
              active, validated, and automatically documented. You're ready 
              to ship.
            </Text>
          </Box>

          <Divider />

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
                Learn: Routing
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

export default TutorialStep4;

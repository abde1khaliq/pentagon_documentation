"use client";

import { Box, Heading, Text, Link, Icon, Stack } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { tutorialServiceCode } from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight, BsCodeSquare } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const TutorialStep3 = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto">
        <Box maxW="1000px" mx="auto" px="48px" pt="72px" pb="96px">
          <Box
            id="implementing-the-service-layer"
            data-section-title="Implementing the Service Layer"
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
              Implementing the Service Layer
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Now it's time to write the actual engine of our application. 
              In a professional codebase, we never put complex logic 
              directly inside our routes. We use a **Service Layer** to 
              keep things clean and testable.
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
                <Text fontWeight="600" color="var(--text-1)">Separation of Concerns</Text>
              </Stack>
              <Text fontSize="14px" color="var(--text-2)" lineHeight="1.6">
                By moving logic into services, we ensure that our routes 
                only care about HTTP concerns (like status codes and 
                headers), while our services focus entirely on business 
                rules (like database queries). This makes your code 
                reusable—you could use the same service for a web API, 
                a CLI tool, or a background worker.
              </Text>
            </Box>

            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mb="24px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Implement your task logic in{" "}
              <Text as="span" color="var(--text-1)" fontWeight="500">
                app/services/task_service.py
              </Text>:
            </Text>
            <CodeSnippetBlock snippet={tutorialServiceCode} />

            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mt="48px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Our logic is ready and our data is modeled. All that's left 
              is to open the doors to our application. In the final 
              section, we'll **Build the Endpoints** and see our 
              API come to life.
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
            href="/tutorial/step-4"
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
                Building the Endpoints
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

export default TutorialStep3;

"use client";

import { Box, Heading, Text, Link, Icon, Stack, Code } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { tutorialInitCommand, tutorialNextSteps } from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight, BsTerminalFill } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const TutorialStep0 = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto" pt={{ base: "60px", lg: "0" }}>
        <Box maxW="1000px" mx="auto" px={{ base: "16px", md: "48px" }} pt={{ base: "40px", md: "72px" }} pb="96px">
          <Box
            id="initializing-the-project"
            data-section-title="Initializing the Project"
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
              Initializing the Project
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Let's get our hands dirty. Before we can build any features, we 
              need a solid foundation. Pentagon's CLI is built to handle the 
              scaffolding for you, so you don't have to worry about manual 
              directory setups or boilerplate imports.
            </Text>

            <Box 
              bg="var(--bg-surface)" 
              p="24px" 
              borderRadius="12px" 
              border="1px solid var(--border)"
              mb="40px"
            >
              <Stack direction="row" align="center" gap="12px" mb="12px">
                <Icon as={BsTerminalFill} color="var(--accent-bright)" />
                <Text fontWeight="600" color="var(--text-1)">The Pentagon CLI</Text>
              </Stack>
              <Text fontSize="14px" color="var(--text-2)" lineHeight="1.6">
                Using <Code colorScheme="gray">penta-admin</Code> isn't just 
                about convenience—it's about consistency. It sets up a 
                structure that the framework's auto-loader expects, meaning 
                your components will "just work" as soon as you create them.
              </Text>
            </Box>

            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mb="24px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Pop open your terminal and run these commands to bootstrap your 
              workspace:
            </Text>
            <CodeSnippetBlock snippet={tutorialInitCommand} />
            
            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mt="32px"
              mb="24px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Now, navigate into your project and fire up the dev server. 
              This is your first "sanity check" to ensure the environment 
              is ready for coding:
            </Text>
            <CodeSnippetBlock snippet={tutorialNextSteps} />

            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mt="48px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Now that we have our workspace ready, we need to think about 
              the data our application will handle. In the next section, 
              we'll dive into the **Data Layer** and define our first 
              database model.
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
            href="/tutorial/step-1"
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
                Defining the Task Model
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

export default TutorialStep0;

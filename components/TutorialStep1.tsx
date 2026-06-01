"use client";

import { Box, Heading, Text, Link, Icon, Stack } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { tutorialModelCode } from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight, BsDatabaseFill } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const TutorialStep1 = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto">
        <Box maxW="1000px" mx="auto" px="48px" pt="72px" pb="96px">
          <Box
            id="defining-the-task-model"
            data-section-title="Defining the Task Model"
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
              Defining the Task Model
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Data is the core of any backend. Instead of wrestling with 
              raw SQL queries, we'll use SQLAlchemy to define our data 
              structures as Python classes. This approach, known as 
              **Object-Relational Mapping (ORM)**, makes our code cleaner 
              and type-safe.
            </Text>

            <Box 
              bg="var(--bg-surface)" 
              p="24px" 
              borderRadius="12px" 
              border="1px solid var(--border)"
              mb="40px"
            >
              <Stack direction="row" align="center" gap="12px" mb="12px">
                <Icon as={BsDatabaseFill} color="var(--accent-bright)" />
                <Text fontWeight="600" color="var(--text-1)">Why use an ORM?</Text>
              </Stack>
              <Text fontSize="14px" color="var(--text-2)" lineHeight="1.6">
                ORMs bridge the gap between Python's object-oriented nature 
                and the tabular nature of relational databases. By defining 
                models, you're essentially creating a single source of 
                truth for what a "Task" looks like across your entire 
                application.
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
              Let's define our <Text as="span" color="var(--text-1)" fontWeight="500">Task</Text> model. 
              Create this file at <Text as="span" color="var(--text-1)" fontWeight="500">app/models/task.py</Text>:
            </Text>
            <CodeSnippetBlock snippet={tutorialModelCode} />

            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mt="48px"
              fontWeight="300"
              lineHeight="1.8"
            >
              The model defines how data is stored, but we shouldn't 
              expose our database internal structure directly to our API 
              users. In the next section, we'll create **Schemas** to 
              define the contract for our API's requests and responses.
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
            href="/tutorial/step-2"
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
                Creating Data Schemas
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

export default TutorialStep1;

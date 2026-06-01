"use client";

import { Box, Heading, Icon, Text, Link, Stack } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { databaseConnectionCode } from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight, BsDatabaseFillGear } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const Database = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto" pt={{ base: "60px", lg: "0" }}>
        <Box maxW="1000px" mx="auto" px={{ base: "16px", md: "48px" }} pt={{ base: "40px", md: "72px" }} pb="96px">
          <Box
            id="database-orm"
            data-section-title="Database & ORM"
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
              Database & ORM
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Pentagon integrates seamlessly with **SQLAlchemy**, providing 
              a robust engine to interact with your data. The engine 
              manages the connection pool, while the session factory 
              handles transactional work.
            </Text>

            <Box 
              bg="var(--bg-surface)" 
              p="24px" 
              borderRadius="12px" 
              border="1px solid var(--border)"
              mb="40px"
            >
              <Stack direction="row" align="center" gap="12px" mb="12px">
                <Icon as={BsDatabaseFillGear} color="var(--accent-bright)" />
                <Text fontWeight="600" color="var(--text-1)">The Connection Layer</Text>
              </Stack>
              <Text fontSize="14px" color="var(--text-2)" lineHeight="1.6">
                Your database connection logic typically lives in 
                <Text as="span" color="var(--text-1)">app/database/connection.py</Text>. 
                This is where you define how the framework should talk 
                to SQLite, PostgreSQL, or any other supported database.
              </Text>
            </Box>

            <CodeSnippetBlock snippet={databaseConnectionCode} />
          </Box>

          <Divider />

          <Box
            id="session-management"
            data-section-title="Session Management"
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
              Session Management
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              We recommend the <Text as="span" color="var(--accent-bright)" fontWeight="500">get_db</Text> 
              pattern for session management. This ensures that every 
              request has access to a fresh database session that is 
              automatically closed when the request is finished.
            </Text>
            
            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mt="48px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Now that the data storage and connection are handled, we 
              need to focus on **Data Validation**. In the next section, 
              we'll explore how **Schemas** protect your application 
              from bad data.
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
            href="/schemas"
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
                Schemas & Validation
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

export default Database;

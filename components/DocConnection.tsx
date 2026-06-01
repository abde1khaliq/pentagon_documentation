"use client";

import { Box, Heading, Text, Link, Icon } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { connectionFileCode } from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const DocConnection = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto">
        <Box maxW="1000px" mx="auto" px="48px" pt="72px" pb="96px">
          <Box
            id="database-connection"
            data-section-title="database/connection.py"
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
              database/connection.py
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize="17px"
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              This file sets up the SQLAlchemy engine and session factory. It's
              configured to work with SQLite by default, but can be easily
              extended for other databases via environment variables.
            </Text>
            <CodeSnippetBlock snippet={connectionFileCode} />
          </Box>

          <Divider />

          <Box
            id="database-utilities"
            data-section-title="Utilities"
            scrollMarginTop="80px"
          >
            <Heading
              fontFamily="var(--font-syne)"
              fontSize="24px"
              fontWeight="700"
              color="var(--text-1)"
              mb="16px"
            >
              Key Utilities
            </Heading>
            <Box mb="24px">
              <Text
                fontFamily="var(--font-mono)"
                fontSize="14px"
                color="var(--accent-bright)"
                mb="8px"
              >
                get_db()
              </Text>
              <Text
                fontFamily="var(--font-syne)"
                fontSize="16px"
                color="var(--text-2)"
                lineHeight="1.7"
              >
                A generator function that provides a database session. It uses a{" "}
                <Text as="span" color="var(--text-1)">
                  try...finally
                </Text>{" "}
                block to ensure the session is always closed, even if an error
                occurs during the request.
              </Text>
            </Box>

            <Box mb="24px">
              <Text
                fontFamily="var(--font-mono)"
                fontSize="14px"
                color="var(--accent-bright)"
                mb="8px"
              >
                init_db()
              </Text>
              <Text
                fontFamily="var(--font-syne)"
                fontSize="16px"
                color="var(--text-2)"
                lineHeight="1.7"
              >
                Creates all tables defined in your models. This is typically
                called when your application starts to ensure the database schema
                is up to date.
              </Text>
            </Box>
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
            href="/your-first-project/router"
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
                router/index.py
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

export default DocConnection;

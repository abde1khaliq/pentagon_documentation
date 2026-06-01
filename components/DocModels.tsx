"use client";

import { Box, Heading, Text, Link, Icon, Stack } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import { generalModelCode } from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight, BsDatabaseFill } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const DocModels = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto" pt={{ base: "60px", lg: "0" }}>
        <Box maxW="1000px" mx="auto" px={{ base: "16px", md: "48px" }} pt={{ base: "40px", md: "72px" }} pb="96px">
          <Box
            id="models-orm"
            data-section-title="Models & ORM"
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
              Models & ORM
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Models are the Python representation of your database tables. 
              In Pentagon, we use **SQLAlchemy**, the industry-standard 
              Python ORM, to define these structures.
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
                <Text fontWeight="600" color="var(--text-1)">Defining Tables as Classes</Text>
              </Stack>
              <Text fontSize="14px" color="var(--text-2)" lineHeight="1.6">
                By inheriting from <Text as="span" color="var(--text-1)">Base</Text>, 
                you're telling SQLAlchemy that your class maps to a table. 
                This allows you to perform complex queries using Python 
                syntax instead of raw SQL strings.
              </Text>
            </Box>

            <CodeSnippetBlock snippet={generalModelCode} />

            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mt="48px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Models handle the **storage** of your data. However, to 
              communicate with the database, we need a connection engine 
              and a session factory. In the next section, we'll learn 
              how to set up the **Database** layer.
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
            href="/database"
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
                Database & ORM
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

export default DocModels;

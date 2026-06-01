"use client";

import { Box, Heading, Icon, Text, Link, Stack } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import {
  basicRoutingCode,
  dynamicRoutingCode,
  requestHandlingCode,
} from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight, BsCompass } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const Routing = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto" pt={{ base: "60px", lg: "0" }}>
        <Box maxW="1000px" mx="auto" px={{ base: "16px", md: "48px" }} pt={{ base: "40px", md: "72px" }} pb="96px">
          <Box
            id="routing"
            data-section-title="Routing"
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
              Routing
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Routing is the map of your application. It defines the 
              paths users take to interact with your code. Pentagon 
              provides a simple, decorator-based syntax to register 
              endpoints effortlessly.
            </Text>

            <Box 
              bg="var(--bg-surface)" 
              p="24px" 
              borderRadius="12px" 
              border="1px solid var(--border)"
              mb="40px"
            >
              <Stack direction="row" align="center" gap="12px" mb="12px">
                <Icon as={BsCompass} color="var(--accent-bright)" />
                <Text fontWeight="600" color="var(--text-1)">Defining Endpoints</Text>
              </Stack>
              <Text fontSize="14px" color="var(--text-2)" lineHeight="1.6">
                Endpoints are organized in the <Text as="span" color="var(--text-1)">app/router/</Text> 
                directory. By using decorators like <Text as="span" color="var(--accent-bright)">@app.get</Text>, 
                you're binding a specific URL path to a Python function.
              </Text>
            </Box>

            <CodeSnippetBlock snippet={basicRoutingCode} />
          </Box>

          <Divider />

          <Box
            id="dynamic-routing"
            data-section-title="Dynamic Routing"
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
              Dynamic Parameters
            </Heading>
            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Sometimes paths need to be flexible. Pentagon supports 
              dynamic path parameters, which are passed directly to your 
              handler function as arguments.
            </Text>
            <CodeSnippetBlock snippet={dynamicRoutingCode} />

            <Text
              fontFamily="var(--font-syne)"
              fontSize={{ base: "15px", md: "17px" }}
              color="var(--text-2)"
              mt="48px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Routes define the path, but **Models** define the data 
              behind those paths. In the next section, we'll learn 
              how to use the **ORM** to map Python classes to database 
              tables.
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
            href="/models"
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
                Models & ORM
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

export default Routing;

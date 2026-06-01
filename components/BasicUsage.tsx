"use client";

import { Box, Flex, Heading, Icon, Text, Image, Link } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import {
  projectCreationCommand,
  projectCreationCommandResponse,
  runServerCommand,
  runServerCommandResponse,
} from "@/app/data/CodeSnippets";
import { Divider } from "./LHome";
import { BsArrowRight } from "react-icons/bs";
import Footer from "./Footer";
import { ScrollRail } from "./ScrollRail";

const BasicUsage = () => {
  return (
    <>
      <Box flex="1" minW="0" overflowY="auto">
        <Box maxW="1000px" mx="auto" px="48px" pt="72px" pb="96px">
          <Box
            id="your-first-project"
            data-section-title="Your First Project"
            scrollMarginTop="80px"
          >
            <Heading
              fontFamily="var(--font-display)"
              fontSize="30px"
              fontWeight="700"
              letterSpacing="-0.025em"
              color="var(--text-1)"
              mb="12px"
            >
              Your First Project
            </Heading>
            <Text
              fontFamily="var(--font-body)"
              fontSize="15px"
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              To create a project in Pentagon, run the following command in your
              terminal:
            </Text>
            <CodeSnippetBlock snippet={projectCreationCommand} />
            <Text
              fontFamily="var(--font-body)"
              fontSize="15px"
              color="var(--text-2)"
              mt="24px"
              mb="20px"
              fontWeight="300"
              lineHeight="1.8"
            >
              After running this command you should get this output in your
              terminal:
            </Text>
            <CodeSnippetBlock snippet={projectCreationCommandResponse} />
          </Box>

          <Divider />

          <Box
            id="starting-your-server"
            data-section-title="Starting Your Server"
            scrollMarginTop="80px"
          >
            <Heading
              fontFamily="var(--font-display)"
              fontSize="30px"
              fontWeight="700"
              letterSpacing="-0.025em"
              color="var(--text-1)"
              mb="12px"
            >
              Starting your server
            </Heading>
            <Text
              fontFamily="var(--font-body)"
              fontSize="15px"
              color="var(--text-2)"
              mb="36px"
              fontWeight="300"
              lineHeight="1.8"
            >
              To start your server, you have to navigate to the project
              directory then run the server:
            </Text>
            <CodeSnippetBlock snippet={runServerCommand} />
            <Text
              fontFamily="var(--font-body)"
              fontSize="15px"
              color="var(--text-2)"
              mt="24px"
              mb="20px"
              fontWeight="300"
              lineHeight="1.8"
            >
              After running this command you should get this output in your
              terminal meaning, your server is running and you can access your
              web app!
            </Text>
            <CodeSnippetBlock snippet={runServerCommandResponse} />
            <Text
              fontFamily="var(--font-body)"
              fontSize="15px"
              color="var(--text-2)"
              mt="24px"
              mb="20px"
              fontWeight="300"
              lineHeight="1.8"
            >
              Pentagon first checks for loaded components, endpoints, models,
              you name it. With this clean output, you can easily debug your app
              and make sure everything is loaded correctly. Now you have to get
              familiar with the file structure of this framework and that's what
              we will cover in the next section.
            </Text>
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
            href="/file-structure"
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
                fontFamily="var(--font-display)"
                fontSize="14px"
                fontWeight="600"
                color="var(--text-1)"
                letterSpacing="-0.01em"
              >
                File Structure
              </Text>
            </Box>
            <Icon as={BsArrowRight} boxSize="16px" color="var(--text-3)" />
          </Link>

            <Footer/>
        </Box>
      </Box>
      <ScrollRail/>
    </>
  );
};

export default BasicUsage;

"use client";

import {
  Box,
  Flex,
  Icon,
  Link as ChakraLink,
  Text,
  Input,
  InputGroup,
  Image,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const sections = [{ id: "", title: "Introduction" }, { id: "your-first-project", title: "Your First Project" }, { id: "file-structure", title: "File Structure" },
  ];

  const filteredSections = sections.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Flex
      position="sticky"
      top={0}
      height="100vh"
      width="260px"
      flexShrink={0}
      bg="var(--bg-surface)"
      borderRight="1px solid var(--border)"
      overflow="hidden"
      flexDirection="column"
      zIndex={40}
    >
      {/* ── Logo ── */}
      <Flex
        align="center"
        gap={3}
        px={4}
        py={4}
        borderBottom="1px solid var(--border)"
      >
        <Image
          src="https://ik.imagekit.io/cin2tn3bj/penta_logo_white.png"
          alt="Pentagon"
          width="34px"
          height="34px"
          objectFit="contain"
        />
      </Flex>

      {/* ── Search ── */}
      <Box px={3} pt={3}>
        <InputGroup>
          <Box position="relative" width="100%">
            <Box
              as={BiSearch}
              position="absolute"
              left="10px"
              top="50%"
              transform="translateY(-50%)"
              color="var(--text-3)"
              pointerEvents="none"
              fontSize="13px"
              zIndex={1}
            />
            <Input
              placeholder="Search.."
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              pl="32px"
              pr="60px"
              py="8px"
              h="auto"
              bg="var(--bg-raised)"
              border="1px solid var(--border)"
              borderRadius="8px"
              color="var(--text-1)"
              fontFamily="var(--font-body)"
              fontSize="12.5px"
              _placeholder={{ color: "var(--text-3)" }}
              _focus={{ outline: "none" }}
            />
            <Text
              position="absolute"
              right="12px"
              top="50%"
              transform="translateY(-50%)"
              fontFamily="var(--font-mono)"
              fontSize="11px"
              color="var(--text-3)"
              bg="var(--bg-surface)"
              border="1px solid var(--border)"
              borderRadius="4px"
              px="6px"
              py="2px"
              pointerEvents="none"
            >
              {navigator.platform.includes("Mac") ? "⌘ K" : "Ctrl K"}
            </Text>
          </Box>
        </InputGroup>
      </Box>

      {/* ── Nav ── */}
      <Box flex={1} overflowY="auto" px={2} pt={4} pb={2}>
        <Text
          fontFamily="var(--font-syne)"
          fontSize="12px"
          color="white"
          fontWeight={600}
          textTransform="uppercase"
          px={2}
          mb={2}
          mt={5}
          display="block"
        >
          Documentation
        </Text>

        <Flex direction="column" gap="1px">
          {filteredSections.map((section) => {
            const href = `/${section.id}`;
            const isActive = pathname === href;

            return (
              <ChakraLink
                as={NextLink}
                href={href}
                key={section.id}
                justifyContent="flex-start"
                alignItems="center"
                gap={2}
                width="100%"
                px={3}
                py="7px"
                h="30px"
                borderRadius="7px"
                bg={isActive ? "rgba(255,255,255,0.08)" : "transparent"}
                color={isActive ? "var(--text-1)" : "var(--text-2)"}
                fontFamily="var(--font-syne)"
                fontSize="13px"
                fontWeight={isActive ? 600 : 400}
                textDecoration="none"
                transition="all 250ms ease"
                _hover={{
                  bg: "rgba(255,255,255,0.055)",
                  color: "var(--text-1)",
                  transition: "all 80ms ease-in",
                }}
                _focus={{
                  boxShadow: "none",
                  outline: "none",
                }}
              >
                {section.title}
              </ChakraLink>
            );
          })}
        </Flex>
      </Box>

      {/* ── Footer ── */}
      <Flex
        align="center"
        justify="space-between"
        px={5}
        py={3}
        borderTop="1px solid var(--border)"
      >
        <ChakraLink
          as={NextLink}
          href="https://github.com/abde1khaliq/pentagon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            as={BsGithub}
            boxSize="15px"
            color="var(--text-3)"
            transition="color 200ms cubic-bezier(0.4,0,0.2,1), transform 200ms cubic-bezier(0.4,0,0.2,1)"
            _hover={{ color: "var(--text-1)" }}
          />
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

export default SideBar;

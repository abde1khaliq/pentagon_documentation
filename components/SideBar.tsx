"use client";

import {
  Box,
  Flex,
  Icon,
  Link as ChakraLink,
  Text,
  Input,
  Image,
  IconButton,
  Drawer,
  Portal,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { BiSearch, BiMenu } from "react-icons/bi";
import { BsGithub, BsChevronRight, BsX } from "react-icons/bs";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface NavLeaf {
  kind: "leaf";
  title: string;
  id: string;
}

interface NavTree {
  kind: "tree";
  title: string;
  id: string;
  children: NavLeaf[];
}

type NavItem = NavLeaf | NavTree;

interface NavGroup {
  label: string;
  items: NavItem[];
}

const NAV: NavGroup[] = [
  {
    label: "Getting Started",
    items: [
      { kind: "leaf", title: "Introduction", id: "" },
      {
        kind: "tree",
        title: "Your First Project",
        id: "tree",
        children: [
          { kind: "leaf", title: "Creating a Project", id: "your-first-project" },
          { kind: "leaf", title: "File Structure",     id: "file-structure" },
          { kind: "leaf", title: "runserver.py",       id: "your-first-project/runserver" },
          { kind: "leaf", title: "config.py",          id: "your-first-project/config" },
          { kind: "leaf", title: "database/connection.py", id: "your-first-project/database" },
          { kind: "leaf", title: "router/index.py",     id: "your-first-project/router" },
        ],
      },
    ],
  },
  {
    label: "Tutorial",
    items: [
      {
        kind: "tree",
        title: "Task API",
        id: "tutorial",
        children: [
          { kind: "leaf", title: "Overview", id: "tutorial" },
          { kind: "leaf", title: "Initializing the Project", id: "tutorial/step-0" },
          { kind: "leaf", title: "Defining the Task Model", id: "tutorial/step-1" },
          { kind: "leaf", title: "Creating Data Schemas", id: "tutorial/step-2" },
          { kind: "leaf", title: "Implementing the Service Layer", id: "tutorial/step-3" },
          { kind: "leaf", title: "Building the Endpoints", id: "tutorial/step-4" },
        ],
      },
    ],
  },
  {
    label: "Learn",
    items: [
      { kind: "leaf", title: "Routing", id: "routing" },
      { kind: "leaf", title: "Models & ORM", id: "models" },
      { kind: "leaf", title: "Database & ORM", id: "database" },
      { kind: "leaf", title: "Schemas & Validation", id: "schemas" },
      { kind: "leaf", title: "Service Layer", id: "services" },
      { kind: "leaf", title: "API Docs", id: "api-docs" },
    ],
  },
];

const LeafButton = ({
  item,
  isActive,
  depth = 0,
  onClick,
}: {
  item: NavLeaf;
  isActive: boolean;
  depth?: number;
  onClick?: () => void;
}) => (
  <ChakraLink
    as={NextLink}
    href={`/${item.id}`}
    display="flex"
    alignItems="center"
    gap={2}
    width="100%"
    pl={depth === 0 ? "12px" : "10px"}
    pr="12px"
    py="6px"
    h="auto"
    borderRadius="5px"
    bg={isActive ? "rgba(255,255,255,0.07)" : "transparent"}
    color={isActive ? "var(--text-1)" : "var(--text-2)"}
    fontFamily="var(--font-syne)"
    fontSize="13px"
    fontWeight={500}
    textDecoration="none"
    position="relative"
    transition="background 150ms ease, color 150ms ease"
    _hover={{ bg: "rgba(255,255,255,0.05)", color: "var(--text-1)" }}
    _focus={{ boxShadow: "none", outline: "none" }}
    onClick={onClick}
  >
    {item.title}
  </ChakraLink>
);

const TreeButton = ({
  item,
  isActive,
  isChildActive,
  currentId,
  onLeafClick,
}: {
  item: NavTree;
  isActive: boolean;
  isChildActive: boolean;
  currentId: string;
  onLeafClick?: () => void;
}) => {
  const [open, setOpen] = useState(isActive || isChildActive);

  useEffect(() => {
    if (isChildActive) setOpen(true);
  }, [isChildActive]);

  return (
    <Box>
      <Flex
        as="button"
        onClick={() => setOpen((v) => !v)}
        align="center"
        justify="space-between"
        width="100%"
        pl="12px"
        pr="8px"
        py="6px"
        borderRadius="5px"
        bg={isActive ? "rgba(255,255,255,0.07)" : "transparent"}
        color={isActive || isChildActive ? "var(--text-1)" : "var(--text-2)"}
        fontFamily="var(--font-syne)"
        fontSize="13px"
        fontWeight={500}
        border="none"
        cursor="pointer"
        position="relative"
        transition="background 150ms ease, color 150ms ease"
        _hover={{ bg: "rgba(255,255,255,0.05)", color: "var(--text-1)" }}
      >
        <Text
          as="span"
          fontFamily="inherit"
          fontSize="inherit"
          fontWeight="inherit"
          color="inherit"
        >
          {item.title}
        </Text>
        <Icon
          as={BsChevronRight}
          boxSize="10px"
          color="var(--text-4)"
          transform={open ? "rotate(90deg)" : "rotate(0deg)"}
          transition="transform 200ms cubic-bezier(0.4,0,0.2,1)"
          flexShrink={0}
        />
      </Flex>

      <Box
        overflow="hidden"
        maxH={open ? "600px" : "0px"}
        transition="max-height 220ms cubic-bezier(0.4,0,0.2,1)"
      >
        <Box
          position="relative"
          ml="20px"
          pl="12px"
          borderLeft="1px solid var(--border)"
          mt="2px"
          mb="2px"
        >
          <Flex direction="column" gap="1px">
            {item.children.map((child) => (
              <LeafButton
                key={child.id}
                item={child}
                isActive={currentId === child.id}
                depth={1}
                onClick={onLeafClick}
              />
            ))}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

const SidebarContent = ({ onLeafClick }: { onLeafClick?: () => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const currentId = pathname === "/" ? "" : pathname.replace(/^\//, "");

  const allLeaves: NavLeaf[] = NAV.flatMap((g) =>
    g.items.flatMap((item) =>
      item.kind === "leaf"
        ? [item]
        : [{ kind: "leaf" as const, title: item.title, id: item.id }, ...item.children],
    ),
  );

  const isSearching = searchQuery.trim().length > 0;
  const searchResults = allLeaves.filter((l) =>
    l.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Flex height="100%" flexDirection="column">
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
          width="30px"
          height="30px"
          objectFit="contain"
        />
      </Flex>

      {/* ── Search ── */}
      <Box px={3} pt={3} mb={8}>
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
            placeholder="Search..."
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            pl="32px"
            pr="12px"
            py="8px"
            h="auto"
            bg="var(--bg-raised)"
            border="1px solid var(--border)"
            borderRadius="8px"
            color="var(--text-1)"
            fontFamily="var(--font-syne)"
            fontSize="12.5px"
            _placeholder={{ color: "var(--text-3)" }}
            _focus={{ outline: "none" }}
            transition="border-color 200ms ease, box-shadow 200ms ease"
          />
        </Box>
      </Box>

      {/* ── Nav ── */}
      <Box flex={1} overflowY="auto" px={2} pb={2}>
        {isSearching ? (
          <Flex direction="column" gap="1px">
            {searchResults.length === 0 ? (
              <Text
                fontFamily="var(--font-syne)"
                fontSize="13px"
                color="white"
                px="12px"
                py="8px"
              >
                No results
              </Text>
            ) : (
              searchResults.map((item) => (
                <LeafButton
                  key={item.id}
                  item={item}
                  isActive={currentId === item.id}
                  onClick={onLeafClick}
                />
              ))
            )}
          </Flex>
        ) : (
          <Flex direction="column" gap="20px">
            {NAV.map((group) => (
              <Box key={group.label}>
                <Text
                  fontFamily="var(--font-syne)"
                  fontSize="13px"
                  color="white"
                  fontWeight="500"
                  letterSpacing="0.14em"
                  textTransform="uppercase"
                  px="12px"
                  mb="10px"
                  display="block"
                >
                  {group.label}
                </Text>

                <Flex direction="column" gap="1px">
                  {group.items.map((item) => {
                    if (item.kind === "leaf") {
                      return (
                        <LeafButton
                          key={item.id}
                          item={item}
                          isActive={currentId === item.id}
                          onClick={onLeafClick}
                        />
                      );
                    }
                    const isChildActive = item.children.some(
                      (c) => c.id === currentId,
                    );
                    return (
                      <TreeButton
                        key={item.id}
                        item={item}
                        isActive={currentId === item.id}
                        isChildActive={isChildActive}
                        currentId={currentId}
                        onLeafClick={onLeafClick}
                      />
                    );
                  })}
                </Flex>
              </Box>
            ))}
          </Flex>
        )}
      </Box>

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
            boxSize="14px"
            color="var(--text-3)"
            transition="color 200ms ease, transform 200ms ease"
            _hover={{ color: "var(--text-1)" }}
          />
        </ChakraLink>
      </Flex>
    </Flex>
  );
};

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Top Bar */}
      <Flex
        display={{ base: "flex", lg: "none" }}
        position="fixed"
        top={0}
        left={0}
        right={0}
        h="60px"
        bg="var(--bg-surface)"
        borderBottom="1px solid var(--border)"
        align="center"
        px={4}
        zIndex={100}
        justify="space-between"
      >
        <NextLink href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="https://ik.imagekit.io/cin2tn3bj/penta_logo_white.png"
            alt="Pentagon"
            width="24px"
            height="24px"
          />
        </NextLink>
        <IconButton
          aria-label="Open Menu"
          variant="ghost"
          onClick={() => setIsOpen(true)}
          color="var(--text-1)"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
        >
          <Icon as={BiMenu} boxSize="24px" />
        </IconButton>
      </Flex>

      {/* Desktop Sidebar */}
      <Box
        display={{ base: "none", lg: "block" }}
        position="sticky"
        top={0}
        height="100vh"
        width="260px"
        flexShrink={0}
        bg="var(--bg-surface)"
        borderRight="1px solid var(--border)"
        overflow="hidden"
        zIndex={40}
      >
        <SidebarContent />
      </Box>

      {/* Mobile Drawer */}
      <Drawer.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <Portal>
          <Drawer.Backdrop bg="rgba(0,0,0,0.8)" />
          <Drawer.Positioner boxSize="full" width="280px">
            <Drawer.Content
              bg="var(--bg-surface)"
              borderRight="1px solid var(--border)"
              height="100vh"
              p={0}
            >
              <Box position="relative" h="full">
                <IconButton
                  aria-label="Close Menu"
                  position="absolute"
                  top="16px"
                  right="12px"
                  variant="ghost"
                  onClick={() => setIsOpen(false)}
                  zIndex={10}
                  color="var(--text-3)"
                >
                    <Icon as={BsX} boxSize="24px" />
                </IconButton>
                <SidebarContent onLeafClick={() => setIsOpen(false)} />
              </Box>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </>
  );
};

export default SideBar;

"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
}

export const ScrollRail = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);

  // Collect all elements with an id inside the main content on mount
  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-title]")
    ).map((el) => ({
      id: el.id,
      title: el.getAttribute("data-section-title") ?? el.id,
    }));
    setSections(headings);
  }, []);

  // IntersectionObserver — highlights whichever section is nearest the top
  useEffect(() => {
    if (sections.length === 0) return;

    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box
      as="aside"
      position="sticky"
      top="0"
      height="100vh"
      width="220px"
      flexShrink={0}
      display={{ base: "none", xl: "flex" }}
      flexDirection="column"
      pt="72px"
      pr={4}
      pl={2}
    >

      <Flex direction="column" gap="2px" position="relative">
        <Box
          position="absolute"
          left="0px"
          top="0"
          bottom="0"
          width="1px"
          bg="var(--border-mid)"
          borderRadius="1px"
        />

        {sections.map(({ id, title }) => {
          const isActive = activeId === id;
          return (
            <Box
              key={id}
              as="button"
              onClick={() => scrollTo(id)}
              position="relative"
              display="flex"
              alignItems="center"
              px="12px"
              py="6px"
              bg="transparent"
              border="none"
              cursor="pointer"
              textAlign="left"
              width="100%"
              transition="all 180ms cubic-bezier(0.4,0,0.2,1)"
              _hover={{ "& > span": { color: "var(--text-1)" } }}
            >
              <Box
                position="absolute"
                left="0px"
                top="0"
                bottom="0"
                width="1px"
                borderRadius="1px"
                bg={isActive ? "var(--accent-bright)" : "transparent"}
                boxShadow={isActive ? "0 0 6px rgba(26,127,212,0.5)" : "none"}
                transition="background 200ms ease, box-shadow 200ms ease"
              />

              <Text
                as="span"
                fontFamily="var(--font-body)"
                fontSize="12.5px"
                fontWeight={isActive ? 500 : 400}
                color={isActive ? "var(--accent-bright)" : "var(--text-3)"}
                transition="color 180ms cubic-bezier(0.4,0,0.2,1), font-weight 180ms ease"
                lineHeight="1.4"
              >
                {title}
              </Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
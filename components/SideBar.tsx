import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

const SideBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const sections = [
    { id: "introduction", title: "Introduction", number: "01" },
  ];

  const filteredSections = sections.filter((s) =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <Box
      style={{
        position: "sticky" as any,
        top: 0,
        height: "100vh",
        width: 280,
        flexShrink: 0,
        background: "var(--bg-surface)",
        borderRight: "1px solid var(--border)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        zIndex: 40,
      }}
    >
      {/* Logo */}
      <Flex
        style={{
          alignItems: "center",
          gap: 12,
          padding: "15px 15px 15px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <img
          src="https://ik.imagekit.io/cin2tn3bj/penta_logo_white.png"
          alt="Pentagon"
          style={{ width: 36, height: 36, objectFit: "contain" }}
        />
      </Flex>

      {/* Search */}
      <Box style={{ padding: "16px 16px 0" }}>
        <div style={{ position: "relative" }}>
          <BiSearch
            style={{
              position: "absolute",
              left: 12,
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--text-3)",
              pointerEvents: "none",
            }}
          />
          <input
            className="search-input"
            placeholder="Search docs…"
            value={searchQuery}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
            style={{
              width: "100%",
              padding: "9px 12px 9px 34px",
              background: "var(--bg-raised)",
              border: "1px solid var(--border)",
              borderRadius: 8,
              color: "var(--text-1)",
              fontFamily: "var(--font-body)",
              fontSize: 13,
              outline: "none",
              transition: "border-color 0.2s, box-shadow 0.2s",
            }}
          />
        </div>
      </Box>

      {/* Nav — pure page links, no active state */}
      <Box style={{ flex: 1, overflowY: "auto", padding: "20px 12px" }}>
        <Text
          fontSize={13}
          color="white"
          fontWeight={500}
          textTransform="uppercase"
          marginBottom={1}
          padding="0 8px"
        >
          DOCUMENTATION
        </Text>
        {filteredSections.map((section) => (
          <button key={section.id} className="nav-btn">
            <span
              style={{
                fontSize: 10,
                color: "var(--text-4)",
                letterSpacing: "0.04em",
                flexShrink: 0,
              }}
            >
              {section.number}
            </span>
            {section.title}
          </button>
        ))}
      </Box>

      {/* Footer */}
      <Box
        style={{
          padding: "16px 24px",
          borderTop: "1px solid var(--border)",
        }}
      >
        <Flex style={{ alignItems: "center", justifyContent: "space-between" }}>
          <Link href="https://github.com/abde1khaliq/pentagon">
            <Icon
              as={BsGithub}
              boxSize={4}
              color={"gray.500"}
              transition={"0.2s ease"}
              _hover={{ color: "white" }}
            ></Icon>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};


export default SideBar
import { Box, Flex, Text, Heading, Image } from "@chakra-ui/react";
import { CodeSnippetBlock } from "./CodeBlock";
import {
  confirmationCommand,
  installationCommand,
  introCode,
} from "@/app/data/CodeSnippets";
import { ScrollRail } from "./ScrollRail";
import SideBar from "./SideBar";

const LHome = () => {
  return (
    <>
      <div className="noise-overlay" />
      <ScrollRail />

      <Flex
        style={{
          minHeight: "100vh",
          background: "var(--bg-void)",
          position: "relative",
        }}
      >
        <SideBar/>
        <Box className="main-content" style={{ flex: 1, minWidth: 0 }}>
          <Box
            style={{
              maxWidth: 1000,
              margin: "0 auto",
              padding: "72px 48px 96px",
            }}
          >
            <Box style={{ position: "relative" }}>
              <Box
                id="introduction"
                style={{ scrollMarginTop: 80, position: "relative", zIndex: 1 }}
              >
                <Image
                  margin="0 0 24px"
                  src="https://ik.imagekit.io/cin2tn3bj/penta_logo_white.png"
                  w="100px"
                  h="100px"
                ></Image>

                <Text
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16.5,
                    color: "var(--text-2)",
                    lineHeight: 1.75,
                    maxWidth: 580,
                    marginBottom: 40,
                    fontWeight: 300,
                  }}
                >
                  A modern, blazing fast high-performance Python web framework.
                </Text>
              </Box>
            </Box>

            <div className="divider" />

            <Box id="introduction" style={{ scrollMarginTop: 80 }}>
              <Heading
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 32,
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: "var(--text-1)",
                  marginBottom: 10,
                }}
              >
                Introduction
              </Heading>
              <Text
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--text-2)",
                  marginBottom: 48,
                  fontWeight: 300,
                }}
              >
                Pentagon is a lightning‑fast Python web framework built for
                developers who want to create APIs and web applications
                effortlessly. It combines speed with a clean, intuitive file
                structure, so you can focus on building instead of boilerplate.
                take a look at how simple its syntax can be.
              </Text>

              <CodeSnippetBlock snippet={introCode} />
            </Box>

            <div className="divider" />

            <Box id="installation" style={{ scrollMarginTop: 80 }}>
              <Heading
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 32,
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  color: "var(--text-1)",
                  marginBottom: 10,
                }}
              >
                Installation
              </Heading>
              <Text
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--text-2)",
                  marginBottom: 48,
                  fontWeight: 300,
                }}
              >
                Installing Pentagon is very simple and straightforward. One
                command is all it takes to get started:
              </Text>

              <CodeSnippetBlock snippet={installationCommand} />

              <Text
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 15,
                  color: "var(--text-2)",
                  marginTop: 20,
                  marginBottom: 20,
                  fontWeight: 300,
                }}
              >
                To test and make sure everything is installed, run this command:
              </Text>

              <CodeSnippetBlock snippet={confirmationCommand} />
            </Box>

            {/* Footer */}
            <Box
              style={{
                marginTop: 96,
                paddingTop: 32,
                borderTop: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Flex style={{ alignItems: "center", gap: 10 }}>
                <img
                  src="https://ik.imagekit.io/cin2tn3bj/penta_logo_white.png"
                  alt=""
                  style={{ width: 20, height: 20, opacity: 0.4 }}
                />
                <Text
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--text-4)",
                    margin: 0,
                  }}
                >
                  Pentagon Framework
                </Text>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default LHome;

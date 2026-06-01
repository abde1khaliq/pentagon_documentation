import { Flex, Image, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      mt="48px"
      pt="28px"
      borderTop="1px solid var(--border)"
      align="center"
      justify="space-between"
    >
      <Flex align="center" gap="10px">
        <Image
          src="https://ik.imagekit.io/cin2tn3bj/penta_logo_white.png"
          alt=""
          w="18px"
          h="18px"
          opacity={0.3}
        />
        <Text
          fontFamily="var(--font-mono)"
          fontSize="11px"
          color="var(--text-4)"
        >
          Pentagon Framework
        </Text>
      </Flex>
      <Text fontFamily="var(--font-mono)" fontSize="11px" color="var(--text-4)">
        MIT License
      </Text>
    </Flex>
  );
};

export default Footer;
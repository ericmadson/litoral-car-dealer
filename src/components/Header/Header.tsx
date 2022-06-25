import { Flex, Stack, Text, VStack } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex>
      <Stack spacing={-5} align="flex-start">
        <Text fontWeight="500" color="#F5F5F5" fontSize="20px">
          Seja bem vindo à
        </Text>
        <Text
          color="#3687FF"
          fontFamily="Space Grotesk"
          fontWeight={700}
          letterSpacing="0.03em"
          fontSize="50px"
          textShadow=" 0px 0px 46px rgba(54, 135, 255, 0.46);"
        >
          CONCESSIONÁRIA
        </Text>
      </Stack>
    </Flex>
  );
}

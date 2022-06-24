import { Text, Flex, Image, HStack } from "@chakra-ui/react";
import { bar, alertIcon } from "../../assets";

export function Warning() {
  return (
    <Flex w="fit-content" flexDir="column" mt="30px">
      <HStack align="center" spacing={1}>
        <Image src={alertIcon} w="30px" h="20px"></Image>
        <Text color="white" fontWeight="500" fontSize="16px">
          Aviso
        </Text>
        <Image src={bar} w="370px" h="3px"></Image>
      </HStack>
      <Flex mt="16px" maxW="460px" flexDir="column">
        <Text color="white" fontWeight="400" fontSize="16px">
          Quando você testa seu veículo, você é teleportado a uma dimensão
          alternativa. Isso significa que ninguém pode te incomodar ou te matar.
        </Text>
        <Text color="white" fontWeight="400" fontSize="16px">
          Se você quer parar o test drive, basta sair do seu veículo no momento
          do test drive.
        </Text>
      </Flex>
    </Flex>
  );
}

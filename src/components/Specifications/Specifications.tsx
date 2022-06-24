import { Image, Text, HStack, Button, Tag, Flex } from "@chakra-ui/react";
import { bar, config } from "../../assets";

export function Specifications() {
  return (
    <Flex flexDir="column">
      <HStack align="center" spacing={2} mt="20px">
        <Image src={config} w="31px" h="20px"></Image>
        <Text color="white" fontWeight="500" fontSize="16px">
          Especificações
        </Text>
        <Image src={bar} w="260px" h="3px"></Image>
      </HStack>
      <HStack align="center" spacing={2} mt="15px" mb="15px">
        <Text color="#CCCCCC" fontWeight="500" fontSize="16px">
          Porta malas
        </Text>
        <Image src={bar} w="260px" h="3px"></Image>
        <Tag color="#FFFFFF" bg="#3687FF">
          100 KG
        </Tag>
      </HStack>
      <Button
        mb="10px"
        color="#FFFFFF"
        bg="#3687FF"
        fontWeight="500"
        _hover={{ opacity: "0.8" }}
        transition="ease 1s"
        py="40px"
        px="63px"
      >
        COMPRAR VEÍCULO
      </Button>
      <Button
        color="#FFFFFF"
        bg="rgba(92, 104, 113, 0.68)"
        fontWeight="400"
        _hover={{ opacity: "0.8" }}
        transition="ease 0.1s"
        py="5px"
      >
        TEST DRIVE
      </Button>
    </Flex>
  );
}

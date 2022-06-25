import { Image, Text, HStack, Button, Tag, Flex, Box } from "@chakra-ui/react";
import { bar, config } from "../../assets";
import { Progress } from "./Progress";

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
      <HStack
        justifyContent="space-between"
        align="center"
        spacing={2}
        mt="15px"
        mb="15px"
      >
        <Text
          w="fit-content"
          whiteSpace="nowrap"
          color="#CCCCCC"
          fontWeight="500"
          fontSize="16px"
        >
          Porta malas
        </Text>
        <Progress value={50} />
        <Tag borderRadius="0px" color="#FFFFFF" bg=" #3687FF">
          100 KG
        </Tag>
      </HStack>
      <Button
        mb="10px"
        color="#FFFFFF"
        bg="#3687FF"
        fontWeight="500"
        fontSize="28px"
        _hover={{ opacity: "0.8" }}
        transition="ease 1s"
        fontFamily="Space Grotesk"
        py="40px"
        px="63px"
      >
        COMPRAR VEÍCULO
      </Button>
      <Button
        color="#FFFFFF"
        bg="rgba(92, 104, 113, 0.68)"
        fontWeight="400"
        fontSize="20px"
        fontFamily="Space Grotesk"
        _hover={{ opacity: "0.8" }}
        transition="ease 0.1s"
        py="5px"
        h="35px"
      >
        TEST DRIVE
      </Button>
    </Flex>
  );
}

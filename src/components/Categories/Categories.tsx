import { Flex, Image, Text, HStack, VStack } from "@chakra-ui/react";
import { bar, car } from "../../assets";
import { CustomButton } from "../CustomButton";

export function Categories() {
  return (
    <Flex w="fit-content" flexDir="column">
      <HStack align="center" spacing={2}>
        <Image src={car} w="31px" h="20px"></Image>
        <Text color="white" fontWeight="500" fontSize="16px">
          Categorias de veículos
        </Text>
        <Image src={bar} w="250px" h="3px"></Image>
      </HStack>
      <Flex mt="16px">
        <VStack align="flex-start" spacing={2}>
          <CustomButton title="Carros"></CustomButton>
          <CustomButton title="Motos"></CustomButton>
          <CustomButton title="Importados"></CustomButton>
          <CustomButton title="Donates"></CustomButton>
        </VStack>
      </Flex>
    </Flex>
  );
}

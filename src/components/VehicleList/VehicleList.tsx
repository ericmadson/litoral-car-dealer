import { HStack, Flex, Text, Image, VStack } from "@chakra-ui/react";
import { bar, car } from "../../assets";
import { CustomButtonVehicles } from "../CustomButtonVehicles";

export function VehicleList() {
  return (
    <>
      <HStack align="center" spacing={2} mt="40px" mb="10px">
        <Image src={car} w="31px" h="20px"></Image>
        <Text color="white" fontWeight="500" fontSize="16px">
          Lista de veículos
        </Text>
        <Image src={bar} w="250px" h="3px"></Image>
      </HStack>
      <Flex overflowY="scroll" h="560px" maxW="430px">
        <VStack spacing={2}>
          <CustomButtonVehicles
            title="teste"
            value="$1.000.000"
          ></CustomButtonVehicles>
          <CustomButtonVehicles
            title="teste"
            value="$1.000.000"
          ></CustomButtonVehicles>
          <CustomButtonVehicles
            title="teste"
            value="$1.000.000"
          ></CustomButtonVehicles>
          <CustomButtonVehicles
            title="teste"
            value="$1.000.000"
          ></CustomButtonVehicles>
          <CustomButtonVehicles
            title="teste"
            value="$1.000.000"
          ></CustomButtonVehicles>
          <CustomButtonVehicles
            title="teste"
            value="$1.000.000"
          ></CustomButtonVehicles>
          <CustomButtonVehicles
            title="teste"
            value="$1.000.000"
          ></CustomButtonVehicles>
          <CustomButtonVehicles
            title="teste"
            value="$1.000.000"
          ></CustomButtonVehicles>
          <CustomButtonVehicles
            title="teste"
            value="$1.000.000"
          ></CustomButtonVehicles>
          <CustomButtonVehicles
            title="teste"
            value="$1.000.000"
          ></CustomButtonVehicles>
        </VStack>
      </Flex>
    </>
  );
}

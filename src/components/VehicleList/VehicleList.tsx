import { HStack, Flex, Text, Image, VStack, Spinner } from "@chakra-ui/react";
import { Vehicle } from "../../App";
import { bar, car } from "../../assets";
import { CustomButtonVehicles } from "../CustomButtonVehicles";

interface VehicleListProps {
  vehicles: Vehicle[];
  isLoading?: boolean;
}

export function VehicleList({ vehicles, isLoading }: VehicleListProps) {
  return (
    <>
      <HStack align="center" spacing={2} mt="40px" mb="10px">
        <Image src={car} w="31px" h="20px"></Image>
        <Text color="white" fontWeight="500" fontSize="16px">
          Lista de veículos
        </Text>
        <Image src={bar} w="250px" h="3px"></Image>
      </HStack>
      <Flex overflowY="scroll" h="560px" w="100%">
        <VStack w="100%" h="100%" spacing={2}>
          {isLoading ? (
            <Spinner
              color="#FFF"
              margin="auto 0"
              alignSelf="center"
              justifySelf="center"
            />
          ) : (
            <>
              {vehicles.map((item) => (
                <CustomButtonVehicles
                  key={item.id}
                  title={item.name}
                  value={item.value}
                />
              ))}
            </>
          )}
        </VStack>
      </Flex>
    </>
  );
}

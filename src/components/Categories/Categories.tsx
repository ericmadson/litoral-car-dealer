import { Flex, Image, Text, HStack, VStack } from "@chakra-ui/react";
import { bar, car } from "../../assets";
import { CustomButton } from "../CustomButton";

const categories = [
  {
    id: 1,
    name: "Carros",
    type: "carros",
  },
  {
    id: 2,
    name: "Motos",
    type: "motos",
  },
  {
    id: 3,
    name: "Importados",
    type: "importados",
  },
  {
    id: 4,
    name: "Donates",
    type: "donate",
  },
];

interface CategoriesProps {
  onChangeCategory: (categorie) => void;
}

export function Categories({ onChangeCategory }: CategoriesProps) {
  return (
    <Flex w="fit-content" flexDir="column">
      <HStack align="center" spacing={2}>
        <Image src={car} w="31px" h="20px"></Image>
        <Text color="white" fontWeight="500" fontSize="16px">
          Categorias de veículos
        </Text>
        <Image src={bar} w="250px" h="3px"></Image>
      </HStack>
      <Flex mt="16px" w="100%" justifyContent="center" alignItems="center">
        <VStack w="100%" align="flex-start" spacing={2}>
          {categories.map((item) => (
            <CustomButton
              key={item.id}
              title={item.name}
              onClick={() => onChangeCategory(item.type)}
            />
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
}

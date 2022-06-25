import "./styles/global.scss";
import { useNuiEvent } from "fivem-nui-react-lib";
import { Flex } from "@chakra-ui/react";
import { Header } from "./components/Header/Header";
import { Categories } from "./components/Categories/Categories";
import { Warning } from "./components/Warning/Warning";
import { Logo } from "./components/Header/Logo";
import { VehicleList } from "./components/VehicleList/VehicleList";
import { Specifications } from "./components/Specifications/Specifications";
import { useEffect, useState } from "react";
import { Vehicles } from "./mocks/vehicles";

export type Vehicle = {
  id: number;
  name: string;
  value: number;
  type: string;
};

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("carros");
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(true);

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    setIsSearching(true);
    const filteredVehicles = Vehicles.filter(
      (vehicle) => vehicle.type === selectedCategory
    );

    setVehicles(filteredVehicles);

    setTimeout(() => {
      setIsSearching(false);
    }, 1000);
  }, [selectedCategory]);

  return (
    <div className="App">
      <Flex width="100vw" height="100vh">
        <Flex mt="76px" mb="56px" mx="60px" justify="space-between" w="100%">
          <Flex flexDir="column">
            <Header />
            <Categories
              onChangeCategory={(categorie) => handleChangeCategory(categorie)}
            />
            <Warning />
          </Flex>
          <Flex w="fit-content" align="flex-end" flexDir="column">
            <Logo />
            <VehicleList isLoading={isSearching} vehicles={vehicles} />
            <Specifications />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default App;

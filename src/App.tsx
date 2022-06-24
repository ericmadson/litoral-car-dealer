import "./styles/global.scss";
import { useNuiEvent } from "fivem-nui-react-lib";
import { Flex } from "@chakra-ui/react";
import { background } from "./assets";
import { Header } from "./components/Header/Header";
import { Categories } from "./components/Categories/Categories";
import { Warning } from "./components/Warning/Warning";
import { Logo } from "./components/Header/Logo";
import { VehicleList } from "./components/VehicleList/VehicleList";
import { Specifications } from "./components/Specifications/Specifications";

const App = () => {
  return (
    <div className="App">
      <Flex width="100vw" height="100vh" backgroundImage={background}>
        <Flex mt="76px" mb="56px" mx="60px" justify="space-between" w="100%">
          <Flex flexDir="column">
            <Header />
            <Categories />
            <Warning />
          </Flex>
          <Flex w="fit-content" align="flex-end" flexDir="column">
            <Logo />
            <VehicleList />
            <Specifications />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default App;

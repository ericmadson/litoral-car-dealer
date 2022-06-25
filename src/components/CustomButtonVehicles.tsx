import { Button, ButtonProps, Text } from "@chakra-ui/react";

interface CustomButtonVehiclesProps extends ButtonProps {
  title: string;
  value?: number;
  children?: JSX.Element;
}

export const CustomButtonVehicles = ({
  title,
  value,
  children,
  ...rest
}: CustomButtonVehiclesProps) => {
  const currencyFormatter = (currency) => {
    return currency.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <Button
      bg="rgba(89, 89, 89, 0.4);"
      color="#C7C7C7"
      fontWeight="500"
      fontSize="20px"
      border-radius="0px"
      _hover={{ background: "#FFFFFF", color: "#002C55" }}
      transition="ease 1s"
      w="100%"
      display="flex"
      h="68px"
      justifyContent="space-between"
      p="20px 24px"
    >
      <Text>{title}</Text>
      <Text>{currencyFormatter(value)}</Text>
    </Button>
  );
};

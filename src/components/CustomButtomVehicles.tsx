import { Button, ButtonProps } from "@chakra-ui/react";

interface CustomButtonVehiclesProps extends ButtonProps {
  title: string;
  value?: string;
  children?: JSX.Element;
}

export const CustomButtonVehicles = ({
  title,
  value,
  children,
  ...rest
}: CustomButtonVehiclesProps) => {
  return (
    <Button
      bg="rgba(89, 89, 89, 0.4);"
      color="#C7C7C7"
      fontWeight="500"
      fontSize="20px"
      border-radius="2px"
      _hover={{ background: "#FFFFFF", color: "#002C55" }}
      transition="ease 1s"
      py="35px"
      pl="25px"
      pr="300px"
    >
      {title}
      {value}
    </Button>
  );
};

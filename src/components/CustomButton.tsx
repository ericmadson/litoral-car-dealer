import { Button, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  title: string;
}

export const CustomButton = ({ title, ...rest }: CustomButtonProps) => {
  return (
    <Button
      bg="rgba(89, 89, 89, 0.4);"
      color="#C7C7C7"
      fontWeight="500"
      fontSize="20px"
      border-radius="2px"
      _hover={{ background: "#7E7E7E", color: "#FFFFFF" }}
      transition="ease 1s"
      py="35px"
      pl="25px"
      pr="300px"
    >
      {title}
    </Button>
  );
};

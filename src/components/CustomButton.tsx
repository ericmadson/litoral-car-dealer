import { Button, ButtonProps, Text } from "@chakra-ui/react";

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
      border="1px solid transparent"
      w="100%"
      _hover={{ background: "#7E7E7E", color: "#FFFFFF" }}
      _focus={{
        border: `1px solid rgba(255, 255, 255, 0.41);`,
      }}
      transition="all 0.5s ease"
      justifyContent="flex-start"
      p="22px 20px"
      h="68px"
      {...rest}
    >
      {title}
    </Button>
  );
};

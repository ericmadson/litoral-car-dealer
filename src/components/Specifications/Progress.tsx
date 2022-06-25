import { Box, BoxProps } from "@chakra-ui/react";

interface ProgressProps extends BoxProps {
  value?: number;
}

export const Progress = ({ value = 70, ...rest }: ProgressProps) => {
  return (
    <Box w="60%" h="1px" bg="#FFF" position="relative" {...rest}>
      <Box position="absolute" h="100%" bg="#3687FF" w={`${value}%`} />
    </Box>
  );
};

import React, { useState } from "react";
import { Box, Button, VStack, HStack, Text, Image, useToast } from "@chakra-ui/react";
import { FaLocationArrow } from "react-icons/fa";

const Index = () => {
  const [tracking, setTracking] = useState(false);
  const toast = useToast();

  const handleTracking = () => {
    setTracking(!tracking);
    toast({
      title: tracking ? "Tracking stopped." : "Tracking started.",
      status: tracking ? "warning" : "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} p={4}>
      <Text fontSize="2xl" fontWeight="bold">
        Real-Time GPS Tracking
      </Text>
      <Box w="100%" h="300px" bg="gray.200" borderRadius="md" overflow="hidden" position="relative">
        {/* Map Placeholder */}
        <Image src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXB8ZW58MHx8fHwxNzA5NTQ4MTQwfDA&ixlib=rb-4.0.3&q=80&w=1080" objectFit="cover" w="100%" h="100%" />
        <Box position="absolute" top="0" right="0" m={2} p={2} bg="whiteAlpha.700" borderRadius="md">
          <Text>{tracking ? "Tracking..." : "Not tracking"}</Text>
        </Box>
      </Box>
      <HStack w="100%">
        <Button leftIcon={<FaLocationArrow />} colorScheme={tracking ? "red" : "green"} onClick={handleTracking}>
          {tracking ? "Stop Tracking" : "Start Tracking"}
        </Button>
      </HStack>
    </VStack>
  );
};

export default Index;

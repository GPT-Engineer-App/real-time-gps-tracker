import React from "react";
import { Box } from "@chakra-ui/react";
import { FaBus } from "react-icons/fa";

const BusMarker = () => (
  <Box position="absolute" top={`${Math.random() * 80}%`} left={`${Math.random() * 90}%`} transform="translate(-50%, -50%)">
    <FaBus color="orange" />
  </Box>
);

export default BusMarker;

import React from "react";
import { Box } from "@chakra-ui/react";

const Card = () => {
  const cardStyle = {
    width: "100%",
    maxWidth:{
      base:"200px",
      lg:"300px"
    },
    height: {
      base:"200px",
      lg:"300px"
    },
    background:"#000",
    borderRadius: "12px",
    marginRight:"13px",
    marginTop:"18px"
  }
  return (
    <Box sx={cardStyle}>


    </Box>
  );
};

export default Card;
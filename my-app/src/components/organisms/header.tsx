import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Header = () => {
  const HeaderStyle = {
    width: "100%",
    background:"#292929",
    display:"flex",
    alignItems:"center",
    height: {
      base: "67px",
      lg: "140px",
    },
    color:"#fff",

  }

  return (
    <Box sx={HeaderStyle}>
      <Flex justifyContent={{base:"center", lg:"flex-start"}} className={"container"}>
       <Text padding={"7.83px 10.63px"} maxWidth={{base:"108px", lg:"193"}} width={"100%"} as={"h1"} border={"1px solid #FFFFFF"}>
         MyTestApp
       </Text>
      </Flex>

    </Box>
  );
};

export default Header;
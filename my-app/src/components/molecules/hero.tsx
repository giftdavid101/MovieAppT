import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import audience from "../../assets/img/audience.png"


const Hero = () => {
  const HeroStyle = {
    width: "100%",
    display:"flex",
    alignItems:"center",
    backgroundSize:"cover",
    height: {
      base: "257px",
      lg: "550px",
    },
    fontSize:{
      base:"28px",
      lg:"72px"
    },

    color:"#fff"
  }
  return (
    <Box backgroundImage={audience} sx={HeroStyle}>
      <Flex justifyContent={{base:"center", lg:"flex-start"}} className={"container"}>
        <Text style={{display:"flex", flexWrap:"wrap"}} textAlign={{base:"center", lg:"justify"}} maxWidth={{base:"273px", lg:"490px"}} width={"100%"}  >
          Watch something
          Incredible
        </Text>
      </Flex>

    </Box>
  );
};

export default Hero;
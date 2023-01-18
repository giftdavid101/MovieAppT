import React, { useEffect, useState } from "react";
import { Box,Text } from "@chakra-ui/react";
import Card from "../atoms/card";


const Movies = () => {
  const moviesStyle = {
    width:"100%",
    marginTop:"63px",
    label:{
      display:"flex",
      flexDirection:"column",
      fontSize:"24px",
      marginBottom: "48px"
    },
    input:{
    height: "54px",
      width:"100%",
      maxWidth: {
      base: "265px",
       lg: "1306px"
      },
      border:"1px solid #000000",
    }
  }
  const [movie, setMovie] = useState([])


  useEffect(() => {
    const fetchMovie = async()=>{
    const url = "https://www.omdbapi.com/?s=strong&apikey=3ab88c5d"
    const response = await fetch(url)
      const finalData = await response.json()
      console.log(finalData);
      console.log(response);
    }
    fetchMovie()
  }, [])

  return (
    <Box sx={moviesStyle}>
      <Box className={"container"}>
        <label>
          Search
          <input  />

        </label>

        <Box>
          <Text>Movie Category</Text>
          <Card />
        </Box>

      </Box>

    </Box>
  );
};

export default Movies;
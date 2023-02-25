import { useState } from "react";
import { Box } from "@mui/system";
import Typical from "react-typical";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { AnimationWrapper } from "react-hover-animation";
import { useNavigate } from "react-router-dom";

const menu_options = ["Instructions", "Play", "Leaderboard"];

const CustomCard = ({ type, onCardClick }) => (
  <Card
    sx={{ maxWidth: 350, width: 200, height: 200 }}
    onClick={() => {
      onCardClick();
    }}
  >
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {type}
        </Typography>
      </CardContent>
    </Box>
  </Card>
);

const PlayerDashboard = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Box
        style={{ width: "100%" }}
        displa="flex"
        justifyContent="center"
        textAlign="center"
      >
        <Typical
          steps={[
            "Be an smart invester :) ",
            6000,
            "",
            2000,
            "You can invest according to our suggestion :) ",
            6000,
            "",
            2000,
          ]}
          loop={Infinity}
          wrapper="p"
        />
      </Box>
      <Grid container spacing={3}>
        {menu_options.map((val) => (
          <Grid item>
            <AnimationWrapper>
              <CustomCard
                key={val}
                type={val}
                onCardClick={() => {
                  if (val === "Instructions") navigate("/instructions");
                  else if (val === "Play") navigate("/game");
                  else navigate("/leaderboard");
                }}
              />
            </AnimationWrapper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PlayerDashboard;

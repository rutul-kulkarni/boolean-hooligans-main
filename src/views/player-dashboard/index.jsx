import { useState } from "react";
import { Box } from "@mui/system";

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
    <Grid container spacing={3}>
      {menu_options.map((val) => (
        <Grid item>
          <AnimationWrapper>
            <CustomCard
              type={val}
              onCardClick={() => {
                navigate("/game");
              }}
            />
          </AnimationWrapper>
        </Grid>
      ))}
    </Grid>
  );
};

export default PlayerDashboard;

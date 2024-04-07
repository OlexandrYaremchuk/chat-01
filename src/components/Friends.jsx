import { Avatar, Container, Grid } from "@mui/material";
import React from "react";

export default function Friends({ users }) {
  console.log(users);
  return (
    <Container>
      <Grid>
        {users.map(({ name, photoUrl }) => (
          <Grid
            container
            alignItems={"center"}
            gap={"10px"}
            // border={"1px solid tomato"}
            borderRadius={"10px"}
            padding={"10px"}
          >
            <Avatar src={photoUrl} />
            <Grid
              bgcolor="#434e74"
              color="white"
              padding="10px"
              borderRadius="20px"
            >
              <p color="#ffff">{name}</p>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

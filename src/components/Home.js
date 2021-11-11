import React from "react";
import styled from "styled-components";
import { Button, Checkbox, TextField } from "@mui/material";
import MyButton from "./MyButton";
import { makeStyles } from "@mui/material/styles";

// import AcUnitIcon from "@mui/icons-material/AcUnit";

// const useStyles = makeStyles({
//   backgroundColor: ""
// })

export const Home = () => {
  const [state, setState] = React.useState(false);

  return (
    <Container>
      <Wrapper>
        <div>This is Home</div>
        <TextField variant="standard" />
        <Checkbox
          color="secondary"
          checked
          value={state}
          onChange={() => {
            setState(!state);
          }}
        />
        <br />

        <Button
          variant="contained"
          color="primary"
          // startIcon={<AcUnitIcon />}
          disabled={state}
          onClick={() => {
            console.log(state);
          }}
        >
          Gideon
        </Button>
        <br />
        <Button variant="contained" color="primary">
          Ndidi
        </Button>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 100px);
`;

{
  /* <MyButton href="#" vart="contained" color="secondary">
          Kelechi
        </MyButton>
        <MyButton vart="outlined" color="primary">
          Goodluck
        </MyButton> */
}

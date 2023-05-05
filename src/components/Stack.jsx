import React from "react";
import Loyout from "./loyout/Loyout";
import StackItem from "./StackItem";
import styled from "styled-components";
import { Container } from "./styleComponents.jsx/HomeStyle";

const StyleComponents = styled.div`
  margin-top: 145px;
`;

const Stack = () => {
  return (
    <div>
      <Loyout>
        <StyleComponents>
          <Container>
            <div className="section-stack">
              <h2>My Tech Stack</h2>
              <p>Technologies I’ve been working with recently</p>
              <StackItem />
            </div>
          </Container>
        </StyleComponents>
      </Loyout>
    </div>
  );
};

export default Stack;

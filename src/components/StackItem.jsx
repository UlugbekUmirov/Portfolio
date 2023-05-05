import React, { useEffect, useState } from "react";
import { Container } from "./styleComponents.jsx/HomeStyle";
import Axios from "../utils/httpClient";

const StackItem = () => {
  const [stack, setStack] = useState([]);

  useEffect(() => {
    getStack();
  }, []);

  const getStack = () => {
    Axios()
      .get("/api/v1/technique")
      .then((res) => {
        setStack(res?.data?.data);
      })
      .finally();
  };
  return (
    <div>
      <Container>
        <div className="section-stack">
          <div className="stack-img">
            {stack?.map((img) => (
              <img src={img?.tech_img} alt="" />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default StackItem;

import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 41px 10px 0px 10px;
  max-width: 1210px;
  display: flex;

  justify-content: space-between;
  align-items: center;
  & .navbar-right {
    margin: 0;
    display: flex;
    flex-wrap: nowrap;
    flex: 1 0 67%;
    align-items: center;
    & h2 {
      margin: 0;
    }
    & ul {
      display: flex;
      text-align: right;
      margin-left: auto;
      & li {
        list-style-type: none;
        margin-right: 50px;
        & a {
          text-decoration: none;
          color: black;
        }
      }
    }
  }
  & .navbar-left {
    display: flex;
    & .icons {
      margin-right: 20px;
    }
  }
`;

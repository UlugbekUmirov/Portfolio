import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  max-width: 1210px;
  & .home-section {
    padding: 245px 0px 330px 0px;
    display: flex;
    & .home-section-title {
      & h1 {
        font-weight: 700;
        font-size: 58px;
        line-height: 70px;
        color: #42446e;
        width: 70%;
        & span {
          background: -webkit-linear-gradient(#13b0f5, #e70faa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
    & .home-section-img {
    }
  }
  & .section-stack {
    margin-bottom: 190px;
    & h2 {
      text-align: center;
      font-weight: 700;
      font-size: 48px;
      line-height: 26px;
      color: #42446e;
      margin: 0;
      margin: 50px 0px;
    }
    & p {
      text-align: center;
      color: #666666;
      font-weight: 400;
      font-size: 32px;
      line-height: 26px;
      margin: 0;
      margin-bottom: 140px;
    }
    & .stack-img {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      gap: 2rem;
      justify-content: center;
      justify-items: center;
      & img {
        width: 120px;
        height: 120px;
      }
    }
  }
  & .section-project {
    margin-bottom: 200px;
    & h2 {
      text-align: center;
      font-weight: 700;
      font-size: 48px;
      line-height: 26px;
      color: #42446e;
      margin: 0;
      margin: 50px;
    }
    & p {
      text-align: center;
      color: #666666;
      font-weight: 400;
      font-size: 32px;
      line-height: 26px;
      margin: 0;
      margin-bottom: 96px;
    }
    & .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
      justify-content: center;
      justify-items: center;
      & .card {
        max-width: 375px;
        background: #ffffff;
        box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        min-height: 373px;
        margin-bottom: 30px;
        & img {
          height: 260px;
          max-width: 375px;
          background-repeat: no-repeat;
          background-position: center;
          background: no-repeat scroll center scroll;
          -webkit-background-size: cover;
          background-size: cover;
          width: 100%;
          border-radius: 20px 20px 0px 0px;
          cursor: pointer;
        }
        & .card-text {
          padding: 25px;
          & h4 {
            font-weight: 500;
            font-size: 28px;
            line-height: 26px;
            margin: 0;
            margin-bottom: 17px;
          }
          & p {
            font-weight: 300;
            font-size: 18px;
            text-align: left;
            line-height: 26px;
            color: #666666;
            margin-bottom: 12px;
          }
          & .stack {
            color: #42446e;
            font-weight: 400;
            font-size: 16px;
          }
          & .links {
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            & .link {
              display: flex;
              align-items: center;
              margin-right: 30px;
              & span {
                margin-left: 10px;
                color: black;
              }
            }
          }
        }
      }
    }
  }
  & .navbar-right {
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
  & .bottom-link {
    display: flex;
    align-items: center;
    & .navbar-right {
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      color: #42446e;
      & ul {
        & li {
          a {
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
            color: #42446e !important;
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
  }
  & hr {
    margin: 40px 0px 60px 0px;
    border: none;
    border: 1px solid #666666;
    opacity: 0.3;
  }
  & .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    & ul {
      display: flex;
      padding: 0;
      & li {
        list-style-type: none;
        margin-right: 50px;
        & a {
          text-decoration: none;
          color: #42446e;
        }
      }
    }
    & p {
      color: #42446e;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      & span{
        background: -webkit-linear-gradient(#13b0f5, #e70faa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; 
      }
    }
  }
`;

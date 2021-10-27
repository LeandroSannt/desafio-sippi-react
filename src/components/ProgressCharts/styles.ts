import styled from "styled-components";

//@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap');

export const Container = styled.div`
  width: 300px;
  border-radius: 50%;
  .progressLine {
    background-color: #bdbdbd;
    border-radius: 0.5rem;
    height: 16px !important;
    width: 300px;
  }

  > div {
    border-radius: 50%;
    p {
      width: 100%;
      margin-top: 25px;
      margin-left: 5px;
      font-size: 28px;
      font-weight: 800;
      text-align: center;
      font-family: "Open Sans", sans-serif;

      span {
        margin-left: 3px;
        font-size: 16px;
        color: #bdbdbd;
      }
    }
  }

  .progress {
    background: rgb(113, 232, 138);
    background: linear-gradient(
      90deg,
      rgba(113, 232, 138, 1) 0%,
      rgba(63, 199, 92, 1) 100%
    );
    height: 16px;
    width: 200px;
    border-radius: 0.5rem;
    transition: 1s ease;
    transition-delay: 0.5s;
  }

  .borderteste {
    background-color: red;
    width: 300px;
    height: 200px;
    position: absolute;
    border-radius: 250px 250px 0 0;

    .teste {
      position: absolute;
      top: 20px;
      margin: 0 auto;
      width: 320px;
      height: 300px;
      background-color: #fff;
      border-radius: 50%;
    }
  }

  .meia-lua {
    width: 150px;
    height: 75px;
    background-color: #bdbdbd;

    border-radius: 150px 150px 0px 0px;
    position: relative;

    .meia-lua2 {
      position: absolute;
      margin-left: 15px;
      top: 15px;
      width: 120px;
      height: 75px;
      background-color: #fff;
      border-radius: 150px 150px 0px 0px;
    }
  }

  .box {
    width: 200px;
    height: 100px;
    border: solid 5px #000;
    border-color: #000 transparent transparent transparent;
    border-radius: 160%/400px 400px 0 0;

    &::after {
      content: " ";
      width: 200px;
      height: 100px;
      background-color: red;
    }
  }

  .teste2 {
    width: 200px;
    height: 200px;
  }
`;

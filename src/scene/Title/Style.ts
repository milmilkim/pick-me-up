import styled from 'styled-components';

const Style = styled.div<{ background: string }>`
  position: absolute;
  padding: 5px;
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.background})`};
  background-color: #251f43;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;

  .ver {
    margin-left: auto;
  }

  .message {
    position: absolute;
    left: 50%;
    top: 90%;
    transform: translateX(-50%) translateY(-50%);
    transition: opacity 0.5s ease-in-out;
    opacity: 1;
  }

  .menu-container {
    position: relative;
    color: #000;
    margin-top: auto;
    left: 50%;
    width: 300px;
    transform: translateX(-50%);
    margin-bottom: 20px;
    z-index: 1;

    .menu-animation {
      position: relative;
      white-space: nowrap;
      overflow: hidden;
      width: 0;
      height: 0;
      left: 50%;
      top: 50%;

      .menu {
        height: 200px;
        padding: 10px;
        width: 100%;
        display: flex;
        flex-direction: column;

        li {
          margin-bottom: 10px;
          a {
            color: #000;
          }
        }
      }
    }
  }
`;

export default Style;

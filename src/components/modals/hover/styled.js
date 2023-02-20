import styled from 'styled-components';

const HoverWrapper = styled.div`
  background-color: rgba(0, 0, 0, .8);
  color: #fff;
  width: 100%;
  height: 100%;
  flex: 1;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
  padding: 10px;
  animation: .5s showText;
  animation-iteration-count: 1;
  display: flex;
  align-items: flex-end;

  @keyframes showText {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  .buttons {
    display: flex;
    margin-bottom: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .controller {
      border: 2px solid #fff;
      padding: 5px;
      border-radius: 50%;
      margin-right: 10px;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      min-width: 40px;
      height: 40px;
      background-color: transparent;
      cursor: pointer;

      svg {
        font-size: 14px;
      }
    }
  }
  
  .title {
    font-weight: bold;
    margin-top: 10px;
  }

  .date {
    font-size: 14px;
    color: lightgray;
    text-overflow: ellipsis;
    white-space: pre-wrap;
    overflow: hidden;
    margin-top: 10px;
  }
  
  .info {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
`

export {
  HoverWrapper
}

import styled from 'styled-components';

const TrailerOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  
  .wrapper {
    max-width: 700px;
    width: 100%;
    height: 600px;
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #141414;
    border-radius: 5px;
    
    :after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      z-index: 20;
    }
  }
  
  #player {
    .ytp-chrome-top-buttons,
    .ytp-pause-overlay-container {
      display: none!important;
    }
  }

  .close {
    position: absolute;
    right: 20px;
    top: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: rgba(255,255,255,.2);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: none;
    z-index: 21;
  }

  .info_block {
    padding: 20px;
    display: flex;

    .left {
      flex: 2;
      padding-right: 20px;

      .release {
        margin-bottom: 10px;
        color: #ffffffd1;
      }
      
      .desc {
        color: #ffffffd1;
        line-height: 20px;
        font-size: 12px;
      }
    }

    .right{
      flex: 1;
      
      .fake {
        margin-bottom: 10px;
        height: 18px;
      }
      
      .genres,
      .lang,
      .votes {
        margin-bottom: 15px;
        color: #ffffffd1;
        
        span {
          color: gray;
          font-weight: 500;
          color: gray;
        }
      }
    }
  }
  
  .playerWrapper {
    height: 80%;
    width: 100%;
    position: relative;
    
    .buttons {
      position: absolute;
      z-index: 21;
      bottom: 15px;
      left: 0;
      padding: 0 20px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      
      .controllers {
        display: flex;
        align-items: center;
        
        .play {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 500;
          cursor: pointer;
          margin-right: 20px;
          background-color: #fff;
          color: #141414;

            span {
              color: #141414;
            }

            .icon {
              width: 20px;
              height: 20px;
              object-fit: contain;
              margin-right: 10px;
              path {
                color: #141414;
              }
            }
          }
        
        .plus {
          margin-right: 10px;
        }
      }
      
      .controller {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: 2px solid #fff;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
`;

export {
  TrailerOverlay,
}

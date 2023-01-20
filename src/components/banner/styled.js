import styled from 'styled-components';

const BannerWrapp = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  
  .poster {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MovieInfo = styled.div`
  position: absolute;
  bottom: 100px;
  left: 0;
  max-width: 700px;
  
  .title {
    font-size: 50px;
    line-height: 60px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  
  .overview {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }

  .buttons {
    display: flex;

    button, a {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      font-weight: 500;
      margin-right: 10px;
      cursor: pointer;
      margin-top: 20px;

      &.play {
        background-color: #fff;
        color: #141414;
        
        span {
          color: #141414;
        }
        
        .icon {
          path {
            color: #141414;
          }
        }
      }

      &.more {
        background-color: gray;
        color: #fff;
      }
      
      .icon {
        width: 20px;
        height: 20px;
        object-fit: contain;
      }

      span {
        margin-left: 5px;
        font-weight: 600;
      }
    }
    
    a {
      text-decoration: none;
    }
  }
`;

export {
  BannerWrapp,
  MovieInfo
}

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

  @media (max-width: 790px) {
    max-width: 500px;
  }
  
  @media(max-width: 500px){
    left: 50%;
    top: 50%;
    bottom: unset;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  
  .title {
    font-size: 50px;
    line-height: 60px;
    margin-bottom: 20px;
    font-weight: bold;

    @media (max-width: 500px) {
      font-size: 40px;
    }
  }
  
  .overview {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
    margin-bottom: 10px;

    @media (max-width: 790px) {
      font-size: 14px;
    }

    @media (max-width: 500px) {
      font-size: 13px;
    }
  }
  
  .rate {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    
    .pills_list {
      display: flex;
      align-items: center;
      margin-left: 20px;
      flex-wrap: wrap;
      
      .pill{
        padding: 10px 15px;
        background-color: #fff;
        color: #000;
        border-radius: 16px;
        font-weight: 600;
        margin: 0 10px 10px 0;

        @media (max-width: 500px) {
          padding: 5px 10px;
        }
      }
    }
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

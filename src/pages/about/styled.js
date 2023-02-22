import styled from 'styled-components';

const SingleMoviePage = styled.div`
  width: 100%;
  margin-top: 82px;

  @media (max-width: 800px) {
    margin-top: 50px;
  }
`;

const MainScreen = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 30px 0;
  background-image: ${props => props.img && `url(${props.img})`};
  background-position: left calc((50vw - 170px) - 250px) top;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: relative;
  z-index: 0;

  &:after {
    content: '';
    background-image: linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 30%, rgba(31.5, 31.5, 31.5, 0.84) 100%);
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }

  .container {
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
      flex-direction: column;
    }
  }

  .poster {
    flex: 1;
    max-width: 300px;
    width: 100%;
    height: 450px;
    object-fit: cover;
    object-position: center;
    z-index: 1;

    @media (max-width: 800px) {
     margin-bottom: 40px;
    }
  }

  .info {
    flex: 2;
    z-index: 1;
    padding: 0 40px;
    
    .title {
      font-size: 30px;
      font-weight: bold;
      margin-bottom: 10px;
      line-height: 32px;
      
      span {
        opacity: .8;
        font-size: 30px;
      }
    }
    
    .play {
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
      background-color: #fff;
      color: #141414;
      margin-bottom: 10px;

      span {
        color: #141414;
      }

      .icon {
        margin-right: 10px;
        path {
          color: #141414;
        }
      }
    }
    
    .release {
      padding: 10px 0;
      font-size: 16px;
      color: #d3d3d3;
    }
    
    .genres {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      
      .genres_type {
        border: 1px solid rgba(255,255,255,0.6);
        color: rgba(255,255,255,0.6);
        border-radius: 2px;
        margin-right: 7px;
        padding: 2px 5px;
        text-transform: uppercase;
      }
      
      .genres_item {
        padding-right: 5px;
      }
    }
    
    .overview {
      &_title {
        margin-bottom: 15px;
        font-size: 20px;
      }
      
      &_desc {
        font-size: 16px;
        line-height: 20px;
        color: lightgrey;
      }
    }

    @media (max-width: 800px) {
      padding: 0;
    }
  }
`;

const SeriesCast = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 50px 0;
  
  .title {
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 20px;
  }
  
  .actors_section {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20px;
    border-bottom: 1px solid;
    border-color: rgba(255,255,255,.3);
    
    .actor {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex: 1 0 calc(25% - 15px);
      width: unset;
      margin: 5px;
      max-width: calc(25% - 15px);

      @media (max-width: 768px) {
        flex: 1 0 calc(33.33% - 20px);
        max-width: calc(33.33% - 20px);
      }

      @media (max-width: 480px) {
        flex: 1 0 calc(50% - 20px);
        max-width: calc(50% - 20px);
      }
      
      .photo {
        width: 100%;
        height: fit-content;
        object-fit: cover;
        margin-bottom: 10px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
      }
      
      .name {
        font-size: 20px;
        line-height: 24px;
        margin-bottom: 10px;
      }
      
      .character {
        font-size: 18px;
        line-height: 22px;
        color: #d3d3d3;
      }
      
    }
  }
`;

const Recomendations = styled.div`
  .caption {
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 20px;
  }
  
  .list {
    overflow: hidden;
    
    .slider_container,
    .listTitle {
      margin-left: 0;
    }
  }
`;

export {
  SingleMoviePage,
  MainScreen,
  SeriesCast,
  Recomendations
}


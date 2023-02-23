import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 82px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);
  transition: .5s;

  @media (max-width: 700px) {
    height: 50px;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .left {
    display: flex;
    align-items: center;
    justify-content: center;

    .logo {
      width: 100px;
      height: 30px;
      margin-right: 50px;

      @media (max-width: 700px) {
        height: 20px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .navigation {
      a {
        color: #E5E5E5;
        font-weight: 500;
        text-decoration: none;
        margin-right: 20px;
        text-transform: uppercase;
        padding: 5px 10px;
        border-radius: 2px;

        &.active {
          font-weight: 900;
          color: #fff;
          background-color: rgb(255, 0, 0);
        }

        &:last-child {
          margin-right: 0;
        }
      }

      @media (max-width: 790px) {
        display: none;
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    justify-content: center;

    .user_info {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      border: none;
      position: relative;

      .icon {
        margin-right: 0;
      }

      .arrow {
        width: 15px;
        height: 12px;
      }
    }

    .icon {
      cursor: pointer;
      object-fit: cover;
      width: 20px;
      height: 20px;
      color: #fff;
      margin-right: 30px;
    }

    .hamburger {
      display: none;
    }

    .hamburger_btn,
    .search_btn {
      background-color: transparent;
      border: none;
    }
    
    .signIn_btn {
      font-weight: 500;
      text-decoration: none;
      margin-right: 20px;
      text-transform: uppercase;
      padding: 5px 10px;
      border-radius: 2px;
      color: #fff;
      background-color: rgb(255, 0, 0);
      
      @media(max-width: 790px){
        margin-right: 0;
      }
    }

    @media (max-width: 790px) {
      .bell,
      .search {
        display: none;
      }

      .hamburger {
        display: block;
      }
    }
  }

  &.scrolled {
    background-color: #141414;
    transition: .5s;
  }
`;

const ResponsiveMenu = styled.div`
  background-color: rgb(19, 19, 19);
  color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 20%) 0 8px 10px -5px, rgb(0 0 0 / 14%) 0px 16px 24px 2px, rgb(0 0 0 / 12%) 0px 6px 30px 5px;
  background-image: linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15));
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1 0 auto;
  z-index: 1200;
  position: fixed;
  top: 0;
  outline: 0;
  left: 0;
  min-width: 250px;
  padding: 40px 20px;
  align-items: center;
  transform: translateX(-100%);
  transition: 2s;
  

  .logo {
    width: 50%;
    margin-bottom: 50px;
    z-index: 1100;
  }

  .menu {
    list-style: none;
    margin: 0;
    position: relative;
    width: 100%;
    z-index: 1100;

    .menu_item {
      margin-bottom: 40px;
      a {
        text-decoration: none;
      }

      .icon {
        min-width: 56px;
        color: rgb(255, 255, 255);
        flex-shrink: 0;
        display: inline-flex;
      }

      span {
        margin: 0;
        font-family: Roboto, Helvetica, Arial, sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.5;
        letter-spacing: 0.00938em;
        text-transform: uppercase;
      }
    }
  }
  
  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    position: fixed;
    left: 0;
    top: 0;
    min-height: 100vh;
    width: 100%;
  }
  
  &.active {
    transform: translateX(0%);
    transition: 2s;
  }
`

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  position: fixed;
  left: 0;
  top: 0;
  min-height: 100vh;
  width: 100%;
`

export {
  HeaderWrapper,
  ResponsiveMenu,
  Overlay
}

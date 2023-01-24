import styled from 'styled-components';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 82px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to top, transparent 0%, rgb(0, 0, 0, 0.3) 50%);
  transition: .5s;
  
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
        
        &.active {
          font-weight: 900;
          color: #fff;
        }
        
        &:last-child {
          margin-right: 0;
        }
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
  }
  
  &.scrolled {
    background-color: #141414;
    transition: .5s;
  }
`;

export {
  HeaderWrapper
}

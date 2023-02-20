import styled from 'styled-components';

const UserInfoWrapper = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background-color: gray;
  border-radius: 5px;
  padding: 20px;
  min-width: fit-content;
  white-space: nowrap;
  
  .userInfo_block {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    font-weight: bold;
    
    span {
      margin-left: 10px;
      opacity: .8;
    }
  }
  
  
  .logout_btn {
    width: 100%;
    border: none;
    color: #141414;
    text-transform: uppercase;
    font-weight: bold;
    padding: 10px 0;
    border-radius: 10px;
    cursor: pointer;
  }
  
  .photo {
    justify-content: center;
  }
`

const PhotoBlock = styled.label`
  margin-bottom: 20px;
  cursor: pointer;
  
  .hidden-input {
    display: none;
  }
  
  .preview {
    width: 40px;
    height: 40px;
  }
  
  .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export {
  UserInfoWrapper,
  PhotoBlock
}

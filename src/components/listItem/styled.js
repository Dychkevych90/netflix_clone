import styled from 'styled-components';

const ListWrapper = styled.div`
  width: 225px;
  height: 300px;
  background-color: #141414;
  margin-right: 5px;
  overflow: hidden;
  cursor: pointer;
  color: #fff;
  transition: .3s;
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 2;
  }

  &:hover {
    //transform: scale(1.2);
    //transition: .5s;
    //z-index: 10;
    //height: 150px;
  }
`;

export {
  ListWrapper
}

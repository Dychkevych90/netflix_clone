import styled from 'styled-components';

const MyListWrapper = styled.div`
  margin-top: 82px;
  padding: 40px 0;
  display: flex;
  align-items: center;
  //justify-content: flex-start;
  width: 100%;
  flex-wrap: wrap;
  
  .movie {
    width: 100%;
    height: auto;
    max-width: calc(100% / 4 - 15px);
    margin-bottom: 15px;
    cursor: pointer;
    position: relative;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  //& .movie:nth-child(4n){
  //  margin-right: 0;
  //}
`

export {
  MyListWrapper
}

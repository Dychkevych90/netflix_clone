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
    height: auto;
    flex: 1 0 calc(25% - 20px);
    max-width: calc(25% - 20px);
    cursor: pointer;
    position: relative;
    width: unset;
    margin: 5px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 768px) {
      flex: 1 0 calc(33.33% - 20px);
      max-width: calc(33.33% - 20px);
    }

    @media (max-width: 480px) {
      flex: 1 0 calc(50% - 20px);
      max-width: calc(50% - 20px);
    }
  }

  @media(max-width: 700px){
    margin-top: 50px;
  }
`

export {
  MyListWrapper
}

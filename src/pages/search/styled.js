import styled from 'styled-components';

const SearchPageWrapper = styled.div`
  margin-top: 150px;
  
  .search_input {
    width: 100%;
    padding: 10px;
    height: 50px;
    border-radius: 5px;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.23);
    outline: none;
    margin-bottom: 50px;
  }
  
  .list {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    
    .movie {
      flex: 1 0 calc(25% - 20px);
      width: unset;
      margin: 5px;
      max-width: calc(25% - 20px);

      @media (max-width: 768px) {
        flex: 1 0 calc(33.33% - 20px);
        max-width: calc(33.33% - 20px);
      }

      @media (max-width: 480px) {
        flex: 1 0 calc(50% - 20px);
        max-width: calc(50% - 20px);
      }
    }
  }
`

export {
  SearchPageWrapper
}

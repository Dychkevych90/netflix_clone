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
      max-width: calc(100% / 4 - 10px);
    }
  }
`

export {
  SearchPageWrapper
}

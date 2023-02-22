import styled from 'styled-components';

const FooterWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 100px 0 20px;
  
  .top_row,
  .bottom_row {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .top_row {
    ul {
      display: flex;
      align-items: center;
      
      li {
        margin-right: 20px;
      }

      & li:last-child{
        margin-right: 0;
      }
    }
    .social_icon {
      display: block;
      
      img {
        width: 24px;
        height: 24px;
        object-fit: contain;
      }
    }
  }
  
  .bottom_row {
    padding-top: 30px;

    @media (max-width: 700px) {
     display: none;
    }
  }
`;

const FooterItem = styled.ul`
  flex: 1;
  
  li {
    list-style-type: none;
    padding: 5px 0;
  }
  
  .bottom_link {
    text-decoration: none;
  }
`;

export {
  FooterWrapper,
  FooterItem
}

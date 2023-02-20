import styled from 'styled-components'

const CircleBarWrapper = styled.div`
  position: relative;
  width: ${props => props.size ? `${props.size+'px'}` : '50px' };
  height: ${props => props.size ? `${props.size+'px'}` : '50px' };
  max-width: ${props => props.size ? `${props.size+'px'}` : '50px' };
  display: flex;
  align-items: center;
  justify-content: center;
  
  .CircularProgressbar-text {
    font-weight: bold;
  }
`

export {CircleBarWrapper}

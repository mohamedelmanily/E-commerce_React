import styled from "styled-components"

const Container =styled.div`
height:30px;
background-color:teal;
color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 14px;
font-weight: 500;

`
const Announcment = () => {
  return (
    <Container>Super Shipping great! Free deal with us with 50$</Container>
  )
}

export default Announcment
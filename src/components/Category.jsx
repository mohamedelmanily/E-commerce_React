import React from 'react'
import styled from 'styled-components'
import { mobile } from '../response'
const Container= styled.div`
height:50vh;
margin: 10px;
padding: 20px;
position: relative;
${mobile({margin:' 10px 0',padding: '0px'})}
`
const Info= styled.div`
position: absolute;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
top: 0;
left: 0;
color:#000000
`
const H1=styled.h1``
 const Image=styled.img`
 width: 100%;
 height:100%;
 object-fit:cover;`   
 const Button =styled.button`
 margin-top: 10px;
 padding:10px;
 width: 100px;
 border-radius: 2px;
 background-color: #b0afaf;
 font-weight: 600;
 color: white  ;
 cursor: pointer;
  `
const Category = (props) => {
  return (
    <Container>
        <Image src={props.imgSrc}/>
        <Info>
        <H1>{props.title}</H1>
        <Button>Shop Now</Button>
        </Info>
    </Container>
  )
}

export default Category
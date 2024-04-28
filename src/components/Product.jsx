import { SearchOutlined,FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import {hover} from '@testing-library/user-event/dist/hover'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Info=styled.div`
width: 100%;
height: 100%;
position:absolute;
top: 0;
left: 0;
display: flex;
align-items:center;
justify-content: space-evenly;
z-index:2;
opacity:0;
transition: all.3s;
&:hover{
    background-color: rgb(0, 0, 0,0.2);
    
}
`

const Container= styled.div`
width: 100%;
flex: 1;
min-width: 280px;
flex-grow: 0;
height:50vh;
margin: 10px;
padding: 20px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
background-color: #f3f0f0;
transition: all.4s;
&:hover ${Info}{
    opacity: 1;
}
`
const Image=styled.img`
width: 100%;
height:100%;
 object-fit:contain;
 z-index: 1;
`

const Icon= styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: white;
width: 50px;
height: 50px;
border-radius: 50%;
cursor: pointer;
transition: ease .3s;
&:hover{
    background-color: #abecf9;
    scale: 1.03;
}
`
const Circle =styled.div`
    background-color: #ffffff;
    width: 250px;
    height: 250px;
    position: absolute;
    border-radius: 50%;

`
const Product = (props) => {
  return (
    <Container>
        <Circle/>
        <Image src={props.src}/>
        <Info>
            <Link to="/cart">
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            </Link>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
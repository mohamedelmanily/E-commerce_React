import React from 'react'
import Product from './Product'
import {ProductsItems} from '../Data'
import styled from 'styled-components'
const Container= styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
gap: 25px;
padding: 20px 50px;
`
const Products = () => {
  return (
    <Container>
        {ProductsItems.map((e)=>(
            <Product src={e.src} key={e.id}/>
        ))}
    </Container>
  )
}

export default Products
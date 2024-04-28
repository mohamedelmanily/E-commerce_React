import React from 'react'
import styled from 'styled-components'
import { CategoriesItems } from '../Data'
import Category from './Category'

const Container =styled.div`
    display: flex;
    justify-content: space-evenly;
  flex-wrap: wrap;
`
const Categories = () => {
  return (
    <Container>
        {CategoriesItems.map((e) => (
            <Category imgSrc={e.src} title={e.title} key={e.id} />
        ))}
    </Container>
    
  )
}

export default Categories
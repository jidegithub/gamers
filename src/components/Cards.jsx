import React from 'react';
import { images } from './images';
import styled from 'styled-components'

const Square = styled.div`
  cursor: pointer;
  position: relative;
  transition: transform .3s, -webkit-transform .3s;
  margin: 5px 8px;
}
  &:hover {
  transform: translateY(-1rem);
  border: 2px solid #5298b9;
  border-radius: 5px;
}
  };
`

export default function Cards() {

  function setHover(e) {
    e.target.style.borderWidth = '1px';
    e.target.style.border = 'solid';
    e.target.style.borderColor = '#fff';
    // console.log(e)
  }

  // function getInfo(e){
  //   console.log(e)
  // }

  return (
    <>
      <section className="card">
        {images.map((image, i) => (
          <Square key={i} >
            <figure className="card--content">
              <img src={image.thumbnail} alt={image.title} />
            </figure>
          </Square>
        ))}
      </section>
    </>
  )
}

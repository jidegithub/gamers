import React, { useRef, useEffect } from 'react';
import { images } from './images';
import styled from 'styled-components'
import SelectAudio from '../audio/select.mp3'

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
  const audioRef = useRef()

  function setHover(e) {
    // const bodyTag = useRef(null);
    let body = document.getElementsByTagName('body');

    e.target.style.borderWidth = '1px';
    e.target.style.border = 'solid';
    e.target.style.borderColor = '#fff';
    // console.log(body)
  }

  function playOnloadedAudio() {
    audioRef.current.play()
    // audioRef.current.playbackRate = 2.0;
  }

  function pauseOnloadedAudio() {
    audioRef.current.currentTime = 0;
    audioRef.current.pause()
  }


  return (
    <>
      <audio id="audio" ref={audioRef}>
        <source src={SelectAudio} type="audio/mp3"></source>
      </audio>
      <section className="card">
        {images.map((image, i) => (
          <Square onMouseEnter={playOnloadedAudio} onMouseLeave={pauseOnloadedAudio} key={i} >
            <figure className="card--content">
              <img src={image.thumbnail} alt={image.title} />
            </figure>
          </Square>
        ))}
      </section>
    </>
  )
}

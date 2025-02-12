import React, { useState } from "react"


import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import './ImgItem.css';

const imagens = [img1, img2, img3, img4, img5, img6]

function ImgItem() {
  const [imgSrc, setImgSrc] = useState(imagens[0])
  const [timer, setTimer  ] = useState (false)
  const [text, setText] = useState('')

  const girarImagem = () => {
    const novaImagem = imagens[Math.floor(Math.random() * imagens.length)]
    setImgSrc(novaImagem)

    setTimer(true);
    setText('Crie sua sua história!');

    setTimeout(() => {

      setTimer(false);
      setText('');
    }, 15000);
  } 

  return (
    <div className="container-imgs" style={{ textAlign: "center" }}>
      <img
        src={imgSrc}
        alt="Imagem"
      />
      <br />
       
       {
        timer
        ?
        <div className="timer">
          <h2>{text}</h2>
       </div>
       :
      <button
        onClick={girarImagem}
       
      >
        Girar
      </button>
      }

    </div>


  );
}

export default ImgItem
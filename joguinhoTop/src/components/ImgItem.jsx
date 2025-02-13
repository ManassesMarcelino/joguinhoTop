import React, { useState, useEffect } from "react";
import "./ImgItem.css";

import img1 from "../assets/img1.svg";
import img2 from "../assets/Img2.svg";
import img3 from "../assets/Img3.svg";
import img4 from "../assets/Img4.svg";
import img5 from "../assets/Img5.svg";
import img6 from "../assets/Img6.svg";
import img7 from "../assets/Img7.svg";
import img8 from "../assets/Img8.svg";

const imagens = [img1, img2, img3, img4, img5, img6, img7, img8];

const ImgItem = () => {
  const [imgSrc, setImgSrc] = useState(imagens[0]);
  const [timer, setTimer] = useState(false);
  const [text, setText] = useState("");
  const [timerCount, setTimerCount] = useState(5);

  useEffect(() => {
    if (timer && timerCount > 0) {
      const countdown = setInterval(() => {
        setTimerCount((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(countdown);
    } else if (timerCount === 0) {
      resetTimer();
    }
  }, [timer, timerCount]);

  const girarImagem = () => {
    setImgSrc(imagens[Math.floor(Math.random() * imagens.length)]);
    setTimer(true);
    setText("Crie sua história!");
    setTimerCount(5);
  };

  const resetTimer = () => {
    setTimer(false);
    setText("");
    setTimerCount(5);
  };

  return (
    <div className="container-imgs" style={{ textAlign: "center" }}>
      <div className="imagem-container">
        <img src={imgSrc} alt="Imagem" />
      </div>
      <br />
      {timer ? (
        <div className="timer">
          <h2>{text}</h2>
          <h2>{timerCount}</h2>
        </div>
      ) : (
        <button onClick={girarImagem}>Girar</button>
      )}
    </div>
  );
};

export default ImgItem;

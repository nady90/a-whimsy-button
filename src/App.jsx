import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import heartSvg from "./assets/heart-svg-2.svg";
import heartSVGTransparent from "./assets/heart-svg-transparent.svg";
import heartSVGMask from "./assets/heart-svg-mask.svg";
import heartSVGPlugin from "./assets/heart-svg-plugin.svg";
import useSound from "use-sound";
import popSound from "./assets/541993__rob_marion__gasp_ui_pop_1.wav";

function App() {
  const redDivRef = useRef(null);
  const eyesEmojiRef = useRef(null);
  const [clickCount, setClickCount] = useState(1);

  const [playPopSound] = useSound(popSound, { volume: 0.25 });

  const handleBtnClick = () => {
    redDivRef.current.style.transform = `translate(-50%,-${clickCount * 30}%)`;
    setClickCount(clickCount + 1);

    playPopSound();

    if (clickCount >= 3) {
      setClickCount(0);
      // eyesEmojiRef.current.style.opacity = 0;
      eyesEmojiRef.current.classList.add("emoji-animation");
    }

    if (clickCount < 3) {
      eyesEmojiRef.current.classList.remove("emoji-animation");
    }
  };

  return (
    <div className="container">
      <div className="btn-container">
        <h1 className="btn-heading">
          click the heart
          <svg
            ref={eyesEmojiRef}
            className="emoji-1 "
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.5541 15.7799C31.5541 24.5007 24.5144 31.5404 15.7936 31.5404C7.07278 31.5404 0.0330811 24.5007 0.0330811 15.7799C0.0330811 7.05908 7.07278 0.0193787 15.7936 0.0193787C24.5144 0.0193787 31.5541 7.05908 31.5541 15.7799Z"
              fill="#FFDD67"
            />
            <path
              d="M31.4491 5.90331C31.1864 4.48486 30.3984 3.32909 29.085 2.96134C27.6665 2.5936 26.4057 3.11895 25.1974 4.37979C24.5144 2.48853 23.4637 1.07008 21.7826 0.334592C20.1015 -0.400899 18.4204 0.124452 17.3697 1.43783C16.2664 2.80374 15.8462 4.95768 17.0019 7.74204C18.1052 10.3688 22.9909 15.6223 23.1485 15.7799C23.3587 15.6748 28.8223 12.26 30.1357 10.5789C31.4491 8.95034 31.7117 7.32175 31.4491 5.90331ZM14.2176 1.43783C13.1669 0.124452 11.4857 -0.400899 9.80463 0.334592C8.12351 1.07008 7.0728 2.48853 6.38985 4.37979C5.12901 3.17149 3.86817 2.5936 2.44972 3.01388C1.18888 3.38163 0.348317 4.5374 0.0856415 5.95584C-0.177034 7.32175 0.138177 9.00288 1.39902 10.6315C2.76493 12.26 8.22858 15.6748 8.43872 15.7799C8.59632 15.6223 13.4821 10.3688 14.5853 7.74204C15.7411 4.95768 15.3208 2.85627 14.2176 1.43783Z"
              fill="#F46767"
            />
            <path
              d="M24.7246 18.9845C24.7246 18.5643 24.4619 18.0389 23.779 17.8813C21.9402 17.5136 19.2609 17.1983 15.7936 17.1983C12.3263 17.1983 9.64703 17.5661 7.8083 17.8813C7.07281 18.0389 6.86267 18.5643 6.86267 18.9845C6.86267 22.8196 9.80463 26.6547 15.7936 26.6547C21.7826 26.6021 24.7246 22.7671 24.7246 18.9845Z"
              fill="#664E27"
            />
            <path
              d="M22.4656 19.0896C21.3098 18.8795 18.8932 18.5643 15.7936 18.5643C12.694 18.5643 10.2774 18.8795 9.12165 19.0896C8.4387 19.1947 8.38616 19.4574 8.4387 19.8776C8.49123 20.0878 8.49123 20.403 8.5963 20.7182C8.64884 21.0334 8.75391 21.191 9.27926 21.1385C10.2774 21.0334 21.3623 21.0334 22.3605 21.1385C22.8858 21.191 22.9384 21.0334 23.0434 20.7182C23.096 20.403 23.1485 20.1403 23.201 19.8776C23.201 19.4574 23.1485 19.1947 22.4656 19.0896Z"
              fill="white"
            />
          </svg>
        </h1>
        <div className="btn" onClick={handleBtnClick}>
          <div
            className="btn-mask"
            style={{
              backgroundImage: `url(${heartSVGPlugin})`,
            }}
          ></div>
          <div ref={redDivRef} className="btn-content"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

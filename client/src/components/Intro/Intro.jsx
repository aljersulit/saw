import { React, useRef, useState, useEffect } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import assets from "../../assets";

import "./intro.scss";

function Intro() {
  const [playVideo, setPlayVideo] = useState(false);
  const [hiddenOverlay, setHiddenOverlay] = useState(false);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  const showOverlay = () => {
    setHiddenOverlay(false);
  };

  useEffect(() => {
    let delay;
    const hideOverlay = () => {
      delay = setTimeout(() => {
        setHiddenOverlay(true);
      }, 2000);
    };
    const vidBtn = document.querySelector("#video-control");
    console.log(vidBtn);
    vidBtn.addEventListener("mouseout", hideOverlay);

    return () => {
      vidBtn.removeEventListener("mouseout", hideOverlay);
      clearTimeout(delay);
    };
  }, []);

  return (
    <section className="text-center" aria-label="Intro">
      <div className="app__video">
        <video
          src={assets.meal}
          ref={vidRef}
          type="video/mp4"
          loop
          controls={false}
          muted
        />

        <div
          className={`app__video-overlay flex__center ${
            playVideo && hiddenOverlay ? "hidden" : ""
          }`}
        >
          <div
            className={`app__video-overlay_circle flex__center ${
              playVideo && hiddenOverlay ? "hidden" : ""
            }`}
            onClick={handleVideo}
            onMouseOver={showOverlay}
            id="video-control"
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;

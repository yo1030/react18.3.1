import React, { useState } from "react";
import "../pages/Picture.css"

export const Picture = () => {
  const [isActive, setIsActive] = useState<boolean>(false)

  let backgroundClass = "background"
  let imgClass = "picture"

  if (isActive) {
    imgClass += " picture--active";
  } else {
    backgroundClass += " background--active"
  }
  return (
    <span>
      <div className={backgroundClass}
      onClick={() => setIsActive(false)}>
        <img
          className={imgClass}
          onClick={(e: React.MouseEvent<HTMLImageElement>) => {
            e.stopPropagation()
            setIsActive(true)
          }}
          alt="Rainbow houses in Kampung Pelangi, Indonesia"
          src="https://i.imgur.com/5qwVYb1.jpeg"
          />
      </div>
    </span>  
  );
}

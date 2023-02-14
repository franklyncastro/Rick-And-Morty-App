import React from "react";
import style from "./About.module.css"
// import { Link } from "react-router-dom";

export const About = () => {
  return (
    <div className={style.container}>
      <h1>About me:</h1>
      <div className={style.containerP}>
        <h1>Franklyn Castro</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          veritatis consequuntur tempore soluta quas ab necessitatibus corporis
          nobis, nisi debitis possimus quis, quos harum accusantium inventore,
          iste velit esse quibusdam.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          veritatis consequuntur tempore soluta quas ab necessitatibus corporis
          nobis, nisi debitis possimus quis, quos harum accusantium inventore,
          iste velit esse quibusdam.
        </p>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
          veritatis consequuntur tempore soluta quas ab necessitatibus corporis
          nobis, nisi debitis possimus quis, quos harum accusantium inventore,
          iste velit esse quibusdam.
        </p>
      </div>
    </div>
  );
};

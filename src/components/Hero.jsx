import React, { useState } from "react";

export default function Hero() {
  const [one, setPlusOne] = useState(1);

  function handleClick() {
    setPlusOne(one + 1);
  }

  return (
    <>
      <p>{one}</p>
      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

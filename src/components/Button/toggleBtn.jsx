import * as React from 'react';

const ToggleBtn = () => {
    const [mode, setMode] = React.useState("dark");
    const HandleChangeMode = async () => {
      if (mode === "light") {
            setLightMode();
            setMode("dark");
      } else if (mode === "dark") {
            setDarkMode();
            setMode("light");
        }
    
  }
  const setDarkMode = () => {
    document.querySelector("html").setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
  }
  const setLightMode = () => {
    document.querySelector("html").setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
  }
  const selectedMode = localStorage.getItem("data-theme");
  selectedMode == "dark" ? setDarkMode() : setLightMode();
    return (
      <button
        type="button"
        onClick={() => HandleChangeMode()}
        className=" text-primary "
      >
        {mode === 'light' ? (
          <div className="flex flex-row justify-center items-center gap-2 bg-primary rounded-xl px-4 py-1 text-background1">
            <i class="fa-regular fa-sun"></i>
            <p>Light</p>
          </div>
        ) : (
          <div className="flex flex-row justify-center items-center gap-2 bg-primary rounded-xl px-4 py-1 text-background1">
            <i class="fa-regular fa-moon"></i>
            <p>Dark</p>
          </div>
        )}
      </button>
    );
}

export default ToggleBtn;

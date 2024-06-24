import * as React from 'react';

const ToggleBtn = () => {
  const [mode, setMode] = React.useState('');

  const setDarkMode = () => {
    document.querySelector('html').setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
    setMode('dark');
  };

  const setLightMode = () => {
    document.querySelector('html').setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');
    setMode('light');
  };

  const HandleChangeMode = () => {
    mode === 'light' ? setDarkMode() : setLightMode();
  };

  React.useEffect(() => {
    const selectedMode = localStorage.getItem('data-theme') || 'light';
    selectedMode === 'dark' ? setDarkMode() : setLightMode();
  }, []);

  return (
    <button
      type="button"
      onClick={HandleChangeMode}
      className="text-primary"
    >
      {mode === 'dark' ? (
        <div className="flex flex-row justify-center items-center gap-2 bg-primary rounded-xl px-4 py-1 text-background1">
          <i className="fa-regular fa-sun"></i>
          <p>Light</p>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center gap-2 bg-primary rounded-xl px-4 py-1 text-background1">
          <i className="fa-regular fa-moon"></i>
          <p>Dark</p>
        </div>
      )}
    </button>
  );
};

export default ToggleBtn;

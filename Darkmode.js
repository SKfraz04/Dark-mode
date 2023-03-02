import { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove(theme === 'light' ? 'dark' : 'light');
    body.classList.add(theme);
  }, [theme]);

  return (
    <div className="App">
      <button onClick={toggleTheme}>Toggle Theme</button>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nibh eget urna suscipit suscipit. </p>
    </div>
  );
}

export default App;

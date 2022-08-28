import React from 'react';
import MainPage from './MainPage';

const App = () => {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,
      flexShrink: 0,
      justifyContent: 'center',

    }}>
      <MainPage />
    </main>
  );
};

export default App;

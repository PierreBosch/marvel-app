import React from 'react';
import SignIn from './pages/SignIn';

import CreateGlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
     <>
         <SignIn />
         <CreateGlobalStyle />
     </>
  );
}

export default App;
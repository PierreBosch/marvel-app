import React from 'react';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import CreateGlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
     <>
         <SignUp />
         <CreateGlobalStyle />
     </>
  );
}

export default App;
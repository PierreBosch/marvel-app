import React from 'react';
import SignIn from './pages/SignIn';
import { AuthProvider } from './hooks/AuthContext';
import CreateGlobalStyle from './styles/global';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';


const App: React.FC = () => {
  return (
     <Router>
         <AuthProvider>
          <Routes />
         </AuthProvider>
         <CreateGlobalStyle />
     </Router>
  );
}

export default App;
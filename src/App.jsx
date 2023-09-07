import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/Common/LoginButton';
import ChatScreen from './components/Chatbot/ChatScreen';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <div className=''>
          <LoginButton />
        </div>
      ) : (
        <div>
          <ChatScreen />
        </div>
      )}
    </div>
  );
}

export default App;

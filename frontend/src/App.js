import './App.css';
import {Route} from 'react-router-dom';
import Homepage from './Page/Homepage';
import ChatPage from './Page/ChatPage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact></Route>
      <Route path="/chats" component={ChatPage}></Route>
    </div>
  );
}

export default App;

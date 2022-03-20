import React from 'react';
import {Button} from "./components/Button";
import { Input } from './components/Input';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom'
import { 
    BotDetailScreen, 
    CreateBotScreen, 
    ListBotScreen, 
    MessageListScreen 
} from './screens';
import { TelegramLogin } from './screens/TelegramLogin';


function App() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<CreateBotScreen />} />
            <Route path='/telegram-login' element={<TelegramLogin />} />
            <Route path='/list' element={<ListBotScreen />} />
            <Route path='/list/:id' element={<BotDetailScreen />} />
            <Route path='/list/:id/messages' element={<MessageListScreen />} />
        </Routes>
    </Router>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import MainLayout from './layouts/mainlayout/mainlayout'
import ChatPage from './pages/chatPage/chat';
import ConversionChats from './pages/chatsLists';

function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
          <MainLayout>
            <ConversionChats />
          </MainLayout>
          }>
            <Route path='' element={<ChatPage/>}/>
          </Route>
        </Routes>
      
      </div>
    </BrowserRouter>
  )
}

export default App

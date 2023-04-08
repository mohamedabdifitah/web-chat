import { useState } from 'react'
import './App.css'


import { BrowserRouter,Routes,Route } from "react-router-dom";
import MainLayout from './layouts/mainlayout/mainlayout'
import ChatPage from './pages/chatPage/chat';
import ConversionChats from './pages/chatsLists';
import SettingPage from './pages/settingsPage/settings';
import NotFoundPage from './404';
import NewChatPage from './pages/NewPage';
import MobileMainLayout from './layouts/mainlayout/mobileLayout';
import ProfilePage from './pages/profilePage';

function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
      {/* <BrowserView> */}

        <Routes>
          {/* chat group Routes */}
          <Route path="/" element={
            <MainLayout>
            <ConversionChats />
          </MainLayout>
          }>
            <Route path='' element={<ChatPage/>}/>
          </Route>
          {/* settings group Routes */}
          <Route path='/settings' element={
            <MainLayout>
              <SettingPage/>
            </MainLayout>
          }>
            <Route path='profile' element={
              <ProfilePage />
            } />

          </Route>
            {/* settings group Routes */}
          <Route path='/add' element={
          <MainLayout>
            
            <NewChatPage />
          </MainLayout>
          }>

          </Route>
          <Route path="*" element={<NotFoundPage />}/> 
        </Routes>
        

        {/* </BrowserView> */}
      </div>
    </BrowserRouter>
  )
}

export default App

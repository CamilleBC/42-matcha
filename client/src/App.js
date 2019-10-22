import React from 'react';
import Chat from './components/Chat';
import Profile from './components/Profile';
import './App.css';

function App() {
  const profile = {
    mail:"tgunzbur@42.fr",
    username:"tgunzbur",
    firstname:"Thomas",
    lastname:"Gunzburger",
    age:"18",
    bio:"Description of moi",
    tags:["tag", "secondtag"],
    score:"10"
  };

  return (
    <div>
      <Chat />
      <Profile {...profile} />
    </div>
  );
}

export default App;

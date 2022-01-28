import React, { useState, useEffect } from 'react'
import './App.css'
import GameContainer from './containers/GameContainer'
import Anxiety from '../src/sounds/2020-02-16_-_Anxiety_-_David_Fesliyan.mp3'

const useAudio = () => {
  const [audio] = useState(new Audio(Anxiety));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

function App() {

  const [playing, toggle] = useAudio(Anxiety);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause Mood Music" : "Play Mood Music"}</button>
    
      <GameContainer />
    </div>
  )
}

export default App;

import { useState } from 'react';
import QR from './QRGen';
import Wel from './welcome';
function App(){
  const [showWelcome, setShowWelcome] = useState(true);

  const handleAnimationEnd = () => {
    setShowWelcome(false);
  };
  return (
    <>
    {showWelcome ? (
        <Wel onAnimationEnd={handleAnimationEnd} />
      ) :(
    <QR/>)}
    </>
  )
}
export default App

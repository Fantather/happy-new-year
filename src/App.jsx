import { useEffect, useState } from 'react'
import './App.css'

const IMAGES = [
  'Sett1.jpeg',
  'Sett2.jpeg',
  'Sett3.jpeg',
  'Sett4.jpeg',
  'Sett5.jpeg',
  'Sett6.jpeg'
];

const COLORS = [
  'red',
  'green',
  'blue',
  'purple',
  'cyan',
  'grey',
  'orange',
  'magenta',
  'gold',
  'lime',
  'teal',
  'navy',
  'crimson',
  'coral',
  'indigo',
  'pink',
  'chartreuse',
  'violet'
];

const PHASES = [
  'BITCH',
  'Золотце',
  'Улитка',
  'Нагибатор 228',
  'И оставайся достоин',
  'Машина',
  'Котлетка',
  'Булочка',
  'Хлебушек',
  'Огуречный барон',
  'Верный слуга Императора',
  'Трёхногий титан',
];

function App() {

  const[textColor, setTextColor] = useState(COLORS[0]);
  const[backgroundColor, setBackgroundColor] = useState(COLORS[1]);
  const[phase, setPhase] = useState(PHASES[Math.floor(Math.random() * PHASES.length)]);
  const[isShowSett, setIsShowSett] = useState(false);

  function setRandomColor(setter) {
    setter(prevColor => {
      const availableColors = COLORS.filter(c => c !== prevColor);
      return availableColors[Math.floor(Math.random() * availableColors.length)];
    });
  }

  function setRandomPhase() {
    setPhase(prevPhase => {
      const availablePhases = PHASES.filter(p => p !== prevPhase);
      return availablePhases[Math.floor(Math.random() * availablePhases.length)];
    });
  }

  useEffect(() => {
    const idColors = setInterval(() => {
      setRandomColor(setTextColor);
      setRandomColor(setBackgroundColor);
      
    }, 300);

    // const idText = setInterval(() => setRandomPhase(), 1000);

    return () => {
      clearInterval(idColors);
      // clearInterval(idText);
    }
  },[])

  const page = isShowSett === false ? 
  <div className='root' style={{ '--text-color': textColor, '--background-color': backgroundColor}}>
    <h1 className='congratulation'>
      С НОВЫМ ГОДОМ!
    </h1>
    <h1 className='phase'>
      {phase}
    </h1>
    <div className='easter-egg' onClick={() => setIsShowSett(true)}>ПАСХАЛКА</div>
  </div>
  :
  <div className='root comics-background'>
    {IMAGES.map((path, index) => <img className='comics-page' key={index} src={path} alt='Sett-comics'/>)}
    <button onClick={() => setIsShowSett(false)}>Вернуться к поздравлению</button>
  </div>

  return (
    page
  )
}

export default App

import { useEffect, useState } from "react"
import './Board.css'
import Tile from "../tile/Tile"
import Overlay from "../overlay/Overlay"
import NewGame from "../new-game/NewGame"
import Winner from "../winner/Winner"

const Board = () => {
  
    const shuffle = () => 
        new Array(16)
        .fill()
        .map((_,i) => i+1)
        .sort(() => Math.random() -.5)
        .map((x,i) => ({value : x , index : i}))

    const [numbers,setNumbers] = useState([])
    const [animating,setAnimating] = useState(false)

    const reset = () => {
        setNumbers(shuffle())
        setIsRunning(false);
        setTimeElapsed(0);
    }

    const scoreStop = () => {
        setIsRunning(false);
    }

    const moveTile = tile => {
        setIsRunning(true);
        const i16 = numbers.find(n => n.value===16).index
        if (![i16-1,i16+1,i16-4,i16+4].includes(tile.index) || animating)
            return
        
        const newNumbers = 
            [...numbers]
            .map(number => {
                if (number.index !== i16 && number.index !== tile.index)
                    return number
                else if (number.value === 16)
                    return {value: 16, index: tile.index}

                return {value: tile.value, index : i16}
            })
        setAnimating(true)
        setNumbers(newNumbers)
        setTimeout(() => setAnimating(false), 200)
    }
    
    const handleKeyDown = e => {
        const i16 = numbers.find(n => n.value===16).index
        if (e.keyCode === 37 && !(i16 % 4 === 3))
            moveTile(numbers.find(n => n.index === i16 + 1))
        else if (e.keyCode === 38 && !(i16 > 11))
            moveTile(numbers.find(n => n.index === i16 + 4))
        else if (e.keyCode === 39 && !(i16 % 4 === 0))
            moveTile(numbers.find(n => n.index === i16 - 1))
        else if (e.keyCode === 40 && !(i16 < 4))
            moveTile(numbers.find(n => n.index === i16 - 4))
    }

    useEffect(() => {
        document.addEventListener('keydown',handleKeyDown)
        return () => {document.removeEventListener('keydown',handleKeyDown)}
    })

    const [isRunning, setIsRunning] = useState(false);
    const [timeElapsed, setTimeElapsed] = useState(0);


    useEffect(() => {
        let timer;
    
        if (isRunning) {
          timer = setInterval(() => {
            setTimeElapsed(prevTime => prevTime + 1);
          }, 1000);
        } else {
          clearInterval(timer);
        }
    
        return () => clearInterval(timer);
      }, [isRunning]);
    
      const scoreGame = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return (
          minutes+seconds/100
        );
      };

      const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return (
          (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds
        );
      };
    useEffect(reset, [])

 

    console.log(scoreGame(timeElapsed))
    return <div className="game">
        <div className="board">
            <Overlay size={16} />
            {numbers.map ((x,i) => {
                return <Tile key={i} number={x} moveTile={moveTile}/>
            })}
        </div>
        <Winner numbers={numbers} scoreStop={scoreStop} timeGame={scoreGame(timeElapsed)}/>
        <div className="time">{formatTime(timeElapsed)}</div>
        <NewGame reset={reset} />
    </div>
}

export default Board
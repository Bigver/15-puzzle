import './App.css';
import Board from './components/board/Board'
import axios from "axios";
import { useEffect, useState } from "react"

const App = () => {
    const [Score, setScore] = useState([]);
    useEffect(() => {
        const getScore = async () => {
        try {
            const res = await axios.get("https://api-score.onrender.com/score");
            setScore(res.data);
            console.log(res.data)
        } catch (err) {}
        };
        getScore();
    },[]);
    return(
        <div className="App">
            <Board/>
            <div className='table'>  
                <table>
                    <tr>
                        <th>ชื่อ</th>
                        <th>เวลาที่ใช้</th>
                    </tr>
                    {
                        Score.map((score) => (
                        <tr>
                            <td>{score.name}</td>
                            <td>{score.score} นาที</td>
                        </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default App;

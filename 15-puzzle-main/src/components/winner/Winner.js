import NewGame from '../new-game/NewGame'
import './Winner.css'
import { useEffect, useState } from "react"
import axios from "axios";

const Winner = ({numbers,scoreStop,timeGame}) => {
    if (numbers.every(n => n.value === n.index +1))
        scoreStop()
    const [name, setName] = useState('');
    const submitHandler = async (e) => {
        e.preventDefault();
        const score = timeGame;
        try {
            await axios.post(
              `https://api-score.onrender.com/create`,
              {
                name,
                score,
              },
            );
            window.location.reload();
          } catch (err) {
                console.log(err)
          }
    }
 
    if (!numbers.every(n => n.value === n.index +1)) 
        return null
    return <div 
        className="winner">
        <p>You win!</p>
        <form onSubmit={submitHandler}>
            <div>
                <label>Name</label>
                <input value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>
            </div>
            <button type="submit">ส่งคะแนนเพื่อเพิ่มเข้าอันดับ</button>
        </form>
        <p>เวลาที่ทำได้ : {timeGame}</p>
    </div>
}

export default Winner
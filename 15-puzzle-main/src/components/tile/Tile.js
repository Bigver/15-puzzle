import './Tile.css'
import img1 from './img/โครงการใหม่.png'
import img2 from './img/โครงการใหม่2.png'
import img3 from './img/โครงการใหม่3.png'
import img4 from './img/โครงการใหม่4.png'
import img5 from './img/โครงการใหม่ (1).png'
import img6 from './img/โครงการใหม่ (2).png'
import img7 from './img/โครงการใหม่ (3).png'
import img8 from './img/โครงการใหม่ (4).png'
import img9 from './img/โครงการใหม่ (5).png'
import img10 from './img/โครงการใหม่ (6).png'
import img11 from './img/โครงการใหม่ (7).png'
import img12 from './img/โครงการใหม่ (8).png'
import img13 from './img/โครงการใหม่ (9).png'
import img14 from './img/โครงการใหม่ (10).png'
import img15 from './img/โครงการใหม่ (11).png'




const Tile = ({number,moveTile}) => 
    <div 
        onClick={() => moveTile(number)} 
        className={`number ${number.value === number.index + 1 ? 'correct' : ''} ${number.value===16 ? 'disabled' : ''} slot--${number.index}`}>
        {
            number.value === 1 ? (<img src={img1}/> ) : ("")
        }
        {
            number.value === 2 ? (<img src={img2}/> ) : ("")
        }
        {
            number.value === 3 ? (<img src={img3}/> ) : ("")
        }
        {
            number.value === 4 ? (<img src={img4}/> ) : ("")
        }
        {
            number.value === 5 ? (<img src={img5}/> ) : ("")
        }
        {
            number.value === 6 ? (<img src={img6}/> ) : ("")
        }
        {
            number.value === 7 ? (<img src={img7}/> ) : ("")
        }
        {
            number.value === 8 ? (<img src={img8}/> ) : ("")
        }
        {
            number.value === 9 ? (<img src={img9}/> ) : ("")
        }
        {
            number.value === 10 ? (<img src={img10}/> ) : ("")
        }
        {
            number.value === 11 ? (<img src={img11}/> ) : ("")
        }
        {
            number.value === 12 ? (<img src={img12}/> ) : ("")
        }
        {
            number.value === 13 ? (<img src={img13}/> ) : ("")
        }{
            number.value === 14 ? (<img src={img14}/> ) : ("")
        }{
            number.value === 15 ? (<img src={img15}/> ) : ("")
        }
    </div>

export default Tile
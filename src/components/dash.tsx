import {useState} from 'react'
interface Timer {
    sec: number,
    min: number,
    hour: number,
}

const gameTime: Timer = {
    sec: 22,
    min: 22,
    hour: 22
}
export const Dash: React.FC = () => {

   const [clock, setClock] = useState(gameTime) 

    return(
        <>
            <div>
        <h1>Time</h1>
                <p>{clock.hour}:{clock.min}:{clock.sec}</p>
            </div>
            <div>
        <h1>Record</h1>
                <p>69:69:69</p>
            </div>
        </>
    )
}

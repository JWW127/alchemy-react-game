import {useState, useEffect} from 'react'
type Props = {
    startClock: boolean 
}
export const Dash: React.FC<any> = (props: Props)  => {

const [time, setTime] = useState(0);
const [running, setRunning] = useState(false);


  useEffect(() => {
      let interval:any;
    if(props.startClock){
        setRunning(true)
    }
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running, props.startClock])


    return(
        <>
            <div>
                <h1>Time</h1>
                <p>
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                    {("0" + ((time / 10) % 100)).slice(-2)}
                </p>
            </div>
        </>
    )
}

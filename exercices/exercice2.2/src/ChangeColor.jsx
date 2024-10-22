import {useState} from 'react';

const colors = ['red', 'blue', 'green', 'yellow','purple']

const ChangeColor = () => {
    const [colorIndex, setColorIndex] = useState(0);
    const nextColors = colors.length-1 === colorIndex ? 0 : colorIndex + 1
    const changeColor = () => {
        setColorIndex(()=>nextColors);
    }
  return (
    <div >
        <button onClick={changeColor}>{colors[nextColors]}</button>
    <div style={{ backgroundColor: colors[colorIndex], width: '100px', height: '100px' }}></div>
    </div>
    );
}
export default ChangeColor;
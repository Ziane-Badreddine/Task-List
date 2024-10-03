import { useRef, useState } from 'react'
import './globalCSS.css'
import StatusText from './statusText'
import Cell from './Cell'

export default function TicTaeToe() {

    let running = useRef(true);
    let WinConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const cuurantPlayer = useRef('X');
    const [cell, setCell] = useState([{ text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }]);
    const text = useRef(`${cuurantPlayer.current}'s turn`);
    const displayCell = () => {
        return (
            cell.map(({ text }, index) => {
                return <Cell cell={text} key={index} updateCell={updateCell} index={index} />
            })
        )
    }

    const updateCell = (index) => {
        if (!cell[index].toggle && running.current) {
            let cellTemp = cell;
            cellTemp[index].text = cuurantPlayer.current;
            cellTemp[index].toggle = true;
            CheckWinner();
            setCell([...cellTemp]);
        }
    }
    const CheckWinner = () => {
        let roundWin = false;
        for (let i = 0; i < WinConditions.length; i++) {
            let condition = WinConditions[i];
            let cellA = cell[condition[0]].text;
            let cellB = cell[condition[1]].text;
            let cellC = cell[condition[2]].text;
            if (cellA === '' || cellB === '' || cellC === '') {
                continue;
            }

            if (cellA === cellB && cellB === cellC) {
                roundWin = true;
                break;
            }
        }
        if (roundWin) {
            running.current = false
            text.current = `${cuurantPlayer.current} Win`
        }
        else if (!cell.map(({ text, toggle }) => {
            return text;
        }).includes('')
        ) {
            running.current = false;
            text.current = `Draw`;
        }
        else {
            changePlayer()
        }
    }

    const changePlayer =() => {
        cuurantPlayer.current = (cuurantPlayer.current === 'X') ? 'O' : 'X';
        text.current = `${cuurantPlayer.current}'s turn`
    }

    const restrat = () => {
        running.current = true;
        cuurantPlayer.current = 'X';
        text.current = `${cuurantPlayer.current}'s turn`;
        setCell([{ text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }, { text: '', toggle: false }]);
    }

    return (
        <div className="game">
            <h1>Tic Tac Toe</h1>
            <div id='cellContainer'>
                {displayCell()}
            </div>
            <StatusText text={text.current} />
            <button id="restartBtn" onClick={restrat}>Restart</button>
        </div>
    )
}
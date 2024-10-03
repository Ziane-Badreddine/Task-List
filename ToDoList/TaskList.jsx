
import { useState } from 'react'
import './GlobaleCSS.css'
import Task from './Task'

export default function TaskList() {
    const [task, setTask] = useState([]);
    const [textFilter, setTextFilter] = useState('');
    const displayTask = () => {
        if (textFilter !== '') {
            let taskTemp = task.filter((task) => {
                return task.text.startsWith(textFilter);
            });
            return (
                taskTemp.map(({ text, completed }, index) => {
                    return <Task className={completed ? 'done' : ''} task={text} key={index} clearTask={clearTask} LineTask={LineTask} index={index} />
                })
            )
        }
        return (
            task.map(({ text, completed }, index) => {
                return <Task className={completed ? 'done' : ''} task={text} key={index} clearTask={clearTask} LineTask={LineTask} index={index} />
            })

        )
    }

    const isRepete = (inputAjoute) => {
        let taskTemp = task.map(task => {
            return task.text;
        })
        return (taskTemp).includes(inputAjoute);

    }

    const ajoute = () => {
        const inputAjoute = document.getElementById('inputAjoute');
        if(isRepete(inputAjoute.value)){
            inputAjoute.value = '';
            alert('task repete');
            return;
        }
        if(inputAjoute.value.trim() === ''){
            inputAjoute.value = '';
            alert('task vide');
            return;
        }
        if (inputAjoute.value.trim() !== '') {
            setTask([...task, { completed: false, text: inputAjoute.value }]);
            inputAjoute.value = '';
        }
    }

    const clearTask = (event) => {
        let taskTemp = task.filter((task) => {
            return task.text !== event.target.parentNode.childNodes[0].innerHTML;
        });
        setTask([...taskTemp]);
    }


    const LineTask = (index) => {
        const taskTemp = [...task];
        taskTemp[index].completed = !taskTemp[index].completed;
        setTask([...taskTemp]);
    }

    const clearTasks = () => {
        if ( task.length > 0 && window.confirm('are you sure ?')) {
            setTask([]);
        }
    }

    const filterTask = () => {
        const textFilter = document.getElementById('filter').value;
        setTextFilter(textFilter);
    }

    return (
        <main>
            <section className="ajoute">
                <h1>Task List</h1>
                <p>new task</p>
                <input id='inputAjoute' />
                <button onClick={ajoute} >ADD TASK</button>
            </section>
            <section className='affichage'>
                <h1>Tasks</h1>
                <input type="text" placeholder="Filter tasks" id="filter" onChange={filterTask} />
                {displayTask()}
            </section>
            <button id="clear" onClick={clearTasks}>CLEAR TASKS</button>
        </main>
    )
}


export default function Task({ className, task, clearTask, LineTask, index }) {


    return (
        <div className="task">
            <p className={className} onClick={() => LineTask(index)}>{task}</p>
            <button onClick={clearTask}>X</button>
        </div>
    )




}   
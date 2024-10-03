export default function Cell({ cell, updateCell, index }) {
    return (
        <div className="cell" onClick={() => { updateCell(index) }}>{cell}</div>
    )
}
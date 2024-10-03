export default function Event(){
    function handler(){
        alert('ok')
    }

    return (
        <>
        <button onClick={handler}>click</button>
        </>
    )


}

function Fruits({ fruits }) {
    const displayFruits = function () {
        return (
            fruits.map((fruit) => {
                return <li>{fruit}</li>
            })
        )

    }
    return (
        <>
            <h1>Fruits</h1>
            <ul>
                {displayFruits()}
            </ul>
        </>
    )
}


export default Fruits;
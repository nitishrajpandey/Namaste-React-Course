function Random(){

    let Number=Math.random()*100;
    return (
        <>
        <h1 style={{'backgroundColor':"#fff","color":"#333"}}>
            The random Number is {Math.floor(Number)}
        </h1>
        </>
    )
}


export default Random;
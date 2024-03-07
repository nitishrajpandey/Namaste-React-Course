function DynamicComp(){


    const number=7;
    let fullName=()=>{
        return "nitish raj"
    }
    return (
        <>
        <h1>This is masssage number {number} hello {fullName()}</h1>
        </>
    )
}


export default DynamicComp;
import React from "react"

const TestValDisp  = (props) => {
    console.log(props.testValProp);
    
    return(
        <>
        <h1>Count: {props.testValProp}</h1>    
        </>
    )

}
export default TestValDisp
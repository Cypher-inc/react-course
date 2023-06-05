import React, { useState } from "react"
import { Button } from "react-bootstrap"
import TestValDisp from "./TestValDisp"

const TestCounter = (props) => {
    const [testVal, setTestVal] = useState(0)
    const testFun = () => {
        // console.log(testVal);
        // if(testVal === 'India'){
        //     setTestVal('Hello World')
        // }
        // else{
        //     setTestVal('India')
        // }
        setTestVal(testVal + 1)
    }
    return(
        <>
        <TestValDisp testValProp={testVal}></TestValDisp>
        <Button onClick={testFun}>Press Button</Button>
        </>
    )
}
export default TestCounter
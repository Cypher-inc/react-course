import React, { useState } from "react";
import { Container , Row, Button} from "react-bootstrap";
import DecBtn from "./DecBtn";

const Dec = () => {
    const [decCount, setDecCount] = useState(0)
    const decCounterFun = ()  => {
        setDecCount(decCount - 1)
    }
    return(
        <Container>
            <Row>
                <DecBtn decCountProp = {decCount}></DecBtn>
                <Button variant ='secondary' onClick ={decCounterFun}>
                    Dec Click me!
                </Button>
            </Row>
        </Container>
    )
}
export default Dec
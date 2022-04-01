import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import InputComp from "../inputComp";

//recieves the latest spanshot
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState(""); //realted state 1
  // const [emailIsValid, setEmailIsValid] = useState(); //related state 1
  // const [enteredPassword, setEnteredPassword] = useState(""); //related state 2
  // const [passwordIsValid, setPasswordIsValid] = useState(); //related state 2
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispachEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispachPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    console.log("EFFECT RUNNING!");
  }, [emailState]);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("checking form validity");

      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);

    //Retuning a function
    return () => {
      console.log("Clean_Up");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  //when multiple states are similar we use useReducer
  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispachEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispachPassword({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(emailState.isValid && passwordState.isValid);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.value.includes("@"));
    dispachEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(passwordState.isValid.trim().length > 6);
    dispachPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <InputComp
          pClass={classes}
          pEmail={emailState}
          pEmailChange={emailChangeHandler}
          pEmailValid={validateEmailHandler}
          pPass={passwordState}
          pPassChange={passwordChangeHandler}
          pPassValid={validatePasswordHandler}
        ></InputComp>

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

import React from "react";

const InputComp = (props) => {
    console.log('Hello World');
    
   return(
       <><div
       className={`${props.pClass.control} ${
         props.pEmail.isValid === false ? props.pClass.invalid : ""
       }`}
     >
       <label htmlFor="email">E-Mail</label>
       <input
         type="email"
         id="email"
         value={props.pEmail.value}
         onChange={props.pEmailChange}
         onBlur={props.pEmailValid}
       />
     </div>
     <div
       className={`${props.pClass.control} ${
         props.pPass.isValid === false ? props.pClass.invalid : ""
       }`}
     >
       <label htmlFor="password">Password</label>
       <input
         type="password"
         id="password"
         value={props.pPass.value}
         onChange={props.pPassChange}
         onBlur={props.pPassValid}
       />
     </div></>
   )
}

export default InputComp 
import { useState } from "react";

const FormComp = (props) => {
  /////////username/////////
  const [userTxt, setUserTxt] = useState("");

  const userNameChange = (event) => {
    setUserTxt(event.target.value);
    console.log(event.target.value);
  };

  /////////////age////////////
  const [userAge, setUserAge] = useState("");
  const userAgeChange = (event) => {
    setUserAge(event.target.value);
    console.log(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
        Name : userTxt,
        Age : userAge
    }
    props.onSaveData(userData)
    setUserTxt("");
    setUserAge("");
  };

  return (
    <div className="form1  col-md-8 col-8">
      <form onSubmit={submitHandler}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Username
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={userTxt}
            onChange={userNameChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Age(Years)
          </label>
          <input
            type="age"
            class="form-control"
            id="exampleInputPassword1"
            value={userAge}
            onChange={userAgeChange}
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Add User
        </button>
      </form>

      {/* <div className="card1 mt-4">
        <div class="card">
          <div class="card-body">{userTxt} {userAge}</div>
        </div>
      </div> */}

      {/* ///////////// */}
    </div>
  );
};

export default FormComp;

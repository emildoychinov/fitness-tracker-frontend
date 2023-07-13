import * as React from "react";
import "./Exercises.css";
import { useState, ChangeEvent } from "react";
import { RouterPathEnum } from "src/enums/RouterPathEnum";
import { RouteComponentProps } from "react-router-dom";

interface InputData {
  value: string;
}

const Members: React.FC<RouteComponentProps<{}, {}>> = (props) => {
  const [val, setVal] = useState<InputData[]>([]);

  const handleAdd = (): void => {
    const updatedVal = [...val, { value: "" }];
    setVal(updatedVal);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, i: number): void => {
    const updatedVal = [...val];
    updatedVal[i].value = e.target.value;
    setVal(updatedVal);
  };

  const handleDelete = (i: number): void => {
    const updatedVal = [...val];
    updatedVal.splice(i, 1);
    setVal(updatedVal);
  };

  console.log(val, "data-");

  return (
    <>
      <div className="buttons-add-remove">
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
        {val.map((data, i) => {
          return (
            <div className="remove-button" key={i}>
              <input className="remove-input" value={data.value} onChange={(e) => handleChange(e, i)} />
              <button className="remove-btn" onClick={() => handleDelete(i)}>
                X
              </button>
            </div>
          );
        })}
      </div>
      <div className="exercises" id="members">
        <img
          src="/assets/imgs/muscle.png"
          alt="muscle.png"
          className="image-exercises"
        />
        <div>
          <h2>EXERCISES</h2>
        </div>
        <button onClick={(e: any) => onClickMove(RouterPathEnum.ABOUT)}>
          Go About
        </button>
        &nbsp;
        <button onClick={(e: any) => onClickMove(RouterPathEnum.HOME)}>
          Go Home
        </button>
      </div>
    </>
  );

  function onClickMove(routerPathEnum: RouterPathEnum): void {
    props.history.push(routerPathEnum);
  }
};

export default Members;

import { useState } from "react";

export default function Form(props) {
  const [nums, setNumber] = useState("");

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.cardSearch(nums);
        }}
      >
        <div className="input">
          <p>Enter a card number</p>
          <input
            className="field"
            type="number"
            onChange={handleChange}
            value={nums}
          />
          <input className="button" type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}
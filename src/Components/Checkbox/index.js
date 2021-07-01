import { useState } from "react";

export default function Checkbox() {
  const [value, setValue] = useState(0);

  function updateCheckboxValue(e) {
    if (value >= 2) {
      setValue(0);
    } else setValue(value + 1);
  }

  return (
    <div class="checked-input">
      <input
        onClick={updateCheckboxValue}
        name="checked"
        type="checkbox"
        value={value}
      />
      <label />
      <span>
        {value === 0 ? <div>State1</div> : null}
        {value === 1 ? <div>State2</div> : null}
        {value === 2 ? <div>State3</div> : null}
      </span>
    </div>
  );
}

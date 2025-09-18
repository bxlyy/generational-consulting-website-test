import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <>
      <form>
        <input
          onChange={(e) => setName({ firstName: e.target.value, lastName: "" })}
          type="text"
          value={name.firstName}
        />
      </form>
    </>
  );
}

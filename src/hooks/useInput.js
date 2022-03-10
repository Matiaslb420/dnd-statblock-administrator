import React from "react";
import { useState } from "react";

const useInput = (initialState) => {
    const [value, setValue] = useState(initialState);

    const changeValue = (event) => setValue(event.target.value);

    return [value, changeValue];
}

export default useInput;
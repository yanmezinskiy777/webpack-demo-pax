export const Parse = (inputs) => {
    console.log([...inputs])
    return (
      [...inputs].every(
        (input) => {
          console.log(input.value);
          return input.value !== "" && typeof input.value === "string"
        }
      )
    );
  }

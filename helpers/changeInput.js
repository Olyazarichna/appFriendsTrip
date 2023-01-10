const changeInput = (value, setState, setEmailChange, key) => {
  setEmailChange(true);
  setState((prevState) => ({ ...prevState, [key]: value }));
}

export default changeInput;
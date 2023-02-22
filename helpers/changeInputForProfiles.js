const changeInputForProfiles = (
  value = "",
  setState,
  key,
  validObj,
  setCheckValid
) => {
  setState((prevState) => ({ ...prevState, [key]: value }));

  if (validObj) {
    if (validObj.re.test(value)) {
      setCheckValid(true);
    } else {
      setCheckValid(false);
    }
  }
};

export default changeInputForProfiles;

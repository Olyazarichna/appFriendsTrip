const changeInput = (value = '', setState, key, setChange, validObj, setCheckValid, ) => {
 
  setChange(true);
  setState((prevState) => ({ ...prevState, [key]: value }));
  
   if (value === '') {
    setChange(false);
  }
   if (validObj) {
  
  if (validObj.re.test(value) ) {
    setCheckValid(true);
   
  } else {
    setCheckValid(false);
    }
  }
  


}


export default changeInput;
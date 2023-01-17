const changeInput = (value = '', setState, setChange, key, validObj, setCheckValid) => {
 
   if (value === '') {
    setChange(false);
  }
  
  setChange(true);
  setState((prevState) => ({ ...prevState, [key]: value }));
  
 
   if (validObj) {
  
  if (validObj.re.test(value) ) {
    setCheckValid(true);
   
  } else {
    setCheckValid(false);
    }
  }
  


}


export default changeInput;
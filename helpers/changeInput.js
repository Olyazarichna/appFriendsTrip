const changeInput = (value = '', setState, setChange, key, validObj, setCheckValid) => {
 
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
  
  setChange(true);
  setState((prevState) => ({ ...prevState, [key]: value }));
 

}


export default changeInput;
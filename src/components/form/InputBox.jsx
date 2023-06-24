import React from "react";

const InputBox = ({type, holder, action, addStyle, value, access}) => {
  return ( <input type={type} ref={access} placeholder={holder} value={value} onChange={action} className={`outline-none px-3 py-2 rounded-md ${addStyle}`} /> );
};

export default InputBox;
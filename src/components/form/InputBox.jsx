import React from "react";

const InputBox = ({type, holder, action, addStyle, value, access, name, required}) => {
  return ( <input name ={name} type={type} ref={access} placeholder={holder} value={value} onChange={action} required={required} className={`outline-none px-3 py-2 rounded-md ${addStyle}`} /> );
};

export default InputBox;
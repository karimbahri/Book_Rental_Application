import { useState } from "react";

export const _useForm = () => {
  const [state, setState] = useState({ isAdmin: false });

  const handleChange = (e) => {
    e.persist();
    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  return [state, handleChange];
};

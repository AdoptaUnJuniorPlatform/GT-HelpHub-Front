import { useState, ChangeEvent, FormEvent } from 'react';

function useForm<T>(callback: (input: T) => void, defaults: T) {
  const [input, setInput] = useState<T>(defaults);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callback(input);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = event.target;
    // console.log(name, value)
    let newValue = value;

   
    if (name === 'phone') {
      newValue = value.replace(/\D/g, '');
    }

    setInput({
      ...input,
      [name]: type === 'checkbox' ? checked : newValue,
    });
  };

  const handleSwitchChange = (values: { optionCall?: boolean; showPhone?: boolean }) => {
    setInput({
      ...input,
      ...values,
    });
  };

  return {
    input,
    handleInputChange,
    handleSwitchChange,
    handleSubmit,
  };
}

export default useForm;


import { useState, ChangeEvent, FormEvent, useRef } from 'react';

function useForm<T>(callback: (input: T) => void, defaults: T) {
  const [input, setInput] = useState<T>(defaults);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callback(input);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>, index?: number) => {
    const { name, type, value, checked } = event.target;
    let newValue = value;
   
    if (name === 'phone') {
      newValue = value.replace(/\D/g, '');
    }

    if (Array.isArray(input) && index !== undefined) {
      const updatedInput = [...input] as unknown as string[];
      updatedInput[index] = value.slice(0,1);
      setInput(updatedInput as T)

      if (/^\d$/.test(newValue) && index < updatedInput.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      if (!newValue && index > 0) {
        inputRefs.current[index - 1]?.focus(); 
      }
      
    } else {
      setInput({
        ...input,
        [name]: type === 'checkbox' ? checked : newValue,
      });
    };
  }

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
    inputRefs
  };
}

export default useForm;


import { useState, ChangeEvent, useRef, FormEvent } from 'react';

type FormEventType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>;

function useForm<T>(callback: (input: T) => void, defaults: T) {
  const [input, setInput] = useState<T>(defaults);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callback(input);
    console.log('Formulario enviado con los datos:', input)
  };

  const handleInputChange = (event: FormEventType, index?: number) => {
    const target = event.target;

    if (target instanceof HTMLInputElement) {
      const { name, type, value, checked } = target;
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
    } else if(target instanceof HTMLTextAreaElement) {
      const { name, value } = target;
      const newValue = value;

      setInput({
        ...input,
        [name]: newValue,
      });
    } else if (target instanceof HTMLSelectElement) {
      const { name, value } = target;
      const newValue = value;

      setInput({
        ...input,
        [name]: newValue,
      });
    }
  }

  const handleCategorySelectChange = (category: string | null) => {
    setInput({
      ...input,
      category: category,
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
    handleCategorySelectChange,
    handleSubmit,
    inputRefs
  };
}

export default useForm;


import  { useState, ChangeEvent } from 'react';

interface RadioSelectorProps {
  options: string[];
}

function RadioSelector({ options }: RadioSelectorProps): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex space-x-4 text-base text-neutral-black font-normal leading-normal tracking-wide">
      {options.map((option, index) => (
        <label
          key={index}
          className={`w-auto h-[2.9rem] border rounded-md p-4 cursor-pointer flex items-center ${
            selectedOption === option ? 'border-celeste-100 text-celeste-100' : 'border-black-50'
          }`}
        >
          <input
            type="radio"
            name="selector"
            value={option}
            checked={selectedOption === option}
            onChange={handleChange}
            className="hidden"
          />
          <span
            className={`w-6 h-6 mr-2 rounded-full border-2 flex items-center justify-center ${
              selectedOption === option ? 'border-celeste-100' : 'border-black-50'
            }`}
          >
            {selectedOption === option && (
              <span className="w-5 h-5 bg-celeste-100 rounded-full border-2 border-neutral-gray"></span>
            )}
          </span>
          {option}
        </label>
      ))}
    </div>
  );
}

export default RadioSelector;

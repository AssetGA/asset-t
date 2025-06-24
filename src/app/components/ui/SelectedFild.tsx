import React, { FC } from "react";

interface Option {
  label: string;
  value: string;
}

interface OptionObjectValue {
  name: string;
  _id: string;
}

interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (data: { name: string; value: string }) => void;
  defaultOption: string;
  options: Option[] | Record<string, OptionObjectValue>;
  error?: string;
  name: string;
}
const SelectField: FC<SelectFieldProps> = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  error,
  name,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("e select form", e.target);
    onChange({ name: e.target.name, value: e.target.value });
  };
  const getInputClasses = () => {
    return "block w-full h-full p-4 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/20";
  };

  const optionsArray: Option[] = Array.isArray(options)
    ? options
    : Object.keys(options).map((key) => ({
        label: options[key].name,
        value: options[key]._id,
      }));

  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-xl">
        {label}
      </label>
      <select
        className={getInputClasses()}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option disabled value="" className="text-xl">
          {defaultOption}
        </option>
        {optionsArray &&
          optionsArray.map((option) => (
            <option
              value={option.value}
              key={option.value}
              className="w-full text-sm"
            >
              {option.label}
            </option>
          ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default SelectField;

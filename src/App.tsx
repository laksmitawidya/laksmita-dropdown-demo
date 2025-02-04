import { Dropdown, SelectOption } from "@laksmitawidya/Dropdown";\

import { useState } from "react";

export const optionsList = [
  { value: 1, label: "Apple" },
  { value: 2, label: "Banana" },
  { value: 3, label: "Cherry" },
  { value: 4, label: "Date" },
  { value: 5, label: "Elderberry" },
  { value: 6, label: "Moon" },
  { value: 7, label: "Sun" },
  { value: 8, label: "Berry" },
  { value: 9, label: "Strawberry" },
  { value: 10, label: "Blueberry" },
  { value: 11, label: "Sunshine" },
];

const App = () => {
  const [value, setValue] = useState<SelectOption | undefined>(optionsList[0]);
  const [multiValue, setMultiValue] = useState<SelectOption[]>([]);
  const [searchValue, setSearchValue] = useState<SelectOption | undefined>();

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="font-bold text-xl mb-5">Testing Dropdown Component</h1>

      <div className="py-5 font-bold text-lg">Single value Dropdown</div>
      {value && (
        <div className="mb-5">
          Selected value: <span className="bg-amber-100">{value.label}</span>
        </div>
      )}

      <Dropdown
        outlined={true}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
        options={optionsList}
        optionLabel="Single Dropdown"
      />

      <div className="py-5 font-bold text-lg">Multi value Dropdown</div>
      {multiValue.length > 0 && (
        <div className="mb-5">
          Selected value:{" "}
          <span className="bg-amber-100">
            {multiValue.map((val) => val.label).join(",")}
          </span>
        </div>
      )}

      <Dropdown
        multiple={true}
        value={multiValue}
        onChange={(value: SelectOption[]) => {
          setMultiValue(value);
        }}
        options={optionsList}
        optionLabel="Multi Dropdown"
        className="mb-5"
      />

      <div className="py-5 font-bold text-lg">
        Dropdown with custom option and search
      </div>
      <Dropdown
        value={searchValue}
        withSearch
        onChange={(value) => {
          setSearchValue(value);
        }}
        withPortal
        options={optionsList}
        optionLabel="Customized Option"
        customOption={(option) => {
          return (
            <span
              className="bg-pink-100 p-2 cursor-grab"
              aria-label={option.label}
            >
              {option.label}
            </span>
          );
        }}
      />

      <div className="flex gap-y-2 flex-col mt-20">
        <div className="text-sm font-bold">Mini project by laksmitawidya</div>
        <a
          target="_blank"
          href="https://www.npmjs.com/package/@laksmitawidya/dropdown"
        >
          Check the Npm Package
        </a>
        <a
          target="_blank"
          href="https://67a21646aad2ce22227b56db-rqhgsszvux.chromatic.com/?path=/story/components-dropdown--single-select-dropdown"
        >
          Check the storybook
        </a>
        <a
          target="_blank"
          href="https://github.com/laksmitawidya/laksmitawidya-dropdown/"
        >
          Check the github repo
        </a>
      </div>
    </div>
  );
};

export default App;

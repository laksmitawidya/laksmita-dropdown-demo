import { Dropdown, DropdownProps, SelectOption } from "@laksmitawidya/Dropdown";
import { useState } from "react";

export const optionsList = [
  {
    value: 1,
    label: "Apple - A delicious red fruit often used in pies and juices.",
  },
  {
    value: 2,
    label: "Banana - A yellow fruit that is rich in potassium and energy.",
  },
  {
    value: 3,
    label:
      "Cherry - A small, round, red fruit often found in desserts and drinks.",
  },
  {
    value: 4,
    label:
      "Date - A sweet brown fruit commonly eaten dried or used in Middle Eastern cuisine.",
  },
  {
    value: 5,
    label:
      "Elderberry - A small, dark purple berry known for its immune-boosting properties.",
  },
  {
    value: 6,
    label:
      "Moon - The natural satellite of Earth that illuminates the night sky.",
  },
  {
    value: 7,
    label:
      "Sun - The giant star at the center of our solar system providing light and warmth.",
  },
  {
    value: 8,
    label:
      "Berry - A general term for small, juicy fruits that come in various colors and flavors.",
  },
  {
    value: 9,
    label:
      "Strawberry - A red, heart-shaped fruit known for its sweetness and use in desserts.",
  },
  {
    value: 10,
    label:
      "Blueberry - A small, round, blue fruit packed with antioxidants and used in smoothies and muffins.",
  },
  {
    value: 11,
    label:
      "Sunshine - The warm and bright light that comes from the sun during the daytime.",
  },
  {
    value: 12,
    label:
      "Cat - A domesticated feline known for its playful nature and independent behavior.",
  },
  {
    value: 13,
    label:
      "Okay - A commonly used word to indicate agreement or acceptance in conversations.",
  },
  {
    value: 14,
    label:
      "Testing Label - This is a long sentence added for testing purposes to evaluate UI behavior with lengthy text.",
  },
];

export const DropdownComponent = (props: DropdownProps) => {
  const [value, setValue] = useState<SelectOption | undefined>(optionsList[0]);
  const [multiValue, setMultiValue] = useState<SelectOption[]>([]);

  return (
    <div style={{ padding: "12px" }}>
      {props.multiple ? (
        <Dropdown
          {...props}
          value={multiValue}
          onChange={(val: SelectOption[]) => {
            setMultiValue(val);
          }}
        />
      ) : (
        <Dropdown
          {...props}
          value={value}
          onChange={(val) => {
            setValue(val);
          }}
        />
      )}
    </div>
  );
};

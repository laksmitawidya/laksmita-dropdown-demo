import { Dropdown, SelectOption } from "@laksmitawidya/Dropdown";
import "@laksmitawidya/dropdown/dist/dropdown.css";
import { useState } from "react";
import { Button, Modal } from "antd";
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

const App = () => {
  const [value, setValue] = useState<SelectOption | undefined>(optionsList[0]);
  const [multiValue, setMultiValue] = useState<SelectOption[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Testing Dropdown Component</h1>
      {value?.label}
      <div className="my-5">{multiValue.map((val) => val.label).join(",")}</div>

      <Dropdown
        outlined={true}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
        options={optionsList}
        optionLabel="Test"
      />

      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Dropdown
          multiple={true}
          value={multiValue}
          onChange={(value: SelectOption[]) => {
            setMultiValue(value);
          }}
          options={optionsList}
          optionLabel="Test"
          className="mb-5"
        />

        <Dropdown
          value={value}
          withSearch
          onChange={(value) => {
            setValue(value);
          }}
          withPortal
          options={optionsList}
          optionLabel="Test"
          customOption={(option) => {
            return (
              <span className="bg-pink-100 p-2" aria-label={option.label}>
                {option.label}
              </span>
            );
          }}
        />
      </Modal>
    </div>
  );
};

export default App;

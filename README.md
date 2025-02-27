## Demo for @laksmitawidya/dropdown

[![NPM Version](https://img.shields.io/npm/v/@laksmitawidya/dropdown)](https://www.npmjs.com/package/@laksmitawidya/dropdown)
[![License](https://img.shields.io/npm/l/@laksmitawidya/dropdown)](https://github.com/laksmitawidya/dropdown/blob/main/LICENSE)

A lightweight and customizable dropdown component for ReactJS, built with ReactJS, Tailwind CSS and TypeScript.

## Installation

### Using npm

```sh
npm install @laksmitawidya/dropdown
```

### Using pnpm

```sh
pnpm install @laksmitawidya/dropdown
```

## Usage

- Import `@import "@laksmitawidya/dropdown/dist/dropdown.css";` to the main css file

```tsx
import { Dropdown, SelectOption } from "@laksmitawidya/dropdown";
import "@laksmitawidya/dropdown/dist/dropdown.css";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState<SelectOption | undefined>(optionsList[0]);

  return (
    <div style={{ padding: "20px" }}>
      {value?.label}
      <Dropdown
        outlined={true}
        value={value}
        onChange={(value) => {
          setValue(value);
        }}
        options={[
          {
            value: 1,
            label:
              "Apple - A delicious red fruit often used in pies and juices.",
          },
        ]}
        optionLabel="Test"
      />
    </div>
  );
};

export default App;
```

## Demo

### Storybook Preview

To see the component in action, check out the interactive Storybook demo:

[Storybook Live Demo](https://67a21646aad2ce22227b56db-rqhgsszvux.chromatic.com/?path=/story/components-dropdown--single-select-dropdown)

Run Storybook locally:

```sh
npm run storybook
```

## Links

- [NPM Package](https://www.npmjs.com/package/@laksmitawidya/dropdown)
- [GitHub Repository](https://github.com/laksmitawidya/laksmitawidya-dropdown)

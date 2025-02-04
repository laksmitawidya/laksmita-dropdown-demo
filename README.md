## Demo for @laksmitawidya/dropdown

[![NPM Version](https://img.shields.io/npm/v/@laksmitawidya/dropdown)](https://www.npmjs.com/package/@laksmitawidya/dropdown)
[![License](https://img.shields.io/npm/l/@laksmitawidya/dropdown)](https://github.com/laksmitawidya/dropdown/blob/main/LICENSE)

A lightweight and customizable dropdown component for ReactJS, built with Tailwind CSS.

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

```tsx
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
        options={optionsList}
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

[Storybook Live Demo](#) _(Update with actual Storybook link)_

Run Storybook locally:

```sh
npm run storybook
```

## Links

- [NPM Package](https://www.npmjs.com/package/@laksmitawidya/dropdown)
- [GitHub Repository](https://github.com/laksmitawidya/laksmitawidya-dropdown)

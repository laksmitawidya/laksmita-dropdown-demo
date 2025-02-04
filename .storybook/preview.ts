import type { Preview } from "@storybook/react";
import "@laksmitawidya/dropdown/dist/dropdown.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

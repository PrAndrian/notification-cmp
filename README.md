# Notification-Cmp React Component

Notification-Cmp is a versatile and highly customizable React component designed to streamline the display of notifications and modals in your web applications. This component provides a modal window that allows you to showcase messages, success indicators, and user choices with ease. With Notification-Cmp, you can effortlessly create various notification modals, each with its unique style and functionality.

## Prerequisites
Before integrating the SelectMenu component into your React application, make sure you meet the following prerequisites:

1. **Node.js:** Ensure you have Node.js installed with a version of ^16.15.1.

2. **Tailwind CSS:** If you haven't already, install Tailwind CSS by following the instructions provided in the [official documentation](https://tailwindcss.com/docs/installation/framework-guides).

## Installation

1. You can swiftly install the `notification-cmp` package via npm:

```bash
npm install notification-cmp
```

2. Modify your `tailwind.config.js` as follows:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/notification-cmp/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Usage

### NotificationModal Component

The `NotificationModal` component serves as the primary element for displaying notification modals. It accepts a range of props for flexible customization:

- `isVisible` (boolean): Controls the visibility of the modal.
- `message` (string): The message to display within the modal.
- `error` (boolean): Indicates whether the notification represents an error (true) or not (false).
- `setter` (function): A callback function to close the modal.
- `onYes` (function): A callback function to execute when the "Yes" button is clicked (if `isChoice` is true).
- `isChoice` (boolean): Indicates whether the modal includes a choice (true) or not (false).
- `successElement` (element): An element to display within the modal (e.g., a success icon).
- `isErrorColor` (string): Customizes the color for error notifications.
- `isChoiceColor` (string): Customizes the color for choice-based notifications.
- `isSuccessColor` (string): Customizes the color for success notifications.

Example usage:

```jsx
import { NotificationModal } from 'notification-cmp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const isVisible = true;
  const message = 'This is a notification message.';
  const error = false;
  const isChoice = true;

  const handleCloseModal = () => {
    // Handle modal closure logic here
  };

  const handleYes = () => {
    // Handle "Yes" button click logic here
  };

  const successElement = <FontAwesomeIcon icon={faCheckCircle} />;

  return (
    <NotificationModal
      isVisible={isVisible}
      message={message}
      error={error}
      setter={handleCloseModal}
      onYes={handleYes}
      isChoice={isChoice}
      successElement={successElement}
      isErrorColor='red'
      isChoiceColor='orange'
      isSuccessColor='green'
    />
  );
};
```

## PropTypes

For detailed information about the expected prop types and their default values, please refer to the PropTypes documentation for the `NotificationModal` component.

## License

This package is distributed under the MIT License, granting you the freedom to use and customize it to align with your specific requirements.

If you encounter any issues or have suggestions for improvements, please don't hesitate to [open an issue](https://github.com/example/notification-cmp/issues) on GitHub. Your feedback is highly valuable!

We kindly request that you communicate in the English language for effective collaboration and support.
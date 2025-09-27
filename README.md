
1. What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It
allows you to write UI elements in a syntax that closely resembles HTML within
JavaScript code. React components are typically written using JSX because it makes
the code more readable and easier to understand.
Why is it used?
 It enables writing UI code in a familier(html) way.
 It simplifies creating and composing UI components.

2.What is the difference between State and Props?
Props are data passed down from a parent component to a child component. They are
read-only and define the characteristics of the child component. Think of them as
configuration options.
State is data that is internal to a component. It is mutable and can change over time,
affecting the component&#39;s output. State manages the component&#39;s dynamic behavior.
Think of it as the component&#39;s internal memory.

3. What is the useState hook, and how does it work?
useState is a React hook that allows functional components to have internal state.
How it works:
 You call const [stateVariable, setStateVariable] = useState(initialValue);.
 stateVariable holds the current value.
 setStateVariable is a function to update the value.
 When you call setStateVariable(newValue);, React re-renders the component
with the new state.
4. How can you share state between components in React?
 Lifting State Up: Move the shared state to the closest common ancestor and
pass it down via props.
5. How is event handling done in React?

Event handling in React is similar to handling events in DOM, but with some syntactic
differences:
 Use camelCase for event names (onClick, onChange, etc.).
 Pass a function as the event handler.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

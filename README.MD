# React App README

This is a README file for your React app. It provides an overview of the project structure and components used in the application.

## Table of Contents

- [Introduction](#introduction)
- [Dependencies](#dependencies)
- [Components](#components)
  - [NavigationBar](#navigationbar)
  - [App](#app)
  - [UseContextHook](#usecontexthook)
  - [UseEffectHook](#useeffecthook)
  - [UseStateHook](#usestatehook)
- [Data](#data)

## Introduction

This React app consists of several components that demonstrate the usage of hooks (`useState`, `useEffect`, and `useContext`) and routing using `react-router-dom`. The app fetches data from a JSON file and displays it in different components.

## Dependencies

The following dependencies are required for this app:

- `react-router-dom`: For routing in the application.
- `react`: The core library for building the UI components.
- `data.json`: A JSON file containing an array of objects with a `name` property.

Make sure to install these dependencies before running the application.

## Components

### NavigationBar

The `NavigationBar` component displays a header with links to different routes in the app. It is used as a layout component for the routes related to hooks.

### App

The `App` component serves as the entry point of the application. It sets up the routing using `react-router-dom` and defines routes for different hooks. The `NavigationBar` component is rendered when the path matches '/react-hooks'. Within the `NavigationBar`, the `Outlet` component is used to render the child components based on the current route.

### UseContextHook

The `UseContextHook` component demonstrates the usage of the `useContext` hook. It creates a context (`MyContext`) and provides the `jdata` from `data.json` as the context value. The `ChildComponent` and `SubComponent` consume the context and display the names from the `jdata` array.

### UseEffectHook

The `UseEffectHook` component showcases the usage of the `useEffect` hook. It fetches data from `data.json` and updates the component state (`listData`) when the `loadData` state variable changes. The component also includes a checkbox to toggle the `loadData` state.

### UseStateHook

The `UseStateHook` component demonstrates the usage of the `useState` hook. It manages a count state (`stateValue`) and provides buttons to increment and decrement the count.

## Data

The `data.json` file contains an array of objects with a `name` property. The data is used in the `UseContextHook` and `UseEffectHook` components to display names.

```json
[
  {
    "name": "John"
  },
  {
    "name": "Dave"
  },
  {
    "name": "Ben"
  }
]
```

Make sure to have the `data.json` file available and properly structured to ensure the components function correctly.

---

Feel free to modify and enhance the provided code according to your requirements. If you have any further questions, feel free to ask. Happy coding!

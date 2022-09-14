# ReactJS-training

## Overview:

This document provides information about ReactJS practice. Build List of products website

## Technical:

- ReactJS
- Styled-components

## Timeline:

- 20 working days

## Plan:

- Plan on github [project](https://github.com/users/ngocquang2509/projects/1)
- [Estimation](https://docs.google.com/document/d/1M5Iyz7WvfLT4bIoC2HYgJFENyMZqxgkY8HdDGOZ-87A/edit#)

## Targets:

- Build an application for managing product using React
- Using React Hooks
- Apply useContext + hooks for state management.
- Apply styled-components
- Apply Storybook

## Development environment:

- Node: v16.16.0
- npm: v8.11.0
- react: v18.2.0

## Main app features:

- Users could create new products
- Users could update products
- Users could delete products by id
- Users could search the list of products by name

## REFERENCES:

- [ReactJS](https://reactjs.org/docs/thinking-in-react.html)
- [Styled-Component](https://styled-components.com/docs)

## Design

- [Figma](https://www.figma.com/file/VKl2P19Tl51AfdCXVj1YEr/React-practice)

## Folder structure

```bash
├── src
    ├── actions
        └── product.js
    ├── components
        ├── common
            ├── Button
                ├── index.js
                ├── Button.stories.js
                └── style.js
            ├── Popup
                ├── index.js
                ├── Popup.stories.js
                └── style.js
        ├── DeletePopup
            ├── index.js
            └── style.js
        ├── Item
            ├── index.js
            ├── Item.stories.js
            └── style.js
        ├── ListProduct
            ├── index.js
            └── style.js
        ├── Search
            ├── index.js
            └── style.js
    ├── constants
        └── index.js
    ├── helpers
        └── index.js
    ├── layouts
        ├── Header
            ├── index.js
            └── style.js
        └── Sidebar
            ├── index.js
            └── style.js
    ├── reducers
        └── product.js
    ├── store
        ├── Context.js
        ├── index.js
        └── Provider.js
    ├──.editorconfig
    ├──.eslintignore
    ├──.eslintconfig
    ├──.gitignore
    ├──.npmrc
    ├──.prettierignore
    ├──.prettierrc
    ├──package-lock.json
    ├──package.json
    ├──README.md

```

## Installation:

- Step 1 : Clone repository

```bash
git clone https://github.com/ngocquang2509/react-training.git
```

- Step 2 : Change Folder Directory

```bash
cd react-training
```

- Step 3 :Checkout branch

```bash
git checkout develop
```

- Step 4 : Install npm packages

```bash
npm i
```

- Step 5 : Run project

```bash
npm start
```

- Step 6: Open in browser

```
http://localhost:3000
```

## Author

- Quang Ngoc
- Email: ngocquang2509@gmail.com
- Contact: 0326086599

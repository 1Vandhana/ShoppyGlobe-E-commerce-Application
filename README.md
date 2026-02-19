# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## 🛒 ShoppyGlobe-E-commerce-Application:

ShoppyGlobe is a modern and responsive grocery e-commerce web application built using React and Vite. It allows users to browse grocery products, search for items, add products to a cart, and view product details in a clean, attractive interface.This project focuses on frontend development, responsive UI, and modern styling techniques like glassmorphism, hover animations, and grid/flex layouts. 

## Key Features :

 1.Product Grid :Displays grocery items in a responsive grid layout.

 2.Search Bar: Allows users to quick search of products by names.

 3.Add to Card: Users can add the items to a cart and view the cart items.

 4.Product Cards: Attractive cards with images,titles,a nd hover effect.

 5.Responsive Design: Works seamlessly on desktop,tablet and mobiles using media quries.
 
 6.Modern UI:Glassmorphism-style cards,hover effects,clean typograpy.

 ## Project Structure :
  shooppyglobe/
  |-public/ 
  |
  |-src/
    |-components/   => Reusable components like Header,card,cartitem with .jsx.
    |-pages/ =>pages with Home,cart,productdetail,notfound files.
    |-redux/ =>Redux store and slices with .js.
    |-hooks/ => To fetch products from an API and manage products and error state.
    |-App.jsx => main app component.
    |-main.jsx => Entry point.
  |-index.css/ => for Styling the page using .css file.
  |-package.json => Project dependencies.
  |-vite.config.js =>Vite configuration.
  |-README.md => Used for Project Documentation.
  
## Technology & Tools Used:
->React:Component-based architecture for UI development.
->Vite:Fast frontend build tool and development server.
->Redux – State management for cart (optional).
->CSS3 / Flexbox / Grid – Styling and responsive layouts.
->React Icons – Icon library for search, cart, and buttons.
->Google Fonts – Modern typography (Poppins, Inter, Nunito).
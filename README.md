# SKN Framer Motion Type Extension Library

<img width="150px" src="https://firebasestorage.googleapis.com/v0/b/skn-ultimate-project-la437.appspot.com/o/GitHub%20Library%2F13-TypeScript-SFT.svg?alt=media&token=f520fecc-bb79-4627-b98b-f486420f15ae" alt="animation" />

> TypeScript React

[![NPM Version](https://img.shields.io/npm/v/%40best-skn%2Fframer-types)](https://www.npmjs.com/package/@best-skn/framer-types) [![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/license/mit)

&nbsp;

## **_Introduction:_**

### This is a simple TypeScript Type Extension Library for Framer Motion 11, React 18 & also for Next.js 14

### I made this library so that I can use it in all of my Next.js 14 projects without writing the same codes over and over again

&nbsp;

## **_Details:_**

### **`Anime` Type**

- It provides total intellisense of framer motion styles in separate files to be used as `variants`
- This type will help to de-clutter your jsx/tsx components because you can create `variants` outside motion
  components and later use it inside the motion components
- This type will only work on motion components like `motion.div`, `motion.span`, `motion.main` etc. or any other
  custom motion components created with `motion()` function
- For usage instruction, see `Usage` section

### **`CsxAnime` Type**

- It provides total intellisense of react csx styles in separate files and ensures compatibility with framer motion
  styles as well
- This type will help to de-clutter your jsx/tsx components because you can create csx styles outside motion
  components
- This type will only work on motion components like `motion.div`, `motion.span`, `motion.main` etc. or any other
  custom motion components created with `motion()` function
- For usage instruction, see `Usage` section

&nbsp;

## **_Use Case:_**

- React
- Next.js

&nbsp;

## **_Requirements:_**

### This library has peer dependency for React & React DOM of minimum 18.3.1. It may or may not work on 19.x

### It has peer dependency for Framer Motion of minimum 11.2.11. It may or may not work on 12.x

### This library is intended to be used in Next.js of minimum 14.2.3. It may or may not work on 15.x

- 💀 Minimum [react](https://www.npmjs.com/package/react) Version: `18.3.1`
- 💀 Minimum [@types/react](https://www.npmjs.com/package/@types/react) Version: `18.3.3`
- 💀 Minimum [react-dom](https://www.npmjs.com/package/react-dom) Version: `18.3.1`
- 💀 Minimum [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) Version: `18.3.0`
- 💀 Minimum [next](https://www.npmjs.com/package/next) Version: `14.2.3`
- 💀 Minimum [framer-motion](https://www.npmjs.com/package/framer-motion) Version: `11.2.11`

&nbsp;

## **_Complementary Libraries:_**

- [@best-skn/react-types](https://www.npmjs.com/package/@best-skn/react-types)
- [@best-skn/next-types](https://www.npmjs.com/package/@best-skn/next-types)

&nbsp;

## **_Usage:_**

### To install the package, type the following in console

> ```zsh
> npm add -D @best-skn/framer-types
> #or
> yarn add -D @best-skn/framer-types
> #or
> pnpm add -D @best-skn/framer-types
> #or
> bun add -D @best-skn/framer-types
> ```

### Create a directory called `types` in the root location of your project, and create a file called `motion.d.ts`, then do this

> ```typescript
> import "@best-skn/framer-types";
> ```

### Check your `tsconfig.json` if `includes` property has `**/*.ts`, `**/*.tsx` otherwise the type definition file may not work

### Now Inside your Next.js 14 Project, use the package like this (Just an example)

#### **_`Anime` Type:_**

##### (1) Motion style `variants` in separate file

> ```typescript
> import type { Anime } from "framer-motion";
>
> type key = "container" | "box"; // * Create variant names here
>
> export const anime: Anime<key> = {
>   //* You'll get total intellisense for `variant` names
>   container: {
>     //* You'll get intellisense for motion styles inside `hidden` or `visible` properties
>     hidden: {
>       opacity: 0,
>       //* other motion styles here...
>     },
>     visible: {
>       opacity: 1,
>       //* other motion styles here...
>     },
>   },
>   box: {
>     hidden: {
>       opacity: 0,
>       //* other motion styles here...
>     },
>     visible: {
>       opacity: 1,
>       //* other motion styles here...
>     },
>   },
> };
> ```

##### (2) Import & use the created `variants` inside motion components in Next.js

> ```typescript jsx
> "use client"
>
> import { motion } from "framer-motion";
> import { anime } from "./anime.ts";
>
> const HomeComponent: React.FC<unknown> = () => {
>   return (
>     <motion.div
>       className="container"
>       variants={anime.container} //* Put your variants here
>       initial="hidden"
>       animate="visible"
>     >
>      <motion.div
>        className="box"
>        variants={anime.box} //* Put your variants here
>        initial="hidden"
>        animate="visible"
>      >
>       <!-- other elements here... -->
>      </motion.div>
>     </motion.div>
>   );
> };
>
> export default HomeComponent;
> ```

#### **_`CsxAnime` Type:_**

##### (1) React CSX styles with motion style compatibility in separate file

> ```typescript
> import { motion } from "framer-motion";
> import type { CsxAnime } from "framer-motion";
>
> type key = "container" | "box"; // * Create class names here
>
> export const csx: CsxAnime<key> = {
>   //* You'll get total intellisense for `class` names
>   container: {
>     //* You'll get intellisense for react css styles here
>     fontWeight: "bolder",
>     //* css styles here...
>
>     //* framer motion related styles
>     scaleX: "",
>   },
>   box: {
>     fontWeight: "bolder",
>     //* css styles here...
>
>     //* framer motion related styles
>     scaleX: "",
>   },
> };
> ```

##### (2) Import & use the created style inside motion components in Next.js

> ```typescript jsx
> "use client"
>
> import { csx } from "./csx.ts";
>
> const HomeComponent: React.FC<unknown> = () => {
>   return (
>     <motion.div className={csx.container}>
>       <motion.div className={csx.box}>
>         <!-- other elements here... -->
>       </motion.div>
>     </motion.div>
>   );
> };
>
> export default HomeComponent;
> ```

&nbsp;

## **_Dedicated To:_**

- 👩‍🎨`Prodipta Das Logno` & 🧛‍♀️`Atoshi Sarker Prithula`: The two most special ladies of my life. I
  can't thank them
  enough for always treasuring me a lot. I am lucky that I met with these two amazing ladies. They
  have two special
  places in my heart and no other girl can ever replace them.
- 💯`My Parents`: The greatest treasures of my life ever.

&nbsp;

## **_License:_**

Copyright (C) 2024 SKN Shukhan

Licensed under the MIT License

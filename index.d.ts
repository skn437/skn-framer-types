import type { Variants, MotionStyle } from "framer-motion";
import type { CSSProperties } from "react";

/**
 * SKN Framer Motion Type Extension Library
 *
 * @author SKN Shukhan
 * @version 1.0.1
 * @since 2024-06-20
 * */
declare module "framer-motion" {
  /**
   * Provides total intellisense of framer motion styles in separate files to be used as `variants`
   *
   * This type will help to de-clutter your jsx/tsx components because you can create `variants` outside motion
   * components like `motion.div`, `motion.main`, `motion.span` etc. with proper intellisense
   *
   * Example:
   *
   * ```typescript
   * import type { Anime } from "framer-motion";
   *
   * type key = "container" | "box"; // * Create variant names here
   *
   * export const anime: Anime<key> = {
   *   //* You'll get total intellisense for `variant` names
   *   container: {
   *     //* You'll get intellisense for motion styles inside `hidden` or `visible` properties
   *     hidden: {
   *       opacity: 0,
   *       //* other motion styles here...
   *     },
   *     visible: {
   *       opacity: 1,
   *       //* other motion styles here...
   *     },
   *   },
   *   box: {
   *     hidden: {
   *       opacity: 0,
   *       //* other motion styles here...
   *     },
   *     visible: {
   *       opacity: 1,
   *       //* other motion styles here...
   *     },
   *   },
   * };
   * ```
   *
   * ```typescript jsx
   * "use client"
   *
   *  import { motion } from "framer-motion";
   *  import { anime } from "./anime.ts";
   *
   *  const HomeComponent: React.FC<unknown> = () => {
   *    return (
   *      <motion.div
   *        className="container"
   *        variants={anime.container} //* Put your variants here
   *        initial="hidden"
   *        animate="visible"
   *      >
   *       <motion.div
   *         className="box"
   *         variants={anime.box} //* Put your variants here
   *         initial="hidden"
   *         animate="visible"
   *       >
   *        <!-- other elements here... -->
   *       </motion.div>
   *      </motion.div>
   *    );
   *  };
   *
   *  export default HomeComponent;
   * ```
   * @since v1.0.0
   * */
  type Anime<T extends string | number | symbol> = Record<T, Variants>;

  /**
   * Provides total intellisense of react csx styles in separate files and ensures compatibility with framer motion
   * styles as well
   *
   * This type will help to de-clutter your jsx/tsx components because you can create csx styles outside motion
   * components like `motion.div`, `motion.main`, `motion.span` etc. with proper intellisense
   *
   * Example:
   *
   * ```typescript
   * import type { CsxAnime } from "framer-motion";
   *
   * type key = "container" | "box"; // * Create class names here
   *
   * export const csx: CsxAnime<key> = {
   *   //* You'll get total intellisense for `class` names
   *   container: {
   *     //* You'll get intellisense for react css styles here
   *     fontWeight: "bolder",
   *     //* css styles here...
   *
   *     //* framer motion related styles
   *     scaleX: ""
   *   },
   *   box: {
   *     fontWeight: "bolder",
   *     //* css styles here...
   *
   *     //* framer motion related styles
   *     scaleX: ""
   *   },
   * };
   * ```
   *
   * ```typescript jsx
   * "use client"
   *
   *  import { motion } from "framer-motion";
   *  import { csx } from "./csx.ts";
   *
   *  const HomeComponent: React.FC<unknown> = () => {
   *    return (
   *      <motion.div className={csx.container}>
   *        <motion.div className={csx.box}>
   *          <!-- other elements here... -->
   *        </motion.div>
   *      </motion.div>
   *    );
   *  };
   *
   *  export default HomeComponent;
   * ```
   *
   * @since v1.0.0
   * */
  type CsxAnime<T extends string | number | symbol> = Record<T, MotionStyle & CSSProperties>;
}

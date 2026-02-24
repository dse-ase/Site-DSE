/// <reference types="vite/client" />

// For side-effect imports of CSS files
declare module '*.css' {
  const css: string;
  export default css;
}
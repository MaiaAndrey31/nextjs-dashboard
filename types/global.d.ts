// Tipos para importações de CSS/SCSS/ SASS usadas no projeto

declare module '*.css';
declare module '*.scss';
declare module '*.sass';

// Para módulos CSS (CSS Modules)
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

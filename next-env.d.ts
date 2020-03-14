/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.scss' {
  const styles: any;
  export = styles;
}

//允许ts,tsx文件引入json文件
declare module '*.json' {
  const data: any;
  export = data;
}

interface Window {
  // gtag(type: any, value: any, parameters: any): void;
  // initGeetest: any;
}

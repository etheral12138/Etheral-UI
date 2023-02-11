declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    etButton: typeof import("etheral-ui").Button;
    etInput: typeof import("etheral-ui").Input;
    etUpload: typeof import("etheral-ui").Upload;
    etShake: typeof import("etheral-ui").Shake;
    etLink: typeof import("etheral-ui").Link;
  }
}
export {};

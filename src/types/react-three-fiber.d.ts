import { ThreeElements } from "@react-three/fiber";

/* eslint-disable @typescript-eslint/no-empty-object-type */

declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}
import { ResolveOptions } from "webpack";

export default function bouildResolves(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}

import { Configuration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

export default function buildDevServer(options: BuildOptions): Configuration {
  return { port: options.port, open: true };
}

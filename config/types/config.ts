export type BuildMode = "development" | "none" | "production";
export interface BuildPath {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  isDev: boolean;
  port: number
}

export interface BuildEnv{
    mode: BuildMode
    port: number
}
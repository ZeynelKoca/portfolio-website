import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Unity, { UnityContext } from "react-unity-webgl"

const unityContext = new UnityContext({
  loaderUrl: "maze_generator/Build/Builds.loader.js",
  dataUrl: "maze_generator/Build/Builds.data",
  frameworkUrl: "maze_generator/Build/Builds.framework.js",
  codeUrl: "maze_generator/Build/Builds.wasm",
});

const MazeGenerator = () => (
  <Layout>
    <SEO title="Perfect Maze Generator" />
    <div className="container">
      <div className="project-header">
        <h1>Perfect Maze Generator</h1>
      </div>
      <div className="canvas-wrapper">
        <Unity unityContext={unityContext} className="canvas-wrapper" />
      </div>
    </div>
  </Layout>
)

export default MazeGenerator
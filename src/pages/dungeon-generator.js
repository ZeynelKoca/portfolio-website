import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Unity, { UnityContext } from "react-unity-webgl"

const unityContext = new UnityContext({
    loaderUrl: "dungeon_generator/Build/WebGL.loader.js",
    dataUrl: "dungeon_generator/Build/WebGL.data",
    frameworkUrl: "dungeon_generator/Build/WebGL.framework.js",
    codeUrl: "dungeon_generator/Build/WebGL.wasm",
  });

const DungeonGeneratorPage = () => (
  <Layout>
    <SEO title="Procedural Dungeon Generator" />
    <div className="container">
      <div className="project-header">
        <h1>Procedural Dungeon Generator</h1>
      </div>
      <div className="canvas-wrapper">
        <Unity unityContext={unityContext} className="canvas-wrapper" />
      </div>
    </div>
  </Layout>
)

export default DungeonGeneratorPage

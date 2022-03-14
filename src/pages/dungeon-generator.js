import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Unity, { UnityContext } from "react-unity-webgl"

const unityContext = new UnityContext({
  loaderUrl: "dungeon_generator/Build/WebGL.loader.js",
  dataUrl: "dungeon_generator/Build/WebGL.data",
  frameworkUrl: "dungeon_generator/Build/WebGL.framework.js",
  codeUrl: "dungeon_generator/Build/WebGL.wasm",
  webglContextAttributes: {
    preserveDrawingBuffer: true
  }
});

const DungeonGeneratorPage = () => {
  const [progression, setProgression] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    unityContext.on("progress", (progression) => setProgression(progression));
    unityContext.on("loaded", () => setIsLoaded(true));
  }, []);

  return (
    <Layout>
      <SEO title="Procedural Dungeon Generator" />
      <div className="container">
        <div className="project-header">
          <h1>Procedural Dungeon Generator</h1>
        </div>
        <div className="canvas-wrapper">
          {/* The loading screen will be displayed here. */}
          {isLoaded === false && (
            <div className="loading-overlay">
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: progression * 100 + "%" }}
                />
              </div>
            </div>
          )}
          {/* The Unity app will be rendered here. */}
          <Unity className="canvas-wrapper" unityContext={unityContext} />
        </div>
      </div>
    </Layout>
  );
}

export default DungeonGeneratorPage

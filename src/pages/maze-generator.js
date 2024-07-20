import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Unity, { UnityContext } from "react-unity-webgl"

const unityContext = new UnityContext({
  loaderUrl: "maze_generator/Build/Builds.loader.js",
  dataUrl: "maze_generator/Build/Builds.data",
  frameworkUrl: "maze_generator/Build/Builds.framework.js",
  codeUrl: "maze_generator/Build/Builds.wasm",
  webglContextAttributes: {
    preserveDrawingBuffer: true
  }
});

const MazeGenerator = () => {
  const [progression, setProgression] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    unityContext.on("progress", (progression) => setProgression(progression));
    unityContext.on("loaded", () => setIsLoaded(true));
  }, []);

  return (
    <Layout>
      <Seo title="Perfect Maze Generator" />
      <div className="container">
        <div className="project-header">
          <h1>Perfect Maze Generator</h1>
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
          <Unity unityContext={unityContext} style={{width: "100%" }} />
        </div>
      </div>
    </Layout>
  );
}

export default MazeGenerator
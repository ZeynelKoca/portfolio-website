import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Unity, { UnityContext } from "react-unity-webgl"

const unityContext = new UnityContext({
  loaderUrl: "dierendorp/Build/Builds.loader.js",
  dataUrl: "dierendorp/Build/Builds.data",
  frameworkUrl: "dierendorp/Build/Builds.framework.js",
  codeUrl: "dierendorp/Build/Builds.wasm",
  webglContextAttributes: {
    preserveDrawingBuffer: true
  }
});

const DierendorpPage = () => {
  const [progression, setProgression] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    unityContext.on("progress", (progression) => setProgression(progression));
    unityContext.on("loaded", () => setIsLoaded(true));
  }, []);

  return (
    <Layout>
      <SEO title="Dierendorp Game" />
      <div className="container">
        <div className="project-header">
          <h1>Dierendorp</h1>
          <h1>{progression * 100}..</h1>
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

export default DierendorpPage

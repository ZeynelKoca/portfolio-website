/**
 * SEO component that sets the document title
 * Simplified version for Gatsby without react-helmet
 */

import { useEffect } from "react"
import PropTypes from "prop-types"

function SEO({ description = ``, lang = `en`, meta = [], title }) {
  useEffect(() => {
    if (title) {
      document.title = title
    }
  }, [title])

  return null
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

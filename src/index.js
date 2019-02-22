import path from "path"

import {sync as readPkg} from "read-pkg"
import {sync as readPkUp} from "read-pkg-up"
import fss from "@absolunet/fss"

/**
 * @typedef options
 * @type {object}
 * @property {string} [cwd=process.cwd()] Directory to search in
 * @property {boolean} [findUp=true] If `true`, also search in parent folders
 */

/**
 * @typedef result
 * @type {object}
 * @property {string} path The absolute path where the config got loaded from
 * @property {object} jestConfig Jest config data
 */

/**
 * @function default
 * @param {options} [options] Options
 * @returns {result|false} Result (or `false` if no config is found)
 */
export default options => {
  options = {
    cwd: process.cwd(),
    findUp: true,
    ...options,
  }
  if (options.findUp) {
    const packageJson = readPkUp({
      cwd: options.cwd,
    })
    if (packageJson?.pkg?.jest) {
      return {
        path: packageJson.path,
        jestConfig: packageJson.pkg.jest,
      }
    }
  } else {
    const packageJson = readPkg({
      cwd: options.cwd,
    })
    if (packageJson?.jest) {
      return {
        path: path.join(options.cwd, "package.json"),
        jestConfig: packageJson.jest,
      }
    }
  }
  const jestConfigFile = path.join(options.cwd, "jest.config.js")
  if (fss.pathExists(jestConfigFile)) {
    return {
      path: jestConfigFile,
      jestConfig: __non_webpack_require__(jestConfigFile),
    }
  }
  return false
}
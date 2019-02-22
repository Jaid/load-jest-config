import path from "path"

const indexModule = process.env.MAIN ? path.resolve(__dirname, "..", process.env.MAIN) : path.join(__dirname, "..", "src")
const {default: loadJestConfig} = require(indexModule)

it("should run", () => {
  const result = loadJestConfig()
  expect(result).toMatchObject({
    path: expect.stringMatching(/jest\.config\.js$/),
    jestConfig: {
      testEnvironment: "node",
    },
  })
})
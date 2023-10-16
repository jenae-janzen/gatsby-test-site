exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/page1`,
    toPath: `/page2`,
  })
}
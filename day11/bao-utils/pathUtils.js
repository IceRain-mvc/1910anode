function isStaticFile(pathname) {
  return pathname.indexOf('.') !== -1
}

module.exports = isStaticFile;


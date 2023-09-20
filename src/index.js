let tachyon = null;
if (process.platform === "linux" && process.arch === "x64") {
  tachyon = require("./lib/linux/x86_64/tachyon");
} else if (process.platform === "darwin" && process.arch === "arm64") {
  tachyon = require("./lib/darwin/arm64/tachyon");
} else {
  throw new Error(`not supported platform and arch`);
}
module.exports = tachyon;

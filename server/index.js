require("@babel/register")({
  ignore: [/\/(build|node_modules)\//],
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

require("./server");

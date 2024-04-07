exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    keymaps: {
      "window:toggleFullScreen": "cmd+enter",
    },
  });
};

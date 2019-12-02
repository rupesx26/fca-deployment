const { getBundles } = require("@jahredhope/react-loadable-webpack-plugin");

// ...
function render({ stats }) {
  const modules = [];
  const appHtml = ReactDOMServer.renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
      <App />
    </Loadable.Capture>
  );

  const bundles = getBundles(stats, modules);

  return `<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${scripts.map(src => `<link rel="preload" href=${src} as="script" />`)}
  </head>
  <body>
    <div id="root">${appHtml}</div>
    ${src.map(
      script => `<script src="${src}" type="application/javascript"></script>`
    )}
    <!-- ... -->
  </body>
</html>`;
}
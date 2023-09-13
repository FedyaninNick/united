require("@babel/register");
const ReactDOMServer = require("react-dom/server");
const React = require("react");

const renderTemplate = (reactElement, properties, response) => {
  const reactEl = React.createElement(reactElement, {
    ...properties,
    name: response.locals.name,
  });
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  response.send(`<!DOCTYPE html>${html}`);
};

module.exports = renderTemplate;

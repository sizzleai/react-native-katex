"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_webview_1 = require("react-native-webview");
const katex_style_1 = __importDefault(require("./katex-style"));
const katex_script_1 = __importDefault(require("./katex-script"));
const auto_render_1 = __importDefault(require("./auto-render"));
function getContent({ inlineStyle, expression, ...options }) {
    return `<!DOCTYPE html>
<html>
<head>
<style>
${katex_style_1.default}
${inlineStyle}
</style>
<script>
window.onerror = e => document.write(e);
window.onload = () => renderMathInElement(document.getElementById("expression"), ${JSON.stringify(options)});
${katex_script_1.default}
${auto_render_1.default}
</script>
</head>
<body>
<div id="expression">
${expression}
</div>
</body>
</html>
`;
}
const defaultStyle = react_native_1.StyleSheet.create({
    root: {
        height: 40,
    },
});
const defaultInlineStyle = `
html, body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
}
.katex {
  margin: 0;
  display: flex;
}
`;
function Katex({ style, onLoad, onError, ...options }) {
    return react_1.default.createElement(react_native_webview_1.WebView, { style: style, source: { html: getContent(options) }, onLoad: onLoad, onError: onError, renderError: onError });
}
exports.default = Katex;
Katex.defaultProps = {
    expression: '',
    displayMode: false,
    throwOnError: false,
    errorColor: '#f00',
    inlineStyle: defaultInlineStyle,
    style: defaultStyle,
    macros: {},
    colorIsTextColor: false,
    onLoad: Boolean,
    onError: Boolean,
};
//# sourceMappingURL=index.js.map
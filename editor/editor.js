const editor = {}
editor.initialize = ()=> {
  let myEditor = CodeMirror(root, {
    value: example.css,
    mode:  "css",
    theme: "pastel-on-dark",
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    foldOptions : {
      widget: "..."
    },
    keyMap: "sublime"
  });
}
window.addEventListener('DOMContentLoaded', (e)=> {
  editor.initialize()
})
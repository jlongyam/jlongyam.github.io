const editor = {}
editor.initialize = ()=> {
  let layout = new dhx.Layout('root', {
    type: 'line',
      rows: [
        { id: 'header', height: '48px', html: 'Header' },
        {
          cols: [
            { id: 'sideL', width: '200px', collapsable: true, resizable: true, html: 'SideL' },
            { id: 'main', resizable: true },
            { id: 'sideR', width: '200px', collapsable: true, html: 'SideR' }
          ],
          resizable: true
        },
        { id: 'footer', header: 'Footer', height: '120px', collapsable: true, html: 'CONTENT' }
      ]
    })
    layout.getCell('footer').collapse()
    layout.getCell('sideL').collapse()
    layout.getCell('sideR').collapse()
  let editor = CodeMirror( main, {
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
  })
}
window.addEventListener('DOMContentLoaded', (e)=> {
  editor.initialize()
})
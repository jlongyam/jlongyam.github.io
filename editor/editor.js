let dhtmlx_menu_initialize = ()=> {
  const menu = new dhx.Menu('dhtmlx_menu', {
    // css: 'dhx_widget--bordered',
    data: /*dataset*/[{
      id: 'file', value: 'File', items: [{
        id: 'new', value: 'New', icon: 'dxi dxi-file-outline' },{
        id: 'exit', value: 'Exit', 
      }]}, {
        type: 'separator'  
      },{
        type: 'spacer'
      },{
      id: 'help', value: 'Help', items: [{
        id: 'about', value: 'About'
      }]
    }]
  })
} 
let dhtmlx_initialize = (cb)=> {
  let layout = new dhx.Layout('root', {
    type: 'line',
    rows: [
      { id: 'header', html: '<div id="dhtmlx_menu"></div>', height: 'auto', padding: '5px' },
      {
        cols: [
          { id: 'sideL', width: '200px', collapsable: true, html: 'SideL' },
          { id: 'main', html: '<div id="cm_editor"></div>' },
          { id: 'sideR', width: '200px', collapsable: true, html: 'SideR' }
        ],
        resizable: true
      },
      { id: 'footer', header: 'Console', height: 'auto', collapsable: true, html: '&nbsp;', padding: '5px' }
    ]
  })
  layout.getCell('footer').collapse()
  layout.getCell('sideL').hide()
  layout.getCell('sideR').hide()
  //
  dhtmlx_menu_initialize()
  if(cb) cb.call()
}
const editor = {}
editor.initialize = ()=> {
  dhtmlx_initialize(()=> {
    let code_editor = CodeMirror( cm_editor, {
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
  })
}
window.addEventListener('DOMContentLoaded', (e)=> {
  editor.initialize()
})
const editor = {}
let dhtmlx_context_initialize = ()=> {
  const contextMenu = new dhx.ContextMenu(null, {
    data: datasetContextMenu
  })
  document.getElementById('cm_editor').addEventListener('contextmenu', function (e) {
    e.preventDefault();
    contextMenu.showAt(e);
  })
}
editor.initialize = ()=> {
  let code_editor = CodeMirror( cm_editor, {
    value: example.css,
    mode:  { name: "css" },
    // theme: "pastel-on-dark",
    lineNumbers: true,
    lineWrapping: false,
    foldGutter: true,
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    foldOptions : {
      widget: "..."
    },
    keyMap: "sublime",
    scrollbarStyle: "simple"
  })
  dhtmlx_context_initialize()
}
let dhtmlx_tabbar_initialize = ()=> {
  const tabbar =  new dhx.Tabbar("dhtmlx_tab", {
    css: 'dhx_widget--bordered',
    tabAlign: 'left',
    mode: 'top',
    views: [
      { id: 'tab1', tab: 'css.example.js', html: '<div id="cm_editor"></div>' }
    ]
  })
  promise.wait(100).then(()=> {
    editor.initialize()
  })
}

let dhtmlx_menu_initialize = ()=> {
  const menu = new dhx.Menu('dhtmlx_menu', {
    css: 'dhx_widget--bordered',
    data: dataset/*[{
      id: 'file', value: 'File', items: [{
        id: 'new', value: 'New', icon: 'mdi mdi-file' },{
        id: 'exit', value: 'Exit', icon: 'mdi mdi-exit-to-app', 
      }]}, {
        type: 'separator'  
      },{
        type: 'spacer'
      },{
      id: 'help', value: 'Help', items: [{
        id: 'about', value: 'About'
      }]
    }]*/
  })
  dhtmlx_tabbar_initialize()
} 
let dhtmlx_initialize = ()=> {
  let layout = new dhx.Layout('root', {
    type: 'line',
    rows: [
      { id: 'header', html: '<div id="dhtmlx_menu"></div>', height: 'auto', padding: '5px' },
      {
        cols: [
          { id: 'sideL', width: '200px', collapsable: true, html: 'SideL' },
          { id: 'main', html: '<div id="dhtmlx_tab"></div>', padding: '5px' },
          { id: 'sideR', width: '200px', collapsable: true, html: 'SideR' }
        ]
      },
      { id: 'footer', header: 'Footer', height: 'auto' }
    ]    
  })
  layout.getCell('footer').hide()
  layout.getCell('sideL').hide()
  layout.getCell('sideR').hide()
  dhtmlx_menu_initialize()
}

window.addEventListener('DOMContentLoaded', (e)=> {
  dhtmlx_initialize()
})
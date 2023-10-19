let
  input_file_hidden = document.getElementById('input_file_hidden'),
  gui = {
    layout: {
      config: {
        type: 'line',
        rows: [
          {
            id: 'header', html: '<div id="container_menu"></div>', height: 'auto', padding: '5px'
          },{
            id: 'main', html: '<div id="container_tabbar"></div>', padding: '5px'
          },{
            id: 'footer', html: document.createElement('div'), padding: '5px'
          }
        ]
      },
      container: undefined,
      init: (parent) => {
        return new dhx.Layout(parent, gui.layout.config)
      },
      
      display: undefined
    },
    menu: {
      bar: {
        config: {
          css: 'dhx_widget--bordered',
          data: dataset
        },
        container: undefined,
        init: (parent) => {
          return new dhx.Menu(parent, gui.menu.bar.config)
        },
        display: undefined
      }
    },
    tabbar: {
      config: {
        css: 'dhx_widget--bordered',
        tabAlign: 'left',
        mode: 'top',
        views: [{ id: 'tab1', tab: 'css.example.js', html:'<div id="container_editor"></div>' }]
      },
      container: undefined,
      init: ( parent )=> {
        return new dhx.Tabbar( parent, gui.tabbar.config )
      },
      display: undefined
    },
    context: {
      config: {
        data: datasetContextMenu
      },
      area: undefined,
      init: (scope)=> {
        let contextMenu = new dhx.ContextMenu(null, gui.context.config )
        scope.addEventListener('contextmenu', function (e) {
          e.preventDefault();
          contextMenu.showAt(e);
        })
      },
      listener: undefined
    }
  },
  editor = {
    config: {
      value: example.css,
      mode: "text/css",
      lineNumbers: true,
      lineWrapping: false,
      foldGutter: true,
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
      foldOptions: {
        widget: "..."
      },
      keyMap: "sublime",
      scrollbarStyle: "simple"
    },
    init: (obj) => {
      return CodeMirror(obj, editor.config)
    }
  }
  ;
gui.layout.container = document.getElementById('container_layout')
gui.layout.display = gui.layout.init(gui.layout.container)
gui.menu.bar.container = document.getElementById('container_menu')
gui.menu.bar.display = gui.menu.bar.init(gui.menu.bar.container)
// promise.wait(0).then(() => {
  gui.tabbar.container = document.getElementById('container_tabbar')
  gui.tabbar.display = gui.tabbar.init(gui.tabbar.container)
// }).then(()=> {
  editor.container = document.getElementById('container_editor')
// }).then(()=> {
  console.log(editor.container)
// })

// gui.context.area = gui.tabbar.container 
// gui.context.listener = gui.context.init(gui.context.area)
// 

// //if(editor.container === null ) {
//   //promise.wait(500).then(() => {
//     console.log(container_tabbar.querySelector('.dhx_layout-cell-inner_html') === null)
//    //editor.display = editor.init(editor.container)
//}
//)
//})

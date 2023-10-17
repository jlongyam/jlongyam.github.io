{
  var style = `
    /* TODO */
  `
  document.head.appendChild( Object.assign( document.createElement( 'style' ), { textContent: style } ) )
  document.head.removeChild( document.currentScript )
}
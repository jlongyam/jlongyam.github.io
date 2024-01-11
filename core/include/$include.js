function $include(input, cb) {
  $include.path = typeof $include.path === 'undefined' ? '' : $include.path
  if(Array.isArray(input)) {
    let arr_input = []
    input.forEach(url=> arr_input.push($include.path+url) )
    input = arr_input
  }
  if( typeof input === 'string') input = $include.path+input
  // node <script>.js
  if ( typeof print === 'undefined' && typeof document !== 'object' ) {
    let f = require('fs')
    function $exec(s) { eval(f.readFileSync(s)+'','utf') }
    if(Array.isArray(input)) { input.forEach( file => $exec(file) ) }
    if(typeof input === 'string') $exec(input)
  }
  if( typeof print === 'function' && typeof document !== 'object' && typeof ARGV === 'undefined' ) {
    // qjs --std <script>.js
    if(Array.isArray(input)) { input.forEach( file => std.loadScript(file) ) }
    if(typeof input === 'string') std.loadScript(input)
  }
  if( typeof window === 'object' && typeof document === 'object' ) {
    function createScript( url, callback ) {
      script = document.createElement('script')
      script.onload = callback
      script.src = url
      document.body.append(script)
      script.remove()
    }
    if(Array.isArray(input)) {
      input.forEach( (url, i)=> {
        if( i === input.length -1 ) createScript( url, cb )
        else createScript(url)
      })
    }
    if( typeof input === 'string' ) createScript(input, cb)
  }
}
const current = (()=> {
  const currentFile = (()=> {
    const
      _location = decodeURI( location.pathname ),
      _a_location = _location.split( '/' ),
      file = _a_location[ _a_location.length - 1 ],
      _a_file = file.split('.'),
      file_ext = _a_file[ _a_file.length - 1 ],
      file_parent = _a_location[ _a_location.length - 2 ],
      _name = file.substring(0, file.indexOf(file_ext)-1),
      _location_dir = _location.substring( 0, _location.indexOf( file) - 1)
    return {
      __filename: _location,
      __dirname: _location_dir,
      __name: file,
      __dir: file_parent,
      name: _name,
      extension: file_ext
      }
    })()
  const currentScript = ( el_script )=> {
    if ( type( self ) !== 'undefined' ) {
      if( document.currentScript ) el_script = document.currentScript
      else {
        var scripts = document.getElementsByTagName( 'script' )
        el_script = scripts[ scripts.length - 1 ]
        }
      var
        s_script_src = decodeURI( el_script.src ),
        s_script_path = s_script_src.substring( s_script_src.lastIndexOf( '//') + 1 ),
        a_script_src = s_script_src.split( '/' ),
        s_script_name = a_script_src[a_script_src.length - 1 ],
        i_script_path = s_script_path.indexOf( s_script_name ),
        s_script_dir_path = s_script_path.substring( 0, i_script_path -1 )
      if( location.host.length > 0 ) {
        s_script_path = s_script_path.replace( location.host+'/', '' )
        s_script_dir_path = s_script_dir_path.replace( '/'+location.host, '' )
        }
      return {
        __filename: s_script_path,
        __dirname: s_script_dir_path
        }
      }
    }
  const currentRelative = ( source, target )=> {
    // example: current.relative( '/foo/bar/file.css', '/foo/' )
    // result: '../../'
    var sep = ( source.indexOf( "/" ) !== -1 ) ? "/" : "\\",
      targetArr = target.split( sep ),
      sourceArr = source.split( sep ),
      filename = targetArr.pop(),
      targetPath = targetArr.join( sep ),
      relativePath = ""
    while ( targetPath.indexOf( sourceArr.join(sep)) === -1 ) {
      sourceArr.pop();
      relativePath += ".." + sep
      }
    var relPathArr = targetArr.slice( sourceArr.length )
    relPathArr.length && ( relativePath += relPathArr.join( sep ) + sep )
    return relativePath + filename
    }
  const currentParent = ( path )=> path.substring( 0, path.lastIndexOf( '/') )
  return {
    file: currentFile,
    script: currentScript,
    relative: currentRelative,
    parent: currentParent
    }
  })()
const currentRoot = (()=> {
  let
    script = current.script( this ),
    source = current.file.__dirname,
    target = current.parent( script.__dirname ) + '/',
    parent = current.relative( source, target )
  return ( path = '../' )=> './' + parent.substring( 0, parent.lastIndexOf( path ) )
  })()
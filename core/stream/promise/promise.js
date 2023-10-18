const promise = (()=> {
  const promiseRun = promises => promises.reduce((p, c) => p.then( rp => c.then( rc => [...rp, rc])), Promise.resolve([]))
  const promiseWait = async milliseconds => new Promise( resolve => setTimeout( resolve, milliseconds ))
  const promiseStylesheet = arrayOfCSS => {
    const load = url => {
      return new Promise( (resolve, reject)=> {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = url
        link.addEventListener( 'load', ()=> resolve() )
        document.head.appendChild( link )
        })
      }
    const promises = arrayOfCSS.map( url => { return load( url ) })
    return promiseRun( promises )
    }
  const promiseScript = arrayOfJs=> {
    const loadScript = url => {
      return new Promise( (resolve, reject)=> {
        const script = document.createElement('script')
        script.src = url
        script.addEventListener('load', ()=> {
          resolve()
          document.body.removeChild( script )
          })
        document.body.appendChild( script )
        })
      }
    const promises = arrayOfJs.map( url => { return loadScript(url) })
    return promiseRun( promises )
    }
  return {
    run: promiseRun,
    wait: promiseWait,
    stylesheet: promiseStylesheet,
    script: promiseScript
  }
})()

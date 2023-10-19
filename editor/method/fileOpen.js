function fileOpen() {
  input_file_hidden.click()
  input_file_hidden.addEventListener('change', (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.addEventListener('load', function () {
      console.log(e.target.files[0])
      const windowHtml = '<textarea style="height:100%;resize:none;" class="dhx_input dhx_input--textarea">' + reader.result + '</textarea>'
      void(new dhx.Window({
        width: 50+'%',
        closable: true,
        movable: true,
        modal: true,
        title: e.target.files[0].name,
        html: windowHtml
      }).show())
    })
    reader.readAsText(file)
  })
}
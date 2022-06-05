const htmlEditor = CodeMirror(document.querySelector('.editor .code .html-code'), {
  lineNumbers: true,
  tabSize: 2,
  mode: 'xml',
  theme: 'yonce',
  scrollbarStyle: "null"
})
const cssEditor = CodeMirror(document.querySelector('.editor .code .css-code'), {
  lineNumbers: true,
  tabSize: 2,
  mode: 'css',
  theme: 'yonce',
  scrollbarStyle: "null"
})
const jsEditor = CodeMirror(document.querySelector('.editor .code .js-code'), {
  lineNumbers: true,
  tabSize: 2,
  mode: 'javascript',
  theme: 'yonce',
  scrollbarStyle: "null"
})
document.querySelector('#run-btn').addEventListener('click', function(){
  const htmlCode = htmlEditor.getValue()
  const cssCode = `<style>${cssEditor.getValue()}</style>`
  const jsCode = `<script>${jsEditor.getValue()}</script>`
  const previewWindow = document.querySelector('#preview-window').contentWindow.document 
  previewWindow.open()
  previewWindow.write(htmlCode+cssCode+jsCode)
  previewWindow.close()
})
document.querySelector('#download-btn').addEventListener('click', function(){
  console.log('link clicked !')
  document.querySelector('#run-btn').click()
  const previewWindow = document.querySelector('#preview-window').contentWindow.document 
  const textFileAsBlob = new Blob([previewWindow.documentElement.outerHTML], {type:'text/html'});
  this.href = window.URL.createObjectURL(textFileAsBlob);
})
const pug = require('pug')

const $input = document.querySelector('#editor')
const $output = document.querySelector('#output')

const editor = CodeMirror($input, {
  mode: 'pug',
  theme: 'base16-dark',
})

editor.on('change', () => {
  const content = editor.getValue()
  $output.textContent = pug.render(content, {
    pretty: true,
    youAreUsingPug: true,
  })
})

editor.setValue(`doctype html
html(lang="en")
  head
    title= pageTitle
    script(type='text/javascript').
      if (foo) bar(1 + 5)
  body
    h1 Pug - node template engine
    #container.col
      if youAreUsingPug
        p You are amazing
      else
        p Get on it!
      p.
        Pug is a terse and simple templating language with a
        strong focus on performance and powerful features.
`)

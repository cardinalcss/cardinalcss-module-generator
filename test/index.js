var fs = require('fs')
var postcss = require('postcss')
var atImport = require('postcss-import')
var customProperties = require('postcss-custom-properties')
var customMedia = require('postcss-custom-media')
var calc = require('postcss-calc')
var autoprefixer = require('autoprefixer')
var mqpacker = require('css-mqpacker')
var removeRoot = require('postcss-remove-root')
var test = require('tape')

test('it compiles postcss to css', function (t) {

  var file = fs.readFileSync('test/fixtures/compile.css', 'utf-8').trim()
  var fileExpected = fs.readFileSync('test/fixtures/compile.css', 'utf-8').trim()

  var fixture = postcss().use(
    atImport,
    customProperties,
    customMedia,
    calc,
    autoprefixer('last 2 versions'),
    mqpacker({ sort: true }),
    removeRoot
  )
  .process(file).css.trim()

  t.same(fixture, fileExpected)
  t.end()

})

/*test('it does something', function (t) {

  // test code here

})*/

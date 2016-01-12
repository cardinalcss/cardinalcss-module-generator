var postcss = require('postcss')
var atImport = require('postcss-import')
var customProperties = require('postcss-custom-properties')
var customMedia = require('postcss-custom-media')
var calc = require('postcss-calc')
var autoprefixer = require('autoprefixer')
var mqpacker = require('css-mqpacker')
var removeRoot = require('postcss-remove-root')
var test = require('tape')

/*test('does something', function (t) {

  var fixture = postcss().use([
    atImport,
    customProperties,
    customMedia,
    calc,
    autoprefixer('last 2 versions'),
    mqpacker({ sort: true }),
    removeRoot
  ])
  .process(
    fs.readFileSync('test/fixtures/file.css', 'utf-8').trim()
  ).css.trim()

  var expected = fs.readFileSync('test/fixtures/file.expected.css', 'utf-8').trim()

  t.same(fixture, expected)
  t.end()

})*/

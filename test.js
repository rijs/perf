var expect = require('chai').expect
  , components = require('rijs.components').default
  , core = require('rijs.core').default
  , fn = require('rijs.fn').default
  , perf = require('./').default
  , container = document.createElement('div')
  , el
  
describe('Perf', function(){

  before(function(){
    document.body.appendChild(container)
  })
  
  beforeEach(function(done){
    container.innerHTML = '<css-1></css-1>'
    el = container.children[0]
    time(50, done)
  })

  after(function(){
    document.body.removeChild(container)
  })

  it('should run fn and log output', function(){  
    var ripple = perf(components(fn(core())))
      , result

    ripple('css-1', function(){ result = true })
    ripple.render(el)

    expect(result).to.be.ok
  })
})
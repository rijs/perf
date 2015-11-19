// -------------------------------------------
// API: Pre-applies Scoped CSS [css=name]
// -------------------------------------------
export default function precss(ripple){
  if (!client) return;
  log('creating')
  ripple.render = render(ripple)(ripple.render)
  return ripple
}

function render(ripple) {
  return function(next) {
    return function(el) {
      return perf(next, 'render ' + lo(el.nodeName)).apply(this, arguments)
    }
  }
}

import identity from 'utilise/identity'
import client from 'utilise/client'
import perf from 'utilise/perf'
import lo from 'utilise/lo'
var log = require('utilise/log')('[ri/perf]')
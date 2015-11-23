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
      return group('render ' + lo(el.nodeName) + ' ' + (el.count = el.count || 0, ++el.count), d => perf(next)(el))
    }
  }
}

import identity from 'utilise/identity'
import client from 'utilise/client'
import perf from 'utilise/perf'
import lo from 'utilise/lo'
var log = require('utilise/log')('[ri/perf]')
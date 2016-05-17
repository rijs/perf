// -------------------------------------------
// Logs Every Render in Console
// -------------------------------------------
export default function instrument(ripple){
  if (!client) return;
  log('creating')
  ripple.render = render(ripple.render)
  return ripple
}

const render = next => el => group(
    'render ' 
  + lo(el.nodeName) 
  + ' ' 
  + (el.count = el.count || 0, ++el.count)
, d => perf(next)(el)
)

const log = require('utilise/log')('[ri/perf]')

import identity from 'utilise/identity'
import client from 'utilise/client'
import perf from 'utilise/perf'
import lo from 'utilise/lo'
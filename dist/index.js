'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = instrument;

var _identity = require('utilise/identity');

var _identity2 = _interopRequireDefault(_identity);

var _client = require('utilise/client');

var _client2 = _interopRequireDefault(_client);

var _perf = require('utilise/perf');

var _perf2 = _interopRequireDefault(_perf);

var _lo = require('utilise/lo');

var _lo2 = _interopRequireDefault(_lo);

/* istanbul ignore next */
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// -------------------------------------------
// Logs Every Render in Console
// -------------------------------------------
function instrument(ripple) {
  if (!_client2.default) return;
  log('creating');
  ripple.render = render(ripple.render);
  return ripple;
}

var render = function render(next) {
  return function (el) {
    return group('render ' + (0, _lo2.default)(el.nodeName) + ' ' + (el.count = el.count || 0, ++el.count), function (d) {
      return (0, _perf2.default)(next)(el);
    });
  };
};

var log = require('utilise/log')('[ri/perf]');
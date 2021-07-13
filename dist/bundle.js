(() => {
  var __webpack_modules__ = {
      807: (e, t, a) => {
        'use strict';
        a.d(t, { Z: () => o });
        var r = a(645),
          n = a.n(r)()(function (e) {
            return e[1];
          });
        n.push([
          e.id,
          '.input{display:flex;flex-direction:column;align-items:center;justify-content:center}.flex-container{display:flex;flex-direction:column}.flex-container .flex-row{display:flex;flex-direction:row;justify-content:space-between}.container{position:absolute;top:40%;left:50%;margin-right:-50%;transform:translate(-50%, -50%)}*{margin:0;padding:0}.history{max-width:500px;height:200px;overflow-y:scroll;text-align:center;font-size:20px;font-family:"Times New Roman",Times,serif;color:#fff;background-color:#474557}.history .history-list{margin:0 auto;list-style-type:none;cursor:pointer}.input{height:50px}.input #input-textarea{width:400px;height:20px;font-family:"Times New Roman",Times,serif;font-size:20px;text-align:center}.input .check-angle{text-align:center}.flex-container{max-width:500px}.flex-container .button-block>button{width:50px}.flex-container .flex-row .button-operator-equally{width:110px;background-color:#2cae23}.flex-container .flex-row .button-block{box-shadow:0px 5px 10px 2px rgba(34,60,80,.2);border:1px solid silver #7491a5 #7491a5 silver;border-radius:4px;font-size:20px;margin:5px}.flex-container .flex-row .button-block>button{cursor:pointer;font-size:20px}.container{border:1px solid gray;max-width:600px;background-color:#e0e0e8}',
          '',
        ]);
        const o = n;
      },
      645: e => {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var a = e(t);
                return t[2] ? '@media '.concat(t[2], ' {').concat(a, '}') : a;
              }).join('');
            }),
            (t.i = function (e, a, r) {
              'string' == typeof e && (e = [[null, e, '']]);
              var n = {};
              if (r)
                for (var o = 0; o < this.length; o++) {
                  var i = this[o][0];
                  null != i && (n[i] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var u = [].concat(e[c]);
                (r && n[u[0]]) ||
                  (a &&
                    (u[2]
                      ? (u[2] = ''.concat(a, ' and ').concat(u[2]))
                      : (u[2] = a)),
                  t.push(u));
              }
            }),
            t
          );
        };
      },
      379: e => {
        'use strict';
        var t = [];
        function a(e) {
          for (var a = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              a = r;
              break;
            }
          return a;
        }
        function r(e, r) {
          for (var o = {}, i = [], c = 0; c < e.length; c++) {
            var u = e[c],
              l = r.base ? u[0] + r.base : u[0],
              s = o[l] || 0,
              _ = ''.concat(l, ' ').concat(s);
            o[l] = s + 1;
            var d = a(_),
              p = { css: u[1], media: u[2], sourceMap: u[3] };
            -1 !== d
              ? (t[d].references++, t[d].updater(p))
              : t.push({ identifier: _, updater: n(p, r), references: 1 }),
              i.push(_);
          }
          return i;
        }
        function n(e, t) {
          var a = t.domAPI(t);
          return (
            a.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                a.update((e = t));
              } else a.remove();
            }
          );
        }
        e.exports = function (e, n) {
          var o = r((e = e || []), (n = n || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < o.length; i++) {
              var c = a(o[i]);
              t[c].references--;
            }
            for (var u = r(e, n), l = 0; l < o.length; l++) {
              var s = a(o[l]);
              0 === t[s].references && (t[s].updater(), t.splice(s, 1));
            }
            o = u;
          };
        };
      },
      569: e => {
        'use strict';
        var t = {};
        e.exports = function (e, a) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var a = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                a instanceof window.HTMLIFrameElement
              )
                try {
                  a = a.contentDocument.head;
                } catch (e) {
                  a = null;
                }
              t[e] = a;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(a);
        };
      },
      216: e => {
        'use strict';
        e.exports = function (e) {
          var t = document.createElement('style');
          return e.setAttributes(t, e.attributes), e.insert(t), t;
        };
      },
      565: (e, t, a) => {
        'use strict';
        e.exports = function (e) {
          var t = a.nc;
          t && e.setAttribute('nonce', t);
        };
      },
      795: e => {
        'use strict';
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (a) {
              !(function (e, t, a) {
                var r = a.css,
                  n = a.media,
                  o = a.sourceMap;
                n ? e.setAttribute('media', n) : e.removeAttribute('media'),
                  o &&
                    'undefined' != typeof btoa &&
                    (r +=
                      '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                        ' */',
                      )),
                  t.styleTagTransform(r, e);
              })(t, e, a);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: e => {
        'use strict';
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      492: () => {
        let e = document.querySelector('#gradus'),
          t = document.querySelector('#input-textarea'),
          a = document.querySelector('#radian'),
          r = document.querySelectorAll('#complex-function'),
          n = document.querySelector('#historyContainer'),
          o = document.querySelector('#historyList');
        function i(r) {
          let n = document.createElement('li');
          switch (
            ((n.innerHTML += r.target.textContent + '(' + t.value + ') = '),
            r.target.textContent)
          ) {
            case 'sin':
              !0 === e.checked
                ? (t.value = Math.sin((t.value * Math.PI) / 180))
                : !0 === a.checked && (t.value = Math.sin(t.value));
              break;
            case 'cos':
              !0 === e.checked
                ? (t.value = Math.cos((t.value * Math.PI) / 180))
                : !0 === a.checked && (t.value = Math.cos(t.value));
              break;
            case 'tan':
              !0 === e.checked
                ? (t.value = Math.tan((t.value * Math.PI) / 180))
                : !0 === a.checked && (t.value = Math.tan(t.value));
              break;
            case 'sinh':
              !0 === e.checked
                ? (t.value = Math.sinh((t.value * Math.PI) / 180))
                : !0 === a.checked && (t.value = Math.sinh(t.value));
              break;
            case 'cosh':
              !0 === e.checked
                ? (t.value = Math.cosh((t.value * Math.PI) / 180))
                : !0 === a.checked && (t.value = Math.cosh(t.value));
              break;
            case 'tanh':
              !0 === e.checked
                ? (t.value = Math.tanh((t.value * Math.PI) / 180))
                : !0 === a.checked && (t.value = Math.tanh(t.value));
              break;
            case 'ctg':
              !0 === e.checked
                ? (t.value = 1 / Math.tan((t.value * Math.PI) / 180))
                : !0 === a.checked && (t.value = 1 / Math.tan(t.value));
              break;
            case 'sec':
              !0 === e.checked
                ? (t.value = 1 / Math.cos((t.value * Math.PI) / 180))
                : !0 === a.checked && (t.value = 1 / Math.cos(t.value));
              break;
            case 'csc':
              !0 === e.checked
                ? (t.value = 1 / Math.sin((t.value * Math.PI) / 180))
                : !0 === a.checked && (t.value = 1 / Math.sin(t.value));
              break;
            case '√':
              t.value = Math.sqrt(t.value);
              break;
            case 'ln':
              t.value = Math.log(t.value);
              break;
            default:
              alert('Please, enter data');
          }
          (n.innerHTML += t.value), o.appendChild(n);
        }
        r.forEach(e => {
          e.addEventListener('click', i);
        }),
          n.appendChild(o);
      },
      683: (
        __unused_webpack_module,
        __unused_webpack___webpack_exports__,
        __webpack_require__,
      ) => {
        'use strict';
        var _factorial_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(784);
        let textarea = document.querySelector('#input-textarea'),
          historyBlock = document.querySelector('#historyContainer');
        console.log(textarea);
        let equally = document.querySelector('#equally'),
          historyTextList = document.querySelector('#historyList');
        function computation() {
          let li = document.createElement('li');
          if (
            ((li.innerHTML += textarea.value + ' = '),
            textarea.value.includes('%'))
          ) {
            let e = textarea.value.split('*')[0],
              t = textarea.value.split('*')[1].split('%')[0];
            textarea.value = e * (t / 100);
          }
          if (-1 !== textarea.value.indexOf('^')) {
            let number = textarea.value.split('^')[0],
              power = textarea.value.split('^')[1].split(' ')[0],
              operations = textarea.value.split(' ')[1],
              otherNumber = textarea.value.split(' ')[2];
            textarea.value =
              void 0 !== operations && void 0 !== otherNumber
                ? eval(Math.pow(number, power) + operations + otherNumber)
                : Math.pow(number, power);
          }
          if (-1 !== textarea.value.indexOf('!')) {
            let number = textarea.value.split('!')[0],
              operations = textarea.value.split(' ')[1],
              otherNumber = textarea.value.split(' ')[2];
            textarea.value =
              void 0 !== operations && void 0 !== otherNumber
                ? eval(
                    (0, _factorial_js__WEBPACK_IMPORTED_MODULE_0__.t)(number) +
                      operations +
                      otherNumber,
                  )
                : (0, _factorial_js__WEBPACK_IMPORTED_MODULE_0__.t)(number);
          }
          (textarea.value = eval(textarea.value)),
            (li.innerHTML += textarea.value),
            historyTextList.appendChild(li);
        }
        document.addEventListener('keydown', e => {
          e.key.match(/=|Enter/) && (e.preventDefault(), computation());
        }),
          historyBlock.appendChild(historyTextList),
          equally.addEventListener('click', computation);
      },
      784: (e, t, a) => {
        'use strict';
        function r(e) {
          return 0 == e || 1 == e ? 1 : e * r(e - 1);
        }
        a.d(t, { t: () => r });
      },
      693: () => {
        let e = document.querySelectorAll('#added '),
          t = document.querySelector('#input-textarea'),
          a = document.querySelector('#button-operator-delete'),
          r = document.querySelector('#button-operator-back'),
          n =
            (document.querySelector('#historyContainer'),
            document.querySelector('#historyContainer'));
        e.forEach(e => {
          e.addEventListener('click', () => {
            let a = e.textContent;
            t.value += a;
          });
        }),
          a.addEventListener('click', function () {
            t.value = '';
          }),
          r.addEventListener('click', function () {
            t.value = t.value.substring(0, t.value.length - 1);
          }),
          n.addEventListener('click', e => {
            t.value = e.target.textContent.split('=')[1];
          });
      },
    },
    __webpack_module_cache__ = {};
  function __webpack_require__(e) {
    var t = __webpack_module_cache__[e];
    if (void 0 !== t) return t.exports;
    var a = (__webpack_module_cache__[e] = { id: e, exports: {} });
    return __webpack_modules__[e](a, a.exports, __webpack_require__), a.exports;
  }
  (__webpack_require__.n = e => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return __webpack_require__.d(t, { a: t }), t;
  }),
    (__webpack_require__.d = (e, t) => {
      for (var a in t)
        __webpack_require__.o(t, a) &&
          !__webpack_require__.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (__webpack_require__.o = (e, t) =>
      Object.prototype.hasOwnProperty.call(e, t));
  var __webpack_exports__ = {};
  (() => {
    'use strict';
    __webpack_require__(492),
      __webpack_require__(683),
      __webpack_require__(693);
    var e = __webpack_require__(379),
      t = __webpack_require__.n(e),
      a = __webpack_require__(795),
      r = __webpack_require__.n(a),
      n = __webpack_require__(569),
      o = __webpack_require__.n(n),
      i = __webpack_require__(565),
      c = __webpack_require__.n(i),
      u = __webpack_require__(216),
      l = __webpack_require__.n(u),
      s = __webpack_require__(589),
      _ = __webpack_require__.n(s),
      d = __webpack_require__(807),
      p = {};
    (p.styleTagTransform = _()),
      (p.setAttributes = c()),
      (p.insert = o().bind(null, 'head')),
      (p.domAPI = r()),
      (p.insertStyleElement = l()),
      t()(d.Z, p),
      d.Z && d.Z.locals && d.Z.locals;
  })();
})();

// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hz976":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "44998faef7e7bf39";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"2YoVz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
// import { setPracticeData } from "./model";
var _modelJs = require("/src/model.js");
var _formViewsJs = require("/src/views/formViews.js");
var _formViewsJsDefault = parcelHelpers.interopDefault(_formViewsJs);
var _nextLevelViewsJs = require("/src/views/nextLevelViews.js");
var _nextLevelViewsJsDefault = parcelHelpers.interopDefault(_nextLevelViewsJs);
var _piecesViewsJs = require("/src/views/piecesViews.js");
var _piecesViewsJsDefault = parcelHelpers.interopDefault(_piecesViewsJs);
var _practiceViewsJs = require("/src/views/practiceViews.js");
var _practiceViewsJsDefault = parcelHelpers.interopDefault(_practiceViewsJs);
var _navigationViewsJs = require("/src/views/navigationViews.js");
var _navigationViewsJsDefault = parcelHelpers.interopDefault(_navigationViewsJs);
var _headerViewsJs = require("/src/views/headerViews.js");
var _headerViewsJsDefault = parcelHelpers.interopDefault(_headerViewsJs);
const controlNewPiece = function(e) {
    //1) Add new piece information to practiceList
    _modelJs.state.practiceList.push(_modelJs.setPracticeData(e));
    //Adding new adjusted state to localStorage
    _modelJs.setLocalStorage(_modelJs.state);
    //2)Passing in only the practiceList to make a new pc on UI
    _piecesViewsJsDefault.default.updateUI(_modelJs.state.practiceList);
    //3)Re add eventListeners after a new piece is added
    _piecesViewsJsDefault.default.addHandlerDeletePiece(controlDeletePiece);
    //4)Clear form view! and add header again:
    _formViewsJsDefault.default.clear();
    _headerViewsJsDefault.default.update();
    //4.5) Make sure there won't be a duplicate pr piece in pr mode
    _practiceViewsJsDefault.default.clear();
};
const controlPracticeMode = function(id) {
    //0)Clear Form, quote, and newPc button:
    _formViewsJsDefault.default.clear();
    _headerViewsJsDefault.default.clear();
    //0.5) Make sure there won't be a duplicate pr piece in pr mode
    _practiceViewsJsDefault.default.clear();
    //1) Clears list of pieces from UI
    _piecesViewsJsDefault.default.clearPiecesList();
    //2) Find piece that hash was changed to and CHANGE CURRENT PIECE STATE HERE
    const prPiece = _modelJs.findPieceUsingId(id);
    _modelJs.state.currentPiece = prPiece;
    // console.log(model.state);
    //2.5) Adding adjusted state to localStorage
    _modelJs.setLocalStorage(_modelJs.state);
    //3) Render prPiece to screen:
    _practiceViewsJsDefault.default.renderPracticePage(prPiece);
    //4) Generate checkboxes specific to curr Practice piece:
    _nextLevelViewsJsDefault.default.render(prPiece);
    //5) Render prHistory from previous sessions:
    _nextLevelViewsJsDefault.default.update();
};
const controlNextLevel = function(prObj) {
    _modelJs.incNextLevel(prObj);
    _nextLevelViewsJsDefault.default.update();
    _practiceViewsJsDefault.default.updatePracticePage(prObj);
};
const controlNavigationToHome = function() {
    //Clear Practice Info:
    _practiceViewsJsDefault.default.clear();
    //Rerender view of our pieces:
    _piecesViewsJsDefault.default.updateUI(_modelJs.state.practiceList);
    //Re add listener after navigation, must be done after updateUI or btns wont exist
    _piecesViewsJsDefault.default.addHandlerDeletePiece(controlDeletePiece);
    //Add quote back in:
    _headerViewsJsDefault.default.update();
};
const controlInitialPage = function() {
    _modelJs.getLocalStorage();
    _headerViewsJsDefault.default.update();
    //This updates UI so localStorage may be rendered:
    _piecesViewsJsDefault.default.updateUI(_modelJs.state.practiceList);
};
const controlDeletePiece = async function(id) {
    //1)Find pc using ud
    //1)Delete id from state
    _modelJs.deleteSinglePieceFromState(id);
    //2)Read the function name c'mon
    _modelJs.deleteSinglePieceLocalStorage(id);
    //2.5) Going to try and add an animation in here:
    const animDur = 200; //animDur is .7ss but wait time is 200ms
    _piecesViewsJsDefault.default.deletePieceAnimation(id, animDur);
    await new Promise((resolve)=>setTimeout(resolve, animDur)
    );
    //3)Rerender piecesView
    _piecesViewsJsDefault.default.updateUI(_modelJs.state.practiceList);
    //4 Re add the event listener for the btns:
    _piecesViewsJsDefault.default.addHandlerDeletePiece(controlDeletePiece);
};
const controlShowForm = function() {
    console.log("showing form");
    _formViewsJsDefault.default.clear();
    _headerViewsJsDefault.default.clear();
    _formViewsJsDefault.default.showForm();
};
const init = function() {
    controlInitialPage();
    _navigationViewsJsDefault.default.addHandlerInitHash();
    _formViewsJsDefault.default.addHandlerShowForm(controlShowForm);
    _formViewsJsDefault.default.addHandlerFormSubmit(controlNewPiece);
    _piecesViewsJsDefault.default.addHandlerDeletePiece(controlDeletePiece);
    _piecesViewsJsDefault.default.addHandlerHash(controlPracticeMode, controlNavigationToHome);
    //Add listener to parent element and use event delegation:
    _nextLevelViewsJsDefault.default.addHandlerNextLevel(controlNextLevel);
};
init();

},{"/src/model.js":"wvpmA","/src/views/formViews.js":"kDqQO","/src/views/nextLevelViews.js":"dDwKc","/src/views/piecesViews.js":"bSMKO","/src/views/practiceViews.js":"bEOfk","/src/views/navigationViews.js":"h6uf6","/src/views/headerViews.js":"g2SKm","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"wvpmA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "setPracticeData", ()=>setPracticeData
);
parcelHelpers.export(exports, "incNextLevel", ()=>incNextLevel
);
parcelHelpers.export(exports, "findPieceUsingId", ()=>findPieceUsingId
);
parcelHelpers.export(exports, "setLocalStorage", ()=>setLocalStorage
);
parcelHelpers.export(exports, "getLocalStorage", ()=>getLocalStorage
);
parcelHelpers.export(exports, "deleteSinglePieceLocalStorage", ()=>deleteSinglePieceLocalStorage
);
parcelHelpers.export(exports, "deleteSinglePieceFromState", ()=>deleteSinglePieceFromState
);
parcelHelpers.export(exports, "clearLocalStorage", ()=>clearLocalStorage
);
const state = {
    practiceList: [],
    currentPiece: ""
};
const setPracticeData = function(e) {
    const inputObj = {
    };
    Array.from(e.target).forEach((input)=>{
        inputObj[input.id] = input.value;
    });
    //Default is set to start at half tempo now:
    if (!inputObj["starting-tempo"]) inputObj["starting-tempo"] = Math.ceil(+inputObj["goal-tempo"] / 2);
    return {
        composer: inputObj["composer"],
        piece: inputObj["piece"],
        measureNumbers: inputObj["measure-numbers"],
        excerptDescription: inputObj["excerpt-description"],
        startingTempo: +inputObj["starting-tempo"],
        goalTempo: +inputObj["goal-tempo"],
        repetitionsPerLevel: +inputObj["repetitions"],
        tempoIncreasePerLevel: +inputObj["tempo-increase"],
        excerptId: +Date.now(),
        progress: {
            currTempo: +inputObj["starting-tempo"],
            totalLevels: +setTotalLevels(inputObj["starting-tempo"], inputObj["goal-tempo"], inputObj["tempo-increase"]),
            currLevel: 1,
            progressPercent: 0,
            // progHistory: [[0, new Date()]],
            progHistory: [
                {
                    lvl: 0,
                    lvlTempo: +inputObj["starting-tempo"],
                    date: formatDate()
                }, 
            ]
        }
    };
};
const setTotalLevels = function(start, end, inc) {
    return Math.ceil((end - start) / inc);
};
const incNextLevel = function(pcObj) {
    let { currTempo: currT , currLevel: currLvl , progressPercent: progPerc , totalLevels: lvls , progHistory: progHis ,  } = pcObj.progress;
    // console.log(currT, currLvl, progPerc, lvls);
    //Update Progress percent before next level is inc
    progPerc = Math.ceil(currLvl / lvls * 100);
    //ProgHis now contains data about the tempo at the point in history
    progHis.push({
        lvl: currLvl,
        lvlTempo: currT,
        date: formatDate()
    });
    currLvl++;
    currT += pcObj.tempoIncreasePerLevel;
    //State is updated HERE:
    pcObj.progress = {
        currTempo: currT,
        currLevel: currLvl,
        progressPercent: progPerc,
        totalLevels: lvls,
        progHistory: progHis
    };
    console.log(state.practiceList);
};
const findPieceUsingId = function(id) {
    return state.practiceList.find((list)=>{
        return list.excerptId === id;
    });
};
const formatDate = function() {
    const options = {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "numeric"
    };
    const date = new Date();
    // console.log(date.toLocaleString("en-US", options));
    return date.toLocaleString("en-US", options);
};
const setLocalStorage = function(obj) {
    obj.practiceList.forEach((pc)=>{
        window.localStorage.setItem(pc.excerptId, JSON.stringify(pc));
    });
    const get = JSON.parse(window.localStorage.getItem("stateStorage"));
// console.log(get);
// console.log(window.localStorage);
};
const getLocalStorage = function() {
    for (const [id, pc] of Object.entries(window.localStorage))state.practiceList.push(JSON.parse(pc));
// console.log(state);
};
const deleteSinglePieceLocalStorage = function(id) {
    console.log(window.localStorage);
    window.localStorage.removeItem(id);
    console.log(window.localStorage);
};
const deleteSinglePieceFromState = function(id) {
    const i = state.practiceList.findIndex((pc)=>{
        return pc.excerptId == id;
    });
    if (i === -1) return;
    console.log(state.practiceList, i);
    state.practiceList.splice(i, 1);
    console.log(state.practiceList);
};
const clearLocalStorage = function() {
    window.localStorage.clear();
}; // clearLocalStorage();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kDqQO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Form {
    _form = document.getElementById("new-piece-form");
    _addNewPieceButton = document.getElementById("add-new-piece");
    addHandlerFormSubmit = function(callback) {
        this._form.addEventListener("submit", function(e) {
            e.preventDefault();
            callback(e);
        });
    };
    addHandlerShowForm = function(callback) {
        const that = this;
        this._addNewPieceButton.addEventListener("click", function() {
            console.log("in a bit this will reveal the form");
            that._generateMarkup();
            callback();
        });
    };
    //Had plans for this but decided to change:
    //This handler will change the header, will disapper once it leads user down to pieces area
    // addHandlerLetsPractice = function (callback) {
    //   const letsPractice = document.getElementById("lets-practice-btn");
    //   letsPractice.addEventListener("click", function () {
    //     console.log(
    //       "controlling header now, this will shift from greeting mode. Heading will adjust and quote will disapper"
    //     );
    //     letsPractice.innerHTML = "";
    //   });
    // };
    clear = function() {
        this._form.innerHTML = "";
    };
    showForm = function() {
        this.clear();
        this._generateMarkup();
    };
    _generateMarkup = function() {
        const markupExperiment = `\n    <h3 class="form__piece-title">Describe Your Piece.</h3>\n    <p class="form__piece-sentence">Choose a challenging passage lasting no more than three measures. Give it a short description so you can find it faster. </p>\n\n    <div class="form__piece-inputs">\n    <input type="text" required list="piece-list" id="piece" placeholder="Piece"  />\n    <datalist id="piece-datalist">\n      <option value="Symphony"></option>\n    </datalist>\n    <input list="composer-list" type="text" placeholder="Composer" id="composer" />\n    <datalist id="composer-datalist">\n      <option value="Bach"></option>\n      <option value="Beethoven"></option>\n      <option value="Mahler"></option>\n    </datalist>\n \n    <input\n      id="measure-numbers"\n      type="text"\n      placeholder="Measures"\n     \n    />\n    <input\n      type="text"\n      id="excerpt-description"\n      required\n      placeholder='"Arpeggios on line 3"'\n    />\n  </div>\n\n    <h5 class="form__plan-title">Now Let's Make a Plan.</h5>\n\n      <p class="form__plan-inputs">To achieve mastery at my goal tempo of \n        <input required id="goal-tempo" type="number" placeholder="120" value="120"  min="30" max="230" />\n      bpm , I will start at half tempo, increasing it by \n        <input required id="tempo-increase" type="number" value="4" min="1" max="10" />\n      bpm after playing it correctly \n        <input required id="repetitions" type="number" value="3" min="1" max="6" /> times in a row.  <button id="new-piece-btn" class="new-piece-btn" type="submit">Add Plan </button></p>\n\n  \n\n   \n    `;
        this._form.insertAdjacentHTML("afterbegin", markupExperiment);
    };
}
exports.default = new Form();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"dDwKc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// import practiceViews from "/src/views/practiceViews.js";
class nextLevelView {
    _nextLvlBtn;
    _prObj;
    _parent = document.getElementById("next-level-form");
    //We have a duplicate of _prPorgressHistory, could cause problems later. This class should be a child of practiceViews
    _prProgressHistory = document.querySelector(".practice__progress--history");
    addHandlerNextLevel = function(callback) {
        const that = this;
        this._parent.addEventListener("click", function(e) {
            //1) Checking if click occured on the button, if not, return
            const btn = e.target.closest(".btn__next-level");
            if (!btn) return;
            //2)Checking if all checkboxes are checked, if not all checkboxes are checked, we still want to prevDef or section will refesh
            const boxes = Array.from(that._parent.getElementsByTagName("input"));
            e.preventDefault();
            if (!boxes.every((b)=>b.checked
            )) return;
            //3)If btn was clicked AND all checkboxes are checked, call function and pass in curent prObj
            callback(that._prObj);
            //4) Finally, remove checks from boxes
            boxes.forEach((b)=>{
                b.checked = false;
            });
        });
    };
    render = function(prObj) {
        this._prObj = prObj;
        this._nextLvlBtn = document.querySelector(".btn__next-level");
    // this._generateLevelHistory();
    };
    update = function() {
        this._generateLevelHistory();
    };
    //Uses current state prList, slices off 0 Lvl and only displays real lvls completed
    _generateLevelHistory = function() {
        this._prProgressHistory.innerHTML = "";
        // console.log(this._prObj.progress);
        //Slice off first init level, we wont display it
        const arrLvlAfterOne = this._prObj.progress.progHistory.slice(1);
        let markup = arrLvlAfterOne.map((lvl, i)=>{
            return `\n        <div class="practice__progress--history-unit">\n        <p class="practice__progress--history-summary"> <span class="level-number">${lvl.lvl}</span> ${lvl.lvlTempo} bpm</p>\n      <p class="practice__progress--history-date"><small>${lvl.date}</small></p>\n      </div>\n       `;
        }).reverse().join("");
        this._prProgressHistory.insertAdjacentHTML("afterbegin", markup);
    };
}
exports.default = new nextLevelView();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bSMKO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Pieces {
    _parent = document.querySelector(".pieces");
    _ulElement = document.querySelector(".pieces__list");
    _data;
    updateUI = function(data) {
        this._data = data;
        //If there arent any pieces, tell user how to add!
        if (!data[0]) return this._ulElement.innerHTML = "";
        //To generate entire list, do this:
        this._ulElement.innerHTML = "";
        data.forEach((pc)=>this._generateMarkup(pc)
        );
    };
    //Adds newest piece to list of pieces
    _generateMarkup = function(pc) {
        const markup = `\n        <li class="pieces__item" href=#${pc.excerptId}>\n          <div class='pieces__item-progress-bar'>${pc.progress.progressPercent}%</div>\n              <div class="pieces__item-description">\n                  <h4 class="pieces__item-piece-naming">${pc.piece} ${pc.composer ? `<span class='composer-span'> by ${pc.composer}</span>` : ""}</h4>\n                  <p class="pieces__item-excerpt-naming">${pc.excerptDescription}${pc.measureNumbers ? ", mm. " + pc.measureNumbers : ""}</p>\n              </div>\n              <div class="pieces__item-progress">\n                  <p>Lvl ${pc.progress.currLevel}/${pc.progress.totalLevels}</p>\n                  <p>${pc.progress.currTempo} bpm, Goal of ${pc.goalTempo}  bpm</p>\n              </div>\n      <button class="pieces__item-delete-btn" type="button">✖ </button>\n        </li>\n      `;
        this._ulElement.insertAdjacentHTML("afterbegin", markup);
    };
    //Listens for a piece to be clicked on, called practiceController
    addHandlerHash = function(callback, toHome) {
        this._ulElement.addEventListener("click", function(e) {
            //Not ideal, but I need to manually catch cases where the btn and not the ul was clicked
            if (e.target.type === "button") return;
            console.log("the ul eventListener proceeded");
            const li = e.target.closest(".pieces__item");
            if (!li) return;
            window.location.hash = li.attributes.href.nodeValue;
        });
        window.addEventListener("hashchange", function(e) {
            //We want to allow internal links, not an idea way though
            if (e.newURL.includes("#pieces")) return;
            //if the new url doesnt contain a hash, it means were going to the home page
            if (!e.newURL.includes("#")) return toHome();
            //If !id, means user went back to home page
            const id = +e.newURL.split("#")[1];
            callback(id);
        });
    };
    //This function should be listening for a click on the X, but it bubble up and causes the practice mode to be engaged
    addHandlerDeletePiece = function(callback) {
        const deleteBtn = document.querySelectorAll(".pieces__item-delete-btn");
        deleteBtn.forEach((btn)=>{
            btn.addEventListener("click", function(e) {
                const dltId = +e.target.closest(".pieces__item").attributes.href.nodeValue.split("#")[1];
                return callback(dltId);
            });
        });
    };
    deletePieceAnimation(id, animDur) {
        const li = this._parent.querySelectorAll(".pieces__item");
        li.forEach((li1)=>{
            const liId = +li1.attributes.href.value.split("#")[1];
            if (id !== liId) return;
            li1.style.transition = `all .75s`;
            li1.style.transform = "translateY(30rem)";
            li1.style.opacity = "0";
        });
    }
    //Clears piecesView list from screen:
    clearPiecesList = function() {
        this._ulElement.innerHTML = "";
    };
}
exports.default = new Pieces();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"bEOfk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Practice {
    _parentEl = document.querySelector(".practice");
    _prInformation = document.querySelector(".practice__pc--information");
    _form = document.getElementById("next-level-form");
    _prHistory = document.querySelector(".practice__progress--history");
    _prPiece;
    clear = function() {
        //Ex for future projects: clearing the parent el also messes with the scaffolding that we will later need to reinsert html into later:
        // this._parentEl.innerHTML = "";
        this._prInformation.innerHTML = "";
        this._form.innerHTML = "";
        this._prHistory.innerHTML = "";
    };
    //This is called initially to render the pr Page
    renderPracticePage = function(pc) {
        this._prPiece = pc;
        this._generatePracticePieceMarkup(pc);
        this._generateInitialRepetitionsMarkup();
    };
    //Called after each level to update piece summary
    updatePracticePage = function(pc) {
        this._prInformation.innerHTML = "";
        this._generatePracticePieceMarkup(pc);
    };
    //Passing in pc from renderPracticePage instead of class var bc lazy:
    _generatePracticePieceMarkup = function(pc) {
        const markup = `\n      <div class="practice__pc--title">\n            <p class="practice__pc--title-main">${pc.piece} ${pc.composer ? "by " + pc.composer : ""}</p>\n            <p class="practice__pc--title-sub">${pc.excerptDescription}${pc.measureNumbers ? ", mm. " + pc.measureNumbers : ""}</p>\n      </div>\n      <div class="practice__pc--progress">\n        <div class="practice__pc--progress-level">Level ${pc.progress.currLevel}: Play ${this._prPiece.repetitionsPerLevel} times at ${pc.progress.currTempo} bpm\n          </div>\n      \n          <div class="practice__pc--progress-tempo">\n           \n          Goal: ${pc.goalTempo}  bpm. Progress: ${pc.progress.progressPercent}%\n        </div>\n          <div class="tempo-number">${pc.progress.currTempo} <span class="bpm">bpm<span></div> \n         \n      </div>\n    `;
        this._prInformation.insertAdjacentHTML("afterbegin", markup);
    };
    _generateInitialRepetitionsMarkup = function() {
        const reps = this._prPiece.repetitionsPerLevel;
        const markup = `\n      <label class="repetition-label" for="repetition">Repetitions:</label>\n      ${this._generateCheckboxes(reps)}\n      <button type="submit" class="btn__next-level" id="btn__next-level">Next Level</button>\n      `;
        //Had to include form right here because this markup had been put in a different parent, so there was no space to even click on in listener
        this._form.insertAdjacentHTML("beforeend", markup);
    };
    _generateCheckboxes = function(reps) {
        let boxes = ``;
        for(let x = 0; x < reps; x++)boxes += `<input\n        type="checkbox"\n        class="input__checkbox--repetition"\n        name="repetition"\n        /> `;
        return boxes;
    };
}
exports.default = new Practice();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"h6uf6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Navigation {
    //Goal of this function is to clear the hash on page load
    //Current prob is that old hash is not a valid id in prList
    addHandlerInitHash() {
        window.addEventListener("load", function() {
            if (!window.location.href.includes("#")) return;
            const baseUrl = window.location.href.split("#")[0];
            window.location.replace(baseUrl);
        });
    }
}
exports.default = new Navigation();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"g2SKm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class HeaderViews {
    _quote = document.querySelector(".header__quote");
    _headerPar = document.querySelector(".header");
    _navbar = document.querySelector(".navbar");
    update() {
        this.clear();
        this._generateQuoteMarkup();
    }
    clear() {
        this._quote.innerHTML = "";
    }
    _generateQuoteMarkup() {
        const markup = `\n    <p class="header__quote-text">One must always practice slowly. If you learn something slowly you forget it slowly; if you learn something very quickly you forget it immediately.</p>\n    <div class="header__quote-author">\n      <p class="header__quote-name">-Itzhak Perlman</p>\n      <p class="header__quote-position"> &nbspInternational Violin Soloist</p>\n    </div>\n      `;
        this._quote.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = new HeaderViews();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["hz976","2YoVz"], "2YoVz", "parcelRequirec284")

//# sourceMappingURL=index.f7e7bf39.js.map

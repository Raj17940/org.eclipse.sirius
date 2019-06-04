/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 310);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var keys = __webpack_require__(5);
exports.METADATA_KEY = keys;
var container_1 = __webpack_require__(223);
exports.Container = container_1.Container;
var literal_types_1 = __webpack_require__(21);
exports.BindingScopeEnum = literal_types_1.BindingScopeEnum;
exports.BindingTypeEnum = literal_types_1.BindingTypeEnum;
exports.TargetTypeEnum = literal_types_1.TargetTypeEnum;
var container_module_1 = __webpack_require__(224);
exports.ContainerModule = container_module_1.ContainerModule;
var injectable_1 = __webpack_require__(213);
exports.injectable = injectable_1.injectable;
var tagged_1 = __webpack_require__(218);
exports.tagged = tagged_1.tagged;
var named_1 = __webpack_require__(215);
exports.named = named_1.named;
var inject_1 = __webpack_require__(122);
exports.inject = inject_1.inject;
exports.LazyServiceIdentifer = inject_1.LazyServiceIdentifer;
var optional_1 = __webpack_require__(216);
exports.optional = optional_1.optional;
var unmanaged_1 = __webpack_require__(220);
exports.unmanaged = unmanaged_1.unmanaged;
var multi_inject_1 = __webpack_require__(214);
exports.multiInject = multi_inject_1.multiInject;
var target_name_1 = __webpack_require__(219);
exports.targetName = target_name_1.targetName;
var post_construct_1 = __webpack_require__(217);
exports.postConstruct = post_construct_1.postConstruct;
var metadata_reader_1 = __webpack_require__(123);
exports.MetadataReader = metadata_reader_1.MetadataReader;
var guid_1 = __webpack_require__(34);
exports.guid = guid_1.guid;
var decorator_utils_1 = __webpack_require__(29);
exports.decorate = decorator_utils_1.decorate;
var constraint_helpers_1 = __webpack_require__(126);
exports.traverseAncerstors = constraint_helpers_1.traverseAncerstors;
exports.taggedConstraint = constraint_helpers_1.taggedConstraint;
exports.namedConstraint = constraint_helpers_1.namedConstraint;
exports.typeConstraint = constraint_helpers_1.typeConstraint;
var serialization_1 = __webpack_require__(47);
exports.getServiceIdentifierAsString = serialization_1.getServiceIdentifierAsString;
var binding_utils_1 = __webpack_require__(238);
exports.multiBindToService = binding_utils_1.multiBindToService;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPES = {
    IActionDispatcher: Symbol('IActionDispatcher'),
    IActionDispatcherProvider: Symbol('IActionDispatcherProvider'),
    IActionHandlerInitializer: Symbol('IActionHandlerInitializer'),
    ActionHandlerRegistry: Symbol('ActionHandlerRegistry'),
    AnimationFrameSyncer: Symbol('AnimationFrameSyncer'),
    CommandStackOptions: Symbol('CommandStackOptions'),
    IButtonHandler: Symbol('IButtonHandler'),
    ICommand: Symbol('ICommand'),
    ICommandStack: Symbol('ICommandStack'),
    ICommandStackProvider: Symbol('ICommandStackProvider'),
    DOMHelper: Symbol('DOMHelper'),
    HiddenVNodeDecorator: Symbol('HiddenVNodeDecorator'),
    HoverState: Symbol('HoverState'),
    KeyListener: Symbol('KeyListener'),
    Layouter: Symbol('Layouter'),
    LayoutRegistry: Symbol('LayoutRegistry'),
    ILogger: Symbol('ILogger'),
    LogLevel: Symbol('LogLevel'),
    IModelFactory: Symbol('IModelFactory'),
    ModelRendererFactory: Symbol('ModelRendererFactory'),
    ModelSource: Symbol('ModelSource'),
    ModelSourceProvider: Symbol('ModelSourceProvider'),
    MouseListener: Symbol('MouseListener'),
    PopupModelFactory: Symbol('PopupModelFactory'),
    PopupMouseListener: Symbol('PopupMouseListener'),
    PopupVNodeDecorator: Symbol('PopupVNodeDecorator'),
    SModelStorage: Symbol('SModelStorage'),
    StateAwareModelProvider: Symbol('StateAwareModelProvider'),
    SvgExporter: Symbol('SvgExporter'),
    IViewer: Symbol('IViewer'),
    ViewerOptions: Symbol('ViewerOptions'),
    IViewerProvider: Symbol('IViewerProvider'),
    ViewRegistry: Symbol('ViewRegistry'),
    IVNodeDecorator: Symbol('IVNodeDecorator')
};
//# sourceMappingURL=types.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var geometry_1 = __webpack_require__(3);
/**
 * Base class for all elements of the diagram model.
 * Each model element must have a unique ID and a type that is used to look up its view.
 */
var SModelElement = /** @class */ (function () {
    function SModelElement() {
    }
    Object.defineProperty(SModelElement.prototype, "root", {
        get: function () {
            var current = this;
            while (current) {
                if (current instanceof SModelRoot)
                    return current;
                else if (current instanceof SChildElement)
                    current = current.parent;
                else
                    current = undefined;
            }
            throw new Error("Element has no root");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SModelElement.prototype, "index", {
        get: function () {
            return this.root.index;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * A feature is a symbol identifying some functionality that can be enabled or disabled for
     * a model element. The base implementation always returns false, so it disables all features.
     */
    SModelElement.prototype.hasFeature = function (feature) {
        return false;
    };
    return SModelElement;
}());
exports.SModelElement = SModelElement;
/**
 * A parent element may contain child elements, thus the diagram model forms a tree.
 */
var SParentElement = /** @class */ (function (_super) {
    __extends(SParentElement, _super);
    function SParentElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.children = [];
        return _this;
    }
    SParentElement.prototype.add = function (child, i) {
        if (i === undefined) {
            this.children.push(child);
        }
        else {
            if (i < 0 || i > this.children.length) {
                throw "Child index out of bounds " + i + " (0.." + this.children.length + ")";
            }
            this.children.splice(i, 0, child);
        }
        child.parent = this;
        this.index.add(child);
    };
    SParentElement.prototype.remove = function (child) {
        var i = this.children.indexOf(child);
        if (i < 0) {
            throw "No such child " + child;
        }
        this.children.splice(i, 1);
        delete child.parent;
        this.index.remove(child);
    };
    SParentElement.prototype.move = function (child, newIndex) {
        var i = this.children.indexOf(child);
        if (i === -1) {
            throw "No such child " + child;
        }
        else {
            if (newIndex < 0 || newIndex > this.children.length - 1) {
                throw "Child index out of bounds " + i + " (0.." + this.children.length + ")";
            }
            this.children.splice(i, 1);
            this.children.splice(newIndex, 0, child);
        }
    };
    /**
     * Transform the given bounds from the local coordinate system of this element to the coordinate
     * system of its parent. This function should consider any transformation that is applied to the
     * view of this element and its contents.
     * The base implementation assumes that this element does not define a local coordinate system,
     * so it leaves the bounds unchanged.
     */
    SParentElement.prototype.localToParent = function (point) {
        return geometry_1.isBounds(point) ? point : { x: point.x, y: point.y, width: -1, height: -1 };
    };
    /**
     * Transform the given bounds from the coordinate system of this element's parent to its local
     * coordinate system. This function should consider any transformation that is applied to the
     * view of this element and its contents.
     * The base implementation assumes that this element does not define a local coordinate system,
     * so it leaves the bounds unchanged.
     */
    SParentElement.prototype.parentToLocal = function (point) {
        return geometry_1.isBounds(point) ? point : { x: point.x, y: point.y, width: -1, height: -1 };
    };
    return SParentElement;
}(SModelElement));
exports.SParentElement = SParentElement;
/**
 * A child element is contained in a parent element. All elements except the model root are child
 * elements. In order to keep the model class hierarchy simple, every child element is also a
 * parent element, although for many elements the array of children is empty (i.e. they are
 * leafs in the model element tree).
 */
var SChildElement = /** @class */ (function (_super) {
    __extends(SChildElement, _super);
    function SChildElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SChildElement;
}(SParentElement));
exports.SChildElement = SChildElement;
/**
 * Base class for the root element of the diagram model tree.
 */
var SModelRoot = /** @class */ (function (_super) {
    __extends(SModelRoot, _super);
    function SModelRoot() {
        var _this = _super.call(this) || this;
        _this.canvasBounds = geometry_1.EMPTY_BOUNDS;
        // Override the index property from SModelElement, which has a getter, with a data property
        Object.defineProperty(_this, 'index', {
            value: new SModelIndex(),
            writable: false
        });
        return _this;
    }
    return SModelRoot;
}(SParentElement));
exports.SModelRoot = SModelRoot;
/**
 * Used to speed up model element lookup by id.
 */
var SModelIndex = /** @class */ (function () {
    function SModelIndex() {
        this.id2element = new Map;
    }
    SModelIndex.prototype.add = function (element) {
        if (this.contains(element)) {
            throw new Error("Duplicate ID in model: " + element.id);
        }
        this.id2element.set(element.id, element);
        if (element.children !== undefined && element.children.constructor === Array) {
            for (var _i = 0, _a = element.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.add(child);
            }
        }
    };
    SModelIndex.prototype.remove = function (element) {
        this.id2element.delete(element.id);
        if (element.children !== undefined && element.children.constructor === Array) {
            for (var _i = 0, _a = element.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.remove(child);
            }
        }
    };
    SModelIndex.prototype.contains = function (element) {
        return this.id2element.get(element.id) !== undefined;
    };
    SModelIndex.prototype.removeById = function (elementId) {
        this.id2element.delete(elementId);
    };
    SModelIndex.prototype.getById = function (id) {
        return this.id2element.get(id);
    };
    SModelIndex.prototype.all = function () {
        var all = [];
        this.id2element.forEach(function (element) { return all.push(element); });
        return all;
    };
    return SModelIndex;
}());
exports.SModelIndex = SModelIndex;
//# sourceMappingURL=smodel.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * (x,y) coordinates of the origin.
 */
exports.ORIGIN_POINT = Object.freeze({
    x: 0,
    y: 0
});
/**
 * A dimension with both width and height set to a negative value, which is considered as undefined.
 */
exports.EMPTY_DIMENSION = Object.freeze({
    width: -1,
    height: -1
});
/**
 * Checks whether the given dimention is valid, i.e. the width and height are non-zero.
 * @param {Dimension} b - Dimension object
 * @returns {boolean}
 */
function isValidDimension(d) {
    return d.width >= 0 && d.height >= 0;
}
exports.isValidDimension = isValidDimension;
exports.EMPTY_BOUNDS = Object.freeze({
    x: 0,
    y: 0,
    width: -1,
    height: -1
});
function isBounds(element) {
    return 'x' in element
        && 'y' in element
        && 'width' in element
        && 'height' in element;
}
exports.isBounds = isBounds;
/**
 * Combines the bounds of two objects into one, so that the new bounds
 * are the minimum bounds that covers both of the original bounds.
 * @param {Bounds} b0 - First bounds object
 * @param {Bounds} b1 - Second bounds object
 * @returns {Bounds} The combined bounds
 */
function combine(b0, b1) {
    var minX = Math.min(b0.x, b1.x);
    var minY = Math.min(b0.y, b1.y);
    var maxX = Math.max(b0.x + (b0.width >= 0 ? b0.width : 0), b1.x + (b1.width >= 0 ? b1.width : 0));
    var maxY = Math.max(b0.y + (b0.height >= 0 ? b0.height : 0), b1.y + (b1.height >= 0 ? b1.height : 0));
    return {
        x: minX, y: minY, width: maxX - minX, height: maxY - minY
    };
}
exports.combine = combine;
/**
 * Translates the given bounds.
 * @param {Bounds} b - Bounds object
 * @param {Point} p - Vector by which to translate the bounds
 * @returns {Bounds} The translated bounds
 */
function translate(b, p) {
    return {
        x: b.x + p.x,
        y: b.y + p.y,
        width: b.width,
        height: b.height
    };
}
exports.translate = translate;
/**
 * Returns the center point of the bounds of an object
 * @param {Bounds} b - Bounds object
 * @returns {Point} the center point
 */
function center(b) {
    return {
        x: b.x + (b.width >= 0 ? 0.5 * b.width : 0),
        y: b.y + (b.height >= 0 ? 0.5 * b.height : 0)
    };
}
exports.center = center;
/**
 * Checks whether the point p is included in the bounds b.
 */
function includes(b, p) {
    return p.x >= b.x && p.x <= b.x + b.width && p.y >= b.y && p.y <= b.y + b.height;
}
exports.includes = includes;
/**
 * Enumeration of possible directions (left, right, up, down)
 */
var Direction;
(function (Direction) {
    Direction[Direction["left"] = 0] = "left";
    Direction[Direction["right"] = 1] = "right";
    Direction[Direction["up"] = 2] = "up";
    Direction[Direction["down"] = 3] = "down";
})(Direction = exports.Direction || (exports.Direction = {}));
/**
 * Returns the "straight line" distance between two points
 * @param {Point} a - First point
 * @param {Point} b - Second point
 * @returns {number} The eucledian distance
 */
function euclideanDistance(a, b) {
    var dx = b.x - a.x;
    var dy = b.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
}
exports.euclideanDistance = euclideanDistance;
/**
 * Returns the distance between two points in a grid, using a
 * strictly vertical and/or horizontal path (versus straight line)
 * @param {Point} a - First point
 * @param {Point} b - Second point
 * @returns {number} The manhattan distance
 */
function manhattanDistance(a, b) {
    return Math.abs(b.x - a.x) + Math.abs(b.y - a.y);
}
exports.manhattanDistance = manhattanDistance;
/**
 * Returns the distance between two points in a grid, using a
 * strictly vertical and/or horizontal path (versus straight line)
 * @param {Point} a - First point
 * @param {Point} b - Second point
 * @returns {number} The manhattan distance
 */
function maxDistance(a, b) {
    return Math.max(Math.abs(b.x - a.x), Math.abs(b.y - a.y));
}
exports.maxDistance = maxDistance;
// range (-PI, PI]
function angle(a, b) {
    return Math.atan2(b.y - a.y, b.x - a.x);
}
exports.angle = angle;
/**
 * Converts from radians to degrees
 * @param {number} a - A value in radians
 * @returns {number} The converted value
 */
function toDegrees(a) {
    return a * 180 / Math.PI;
}
exports.toDegrees = toDegrees;
/**
 * Converts from degrees to radians
 * @param {number} a - A value in degrees
 * @returns {number} The converted value
 */
function toRadians(a) {
    return a * Math.PI / 180;
}
exports.toRadians = toRadians;
/**
 * Returns whether two numbers are almost equal, within a small margin (0.001)
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {boolean} True if the two numbers are almost equal
 */
function almostEquals(a, b) {
    return Math.abs(a - b) < 1e-3;
}
exports.almostEquals = almostEquals;
//# sourceMappingURL=geometry.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(78)('wks');
var uid = __webpack_require__(46);
var Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NAMED_TAG = "named";
exports.NAME_TAG = "name";
exports.UNMANAGED_TAG = "unmanaged";
exports.OPTIONAL_TAG = "optional";
exports.INJECT_TAG = "inject";
exports.MULTI_INJECT_TAG = "multi_inject";
exports.TAGGED = "inversify:tagged";
exports.TAGGED_PROP = "inversify:tagged_props";
exports.PARAM_TYPES = "inversify:paramtypes";
exports.DESIGN_PARAM_TYPES = "design:paramtypes";
exports.POST_CONSTRUCT = "post_construct";


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SVGNS = 'http://www.w3.org/2000/svg';
var modulesNS = ['hook', 'on', 'style', 'class', 'props', 'attrs', 'dataset'];
var slice = Array.prototype.slice;

function isPrimitive(val) {
  return  typeof val === 'string'   ||
          typeof val === 'number'   ||
          typeof val === 'boolean'  ||
          typeof val === 'symbol'   ||
          val === null              ||
          val === undefined;
}

function normalizeAttrs(attrs, nsURI, defNS, modules) {
  var map = { ns: nsURI };
  for (var i = 0, len = modules.length; i < len; i++) {
    var mod = modules[i];
    if(attrs[mod])
      map[mod] = attrs[mod];
  }
  for(var key in attrs) {
    if(key !== 'key' && key !== 'classNames' && key !== 'selector') {
      var idx = key.indexOf('-');
      if(idx > 0)
        addAttr(key.slice(0, idx), key.slice(idx+1), attrs[key]);
      else if(!map[key])
        addAttr(defNS, key, attrs[key]);
    }
  }
  return map;

  function addAttr(namespace, key, val) {
    var ns = map[namespace] || (map[namespace] = {});
    ns[key] = val;
  }
}

function buildFromStringTag(nsURI, defNS, modules, tag, attrs, children) {

  if(attrs.selector) {
    tag = tag + attrs.selector;
  }
  if(attrs.classNames) {
    var cns = attrs.classNames;
    tag = tag + '.' + (
      Array.isArray(cns) ? cns.join('.') : cns.replace(/\s+/g, '.')
    );
  }

  return {
    sel       : tag,
    data      : normalizeAttrs(attrs, nsURI, defNS, modules),
    children  : children.map( function(c) {
      return isPrimitive(c) ? {text: c} : c;
    }),
    key: attrs.key
  };
}

function buildFromComponent(nsURI, defNS, modules, tag, attrs, children) {
  var res;
  if(typeof tag === 'function')
    res = tag(attrs, children);
  else if(tag && typeof tag.view === 'function')
    res = tag.view(attrs, children);
  else if(tag && typeof tag.render === 'function')
    res = tag.render(attrs, children);
  else
    throw "JSX tag must be either a string, a function or an object with 'view' or 'render' methods";
  res.key = attrs.key;
  return res;
}

function flatten(nested, start, flat) {
  for (var i = start, len = nested.length; i < len; i++) {
    var item = nested[i];
    if (Array.isArray(item)) {
      flatten(item, 0, flat);
    } else {
      flat.push(item);
    }
  }
}

function maybeFlatten(array) {
  if (array) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (Array.isArray(array[i])) {
        var flat = array.slice(0, i);
        flatten(array, i, flat);
        array = flat;
        break;
      }
    }
  }
  return array;
}

function buildVnode(nsURI, defNS, modules, tag, attrs, children) {
  attrs = attrs || {};
  children = maybeFlatten(children);
  if(typeof tag === 'string') {
    return buildFromStringTag(nsURI, defNS, modules, tag, attrs, children)
  } else {
    return buildFromComponent(nsURI, defNS, modules, tag, attrs, children)
  }
}

function JSX(nsURI, defNS, modules) {
  return function jsxWithCustomNS(tag, attrs, children) {
    if(arguments.length > 3 || !Array.isArray(children))
      children = slice.call(arguments, 2);
    return buildVnode(nsURI, defNS || 'props', modules || modulesNS, tag, attrs, children);
  };
}

module.exports = {
  html: JSX(undefined),
  svg: JSX(SVGNS, 'attrs'),
  JSX: JSX
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
/**
 * Base class for all commands.
 */
var Command = /** @class */ (function () {
    function Command() {
    }
    return Command;
}());
exports.Command = Command;
/**
 * A mergeable command can accumulate subsequent commands of the same kind.
 *
 * For example, multiple subsequent move commands can be merged to yield a
 * single command, such that undo will roll them back altogether. Otherwise
 * the user would have to push CTRL-Z for each mouse move element that
 * resuted in a command.
 */
var MergeableCommand = /** @class */ (function (_super) {
    __extends(MergeableCommand, _super);
    function MergeableCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Tries to merge the given command with this.
     *
     * @param command
     * @param context
     */
    MergeableCommand.prototype.merge = function (command, context) {
        return false;
    };
    return MergeableCommand;
}(Command));
exports.MergeableCommand = MergeableCommand;
/**
 * A hidden command is used to trigger the rendering of a model on a
 * hidden canvas.
 *
 * Some graphical elements are styled using CSS, others have bounds that
 * require to layout their children before being computed. In such cases
 * we cannot tell about the size of elements without acutally rendering
 * the DOM. We render them to an invisible canvas. This can be achieved
 * using hidden commands.
 *
 * Hidden commands do not change the model directly, and are as such
 * neither undoable nor redoable. The command stack does not push them on
 * any stack and forwards the resulting model to the invisible viewer.
 */
var HiddenCommand = /** @class */ (function (_super) {
    __extends(HiddenCommand, _super);
    function HiddenCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HiddenCommand.prototype.undo = function (context) {
        context.logger.error(this, 'Cannot undo a hidden command');
        return context.root;
    };
    HiddenCommand.prototype.redo = function (context) {
        context.logger.error(this, 'Cannot redo a hidden command');
        return context.root;
    };
    return HiddenCommand;
}(Command));
exports.HiddenCommand = HiddenCommand;
var PopupCommand = /** @class */ (function (_super) {
    __extends(PopupCommand, _super);
    function PopupCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PopupCommand;
}(Command));
exports.PopupCommand = PopupCommand;
/**
 * A system command is triggered by the system, e.g. in order to update bounds
 * in the model with data fetched from the DOM.
 *
 * As it is automatically triggered it should not count as a single command in
 * undo/redo operations. Into the bargain, such an automatic command could occur
 * after an undo and as such make the next redo command invalid because it is
 * based on a model state that has changed. The command stack handles system
 * commands in a special way to overcome these issues.
 */
var SystemCommand = /** @class */ (function (_super) {
    __extends(SystemCommand, _super);
    function SystemCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SystemCommand;
}(Command));
exports.SystemCommand = SystemCommand;
var CommandActionHandler = /** @class */ (function () {
    function CommandActionHandler(commandType) {
        this.commandType = commandType;
    }
    CommandActionHandler.prototype.handle = function (action) {
        return new this.commandType(action);
    };
    return CommandActionHandler;
}());
exports.CommandActionHandler = CommandActionHandler;
var CommandActionHandlerInitializer = /** @class */ (function () {
    function CommandActionHandlerInitializer(commandCtrs) {
        this.commandCtrs = commandCtrs;
    }
    CommandActionHandlerInitializer.prototype.initialize = function (registry) {
        this.commandCtrs.forEach(function (commandCtr) { return registry.registerCommand(commandCtr); });
    };
    CommandActionHandlerInitializer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.multiInject(types_1.TYPES.ICommand)), __param(0, inversify_1.optional()),
        __metadata("design:paramtypes", [Array])
    ], CommandActionHandlerInitializer);
    return CommandActionHandlerInitializer;
}());
exports.CommandActionHandlerInitializer = CommandActionHandlerInitializer;
//# sourceMappingURL=command.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var geometry_1 = __webpack_require__(3);
var smodel_1 = __webpack_require__(2);
var smodel_utils_1 = __webpack_require__(13);
exports.boundsFeature = Symbol('boundsFeature');
exports.layoutContainerFeature = Symbol('layoutContainerFeature');
exports.layoutableChildFeature = Symbol('layoutableChildFeature');
exports.alignFeature = Symbol('alignFeature');
function isBoundsAware(element) {
    return 'bounds' in element;
}
exports.isBoundsAware = isBoundsAware;
function isLayoutContainer(element) {
    return 'layout' in element
        && isBoundsAware(element)
        && element.hasFeature(exports.layoutContainerFeature);
}
exports.isLayoutContainer = isLayoutContainer;
function isLayoutableChild(element) {
    return isBoundsAware(element)
        && element.hasFeature(exports.layoutableChildFeature);
}
exports.isLayoutableChild = isLayoutableChild;
function isSizeable(element) {
    return element.hasFeature(exports.boundsFeature) && isBoundsAware(element);
}
exports.isSizeable = isSizeable;
function isAlignable(element) {
    return 'alignment' in element
        && element.hasFeature(exports.alignFeature);
}
exports.isAlignable = isAlignable;
function getAbsoluteBounds(element) {
    var boundsAware = smodel_utils_1.findParentByFeature(element, isBoundsAware);
    if (boundsAware !== undefined) {
        var bounds = boundsAware.bounds;
        var current = boundsAware;
        while (current instanceof smodel_1.SChildElement) {
            var parent_1 = current.parent;
            bounds = parent_1.localToParent(bounds);
            current = parent_1;
        }
        return bounds;
    }
    else {
        return geometry_1.EMPTY_BOUNDS;
    }
}
exports.getAbsoluteBounds = getAbsoluteBounds;
/**
 * Abstract class for elements with a position and a size.
 */
var SShapeElement = /** @class */ (function (_super) {
    __extends(SShapeElement, _super);
    function SShapeElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.position = geometry_1.ORIGIN_POINT;
        _this.size = geometry_1.EMPTY_DIMENSION;
        return _this;
    }
    Object.defineProperty(SShapeElement.prototype, "bounds", {
        get: function () {
            return {
                x: this.position.x,
                y: this.position.y,
                width: this.size.width,
                height: this.size.height
            };
        },
        set: function (newBounds) {
            this.position = {
                x: newBounds.x,
                y: newBounds.y
            };
            this.size = {
                width: newBounds.width,
                height: newBounds.height
            };
        },
        enumerable: true,
        configurable: true
    });
    SShapeElement.prototype.localToParent = function (point) {
        var result = {
            x: point.x + this.position.x,
            y: point.y + this.position.y,
            width: -1,
            height: -1
        };
        if (geometry_1.isBounds(point)) {
            result.width = point.width;
            result.height = point.height;
        }
        return result;
    };
    SShapeElement.prototype.parentToLocal = function (point) {
        var result = {
            x: point.x - this.position.x,
            y: point.y - this.position.y,
            width: -1,
            height: -1
        };
        if (geometry_1.isBounds(point)) {
            result.width = point.width;
            result.height = point.height;
        }
        return result;
    };
    return SShapeElement;
}(smodel_1.SChildElement));
exports.SShapeElement = SShapeElement;
//# sourceMappingURL=model.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(20);
var hide = __webpack_require__(26);
var redefine = __webpack_require__(28);
var ctx = __webpack_require__(37);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
var fails = __webpack_require__(24);
var defined = __webpack_require__(22);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
exports.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
exports.NULL_ARGUMENT = "NULL argument";
exports.KEY_NOT_FOUND = "Key Not Found";
exports.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
exports.CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
exports.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
exports.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
exports.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
exports.UNDEFINED_INJECT_ANNOTATION = function (name) {
    return "@inject called with undefined this could mean that the class " + name + " has " +
        "a circular dependency problem. You can use a LazyServiceIdentifer to  " +
        "overcome this limitation.";
};
exports.CIRCULAR_DEPENDENCY = "Circular dependency found:";
exports.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
exports.INVALID_BINDING_TYPE = "Invalid binding type:";
exports.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
exports.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
exports.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
exports.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is " +
    "used as service identifier";
exports.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators " +
    "must be applied to the parameters of a class constructor or a class property.";
exports.ARGUMENTS_LENGTH_MISMATCH_1 = "The number of constructor arguments in the derived class ";
exports.ARGUMENTS_LENGTH_MISMATCH_2 = " must be >= than the number of constructor arguments of its base class.";
exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options " +
    "must be an object.";
exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must " +
    "be a string ('singleton' or 'transient').";
exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must " +
    "be a boolean";
exports.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
exports.POST_CONSTRUCT_ERROR = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return "@postConstruct error in class " + values[0] + ": " + values[1];
};
exports.CIRCULAR_DEPENDENCY_IN_FACTORY = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return "It looks like there is a circular dependency " +
        ("in one of the '" + values[0] + "' bindings. Please investigate bindings with") +
        ("service identifier '" + values[1] + "'.");
};
exports.STACK_OVERFLOW = "Maximum call stack size exceeded";


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var smodel_1 = __webpack_require__(2);
/**
 * Model element types can include a colon to separate the basic type and a sub-type. This function
 * extracts the basic type of a model element.
 */
function getBasicType(schema) {
    if (!schema.type)
        return '';
    var colonIndex = schema.type.indexOf(':');
    if (colonIndex >= 0)
        return schema.type.substring(0, colonIndex);
    else
        return schema.type;
}
exports.getBasicType = getBasicType;
/**
 * Model element types can include a colon to separate the basic type and a sub-type. This function
 * extracts the sub-type of a model element.
 */
function getSubType(schema) {
    if (!schema.type)
        return '';
    var colonIndex = schema.type.indexOf(':');
    if (colonIndex >= 0)
        return schema.type.substring(colonIndex + 1);
    else
        return schema.type;
}
exports.getSubType = getSubType;
/**
 * Find the element with the given identifier. If you need to find multiple elements, using an
 * SModelIndex might be more effective.
 */
function findElement(parent, elementId) {
    if (parent.id === elementId)
        return parent;
    if (parent.children !== undefined) {
        for (var _i = 0, _a = parent.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var result = findElement(child, elementId);
            if (result !== undefined)
                return result;
        }
    }
    return undefined;
}
exports.findElement = findElement;
/**
 * Find a parent element that satisfies the given predicate.
 */
function findParent(element, predicate) {
    var current = element;
    while (current !== undefined) {
        if (predicate(current))
            return current;
        else if (current instanceof smodel_1.SChildElement)
            current = current.parent;
        else
            current = undefined;
    }
    return current;
}
exports.findParent = findParent;
/**
 * Find a parent element that implements the feature identified with the given predicate.
 */
function findParentByFeature(element, predicate) {
    var current = element;
    while (current !== undefined) {
        if (predicate(current))
            return current;
        else if (current instanceof smodel_1.SChildElement)
            current = current.parent;
        else
            current = undefined;
    }
    return current;
}
exports.findParentByFeature = findParentByFeature;
/**
 * Translate a point from the coordinate system of the source element to the coordinate system
 * of the target element.
 */
function translatePoint(point, source, target) {
    if (source !== target) {
        // Translate from the source to the root element
        while (source instanceof smodel_1.SChildElement) {
            point = source.localToParent(point);
            source = source.parent;
            if (source === target)
                return point;
        }
        // Translate from the root to the target element
        var targetTrace = [];
        while (target instanceof smodel_1.SChildElement) {
            targetTrace.push(target);
            target = target.parent;
        }
        if (source !== target)
            throw new Error("Incompatible source and target: " + source.id + ", " + target.id);
        for (var i = targetTrace.length - 1; i >= 0; i--) {
            point = targetTrace[i].parentToLocal(point);
        }
    }
    return point;
}
exports.translatePoint = translatePoint;
//# sourceMappingURL=smodel-utils.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
// ------------------ Base ------------------
__export(__webpack_require__(86));
__export(__webpack_require__(85));
__export(__webpack_require__(38));
__export(__webpack_require__(48));
__export(__webpack_require__(39));
__export(__webpack_require__(129));
__export(__webpack_require__(247));
__export(__webpack_require__(130));
__export(__webpack_require__(8));
__export(__webpack_require__(60));
__export(__webpack_require__(49));
__export(__webpack_require__(17));
__export(__webpack_require__(87));
__export(__webpack_require__(13));
__export(__webpack_require__(2));
__export(__webpack_require__(35));
__export(__webpack_require__(30));
__export(__webpack_require__(131));
__export(__webpack_require__(132));
__export(__webpack_require__(133));
__export(__webpack_require__(250));
__export(__webpack_require__(134));
__export(__webpack_require__(135));
__export(__webpack_require__(18));
__export(__webpack_require__(1));
var di_config_1 = __webpack_require__(248);
exports.defaultModule = di_config_1.default;
// ------------------ Features ------------------
__export(__webpack_require__(50));
__export(__webpack_require__(90));
__export(__webpack_require__(9));
__export(__webpack_require__(138));
__export(__webpack_require__(136));
__export(__webpack_require__(137));
__export(__webpack_require__(91));
__export(__webpack_require__(92));
__export(__webpack_require__(61));
__export(__webpack_require__(93));
__export(__webpack_require__(256));
__export(__webpack_require__(139));
__export(__webpack_require__(62));
__export(__webpack_require__(40));
__export(__webpack_require__(94));
__export(__webpack_require__(51));
__export(__webpack_require__(52));
__export(__webpack_require__(63));
__export(__webpack_require__(41));
__export(__webpack_require__(64));
__export(__webpack_require__(95));
__export(__webpack_require__(140));
__export(__webpack_require__(31));
__export(__webpack_require__(141));
__export(__webpack_require__(96));
__export(__webpack_require__(97));
__export(__webpack_require__(98));
__export(__webpack_require__(99));
__export(__webpack_require__(32));
__export(__webpack_require__(142));
__export(__webpack_require__(100));
__export(__webpack_require__(42));
__export(__webpack_require__(143));
var di_config_2 = __webpack_require__(262);
exports.moveModule = di_config_2.default;
var di_config_3 = __webpack_require__(251);
exports.boundsModule = di_config_3.default;
var di_config_4 = __webpack_require__(258);
exports.fadeModule = di_config_4.default;
var di_config_5 = __webpack_require__(264);
exports.selectModule = di_config_5.default;
var di_config_6 = __webpack_require__(265);
exports.undoRedoModule = di_config_6.default;
var di_config_7 = __webpack_require__(266);
exports.viewportModule = di_config_7.default;
var di_config_8 = __webpack_require__(259);
exports.hoverModule = di_config_8.default;
var di_config_9 = __webpack_require__(257);
exports.exportModule = di_config_9.default;
var di_config_10 = __webpack_require__(255);
exports.expandModule = di_config_10.default;
var di_config_11 = __webpack_require__(263);
exports.openModule = di_config_11.default;
var di_config_12 = __webpack_require__(254);
exports.buttonModule = di_config_12.default;
// ------------------ Graph ------------------
__export(__webpack_require__(267));
__export(__webpack_require__(101));
__export(__webpack_require__(144));
// ------------------ Library ------------------
__export(__webpack_require__(268));
__export(__webpack_require__(269));
__export(__webpack_require__(270));
__export(__webpack_require__(271));
// ------------------ Model Source ------------------
__export(__webpack_require__(145));
__export(__webpack_require__(146));
__export(__webpack_require__(273));
__export(__webpack_require__(274));
__export(__webpack_require__(102));
__export(__webpack_require__(275));
var di_config_13 = __webpack_require__(272);
exports.modelSourceModule = di_config_13.default;
// ------------------ Utilities ------------------
__export(__webpack_require__(276));
__export(__webpack_require__(3));
__export(__webpack_require__(103));
__export(__webpack_require__(53));
//# sourceMappingURL=index.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(5);
var Metadata = (function () {
    function Metadata(key, value) {
        this.key = key;
        this.value = value;
    }
    Metadata.prototype.toString = function () {
        if (this.key === METADATA_KEY.NAMED_TAG) {
            return "named: " + this.value.toString() + " ";
        }
        else {
            return "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }";
        }
    };
    return Metadata;
}());
exports.Metadata = Metadata;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var smodel_1 = __webpack_require__(2);
/**
 * The default model factory creates SModelRoot for the root element and SChildElement for all other
 * model elements.
 */
var SModelFactory = /** @class */ (function () {
    function SModelFactory() {
    }
    SModelFactory.prototype.createElement = function (schema, parent) {
        return this.initializeChild(new smodel_1.SChildElement(), schema, parent);
    };
    SModelFactory.prototype.createRoot = function (schema) {
        return this.initializeRoot(new smodel_1.SModelRoot(), schema);
    };
    SModelFactory.prototype.createSchema = function (element) {
        var _this = this;
        var schema = {};
        for (var key in element) {
            if (!this.isReserved(element, key)) {
                var value = element[key];
                if (typeof value !== 'function')
                    schema[key] = value;
            }
        }
        if (element instanceof smodel_1.SParentElement)
            schema['children'] = element.children.map(function (child) { return _this.createSchema(child); });
        return schema;
    };
    SModelFactory.prototype.initializeElement = function (element, schema) {
        for (var key in schema) {
            if (!this.isReserved(element, key)) {
                var value = schema[key];
                if (typeof value !== 'function')
                    element[key] = value;
            }
        }
        return element;
    };
    SModelFactory.prototype.isReserved = function (element, propertyName) {
        if (['children', 'parent', 'index'].indexOf(propertyName) >= 0)
            return true;
        var obj = element;
        do {
            var descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);
            if (descriptor !== undefined)
                return descriptor.get !== undefined;
            obj = Object.getPrototypeOf(obj);
        } while (obj);
        return false;
    };
    SModelFactory.prototype.initializeParent = function (parent, schema) {
        var _this = this;
        this.initializeElement(parent, schema);
        if (schema.children !== undefined && schema.children.constructor === Array) {
            parent.children = schema.children.map(function (childSchema) { return _this.createElement(childSchema, parent); });
        }
        return parent;
    };
    SModelFactory.prototype.initializeChild = function (child, schema, parent) {
        this.initializeParent(child, schema);
        if (parent !== undefined) {
            child.parent = parent;
        }
        return child;
    };
    SModelFactory.prototype.initializeRoot = function (root, schema) {
        this.initializeParent(root, schema);
        root.index.add(root);
        return root;
    };
    SModelFactory = __decorate([
        inversify_1.injectable()
    ], SModelFactory);
    return SModelFactory;
}());
exports.SModelFactory = SModelFactory;
exports.EMPTY_ROOT = Object.freeze({
    type: 'NONE',
    id: 'EMPTY'
});
//# sourceMappingURL=smodel-factory.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function setAttr(vnode, name, value) {
    getAttrs(vnode)[name] = value;
}
exports.setAttr = setAttr;
function setClass(vnode, name, value) {
    getClass(vnode)[name] = value;
}
exports.setClass = setClass;
function copyClassesFromVNode(source, target) {
    var classList = getClass(source);
    for (var c in classList) {
        setClass(target, c, true);
    }
}
exports.copyClassesFromVNode = copyClassesFromVNode;
function copyClassesFromElement(element, target) {
    var classList = element.classList;
    for (var i = 0; i < classList.length; i++) {
        setClass(target, classList.item(i), true);
    }
}
exports.copyClassesFromElement = copyClassesFromElement;
function mergeStyle(vnode, style) {
    getData(vnode).style = __assign({}, (getData(vnode).style || {}), style);
}
exports.mergeStyle = mergeStyle;
function on(vnode, event, listener, element) {
    var on = getOn(vnode);
    if (on[event]) {
        throw new Error('EventListener for ' + event + ' already registered on VNode');
    }
    on[event] = [listener, element];
}
exports.on = on;
function getAttrs(vnode) {
    var data = getData(vnode);
    if (!data.attrs)
        data.attrs = {};
    return data.attrs;
}
exports.getAttrs = getAttrs;
function getData(vnode) {
    if (!vnode.data)
        vnode.data = {};
    return vnode.data;
}
function getClass(vnode) {
    var data = getData(vnode);
    if (!data.class)
        data.class = {};
    return data.class;
}
function getOn(vnode) {
    var data = getData(vnode);
    if (!data.on)
        data.on = {};
    return data.on;
}
//# sourceMappingURL=vnode-utils.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BindingScopeEnum = {
    Request: "Request",
    Singleton: "Singleton",
    Transient: "Transient"
};
exports.BindingScopeEnum = BindingScopeEnum;
var BindingTypeEnum = {
    ConstantValue: "ConstantValue",
    Constructor: "Constructor",
    DynamicValue: "DynamicValue",
    Factory: "Factory",
    Function: "Function",
    Instance: "Instance",
    Invalid: "Invalid",
    Provider: "Provider"
};
exports.BindingTypeEnum = BindingTypeEnum;
var TargetTypeEnum = {
    ClassProperty: "ClassProperty",
    ConstructorArgument: "ConstructorArgument",
    Variable: "Variable"
};
exports.TargetTypeEnum = TargetTypeEnum;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(24)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(27);
var createDesc = __webpack_require__(58);
module.exports = __webpack_require__(23) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(105);
var toPrimitive = __webpack_require__(80);
var dP = Object.defineProperty;

exports.f = __webpack_require__(23) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var hide = __webpack_require__(26);
var has = __webpack_require__(25);
var SRC = __webpack_require__(46)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(20).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(12);
var METADATA_KEY = __webpack_require__(5);
function tagParameter(annotationTarget, propertyName, parameterIndex, metadata) {
    var metadataKey = METADATA_KEY.TAGGED;
    _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex);
}
exports.tagParameter = tagParameter;
function tagProperty(annotationTarget, propertyName, metadata) {
    var metadataKey = METADATA_KEY.TAGGED_PROP;
    _tagParameterOrProperty(metadataKey, annotationTarget.constructor, propertyName, metadata);
}
exports.tagProperty = tagProperty;
function _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex) {
    var paramsOrPropertiesMetadata = {};
    var isParameterDecorator = (typeof parameterIndex === "number");
    var key = (parameterIndex !== undefined && isParameterDecorator) ? parameterIndex.toString() : propertyName;
    if (isParameterDecorator && propertyName !== undefined) {
        throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
    }
    if (Reflect.hasOwnMetadata(metadataKey, annotationTarget)) {
        paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
    }
    var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
    if (!Array.isArray(paramOrPropertyMetadata)) {
        paramOrPropertyMetadata = [];
    }
    else {
        for (var _i = 0, paramOrPropertyMetadata_1 = paramOrPropertyMetadata; _i < paramOrPropertyMetadata_1.length; _i++) {
            var m = paramOrPropertyMetadata_1[_i];
            if (m.key === metadata.key) {
                throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + m.key);
            }
        }
    }
    paramOrPropertyMetadata.push(metadata);
    paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
    Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
}
function _decorate(decorators, target) {
    Reflect.decorate(decorators, target);
}
function _param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
function decorate(decorator, target, parameterIndex) {
    if (typeof parameterIndex === "number") {
        _decorate([_param(parameterIndex, decorator)], target);
    }
    else if (typeof parameterIndex === "string") {
        Reflect.decorate([decorator], target, parameterIndex);
    }
    else {
        _decorate([decorator], target);
    }
}
exports.decorate = decorate;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var smodel_1 = __webpack_require__(2);
var action_1 = __webpack_require__(86);
var vnode_utils_1 = __webpack_require__(18);
var dom_helper_1 = __webpack_require__(88);
var MouseTool = /** @class */ (function () {
    function MouseTool(actionDispatcher, domHelper, mouseListeners) {
        if (mouseListeners === void 0) { mouseListeners = []; }
        this.actionDispatcher = actionDispatcher;
        this.domHelper = domHelper;
        this.mouseListeners = mouseListeners;
    }
    MouseTool.prototype.register = function (mouseListener) {
        this.mouseListeners.push(mouseListener);
    };
    MouseTool.prototype.deregister = function (mouseListener) {
        var index = this.mouseListeners.indexOf(mouseListener);
        if (index >= 0)
            this.mouseListeners.splice(index, 1);
    };
    MouseTool.prototype.getTargetElement = function (model, event) {
        var target = event.target;
        var index = model.index;
        while (target) {
            if (target.id) {
                var element = index.getById(this.domHelper.findSModelIdByDOMElement(target));
                if (element !== undefined)
                    return element;
            }
            target = target.parentNode;
        }
        return undefined;
    };
    MouseTool.prototype.handleEvent = function (methodName, model, event) {
        var _this = this;
        this.focusOnMouseEvent(methodName, model);
        var element = this.getTargetElement(model, event);
        if (!element)
            return;
        var actions = this.mouseListeners
            .map(function (listener) { return listener[methodName].apply(listener, [element, event]); })
            .reduce(function (a, b) { return a.concat(b); });
        if (actions.length > 0) {
            event.preventDefault();
            for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
                var actionOrPromise = actions_1[_i];
                if (action_1.isAction(actionOrPromise)) {
                    this.actionDispatcher.dispatch(actionOrPromise);
                }
                else {
                    actionOrPromise.then(function (action) {
                        _this.actionDispatcher.dispatch(action);
                    });
                }
            }
        }
    };
    MouseTool.prototype.focusOnMouseEvent = function (methodName, model) {
        if (document) {
            var domElement = document.getElementById(this.domHelper.createUniqueDOMElementId(model));
            if (methodName === 'mouseDown' && domElement !== null && typeof domElement.focus === 'function')
                domElement.focus();
        }
    };
    MouseTool.prototype.mouseOver = function (model, event) {
        this.handleEvent('mouseOver', model, event);
    };
    MouseTool.prototype.mouseOut = function (model, event) {
        this.handleEvent('mouseOut', model, event);
    };
    MouseTool.prototype.mouseEnter = function (model, event) {
        this.handleEvent('mouseEnter', model, event);
    };
    MouseTool.prototype.mouseLeave = function (model, event) {
        this.handleEvent('mouseLeave', model, event);
    };
    MouseTool.prototype.mouseDown = function (model, event) {
        this.handleEvent('mouseDown', model, event);
    };
    MouseTool.prototype.mouseMove = function (model, event) {
        this.handleEvent('mouseMove', model, event);
    };
    MouseTool.prototype.mouseUp = function (model, event) {
        this.handleEvent('mouseUp', model, event);
    };
    MouseTool.prototype.wheel = function (model, event) {
        this.handleEvent('wheel', model, event);
    };
    MouseTool.prototype.doubleClick = function (model, event) {
        this.handleEvent('doubleClick', model, event);
    };
    MouseTool.prototype.decorate = function (vnode, element) {
        if (element instanceof smodel_1.SModelRoot) {
            vnode_utils_1.on(vnode, 'mouseover', this.mouseOver.bind(this), element);
            vnode_utils_1.on(vnode, 'mouseout', this.mouseOut.bind(this), element);
            vnode_utils_1.on(vnode, 'mouseenter', this.mouseEnter.bind(this), element);
            vnode_utils_1.on(vnode, 'mouseleave', this.mouseLeave.bind(this), element);
            vnode_utils_1.on(vnode, 'mousedown', this.mouseDown.bind(this), element);
            vnode_utils_1.on(vnode, 'mouseup', this.mouseUp.bind(this), element);
            vnode_utils_1.on(vnode, 'mousemove', this.mouseMove.bind(this), element);
            vnode_utils_1.on(vnode, 'wheel', this.wheel.bind(this), element);
            vnode_utils_1.on(vnode, 'contextmenu', function (target, event) {
                event.preventDefault();
            }, element);
            vnode_utils_1.on(vnode, 'dblclick', this.doubleClick.bind(this), element);
        }
        vnode = this.mouseListeners.reduce(function (vnode, listener) { return listener.decorate(vnode, element); }, vnode);
        return vnode;
    };
    MouseTool.prototype.postUpdate = function () {
    };
    MouseTool = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.IActionDispatcher)),
        __param(1, inversify_1.inject(types_1.TYPES.DOMHelper)),
        __param(2, inversify_1.multiInject(types_1.TYPES.MouseListener)), __param(2, inversify_1.optional()),
        __metadata("design:paramtypes", [Object, dom_helper_1.DOMHelper, Array])
    ], MouseTool);
    return MouseTool;
}());
exports.MouseTool = MouseTool;
var PopupMouseTool = /** @class */ (function (_super) {
    __extends(PopupMouseTool, _super);
    function PopupMouseTool(actionDispatcher, domHelper, mouseListeners) {
        if (mouseListeners === void 0) { mouseListeners = []; }
        var _this = _super.call(this, actionDispatcher, domHelper, mouseListeners) || this;
        _this.actionDispatcher = actionDispatcher;
        _this.domHelper = domHelper;
        _this.mouseListeners = mouseListeners;
        return _this;
    }
    PopupMouseTool = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.IActionDispatcher)),
        __param(1, inversify_1.inject(types_1.TYPES.DOMHelper)),
        __param(2, inversify_1.multiInject(types_1.TYPES.PopupMouseListener)), __param(2, inversify_1.optional()),
        __metadata("design:paramtypes", [Object, dom_helper_1.DOMHelper, Array])
    ], PopupMouseTool);
    return PopupMouseTool;
}(MouseTool));
exports.PopupMouseTool = PopupMouseTool;
var MouseListener = /** @class */ (function () {
    function MouseListener() {
    }
    MouseListener.prototype.mouseOver = function (target, event) {
        return [];
    };
    MouseListener.prototype.mouseOut = function (target, event) {
        return [];
    };
    MouseListener.prototype.mouseEnter = function (target, event) {
        return [];
    };
    MouseListener.prototype.mouseLeave = function (target, event) {
        return [];
    };
    MouseListener.prototype.mouseDown = function (target, event) {
        return [];
    };
    MouseListener.prototype.mouseMove = function (target, event) {
        return [];
    };
    MouseListener.prototype.mouseUp = function (target, event) {
        return [];
    };
    MouseListener.prototype.wheel = function (target, event) {
        return [];
    };
    MouseListener.prototype.doubleClick = function (target, event) {
        return [];
    };
    MouseListener.prototype.decorate = function (vnode, element) {
        return vnode;
    };
    MouseListener = __decorate([
        inversify_1.injectable()
    ], MouseListener);
    return MouseListener;
}());
exports.MouseListener = MouseListener;
//# sourceMappingURL=mouse-tool.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectFeature = Symbol('selectFeature');
function isSelectable(element) {
    return element.hasFeature(exports.selectFeature);
}
exports.isSelectable = isSelectable;
//# sourceMappingURL=model.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var smodel_1 = __webpack_require__(2);
exports.viewportFeature = Symbol('viewportFeature');
function isViewport(element) {
    return element instanceof smodel_1.SModelRoot
        && element.hasFeature(exports.viewportFeature)
        && 'zoom' in element
        && 'scroll' in element;
}
exports.isViewport = isViewport;
//# sourceMappingURL=model.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(163);
var defined = __webpack_require__(22);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function guid() {
    function s4() {
        return Math.floor((Math.random() + 1) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
        s4() + "-" + s4() + s4() + s4();
}
exports.guid = guid;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var smodel_1 = __webpack_require__(2);
var vnode_utils_1 = __webpack_require__(18);
var KeyTool = /** @class */ (function () {
    function KeyTool(actionDispatcher, keyListeners) {
        if (keyListeners === void 0) { keyListeners = []; }
        this.actionDispatcher = actionDispatcher;
        this.keyListeners = keyListeners;
    }
    KeyTool.prototype.register = function (keyListener) {
        this.keyListeners.push(keyListener);
    };
    KeyTool.prototype.deregister = function (keyListener) {
        var index = this.keyListeners.indexOf(keyListener);
        if (index >= 0)
            this.keyListeners.splice(index, 1);
    };
    KeyTool.prototype.handleEvent = function (methodName, model, event) {
        var actions = this.keyListeners
            .map(function (listener) { return listener[methodName].apply(listener, [model, event]); })
            .reduce(function (a, b) { return a.concat(b); });
        if (actions.length > 0) {
            event.preventDefault();
            this.actionDispatcher.dispatchAll(actions);
        }
    };
    KeyTool.prototype.keyDown = function (element, event) {
        this.handleEvent('keyDown', element, event);
    };
    KeyTool.prototype.focus = function () { };
    KeyTool.prototype.decorate = function (vnode, element) {
        if (element instanceof smodel_1.SModelRoot) {
            vnode_utils_1.on(vnode, 'focus', this.focus.bind(this), element);
            vnode_utils_1.on(vnode, 'keydown', this.keyDown.bind(this), element);
        }
        return vnode;
    };
    KeyTool.prototype.postUpdate = function () {
    };
    KeyTool = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.IActionDispatcher)),
        __param(1, inversify_1.multiInject(types_1.TYPES.KeyListener)), __param(1, inversify_1.optional()),
        __metadata("design:paramtypes", [Object, Array])
    ], KeyTool);
    return KeyTool;
}());
exports.KeyTool = KeyTool;
var KeyListener = /** @class */ (function () {
    function KeyListener() {
    }
    KeyListener.prototype.keyDown = function (element, event) {
        return [];
    };
    KeyListener = __decorate([
        inversify_1.injectable()
    ], KeyListener);
    return KeyListener;
}());
exports.KeyListener = KeyListener;
//# sourceMappingURL=key-tool.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(54);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var registry_1 = __webpack_require__(53);
var command_1 = __webpack_require__(8);
/**
 * The action handler registry maps actions to their handlers using the Action.kind property.
 */
var ActionHandlerRegistry = /** @class */ (function (_super) {
    __extends(ActionHandlerRegistry, _super);
    function ActionHandlerRegistry(initializers) {
        var _this = _super.call(this) || this;
        initializers.forEach(function (initializer) { return _this.initializeActionHandler(initializer); });
        return _this;
    }
    ActionHandlerRegistry.prototype.registerCommand = function (commandType) {
        this.register(commandType.KIND, new command_1.CommandActionHandler(commandType));
    };
    ActionHandlerRegistry.prototype.initializeActionHandler = function (initializer) {
        initializer.initialize(this);
    };
    ActionHandlerRegistry = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.multiInject(types_1.TYPES.IActionHandlerInitializer)), __param(0, inversify_1.optional()),
        __metadata("design:paramtypes", [Array])
    ], ActionHandlerRegistry);
    return ActionHandlerRegistry;
}(registry_1.MultiInstanceRegistry));
exports.ActionHandlerRegistry = ActionHandlerRegistry;
//# sourceMappingURL=action-handler.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var easing_1 = __webpack_require__(129);
/**
 * An animation uses the rendering loop of the browser to smoothly
 * calculate a transition between two states of a model element.
 */
var Animation = /** @class */ (function () {
    function Animation(context, ease) {
        if (ease === void 0) { ease = easing_1.easeInOut; }
        this.context = context;
        this.ease = ease;
    }
    Animation.prototype.start = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var start = undefined;
            var frames = 0;
            var lambda = function (time) {
                frames++;
                var dtime;
                if (start === undefined) {
                    start = time;
                    dtime = 0;
                }
                else {
                    dtime = time - start;
                }
                var t = Math.min(1, dtime / _this.context.duration);
                var current = _this.tween(_this.ease(t), _this.context);
                _this.context.modelChanged.update(current);
                if (t === 1) {
                    _this.context.logger.log(_this, (frames * 1000 / _this.context.duration) + ' fps');
                    resolve(current);
                }
                else {
                    _this.context.syncer.onNextFrame(lambda);
                }
            };
            if (_this.context.syncer.isAvailable()) {
                _this.context.syncer.onNextFrame(lambda);
            }
            else {
                var finalModel = _this.tween(1, _this.context);
                resolve(finalModel);
            }
        });
    };
    return Animation;
}());
exports.Animation = Animation;
var CompoundAnimation = /** @class */ (function (_super) {
    __extends(CompoundAnimation, _super);
    function CompoundAnimation(model, context, components, ease) {
        if (components === void 0) { components = []; }
        if (ease === void 0) { ease = easing_1.easeInOut; }
        var _this = _super.call(this, context, ease) || this;
        _this.model = model;
        _this.context = context;
        _this.components = components;
        _this.ease = ease;
        return _this;
    }
    CompoundAnimation.prototype.include = function (animation) {
        this.components.push(animation);
        return this;
    };
    CompoundAnimation.prototype.tween = function (t, context) {
        for (var _i = 0, _a = this.components; _i < _a.length; _i++) {
            var a = _a[_i];
            a.tween(t, context);
        }
        return this.model;
    };
    return CompoundAnimation;
}(Animation));
exports.CompoundAnimation = CompoundAnimation;
//# sourceMappingURL=animation.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(9);
var action_dispatcher_1 = __webpack_require__(85);
var types_1 = __webpack_require__(1);
var geometry_1 = __webpack_require__(3);
var inversify_1 = __webpack_require__(0);
var ExportSvgAction = /** @class */ (function () {
    function ExportSvgAction(svg) {
        this.svg = svg;
        this.kind = ExportSvgAction.KIND;
    }
    ExportSvgAction.KIND = 'exportSvg';
    return ExportSvgAction;
}());
exports.ExportSvgAction = ExportSvgAction;
var SvgExporter = /** @class */ (function () {
    function SvgExporter(options, actionDispatcher, log) {
        this.options = options;
        this.actionDispatcher = actionDispatcher;
        this.log = log;
    }
    SvgExporter.prototype.export = function (root) {
        if (typeof document !== 'undefined') {
            var div = document.getElementById(this.options.hiddenDiv);
            if (div !== null && div.firstElementChild && div.firstElementChild.tagName === 'svg') {
                var svgElement = div.firstElementChild;
                var svg = this.createSvg(svgElement, root);
                this.actionDispatcher.dispatch(new ExportSvgAction(svg));
            }
        }
    };
    SvgExporter.prototype.createSvg = function (svgElementOrig, root) {
        var serializer = new XMLSerializer();
        var svgCopy = serializer.serializeToString(svgElementOrig);
        var iframe = document.createElement('iframe');
        document.body.appendChild(iframe);
        var docCopy = iframe.contentWindow.document;
        docCopy.open();
        docCopy.write(svgCopy);
        docCopy.close();
        var svgElementNew = docCopy.getElementById(svgElementOrig.id);
        svgElementNew.removeAttribute('opacity');
        this.copyStyles(svgElementOrig, svgElementNew, ['width', 'height', 'opacity']);
        svgElementNew.setAttribute('version', '1.1');
        var bounds = this.getBounds(root);
        svgElementNew.setAttribute('viewBox', bounds.x + " " + bounds.y + " " + bounds.width + " " + bounds.height);
        var svgCode = serializer.serializeToString(svgElementNew);
        document.body.removeChild(iframe);
        return svgCode;
    };
    SvgExporter.prototype.copyStyles = function (source, target, skipedProperties) {
        var sourceStyle = getComputedStyle(source);
        var targetStyle = getComputedStyle(target);
        var diffStyle = '';
        for (var i = 0; i < sourceStyle.length; i++) {
            var key = sourceStyle[i];
            if (skipedProperties.indexOf(key) === -1) {
                var value = sourceStyle.getPropertyValue(key);
                if (targetStyle.getPropertyValue(key) !== value) {
                    diffStyle += key + ":" + value + ";";
                }
            }
        }
        if (diffStyle !== '')
            target.setAttribute('style', diffStyle);
        // IE doesn't retrun anything on source.children
        for (var i = 0; i < source.childNodes.length; ++i) {
            var sourceChild = source.childNodes[i];
            var targetChild = target.childNodes[i];
            if (sourceChild instanceof Element)
                this.copyStyles(sourceChild, targetChild, []);
        }
    };
    SvgExporter.prototype.getBounds = function (root) {
        var allBounds = [geometry_1.EMPTY_BOUNDS];
        root.children.forEach(function (element) {
            if (model_1.isBoundsAware(element)) {
                allBounds.push(element.bounds);
            }
        });
        return allBounds.reduce(function (one, two) { return geometry_1.combine(one, two); });
    };
    SvgExporter = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.ViewerOptions)),
        __param(1, inversify_1.inject(types_1.TYPES.IActionDispatcher)),
        __param(2, inversify_1.inject(types_1.TYPES.ILogger)),
        __metadata("design:paramtypes", [Object, action_dispatcher_1.ActionDispatcher, Object])
    ], SvgExporter);
    return SvgExporter;
}());
exports.SvgExporter = SvgExporter;
//# sourceMappingURL=svg-exporter.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveFeature = Symbol('moveFeature');
function isLocateable(element) {
    return element['position'] !== undefined;
}
exports.isLocateable = isLocateable;
function isMoveable(element) {
    return element.hasFeature(exports.moveFeature) && isLocateable(element);
}
exports.isMoveable = isMoveable;
//# sourceMappingURL=model.js.map

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var command_1 = __webpack_require__(8);
var animation_1 = __webpack_require__(39);
var model_1 = __webpack_require__(32);
var ViewportAction = /** @class */ (function () {
    function ViewportAction(elementId, newViewport, animate) {
        this.elementId = elementId;
        this.newViewport = newViewport;
        this.animate = animate;
        this.kind = ViewportCommand.KIND;
    }
    return ViewportAction;
}());
exports.ViewportAction = ViewportAction;
var ViewportCommand = /** @class */ (function (_super) {
    __extends(ViewportCommand, _super);
    function ViewportCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        _this.newViewport = action.newViewport;
        return _this;
    }
    ViewportCommand.prototype.execute = function (context) {
        var model = context.root;
        var element = model.index.getById(this.action.elementId);
        if (element && model_1.isViewport(element)) {
            this.element = element;
            this.oldViewport = {
                scroll: this.element.scroll,
                zoom: this.element.zoom,
            };
            if (this.action.animate)
                return new ViewportAnimation(this.element, this.oldViewport, this.newViewport, context).start();
            else {
                this.element.scroll = this.newViewport.scroll;
                this.element.zoom = this.newViewport.zoom;
            }
        }
        return model;
    };
    ViewportCommand.prototype.undo = function (context) {
        return new ViewportAnimation(this.element, this.newViewport, this.oldViewport, context).start();
    };
    ViewportCommand.prototype.redo = function (context) {
        return new ViewportAnimation(this.element, this.oldViewport, this.newViewport, context).start();
    };
    ViewportCommand.prototype.merge = function (command, context) {
        if (!this.action.animate && command instanceof ViewportCommand && this.element === command.element) {
            this.newViewport = command.newViewport;
            return true;
        }
        return false;
    };
    ViewportCommand.KIND = 'viewport';
    return ViewportCommand;
}(command_1.MergeableCommand));
exports.ViewportCommand = ViewportCommand;
var ViewportAnimation = /** @class */ (function (_super) {
    __extends(ViewportAnimation, _super);
    function ViewportAnimation(element, oldViewport, newViewport, context) {
        var _this = _super.call(this, context) || this;
        _this.element = element;
        _this.oldViewport = oldViewport;
        _this.newViewport = newViewport;
        _this.context = context;
        _this.zoomFactor = Math.log(newViewport.zoom / oldViewport.zoom);
        return _this;
    }
    ViewportAnimation.prototype.tween = function (t, context) {
        this.element.scroll = {
            x: (1 - t) * this.oldViewport.scroll.x + t * this.newViewport.scroll.x,
            y: (1 - t) * this.oldViewport.scroll.y + t * this.newViewport.scroll.y
        };
        this.element.zoom = this.oldViewport.zoom * Math.exp(t * this.zoomFactor);
        return context.root;
    };
    return ViewportAnimation;
}(animation_1.Animation));
exports.ViewportAnimation = ViewportAnimation;
//# sourceMappingURL=viewport.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(27).f;
var has = __webpack_require__(25);
var TAG = __webpack_require__(4)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(59);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(12);
function getServiceIdentifierAsString(serviceIdentifier) {
    if (typeof serviceIdentifier === "function") {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier.name;
    }
    else if (typeof serviceIdentifier === "symbol") {
        return serviceIdentifier.toString();
    }
    else {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier;
    }
}
exports.getServiceIdentifierAsString = getServiceIdentifierAsString;
function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings) {
    var registeredBindingsList = "";
    var registeredBindings = getBindings(container, serviceIdentifier);
    if (registeredBindings.length !== 0) {
        registeredBindingsList = "\nRegistered bindings:";
        registeredBindings.forEach(function (binding) {
            var name = "Object";
            if (binding.implementationType !== null) {
                name = getFunctionName(binding.implementationType);
            }
            registeredBindingsList = registeredBindingsList + "\n " + name;
            if (binding.constraint.metaData) {
                registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
            }
        });
    }
    return registeredBindingsList;
}
exports.listRegisteredBindingsForServiceIdentifier = listRegisteredBindingsForServiceIdentifier;
function alreadyDependencyChain(request, serviceIdentifier) {
    if (request.parentRequest === null) {
        return false;
    }
    else if (request.parentRequest.serviceIdentifier === serviceIdentifier) {
        return true;
    }
    else {
        return alreadyDependencyChain(request.parentRequest, serviceIdentifier);
    }
}
function dependencyChainToString(request) {
    function _createStringArr(req, result) {
        if (result === void 0) { result = []; }
        var serviceIdentifier = getServiceIdentifierAsString(req.serviceIdentifier);
        result.push(serviceIdentifier);
        if (req.parentRequest !== null) {
            return _createStringArr(req.parentRequest, result);
        }
        return result;
    }
    var stringArr = _createStringArr(request);
    return stringArr.reverse().join(" --> ");
}
function circularDependencyToException(request) {
    request.childRequests.forEach(function (childRequest) {
        if (alreadyDependencyChain(childRequest, childRequest.serviceIdentifier)) {
            var services = dependencyChainToString(childRequest);
            throw new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY + " " + services);
        }
        else {
            circularDependencyToException(childRequest);
        }
    });
}
exports.circularDependencyToException = circularDependencyToException;
function listMetadataForTarget(serviceIdentifierString, target) {
    if (target.isTagged() || target.isNamed()) {
        var m_1 = "";
        var namedTag = target.getNamedTag();
        var otherTags = target.getCustomTags();
        if (namedTag !== null) {
            m_1 += namedTag.toString() + "\n";
        }
        if (otherTags !== null) {
            otherTags.forEach(function (tag) {
                m_1 += tag.toString() + "\n";
            });
        }
        return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
    }
    else {
        return " " + serviceIdentifierString;
    }
}
exports.listMetadataForTarget = listMetadataForTarget;
function getFunctionName(v) {
    if (v.name) {
        return v.name;
    }
    else {
        var name_1 = v.toString();
        var match = name_1.match(/^function\s*([^\s(]+)/);
        return match ? match[1] : "Anonymous function: " + name_1;
    }
}
exports.getFunctionName = getFunctionName;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var AnimationFrameSyncer = /** @class */ (function () {
    function AnimationFrameSyncer() {
        this.tasks = [];
        this.endTasks = [];
        this.triggered = false;
    }
    AnimationFrameSyncer.prototype.isAvailable = function () {
        return typeof requestAnimationFrame === "function";
    };
    AnimationFrameSyncer.prototype.onNextFrame = function (task) {
        this.tasks.push(task);
        this.trigger();
    };
    AnimationFrameSyncer.prototype.onEndOfNextFrame = function (task) {
        this.endTasks.push(task);
        this.trigger();
    };
    AnimationFrameSyncer.prototype.trigger = function () {
        var _this = this;
        if (!this.triggered) {
            this.triggered = true;
            if (this.isAvailable())
                requestAnimationFrame(function (time) { return _this.run(time); });
            else
                setTimeout(function (time) { return _this.run(time); });
        }
    };
    AnimationFrameSyncer.prototype.run = function (time) {
        var tasks = this.tasks;
        var endTasks = this.endTasks;
        this.triggered = false;
        this.tasks = [];
        this.endTasks = [];
        tasks.forEach(function (task) { return task.call(undefined, time); });
        endTasks.forEach(function (task) { return task.call(undefined, time); });
    };
    AnimationFrameSyncer = __decorate([
        inversify_1.injectable()
    ], AnimationFrameSyncer);
    return AnimationFrameSyncer;
}());
exports.AnimationFrameSyncer = AnimationFrameSyncer;
//# sourceMappingURL=animation-frame-syncer.js.map

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var geometry_1 = __webpack_require__(3);
var command_1 = __webpack_require__(8);
var initialize_canvas_1 = __webpack_require__(60);
/**
 * Sent from the client to the model source (e.g. a DiagramServer) in order to request a model. Usually this
 * is the first message that is sent to the source, so it is also used to initiate the communication.
 * The response is a SetModelAction or an UpdateModelAction.
 */
var RequestModelAction = /** @class */ (function () {
    function RequestModelAction(options) {
        this.options = options;
        this.kind = RequestModelAction.KIND;
    }
    RequestModelAction.KIND = 'requestModel';
    return RequestModelAction;
}());
exports.RequestModelAction = RequestModelAction;
/**
 * Sent from the model source to the client in order to set the model. If a model is already present, it is replaced.
 */
var SetModelAction = /** @class */ (function () {
    function SetModelAction(newRoot, isInitial) {
        if (isInitial === void 0) { isInitial = false; }
        this.newRoot = newRoot;
        this.isInitial = isInitial;
        this.kind = SetModelCommand.KIND;
    }
    return SetModelAction;
}());
exports.SetModelAction = SetModelAction;
var SetModelCommand = /** @class */ (function (_super) {
    __extends(SetModelCommand, _super);
    function SetModelCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    SetModelCommand.prototype.execute = function (context) {
        this.oldRoot = context.modelFactory.createRoot(context.root);
        this.newRoot = context.modelFactory.createRoot(this.action.newRoot);
        if (geometry_1.isValidDimension(this.oldRoot.canvasBounds)) {
            this.newRoot.canvasBounds = this.oldRoot.canvasBounds;
        }
        return this.newRoot;
    };
    SetModelCommand.prototype.undo = function (context) {
        return this.oldRoot;
    };
    SetModelCommand.prototype.redo = function (context) {
        return this.newRoot;
    };
    Object.defineProperty(SetModelCommand.prototype, "blockUntilActionKind", {
        get: function () {
            if (this.action.isInitial)
                return initialize_canvas_1.InitializeCanvasBoundsCommand.KIND;
            else
                return undefined;
        },
        enumerable: true,
        configurable: true
    });
    SetModelCommand.KIND = 'setModel';
    SetModelCommand = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [SetModelAction])
    ], SetModelCommand);
    return SetModelCommand;
}(command_1.Command));
exports.SetModelCommand = SetModelCommand;
//# sourceMappingURL=set-model.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var command_1 = __webpack_require__(8);
var model_1 = __webpack_require__(9);
/**
 * Sent from the model source (e.g. a DiagramServer) to the client to update the bounds of some
 * (or all) model elements.
 */
var SetBoundsAction = /** @class */ (function () {
    function SetBoundsAction(bounds) {
        this.bounds = bounds;
        this.kind = SetBoundsCommand.KIND;
    }
    return SetBoundsAction;
}());
exports.SetBoundsAction = SetBoundsAction;
/**
 * Sent from the model source to the client to request bounds for the given model. The model is
 * rendered invisibly so the bounds can derived from the DOM. The response is a ComputedBoundsAction.
 * This hidden rendering round-trip is necessary if the client is responsible for parts of the layout
 * (see `needsClientLayout` viewer option).
 */
var RequestBoundsAction = /** @class */ (function () {
    function RequestBoundsAction(newRoot) {
        this.newRoot = newRoot;
        this.kind = RequestBoundsCommand.KIND;
    }
    return RequestBoundsAction;
}());
exports.RequestBoundsAction = RequestBoundsAction;
/**
 * Sent from the client to the model source (e.g. a DiagramServer) to transmit the result of bounds
 * computation as a response to a RequestBoundsAction. If the server is responsible for parts of
 * the layout (see `needsServerLayout` viewer option), it can do so after applying the computed bounds
 * received with this action. Otherwise there is no need to send the computed bounds to the server,
 * so they can be processed locally by the client.
 */
var ComputedBoundsAction = /** @class */ (function () {
    function ComputedBoundsAction(bounds, revision, alignments) {
        this.bounds = bounds;
        this.revision = revision;
        this.alignments = alignments;
        this.kind = ComputedBoundsAction.KIND;
    }
    ComputedBoundsAction.KIND = 'computedBounds';
    return ComputedBoundsAction;
}());
exports.ComputedBoundsAction = ComputedBoundsAction;
var SetBoundsCommand = /** @class */ (function (_super) {
    __extends(SetBoundsCommand, _super);
    function SetBoundsCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        _this.bounds = [];
        return _this;
    }
    SetBoundsCommand.prototype.execute = function (context) {
        var _this = this;
        this.action.bounds.forEach(function (b) {
            var element = context.root.index.getById(b.elementId);
            if (element && model_1.isBoundsAware(element)) {
                _this.bounds.push({
                    element: element,
                    oldBounds: element.bounds,
                    newBounds: b.newBounds,
                });
            }
        });
        return this.redo(context);
    };
    SetBoundsCommand.prototype.undo = function (context) {
        this.bounds.forEach(function (b) { return b.element.bounds = b.oldBounds; });
        return context.root;
    };
    SetBoundsCommand.prototype.redo = function (context) {
        this.bounds.forEach(function (b) { return b.element.bounds = b.newBounds; });
        return context.root;
    };
    SetBoundsCommand.KIND = 'setBounds';
    return SetBoundsCommand;
}(command_1.SystemCommand));
exports.SetBoundsCommand = SetBoundsCommand;
var RequestBoundsCommand = /** @class */ (function (_super) {
    __extends(RequestBoundsCommand, _super);
    function RequestBoundsCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    RequestBoundsCommand.prototype.execute = function (context) {
        return context.modelFactory.createRoot(this.action.newRoot);
    };
    Object.defineProperty(RequestBoundsCommand.prototype, "blockUntilActionKind", {
        get: function () {
            return ComputedBoundsAction.KIND;
        },
        enumerable: true,
        configurable: true
    });
    RequestBoundsCommand.KIND = 'requestBounds';
    return RequestBoundsCommand;
}(command_1.HiddenCommand));
exports.RequestBoundsCommand = RequestBoundsCommand;
//# sourceMappingURL=bounds-manipulation.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.fadeFeature = Symbol('fadeFeature');
function isFadeable(element) {
    return element.hasFeature(exports.fadeFeature) && element['opacity'] !== undefined;
}
exports.isFadeable = isFadeable;
//# sourceMappingURL=model.js.map

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var mouse_tool_1 = __webpack_require__(30);
var command_1 = __webpack_require__(8);
var smodel_factory_1 = __webpack_require__(17);
var geometry_1 = __webpack_require__(3);
var key_tool_1 = __webpack_require__(35);
var smodel_utils_1 = __webpack_require__(13);
var model_1 = __webpack_require__(9);
var model_2 = __webpack_require__(63);
/**
 * Triggered when the user puts the mouse pointer over an element.
 */
var HoverFeedbackAction = /** @class */ (function () {
    function HoverFeedbackAction(mouseoverElement, mouseIsOver) {
        this.mouseoverElement = mouseoverElement;
        this.mouseIsOver = mouseIsOver;
        this.kind = HoverFeedbackCommand.KIND;
    }
    return HoverFeedbackAction;
}());
exports.HoverFeedbackAction = HoverFeedbackAction;
var HoverFeedbackCommand = /** @class */ (function (_super) {
    __extends(HoverFeedbackCommand, _super);
    function HoverFeedbackCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    HoverFeedbackCommand.prototype.execute = function (context) {
        var model = context.root;
        var modelElement = model.index.getById(this.action.mouseoverElement);
        if (modelElement) {
            if (model_2.isHoverable(modelElement)) {
                modelElement.hoverFeedback = this.action.mouseIsOver;
            }
        }
        return this.redo(context);
    };
    HoverFeedbackCommand.prototype.undo = function (context) {
        return context.root;
    };
    HoverFeedbackCommand.prototype.redo = function (context) {
        return context.root;
    };
    HoverFeedbackCommand.KIND = 'hoverFeedback';
    return HoverFeedbackCommand;
}(command_1.Command));
exports.HoverFeedbackCommand = HoverFeedbackCommand;
/**
 * Triggered when the user hovers the mouse pointer over an element to get a popup with details on
 * that element. This action is sent from the client to the model source, e.g. a DiagramServer.
 * The response is a SetPopupModelAction.
 */
var RequestPopupModelAction = /** @class */ (function () {
    function RequestPopupModelAction(elementId, bounds) {
        this.elementId = elementId;
        this.bounds = bounds;
        this.kind = RequestPopupModelAction.KIND;
    }
    RequestPopupModelAction.KIND = 'requestPopupModel';
    return RequestPopupModelAction;
}());
exports.RequestPopupModelAction = RequestPopupModelAction;
/**
 * Sent from the model source to the client to display a popup in response to a RequestPopupModelAction.
 * This action can also be used to remove any existing popup by choosing EMPTY_ROOT as root element.
 */
var SetPopupModelAction = /** @class */ (function () {
    function SetPopupModelAction(newRoot) {
        this.newRoot = newRoot;
        this.kind = SetPopupModelCommand.KIND;
    }
    return SetPopupModelAction;
}());
exports.SetPopupModelAction = SetPopupModelAction;
var SetPopupModelCommand = /** @class */ (function (_super) {
    __extends(SetPopupModelCommand, _super);
    function SetPopupModelCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    SetPopupModelCommand.prototype.execute = function (context) {
        this.oldRoot = context.root;
        this.newRoot = context.modelFactory.createRoot(this.action.newRoot);
        return this.newRoot;
    };
    SetPopupModelCommand.prototype.undo = function (context) {
        return this.oldRoot;
    };
    SetPopupModelCommand.prototype.redo = function (context) {
        return this.newRoot;
    };
    SetPopupModelCommand.KIND = 'setPopupModel';
    return SetPopupModelCommand;
}(command_1.PopupCommand));
exports.SetPopupModelCommand = SetPopupModelCommand;
var AbstractHoverMouseListener = /** @class */ (function (_super) {
    __extends(AbstractHoverMouseListener, _super);
    function AbstractHoverMouseListener(options, state) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.state = state;
        return _this;
    }
    AbstractHoverMouseListener.prototype.stopMouseOutTimer = function () {
        if (this.state.mouseOutTimer !== undefined) {
            window.clearTimeout(this.state.mouseOutTimer);
            this.state.mouseOutTimer = undefined;
        }
    };
    AbstractHoverMouseListener.prototype.startMouseOutTimer = function () {
        var _this = this;
        this.stopMouseOutTimer();
        return new Promise(function (resolve) {
            _this.state.mouseOutTimer = window.setTimeout(function () {
                _this.state.popupOpen = false;
                _this.state.previousPopupElement = undefined;
                resolve(new SetPopupModelAction({ type: smodel_factory_1.EMPTY_ROOT.type, id: smodel_factory_1.EMPTY_ROOT.id }));
            }, _this.options.popupCloseDelay);
        });
    };
    AbstractHoverMouseListener.prototype.stopMouseOverTimer = function () {
        if (this.state.mouseOverTimer !== undefined) {
            window.clearTimeout(this.state.mouseOverTimer);
            this.state.mouseOverTimer = undefined;
        }
    };
    AbstractHoverMouseListener = __decorate([
        __param(0, inversify_1.inject(types_1.TYPES.ViewerOptions)),
        __param(1, inversify_1.inject(types_1.TYPES.HoverState)),
        __metadata("design:paramtypes", [Object, Object])
    ], AbstractHoverMouseListener);
    return AbstractHoverMouseListener;
}(mouse_tool_1.MouseListener));
exports.AbstractHoverMouseListener = AbstractHoverMouseListener;
var HoverMouseListener = /** @class */ (function (_super) {
    __extends(HoverMouseListener, _super);
    function HoverMouseListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HoverMouseListener.prototype.calculatePopupPosition = function (target, mousePosition) {
        var offset = { x: -5, y: 20 };
        var maxDist = 150;
        var targetBounds = model_1.getAbsoluteBounds(target);
        var canvasBounds = target.root.canvasBounds;
        var boundsInWindow = geometry_1.translate(targetBounds, canvasBounds);
        var distRight = boundsInWindow.x + boundsInWindow.width - mousePosition.x;
        var distBottom = boundsInWindow.y + boundsInWindow.height - mousePosition.y;
        if (distBottom <= distRight && distBottom < maxDist) {
            offset = { x: -5, y: Math.round(distBottom + 5) };
        }
        else if (distRight <= distBottom && distRight < maxDist) {
            offset = { x: Math.round(distRight + 5), y: -5 };
        }
        var leftPopupPosition = mousePosition.x + offset.x;
        var canvasRightBorderPosition = canvasBounds.x + canvasBounds.width;
        if (leftPopupPosition > canvasRightBorderPosition) {
            leftPopupPosition = canvasRightBorderPosition;
        }
        var topPopupPosition = mousePosition.y + offset.y;
        var canvasBottomBorderPosition = canvasBounds.y + canvasBounds.height;
        if (topPopupPosition > canvasBottomBorderPosition) {
            topPopupPosition = canvasBottomBorderPosition;
        }
        return { x: leftPopupPosition, y: topPopupPosition };
    };
    HoverMouseListener.prototype.startMouseOverTimer = function (target, event) {
        var _this = this;
        this.stopMouseOverTimer();
        return new Promise(function (resolve) {
            _this.state.mouseOverTimer = window.setTimeout(function () {
                var popupPosition = _this.calculatePopupPosition(target, { x: event.pageX, y: event.pageY });
                resolve(new RequestPopupModelAction(target.id, {
                    x: popupPosition.x,
                    y: popupPosition.y,
                    width: -1,
                    height: -1
                }));
                _this.state.popupOpen = true;
                _this.state.previousPopupElement = target;
            }, _this.options.popupOpenDelay);
        });
    };
    HoverMouseListener.prototype.mouseOver = function (target, event) {
        var state = this.state;
        var result = [];
        var popupTarget = smodel_utils_1.findParent(target, model_2.hasPopupFeature);
        if (state.popupOpen && (popupTarget === undefined ||
            state.previousPopupElement !== undefined && state.previousPopupElement.id !== popupTarget.id)) {
            result.push(this.startMouseOutTimer());
        }
        else {
            this.stopMouseOverTimer();
            this.stopMouseOutTimer();
        }
        if (popupTarget !== undefined &&
            (state.previousPopupElement === undefined || state.previousPopupElement.id !== popupTarget.id)) {
            result.push(this.startMouseOverTimer(popupTarget, event));
        }
        var hoverTarget = smodel_utils_1.findParentByFeature(target, model_2.isHoverable);
        if (hoverTarget !== undefined)
            result.push(new HoverFeedbackAction(hoverTarget.id, true));
        return result;
    };
    HoverMouseListener.prototype.mouseOut = function (target, event) {
        var result = [];
        if (!this.state.popupOpen)
            this.stopMouseOverTimer();
        var hoverTarget = smodel_utils_1.findParentByFeature(target, model_2.isHoverable);
        if (hoverTarget !== undefined)
            result.push(new HoverFeedbackAction(hoverTarget.id, false));
        return result;
    };
    HoverMouseListener.prototype.mouseMove = function (target, event) {
        var popupTarget = smodel_utils_1.findParent(target, model_2.hasPopupFeature);
        return this.state.popupOpen || popupTarget === undefined ? [] : [this.startMouseOverTimer(popupTarget, event)];
    };
    HoverMouseListener = __decorate([
        inversify_1.injectable()
    ], HoverMouseListener);
    return HoverMouseListener;
}(AbstractHoverMouseListener));
exports.HoverMouseListener = HoverMouseListener;
var PopupHoverMouseListener = /** @class */ (function (_super) {
    __extends(PopupHoverMouseListener, _super);
    function PopupHoverMouseListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PopupHoverMouseListener.prototype.mouseOut = function (target, event) {
        return [this.startMouseOutTimer()];
    };
    PopupHoverMouseListener.prototype.mouseOver = function (target, event) {
        this.stopMouseOutTimer();
        this.stopMouseOverTimer();
        return [];
    };
    PopupHoverMouseListener = __decorate([
        inversify_1.injectable()
    ], PopupHoverMouseListener);
    return PopupHoverMouseListener;
}(AbstractHoverMouseListener));
exports.PopupHoverMouseListener = PopupHoverMouseListener;
var HoverKeyListener = /** @class */ (function (_super) {
    __extends(HoverKeyListener, _super);
    function HoverKeyListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HoverKeyListener.prototype.keyDown = function (element, event) {
        if (event.keyCode === 27) {
            return [new SetPopupModelAction({ type: smodel_factory_1.EMPTY_ROOT.type, id: smodel_factory_1.EMPTY_ROOT.id })];
        }
        return [];
    };
    return HoverKeyListener;
}(key_tool_1.KeyListener));
exports.HoverKeyListener = HoverKeyListener;
//# sourceMappingURL=hover.js.map

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var ProviderRegistry = /** @class */ (function () {
    function ProviderRegistry() {
        this.elements = new Map;
    }
    ProviderRegistry.prototype.register = function (key, cstr) {
        if (key === undefined)
            throw new Error('Key is undefined');
        if (this.hasKey(key))
            throw new Error('Key is already registered: ' + key);
        this.elements.set(key, cstr);
    };
    ProviderRegistry.prototype.deregister = function (key) {
        if (key === undefined)
            throw new Error('Key is undefined');
        this.elements.delete(key);
    };
    ProviderRegistry.prototype.hasKey = function (key) {
        return this.elements.has(key);
    };
    ProviderRegistry.prototype.get = function (key, arg) {
        var existingCstr = this.elements.get(key);
        if (existingCstr)
            return new existingCstr(arg);
        else
            return this.missing(key, arg);
    };
    ProviderRegistry.prototype.missing = function (key, arg) {
        throw new Error('Unknown registry key: ' + key);
    };
    ProviderRegistry = __decorate([
        inversify_1.injectable()
    ], ProviderRegistry);
    return ProviderRegistry;
}());
exports.ProviderRegistry = ProviderRegistry;
var InstanceRegistry = /** @class */ (function () {
    function InstanceRegistry() {
        this.elements = new Map;
    }
    InstanceRegistry.prototype.register = function (key, instance) {
        if (key === undefined)
            throw new Error('Key is undefined');
        if (this.hasKey(key))
            throw new Error('Key is already registered: ' + key);
        this.elements.set(key, instance);
    };
    InstanceRegistry.prototype.deregister = function (key) {
        if (key === undefined)
            throw new Error('Key is undefined');
        this.elements.delete(key);
    };
    InstanceRegistry.prototype.hasKey = function (key) {
        return this.elements.has(key);
    };
    InstanceRegistry.prototype.get = function (key) {
        var existingInstance = this.elements.get(key);
        if (existingInstance)
            return existingInstance;
        else
            return this.missing(key);
    };
    InstanceRegistry.prototype.missing = function (key) {
        throw new Error('Unknown registry key: ' + key);
    };
    InstanceRegistry = __decorate([
        inversify_1.injectable()
    ], InstanceRegistry);
    return InstanceRegistry;
}());
exports.InstanceRegistry = InstanceRegistry;
var MultiInstanceRegistry = /** @class */ (function () {
    function MultiInstanceRegistry() {
        this.elements = new Map;
    }
    MultiInstanceRegistry.prototype.register = function (key, instance) {
        if (key === undefined)
            throw new Error('Key is undefined');
        var instances = this.elements.get(key);
        if (instances !== undefined)
            instances.push(instance);
        else
            this.elements.set(key, [instance]);
    };
    MultiInstanceRegistry.prototype.deregisterAll = function (key) {
        if (key === undefined)
            throw new Error('Key is undefined');
        this.elements.delete(key);
    };
    MultiInstanceRegistry.prototype.get = function (key) {
        var existingInstances = this.elements.get(key);
        if (existingInstances !== undefined)
            return existingInstances;
        else
            return [];
    };
    MultiInstanceRegistry = __decorate([
        inversify_1.injectable()
    ], MultiInstanceRegistry);
    return MultiInstanceRegistry;
}());
exports.MultiInstanceRegistry = MultiInstanceRegistry;
//# sourceMappingURL=registry.js.map

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(26);
var redefine = __webpack_require__(28);
var fails = __webpack_require__(24);
var defined = __webpack_require__(22);
var wks = __webpack_require__(4);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(113);
var enumBugKeys = __webpack_require__(69);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var geometry_1 = __webpack_require__(3);
var smodel_1 = __webpack_require__(2);
var command_1 = __webpack_require__(8);
/**
 * Grabs the bounds from the root element in page coordinates and fires a
 * InitializeCanvasBoundsAction. This size is needed for other actions such
 * as FitToScreenAction.
 */
var CanvasBoundsInitializer = /** @class */ (function () {
    function CanvasBoundsInitializer(actionDispatcher) {
        this.actionDispatcher = actionDispatcher;
    }
    CanvasBoundsInitializer.prototype.decorate = function (vnode, element) {
        if (element instanceof smodel_1.SModelRoot && !geometry_1.isValidDimension(element.canvasBounds)) {
            this.rootAndVnode = [element, vnode];
        }
        return vnode;
    };
    CanvasBoundsInitializer.prototype.postUpdate = function () {
        if (this.rootAndVnode !== undefined) {
            var domElement = this.rootAndVnode[1].elm;
            var oldBounds = this.rootAndVnode[0].canvasBounds;
            if (domElement !== undefined) {
                var newBounds = this.getBoundsInPage(domElement);
                if (!(geometry_1.almostEquals(newBounds.x, oldBounds.x)
                    && geometry_1.almostEquals(newBounds.y, oldBounds.y)
                    && geometry_1.almostEquals(newBounds.width, oldBounds.width)
                    && geometry_1.almostEquals(newBounds.height, oldBounds.width)))
                    this.actionDispatcher.dispatch(new InitializeCanvasBoundsAction(newBounds));
            }
            this.rootAndVnode = undefined;
        }
    };
    CanvasBoundsInitializer.prototype.getBoundsInPage = function (element) {
        var bounds = element.getBoundingClientRect();
        var scroll = typeof window !== 'undefined' ? { x: window.scrollX, y: window.scrollY } : geometry_1.ORIGIN_POINT;
        return {
            x: bounds.left + scroll.x,
            y: bounds.top + scroll.y,
            width: bounds.width,
            height: bounds.height
        };
    };
    CanvasBoundsInitializer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.IActionDispatcher)),
        __metadata("design:paramtypes", [Object])
    ], CanvasBoundsInitializer);
    return CanvasBoundsInitializer;
}());
exports.CanvasBoundsInitializer = CanvasBoundsInitializer;
var InitializeCanvasBoundsAction = /** @class */ (function () {
    function InitializeCanvasBoundsAction(newCanvasBounds) {
        this.newCanvasBounds = newCanvasBounds;
        this.kind = InitializeCanvasBoundsCommand.KIND;
    }
    return InitializeCanvasBoundsAction;
}());
exports.InitializeCanvasBoundsAction = InitializeCanvasBoundsAction;
var InitializeCanvasBoundsCommand = /** @class */ (function (_super) {
    __extends(InitializeCanvasBoundsCommand, _super);
    function InitializeCanvasBoundsCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        return _this;
    }
    InitializeCanvasBoundsCommand.prototype.execute = function (context) {
        this.oldCanvasBounds = context.root.canvasBounds;
        this.newCanvasBounds = this.action.newCanvasBounds;
        context.root.canvasBounds = this.newCanvasBounds;
        return context.root;
    };
    InitializeCanvasBoundsCommand.prototype.undo = function (context) {
        return context.root;
    };
    InitializeCanvasBoundsCommand.prototype.redo = function (context) {
        return context.root;
    };
    InitializeCanvasBoundsCommand.KIND = 'initializeCanvasBounds';
    return InitializeCanvasBoundsCommand;
}(command_1.SystemCommand));
exports.InitializeCanvasBoundsCommand = InitializeCanvasBoundsCommand;
//# sourceMappingURL=initialize-canvas.js.map

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
* Copyright (C) 2017 TypeFox and others.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
* You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var smodel_utils_1 = __webpack_require__(13);
var model_1 = __webpack_require__(93);
var inversify_1 = __webpack_require__(0);
/**
 * Sent from the client to the model source to recalculate a diagram when elements
 * are collapsed/expanded by the client.
 */
var CollapseExpandAction = /** @class */ (function () {
    function CollapseExpandAction(expandIds, collapseIds) {
        this.expandIds = expandIds;
        this.collapseIds = collapseIds;
        this.kind = CollapseExpandAction.KIND;
    }
    CollapseExpandAction.KIND = 'collapseExpand';
    return CollapseExpandAction;
}());
exports.CollapseExpandAction = CollapseExpandAction;
/**
 * Programmatic action for expanding or collapsing all elements.
 */
var CollapseExpandAllAction = /** @class */ (function () {
    /**
     * If `expand` is true, all elements are expanded, othewise they are collapsed.
     */
    function CollapseExpandAllAction(expand) {
        if (expand === void 0) { expand = true; }
        this.expand = expand;
        this.kind = CollapseExpandAllAction.KIND;
    }
    CollapseExpandAllAction.KIND = 'collapseExpandAll';
    return CollapseExpandAllAction;
}());
exports.CollapseExpandAllAction = CollapseExpandAllAction;
var ExpandButtonHandler = /** @class */ (function () {
    function ExpandButtonHandler() {
    }
    ExpandButtonHandler.prototype.buttonPressed = function (button) {
        var expandable = smodel_utils_1.findParentByFeature(button, model_1.isExpandable);
        if (expandable !== undefined) {
            return [new CollapseExpandAction(expandable.expanded ? [] : [expandable.id], expandable.expanded ? [expandable.id] : [])];
        }
        else {
            return [];
        }
    };
    ExpandButtonHandler.TYPE = 'button:expand';
    ExpandButtonHandler = __decorate([
        inversify_1.injectable()
    ], ExpandButtonHandler);
    return ExpandButtonHandler;
}());
exports.ExpandButtonHandler = ExpandButtonHandler;
//# sourceMappingURL=expand.js.map

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportFeature = Symbol('exportFeature');
function isExportable(element) {
    return element.hasFeature(exports.exportFeature) && element['export'] !== undefined;
}
exports.isExportable = isExportable;
//# sourceMappingURL=model.js.map

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoverFeedbackFeature = Symbol('hoverFeedbackFeature');
function isHoverable(element) {
    return element.hasFeature(exports.hoverFeedbackFeature);
}
exports.isHoverable = isHoverable;
exports.popupFeature = Symbol('popupFeature');
function hasPopupFeature(element) {
    return element.hasFeature(exports.popupFeature);
}
exports.hasPopupFeature = hasPopupFeature;
//# sourceMappingURL=model.js.map

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var smodel_1 = __webpack_require__(2);
var smodel_2 = __webpack_require__(2);
var smodel_utils_1 = __webpack_require__(13);
var command_1 = __webpack_require__(8);
var animation_1 = __webpack_require__(39);
var mouse_tool_1 = __webpack_require__(30);
var vnode_utils_1 = __webpack_require__(18);
var model_1 = __webpack_require__(32);
var model_2 = __webpack_require__(31);
var model_3 = __webpack_require__(41);
var model_4 = __webpack_require__(9);
var inversify_1 = __webpack_require__(0);
var MoveAction = /** @class */ (function () {
    function MoveAction(moves, animate) {
        if (animate === void 0) { animate = true; }
        this.moves = moves;
        this.animate = animate;
        this.kind = MoveCommand.KIND;
    }
    return MoveAction;
}());
exports.MoveAction = MoveAction;
var MoveCommand = /** @class */ (function (_super) {
    __extends(MoveCommand, _super);
    function MoveCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        _this.resolvedMoves = new Map;
        return _this;
    }
    MoveCommand.prototype.execute = function (context) {
        var _this = this;
        var model = context.root;
        this.action.moves.forEach(function (move) {
            var resolvedMove = _this.resolve(move, model.index);
            if (resolvedMove) {
                _this.resolvedMoves.set(resolvedMove.elementId, resolvedMove);
                if (!_this.action.animate) {
                    resolvedMove.element.position = move.toPosition;
                }
            }
        });
        if (this.action.animate)
            return new MoveAnimation(model, this.resolvedMoves, context, false).start();
        else
            return model;
    };
    MoveCommand.prototype.resolve = function (move, index) {
        var element = index.getById(move.elementId);
        if (element) {
            var fromPosition = move.fromPosition || { x: element.position.x, y: element.position.y };
            return {
                fromPosition: fromPosition,
                elementId: move.elementId,
                element: element,
                toPosition: move.toPosition
            };
        }
        return undefined;
    };
    MoveCommand.prototype.undo = function (context) {
        return new MoveAnimation(context.root, this.resolvedMoves, context, true).start();
    };
    MoveCommand.prototype.redo = function (context) {
        return new MoveAnimation(context.root, this.resolvedMoves, context, false).start();
    };
    MoveCommand.prototype.merge = function (command, context) {
        var _this = this;
        if (!this.action.animate && command instanceof MoveCommand) {
            command.action.moves.forEach(function (otherMove) {
                var existingMove = _this.resolvedMoves.get(otherMove.elementId);
                if (existingMove) {
                    existingMove.toPosition = otherMove.toPosition;
                }
                else {
                    var resolvedMove = _this.resolve(otherMove, context.root.index);
                    if (resolvedMove)
                        _this.resolvedMoves.set(resolvedMove.elementId, resolvedMove);
                }
            });
            return true;
        }
        return false;
    };
    MoveCommand.KIND = 'move';
    return MoveCommand;
}(command_1.MergeableCommand));
exports.MoveCommand = MoveCommand;
var MoveAnimation = /** @class */ (function (_super) {
    __extends(MoveAnimation, _super);
    function MoveAnimation(model, elementMoves, context, reverse) {
        if (reverse === void 0) { reverse = false; }
        var _this = _super.call(this, context) || this;
        _this.model = model;
        _this.elementMoves = elementMoves;
        _this.reverse = reverse;
        return _this;
    }
    MoveAnimation.prototype.tween = function (t) {
        var _this = this;
        this.elementMoves.forEach(function (elementMove) {
            if (_this.reverse) {
                elementMove.element.position = {
                    x: (1 - t) * elementMove.toPosition.x + t * elementMove.fromPosition.x,
                    y: (1 - t) * elementMove.toPosition.y + t * elementMove.fromPosition.y
                };
            }
            else {
                elementMove.element.position = {
                    x: (1 - t) * elementMove.fromPosition.x + t * elementMove.toPosition.x,
                    y: (1 - t) * elementMove.fromPosition.y + t * elementMove.toPosition.y
                };
            }
        });
        return this.model;
    };
    return MoveAnimation;
}(animation_1.Animation));
exports.MoveAnimation = MoveAnimation;
var MoveMouseListener = /** @class */ (function (_super) {
    __extends(MoveMouseListener, _super);
    function MoveMouseListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasDragged = false;
        return _this;
    }
    MoveMouseListener.prototype.mouseDown = function (target, event) {
        if (event.button === 0) {
            if (model_3.isMoveable(target)) {
                this.lastDragPosition = { x: event.pageX, y: event.pageY };
            }
            else {
                this.lastDragPosition = undefined;
            }
            this.hasDragged = false;
        }
        return [];
    };
    MoveMouseListener.prototype.mouseMove = function (target, event) {
        if (event.buttons === 0)
            this.mouseUp(target, event);
        else if (this.lastDragPosition) {
            var viewport = smodel_utils_1.findParentByFeature(target, model_1.isViewport);
            this.hasDragged = true;
            var zoom = viewport ? viewport.zoom : 1;
            var dx_1 = (event.pageX - this.lastDragPosition.x) / zoom;
            var dy_1 = (event.pageY - this.lastDragPosition.y) / zoom;
            var root = target.root;
            var nodeMoves_1 = [];
            root
                .index
                .all()
                .filter(function (element) { return model_2.isSelectable(element) && element.selected; })
                .forEach(function (element) {
                if (model_3.isMoveable(element)) {
                    nodeMoves_1.push({
                        elementId: element.id,
                        toPosition: {
                            x: element.position.x + dx_1,
                            y: element.position.y + dy_1
                        }
                    });
                }
            });
            this.lastDragPosition = { x: event.pageX, y: event.pageY };
            if (nodeMoves_1.length > 0)
                return [new MoveAction(nodeMoves_1, false)];
        }
        return [];
    };
    MoveMouseListener.prototype.mouseEnter = function (target, event) {
        if (target instanceof smodel_2.SModelRoot && event.buttons === 0)
            this.mouseUp(target, event);
        return [];
    };
    MoveMouseListener.prototype.mouseUp = function (target, event) {
        this.hasDragged = false;
        this.lastDragPosition = undefined;
        return [];
    };
    MoveMouseListener.prototype.decorate = function (vnode, element) {
        return vnode;
    };
    return MoveMouseListener;
}(mouse_tool_1.MouseListener));
exports.MoveMouseListener = MoveMouseListener;
var LocationDecorator = /** @class */ (function () {
    function LocationDecorator() {
    }
    LocationDecorator.prototype.decorate = function (vnode, element) {
        var translate = '';
        if (model_3.isLocateable(element) && element instanceof smodel_1.SChildElement && element.parent !== undefined) {
            translate = 'translate(' + element.position.x + ', ' + element.position.y + ')';
        }
        if (model_4.isAlignable(element)) {
            if (translate.length > 0)
                translate += ' ';
            translate += 'translate(' + element.alignment.x + ', ' + element.alignment.y + ')';
        }
        if (translate.length > 0)
            vnode_utils_1.setAttr(vnode, 'transform', translate);
        return vnode;
    };
    LocationDecorator.prototype.postUpdate = function () {
    };
    LocationDecorator = __decorate([
        inversify_1.injectable()
    ], LocationDecorator);
    return LocationDecorator;
}());
exports.LocationDecorator = LocationDecorator;
//# sourceMappingURL=move.js.map

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns whether the mouse or keyboard event includes the CMD key
 * on Mac or CTRL key on Linux / others
 */
function isCtrlOrCmd(event) {
    if (isMac())
        return event.metaKey;
    else
        return event.ctrlKey;
}
exports.isCtrlOrCmd = isCtrlOrCmd;
function isMac() {
    return window.navigator.userAgent.indexOf("Mac") !== -1;
}
exports.isMac = isMac;
function isCrossSite(url) {
    if (url && typeof window !== 'undefined' && window.location) {
        var baseURL = '';
        if (window.location.protocol)
            baseURL += window.location.protocol + '//';
        if (window.location.host)
            baseURL += window.location.host;
        return baseURL.length > 0 && !url.startsWith(baseURL);
    }
    return false;
}
exports.isCrossSite = isCrossSite;
//# sourceMappingURL=browser.js.map

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(36);
var TAG = __webpack_require__(4)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(4)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(37);
var call = __webpack_require__(166);
var isArrayIter = __webpack_require__(164);
var anObject = __webpack_require__(19);
var toLength = __webpack_require__(45);
var getIterFn = __webpack_require__(181);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(56);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(28);
var hide = __webpack_require__(26);
var has = __webpack_require__(25);
var Iterators = __webpack_require__(43);
var $iterCreate = __webpack_require__(167);
var setToStringTag = __webpack_require__(44);
var getPrototypeOf = __webpack_require__(171);
var ITERATOR = __webpack_require__(4)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(46)('meta');
var isObject = __webpack_require__(14);
var has = __webpack_require__(25);
var setDesc = __webpack_require__(27).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(24)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(19);
var dPs = __webpack_require__(169);
var enumBugKeys = __webpack_require__(69);
var IE_PROTO = __webpack_require__(77)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(68)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(104).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(28);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(78)('keys');
var uid = __webpack_require__(46);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(106);
var defined = __webpack_require__(22);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(67);
var test = {};
test[__webpack_require__(4)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(28)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(115)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(72)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_when_syntax_1 = __webpack_require__(84);
var BindingOnSyntax = (function () {
    function BindingOnSyntax(binding) {
        this._binding = binding;
    }
    BindingOnSyntax.prototype.onActivation = function (handler) {
        this._binding.onActivation = handler;
        return new binding_when_syntax_1.BindingWhenSyntax(this._binding);
    };
    return BindingOnSyntax;
}());
exports.BindingOnSyntax = BindingOnSyntax;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_on_syntax_1 = __webpack_require__(83);
var constraint_helpers_1 = __webpack_require__(126);
var BindingWhenSyntax = (function () {
    function BindingWhenSyntax(binding) {
        this._binding = binding;
    }
    BindingWhenSyntax.prototype.when = function (constraint) {
        this._binding.constraint = constraint;
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetNamed = function (name) {
        this._binding.constraint = constraint_helpers_1.namedConstraint(name);
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetIsDefault = function () {
        this._binding.constraint = function (request) {
            var targetIsDefault = (request.target !== null) &&
                (!request.target.isNamed()) &&
                (!request.target.isTagged());
            return targetIsDefault;
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetTagged = function (tag, value) {
        this._binding.constraint = constraint_helpers_1.taggedConstraint(tag)(value);
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenInjectedInto = function (parent) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.typeConstraint(parent)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenParentNamed = function (name) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.namedConstraint(name)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenParentTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.taggedConstraint(tag)(value)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.typeConstraint(ancestor));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        this._binding.constraint = function (request) {
            return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.typeConstraint(ancestor));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorNamed = function (name) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.namedConstraint(name));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorNamed = function (name) {
        this._binding.constraint = function (request) {
            return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.namedConstraint(name));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.taggedConstraint(tag)(value));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.taggedConstraint(tag)(value));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.traverseAncerstors(request, constraint);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        this._binding.constraint = function (request) {
            return !constraint_helpers_1.traverseAncerstors(request, constraint);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    return BindingWhenSyntax;
}());
exports.BindingWhenSyntax = BindingWhenSyntax;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var smodel_factory_1 = __webpack_require__(17);
var animation_frame_syncer_1 = __webpack_require__(48);
var set_model_1 = __webpack_require__(49);
var undo_redo_1 = __webpack_require__(96);
var action_1 = __webpack_require__(86);
var action_handler_1 = __webpack_require__(38);
/**
 * Collects actions, converts them to commands and dispatches them.
 * Also acts as the proxy to model sources such as diagram servers.
 */
var ActionDispatcher = /** @class */ (function () {
    function ActionDispatcher(actionHandlerRegistry, commandStack, logger, syncer) {
        this.actionHandlerRegistry = actionHandlerRegistry;
        this.commandStack = commandStack;
        this.logger = logger;
        this.syncer = syncer;
        this.postponedActions = [];
        var initialCommand = new set_model_1.SetModelCommand(new set_model_1.SetModelAction(smodel_factory_1.EMPTY_ROOT, true));
        this.blockUntilActionKind = initialCommand.blockUntilActionKind;
        this.commandStack.execute(initialCommand);
    }
    ActionDispatcher.prototype.dispatchAll = function (actions) {
        var _this = this;
        actions.forEach(function (action) { return _this.dispatch(action); });
    };
    ActionDispatcher.prototype.dispatch = function (action, onExecute) {
        var _this = this;
        if (action.kind === this.blockUntilActionKind) {
            this.blockUntilActionKind = undefined;
            this.handleAction(action);
            var actions = this.postponedActions;
            this.postponedActions = [];
            actions.forEach(function (a) { return _this.dispatch(a.action, a.onExecute); });
            return;
        }
        if (this.blockUntilActionKind !== undefined) {
            this.logger.log(this, 'waiting for ' + this.blockUntilActionKind + '. postponing', action);
            this.postponedActions.push({
                action: action,
                onExecute: onExecute
            });
            return;
        }
        if (onExecute !== undefined)
            onExecute.call(null, action);
        if (action.kind === undo_redo_1.UndoAction.KIND) {
            this.commandStack.undo();
        }
        else if (action.kind === undo_redo_1.RedoAction.KIND) {
            this.commandStack.redo();
        }
        else {
            this.handleAction(action);
        }
    };
    ActionDispatcher.prototype.handleAction = function (action) {
        this.logger.log(this, 'handle', action);
        var handlers = this.actionHandlerRegistry.get(action.kind);
        if (handlers.length > 0) {
            for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
                var handler = handlers_1[_i];
                var result = handler.handle(action);
                if (action_1.isAction(result))
                    this.dispatch(result);
                else if (result !== undefined) {
                    this.commandStack.execute(result);
                    this.blockUntilActionKind = result.blockUntilActionKind;
                }
            }
        }
        else {
            this.logger.warn(this, 'missing handler for action', action);
        }
    };
    ActionDispatcher = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.ActionHandlerRegistry)),
        __param(1, inversify_1.inject(types_1.TYPES.ICommandStack)),
        __param(2, inversify_1.inject(types_1.TYPES.ILogger)),
        __param(3, inversify_1.inject(types_1.TYPES.AnimationFrameSyncer)),
        __metadata("design:paramtypes", [action_handler_1.ActionHandlerRegistry, Object, Object, animation_frame_syncer_1.AnimationFrameSyncer])
    ], ActionDispatcher);
    return ActionDispatcher;
}());
exports.ActionDispatcher = ActionDispatcher;
//# sourceMappingURL=action-dispatcher.js.map

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
function isAction(object) {
    return object !== undefined && object.hasOwnProperty('kind') && typeof (object['kind']) === 'string';
}
exports.isAction = isAction;
//# sourceMappingURL=action.js.map

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var smodel_factory_1 = __webpack_require__(17);
var SModelStorage = /** @class */ (function () {
    function SModelStorage() {
        this.localCache = new Map;
    }
    SModelStorage.prototype.store = function (root) {
        if (this.isLocalStorageAvailable())
            localStorage.setItem(this.key, JSON.stringify(root));
        else
            this.localCache.set(this.key, JSON.stringify(root));
    };
    SModelStorage.prototype.load = function () {
        var schema = (this.isLocalStorageAvailable())
            ? localStorage.getItem(this.key)
            : this.localCache.get(this.key);
        if (schema)
            return JSON.parse(schema);
        else
            return smodel_factory_1.EMPTY_ROOT;
    };
    SModelStorage.prototype.isLocalStorageAvailable = function () {
        try {
            return typeof localStorage === 'object' && localStorage !== null;
        }
        catch (e) {
            return false;
        }
    };
    Object.defineProperty(SModelStorage.prototype, "key", {
        get: function () {
            return this.viewerOptions.baseDiv;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        inversify_1.inject(types_1.TYPES.ViewerOptions),
        __metadata("design:type", Object)
    ], SModelStorage.prototype, "viewerOptions", void 0);
    SModelStorage = __decorate([
        inversify_1.injectable()
    ], SModelStorage);
    return SModelStorage;
}());
exports.SModelStorage = SModelStorage;
//# sourceMappingURL=smodel-storage.js.map

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var DOMHelper = /** @class */ (function () {
    function DOMHelper(viewerOptions) {
        this.viewerOptions = viewerOptions;
    }
    DOMHelper.prototype.getPrefix = function () {
        var prefix = this.viewerOptions !== undefined && this.viewerOptions.baseDiv !== undefined ?
            this.viewerOptions.baseDiv + "_" : "";
        return prefix;
    };
    DOMHelper.prototype.createUniqueDOMElementId = function (element) {
        return this.getPrefix() + element.id;
    };
    DOMHelper.prototype.findSModelIdByDOMElement = function (element) {
        return element.id.replace(this.getPrefix(), '');
    };
    DOMHelper = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.ViewerOptions)),
        __metadata("design:paramtypes", [Object])
    ], DOMHelper);
    return DOMHelper;
}());
exports.DOMHelper = DOMHelper;
//# sourceMappingURL=dom-helper.js.map

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var geometry_1 = __webpack_require__(3);
var smodel_1 = __webpack_require__(2);
var model_1 = __webpack_require__(9);
var AbstractLayout = /** @class */ (function () {
    function AbstractLayout() {
    }
    AbstractLayout.prototype.layout = function (container, layouter) {
        var boundsData = layouter.getBoundsData(container);
        var options = this.getLayoutOptions(container);
        var childrenSize = this.getChildrenSize(container, options, layouter);
        var maxWidth = options.paddingFactor * (options.resizeContainer
            ? childrenSize.width
            : Math.max(0, this.getFixedContainerBounds(container, options, layouter).width) - options.paddingLeft - options.paddingRight);
        var maxHeight = options.paddingFactor * (options.resizeContainer
            ? childrenSize.height
            : Math.max(0, this.getFixedContainerBounds(container, options, layouter).height) - options.paddingTop - options.paddingBottom);
        if (maxWidth > 0 && maxHeight > 0) {
            var offset = this.layoutChildren(container, layouter, options, maxWidth, maxHeight);
            boundsData.bounds = this.getFinalContainerBounds(container, offset, options, maxWidth, maxHeight);
            boundsData.boundsChanged = true;
        }
    };
    AbstractLayout.prototype.getFinalContainerBounds = function (container, lastOffset, options, maxWidth, maxHeight) {
        return {
            x: container.bounds.x,
            y: container.bounds.y,
            width: maxWidth + options.paddingLeft + options.paddingRight,
            height: maxHeight + options.paddingTop + options.paddingBottom
        };
    };
    AbstractLayout.prototype.getFixedContainerBounds = function (container, layoutOptions, layouter) {
        var currentContainer = container;
        while (true) {
            if (model_1.isBoundsAware(currentContainer)) {
                var bounds = currentContainer.bounds;
                if (model_1.isLayoutContainer(currentContainer) && layoutOptions.resizeContainer)
                    layouter.log.error(currentContainer, 'Resizable container found while detecting fixed bounds');
                if (geometry_1.isValidDimension(bounds))
                    return bounds;
            }
            if (currentContainer instanceof smodel_1.SChildElement) {
                currentContainer = currentContainer.parent;
            }
            else {
                layouter.log.error(currentContainer, 'Cannot detect fixed bounds');
                return geometry_1.EMPTY_BOUNDS;
            }
        }
    };
    AbstractLayout.prototype.layoutChildren = function (container, layouter, containerOptions, maxWidth, maxHeight) {
        var _this = this;
        var currentOffset = {
            x: containerOptions.paddingLeft + 0.5 * (maxWidth - (maxWidth / containerOptions.paddingFactor)),
            y: containerOptions.paddingTop + 0.5 * (maxHeight - (maxHeight / containerOptions.paddingFactor))
        };
        container.children.forEach(function (child) {
            if (model_1.isLayoutableChild(child)) {
                var boundsData = layouter.getBoundsData(child);
                var bounds = boundsData.bounds;
                var childOptions = _this.getChildLayoutOptions(child, containerOptions);
                if (bounds !== undefined && geometry_1.isValidDimension(bounds)) {
                    currentOffset = _this.layoutChild(child, boundsData, bounds, childOptions, containerOptions, currentOffset, maxWidth, maxHeight);
                }
            }
        });
        return currentOffset;
    };
    AbstractLayout.prototype.getDx = function (hAlign, bounds, maxWidth) {
        switch (hAlign) {
            case 'left':
                return 0;
            case 'center':
                return 0.5 * (maxWidth - bounds.width);
            case 'right':
                return maxWidth - bounds.width;
        }
    };
    AbstractLayout.prototype.getDy = function (vAlign, bounds, maxHeight) {
        switch (vAlign) {
            case 'top':
                return 0;
            case 'center':
                return 0.5 * (maxHeight - bounds.height);
            case 'bottom':
                return maxHeight - bounds.height;
        }
    };
    AbstractLayout.prototype.getChildLayoutOptions = function (child, containerOptions) {
        var layoutOptions = child.layoutOptions;
        if (layoutOptions === undefined)
            return containerOptions;
        else
            return this.spread(containerOptions, layoutOptions);
    };
    AbstractLayout.prototype.getLayoutOptions = function (element) {
        var _this = this;
        var current = element;
        var allOptions = [];
        while (current !== undefined) {
            var layoutOptions = current.layoutOptions;
            if (layoutOptions !== undefined)
                allOptions.push(layoutOptions);
            if (current instanceof smodel_1.SChildElement)
                current = current.parent;
            else
                break;
        }
        return allOptions.reverse().reduce(function (a, b) { return _this.spread(a, b); }, this.getDefaultLayoutOptions());
    };
    return AbstractLayout;
}());
exports.AbstractLayout = AbstractLayout;
//# sourceMappingURL=abstract-layout.js.map

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var registry_1 = __webpack_require__(53);
var geometry_1 = __webpack_require__(3);
var model_1 = __webpack_require__(9);
var vbox_layout_1 = __webpack_require__(138);
var hbox_layout_1 = __webpack_require__(136);
var stack_layout_1 = __webpack_require__(137);
var LayoutRegistry = /** @class */ (function (_super) {
    __extends(LayoutRegistry, _super);
    function LayoutRegistry() {
        var _this = _super.call(this) || this;
        _this.register(vbox_layout_1.VBoxLayouter.KIND, new vbox_layout_1.VBoxLayouter());
        _this.register(hbox_layout_1.HBoxLayouter.KIND, new hbox_layout_1.HBoxLayouter());
        _this.register(stack_layout_1.StackLayouter.KIND, new stack_layout_1.StackLayouter());
        return _this;
    }
    return LayoutRegistry;
}(registry_1.InstanceRegistry));
exports.LayoutRegistry = LayoutRegistry;
var Layouter = /** @class */ (function () {
    function Layouter(layoutRegistry, logger) {
        this.layoutRegistry = layoutRegistry;
        this.logger = logger;
    }
    Layouter.prototype.layout = function (element2boundsData) {
        new StatefulLayouter(element2boundsData, this.layoutRegistry, this.logger).layout();
    };
    Layouter = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.LayoutRegistry)),
        __param(1, inversify_1.inject(types_1.TYPES.ILogger)),
        __metadata("design:paramtypes", [LayoutRegistry, Object])
    ], Layouter);
    return Layouter;
}());
exports.Layouter = Layouter;
var StatefulLayouter = /** @class */ (function () {
    function StatefulLayouter(element2boundsData, layoutRegistry, log) {
        var _this = this;
        this.element2boundsData = element2boundsData;
        this.layoutRegistry = layoutRegistry;
        this.log = log;
        this.toBeLayouted = [];
        element2boundsData.forEach(function (data, element) {
            if (model_1.isLayoutContainer(element))
                _this.toBeLayouted.push(element);
        });
    }
    StatefulLayouter.prototype.getBoundsData = function (element) {
        var boundsData = this.element2boundsData.get(element);
        var bounds = element.bounds;
        if (model_1.isLayoutContainer(element) && this.toBeLayouted.indexOf(element) >= 0) {
            bounds = this.doLayout(element);
        }
        if (!boundsData) {
            boundsData = {
                bounds: bounds,
                boundsChanged: false,
                alignmentChanged: false
            };
            this.element2boundsData.set(element, boundsData);
        }
        return boundsData;
    };
    StatefulLayouter.prototype.layout = function () {
        while (this.toBeLayouted.length > 0) {
            var element = this.toBeLayouted[0];
            this.doLayout(element);
        }
    };
    StatefulLayouter.prototype.doLayout = function (element) {
        var index = this.toBeLayouted.indexOf(element);
        if (index >= 0)
            this.toBeLayouted.splice(index, 1);
        var layout = this.layoutRegistry.get(element.layout);
        if (layout)
            layout.layout(element, this);
        var boundsData = this.element2boundsData.get(element);
        if (boundsData !== undefined && boundsData.bounds !== undefined) {
            return boundsData.bounds;
        }
        else {
            this.log.error(element, 'Layout failed');
            return geometry_1.EMPTY_BOUNDS;
        }
    };
    return StatefulLayouter;
}());
exports.StatefulLayouter = StatefulLayouter;
//# sourceMappingURL=layout.js.map

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
* Copyright (C) 2017 TypeFox and others.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
* You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var registry_1 = __webpack_require__(53);
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var ButtonHandlerRegistry = /** @class */ (function (_super) {
    __extends(ButtonHandlerRegistry, _super);
    function ButtonHandlerRegistry(buttonHandlerFactories) {
        var _this = _super.call(this) || this;
        buttonHandlerFactories.forEach(function (factory) { return _this.register(factory.TYPE, new factory()); });
        return _this;
    }
    ButtonHandlerRegistry = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.multiInject(types_1.TYPES.IButtonHandler)), __param(0, inversify_1.optional()),
        __metadata("design:paramtypes", [Array])
    ], ButtonHandlerRegistry);
    return ButtonHandlerRegistry;
}(registry_1.InstanceRegistry));
exports.ButtonHandlerRegistry = ButtonHandlerRegistry;
//# sourceMappingURL=button-handler.js.map

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var model_1 = __webpack_require__(9);
var model_2 = __webpack_require__(51);
var SButton = /** @class */ (function (_super) {
    __extends(SButton, _super);
    function SButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enabled = true;
        return _this;
    }
    SButton.prototype.hasFeature = function (feature) {
        return feature === model_1.boundsFeature || feature === model_2.fadeFeature || feature === model_1.layoutableChildFeature;
    };
    return SButton;
}(model_1.SShapeElement));
exports.SButton = SButton;
//# sourceMappingURL=model.js.map

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.expandFeature = Symbol('expandFeature');
function isExpandable(element) {
    return 'expanded' in element && element.hasFeature(exports.expandFeature);
}
exports.isExpandable = isExpandable;
//# sourceMappingURL=model.js.map

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var animation_1 = __webpack_require__(39);
var smodel_1 = __webpack_require__(2);
var vnode_utils_1 = __webpack_require__(18);
var model_1 = __webpack_require__(51);
var FadeAnimation = /** @class */ (function (_super) {
    __extends(FadeAnimation, _super);
    function FadeAnimation(model, elementFades, context, removeAfterFadeOut) {
        if (removeAfterFadeOut === void 0) { removeAfterFadeOut = false; }
        var _this = _super.call(this, context) || this;
        _this.model = model;
        _this.elementFades = elementFades;
        _this.removeAfterFadeOut = removeAfterFadeOut;
        return _this;
    }
    FadeAnimation.prototype.tween = function (t, context) {
        for (var _i = 0, _a = this.elementFades; _i < _a.length; _i++) {
            var elementFade = _a[_i];
            var element = elementFade.element;
            if (elementFade.type === 'in') {
                element.opacity = t;
            }
            else if (elementFade.type === 'out') {
                element.opacity = 1 - t;
                if (t === 1 && this.removeAfterFadeOut && element instanceof smodel_1.SChildElement) {
                    element.parent.remove(element);
                }
            }
        }
        return this.model;
    };
    return FadeAnimation;
}(animation_1.Animation));
exports.FadeAnimation = FadeAnimation;
var ElementFader = /** @class */ (function () {
    function ElementFader() {
    }
    ElementFader.prototype.decorate = function (vnode, element) {
        if (model_1.isFadeable(element)) {
            vnode_utils_1.setAttr(vnode, 'opacity', element.opacity);
        }
        return vnode;
    };
    ElementFader.prototype.postUpdate = function () {
    };
    ElementFader = __decorate([
        inversify_1.injectable()
    ], ElementFader);
    return ElementFader;
}());
exports.ElementFader = ElementFader;
//# sourceMappingURL=fade.js.map

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
* Copyright (C) 2017 TypeFox and others.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
* You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mouse_tool_1 = __webpack_require__(30);
var smodel_utils_1 = __webpack_require__(13);
var model_1 = __webpack_require__(140);
var OpenAction = /** @class */ (function () {
    function OpenAction(elementId) {
        this.elementId = elementId;
        this.kind = OpenAction.KIND;
    }
    OpenAction.KIND = 'open';
    return OpenAction;
}());
exports.OpenAction = OpenAction;
var OpenMouseListener = /** @class */ (function (_super) {
    __extends(OpenMouseListener, _super);
    function OpenMouseListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenMouseListener.prototype.doubleClick = function (target, event) {
        var openableTarget = smodel_utils_1.findParentByFeature(target, model_1.isOpenable);
        if (openableTarget !== undefined) {
            return [new OpenAction(openableTarget.id)];
        }
        return [];
    };
    return OpenMouseListener;
}(mouse_tool_1.MouseListener));
exports.OpenMouseListener = OpenMouseListener;
//# sourceMappingURL=open.js.map

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(65);
var key_tool_1 = __webpack_require__(35);
var UndoAction = /** @class */ (function () {
    function UndoAction() {
        this.kind = UndoAction.KIND;
    }
    UndoAction.KIND = 'undo';
    return UndoAction;
}());
exports.UndoAction = UndoAction;
var RedoAction = /** @class */ (function () {
    function RedoAction() {
        this.kind = RedoAction.KIND;
    }
    RedoAction.KIND = 'redo';
    return RedoAction;
}());
exports.RedoAction = RedoAction;
var UndoRedoKeyListener = /** @class */ (function (_super) {
    __extends(UndoRedoKeyListener, _super);
    function UndoRedoKeyListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UndoRedoKeyListener.prototype.keyDown = function (element, event) {
        if (browser_1.isCtrlOrCmd(event) && event.keyCode === 90) {
            if (event.shiftKey)
                return [new RedoAction];
            else
                return [new UndoAction];
        }
        return [];
    };
    return UndoRedoKeyListener;
}(key_tool_1.KeyListener));
exports.UndoRedoKeyListener = UndoRedoKeyListener;
//# sourceMappingURL=undo-redo.js.map

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var smodel_1 = __webpack_require__(2);
var ModelMatcher = /** @class */ (function () {
    function ModelMatcher() {
    }
    ModelMatcher.prototype.match = function (left, right) {
        var result = {};
        this.matchLeft(left, result);
        this.matchRight(right, result);
        return result;
    };
    ModelMatcher.prototype.matchLeft = function (element, result, parentId) {
        var match = result[element.id];
        if (match !== undefined) {
            match.left = element;
            match.leftParentId = parentId;
        }
        else {
            match = {
                left: element,
                leftParentId: parentId
            };
            result[element.id] = match;
        }
        if (element.children !== undefined) {
            for (var _i = 0, _a = element.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.matchLeft(child, result, element.id);
            }
        }
    };
    ModelMatcher.prototype.matchRight = function (element, result, parentId) {
        var match = result[element.id];
        if (match !== undefined) {
            match.right = element;
            match.rightParentId = parentId;
        }
        else {
            match = {
                right: element,
                rightParentId: parentId
            };
            result[element.id] = match;
        }
        if (element.children !== undefined) {
            for (var _i = 0, _a = element.children; _i < _a.length; _i++) {
                var child = _a[_i];
                this.matchRight(child, result, element.id);
            }
        }
    };
    return ModelMatcher;
}());
exports.ModelMatcher = ModelMatcher;
function applyMatches(root, matches) {
    var index;
    if (root instanceof smodel_1.SModelRoot) {
        index = root.index;
    }
    else {
        index = new smodel_1.SModelIndex();
        index.add(root);
    }
    for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
        var match = matches_1[_i];
        var newElementInserted = false;
        if (match.left !== undefined && match.leftParentId !== undefined) {
            var parent_1 = index.getById(match.leftParentId);
            if (parent_1 !== undefined && parent_1.children !== undefined) {
                var i = parent_1.children.indexOf(match.left);
                if (i >= 0) {
                    if (match.right !== undefined && match.leftParentId === match.rightParentId) {
                        parent_1.children.splice(i, 1, match.right);
                        newElementInserted = true;
                    }
                    else {
                        parent_1.children.splice(i, 1);
                    }
                }
                index.remove(match.left);
            }
        }
        if (!newElementInserted && match.right !== undefined && match.rightParentId !== undefined) {
            var parent_2 = index.getById(match.rightParentId);
            if (parent_2 !== undefined) {
                if (parent_2.children === undefined)
                    parent_2.children = [];
                parent_2.children.push(match.right);
            }
        }
    }
}
exports.applyMatches = applyMatches;
//# sourceMappingURL=model-matching.js.map

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var geometry_1 = __webpack_require__(3);
var animation_1 = __webpack_require__(39);
var command_1 = __webpack_require__(8);
var fade_1 = __webpack_require__(94);
var smodel_1 = __webpack_require__(2);
var move_1 = __webpack_require__(64);
var model_1 = __webpack_require__(51);
var model_2 = __webpack_require__(41);
var model_3 = __webpack_require__(9);
var viewport_root_1 = __webpack_require__(100);
var model_4 = __webpack_require__(31);
var model_matching_1 = __webpack_require__(97);
var resize_1 = __webpack_require__(253);
/**
 * Sent from the model source to the client in order to update the model. If no model is present yet,
 * this behaves the same as a SetModelAction. The transition from the old model to the new one can be animated.
 */
var UpdateModelAction = /** @class */ (function () {
    function UpdateModelAction(newRoot) {
        this.newRoot = newRoot;
        this.kind = UpdateModelCommand.KIND;
        this.animate = true;
    }
    return UpdateModelAction;
}());
exports.UpdateModelAction = UpdateModelAction;
var UpdateModelCommand = /** @class */ (function (_super) {
    __extends(UpdateModelCommand, _super);
    function UpdateModelCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        if (action.animate === undefined)
            action.animate = true;
        return _this;
    }
    UpdateModelCommand.prototype.execute = function (context) {
        var newRoot;
        if (this.action.newRoot !== undefined) {
            newRoot = context.modelFactory.createRoot(this.action.newRoot);
        }
        else {
            newRoot = context.modelFactory.createRoot(context.root);
            if (this.action.matches !== undefined)
                this.applyMatches(newRoot, this.action.matches, context);
        }
        this.oldRoot = context.root;
        this.newRoot = newRoot;
        return this.performUpdate(this.oldRoot, this.newRoot, context);
    };
    UpdateModelCommand.prototype.performUpdate = function (oldRoot, newRoot, context) {
        if (this.action.animate && oldRoot.id === newRoot.id) {
            var matchResult = void 0;
            if (this.action.matches === undefined) {
                var matcher = new model_matching_1.ModelMatcher();
                matchResult = matcher.match(oldRoot, newRoot);
            }
            else {
                matchResult = this.convertToMatchResult(this.action.matches, oldRoot, newRoot);
            }
            var animationOrRoot = this.computeAnimation(newRoot, matchResult, context);
            if (animationOrRoot instanceof animation_1.Animation)
                return animationOrRoot.start();
            else
                return animationOrRoot;
        }
        else {
            newRoot.canvasBounds = oldRoot.canvasBounds;
            return newRoot;
        }
    };
    UpdateModelCommand.prototype.applyMatches = function (root, matches, context) {
        var index = root.index;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match.left !== undefined) {
                var element = index.getById(match.left.id);
                if (element instanceof smodel_1.SChildElement)
                    element.parent.remove(element);
            }
            if (match.right !== undefined) {
                var element = context.modelFactory.createElement(match.right);
                var parent_1 = void 0;
                if (match.rightParentId !== undefined)
                    parent_1 = index.getById(match.rightParentId);
                if (parent_1 instanceof smodel_1.SParentElement)
                    parent_1.add(element);
                else
                    root.add(element);
            }
        }
    };
    UpdateModelCommand.prototype.convertToMatchResult = function (matches, leftRoot, rightRoot) {
        var result = {};
        for (var _i = 0, matches_2 = matches; _i < matches_2.length; _i++) {
            var match = matches_2[_i];
            var converted = {};
            var id = undefined;
            if (match.left !== undefined) {
                id = match.left.id;
                converted.left = leftRoot.index.getById(id);
                converted.leftParentId = match.leftParentId;
            }
            if (match.right !== undefined) {
                id = match.right.id;
                converted.right = rightRoot.index.getById(id);
                converted.rightParentId = match.rightParentId;
            }
            if (id !== undefined)
                result[id] = converted;
        }
        return result;
    };
    UpdateModelCommand.prototype.computeAnimation = function (newRoot, matchResult, context) {
        var animationData = {
            fades: []
        };
        for (var id in matchResult) {
            var match = matchResult[id];
            if (match.left !== undefined && match.right !== undefined) {
                // The element is still there, but may have been moved
                this.updateElement(match.left, match.right, animationData);
            }
            else if (match.right !== undefined) {
                // An element has been added
                var right = match.right;
                if (model_1.isFadeable(right)) {
                    right.opacity = 0;
                    animationData.fades.push({
                        element: right,
                        type: 'in'
                    });
                }
            }
            else if (match.left instanceof smodel_1.SChildElement) {
                // An element has been removed
                var left = match.left;
                if (model_1.isFadeable(left) && match.leftParentId !== undefined) {
                    if (newRoot.index.getById(left.id) === undefined) {
                        var parent_2 = newRoot.index.getById(match.leftParentId);
                        if (parent_2 instanceof smodel_1.SParentElement) {
                            var leftCopy = context.modelFactory.createElement(left);
                            parent_2.add(leftCopy);
                            animationData.fades.push({
                                element: leftCopy,
                                type: 'out'
                            });
                        }
                    }
                }
            }
        }
        var animations = this.createAnimations(animationData, newRoot, context);
        if (animations.length >= 2) {
            return new animation_1.CompoundAnimation(newRoot, context, animations);
        }
        else if (animations.length === 1) {
            return animations[0];
        }
        else {
            return newRoot;
        }
    };
    UpdateModelCommand.prototype.updateElement = function (left, right, animationData) {
        if (model_2.isLocateable(left) && model_2.isLocateable(right)) {
            var leftPos = left.position;
            var rightPos = right.position;
            if (!geometry_1.almostEquals(leftPos.x, rightPos.x) || !geometry_1.almostEquals(leftPos.y, rightPos.y)) {
                if (animationData.moves === undefined)
                    animationData.moves = [];
                animationData.moves.push({
                    element: right,
                    elementId: right.id,
                    fromPosition: leftPos,
                    toPosition: rightPos
                });
                right.position = leftPos;
            }
        }
        if (model_3.isBoundsAware(left) && model_3.isBoundsAware(right)) {
            if (!geometry_1.isValidDimension(right.bounds)) {
                right.bounds = {
                    x: right.bounds.x,
                    y: right.bounds.y,
                    width: left.bounds.width,
                    height: left.bounds.height
                };
            }
            else if (!geometry_1.almostEquals(left.bounds.width, right.bounds.width)
                || !geometry_1.almostEquals(left.bounds.height, right.bounds.height)) {
                if (animationData.resizes === undefined)
                    animationData.resizes = [];
                animationData.resizes.push({
                    element: right,
                    fromDimension: {
                        width: left.bounds.width,
                        height: left.bounds.height,
                    },
                    toDimension: {
                        width: right.bounds.width,
                        height: right.bounds.height,
                    }
                });
            }
        }
        if (model_4.isSelectable(left) && model_4.isSelectable(right)) {
            right.selected = left.selected;
        }
        if (left instanceof smodel_1.SModelRoot && right instanceof smodel_1.SModelRoot) {
            right.canvasBounds = left.canvasBounds;
        }
        if (left instanceof viewport_root_1.ViewportRootElement && right instanceof viewport_root_1.ViewportRootElement) {
            right.scroll = left.scroll;
            right.zoom = left.zoom;
        }
    };
    UpdateModelCommand.prototype.createAnimations = function (data, root, context) {
        var animations = [];
        if (data.fades.length > 0) {
            animations.push(new fade_1.FadeAnimation(root, data.fades, context, true));
        }
        if (data.moves !== undefined && data.moves.length > 0) {
            var movesMap = new Map;
            for (var _i = 0, _a = data.moves; _i < _a.length; _i++) {
                var move = _a[_i];
                movesMap.set(move.elementId, move);
            }
            animations.push(new move_1.MoveAnimation(root, movesMap, context, false));
        }
        if (data.resizes !== undefined && data.resizes.length > 0) {
            var resizesMap = new Map;
            for (var _b = 0, _c = data.resizes; _b < _c.length; _b++) {
                var resize = _c[_b];
                resizesMap.set(resize.element.id, resize);
            }
            animations.push(new resize_1.ResizeAnimation(root, resizesMap, context, false));
        }
        return animations;
    };
    UpdateModelCommand.prototype.undo = function (context) {
        return this.performUpdate(this.newRoot, this.oldRoot, context);
    };
    UpdateModelCommand.prototype.redo = function (context) {
        return this.performUpdate(this.oldRoot, this.newRoot, context);
    };
    UpdateModelCommand.KIND = 'updateModel';
    UpdateModelCommand = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [UpdateModelAction])
    ], UpdateModelCommand);
    return UpdateModelCommand;
}(command_1.Command));
exports.UpdateModelCommand = UpdateModelCommand;
//# sourceMappingURL=update-model.js.map

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var geometry_1 = __webpack_require__(3);
var browser_1 = __webpack_require__(65);
var smodel_1 = __webpack_require__(2);
var command_1 = __webpack_require__(8);
var key_tool_1 = __webpack_require__(35);
var model_1 = __webpack_require__(9);
var model_2 = __webpack_require__(31);
var viewport_1 = __webpack_require__(42);
var model_3 = __webpack_require__(32);
/**
 * Triggered when the user requests the viewer to center on the current model. The resulting
 * CenterCommand changes the scroll setting of the viewport accordingly and resets the zoom to its default.
 * This action can also be sent from the model source to the client in order to perform such a
 * viewport change programmatically.
 */
var CenterAction = /** @class */ (function () {
    function CenterAction(elementIds, animate) {
        if (animate === void 0) { animate = true; }
        this.elementIds = elementIds;
        this.animate = animate;
        this.kind = CenterCommand.KIND;
    }
    return CenterAction;
}());
exports.CenterAction = CenterAction;
/**
 * Triggered when the user requests the viewer to fit its content to the available drawing area.
 * The resulting FitToScreenCommand changes the zoom and scroll settings of the viewport so the model
 * can be shown completely. This action can also be sent from the model source to the client in order
 * to perform such a viewport change programmatically.
 */
var FitToScreenAction = /** @class */ (function () {
    function FitToScreenAction(elementIds, padding, maxZoom, animate) {
        if (animate === void 0) { animate = true; }
        this.elementIds = elementIds;
        this.padding = padding;
        this.maxZoom = maxZoom;
        this.animate = animate;
        this.kind = FitToScreenCommand.KIND;
    }
    return FitToScreenAction;
}());
exports.FitToScreenAction = FitToScreenAction;
var BoundsAwareViewportCommand = /** @class */ (function (_super) {
    __extends(BoundsAwareViewportCommand, _super);
    function BoundsAwareViewportCommand(animate) {
        var _this = _super.call(this) || this;
        _this.animate = animate;
        return _this;
    }
    BoundsAwareViewportCommand.prototype.initialize = function (model) {
        var _this = this;
        if (model_3.isViewport(model)) {
            this.oldViewport = {
                scroll: model.scroll,
                zoom: model.zoom
            };
            var allBounds_1 = [];
            this.getElementIds().forEach(function (id) {
                var element = model.index.getById(id);
                if (element && model_1.isBoundsAware(element))
                    allBounds_1.push(_this.boundsInViewport(element, element.bounds, model));
            });
            if (allBounds_1.length === 0) {
                model.index.all().forEach(function (element) {
                    if (model_2.isSelectable(element) && element.selected && model_1.isBoundsAware(element))
                        allBounds_1.push(_this.boundsInViewport(element, element.bounds, model));
                });
            }
            if (allBounds_1.length === 0) {
                model.index.all().forEach(function (element) {
                    if (model_1.isBoundsAware(element))
                        allBounds_1.push(_this.boundsInViewport(element, element.bounds, model));
                });
            }
            var bounds = allBounds_1.reduce(function (b0, b1) { return b0 === undefined ? b1 : geometry_1.combine(b0, b1); }, undefined);
            if (geometry_1.isValidDimension(bounds))
                this.newViewport = this.getNewViewport(bounds, model);
        }
    };
    BoundsAwareViewportCommand.prototype.boundsInViewport = function (element, bounds, viewport) {
        if (element instanceof smodel_1.SChildElement && element.parent !== viewport)
            return this.boundsInViewport(element.parent, element.parent.localToParent(bounds), viewport);
        else
            return bounds;
    };
    BoundsAwareViewportCommand.prototype.execute = function (context) {
        this.initialize(context.root);
        return this.redo(context);
    };
    BoundsAwareViewportCommand.prototype.undo = function (context) {
        var model = context.root;
        if (model_3.isViewport(model) && this.newViewport && !this.equal(this.newViewport, this.oldViewport)) {
            if (this.animate)
                return new viewport_1.ViewportAnimation(model, this.newViewport, this.oldViewport, context).start();
            else {
                model.scroll = this.oldViewport.scroll;
                model.zoom = this.oldViewport.zoom;
            }
        }
        return model;
    };
    BoundsAwareViewportCommand.prototype.redo = function (context) {
        var model = context.root;
        if (model_3.isViewport(model) && this.newViewport && !this.equal(this.newViewport, this.oldViewport)) {
            if (this.animate) {
                return new viewport_1.ViewportAnimation(model, this.oldViewport, this.newViewport, context).start();
            }
            else {
                model.scroll = this.newViewport.scroll;
                model.zoom = this.newViewport.zoom;
            }
        }
        return model;
    };
    BoundsAwareViewportCommand.prototype.equal = function (vp1, vp2) {
        return vp1.zoom === vp2.zoom && vp1.scroll.x === vp2.scroll.x && vp1.scroll.y === vp2.scroll.y;
    };
    return BoundsAwareViewportCommand;
}(command_1.Command));
exports.BoundsAwareViewportCommand = BoundsAwareViewportCommand;
var CenterCommand = /** @class */ (function (_super) {
    __extends(CenterCommand, _super);
    function CenterCommand(action) {
        var _this = _super.call(this, action.animate) || this;
        _this.action = action;
        return _this;
    }
    CenterCommand.prototype.getElementIds = function () {
        return this.action.elementIds;
    };
    CenterCommand.prototype.getNewViewport = function (bounds, model) {
        var c = geometry_1.center(bounds);
        return {
            scroll: {
                x: c.x - 0.5 * model.canvasBounds.width,
                y: c.y - 0.5 * model.canvasBounds.height
            },
            zoom: 1
        };
    };
    CenterCommand.KIND = 'center';
    return CenterCommand;
}(BoundsAwareViewportCommand));
exports.CenterCommand = CenterCommand;
var FitToScreenCommand = /** @class */ (function (_super) {
    __extends(FitToScreenCommand, _super);
    function FitToScreenCommand(action) {
        var _this = _super.call(this, action.animate) || this;
        _this.action = action;
        return _this;
    }
    FitToScreenCommand.prototype.getElementIds = function () {
        return this.action.elementIds;
    };
    FitToScreenCommand.prototype.getNewViewport = function (bounds, model) {
        var c = geometry_1.center(bounds);
        var delta = this.action.padding === undefined
            ? 0
            : 2 * this.action.padding;
        var zoom = Math.min(model.canvasBounds.width / (bounds.width + delta), model.canvasBounds.height / bounds.height + delta);
        if (this.action.maxZoom !== undefined)
            zoom = Math.min(zoom, this.action.maxZoom);
        return {
            scroll: {
                x: c.x - 0.5 * model.canvasBounds.width / zoom,
                y: c.y - 0.5 * model.canvasBounds.height / zoom
            },
            zoom: zoom
        };
    };
    FitToScreenCommand.KIND = 'fit';
    return FitToScreenCommand;
}(BoundsAwareViewportCommand));
exports.FitToScreenCommand = FitToScreenCommand;
var CenterKeyboardListener = /** @class */ (function (_super) {
    __extends(CenterKeyboardListener, _super);
    function CenterKeyboardListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CenterKeyboardListener.prototype.keyDown = function (element, event) {
        if (browser_1.isCtrlOrCmd(event)) {
            switch (event.keyCode) {
                case 67:
                    return [new CenterAction([])];
                case 70:
                    return [new FitToScreenAction([])];
            }
        }
        return [];
    };
    return CenterKeyboardListener;
}(key_tool_1.KeyListener));
exports.CenterKeyboardListener = CenterKeyboardListener;
//# sourceMappingURL=center-fit.js.map

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var geometry_1 = __webpack_require__(3);
var smodel_1 = __webpack_require__(2);
var model_1 = __webpack_require__(32);
var model_2 = __webpack_require__(62);
/**
 * Model root element that defines a viewport, so it transforms the coordinate system with
 * a `scroll` translation and a `zoom` scaling.
 */
var ViewportRootElement = /** @class */ (function (_super) {
    __extends(ViewportRootElement, _super);
    function ViewportRootElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scroll = { x: 0, y: 0 };
        _this.zoom = 1;
        _this.export = false;
        return _this;
    }
    ViewportRootElement.prototype.hasFeature = function (feature) {
        return feature === model_1.viewportFeature || feature === model_2.exportFeature;
    };
    ViewportRootElement.prototype.localToParent = function (point) {
        var result = {
            x: (point.x - this.scroll.x) * this.zoom,
            y: (point.y - this.scroll.y) * this.zoom,
            width: -1,
            height: -1
        };
        if (geometry_1.isBounds(point)) {
            result.width = point.width * this.zoom;
            result.height = point.height * this.zoom;
        }
        return result;
    };
    ViewportRootElement.prototype.parentToLocal = function (point) {
        var result = {
            x: (point.x / this.zoom) + this.scroll.x,
            y: (point.y / this.zoom) + this.scroll.y,
            width: -1,
            height: -1
        };
        if (geometry_1.isBounds(point) && geometry_1.isValidDimension(point)) {
            result.width = point.width / this.zoom;
            result.height = point.height / this.zoom;
        }
        return result;
    };
    return ViewportRootElement;
}(smodel_1.SModelRoot));
exports.ViewportRootElement = ViewportRootElement;
//# sourceMappingURL=viewport-root.js.map

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var smodel_1 = __webpack_require__(2);
var model_1 = __webpack_require__(9);
var model_2 = __webpack_require__(51);
var model_3 = __webpack_require__(63);
var model_4 = __webpack_require__(41);
var model_5 = __webpack_require__(31);
var viewport_root_1 = __webpack_require__(100);
var geometry_1 = __webpack_require__(3);
var model_6 = __webpack_require__(9);
/**
 * Root element for graph-like models.
 */
var SGraph = /** @class */ (function (_super) {
    __extends(SGraph, _super);
    function SGraph() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SGraph;
}(viewport_root_1.ViewportRootElement));
exports.SGraph = SGraph;
/**
 * Model element class for nodes, which are connectable entities in a graph. A node can be connected to
 * another node via an SEdge. Such a connection can be direct, i.e. the node is the source or target of
 * the edge, or indirect through a port, i.e. it contains an SPort which is the source or target of the edge.
 */
var SNode = /** @class */ (function (_super) {
    __extends(SNode, _super);
    function SNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hoverFeedback = false;
        _this.selected = false;
        _this.opacity = 1;
        return _this;
    }
    SNode.prototype.hasFeature = function (feature) {
        return feature === model_5.selectFeature || feature === model_4.moveFeature || feature === model_1.boundsFeature
            || feature === model_1.layoutContainerFeature || feature === model_2.fadeFeature || feature === model_3.hoverFeedbackFeature
            || feature === model_3.popupFeature;
    };
    return SNode;
}(model_6.SShapeElement));
exports.SNode = SNode;
/**
 * A port is a connection point for edges. It should always be contained in an SNode.
 */
var SPort = /** @class */ (function (_super) {
    __extends(SPort, _super);
    function SPort() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hoverFeedback = false;
        _this.selected = false;
        _this.opacity = 1;
        return _this;
    }
    SPort.prototype.hasFeature = function (feature) {
        return feature === model_5.selectFeature || feature === model_1.boundsFeature || feature === model_2.fadeFeature
            || feature === model_3.hoverFeedbackFeature;
    };
    return SPort;
}(model_6.SShapeElement));
exports.SPort = SPort;
/**
 * Model element class for edges, which are the connectors in a graph. An edge has a source and a target,
 * each of which can be either a node or a port. The source and target elements are referenced via their
 * ids and can be resolved with the index stored in the root element.
 */
var SEdge = /** @class */ (function (_super) {
    __extends(SEdge, _super);
    function SEdge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.routingPoints = [];
        _this.opacity = 1;
        return _this;
    }
    Object.defineProperty(SEdge.prototype, "source", {
        get: function () {
            return this.index.getById(this.sourceId);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SEdge.prototype, "target", {
        get: function () {
            return this.index.getById(this.targetId);
        },
        enumerable: true,
        configurable: true
    });
    SEdge.prototype.hasFeature = function (feature) {
        return feature === model_2.fadeFeature;
    };
    return SEdge;
}(smodel_1.SChildElement));
exports.SEdge = SEdge;
/**
 * A label can be attached to a node, edge, or port, and contains some text to be rendered in its view.
 */
var SLabel = /** @class */ (function (_super) {
    __extends(SLabel, _super);
    function SLabel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selected = false;
        _this.alignment = geometry_1.ORIGIN_POINT;
        _this.opacity = 1;
        return _this;
    }
    SLabel.prototype.hasFeature = function (feature) {
        return feature === model_1.boundsFeature || feature === model_1.alignFeature || feature === model_2.fadeFeature || feature === model_1.layoutableChildFeature;
    };
    return SLabel;
}(model_6.SShapeElement));
exports.SLabel = SLabel;
/**
 * A compartment is used to group multiple child elements such as labels of a node. Usually a `vbox`
 * or `hbox` layout is used to arrange these children.
 */
var SCompartment = /** @class */ (function (_super) {
    __extends(SCompartment, _super);
    function SCompartment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.opacity = 1;
        return _this;
    }
    SCompartment.prototype.hasFeature = function (feature) {
        return feature === model_1.boundsFeature || feature === model_1.layoutContainerFeature || feature === model_1.layoutableChildFeature || feature === model_2.fadeFeature;
    };
    return SCompartment;
}(model_6.SShapeElement));
exports.SCompartment = SCompartment;
//# sourceMappingURL=sgraph.js.map

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var action_handler_1 = __webpack_require__(38);
var set_model_1 = __webpack_require__(49);
var svg_exporter_1 = __webpack_require__(40);
/**
 * A model source is serving the model to the event cycle. It represents
 * the entry point to the client for external sources, such as model
 * editors.
 *
 * As an IActionHandler it listens to actions in and reacts to them with
 * commands or actions if necessary. This way, you can implement action
 * protocols between the client and the outside world.
 *
 * There are two default implementations for a ModelSource:
 * <ul>
 * <li>the LocalModelSource handles the actions to calculate bounds and
 * set/update the model</li>
 * <li>the DiagramServer connects via websocket to a remote source. It
 * can be used to connect to a model editor that provides the model,
 * layouts diagrams, transfers selection and answers model queries from
 * the client.</li>
 */
var ModelSource = /** @class */ (function () {
    function ModelSource(actionDispatcher, actionHandlerRegistry, viewerOptions) {
        this.actionDispatcher = actionDispatcher;
        this.viewerOptions = viewerOptions;
        this.initialize(actionHandlerRegistry);
    }
    ModelSource.prototype.initialize = function (registry) {
        // Register model manipulation commands
        registry.registerCommand(set_model_1.SetModelCommand);
        // Register this model source
        registry.register(set_model_1.RequestModelAction.KIND, this);
        registry.register(svg_exporter_1.ExportSvgAction.KIND, this);
    };
    ModelSource = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.IActionDispatcher)),
        __param(1, inversify_1.inject(types_1.TYPES.ActionHandlerRegistry)),
        __param(2, inversify_1.inject(types_1.TYPES.ViewerOptions)),
        __metadata("design:paramtypes", [Object, action_handler_1.ActionHandlerRegistry, Object])
    ], ModelSource);
    return ModelSource;
}());
exports.ModelSource = ModelSource;
//# sourceMappingURL=model-source.js.map

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["none"] = 0] = "none";
    LogLevel[LogLevel["error"] = 1] = "error";
    LogLevel[LogLevel["warn"] = 2] = "warn";
    LogLevel[LogLevel["info"] = 3] = "info";
    LogLevel[LogLevel["log"] = 4] = "log";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var NullLogger = /** @class */ (function () {
    function NullLogger() {
        this.logLevel = LogLevel.none;
    }
    NullLogger.prototype.error = function (thisArg, message) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
    };
    NullLogger.prototype.warn = function (thisArg, message) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
    };
    NullLogger.prototype.info = function (thisArg, message) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
    };
    NullLogger.prototype.log = function (thisArg, message) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
    };
    NullLogger = __decorate([
        inversify_1.injectable()
    ], NullLogger);
    return NullLogger;
}());
exports.NullLogger = NullLogger;
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger(logLevel, viewOptions) {
        if (logLevel === void 0) { logLevel = LogLevel.log; }
        if (viewOptions === void 0) { viewOptions = { baseDiv: '' }; }
        this.logLevel = logLevel;
        this.viewOptions = viewOptions;
    }
    ConsoleLogger.prototype.error = function (thisArg, message) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        if (this.logLevel >= LogLevel.error)
            try {
                console.error.apply(thisArg, this.consoleArguments(thisArg, message, params));
            }
            catch (error) { }
    };
    ConsoleLogger.prototype.warn = function (thisArg, message) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        if (this.logLevel >= LogLevel.warn)
            try {
                console.warn.apply(thisArg, this.consoleArguments(thisArg, message, params));
            }
            catch (error) { }
    };
    ConsoleLogger.prototype.info = function (thisArg, message) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        if (this.logLevel >= LogLevel.info)
            try {
                console.info.apply(thisArg, this.consoleArguments(thisArg, message, params));
            }
            catch (error) { }
    };
    ConsoleLogger.prototype.log = function (thisArg, message) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        if (this.logLevel >= LogLevel.log)
            try {
                console.log.apply(thisArg, this.consoleArguments(thisArg, message, params));
            }
            catch (error) { }
    };
    ConsoleLogger.prototype.consoleArguments = function (thisArg, message, params) {
        var caller;
        if (typeof thisArg === 'object')
            caller = thisArg.constructor.name;
        else
            caller = thisArg;
        var date = new Date();
        return [date.toLocaleTimeString() + ' ' + this.viewOptions.baseDiv + ' ' + caller + ': ' + message].concat(params);
    };
    ConsoleLogger = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.LogLevel)),
        __param(1, inversify_1.inject(types_1.TYPES.ViewerOptions)),
        __metadata("design:paramtypes", [Number, Object])
    ], ConsoleLogger);
    return ConsoleLogger;
}());
exports.ConsoleLogger = ConsoleLogger;
//# sourceMappingURL=logging.js.map

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(23) && !__webpack_require__(24)(function () {
  return Object.defineProperty(__webpack_require__(68)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(14);
var cof = __webpack_require__(36);
var MATCH = __webpack_require__(4)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(4)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(54);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(75);
var createDesc = __webpack_require__(58);
var toIObject = __webpack_require__(33);
var toPrimitive = __webpack_require__(80);
var has = __webpack_require__(25);
var IE8_DOM_DEFINE = __webpack_require__(105);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(23) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(113);
var hiddenKeys = __webpack_require__(69).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(25);
var toIObject = __webpack_require__(33);
var arrayIndexOf = __webpack_require__(157)(false);
var IE_PROTO = __webpack_require__(77)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var dP = __webpack_require__(27);
var DESCRIPTORS = __webpack_require__(23);
var SPECIES = __webpack_require__(4)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(59);
var defined = __webpack_require__(22);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(37);
var invoke = __webpack_require__(162);
var html = __webpack_require__(104);
var cel = __webpack_require__(68);
var global = __webpack_require__(6);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(36)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(59);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(4);


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(182);
var getKeys = __webpack_require__(57);
var redefine = __webpack_require__(28);
var global = __webpack_require__(6);
var hide = __webpack_require__(26);
var Iterators = __webpack_require__(43);
var wks = __webpack_require__(4);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__(307) !== null) && (__webpack_require__(308) !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return saveAs;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_msgs_1 = __webpack_require__(12);
var METADATA_KEY = __webpack_require__(5);
var metadata_1 = __webpack_require__(16);
var decorator_utils_1 = __webpack_require__(29);
var LazyServiceIdentifer = (function () {
    function LazyServiceIdentifer(cb) {
        this._cb = cb;
    }
    LazyServiceIdentifer.prototype.unwrap = function () {
        return this._cb();
    };
    return LazyServiceIdentifer;
}());
exports.LazyServiceIdentifer = LazyServiceIdentifer;
function inject(serviceIdentifier) {
    return function (target, targetKey, index) {
        if (serviceIdentifier === undefined) {
            throw new Error(error_msgs_1.UNDEFINED_INJECT_ANNOTATION(target.name));
        }
        var metadata = new metadata_1.Metadata(METADATA_KEY.INJECT_TAG, serviceIdentifier);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.inject = inject;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(5);
var MetadataReader = (function () {
    function MetadataReader() {
    }
    MetadataReader.prototype.getConstructorMetadata = function (constructorFunc) {
        var compilerGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.PARAM_TYPES, constructorFunc);
        var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED, constructorFunc);
        return {
            compilerGeneratedMetadata: compilerGeneratedMetadata,
            userGeneratedMetadata: userGeneratedMetadata || {}
        };
    };
    MetadataReader.prototype.getPropertiesMetadata = function (constructorFunc) {
        var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED_PROP, constructorFunc) || [];
        return userGeneratedMetadata;
    };
    return MetadataReader;
}());
exports.MetadataReader = MetadataReader;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(5);
var guid_1 = __webpack_require__(34);
var metadata_1 = __webpack_require__(16);
var queryable_string_1 = __webpack_require__(230);
var Target = (function () {
    function Target(type, name, serviceIdentifier, namedOrTagged) {
        this.guid = guid_1.guid();
        this.type = type;
        this.serviceIdentifier = serviceIdentifier;
        this.name = new queryable_string_1.QueryableString(name || "");
        this.metadata = new Array();
        var metadataItem = null;
        if (typeof namedOrTagged === "string") {
            metadataItem = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, namedOrTagged);
        }
        else if (namedOrTagged instanceof metadata_1.Metadata) {
            metadataItem = namedOrTagged;
        }
        if (metadataItem !== null) {
            this.metadata.push(metadataItem);
        }
    }
    Target.prototype.hasTag = function (key) {
        for (var _i = 0, _a = this.metadata; _i < _a.length; _i++) {
            var m = _a[_i];
            if (m.key === key) {
                return true;
            }
        }
        return false;
    };
    Target.prototype.isArray = function () {
        return this.hasTag(METADATA_KEY.MULTI_INJECT_TAG);
    };
    Target.prototype.matchesArray = function (name) {
        return this.matchesTag(METADATA_KEY.MULTI_INJECT_TAG)(name);
    };
    Target.prototype.isNamed = function () {
        return this.hasTag(METADATA_KEY.NAMED_TAG);
    };
    Target.prototype.isTagged = function () {
        return this.metadata.some(function (m) {
            return (m.key !== METADATA_KEY.INJECT_TAG) &&
                (m.key !== METADATA_KEY.MULTI_INJECT_TAG) &&
                (m.key !== METADATA_KEY.NAME_TAG) &&
                (m.key !== METADATA_KEY.UNMANAGED_TAG) &&
                (m.key !== METADATA_KEY.NAMED_TAG);
        });
    };
    Target.prototype.isOptional = function () {
        return this.matchesTag(METADATA_KEY.OPTIONAL_TAG)(true);
    };
    Target.prototype.getNamedTag = function () {
        if (this.isNamed()) {
            return this.metadata.filter(function (m) { return m.key === METADATA_KEY.NAMED_TAG; })[0];
        }
        return null;
    };
    Target.prototype.getCustomTags = function () {
        if (this.isTagged()) {
            return this.metadata.filter(function (m) {
                return (m.key !== METADATA_KEY.INJECT_TAG) &&
                    (m.key !== METADATA_KEY.MULTI_INJECT_TAG) &&
                    (m.key !== METADATA_KEY.NAME_TAG) &&
                    (m.key !== METADATA_KEY.UNMANAGED_TAG) &&
                    (m.key !== METADATA_KEY.NAMED_TAG);
            });
        }
        return null;
    };
    Target.prototype.matchesNamedTag = function (name) {
        return this.matchesTag(METADATA_KEY.NAMED_TAG)(name);
    };
    Target.prototype.matchesTag = function (key) {
        var _this = this;
        return function (value) {
            for (var _i = 0, _a = _this.metadata; _i < _a.length; _i++) {
                var m = _a[_i];
                if (m.key === key && m.value === value) {
                    return true;
                }
            }
            return false;
        };
    };
    return Target;
}());
exports.Target = Target;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_on_syntax_1 = __webpack_require__(83);
var binding_when_syntax_1 = __webpack_require__(84);
var BindingWhenOnSyntax = (function () {
    function BindingWhenOnSyntax(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
    }
    BindingWhenOnSyntax.prototype.when = function (constraint) {
        return this._bindingWhenSyntax.when(constraint);
    };
    BindingWhenOnSyntax.prototype.whenTargetNamed = function (name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenTargetIsDefault = function () {
        return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    BindingWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
    };
    BindingWhenOnSyntax.prototype.whenParentNamed = function (name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
    };
    BindingWhenOnSyntax.prototype.onActivation = function (handler) {
        return this._bindingOnSyntax.onActivation(handler);
    };
    return BindingWhenOnSyntax;
}());
exports.BindingWhenOnSyntax = BindingWhenOnSyntax;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(5);
var metadata_1 = __webpack_require__(16);
var traverseAncerstors = function (request, constraint) {
    var parent = request.parentRequest;
    if (parent !== null) {
        return constraint(parent) ? true : traverseAncerstors(parent, constraint);
    }
    else {
        return false;
    }
};
exports.traverseAncerstors = traverseAncerstors;
var taggedConstraint = function (key) { return function (value) {
    var constraint = function (request) {
        return request !== null && request.target !== null && request.target.matchesTag(key)(value);
    };
    constraint.metaData = new metadata_1.Metadata(key, value);
    return constraint;
}; };
exports.taggedConstraint = taggedConstraint;
var namedConstraint = taggedConstraint(METADATA_KEY.NAMED_TAG);
exports.namedConstraint = namedConstraint;
var typeConstraint = function (type) { return function (request) {
    var binding = null;
    if (request !== null) {
        binding = request.bindings[0];
        if (typeof type === "string") {
            var serviceIdentifier = binding.serviceIdentifier;
            return serviceIdentifier === type;
        }
        else {
            var constructor = request.bindings[0].implementationType;
            return type === constructor;
        }
    }
    return false;
}; };
exports.typeConstraint = typeConstraint;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(12);
function isStackOverflowExeption(error) {
    return (error instanceof RangeError ||
        error.message === ERROR_MSGS.STACK_OVERFLOW);
}
exports.isStackOverflowExeption = isStackOverflowExeption;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function vnode(sel, data, children, text, elm) {
    var key = data === undefined ? undefined : data.key;
    return { sel: sel, data: data, children: children,
        text: text, elm: elm, key: key };
}
exports.vnode = vnode;
exports.default = vnode;
//# sourceMappingURL=vnode.js.map

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Slows down animations towards the begin and the end.
 *
 * @param x the value between 0 (start of animation) and 1 (end of
 *     animation) linearly interpolated in time.
 * @returns {number} the eased value between 0 and 1
 */
function easeInOut(x) {
    if (x < 0.5)
        return x * x * 2;
    else
        return 1 - (1 - x) * (1 - x) * 2;
}
exports.easeInOut = easeInOut;
//# sourceMappingURL=easing.js.map

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var smodel_factory_1 = __webpack_require__(17);
var animation_frame_syncer_1 = __webpack_require__(48);
var command_1 = __webpack_require__(8);
/**
 * The implementation of the ICommandStack. Clients should not use this
 * class directly.
 *
 * The command stack holds the current model as the result of the current
 * promise. When a new command is executed/undone/redone, its execution is
 * chained using <code>Promise#then()</code> to the current Promise. This
 * way we can handle long running commands without blocking the current
 * thread.
 *
 * The command stack also does the special handling for special commands:
 *
 * System commands should be transparent to the user and as such be
 * automatically undone/redone with the next plain command. Additional care
 * must be taken that system commands that are executed after undo don't
 * break the correspondence between the topmost commands on the undo and
 * redo stacks.
 *
 * Hidden commands only tell the viewer to render a hidden model such that
 * its bounds can be extracted from the DOM and forwarded as separate actions.
 * Hidden commands should not leave any trace on the undo/redo/off stacks.
 *
 * Mergeable commands should be merged with their predecessor if possible,
 * such that e.g. multiple subsequent moves of the smae element can be undone
 * in one single step.
 */
var CommandStack = /** @class */ (function () {
    function CommandStack(modelFactory, viewerProvider, logger, syncer, options) {
        this.modelFactory = modelFactory;
        this.viewerProvider = viewerProvider;
        this.logger = logger;
        this.syncer = syncer;
        this.options = options;
        this.undoStack = [];
        this.redoStack = [];
        /**
         * System commands should be transparent to the user in undo/redo
         * operations. When a system command is executed when the redo
         * stack is not empty, it is pushed to offStack instead.
         *
         * On redo, all commands form this stack are undone such that the
         * redo operation gets the exact same model as when it was executed
         * first.
         *
         * On undo, all commands form this stack are undone as well as
         * system ommands should be transparent to the user.
         */
        this.offStack = [];
        this.currentPromise = Promise.resolve({
            root: modelFactory.createRoot(smodel_factory_1.EMPTY_ROOT),
            hiddenRoot: undefined,
            popupRoot: undefined,
            rootChanged: false,
            hiddenRootChanged: false,
            popupChanged: false
        });
    }
    CommandStack.prototype.executeAll = function (commands) {
        var _this = this;
        commands.forEach(function (command) {
            _this.logger.log(_this, 'Executing', command);
            _this.handleCommand(command, command.execute, _this.mergeOrPush);
        });
        return this.thenUpdate();
    };
    CommandStack.prototype.execute = function (command) {
        this.logger.log(this, 'Executing', command);
        this.handleCommand(command, command.execute, this.mergeOrPush);
        return this.thenUpdate();
    };
    CommandStack.prototype.undo = function () {
        var _this = this;
        this.undoOffStackSystemCommands();
        this.undoPreceedingSystemCommands();
        var command = this.undoStack.pop();
        if (command !== undefined) {
            this.logger.log(this, 'Undoing', command);
            this.handleCommand(command, command.undo, function (command, context) {
                _this.redoStack.push(command);
            });
        }
        return this.thenUpdate();
    };
    CommandStack.prototype.redo = function () {
        var _this = this;
        this.undoOffStackSystemCommands();
        var command = this.redoStack.pop();
        if (command !== undefined) {
            this.logger.log(this, 'Redoing', command);
            this.handleCommand(command, command.redo, function (command, context) {
                _this.pushToUndoStack(command);
            });
        }
        this.redoFollowingSystemCommands();
        return this.thenUpdate();
    };
    /**
     * Chains the current promise with another Promise that performs the
     * given operation on the given command.
     *
     * @param beforeResolve a function that is called directly before
     * resolving the Promise to return the new model. Usually puts the
     * command on the appropriate stack.
     */
    CommandStack.prototype.handleCommand = function (command, operation, beforeResolve) {
        var _this = this;
        this.currentPromise = this.currentPromise.then(function (state) {
            var promise = new Promise(function (resolve, reject) {
                var context = _this.createContext(state.root);
                var newResult;
                try {
                    newResult = operation.call(command, context);
                }
                catch (error) {
                    _this.logger.error(_this, "Failed to execute command:", error);
                    newResult = state.root;
                }
                if (command instanceof command_1.HiddenCommand) {
                    resolve(__assign({}, state, {
                        hiddenRoot: newResult,
                        hiddenRootChanged: true
                    }));
                }
                else if (command instanceof command_1.PopupCommand) {
                    resolve(__assign({}, state, {
                        popupRoot: newResult,
                        popupChanged: true
                    }));
                }
                else if (newResult instanceof Promise) {
                    newResult.then(function (newModel) {
                        beforeResolve.call(_this, command, context);
                        resolve(__assign({}, state, {
                            root: newModel,
                            rootChanged: true
                        }));
                    });
                }
                else {
                    beforeResolve.call(_this, command, context);
                    resolve(__assign({}, state, {
                        root: newResult,
                        rootChanged: true
                    }));
                }
            });
            return promise;
        });
    };
    CommandStack.prototype.pushToUndoStack = function (command) {
        this.undoStack.push(command);
        if (this.options.undoHistoryLimit >= 0 && this.undoStack.length > this.options.undoHistoryLimit)
            this.undoStack.splice(0, this.undoStack.length - this.options.undoHistoryLimit);
    };
    /**
     * Notifies the Viewer to render the new model and/or the new hidden model
     * and returns a Promise for the new model.
     */
    CommandStack.prototype.thenUpdate = function () {
        var _this = this;
        this.currentPromise = this.currentPromise.then(function (state) {
            if (state.hiddenRootChanged && state.hiddenRoot !== undefined)
                _this.updateHidden(state.hiddenRoot);
            if (state.rootChanged)
                _this.update(state.root);
            if (state.popupChanged && state.popupRoot !== undefined)
                _this.updatePopup(state.popupRoot);
            return {
                root: state.root,
                hiddenRoot: undefined,
                popupRoot: undefined,
                rootChanged: false,
                hiddenRootChanged: false,
                popupChanged: false
            };
        });
        return this.currentPromise.then(function (state) { return state.root; });
    };
    /**
     * Notify the <code>Viewer</code> that the model has changed.
     */
    CommandStack.prototype.updatePopup = function (model) {
        var _this = this;
        if (this.viewer) {
            this.viewer.updatePopup(model);
            return;
        }
        this.viewerProvider().then(function (viewer) {
            _this.viewer = viewer;
            _this.updatePopup(model);
        });
    };
    /**
     * Notify the <code>Viewer</code> that the model has changed.
     */
    CommandStack.prototype.update = function (model) {
        var _this = this;
        if (this.viewer) {
            this.viewer.update(model);
            return;
        }
        this.viewerProvider().then(function (viewer) {
            _this.viewer = viewer;
            _this.update(model);
        });
    };
    /**
     * Notify the <code>Viewer</code> that the hidden model has changed.
     */
    CommandStack.prototype.updateHidden = function (model) {
        var _this = this;
        if (this.viewer) {
            this.viewer.updateHidden(model);
            return;
        }
        this.viewerProvider().then(function (viewer) {
            _this.viewer = viewer;
            _this.updateHidden(model);
        });
    };
    /**
     * Handling of commands after their execution.
     *
     * Hidden commands are not pushed to any stack.
     *
     * System commands are pushed to the <code>offStack</code> when the redo
     * stack is not empty, allowing to undo the before a redo to keep the chain
     * of commands consistent.
     *
     * Mergable commands are merged if possible.
     */
    CommandStack.prototype.mergeOrPush = function (command, context) {
        var _this = this;
        if (command instanceof command_1.HiddenCommand)
            return;
        if (command instanceof command_1.SystemCommand && this.redoStack.length > 0) {
            this.offStack.push(command);
        }
        else {
            this.offStack.forEach(function (command) { return _this.undoStack.push(command); });
            this.offStack = [];
            this.redoStack = [];
            if (this.undoStack.length > 0) {
                var lastCommand = this.undoStack[this.undoStack.length - 1];
                if (lastCommand instanceof command_1.MergeableCommand && lastCommand.merge(command, context))
                    return;
            }
            this.pushToUndoStack(command);
        }
    };
    /**
     * Reverts all system commands on the offStack.
     */
    CommandStack.prototype.undoOffStackSystemCommands = function () {
        var command = this.offStack.pop();
        while (command !== undefined) {
            this.logger.log(this, 'Undoing off-stack', command);
            this.handleCommand(command, command.undo, function () { });
            command = this.offStack.pop();
        }
    };
    /**
     * System commands should be transparent to the user, so this method
     * is called from <code>undo()</code> to revert all system commands
     * at the top of the undoStack.
     */
    CommandStack.prototype.undoPreceedingSystemCommands = function () {
        var _this = this;
        var command = this.undoStack[this.undoStack.length - 1];
        while (command !== undefined && command instanceof command_1.SystemCommand) {
            this.undoStack.pop();
            this.logger.log(this, 'Undoing', command);
            this.handleCommand(command, command.undo, function (command, context) {
                _this.redoStack.push(command);
            });
            command = this.undoStack[this.undoStack.length - 1];
        }
    };
    /**
     * System commands should be transparent to the user, so this method
     * is called from <code>redo()</code> to re-execute all system commands
     * at the top of the redoStack.
     */
    CommandStack.prototype.redoFollowingSystemCommands = function () {
        var _this = this;
        var command = this.redoStack[this.redoStack.length - 1];
        while (command !== undefined && command instanceof command_1.SystemCommand) {
            this.redoStack.pop();
            this.logger.log(this, 'Redoing ', command);
            this.handleCommand(command, command.redo, function (command, context) {
                _this.pushToUndoStack(command);
            });
            command = this.redoStack[this.redoStack.length - 1];
        }
    };
    /**
     * Assembles the context object that is passed to the commands execution method.
     */
    CommandStack.prototype.createContext = function (currentModel) {
        var context = {
            root: currentModel,
            modelChanged: this,
            modelFactory: this.modelFactory,
            duration: this.options.defaultDuration,
            logger: this.logger,
            syncer: this.syncer
        };
        return context;
    };
    CommandStack = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.IModelFactory)),
        __param(1, inversify_1.inject(types_1.TYPES.IViewerProvider)),
        __param(2, inversify_1.inject(types_1.TYPES.ILogger)),
        __param(3, inversify_1.inject(types_1.TYPES.AnimationFrameSyncer)),
        __param(4, inversify_1.inject(types_1.TYPES.CommandStackOptions)),
        __metadata("design:paramtypes", [Object, Function, Object, animation_frame_syncer_1.AnimationFrameSyncer, Object])
    ], CommandStack);
    return CommandStack;
}());
exports.CommandStack = CommandStack;
//# sourceMappingURL=command-stack.js.map

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var snabbdom_1 = __webpack_require__(149);
/**
 * An view that avoids calculation and patching of VNodes unless some model properties have changed.
 * Based on snabbdom's thunks.
 */
var ThunkView = /** @class */ (function () {
    function ThunkView() {
    }
    ThunkView.prototype.render = function (model, context) {
        var _this = this;
        return snabbdom_1.h(this.selector(model), {
            key: model.id,
            hook: {
                init: this.init.bind(this),
                prepatch: this.prepatch.bind(this)
            },
            fn: function () { return _this.renderAndDecorate(model, context); },
            args: this.watchedArgs(model),
            thunk: true
        });
    };
    ThunkView.prototype.renderAndDecorate = function (model, context) {
        var vnode = this.doRender(model, context);
        context.decorate(vnode, model);
        return vnode;
    };
    ThunkView.prototype.copyToThunk = function (vnode, thunk) {
        thunk.elm = vnode.elm;
        vnode.data.fn = thunk.data.fn;
        vnode.data.args = thunk.data.args;
        thunk.data = vnode.data;
        thunk.children = vnode.children;
        thunk.text = vnode.text;
        thunk.elm = vnode.elm;
    };
    ThunkView.prototype.init = function (thunk) {
        var cur = thunk.data;
        var vnode = cur.fn.apply(undefined, cur.args);
        this.copyToThunk(vnode, thunk);
    };
    ThunkView.prototype.prepatch = function (oldVnode, thunk) {
        var old = oldVnode.data, cur = thunk.data;
        if (!this.equals(old.args, cur.args))
            this.copyToThunk(cur.fn.apply(undefined, cur.args), thunk);
        else
            this.copyToThunk(oldVnode, thunk);
    };
    ThunkView.prototype.equals = function (oldArg, newArg) {
        if (Array.isArray(oldArg) && Array.isArray(newArg)) {
            if (oldArg.length !== newArg.length)
                return false;
            for (var i = 0; i < newArg.length; ++i) {
                if (!this.equals(oldArg[i], newArg[i]))
                    return false;
            }
        }
        else if (typeof oldArg === 'object' && typeof newArg === 'object') {
            if (Object.keys(oldArg).length !== Object.keys(newArg).length)
                return false;
            for (var key in oldArg) {
                if (key !== 'parent' && key !== 'root' && (!(key in newArg) || !this.equals(oldArg[key], newArg[key])))
                    return false;
            }
        }
        else if (oldArg !== newArg) {
            return false;
        }
        return true;
    };
    return ThunkView;
}());
exports.ThunkView = ThunkView;
function isThunk(vnode) {
    return 'thunk' in vnode;
}
exports.isThunk = isThunk;
//# sourceMappingURL=thunk-view.js.map

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var snabbdom = __webpack_require__(7);
var inversify_1 = __webpack_require__(0);
var smodel_factory_1 = __webpack_require__(17);
var registry_1 = __webpack_require__(53);
var geometry_1 = __webpack_require__(3);
var JSX = { createElement: snabbdom.svg };
/**
 * Allows to look up the IView for a given SModelElement based on its type.
 */
var ViewRegistry = /** @class */ (function (_super) {
    __extends(ViewRegistry, _super);
    function ViewRegistry() {
        var _this = _super.call(this) || this;
        _this.registerDefaults();
        return _this;
    }
    ViewRegistry.prototype.registerDefaults = function () {
        this.register(smodel_factory_1.EMPTY_ROOT.type, EmptyView);
    };
    ViewRegistry.prototype.missing = function (key, element) {
        return new MissingView();
    };
    ViewRegistry = __decorate([
        inversify_1.injectable(),
        __metadata("design:paramtypes", [])
    ], ViewRegistry);
    return ViewRegistry;
}(registry_1.ProviderRegistry));
exports.ViewRegistry = ViewRegistry;
var EmptyView = /** @class */ (function () {
    function EmptyView() {
    }
    EmptyView.prototype.render = function (model, context) {
        return JSX.createElement("svg", { "class-sprotty-empty": true });
    };
    return EmptyView;
}());
exports.EmptyView = EmptyView;
var MissingView = /** @class */ (function () {
    function MissingView() {
    }
    MissingView.prototype.render = function (model, context) {
        var position = model.position || geometry_1.ORIGIN_POINT;
        return JSX.createElement("text", { "class-sprotty-missing": true, x: position.x, y: position.y },
            "?",
            model.id,
            "?");
    };
    return MissingView;
}());
exports.MissingView = MissingView;
//# sourceMappingURL=view.js.map

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var animation_frame_syncer_1 = __webpack_require__(48);
/**
 * Updating the view is rather expensive, and it doesn't make sense to calculate
 * more then one update per animation (rendering) frame. So this class batches
 * all incoming model changes and only renders the last one when the next animation
 * frame comes.
 */
var ViewerCache = /** @class */ (function () {
    function ViewerCache(delegate, syncer) {
        this.delegate = delegate;
        this.syncer = syncer;
    }
    ViewerCache.prototype.isCacheEmpty = function () {
        return this.cachedModelRoot === undefined && this.cachedHiddenModelRoot === undefined &&
            this.cachedPopup === undefined;
    };
    ViewerCache.prototype.updatePopup = function (model) {
        var isCacheEmpty = this.isCacheEmpty();
        this.cachedPopup = model;
        if (isCacheEmpty)
            this.scheduleUpdate();
    };
    ViewerCache.prototype.update = function (model) {
        var isCacheEmpty = this.isCacheEmpty();
        this.cachedModelRoot = model;
        if (isCacheEmpty)
            this.scheduleUpdate();
    };
    ViewerCache.prototype.updateHidden = function (hiddenModel) {
        var isCacheEmpty = this.isCacheEmpty();
        this.cachedHiddenModelRoot = hiddenModel;
        if (isCacheEmpty)
            this.scheduleUpdate();
    };
    ViewerCache.prototype.scheduleUpdate = function () {
        var _this = this;
        this.syncer.onEndOfNextFrame(function () {
            if (_this.cachedHiddenModelRoot) {
                var nextHiddenModelRoot = _this.cachedHiddenModelRoot;
                _this.delegate.updateHidden(nextHiddenModelRoot);
                _this.cachedHiddenModelRoot = undefined;
            }
            if (_this.cachedModelRoot) {
                var nextModelRoot = _this.cachedModelRoot;
                _this.delegate.update(nextModelRoot);
                _this.cachedModelRoot = undefined;
            }
            if (_this.cachedPopup) {
                var nextModelRoot = _this.cachedPopup;
                _this.delegate.updatePopup(nextModelRoot);
                _this.cachedPopup = undefined;
            }
        });
    };
    ViewerCache = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.IViewer)), __param(0, inversify_1.named('delegate')),
        __param(1, inversify_1.inject(types_1.TYPES.AnimationFrameSyncer)),
        __metadata("design:paramtypes", [Object, animation_frame_syncer_1.AnimationFrameSyncer])
    ], ViewerCache);
    return ViewerCache;
}());
exports.ViewerCache = ViewerCache;
//# sourceMappingURL=viewer-cache.js.map

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var snabbdom = __webpack_require__(7);
var snabbdom_1 = __webpack_require__(149);
var props_1 = __webpack_require__(282);
var attributes_1 = __webpack_require__(279);
var style_1 = __webpack_require__(283);
var eventlisteners_1 = __webpack_require__(281);
var class_1 = __webpack_require__(280);
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var geometry_1 = __webpack_require__(3);
var initialize_canvas_1 = __webpack_require__(60);
var vnode_utils_1 = __webpack_require__(18);
var thunk_view_1 = __webpack_require__(131);
var smodel_factory_1 = __webpack_require__(17);
var JSX = { createElement: snabbdom.html }; // must be html here, as we're creating a div
var ModelRenderer = /** @class */ (function () {
    function ModelRenderer(viewRegistry, decorators) {
        this.viewRegistry = viewRegistry;
        this.decorators = decorators;
    }
    ModelRenderer.prototype.decorate = function (vnode, element) {
        if (thunk_view_1.isThunk(vnode))
            return vnode;
        return this.decorators.reduce(function (n, decorator) { return decorator.decorate(n, element); }, vnode);
    };
    ModelRenderer.prototype.renderElement = function (element) {
        var vNode = this.viewRegistry.get(element.type, element).render(element, this);
        return this.decorate(vNode, element);
    };
    ModelRenderer.prototype.renderChildren = function (element) {
        var _this = this;
        return element.children.map(function (child) { return _this.renderElement(child); });
    };
    ModelRenderer.prototype.postUpdate = function () {
        this.decorators.forEach(function (decorator) { return decorator.postUpdate(); });
    };
    return ModelRenderer;
}());
exports.ModelRenderer = ModelRenderer;
/**
 * The component that turns the model into an SVG DOM.
 * Uses a VDOM based on snabbdom.js for performance.
 */
var Viewer = /** @class */ (function () {
    function Viewer(modelRendererFactory, decorators, hiddenDecorators, popupDecorators, options, logger, actiondispatcher) {
        var _this = this;
        this.decorators = decorators;
        this.hiddenDecorators = hiddenDecorators;
        this.popupDecorators = popupDecorators;
        this.options = options;
        this.logger = logger;
        this.actiondispatcher = actiondispatcher;
        this.onWindowResize = function (vdom) {
            var baseDiv = document.getElementById(_this.options.baseDiv);
            if (baseDiv !== null) {
                var newBounds = _this.getBoundsInPage(baseDiv);
                _this.actiondispatcher.dispatch(new initialize_canvas_1.InitializeCanvasBoundsAction(newBounds));
            }
        };
        this.patcher = this.createPatcher();
        this.renderer = modelRendererFactory(decorators);
        this.hiddenRenderer = modelRendererFactory(hiddenDecorators);
        this.popupRenderer = modelRendererFactory(popupDecorators);
    }
    Viewer.prototype.createModules = function () {
        return [
            props_1.propsModule,
            attributes_1.attributesModule,
            class_1.classModule,
            style_1.styleModule,
            eventlisteners_1.eventListenersModule
        ];
    };
    Viewer.prototype.createPatcher = function () {
        return snabbdom_1.init(this.createModules());
    };
    Viewer.prototype.getBoundsInPage = function (element) {
        var bounds = element.getBoundingClientRect();
        var scroll = typeof window !== 'undefined' ? { x: window.scrollX, y: window.scrollY } : geometry_1.ORIGIN_POINT;
        return {
            x: bounds.left + scroll.x,
            y: bounds.top + scroll.y,
            width: bounds.width,
            height: bounds.height
        };
    };
    Viewer.prototype.update = function (model) {
        var _this = this;
        this.logger.log(this, 'rendering', model);
        var newVDOM = JSX.createElement("div", { id: this.options.baseDiv }, this.renderer.renderElement(model));
        if (this.lastVDOM !== undefined) {
            var hadFocus = this.hasFocus();
            vnode_utils_1.copyClassesFromVNode(this.lastVDOM, newVDOM);
            this.lastVDOM = this.patcher.call(this, this.lastVDOM, newVDOM);
            this.restoreFocus(hadFocus);
        }
        else if (typeof document !== 'undefined') {
            var placeholder = document.getElementById(this.options.baseDiv);
            if (placeholder !== null) {
                if (typeof window !== 'undefined') {
                    window.addEventListener('resize', function () {
                        _this.onWindowResize(newVDOM);
                    });
                }
                vnode_utils_1.copyClassesFromElement(placeholder, newVDOM);
                vnode_utils_1.setClass(newVDOM, this.options.baseClass, true);
                this.lastVDOM = this.patcher.call(this, placeholder, newVDOM);
            }
            else {
                this.logger.error(this, 'element not in DOM:', this.options.baseDiv);
            }
        }
        this.renderer.postUpdate();
    };
    Viewer.prototype.hasFocus = function () {
        if (typeof document !== 'undefined' && document.activeElement && this.lastVDOM.children && this.lastVDOM.children.length > 0) {
            var lastRootVNode = this.lastVDOM.children[0];
            if (typeof lastRootVNode === 'object') {
                var lastElement = lastRootVNode.elm;
                return document.activeElement === lastElement;
            }
        }
        return false;
    };
    Viewer.prototype.restoreFocus = function (focus) {
        if (focus && this.lastVDOM.children && this.lastVDOM.children.length > 0) {
            var lastRootVNode = this.lastVDOM.children[0];
            if (typeof lastRootVNode === 'object') {
                var lastElement = lastRootVNode.elm;
                if (lastElement && typeof lastElement.focus === 'function')
                    lastElement.focus();
            }
        }
    };
    Viewer.prototype.updateHidden = function (hiddenModel) {
        this.logger.log(this, 'rendering hidden');
        var newVDOM;
        if (hiddenModel.type === smodel_factory_1.EMPTY_ROOT.type) {
            newVDOM = JSX.createElement("div", { id: this.options.hiddenDiv });
        }
        else {
            var hiddenVNode = this.hiddenRenderer.renderElement(hiddenModel);
            vnode_utils_1.setAttr(hiddenVNode, 'opacity', 0);
            newVDOM = JSX.createElement("div", { id: this.options.hiddenDiv }, hiddenVNode);
        }
        if (this.lastHiddenVDOM !== undefined) {
            vnode_utils_1.copyClassesFromVNode(this.lastHiddenVDOM, newVDOM);
            this.lastHiddenVDOM = this.patcher.call(this, this.lastHiddenVDOM, newVDOM);
        }
        else {
            var placeholder = document.getElementById(this.options.hiddenDiv);
            if (placeholder === null) {
                placeholder = document.createElement("div");
                document.body.appendChild(placeholder);
            }
            else {
                vnode_utils_1.copyClassesFromElement(placeholder, newVDOM);
            }
            vnode_utils_1.setClass(newVDOM, this.options.baseClass, true);
            vnode_utils_1.setClass(newVDOM, this.options.hiddenClass, true);
            this.lastHiddenVDOM = this.patcher.call(this, placeholder, newVDOM);
        }
        this.hiddenRenderer.postUpdate();
    };
    Viewer.prototype.updatePopup = function (model) {
        this.logger.log(this, 'rendering popup', model);
        var popupClosed = model.type === smodel_factory_1.EMPTY_ROOT.type;
        var newVDOM;
        if (popupClosed) {
            newVDOM = JSX.createElement("div", { id: this.options.popupDiv });
        }
        else {
            var position = model.canvasBounds;
            var inlineStyle = {
                top: position.y + 'px',
                left: position.x + 'px'
            };
            newVDOM = JSX.createElement("div", { id: this.options.popupDiv, style: inlineStyle }, this.popupRenderer.renderElement(model));
        }
        if (this.lastPopupVDOM !== undefined) {
            vnode_utils_1.copyClassesFromVNode(this.lastPopupVDOM, newVDOM);
            vnode_utils_1.setClass(newVDOM, this.options.popupClosedClass, popupClosed);
            this.lastPopupVDOM = this.patcher.call(this, this.lastPopupVDOM, newVDOM);
        }
        else if (typeof document !== 'undefined') {
            var placeholder = document.getElementById(this.options.popupDiv);
            if (placeholder === null) {
                placeholder = document.createElement("div");
                document.body.appendChild(placeholder);
            }
            else {
                vnode_utils_1.copyClassesFromElement(placeholder, newVDOM);
            }
            vnode_utils_1.setClass(newVDOM, this.options.popupClass, true);
            vnode_utils_1.setClass(newVDOM, this.options.popupClosedClass, popupClosed);
            this.lastPopupVDOM = this.patcher.call(this, placeholder, newVDOM);
        }
        this.popupRenderer.postUpdate();
    };
    Viewer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.ModelRendererFactory)),
        __param(1, inversify_1.multiInject(types_1.TYPES.IVNodeDecorator)), __param(1, inversify_1.optional()),
        __param(2, inversify_1.multiInject(types_1.TYPES.HiddenVNodeDecorator)), __param(2, inversify_1.optional()),
        __param(3, inversify_1.multiInject(types_1.TYPES.PopupVNodeDecorator)), __param(3, inversify_1.optional()),
        __param(4, inversify_1.inject(types_1.TYPES.ViewerOptions)),
        __param(5, inversify_1.inject(types_1.TYPES.ILogger)),
        __param(6, inversify_1.inject(types_1.TYPES.IActionDispatcher)),
        __metadata("design:paramtypes", [Function, Array, Array, Array, Object, Object, Object])
    ], Viewer);
    return Viewer;
}());
exports.Viewer = Viewer;
//# sourceMappingURL=viewer.js.map

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var vnode_utils_1 = __webpack_require__(18);
var FocusFixDecorator = /** @class */ (function () {
    function FocusFixDecorator() {
    }
    FocusFixDecorator_1 = FocusFixDecorator;
    FocusFixDecorator.prototype.decorate = function (vnode, element) {
        if (vnode.sel && vnode.sel.startsWith('svg'))
            // allows to set focus in Firefox
            vnode_utils_1.setAttr(vnode, 'tabindex', ++FocusFixDecorator_1.tabIndex);
        return vnode;
    };
    FocusFixDecorator.prototype.postUpdate = function () {
    };
    FocusFixDecorator.tabIndex = 1000;
    FocusFixDecorator = FocusFixDecorator_1 = __decorate([
        inversify_1.injectable()
    ], FocusFixDecorator);
    return FocusFixDecorator;
    var FocusFixDecorator_1;
}());
exports.FocusFixDecorator = FocusFixDecorator;
//# sourceMappingURL=vnode-decorators.js.map

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var geometry_1 = __webpack_require__(3);
var abstract_layout_1 = __webpack_require__(89);
/**
 * Layouts children of a container in horizontal (left->right) direction.
 */
var HBoxLayouter = /** @class */ (function (_super) {
    __extends(HBoxLayouter, _super);
    function HBoxLayouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HBoxLayouter.prototype.getChildrenSize = function (container, containerOptions, layouter) {
        var maxWidth = 0;
        var maxHeight = -1;
        var isFirst = true;
        container.children.forEach(function (child) {
            var bounds = layouter.getBoundsData(child).bounds;
            if (bounds !== undefined && geometry_1.isValidDimension(bounds)) {
                if (isFirst)
                    isFirst = false;
                else
                    maxWidth += containerOptions.hGap;
                maxWidth += bounds.width;
                maxHeight = Math.max(maxHeight, bounds.height);
            }
        });
        return {
            width: maxWidth,
            height: maxHeight
        };
    };
    HBoxLayouter.prototype.layoutChild = function (child, boundsData, bounds, childOptions, containerOptions, currentOffset, maxWidth, maxHeight) {
        var dy = this.getDy(childOptions.vAlign, bounds, maxHeight);
        boundsData.bounds = {
            x: currentOffset.x + child.bounds.x - bounds.x,
            y: containerOptions.paddingTop + child.bounds.y - bounds.y + dy,
            width: bounds.width,
            height: bounds.height
        };
        boundsData.boundsChanged = true;
        return {
            x: currentOffset.x + bounds.width + containerOptions.hGap,
            y: currentOffset.y
        };
    };
    HBoxLayouter.prototype.getDefaultLayoutOptions = function () {
        return {
            resizeContainer: true,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            paddingFactor: 1,
            hGap: 1,
            vAlign: 'center'
        };
    };
    HBoxLayouter.prototype.spread = function (a, b) {
        return __assign({}, a, b);
    };
    HBoxLayouter.KIND = 'hbox';
    return HBoxLayouter;
}(abstract_layout_1.AbstractLayout));
exports.HBoxLayouter = HBoxLayouter;
//# sourceMappingURL=hbox-layout.js.map

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var geometry_1 = __webpack_require__(3);
var abstract_layout_1 = __webpack_require__(89);
var StackLayouter = /** @class */ (function (_super) {
    __extends(StackLayouter, _super);
    function StackLayouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackLayouter.prototype.getChildrenSize = function (container, options, layouter) {
        var maxWidth = -1;
        var maxHeight = -1;
        container.children.forEach(function (child) {
            var bounds = layouter.getBoundsData(child).bounds;
            if (bounds !== undefined && geometry_1.isValidDimension(bounds)) {
                maxWidth = Math.max(maxWidth, bounds.width);
                maxHeight = Math.max(maxHeight, bounds.height);
            }
        });
        return {
            width: maxWidth,
            height: maxHeight
        };
    };
    StackLayouter.prototype.layoutChild = function (child, boundsData, bounds, childOptions, containerOptions, currentOffset, maxWidth, maxHeight) {
        var dx = this.getDx(childOptions.hAlign, bounds, maxWidth);
        var dy = this.getDy(childOptions.vAlign, bounds, maxHeight);
        boundsData.bounds = {
            x: containerOptions.paddingLeft + child.bounds.x - bounds.x + dx,
            y: containerOptions.paddingTop + child.bounds.y - bounds.y + dy,
            width: bounds.width,
            height: bounds.height
        };
        boundsData.boundsChanged = true;
        return currentOffset;
    };
    StackLayouter.prototype.getDefaultLayoutOptions = function () {
        return {
            resizeContainer: true,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            paddingFactor: 1,
            hAlign: 'center',
            vAlign: 'center'
        };
    };
    StackLayouter.prototype.spread = function (a, b) {
        return __assign({}, a, b);
    };
    StackLayouter.KIND = 'stack';
    return StackLayouter;
}(abstract_layout_1.AbstractLayout));
exports.StackLayouter = StackLayouter;
//# sourceMappingURL=stack-layout.js.map

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var geometry_1 = __webpack_require__(3);
var abstract_layout_1 = __webpack_require__(89);
/**
 * Layouts children of a container in vertical (top->bottom) direction.
 */
var VBoxLayouter = /** @class */ (function (_super) {
    __extends(VBoxLayouter, _super);
    function VBoxLayouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VBoxLayouter.prototype.getChildrenSize = function (container, containerOptions, layouter) {
        var maxWidth = -1;
        var maxHeight = 0;
        var isFirst = true;
        container.children.forEach(function (child) {
            var bounds = layouter.getBoundsData(child).bounds;
            if (bounds !== undefined && geometry_1.isValidDimension(bounds)) {
                maxHeight += bounds.height;
                if (isFirst)
                    isFirst = false;
                else
                    maxHeight += containerOptions.vGap;
                maxWidth = Math.max(maxWidth, bounds.width);
            }
        });
        return {
            width: maxWidth,
            height: maxHeight
        };
    };
    VBoxLayouter.prototype.layoutChild = function (child, boundsData, bounds, childOptions, containerOptions, currentOffset, maxWidth, maxHeight) {
        var dx = this.getDx(childOptions.hAlign, bounds, maxWidth);
        boundsData.bounds = {
            x: containerOptions.paddingLeft + child.bounds.x - bounds.x + dx,
            y: currentOffset.y + child.bounds.y - bounds.y,
            width: bounds.width,
            height: bounds.height
        };
        boundsData.boundsChanged = true;
        return {
            x: currentOffset.x,
            y: currentOffset.y + bounds.height + containerOptions.vGap
        };
    };
    VBoxLayouter.prototype.getDefaultLayoutOptions = function () {
        return {
            resizeContainer: true,
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 5,
            paddingRight: 5,
            paddingFactor: 1,
            vGap: 1,
            hAlign: 'center'
        };
    };
    VBoxLayouter.prototype.spread = function (a, b) {
        return __assign({}, a, b);
    };
    VBoxLayouter.KIND = 'vbox';
    return VBoxLayouter;
}(abstract_layout_1.AbstractLayout));
exports.VBoxLayouter = VBoxLayouter;
//# sourceMappingURL=vbox-layout.js.map

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var command_1 = __webpack_require__(8);
var model_1 = __webpack_require__(31);
var smodel_1 = __webpack_require__(2);
var key_tool_1 = __webpack_require__(35);
var browser_1 = __webpack_require__(65);
var model_2 = __webpack_require__(62);
var inversify_1 = __webpack_require__(0);
var svg_exporter_1 = __webpack_require__(40);
var smodel_factory_1 = __webpack_require__(17);
var model_3 = __webpack_require__(32);
var model_4 = __webpack_require__(63);
var types_1 = __webpack_require__(1);
var ExportSvgKeyListener = /** @class */ (function (_super) {
    __extends(ExportSvgKeyListener, _super);
    function ExportSvgKeyListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExportSvgKeyListener.prototype.keyDown = function (element, event) {
        if (browser_1.isCtrlOrCmd(event) && event.keyCode === 69)
            return [new RequestExportSvgAction()];
        else
            return [];
    };
    ExportSvgKeyListener = __decorate([
        inversify_1.injectable()
    ], ExportSvgKeyListener);
    return ExportSvgKeyListener;
}(key_tool_1.KeyListener));
exports.ExportSvgKeyListener = ExportSvgKeyListener;
var RequestExportSvgAction = /** @class */ (function () {
    function RequestExportSvgAction() {
        this.kind = ExportSvgCommand.KIND;
    }
    return RequestExportSvgAction;
}());
exports.RequestExportSvgAction = RequestExportSvgAction;
var ExportSvgCommand = /** @class */ (function (_super) {
    __extends(ExportSvgCommand, _super);
    function ExportSvgCommand() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExportSvgCommand.prototype.execute = function (context) {
        if (model_2.isExportable(context.root)) {
            var root = context.modelFactory.createRoot(context.modelFactory.createSchema(context.root));
            if (model_2.isExportable(root)) {
                root.export = true;
                if (model_3.isViewport(root)) {
                    root.zoom = 1;
                    root.scroll = {
                        x: 0,
                        y: 0
                    };
                }
                root.index.all().forEach(function (element) {
                    if (model_1.isSelectable(element) && element.selected)
                        element.selected = false;
                    if (model_4.isHoverable(element) && element.hoverFeedback)
                        element.hoverFeedback = false;
                });
                return root;
            }
        }
        return context.modelFactory.createRoot(smodel_factory_1.EMPTY_ROOT);
    };
    ExportSvgCommand.KIND = 'requestExportSvg';
    return ExportSvgCommand;
}(command_1.HiddenCommand));
exports.ExportSvgCommand = ExportSvgCommand;
var ExportSvgDecorator = /** @class */ (function () {
    function ExportSvgDecorator(svgExporter) {
        this.svgExporter = svgExporter;
    }
    ExportSvgDecorator.prototype.decorate = function (vnode, element) {
        if (element instanceof smodel_1.SModelRoot)
            this.root = element;
        return vnode;
    };
    ExportSvgDecorator.prototype.postUpdate = function () {
        if (this.root && model_2.isExportable(this.root) && this.root.export)
            this.svgExporter.export(this.root);
    };
    ExportSvgDecorator = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.SvgExporter)),
        __metadata("design:paramtypes", [svg_exporter_1.SvgExporter])
    ], ExportSvgDecorator);
    return ExportSvgDecorator;
}());
exports.ExportSvgDecorator = ExportSvgDecorator;
//# sourceMappingURL=export.js.map

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.openFeature = Symbol('openFeature');
function isOpenable(element) {
    return element.hasFeature(exports.openFeature);
}
exports.isOpenable = isOpenable;
//# sourceMappingURL=model.js.map

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = __webpack_require__(65);
var smodel_1 = __webpack_require__(2);
var smodel_utils_1 = __webpack_require__(13);
var command_1 = __webpack_require__(8);
var sgraph_1 = __webpack_require__(101);
var mouse_tool_1 = __webpack_require__(30);
var key_tool_1 = __webpack_require__(35);
var vnode_utils_1 = __webpack_require__(18);
var model_1 = __webpack_require__(31);
var button_handler_1 = __webpack_require__(91);
var inversify_1 = __webpack_require__(0);
var model_2 = __webpack_require__(92);
/**
 * Triggered when the user changes the selection, e.g. by clicking on a selectable element. The resulting
 * SelectCommand changes the `selected` state accordingly, so the elements can be rendered differently.
 * This action is also forwarded to the diagram server, if present, so it may react on the selection change.
 * Furthermore, the server can send such an action to the client in order to change the selection programmatically.
 */
var SelectAction = /** @class */ (function () {
    function SelectAction(selectedElementsIDs, deselectedElementsIDs) {
        if (selectedElementsIDs === void 0) { selectedElementsIDs = []; }
        if (deselectedElementsIDs === void 0) { deselectedElementsIDs = []; }
        this.selectedElementsIDs = selectedElementsIDs;
        this.deselectedElementsIDs = deselectedElementsIDs;
        this.kind = SelectCommand.KIND;
    }
    return SelectAction;
}());
exports.SelectAction = SelectAction;
/**
 * Programmatic action for selecting or deselecting all elements.
 */
var SelectAllAction = /** @class */ (function () {
    /**
     * If `select` is true, all elements are selected, othewise they are deselected.
     */
    function SelectAllAction(select) {
        if (select === void 0) { select = true; }
        this.select = select;
        this.kind = SelectAllCommand.KIND;
    }
    return SelectAllAction;
}());
exports.SelectAllAction = SelectAllAction;
var SelectCommand = /** @class */ (function (_super) {
    __extends(SelectCommand, _super);
    function SelectCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        _this.selected = [];
        _this.deselected = [];
        return _this;
    }
    SelectCommand.prototype.execute = function (context) {
        var _this = this;
        var selectedNodeIds = [];
        var model = context.root;
        this.action.selectedElementsIDs.forEach(function (id) {
            var element = model.index.getById(id);
            if (element instanceof smodel_1.SChildElement && model_1.isSelectable(element)) {
                _this.selected.push({
                    element: element,
                    index: element.parent.children.indexOf(element)
                });
                if (element instanceof sgraph_1.SNode)
                    selectedNodeIds.push(id);
            }
        });
        if (selectedNodeIds.length > 0) {
            var connectedEdges_1 = [];
            model.index.all().forEach(function (element) {
                if (element instanceof sgraph_1.SEdge
                    && (selectedNodeIds.indexOf(element.sourceId) >= 0
                        || selectedNodeIds.indexOf(element.targetId) >= 0)) {
                    connectedEdges_1.push({
                        element: element,
                        index: element.parent.children.indexOf(element)
                    });
                }
            });
            this.selected = connectedEdges_1.concat(this.selected);
        }
        this.action.deselectedElementsIDs.forEach(function (id) {
            var element = model.index.getById(id);
            if (element instanceof smodel_1.SChildElement && model_1.isSelectable(element)) {
                _this.deselected.push({
                    element: element,
                    index: element.parent.children.indexOf(element)
                });
            }
        });
        return this.redo(context);
    };
    SelectCommand.prototype.undo = function (context) {
        for (var i = this.selected.length - 1; i >= 0; --i) {
            var selection = this.selected[i];
            var element = selection.element;
            if (model_1.isSelectable(element))
                element.selected = false;
            element.parent.move(element, selection.index);
        }
        this.deselected.reverse().forEach(function (selection) {
            if (model_1.isSelectable(selection.element))
                selection.element.selected = true;
        });
        return context.root;
    };
    SelectCommand.prototype.redo = function (context) {
        for (var i = 0; i < this.selected.length; ++i) {
            var selection = this.selected[i];
            var element = selection.element;
            var childrenLength = element.parent.children.length;
            element.parent.move(element, childrenLength - 1);
        }
        this.deselected.forEach(function (selection) {
            if (model_1.isSelectable(selection.element))
                selection.element.selected = false;
        });
        this.selected.forEach(function (selection) {
            if (model_1.isSelectable(selection.element))
                selection.element.selected = true;
        });
        return context.root;
    };
    SelectCommand.KIND = 'elementSelected';
    return SelectCommand;
}(command_1.Command));
exports.SelectCommand = SelectCommand;
var SelectAllCommand = /** @class */ (function (_super) {
    __extends(SelectAllCommand, _super);
    function SelectAllCommand(action) {
        var _this = _super.call(this) || this;
        _this.action = action;
        _this.previousSelection = {};
        return _this;
    }
    SelectAllCommand.prototype.execute = function (context) {
        this.selectAll(context.root, this.action.select);
        return context.root;
    };
    SelectAllCommand.prototype.selectAll = function (element, newState) {
        if (model_1.isSelectable(element)) {
            this.previousSelection[element.id] = element.selected;
            element.selected = newState;
        }
        for (var _i = 0, _a = element.children; _i < _a.length; _i++) {
            var child = _a[_i];
            this.selectAll(child, newState);
        }
    };
    SelectAllCommand.prototype.undo = function (context) {
        var index = context.root.index;
        for (var id in this.previousSelection) {
            var element = index.getById(id);
            if (element !== undefined && model_1.isSelectable(element))
                element.selected = this.previousSelection[id];
        }
        return context.root;
    };
    SelectAllCommand.prototype.redo = function (context) {
        this.selectAll(context.root, this.action.select);
        return context.root;
    };
    SelectAllCommand.KIND = 'allSelected';
    return SelectAllCommand;
}(command_1.Command));
exports.SelectAllCommand = SelectAllCommand;
var SelectMouseListener = /** @class */ (function (_super) {
    __extends(SelectMouseListener, _super);
    function SelectMouseListener(buttonHandlerRegistry) {
        var _this = _super.call(this) || this;
        _this.buttonHandlerRegistry = buttonHandlerRegistry;
        _this.wasSelected = false;
        _this.hasDragged = false;
        return _this;
    }
    SelectMouseListener.prototype.mouseDown = function (target, event) {
        if (event.button === 0) {
            if (this.buttonHandlerRegistry !== undefined && target instanceof model_2.SButton && target.enabled) {
                var buttonHandler = this.buttonHandlerRegistry.get(target.type);
                if (buttonHandler !== undefined)
                    return buttonHandler.buttonPressed(target);
            }
            var selectableTarget = smodel_utils_1.findParentByFeature(target, model_1.isSelectable);
            if (selectableTarget !== undefined || target instanceof smodel_1.SModelRoot) {
                this.hasDragged = false;
                var deselectIds = [];
                // multi-selection?
                if (!browser_1.isCtrlOrCmd(event)) {
                    deselectIds = target.root
                        .index
                        .all()
                        .filter(function (element) { return model_1.isSelectable(element) && element.selected; })
                        .map(function (element) { return element.id; });
                }
                if (selectableTarget !== undefined) {
                    if (!selectableTarget.selected) {
                        this.wasSelected = false;
                        return [new SelectAction([selectableTarget.id], deselectIds)];
                    }
                    else {
                        if (browser_1.isCtrlOrCmd(event)) {
                            this.wasSelected = false;
                            return [new SelectAction([], [selectableTarget.id])];
                        }
                        else {
                            this.wasSelected = true;
                        }
                    }
                }
                else {
                    return [new SelectAction([], deselectIds)];
                }
            }
        }
        return [];
    };
    SelectMouseListener.prototype.mouseMove = function (target, event) {
        this.hasDragged = true;
        return [];
    };
    SelectMouseListener.prototype.mouseUp = function (target, event) {
        if (event.button === 0) {
            if (!this.hasDragged) {
                var selectableTarget = smodel_utils_1.findParentByFeature(target, model_1.isSelectable);
                if (selectableTarget !== undefined && this.wasSelected) {
                    return [new SelectAction([selectableTarget.id], [])];
                }
            }
        }
        this.hasDragged = false;
        return [];
    };
    SelectMouseListener.prototype.decorate = function (vnode, element) {
        var selectableTarget = smodel_utils_1.findParentByFeature(element, model_1.isSelectable);
        if (selectableTarget !== undefined)
            vnode_utils_1.setClass(vnode, 'selected', selectableTarget.selected);
        return vnode;
    };
    SelectMouseListener = __decorate([
        __param(0, inversify_1.inject(button_handler_1.ButtonHandlerRegistry)), __param(0, inversify_1.optional()),
        __metadata("design:paramtypes", [button_handler_1.ButtonHandlerRegistry])
    ], SelectMouseListener);
    return SelectMouseListener;
}(mouse_tool_1.MouseListener));
exports.SelectMouseListener = SelectMouseListener;
var SelectKeyboardListener = /** @class */ (function (_super) {
    __extends(SelectKeyboardListener, _super);
    function SelectKeyboardListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectKeyboardListener.prototype.keyDown = function (element, event) {
        if (browser_1.isCtrlOrCmd(event) && event.keyCode === 65) {
            return [new SelectAction(element.root.index.all().filter(function (e) { return model_1.isSelectable(e); }).map(function (e) { return e.id; }), [])];
        }
        return [];
    };
    return SelectKeyboardListener;
}(key_tool_1.KeyListener));
exports.SelectKeyboardListener = SelectKeyboardListener;
//# sourceMappingURL=select.js.map

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var smodel_1 = __webpack_require__(2);
var mouse_tool_1 = __webpack_require__(30);
var smodel_utils_1 = __webpack_require__(13);
var viewport_1 = __webpack_require__(42);
var model_1 = __webpack_require__(32);
var model_2 = __webpack_require__(41);
function isScrollable(element) {
    return 'scroll' in element;
}
exports.isScrollable = isScrollable;
var ScrollMouseListener = /** @class */ (function (_super) {
    __extends(ScrollMouseListener, _super);
    function ScrollMouseListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScrollMouseListener.prototype.mouseDown = function (target, event) {
        var selectable = smodel_utils_1.findParentByFeature(target, model_2.isMoveable);
        if (selectable === undefined) {
            var viewport = smodel_utils_1.findParentByFeature(target, model_1.isViewport);
            if (viewport)
                this.lastScrollPosition = { x: event.pageX, y: event.pageY };
            else
                this.lastScrollPosition = undefined;
        }
        return [];
    };
    ScrollMouseListener.prototype.mouseMove = function (target, event) {
        if (event.buttons === 0)
            this.mouseUp(target, event);
        else if (this.lastScrollPosition) {
            var viewport = smodel_utils_1.findParentByFeature(target, model_1.isViewport);
            if (viewport) {
                var dx = (event.pageX - this.lastScrollPosition.x) / viewport.zoom;
                var dy = (event.pageY - this.lastScrollPosition.y) / viewport.zoom;
                var newViewport = {
                    scroll: {
                        x: viewport.scroll.x - dx,
                        y: viewport.scroll.y - dy,
                    },
                    zoom: viewport.zoom
                };
                this.lastScrollPosition = { x: event.pageX, y: event.pageY };
                return [new viewport_1.ViewportAction(viewport.id, newViewport, false)];
            }
        }
        return [];
    };
    ScrollMouseListener.prototype.mouseEnter = function (target, event) {
        if (target instanceof smodel_1.SModelRoot && event.buttons === 0)
            this.mouseUp(target, event);
        return [];
    };
    ScrollMouseListener.prototype.mouseUp = function (target, event) {
        this.lastScrollPosition = undefined;
        return [];
    };
    return ScrollMouseListener;
}(mouse_tool_1.MouseListener));
exports.ScrollMouseListener = ScrollMouseListener;
//# sourceMappingURL=scroll.js.map

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var mouse_tool_1 = __webpack_require__(30);
var smodel_utils_1 = __webpack_require__(13);
var viewport_1 = __webpack_require__(42);
var model_1 = __webpack_require__(32);
function isZoomable(element) {
    return 'zoom' in element;
}
exports.isZoomable = isZoomable;
var ZoomMouseListener = /** @class */ (function (_super) {
    __extends(ZoomMouseListener, _super);
    function ZoomMouseListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZoomMouseListener.prototype.wheel = function (target, event) {
        var viewport = smodel_utils_1.findParentByFeature(target, model_1.isViewport);
        if (viewport) {
            var newZoom = Math.exp(-event.deltaY * 0.005);
            var factor = 1. / (newZoom * viewport.zoom) - 1. / viewport.zoom;
            var newViewport = {
                scroll: {
                    x: -(factor * event.offsetX - viewport.scroll.x),
                    y: -(factor * event.offsetY - viewport.scroll.y)
                },
                zoom: viewport.zoom * newZoom
            };
            return [new viewport_1.ViewportAction(viewport.id, newViewport, false)];
        }
        return [];
    };
    return ZoomMouseListener;
}(mouse_tool_1.MouseListener));
exports.ZoomMouseListener = ZoomMouseListener;
//# sourceMappingURL=zoom.js.map

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var snabbdom = __webpack_require__(7);
var geometry_1 = __webpack_require__(3);
var vnode_utils_1 = __webpack_require__(18);
var smodel_utils_1 = __webpack_require__(13);
var JSX = { createElement: snabbdom.svg };
/**
 * IView component that turns an SGraph element and its children into a tree of virtual DOM elements.
 */
var SGraphView = /** @class */ (function () {
    function SGraphView() {
    }
    SGraphView.prototype.render = function (model, context) {
        var transform = "scale(" + model.zoom + ") translate(" + -model.scroll.x + "," + -model.scroll.y + ")";
        return JSX.createElement("svg", { "class-sprotty-graph": true },
            JSX.createElement("g", { transform: transform }, context.renderChildren(model)));
    };
    return SGraphView;
}());
exports.SGraphView = SGraphView;
var AnchorableView = /** @class */ (function () {
    function AnchorableView() {
    }
    AnchorableView.prototype.getStrokeWidth = function (model) {
        return 0;
    };
    AnchorableView.prototype.getTranslatedAnchor = function (node, refPoint, refContainer, anchorCorrection, edge) {
        if (anchorCorrection === void 0) { anchorCorrection = 0; }
        var viewContainer = node.parent;
        var anchor = this.getAnchor(node, smodel_utils_1.translatePoint(refPoint, refContainer, viewContainer), anchorCorrection);
        var edgeContainer = edge.parent;
        return smodel_utils_1.translatePoint(anchor, viewContainer, edgeContainer);
    };
    return AnchorableView;
}());
exports.AnchorableView = AnchorableView;
var PolylineEdgeView = /** @class */ (function () {
    function PolylineEdgeView() {
        this.minimalPointDistance = 2;
    }
    PolylineEdgeView.prototype.render = function (edge, context) {
        var source = edge.source;
        if (source === undefined)
            return this.renderDanglingEdge("Cannot resolve source", edge, context);
        var target = edge.target;
        if (target === undefined)
            return this.renderDanglingEdge("Cannot resolve target", edge, context);
        var sourceView = context.viewRegistry.get(source.type, source);
        if (!(sourceView instanceof AnchorableView))
            return this.renderDanglingEdge("Expected source view type: AnchorableView", edge, context);
        var targetView = context.viewRegistry.get(target.type, target);
        if (!(targetView instanceof AnchorableView))
            return this.renderDanglingEdge("Expected target view type: AnchorableView", edge, context);
        var segments = this.computeSegments(edge, source, sourceView, target, targetView);
        return JSX.createElement("g", null,
            this.renderLine(edge, segments, context),
            this.renderAdditionals(edge, segments, context),
            context.renderChildren(edge));
    };
    PolylineEdgeView.prototype.computeSegments = function (edge, source, sourceView, target, targetView) {
        var sourceAnchor;
        if (edge.routingPoints !== undefined && edge.routingPoints.length >= 1) {
            // Use the first routing point as start anchor reference
            var p0 = edge.routingPoints[0];
            sourceAnchor = sourceView.getTranslatedAnchor(source, p0, edge.parent, this.getSourceAnchorCorrection(edge), edge);
        }
        else {
            // Use the target center as start anchor reference
            var reference = geometry_1.center(target.bounds);
            sourceAnchor = sourceView.getTranslatedAnchor(source, reference, target.parent, this.getSourceAnchorCorrection(edge), edge);
        }
        var result = [sourceAnchor];
        var previousPoint = sourceAnchor;
        for (var i = 0; i < edge.routingPoints.length - 1; i++) {
            var p = edge.routingPoints[i];
            var minDistance = this.minimalPointDistance + ((i === 0)
                ? this.getSourceAnchorCorrection(edge) + sourceView.getStrokeWidth(source)
                : 0);
            if (geometry_1.maxDistance(previousPoint, p) >= minDistance) {
                result.push(p);
                previousPoint = p;
            }
        }
        var targetAnchor;
        if (edge.routingPoints && edge.routingPoints.length >= 2) {
            // Use the last routing point as end anchor reference
            var pn = edge.routingPoints[edge.routingPoints.length - 1];
            targetAnchor = targetView.getTranslatedAnchor(target, pn, edge.parent, this.getTargetAnchorCorrection(edge), edge);
            var minDistance = this.minimalPointDistance + this.getTargetAnchorCorrection(edge) + targetView.getStrokeWidth(source);
            if (geometry_1.maxDistance(previousPoint, pn) >= this.minimalPointDistance
                && geometry_1.maxDistance(pn, targetAnchor) >= minDistance) {
                result.push(pn);
            }
        }
        else {
            // Use the source center as end anchor reference
            var reference = geometry_1.center(source.bounds);
            targetAnchor = targetView.getTranslatedAnchor(target, reference, source.parent, this.getTargetAnchorCorrection(edge), edge);
        }
        result.push(targetAnchor);
        return result;
    };
    PolylineEdgeView.prototype.renderLine = function (edge, segments, context) {
        var firstPoint = segments[0];
        var path = "M " + firstPoint.x + "," + firstPoint.y;
        for (var i = 1; i < segments.length; i++) {
            var p = segments[i];
            path += " L " + p.x + "," + p.y;
        }
        return JSX.createElement("path", { "class-sprotty-edge": true, d: path });
    };
    PolylineEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        return [];
    };
    PolylineEdgeView.prototype.renderDanglingEdge = function (message, edge, context) {
        return JSX.createElement("text", { "class-sprotty-edge-dangling": true, title: message }, "?");
    };
    PolylineEdgeView.prototype.getSourceAnchorCorrection = function (edge) {
        return 0;
    };
    PolylineEdgeView.prototype.getTargetAnchorCorrection = function (edge) {
        return 0;
    };
    return PolylineEdgeView;
}());
exports.PolylineEdgeView = PolylineEdgeView;
var SLabelView = /** @class */ (function () {
    function SLabelView() {
    }
    SLabelView.prototype.render = function (label, context) {
        var vnode = JSX.createElement("text", { "class-sprotty-label": true }, label.text);
        var subType = smodel_utils_1.getSubType(label);
        if (subType)
            vnode_utils_1.setAttr(vnode, 'class', subType);
        return vnode;
    };
    return SLabelView;
}());
exports.SLabelView = SLabelView;
var SCompartmentView = /** @class */ (function () {
    function SCompartmentView() {
    }
    SCompartmentView.prototype.render = function (model, context) {
        var translate = "translate(" + model.bounds.x + ", " + model.bounds.y + ")";
        var vnode = JSX.createElement("g", { transform: translate, "class-sprotty-comp": "{true}" }, context.renderChildren(model));
        var subType = smodel_utils_1.getSubType(model);
        if (subType)
            vnode_utils_1.setAttr(vnode, 'class', subType);
        return vnode;
    };
    return SCompartmentView;
}());
exports.SCompartmentView = SCompartmentView;
//# sourceMappingURL=views.js.map

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var smodel_1 = __webpack_require__(2);
var smodel_storage_1 = __webpack_require__(87);
var action_handler_1 = __webpack_require__(38);
var set_model_1 = __webpack_require__(49);
var update_model_1 = __webpack_require__(98);
var bounds_manipulation_1 = __webpack_require__(50);
var hover_1 = __webpack_require__(52);
var model_source_1 = __webpack_require__(102);
var svg_exporter_1 = __webpack_require__(40);
var file_saver_1 = __webpack_require__(121);
var expand_1 = __webpack_require__(61);
var open_1 = __webpack_require__(95);
function isActionMessage(object) {
    return object !== undefined && object.hasOwnProperty('clientId') && object.hasOwnProperty('action');
}
exports.isActionMessage = isActionMessage;
/**
 * Sent by the external server when to signal a state change.
 */
var ServerStatusAction = /** @class */ (function () {
    function ServerStatusAction() {
        this.kind = ServerStatusAction.KIND;
    }
    ServerStatusAction.KIND = 'serverStatus';
    return ServerStatusAction;
}());
exports.ServerStatusAction = ServerStatusAction;
var receivedFromServerProperty = '__receivedFromServer';
/**
 * A ModelSource that communicates with an external model provider, e.g.
 * a model editor.
 *
 * This class defines which actions are sent to and received from the
 * external model source.
 */
var DiagramServer = /** @class */ (function (_super) {
    __extends(DiagramServer, _super);
    function DiagramServer(actionDispatcher, actionHandlerRegistry, viewerOptions, storage, logger) {
        var _this = _super.call(this, actionDispatcher, actionHandlerRegistry, viewerOptions) || this;
        _this.storage = storage;
        _this.logger = logger;
        _this.currentRoot = {
            type: 'NONE',
            id: 'ROOT'
        };
        _this.clientId = _this.viewerOptions.baseDiv;
        return _this;
    }
    DiagramServer.prototype.initialize = function (registry) {
        _super.prototype.initialize.call(this, registry);
        // Register model manipulation commands
        registry.registerCommand(update_model_1.UpdateModelCommand);
        // Register this model source
        registry.register(bounds_manipulation_1.ComputedBoundsAction.KIND, this);
        registry.register(bounds_manipulation_1.RequestBoundsCommand.KIND, this);
        registry.register(hover_1.RequestPopupModelAction.KIND, this);
        registry.register(expand_1.CollapseExpandAction.KIND, this);
        registry.register(expand_1.CollapseExpandAllAction.KIND, this);
        registry.register(open_1.OpenAction.KIND, this);
        registry.register(ServerStatusAction.KIND, this);
    };
    DiagramServer.prototype.handle = function (action) {
        var forwardToServer = this.handleLocally(action);
        if (forwardToServer) {
            var message = {
                clientId: this.clientId,
                action: action
            };
            this.logger.log(this, 'sending', message);
            this.sendMessage(message);
        }
    };
    DiagramServer.prototype.messageReceived = function (data) {
        var object = typeof (data) === 'string' ? JSON.parse(data) : data;
        if (isActionMessage(object) && object.action) {
            if (!object.clientId || object.clientId === this.clientId) {
                this.logger.log(this, 'receiving', object);
                object.action[receivedFromServerProperty] = true;
                this.actionDispatcher.dispatch(object.action, this.storeNewModel.bind(this));
            }
        }
        else {
            this.logger.error(this, 'received data is not an action message', object);
        }
    };
    /**
     * Check whether the given action should be handled locally. Returns true if the action should
     * still be sent to the server, and false if it's only handled locally.
     */
    DiagramServer.prototype.handleLocally = function (action) {
        this.storeNewModel(action);
        switch (action.kind) {
            case bounds_manipulation_1.ComputedBoundsAction.KIND:
                return this.handleComputedBounds(action);
            case bounds_manipulation_1.RequestBoundsCommand.KIND:
                return false;
            case svg_exporter_1.ExportSvgAction.KIND:
                return this.handleExportSvgAction(action);
            case ServerStatusAction.KIND:
                return this.handleServerStateAction(action);
        }
        return !action[receivedFromServerProperty];
    };
    /**
     * Put the new model contained in the given action into the model storage, if there is any.
     */
    DiagramServer.prototype.storeNewModel = function (action) {
        if (action.kind === set_model_1.SetModelCommand.KIND
            || action.kind === update_model_1.UpdateModelCommand.KIND
            || action.kind === bounds_manipulation_1.RequestBoundsCommand.KIND) {
            var newRoot = action.newRoot;
            if (newRoot) {
                this.currentRoot = newRoot;
                this.storage.store(this.currentRoot);
            }
        }
    };
    /**
     * If the server requires to compute a layout, the computed bounds are forwarded. Otherwise they
     * are applied to the current model locally and a model update is triggered.
     */
    DiagramServer.prototype.handleComputedBounds = function (action) {
        if (this.viewerOptions.needsServerLayout) {
            return true;
        }
        else {
            var index = new smodel_1.SModelIndex();
            index.add(this.currentRoot);
            for (var _i = 0, _a = action.bounds; _i < _a.length; _i++) {
                var b = _a[_i];
                var element = index.getById(b.elementId);
                if (element !== undefined)
                    this.applyBounds(element, b.newBounds);
            }
            if (action.alignments !== undefined) {
                for (var _b = 0, _c = action.alignments; _b < _c.length; _b++) {
                    var a = _c[_b];
                    var element = index.getById(a.elementId);
                    if (element !== undefined)
                        this.applyAlignment(element, a.newAlignment);
                }
            }
            this.actionDispatcher.dispatch(new update_model_1.UpdateModelAction(this.currentRoot));
            return false;
        }
    };
    DiagramServer.prototype.applyBounds = function (element, newBounds) {
        var e = element;
        e.position = { x: newBounds.x, y: newBounds.y };
        e.size = { width: newBounds.width, height: newBounds.height };
    };
    DiagramServer.prototype.applyAlignment = function (element, newAlignment) {
        var e = element;
        e.alignment = { x: newAlignment.x, y: newAlignment.y };
    };
    DiagramServer.prototype.handleExportSvgAction = function (action) {
        var blob = new Blob([action.svg], { type: "text/plain;charset=utf-8" });
        file_saver_1.saveAs(blob, "diagram.svg");
        return false;
    };
    DiagramServer.prototype.handleServerStateAction = function (action) {
        return false;
    };
    DiagramServer = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.IActionDispatcher)),
        __param(1, inversify_1.inject(types_1.TYPES.ActionHandlerRegistry)),
        __param(2, inversify_1.inject(types_1.TYPES.ViewerOptions)),
        __param(3, inversify_1.inject(types_1.TYPES.SModelStorage)),
        __param(4, inversify_1.inject(types_1.TYPES.ILogger)),
        __metadata("design:paramtypes", [Object, action_handler_1.ActionHandlerRegistry, Object, smodel_storage_1.SModelStorage, Object])
    ], DiagramServer);
    return DiagramServer;
}(model_source_1.ModelSource));
exports.DiagramServer = DiagramServer;
//# sourceMappingURL=diagram-server.js.map

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
* Copyright (C) 2017 TypeFox and others.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
* You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
*/
Object.defineProperty(exports, "__esModule", { value: true });
var ExpansionState = /** @class */ (function () {
    function ExpansionState(root) {
        this.expandedElementIds = [];
        this.initialize(root);
    }
    ExpansionState.prototype.initialize = function (element) {
        var _this = this;
        if (element.expanded)
            this.expandedElementIds.push(element.id);
        if (element.children !== undefined)
            element.children.forEach(function (child) { return _this.initialize(child); });
    };
    ExpansionState.prototype.apply = function (action) {
        for (var _i = 0, _a = action.collapseIds; _i < _a.length; _i++) {
            var collapsed = _a[_i];
            var index = this.expandedElementIds.indexOf(collapsed);
            if (index !== -1)
                this.expandedElementIds.splice(index, 1);
        }
        for (var _b = 0, _c = action.expandIds; _b < _c.length; _b++) {
            var expanded = _c[_b];
            this.expandedElementIds.push(expanded);
        }
    };
    ExpansionState.prototype.collapseAll = function () {
        this.expandedElementIds = [];
    };
    return ExpansionState;
}());
exports.ExpansionState = ExpansionState;
//# sourceMappingURL=diagram-state.js.map

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = h;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vnode__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(148);


function addNS(data, children, sel) {
    data.ns = 'http://www.w3.org/2000/svg';
    if (sel !== 'foreignObject' && children !== undefined) {
        for (var i = 0; i < children.length; ++i) {
            var childData = children[i].data;
            if (childData !== undefined) {
                addNS(childData, children[i].children, children[i].sel);
            }
        }
    }
}
function h(sel, b, c) {
    var data = {}, children, text, i;
    if (c !== undefined) {
        data = b;
        if (__WEBPACK_IMPORTED_MODULE_1__is__["a" /* array */](c)) {
            children = c;
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__is__["b" /* primitive */](c)) {
            text = c;
        }
        else if (c && c.sel) {
            children = [c];
        }
    }
    else if (b !== undefined) {
        if (__WEBPACK_IMPORTED_MODULE_1__is__["a" /* array */](b)) {
            children = b;
        }
        else if (__WEBPACK_IMPORTED_MODULE_1__is__["b" /* primitive */](b)) {
            text = b;
        }
        else if (b && b.sel) {
            children = [b];
        }
        else {
            data = b;
        }
    }
    if (__WEBPACK_IMPORTED_MODULE_1__is__["a" /* array */](children)) {
        for (i = 0; i < children.length; ++i) {
            if (__WEBPACK_IMPORTED_MODULE_1__is__["b" /* primitive */](children[i]))
                children[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__vnode__["b" /* vnode */])(undefined, undefined, undefined, children[i], undefined);
        }
    }
    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
        addNS(data, children, sel);
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__vnode__["b" /* vnode */])(sel, data, children, text, undefined);
}
;
/* unused harmony default export */ var _unused_webpack_default_export = (h);
//# sourceMappingURL=h.js.map

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return array; });
/* harmony export (immutable) */ __webpack_exports__["b"] = primitive;
var array = Array.isArray;
function primitive(s) {
    return typeof s === 'string' || typeof s === 'number';
}
//# sourceMappingURL=is.js.map

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["init"] = init;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vnode__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__is__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__htmldomapi__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__h__ = __webpack_require__(147);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__h__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__thunk__ = __webpack_require__(278);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "thunk", function() { return __WEBPACK_IMPORTED_MODULE_4__thunk__["a"]; });



function isUndef(s) { return s === undefined; }
function isDef(s) { return s !== undefined; }
var emptyNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__vnode__["a" /* default */])('', {}, [], undefined, undefined);
function sameVnode(vnode1, vnode2) {
    return vnode1.key === vnode2.key && vnode1.sel === vnode2.sel;
}
function isVnode(vnode) {
    return vnode.sel !== undefined;
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
    var i, map = {}, key, ch;
    for (i = beginIdx; i <= endIdx; ++i) {
        ch = children[i];
        if (ch != null) {
            key = ch.key;
            if (key !== undefined)
                map[key] = i;
        }
    }
    return map;
}
var hooks = ['create', 'update', 'remove', 'destroy', 'pre', 'post'];


function init(modules, domApi) {
    var i, j, cbs = {};
    var api = domApi !== undefined ? domApi : __WEBPACK_IMPORTED_MODULE_2__htmldomapi__["a" /* default */];
    for (i = 0; i < hooks.length; ++i) {
        cbs[hooks[i]] = [];
        for (j = 0; j < modules.length; ++j) {
            var hook = modules[j][hooks[i]];
            if (hook !== undefined) {
                cbs[hooks[i]].push(hook);
            }
        }
    }
    function emptyNodeAt(elm) {
        var id = elm.id ? '#' + elm.id : '';
        var c = elm.className ? '.' + elm.className.split(' ').join('.') : '';
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__vnode__["a" /* default */])(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
    }
    function createRmCb(childElm, listeners) {
        return function rmCb() {
            if (--listeners === 0) {
                var parent_1 = api.parentNode(childElm);
                api.removeChild(parent_1, childElm);
            }
        };
    }
    function createElm(vnode, insertedVnodeQueue) {
        var i, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.init)) {
                i(vnode);
                data = vnode.data;
            }
        }
        var children = vnode.children, sel = vnode.sel;
        if (sel === '!') {
            if (isUndef(vnode.text)) {
                vnode.text = '';
            }
            vnode.elm = api.createComment(vnode.text);
        }
        else if (sel !== undefined) {
            // Parse selector
            var hashIdx = sel.indexOf('#');
            var dotIdx = sel.indexOf('.', hashIdx);
            var hash = hashIdx > 0 ? hashIdx : sel.length;
            var dot = dotIdx > 0 ? dotIdx : sel.length;
            var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
            var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag)
                : api.createElement(tag);
            if (hash < dot)
                elm.setAttribute('id', sel.slice(hash + 1, dot));
            if (dotIdx > 0)
                elm.setAttribute('class', sel.slice(dot + 1).replace(/\./g, ' '));
            for (i = 0; i < cbs.create.length; ++i)
                cbs.create[i](emptyNode, vnode);
            if (__WEBPACK_IMPORTED_MODULE_1__is__["a" /* array */](children)) {
                for (i = 0; i < children.length; ++i) {
                    var ch = children[i];
                    if (ch != null) {
                        api.appendChild(elm, createElm(ch, insertedVnodeQueue));
                    }
                }
            }
            else if (__WEBPACK_IMPORTED_MODULE_1__is__["b" /* primitive */](vnode.text)) {
                api.appendChild(elm, api.createTextNode(vnode.text));
            }
            i = vnode.data.hook; // Reuse variable
            if (isDef(i)) {
                if (i.create)
                    i.create(emptyNode, vnode);
                if (i.insert)
                    insertedVnodeQueue.push(vnode);
            }
        }
        else {
            vnode.elm = api.createTextNode(vnode.text);
        }
        return vnode.elm;
    }
    function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
        for (; startIdx <= endIdx; ++startIdx) {
            var ch = vnodes[startIdx];
            if (ch != null) {
                api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
            }
        }
    }
    function invokeDestroyHook(vnode) {
        var i, j, data = vnode.data;
        if (data !== undefined) {
            if (isDef(i = data.hook) && isDef(i = i.destroy))
                i(vnode);
            for (i = 0; i < cbs.destroy.length; ++i)
                cbs.destroy[i](vnode);
            if (vnode.children !== undefined) {
                for (j = 0; j < vnode.children.length; ++j) {
                    i = vnode.children[j];
                    if (i != null && typeof i !== "string") {
                        invokeDestroyHook(i);
                    }
                }
            }
        }
    }
    function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
        for (; startIdx <= endIdx; ++startIdx) {
            var i_1 = void 0, listeners = void 0, rm = void 0, ch = vnodes[startIdx];
            if (ch != null) {
                if (isDef(ch.sel)) {
                    invokeDestroyHook(ch);
                    listeners = cbs.remove.length + 1;
                    rm = createRmCb(ch.elm, listeners);
                    for (i_1 = 0; i_1 < cbs.remove.length; ++i_1)
                        cbs.remove[i_1](ch, rm);
                    if (isDef(i_1 = ch.data) && isDef(i_1 = i_1.hook) && isDef(i_1 = i_1.remove)) {
                        i_1(ch, rm);
                    }
                    else {
                        rm();
                    }
                }
                else {
                    api.removeChild(parentElm, ch.elm);
                }
            }
        }
    }
    function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
        var oldStartIdx = 0, newStartIdx = 0;
        var oldEndIdx = oldCh.length - 1;
        var oldStartVnode = oldCh[0];
        var oldEndVnode = oldCh[oldEndIdx];
        var newEndIdx = newCh.length - 1;
        var newStartVnode = newCh[0];
        var newEndVnode = newCh[newEndIdx];
        var oldKeyToIdx;
        var idxInOld;
        var elmToMove;
        var before;
        while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
            if (oldStartVnode == null) {
                oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
            }
            else if (oldEndVnode == null) {
                oldEndVnode = oldCh[--oldEndIdx];
            }
            else if (newStartVnode == null) {
                newStartVnode = newCh[++newStartIdx];
            }
            else if (newEndVnode == null) {
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newStartVnode)) {
                patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                oldStartVnode = oldCh[++oldStartIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else if (sameVnode(oldEndVnode, newEndVnode)) {
                patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                oldEndVnode = oldCh[--oldEndIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldStartVnode, newEndVnode)) {
                patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
                oldStartVnode = oldCh[++oldStartIdx];
                newEndVnode = newCh[--newEndIdx];
            }
            else if (sameVnode(oldEndVnode, newStartVnode)) {
                patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                oldEndVnode = oldCh[--oldEndIdx];
                newStartVnode = newCh[++newStartIdx];
            }
            else {
                if (oldKeyToIdx === undefined) {
                    oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                }
                idxInOld = oldKeyToIdx[newStartVnode.key];
                if (isUndef(idxInOld)) {
                    api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    newStartVnode = newCh[++newStartIdx];
                }
                else {
                    elmToMove = oldCh[idxInOld];
                    if (elmToMove.sel !== newStartVnode.sel) {
                        api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
                    }
                    else {
                        patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
                        oldCh[idxInOld] = undefined;
                        api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
                    }
                    newStartVnode = newCh[++newStartIdx];
                }
            }
        }
        if (oldStartIdx <= oldEndIdx || newStartIdx <= newEndIdx) {
            if (oldStartIdx > oldEndIdx) {
                before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
                addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
            }
            else {
                removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
            }
        }
    }
    function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
        var i, hook;
        if (isDef(i = vnode.data) && isDef(hook = i.hook) && isDef(i = hook.prepatch)) {
            i(oldVnode, vnode);
        }
        var elm = vnode.elm = oldVnode.elm;
        var oldCh = oldVnode.children;
        var ch = vnode.children;
        if (oldVnode === vnode)
            return;
        if (vnode.data !== undefined) {
            for (i = 0; i < cbs.update.length; ++i)
                cbs.update[i](oldVnode, vnode);
            i = vnode.data.hook;
            if (isDef(i) && isDef(i = i.update))
                i(oldVnode, vnode);
        }
        if (isUndef(vnode.text)) {
            if (isDef(oldCh) && isDef(ch)) {
                if (oldCh !== ch)
                    updateChildren(elm, oldCh, ch, insertedVnodeQueue);
            }
            else if (isDef(ch)) {
                if (isDef(oldVnode.text))
                    api.setTextContent(elm, '');
                addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
            }
            else if (isDef(oldCh)) {
                removeVnodes(elm, oldCh, 0, oldCh.length - 1);
            }
            else if (isDef(oldVnode.text)) {
                api.setTextContent(elm, '');
            }
        }
        else if (oldVnode.text !== vnode.text) {
            api.setTextContent(elm, vnode.text);
        }
        if (isDef(hook) && isDef(i = hook.postpatch)) {
            i(oldVnode, vnode);
        }
    }
    return function patch(oldVnode, vnode) {
        var i, elm, parent;
        var insertedVnodeQueue = [];
        for (i = 0; i < cbs.pre.length; ++i)
            cbs.pre[i]();
        if (!isVnode(oldVnode)) {
            oldVnode = emptyNodeAt(oldVnode);
        }
        if (sameVnode(oldVnode, vnode)) {
            patchVnode(oldVnode, vnode, insertedVnodeQueue);
        }
        else {
            elm = oldVnode.elm;
            parent = api.parentNode(elm);
            createElm(vnode, insertedVnodeQueue);
            if (parent !== null) {
                api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
                removeVnodes(parent, [oldVnode], 0, 0);
            }
        }
        for (i = 0; i < insertedVnodeQueue.length; ++i) {
            insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
        }
        for (i = 0; i < cbs.post.length; ++i)
            cbs.post[i]();
        return vnode;
    };
}
//# sourceMappingURL=snabbdom.js.map

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = vnode;
function vnode(sel, data, children, text, elm) {
    var key = data === undefined ? undefined : data.key;
    return { sel: sel, data: data, children: children,
        text: text, elm: elm, key: key };
}
/* harmony default export */ __webpack_exports__["a"] = (vnode);
//# sourceMappingURL=vnode.js.map

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
__webpack_require__(82);
__webpack_require__(120);
__webpack_require__(183);
module.exports = __webpack_require__(20).Map;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
__webpack_require__(82);
__webpack_require__(120);
__webpack_require__(184);
module.exports = __webpack_require__(20).Promise;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(198);
__webpack_require__(202);
__webpack_require__(209);
__webpack_require__(82);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(199);
__webpack_require__(203);
__webpack_require__(205);
__webpack_require__(189);
__webpack_require__(190);
__webpack_require__(191);
__webpack_require__(192);
__webpack_require__(195);
__webpack_require__(196);
__webpack_require__(197);
__webpack_require__(200);
__webpack_require__(201);
__webpack_require__(204);
__webpack_require__(206);
__webpack_require__(207);
__webpack_require__(208);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
module.exports = __webpack_require__(20).String;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(210);
__webpack_require__(81);
module.exports = __webpack_require__(20).Symbol;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Copyright (c) 2018 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
__webpack_require__(241);
var standalone_1 = __webpack_require__(292);
standalone_1.initializeSiriusDiagram();


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(4)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(26)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(33);
var toLength = __webpack_require__(45);
var toAbsoluteIndex = __webpack_require__(117);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(27).f;
var create = __webpack_require__(74);
var redefineAll = __webpack_require__(76);
var ctx = __webpack_require__(37);
var anInstance = __webpack_require__(66);
var forOf = __webpack_require__(71);
var $iterDefine = __webpack_require__(72);
var step = __webpack_require__(108);
var setSpecies = __webpack_require__(114);
var DESCRIPTORS = __webpack_require__(23);
var fastKey = __webpack_require__(73).fastKey;
var validate = __webpack_require__(118);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(28);
var redefineAll = __webpack_require__(76);
var meta = __webpack_require__(73);
var forOf = __webpack_require__(71);
var anInstance = __webpack_require__(66);
var isObject = __webpack_require__(14);
var fails = __webpack_require__(24);
var $iterDetect = __webpack_require__(107);
var setToStringTag = __webpack_require__(44);
var inheritIfRequired = __webpack_require__(161);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(57);
var gOPS = __webpack_require__(112);
var pIE = __webpack_require__(75);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
var setPrototypeOf = __webpack_require__(174).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 162 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(36);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(43);
var ITERATOR = __webpack_require__(4)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(36);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(19);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(74);
var descriptor = __webpack_require__(58);
var setToStringTag = __webpack_require__(44);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(26)(IteratorPrototype, __webpack_require__(4)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var macrotask = __webpack_require__(116).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(36)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(27);
var anObject = __webpack_require__(19);
var getKeys = __webpack_require__(57);

module.exports = __webpack_require__(23) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(33);
var gOPN = __webpack_require__(111).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(25);
var toObject = __webpack_require__(179);
var IE_PROTO = __webpack_require__(77)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var isObject = __webpack_require__(14);
var newPromiseCapability = __webpack_require__(109);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(19);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(37)(Function.call, __webpack_require__(110).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(19);
var aFunction = __webpack_require__(54);
var SPECIES = __webpack_require__(4)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(59);
var defined = __webpack_require__(22);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
var defined = __webpack_require__(22);
var fails = __webpack_require__(24);
var spaces = __webpack_require__(178);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(22);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(20);
var LIBRARY = __webpack_require__(56);
var wksExt = __webpack_require__(119);
var defineProperty = __webpack_require__(27).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(67);
var ITERATOR = __webpack_require__(4)('iterator');
var Iterators = __webpack_require__(43);
module.exports = __webpack_require__(20).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(156);
var step = __webpack_require__(108);
var Iterators = __webpack_require__(43);
var toIObject = __webpack_require__(33);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(72)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(158);
var validate = __webpack_require__(118);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(159)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(56);
var global = __webpack_require__(6);
var ctx = __webpack_require__(37);
var classof = __webpack_require__(67);
var $export = __webpack_require__(10);
var isObject = __webpack_require__(14);
var aFunction = __webpack_require__(54);
var anInstance = __webpack_require__(66);
var forOf = __webpack_require__(71);
var speciesConstructor = __webpack_require__(175);
var task = __webpack_require__(116).set;
var microtask = __webpack_require__(168)();
var newPromiseCapabilityModule = __webpack_require__(109);
var perform = __webpack_require__(172);
var promiseResolve = __webpack_require__(173);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(76)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(44)($Promise, PROMISE);
__webpack_require__(114)(PROMISE);
Wrapper = __webpack_require__(20)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(107)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(55)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__(55)('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// @@search logic
__webpack_require__(55)('search', 1, function (defined, SEARCH, $search) {
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__(55)('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__(106);
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(11)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(11)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(11)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(11)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(10);
var $at = __webpack_require__(115)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(10);
var toLength = __webpack_require__(45);
var context = __webpack_require__(79);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(70)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(11)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(11)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(11)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
var toAbsoluteIndex = __webpack_require__(117);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(10);
var context = __webpack_require__(79);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(70)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(11)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(11)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
var toIObject = __webpack_require__(33);
var toLength = __webpack_require__(45);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(176)
});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(11)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(10);
var toLength = __webpack_require__(45);
var context = __webpack_require__(79);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(70)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(11)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(11)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(11)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(177)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(6);
var has = __webpack_require__(25);
var DESCRIPTORS = __webpack_require__(23);
var $export = __webpack_require__(10);
var redefine = __webpack_require__(28);
var META = __webpack_require__(73).KEY;
var $fails = __webpack_require__(24);
var shared = __webpack_require__(78);
var setToStringTag = __webpack_require__(44);
var uid = __webpack_require__(46);
var wks = __webpack_require__(4);
var wksExt = __webpack_require__(119);
var wksDefine = __webpack_require__(180);
var enumKeys = __webpack_require__(160);
var isArray = __webpack_require__(165);
var anObject = __webpack_require__(19);
var isObject = __webpack_require__(14);
var toIObject = __webpack_require__(33);
var toPrimitive = __webpack_require__(80);
var createDesc = __webpack_require__(58);
var _create = __webpack_require__(74);
var gOPNExt = __webpack_require__(170);
var $GOPD = __webpack_require__(110);
var $DP = __webpack_require__(27);
var $keys = __webpack_require__(57);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(111).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(75).f = $propertyIsEnumerable;
  __webpack_require__(112).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(56)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(26)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var attrRE = /([\w-]+)|=|(['"])([.\s\S]*?)\2/g;
var voidElements = __webpack_require__(306);

module.exports = function (tag) {
    var i = 0;
    var key;
    var expectingValueAfterEquals = true;
    var res = {
        type: 'tag',
        name: '',
        voidElement: false,
        attrs: {},
        children: []
    };

    tag.replace(attrRE, function (match) {
        if (match === '=') {
            expectingValueAfterEquals = true;
            i++;
            return;
        }

        if (!expectingValueAfterEquals) {
            if (key) {
                res.attrs[key] = key; // boolean attribute
            }
            key=match;
        } else {
            if (i === 0) {
                if (voidElements[match] || tag.charAt(tag.length - 2) === '/') {
                    res.voidElement = true;
                }
                res.name = match;
            } else {
                res.attrs[key] = match.replace(/^['"]|['"]$/g, '');
                key=undefined;
            }
        }
        i++;
        expectingValueAfterEquals = false;
    });

    return res;
};


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

/*jshint -W030 */
var tagRE = /(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g;
var parseTag = __webpack_require__(211);
// re-used obj for quick lookups of components
var empty = Object.create ? Object.create(null) : {};
// common logic for pushing a child node onto a list
function pushTextNode(list, html, level, start, ignoreWhitespace) {
    // calculate correct end of the content slice in case there's
    // no tag after the text node.
    var end = html.indexOf('<', start);
    var content = html.slice(start, end === -1 ? undefined : end);
    // if a node is nothing but whitespace, collapse it as the spec states:
    // https://www.w3.org/TR/html4/struct/text.html#h-9.1
    if (/^\s*$/.test(content)) {
        content = ' ';
    }
    // don't add whitespace-only text nodes if they would be trailing text nodes
    // or if they would be leading whitespace-only text nodes:
    //  * end > -1 indicates this is not a trailing text node
    //  * leading node is when level is -1 and list has length 0
    if ((!ignoreWhitespace && end > -1 && level + list.length >= 0) || content !== ' ') {
        list.push({
            type: 'text',
            content: content
        });
    }
}

module.exports = function parse(html, options) {
    options || (options = {});
    options.components || (options.components = empty);
    var result = [];
    var current;
    var level = -1;
    var arr = [];
    var byTag = {};
    var inComponent = false;

    html.replace(tagRE, function (tag, index) {
        if (inComponent) {
            if (tag !== ('</' + current.name + '>')) {
                return;
            } else {
                inComponent = false;
            }
        }

        var isOpen = tag.charAt(1) !== '/';
        var isComment = tag.indexOf('<!--') === 0;
        var start = index + tag.length;
        var nextChar = html.charAt(start);
        var parent;

        if (isOpen && !isComment) {
            level++;

            current = parseTag(tag);
            if (current.type === 'tag' && options.components[current.name]) {
                current.type = 'component';
                inComponent = true;
            }

            if (!current.voidElement && !inComponent && nextChar && nextChar !== '<') {
                pushTextNode(current.children, html, level, start, options.ignoreWhitespace);
            }

            byTag[current.tagName] = current;

            // if we're at root, push new base node
            if (level === 0) {
                result.push(current);
            }

            parent = arr[level - 1];

            if (parent) {
                parent.children.push(current);
            }

            arr[level] = current;
        }

        if (isComment || !isOpen || current.voidElement) {
            if (!isComment) {
                level--;
            }
            if (!inComponent && nextChar !== '<' && nextChar) {
                // trailing text node
                // if we're at the root, push a base text node. otherwise add as
                // a child to the current node.
                parent = level === -1 ? result : arr[level].children;
                pushTextNode(parent, html, level, start, options.ignoreWhitespace);
            }
        }
    });

    // If the "html" passed isn't actually html, add it as a text node.
    if (!result.length && html.length) {
        pushTextNode(result, html, 0, 0, options.ignoreWhitespace);
    }

    return result;
};


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERRORS_MSGS = __webpack_require__(12);
var METADATA_KEY = __webpack_require__(5);
function injectable() {
    return function (target) {
        if (Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target)) {
            throw new Error(ERRORS_MSGS.DUPLICATED_INJECTABLE_DECORATOR);
        }
        var types = Reflect.getMetadata(METADATA_KEY.DESIGN_PARAM_TYPES, target) || [];
        Reflect.defineMetadata(METADATA_KEY.PARAM_TYPES, types, target);
        return target;
    };
}
exports.injectable = injectable;


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(5);
var metadata_1 = __webpack_require__(16);
var decorator_utils_1 = __webpack_require__(29);
function multiInject(serviceIdentifier) {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.MULTI_INJECT_TAG, serviceIdentifier);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.multiInject = multiInject;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(5);
var metadata_1 = __webpack_require__(16);
var decorator_utils_1 = __webpack_require__(29);
function named(name) {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, name);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.named = named;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(5);
var metadata_1 = __webpack_require__(16);
var decorator_utils_1 = __webpack_require__(29);
function optional() {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.OPTIONAL_TAG, true);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.optional = optional;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERRORS_MSGS = __webpack_require__(12);
var METADATA_KEY = __webpack_require__(5);
var metadata_1 = __webpack_require__(16);
function postConstruct() {
    return function (target, propertyKey, descriptor) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.POST_CONSTRUCT, propertyKey);
        if (Reflect.hasOwnMetadata(METADATA_KEY.POST_CONSTRUCT, target.constructor)) {
            throw new Error(ERRORS_MSGS.MULTIPLE_POST_CONSTRUCT_METHODS);
        }
        Reflect.defineMetadata(METADATA_KEY.POST_CONSTRUCT, metadata, target.constructor);
    };
}
exports.postConstruct = postConstruct;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(16);
var decorator_utils_1 = __webpack_require__(29);
function tagged(metadataKey, metadataValue) {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(metadataKey, metadataValue);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.tagged = tagged;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(5);
var metadata_1 = __webpack_require__(16);
var decorator_utils_1 = __webpack_require__(29);
function targetName(name) {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.NAME_TAG, name);
        decorator_utils_1.tagParameter(target, targetKey, index, metadata);
    };
}
exports.targetName = targetName;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(5);
var metadata_1 = __webpack_require__(16);
var decorator_utils_1 = __webpack_require__(29);
function unmanaged() {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.UNMANAGED_TAG, true);
        decorator_utils_1.tagParameter(target, targetKey, index, metadata);
    };
}
exports.unmanaged = unmanaged;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var literal_types_1 = __webpack_require__(21);
var guid_1 = __webpack_require__(34);
var Binding = (function () {
    function Binding(serviceIdentifier, scope) {
        this.guid = guid_1.guid();
        this.activated = false;
        this.serviceIdentifier = serviceIdentifier;
        this.scope = scope;
        this.type = literal_types_1.BindingTypeEnum.Invalid;
        this.constraint = function (request) { return true; };
        this.implementationType = null;
        this.cache = null;
        this.factory = null;
        this.provider = null;
        this.onActivation = null;
        this.dynamicValue = null;
    }
    Binding.prototype.clone = function () {
        var clone = new Binding(this.serviceIdentifier, this.scope);
        clone.activated = false;
        clone.implementationType = this.implementationType;
        clone.dynamicValue = this.dynamicValue;
        clone.scope = this.scope;
        clone.type = this.type;
        clone.factory = this.factory;
        clone.provider = this.provider;
        clone.constraint = this.constraint;
        clone.onActivation = this.onActivation;
        clone.cache = this.cache;
        return clone;
    };
    return Binding;
}());
exports.Binding = Binding;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BindingCount = {
    MultipleBindingsAvailable: 2,
    NoBindingsAvailable: 0,
    OnlyOneBindingAvailable: 1
};
exports.BindingCount = BindingCount;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_1 = __webpack_require__(221);
var ERROR_MSGS = __webpack_require__(12);
var literal_types_1 = __webpack_require__(21);
var METADATA_KEY = __webpack_require__(5);
var metadata_reader_1 = __webpack_require__(123);
var planner_1 = __webpack_require__(229);
var resolver_1 = __webpack_require__(234);
var binding_to_syntax_1 = __webpack_require__(237);
var guid_1 = __webpack_require__(34);
var serialization_1 = __webpack_require__(47);
var container_snapshot_1 = __webpack_require__(225);
var lookup_1 = __webpack_require__(226);
var Container = (function () {
    function Container(containerOptions) {
        if (containerOptions !== undefined) {
            if (typeof containerOptions !== "object") {
                throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
            }
            else {
                if (containerOptions.defaultScope !== undefined &&
                    containerOptions.defaultScope !== literal_types_1.BindingScopeEnum.Singleton &&
                    containerOptions.defaultScope !== literal_types_1.BindingScopeEnum.Transient &&
                    containerOptions.defaultScope !== literal_types_1.BindingScopeEnum.Request) {
                    throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
                }
                if (containerOptions.autoBindInjectable !== undefined &&
                    typeof containerOptions.autoBindInjectable !== "boolean") {
                    throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
                }
            }
            this.options = {
                autoBindInjectable: containerOptions.autoBindInjectable,
                defaultScope: containerOptions.defaultScope
            };
        }
        else {
            this.options = {
                autoBindInjectable: false,
                defaultScope: literal_types_1.BindingScopeEnum.Transient
            };
        }
        this.guid = guid_1.guid();
        this._bindingDictionary = new lookup_1.Lookup();
        this._snapshots = [];
        this._middleware = null;
        this.parent = null;
        this._metadataReader = new metadata_reader_1.MetadataReader();
    }
    Container.merge = function (container1, container2) {
        var container = new Container();
        var bindingDictionary = planner_1.getBindingDictionary(container);
        var bindingDictionary1 = planner_1.getBindingDictionary(container1);
        var bindingDictionary2 = planner_1.getBindingDictionary(container2);
        function copyDictionary(origin, destination) {
            origin.traverse(function (key, value) {
                value.forEach(function (binding) {
                    destination.add(binding.serviceIdentifier, binding.clone());
                });
            });
        }
        copyDictionary(bindingDictionary1, bindingDictionary);
        copyDictionary(bindingDictionary2, bindingDictionary);
        return container;
    };
    Container.prototype.load = function () {
        var _this = this;
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        var setModuleId = function (bindingToSyntax, moduleId) {
            bindingToSyntax._binding.moduleId = moduleId;
        };
        var getBindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var bindingToSyntax = _this.bind.call(_this, serviceIdentifier);
                setModuleId(bindingToSyntax, moduleId);
                return bindingToSyntax;
            };
        };
        var getUnbindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var _unbind = _this.unbind.bind(_this);
                _unbind(serviceIdentifier);
            };
        };
        var getIsboundFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var _isBound = _this.isBound.bind(_this);
                return _isBound(serviceIdentifier);
            };
        };
        var getRebindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var bindingToSyntax = _this.rebind.call(_this, serviceIdentifier);
                setModuleId(bindingToSyntax, moduleId);
                return bindingToSyntax;
            };
        };
        modules.forEach(function (module) {
            var bindFunction = getBindFunction(module.guid);
            var unbindFunction = getUnbindFunction(module.guid);
            var isboundFunction = getIsboundFunction(module.guid);
            var rebindFunction = getRebindFunction(module.guid);
            module.registry(bindFunction, unbindFunction, isboundFunction, rebindFunction);
        });
    };
    Container.prototype.unload = function () {
        var _this = this;
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        var conditionFactory = function (expected) { return function (item) {
            return item.moduleId === expected;
        }; };
        modules.forEach(function (module) {
            var condition = conditionFactory(module.guid);
            _this._bindingDictionary.removeByCondition(condition);
        });
    };
    Container.prototype.bind = function (serviceIdentifier) {
        var scope = this.options.defaultScope || literal_types_1.BindingScopeEnum.Transient;
        var binding = new binding_1.Binding(serviceIdentifier, scope);
        this._bindingDictionary.add(serviceIdentifier, binding);
        return new binding_to_syntax_1.BindingToSyntax(binding);
    };
    Container.prototype.rebind = function (serviceIdentifier) {
        this.unbind(serviceIdentifier);
        return this.bind(serviceIdentifier);
    };
    Container.prototype.unbind = function (serviceIdentifier) {
        try {
            this._bindingDictionary.remove(serviceIdentifier);
        }
        catch (e) {
            throw new Error(ERROR_MSGS.CANNOT_UNBIND + " " + serialization_1.getServiceIdentifierAsString(serviceIdentifier));
        }
    };
    Container.prototype.unbindAll = function () {
        this._bindingDictionary = new lookup_1.Lookup();
    };
    Container.prototype.isBound = function (serviceIdentifier) {
        var bound = this._bindingDictionary.hasKey(serviceIdentifier);
        if (!bound && this.parent) {
            bound = this.parent.isBound(serviceIdentifier);
        }
        return bound;
    };
    Container.prototype.isBoundNamed = function (serviceIdentifier, named) {
        return this.isBoundTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
    };
    Container.prototype.isBoundTagged = function (serviceIdentifier, key, value) {
        var bound = false;
        if (this._bindingDictionary.hasKey(serviceIdentifier)) {
            var bindings = this._bindingDictionary.get(serviceIdentifier);
            var request_1 = planner_1.createMockRequest(this, serviceIdentifier, key, value);
            bound = bindings.some(function (b) { return b.constraint(request_1); });
        }
        if (!bound && this.parent) {
            bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
        }
        return bound;
    };
    Container.prototype.snapshot = function () {
        this._snapshots.push(container_snapshot_1.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware));
    };
    Container.prototype.restore = function () {
        var snapshot = this._snapshots.pop();
        if (snapshot === undefined) {
            throw new Error(ERROR_MSGS.NO_MORE_SNAPSHOTS_AVAILABLE);
        }
        this._bindingDictionary = snapshot.bindings;
        this._middleware = snapshot.middleware;
    };
    Container.prototype.createChild = function () {
        var child = new Container();
        child.parent = this;
        return child;
    };
    Container.prototype.applyMiddleware = function () {
        var middlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i] = arguments[_i];
        }
        var initial = (this._middleware) ? this._middleware : this._planAndResolve();
        this._middleware = middlewares.reduce(function (prev, curr) { return curr(prev); }, initial);
    };
    Container.prototype.applyCustomMetadataReader = function (metadataReader) {
        this._metadataReader = metadataReader;
    };
    Container.prototype.get = function (serviceIdentifier) {
        return this._get(false, false, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier);
    };
    Container.prototype.getTagged = function (serviceIdentifier, key, value) {
        return this._get(false, false, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier, key, value);
    };
    Container.prototype.getNamed = function (serviceIdentifier, named) {
        return this.getTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
    };
    Container.prototype.getAll = function (serviceIdentifier) {
        return this._get(true, true, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier);
    };
    Container.prototype.getAllTagged = function (serviceIdentifier, key, value) {
        return this._get(false, true, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier, key, value);
    };
    Container.prototype.getAllNamed = function (serviceIdentifier, named) {
        return this.getAllTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
    };
    Container.prototype.resolve = function (constructorFunction) {
        var tempContainer = new Container();
        tempContainer.bind(constructorFunction).toSelf();
        tempContainer.parent = this;
        return tempContainer.get(constructorFunction);
    };
    Container.prototype._get = function (avoidConstraints, isMultiInject, targetType, serviceIdentifier, key, value) {
        var result = null;
        var defaultArgs = {
            avoidConstraints: avoidConstraints,
            contextInterceptor: function (context) { return context; },
            isMultiInject: isMultiInject,
            key: key,
            serviceIdentifier: serviceIdentifier,
            targetType: targetType,
            value: value
        };
        if (this._middleware) {
            result = this._middleware(defaultArgs);
            if (result === undefined || result === null) {
                throw new Error(ERROR_MSGS.INVALID_MIDDLEWARE_RETURN);
            }
        }
        else {
            result = this._planAndResolve()(defaultArgs);
        }
        return result;
    };
    Container.prototype._planAndResolve = function () {
        var _this = this;
        return function (args) {
            var context = planner_1.plan(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
            context = args.contextInterceptor(context);
            var result = resolver_1.resolve(context);
            return result;
        };
    };
    return Container;
}());
exports.Container = Container;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid_1 = __webpack_require__(34);
var ContainerModule = (function () {
    function ContainerModule(registry) {
        this.guid = guid_1.guid();
        this.registry = registry;
    }
    return ContainerModule;
}());
exports.ContainerModule = ContainerModule;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContainerSnapshot = (function () {
    function ContainerSnapshot() {
    }
    ContainerSnapshot.of = function (bindings, middleware) {
        var snapshot = new ContainerSnapshot();
        snapshot.bindings = bindings;
        snapshot.middleware = middleware;
        return snapshot;
    };
    return ContainerSnapshot;
}());
exports.ContainerSnapshot = ContainerSnapshot;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(12);
var Lookup = (function () {
    function Lookup() {
        this._map = new Map();
    }
    Lookup.prototype.getMap = function () {
        return this._map;
    };
    Lookup.prototype.add = function (serviceIdentifier, value) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        if (value === null || value === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== undefined) {
            entry.push(value);
            this._map.set(serviceIdentifier, entry);
        }
        else {
            this._map.set(serviceIdentifier, [value]);
        }
    };
    Lookup.prototype.get = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== undefined) {
            return entry;
        }
        else {
            throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
        }
    };
    Lookup.prototype.remove = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        if (!this._map.delete(serviceIdentifier)) {
            throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
        }
    };
    Lookup.prototype.removeByCondition = function (condition) {
        var _this = this;
        this._map.forEach(function (entries, key) {
            var updatedEntries = entries.filter(function (entry) { return !condition(entry); });
            if (updatedEntries.length > 0) {
                _this._map.set(key, updatedEntries);
            }
            else {
                _this._map.delete(key);
            }
        });
    };
    Lookup.prototype.hasKey = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        return this._map.has(serviceIdentifier);
    };
    Lookup.prototype.clone = function () {
        var copy = new Lookup();
        this._map.forEach(function (value, key) {
            value.forEach(function (b) { return copy.add(key, b.clone()); });
        });
        return copy;
    };
    Lookup.prototype.traverse = function (func) {
        this._map.forEach(function (value, key) {
            func(key, value);
        });
    };
    return Lookup;
}());
exports.Lookup = Lookup;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid_1 = __webpack_require__(34);
var Context = (function () {
    function Context(container) {
        this.guid = guid_1.guid();
        this.container = container;
    }
    Context.prototype.addPlan = function (plan) {
        this.plan = plan;
    };
    Context.prototype.setCurrentRequest = function (currentRequest) {
        this.currentRequest = currentRequest;
    };
    return Context;
}());
exports.Context = Context;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Plan = (function () {
    function Plan(parentContext, rootRequest) {
        this.parentContext = parentContext;
        this.rootRequest = rootRequest;
    }
    return Plan;
}());
exports.Plan = Plan;


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_count_1 = __webpack_require__(222);
var ERROR_MSGS = __webpack_require__(12);
var literal_types_1 = __webpack_require__(21);
var METADATA_KEY = __webpack_require__(5);
var exceptions_1 = __webpack_require__(127);
var serialization_1 = __webpack_require__(47);
var context_1 = __webpack_require__(227);
var metadata_1 = __webpack_require__(16);
var plan_1 = __webpack_require__(228);
var reflection_utils_1 = __webpack_require__(231);
var request_1 = __webpack_require__(232);
var target_1 = __webpack_require__(124);
function getBindingDictionary(cntnr) {
    return cntnr._bindingDictionary;
}
exports.getBindingDictionary = getBindingDictionary;
function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
    var metadataKey = isMultiInject ? METADATA_KEY.MULTI_INJECT_TAG : METADATA_KEY.INJECT_TAG;
    var injectMetadata = new metadata_1.Metadata(metadataKey, serviceIdentifier);
    var target = new target_1.Target(targetType, name, serviceIdentifier, injectMetadata);
    if (key !== undefined) {
        var tagMetadata = new metadata_1.Metadata(key, value);
        target.metadata.push(tagMetadata);
    }
    return target;
}
function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
    var bindings = getBindings(context.container, target.serviceIdentifier);
    var activeBindings = [];
    if (bindings.length === binding_count_1.BindingCount.NoBindingsAvailable &&
        context.container.options.autoBindInjectable &&
        typeof target.serviceIdentifier === "function" &&
        metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
        context.container.bind(target.serviceIdentifier).toSelf();
        bindings = getBindings(context.container, target.serviceIdentifier);
    }
    if (!avoidConstraints) {
        activeBindings = bindings.filter(function (binding) {
            var request = new request_1.Request(binding.serviceIdentifier, context, parentRequest, binding, target);
            return binding.constraint(request);
        });
    }
    else {
        activeBindings = bindings;
    }
    _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);
    return activeBindings;
}
function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
    switch (bindings.length) {
        case binding_count_1.BindingCount.NoBindingsAvailable:
            if (target.isOptional()) {
                return bindings;
            }
            else {
                var serviceIdentifierString = serialization_1.getServiceIdentifierAsString(serviceIdentifier);
                var msg = ERROR_MSGS.NOT_REGISTERED;
                msg += serialization_1.listMetadataForTarget(serviceIdentifierString, target);
                msg += serialization_1.listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
                throw new Error(msg);
            }
        case binding_count_1.BindingCount.OnlyOneBindingAvailable:
            if (!target.isArray()) {
                return bindings;
            }
        case binding_count_1.BindingCount.MultipleBindingsAvailable:
        default:
            if (!target.isArray()) {
                var serviceIdentifierString = serialization_1.getServiceIdentifierAsString(serviceIdentifier);
                var msg = ERROR_MSGS.AMBIGUOUS_MATCH + " " + serviceIdentifierString;
                msg += serialization_1.listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
                throw new Error(msg);
            }
            else {
                return bindings;
            }
    }
}
function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
    var activeBindings;
    var childRequest;
    if (parentRequest === null) {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
        childRequest = new request_1.Request(serviceIdentifier, context, null, activeBindings, target);
        var thePlan = new plan_1.Plan(context, childRequest);
        context.addPlan(thePlan);
    }
    else {
        activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
        childRequest = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
    }
    activeBindings.forEach(function (binding) {
        var subChildRequest = null;
        if (target.isArray()) {
            subChildRequest = childRequest.addChildRequest(binding.serviceIdentifier, binding, target);
        }
        else {
            if (binding.cache) {
                return;
            }
            subChildRequest = childRequest;
        }
        if (binding.type === literal_types_1.BindingTypeEnum.Instance && binding.implementationType !== null) {
            var dependencies = reflection_utils_1.getDependencies(metadataReader, binding.implementationType);
            dependencies.forEach(function (dependency) {
                _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
            });
        }
    });
}
function getBindings(container, serviceIdentifier) {
    var bindings = [];
    var bindingDictionary = getBindingDictionary(container);
    if (bindingDictionary.hasKey(serviceIdentifier)) {
        bindings = bindingDictionary.get(serviceIdentifier);
    }
    else if (container.parent !== null) {
        bindings = getBindings(container.parent, serviceIdentifier);
    }
    return bindings;
}
function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
    if (avoidConstraints === void 0) { avoidConstraints = false; }
    var context = new context_1.Context(container);
    var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
    try {
        _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
        return context;
    }
    catch (error) {
        if (exceptions_1.isStackOverflowExeption(error)) {
            if (context.plan) {
                serialization_1.circularDependencyToException(context.plan.rootRequest);
            }
        }
        throw error;
    }
}
exports.plan = plan;
function createMockRequest(container, serviceIdentifier, key, value) {
    var target = new target_1.Target(literal_types_1.TargetTypeEnum.Variable, "", serviceIdentifier, new metadata_1.Metadata(key, value));
    var context = new context_1.Context(container);
    var request = new request_1.Request(serviceIdentifier, context, null, [], target);
    return request;
}
exports.createMockRequest = createMockRequest;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueryableString = (function () {
    function QueryableString(str) {
        this.str = str;
    }
    QueryableString.prototype.startsWith = function (searchString) {
        return this.str.indexOf(searchString) === 0;
    };
    QueryableString.prototype.endsWith = function (searchString) {
        var reverseString = "";
        var reverseSearchString = searchString.split("").reverse().join("");
        reverseString = this.str.split("").reverse().join("");
        return this.startsWith.call({ str: reverseString }, reverseSearchString);
    };
    QueryableString.prototype.contains = function (searchString) {
        return (this.str.indexOf(searchString) !== -1);
    };
    QueryableString.prototype.equals = function (compareString) {
        return this.str === compareString;
    };
    QueryableString.prototype.value = function () {
        return this.str;
    };
    return QueryableString;
}());
exports.QueryableString = QueryableString;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inject_1 = __webpack_require__(122);
var ERROR_MSGS = __webpack_require__(12);
var literal_types_1 = __webpack_require__(21);
var METADATA_KEY = __webpack_require__(5);
var serialization_1 = __webpack_require__(47);
var target_1 = __webpack_require__(124);
function getDependencies(metadataReader, func) {
    var constructorName = serialization_1.getFunctionName(func);
    var targets = getTargets(metadataReader, constructorName, func, false);
    return targets;
}
exports.getDependencies = getDependencies;
function getTargets(metadataReader, constructorName, func, isBaseClass) {
    var metadata = metadataReader.getConstructorMetadata(func);
    var serviceIdentifiers = metadata.compilerGeneratedMetadata;
    if (serviceIdentifiers === undefined) {
        var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
        throw new Error(msg);
    }
    var constructorArgsMetadata = metadata.userGeneratedMetadata;
    var keys = Object.keys(constructorArgsMetadata);
    var hasUserDeclaredUnknownInjections = (func.length === 0 && keys.length > 0);
    var iterations = (hasUserDeclaredUnknownInjections) ? keys.length : func.length;
    var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
    var propertyTargets = getClassPropsAsTargets(metadataReader, func);
    var targets = constructorTargets.concat(propertyTargets);
    var baseClassDependencyCount = getBaseClassDependencyCount(metadataReader, func);
    if (targets.length < baseClassDependencyCount) {
        var error = ERROR_MSGS.ARGUMENTS_LENGTH_MISMATCH_1 +
            constructorName + ERROR_MSGS.ARGUMENTS_LENGTH_MISMATCH_2;
        throw new Error(error);
    }
    return targets;
}
function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
    var targetMetadata = constructorArgsMetadata[index.toString()] || [];
    var metadata = formatTargetMetadata(targetMetadata);
    var isManaged = metadata.unmanaged !== true;
    var serviceIdentifier = serviceIdentifiers[index];
    var injectIdentifier = (metadata.inject || metadata.multiInject);
    serviceIdentifier = (injectIdentifier) ? (injectIdentifier) : serviceIdentifier;
    if (serviceIdentifier instanceof inject_1.LazyServiceIdentifer) {
        serviceIdentifier = serviceIdentifier.unwrap();
    }
    if (isManaged) {
        var isObject = serviceIdentifier === Object;
        var isFunction = serviceIdentifier === Function;
        var isUndefined = serviceIdentifier === undefined;
        var isUnknownType = (isObject || isFunction || isUndefined);
        if (!isBaseClass && isUnknownType) {
            var msg = ERROR_MSGS.MISSING_INJECT_ANNOTATION + " argument " + index + " in class " + constructorName + ".";
            throw new Error(msg);
        }
        var target = new target_1.Target(literal_types_1.TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIdentifier);
        target.metadata = targetMetadata;
        return target;
    }
    return null;
}
function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
    var targets = [];
    for (var i = 0; i < iterations; i++) {
        var index = i;
        var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
        if (target !== null) {
            targets.push(target);
        }
    }
    return targets;
}
function getClassPropsAsTargets(metadataReader, constructorFunc) {
    var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
    var targets = [];
    var keys = Object.keys(classPropsMetadata);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var targetMetadata = classPropsMetadata[key];
        var metadata = formatTargetMetadata(classPropsMetadata[key]);
        var targetName = metadata.targetName || key;
        var serviceIdentifier = (metadata.inject || metadata.multiInject);
        var target = new target_1.Target(literal_types_1.TargetTypeEnum.ClassProperty, targetName, serviceIdentifier);
        target.metadata = targetMetadata;
        targets.push(target);
    }
    var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
    if (baseConstructor !== Object) {
        var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor);
        targets = targets.concat(baseTargets);
    }
    return targets;
}
function getBaseClassDependencyCount(metadataReader, func) {
    var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
    if (baseConstructor !== Object) {
        var baseConstructorName = serialization_1.getFunctionName(baseConstructor);
        var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
        var metadata = targets.map(function (t) {
            return t.metadata.filter(function (m) {
                return m.key === METADATA_KEY.UNMANAGED_TAG;
            });
        });
        var unmanagedCount = [].concat.apply([], metadata).length;
        var dependencyCount = targets.length - unmanagedCount;
        if (dependencyCount > 0) {
            return dependencyCount;
        }
        else {
            return getBaseClassDependencyCount(metadataReader, baseConstructor);
        }
    }
    else {
        return 0;
    }
}
function formatTargetMetadata(targetMetadata) {
    var targetMetadataMap = {};
    targetMetadata.forEach(function (m) {
        targetMetadataMap[m.key.toString()] = m.value;
    });
    return {
        inject: targetMetadataMap[METADATA_KEY.INJECT_TAG],
        multiInject: targetMetadataMap[METADATA_KEY.MULTI_INJECT_TAG],
        targetName: targetMetadataMap[METADATA_KEY.NAME_TAG],
        unmanaged: targetMetadataMap[METADATA_KEY.UNMANAGED_TAG]
    };
}


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid_1 = __webpack_require__(34);
var Request = (function () {
    function Request(serviceIdentifier, parentContext, parentRequest, bindings, target) {
        this.guid = guid_1.guid();
        this.serviceIdentifier = serviceIdentifier;
        this.parentContext = parentContext;
        this.parentRequest = parentRequest;
        this.target = target;
        this.childRequests = [];
        this.bindings = (Array.isArray(bindings) ? bindings : [bindings]);
        this.requestScope = parentRequest === null
            ? new Map()
            : null;
    }
    Request.prototype.addChildRequest = function (serviceIdentifier, bindings, target) {
        var child = new Request(serviceIdentifier, this.parentContext, this, bindings, target);
        this.childRequests.push(child);
        return child;
    };
    return Request;
}());
exports.Request = Request;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var error_msgs_1 = __webpack_require__(12);
var literal_types_1 = __webpack_require__(21);
var METADATA_KEY = __webpack_require__(5);
function _injectProperties(instance, childRequests, resolveRequest) {
    var propertyInjectionsRequests = childRequests.filter(function (childRequest) {
        return (childRequest.target !== null &&
            childRequest.target.type === literal_types_1.TargetTypeEnum.ClassProperty);
    });
    var propertyInjections = propertyInjectionsRequests.map(resolveRequest);
    propertyInjectionsRequests.forEach(function (r, index) {
        var propertyName = "";
        propertyName = r.target.name.value();
        var injection = propertyInjections[index];
        instance[propertyName] = injection;
    });
    return instance;
}
function _createInstance(Func, injections) {
    return new (Func.bind.apply(Func, [void 0].concat(injections)))();
}
function _postConstruct(constr, result) {
    if (Reflect.hasMetadata(METADATA_KEY.POST_CONSTRUCT, constr)) {
        var data = Reflect.getMetadata(METADATA_KEY.POST_CONSTRUCT, constr);
        try {
            result[data.value]();
        }
        catch (e) {
            throw new Error(error_msgs_1.POST_CONSTRUCT_ERROR(constr.name, e.message));
        }
    }
}
function resolveInstance(constr, childRequests, resolveRequest) {
    var result = null;
    if (childRequests.length > 0) {
        var constructorInjectionsRequests = childRequests.filter(function (childRequest) {
            return (childRequest.target !== null && childRequest.target.type === literal_types_1.TargetTypeEnum.ConstructorArgument);
        });
        var constructorInjections = constructorInjectionsRequests.map(resolveRequest);
        result = _createInstance(constr, constructorInjections);
        result = _injectProperties(result, childRequests, resolveRequest);
    }
    else {
        result = new constr();
    }
    _postConstruct(constr, result);
    return result;
}
exports.resolveInstance = resolveInstance;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(12);
var literal_types_1 = __webpack_require__(21);
var exceptions_1 = __webpack_require__(127);
var serialization_1 = __webpack_require__(47);
var instantiation_1 = __webpack_require__(233);
var invokeFactory = function (factoryType, serviceIdentifier, fn) {
    try {
        return fn();
    }
    catch (error) {
        if (exceptions_1.isStackOverflowExeption(error)) {
            throw new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY_IN_FACTORY(factoryType, serviceIdentifier.toString()));
        }
        else {
            throw error;
        }
    }
};
var _resolveRequest = function (requestScope) {
    return function (request) {
        request.parentContext.setCurrentRequest(request);
        var bindings = request.bindings;
        var childRequests = request.childRequests;
        var targetIsAnArray = request.target && request.target.isArray();
        var targetParentIsNotAnArray = !request.parentRequest ||
            !request.parentRequest.target ||
            !request.target ||
            !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
        if (targetIsAnArray && targetParentIsNotAnArray) {
            return childRequests.map(function (childRequest) {
                var _f = _resolveRequest(requestScope);
                return _f(childRequest);
            });
        }
        else {
            var result = null;
            if (request.target.isOptional() && bindings.length === 0) {
                return undefined;
            }
            var binding_1 = bindings[0];
            var isSingleton = binding_1.scope === literal_types_1.BindingScopeEnum.Singleton;
            var isRequestSingleton = binding_1.scope === literal_types_1.BindingScopeEnum.Request;
            if (isSingleton && binding_1.activated) {
                return binding_1.cache;
            }
            if (isRequestSingleton &&
                requestScope !== null &&
                requestScope.has(binding_1.guid)) {
                return requestScope.get(binding_1.guid);
            }
            if (binding_1.type === literal_types_1.BindingTypeEnum.ConstantValue) {
                result = binding_1.cache;
            }
            else if (binding_1.type === literal_types_1.BindingTypeEnum.Function) {
                result = binding_1.cache;
            }
            else if (binding_1.type === literal_types_1.BindingTypeEnum.Constructor) {
                result = binding_1.implementationType;
            }
            else if (binding_1.type === literal_types_1.BindingTypeEnum.DynamicValue && binding_1.dynamicValue !== null) {
                result = invokeFactory("toDynamicValue", binding_1.serviceIdentifier, function () { return binding_1.dynamicValue(request.parentContext); });
            }
            else if (binding_1.type === literal_types_1.BindingTypeEnum.Factory && binding_1.factory !== null) {
                result = invokeFactory("toFactory", binding_1.serviceIdentifier, function () { return binding_1.factory(request.parentContext); });
            }
            else if (binding_1.type === literal_types_1.BindingTypeEnum.Provider && binding_1.provider !== null) {
                result = invokeFactory("toProvider", binding_1.serviceIdentifier, function () { return binding_1.provider(request.parentContext); });
            }
            else if (binding_1.type === literal_types_1.BindingTypeEnum.Instance && binding_1.implementationType !== null) {
                result = instantiation_1.resolveInstance(binding_1.implementationType, childRequests, _resolveRequest(requestScope));
            }
            else {
                var serviceIdentifier = serialization_1.getServiceIdentifierAsString(request.serviceIdentifier);
                throw new Error(ERROR_MSGS.INVALID_BINDING_TYPE + " " + serviceIdentifier);
            }
            if (typeof binding_1.onActivation === "function") {
                result = binding_1.onActivation(request.parentContext, result);
            }
            if (isSingleton) {
                binding_1.cache = result;
                binding_1.activated = true;
            }
            if (isRequestSingleton &&
                requestScope !== null &&
                !requestScope.has(binding_1.guid)) {
                requestScope.set(binding_1.guid, result);
            }
            return result;
        }
    };
};
function resolve(context) {
    var _f = _resolveRequest(context.plan.rootRequest.requestScope);
    return _f(context.plan.rootRequest);
}
exports.resolve = resolve;


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var literal_types_1 = __webpack_require__(21);
var binding_when_on_syntax_1 = __webpack_require__(125);
var BindingInSyntax = (function () {
    function BindingInSyntax(binding) {
        this._binding = binding;
    }
    BindingInSyntax.prototype.inRequestScope = function () {
        this._binding.scope = literal_types_1.BindingScopeEnum.Request;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingInSyntax.prototype.inSingletonScope = function () {
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingInSyntax.prototype.inTransientScope = function () {
        this._binding.scope = literal_types_1.BindingScopeEnum.Transient;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    return BindingInSyntax;
}());
exports.BindingInSyntax = BindingInSyntax;


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_in_syntax_1 = __webpack_require__(235);
var binding_on_syntax_1 = __webpack_require__(83);
var binding_when_syntax_1 = __webpack_require__(84);
var BindingInWhenOnSyntax = (function () {
    function BindingInWhenOnSyntax(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
        this._bindingInSyntax = new binding_in_syntax_1.BindingInSyntax(binding);
    }
    BindingInWhenOnSyntax.prototype.inRequestScope = function () {
        return this._bindingInSyntax.inRequestScope();
    };
    BindingInWhenOnSyntax.prototype.inSingletonScope = function () {
        return this._bindingInSyntax.inSingletonScope();
    };
    BindingInWhenOnSyntax.prototype.inTransientScope = function () {
        return this._bindingInSyntax.inTransientScope();
    };
    BindingInWhenOnSyntax.prototype.when = function (constraint) {
        return this._bindingWhenSyntax.when(constraint);
    };
    BindingInWhenOnSyntax.prototype.whenTargetNamed = function (name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenTargetIsDefault = function () {
        return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    BindingInWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
    };
    BindingInWhenOnSyntax.prototype.whenParentNamed = function (name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
    };
    BindingInWhenOnSyntax.prototype.onActivation = function (handler) {
        return this._bindingOnSyntax.onActivation(handler);
    };
    return BindingInWhenOnSyntax;
}());
exports.BindingInWhenOnSyntax = BindingInWhenOnSyntax;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(12);
var literal_types_1 = __webpack_require__(21);
var binding_in_when_on_syntax_1 = __webpack_require__(236);
var binding_when_on_syntax_1 = __webpack_require__(125);
var BindingToSyntax = (function () {
    function BindingToSyntax(binding) {
        this._binding = binding;
    }
    BindingToSyntax.prototype.to = function (constructor) {
        this._binding.type = literal_types_1.BindingTypeEnum.Instance;
        this._binding.implementationType = constructor;
        return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toSelf = function () {
        if (typeof this._binding.serviceIdentifier !== "function") {
            throw new Error("" + ERROR_MSGS.INVALID_TO_SELF_VALUE);
        }
        var self = this._binding.serviceIdentifier;
        return this.to(self);
    };
    BindingToSyntax.prototype.toConstantValue = function (value) {
        this._binding.type = literal_types_1.BindingTypeEnum.ConstantValue;
        this._binding.cache = value;
        this._binding.dynamicValue = null;
        this._binding.implementationType = null;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toDynamicValue = function (func) {
        this._binding.type = literal_types_1.BindingTypeEnum.DynamicValue;
        this._binding.cache = null;
        this._binding.dynamicValue = func;
        this._binding.implementationType = null;
        return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toConstructor = function (constructor) {
        this._binding.type = literal_types_1.BindingTypeEnum.Constructor;
        this._binding.implementationType = constructor;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toFactory = function (factory) {
        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
        this._binding.factory = factory;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toFunction = function (func) {
        if (typeof func !== "function") {
            throw new Error(ERROR_MSGS.INVALID_FUNCTION_BINDING);
        }
        var bindingWhenOnSyntax = this.toConstantValue(func);
        this._binding.type = literal_types_1.BindingTypeEnum.Function;
        return bindingWhenOnSyntax;
    };
    BindingToSyntax.prototype.toAutoFactory = function (serviceIdentifier) {
        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
        this._binding.factory = function (context) {
            var autofactory = function () { return context.container.get(serviceIdentifier); };
            return autofactory;
        };
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toProvider = function (provider) {
        this._binding.type = literal_types_1.BindingTypeEnum.Provider;
        this._binding.provider = provider;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toService = function (service) {
        this.toDynamicValue(function (context) { return context.container.get(service); });
    };
    return BindingToSyntax;
}());
exports.BindingToSyntax = BindingToSyntax;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.multiBindToService = function (container) {
    return function (service) {
        return function () {
            var types = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                types[_i] = arguments[_i];
            }
            return types.forEach(function (t) { return container.bind(t).toService(service); });
        };
    };
};


/***/ }),
/* 239 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

;
;
;
var isWebSocket = function (constructor) {
    return constructor && constructor.CLOSING === 2;
};
var isGlobalWebSocket = function () {
    return typeof WebSocket !== 'undefined' && isWebSocket(WebSocket);
};
var getDefaultOptions = function () { return ({
    constructor: isGlobalWebSocket() ? WebSocket : null,
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1500,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    debug: false,
}); };
var bypassProperty = function (src, dst, name) {
    Object.defineProperty(dst, name, {
        get: function () { return src[name]; },
        set: function (value) { src[name] = value; },
        enumerable: true,
        configurable: true,
    });
};
var initReconnectionDelay = function (config) {
    return (config.minReconnectionDelay + Math.random() * config.minReconnectionDelay);
};
var updateReconnectionDelay = function (config, previousDelay) {
    var newDelay = previousDelay * config.reconnectionDelayGrowFactor;
    return (newDelay > config.maxReconnectionDelay)
        ? config.maxReconnectionDelay
        : newDelay;
};
var LEVEL_0_EVENTS = ['onopen', 'onclose', 'onmessage', 'onerror'];
var reassignEventListeners = function (ws, oldWs, listeners) {
    Object.keys(listeners).forEach(function (type) {
        listeners[type].forEach(function (_a) {
            var listener = _a[0], options = _a[1];
            ws.addEventListener(type, listener, options);
        });
    });
    if (oldWs) {
        LEVEL_0_EVENTS.forEach(function (name) {
            ws[name] = oldWs[name];
        });
    }
};
var ReconnectingWebsocket = function (url, protocols, options) {
    var _this = this;
    if (options === void 0) { options = {}; }
    var ws;
    var connectingTimeout;
    var reconnectDelay = 0;
    var retriesCount = 0;
    var shouldRetry = true;
    var savedOnClose = null;
    var listeners = {};
    // require new to construct
    if (!(this instanceof ReconnectingWebsocket)) {
        throw new TypeError("Failed to construct 'ReconnectingWebSocket': Please use the 'new' operator");
    }
    // Set config. Not using `Object.assign` because of IE11
    var config = getDefaultOptions();
    Object.keys(config)
        .filter(function (key) { return options.hasOwnProperty(key); })
        .forEach(function (key) { return config[key] = options[key]; });
    if (!isWebSocket(config.constructor)) {
        throw new TypeError('Invalid WebSocket constructor. Set `options.constructor`');
    }
    var log = config.debug ? function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return console.log.apply(console, ['RWS:'].concat(params));
    } : function () { };
    /**
     * Not using dispatchEvent, otherwise we must use a DOM Event object
     * Deferred because we want to handle the close event before this
     */
    var emitError = function (code, msg) { return setTimeout(function () {
        var err = new Error(msg);
        err.code = code;
        if (Array.isArray(listeners.error)) {
            listeners.error.forEach(function (_a) {
                var fn = _a[0];
                return fn(err);
            });
        }
        if (ws.onerror) {
            ws.onerror(err);
        }
    }, 0); };
    var handleClose = function () {
        log('handleClose', { shouldRetry: shouldRetry });
        retriesCount++;
        log('retries count:', retriesCount);
        if (retriesCount > config.maxRetries) {
            emitError('EHOSTDOWN', 'Too many failed connection attempts');
            return;
        }
        if (!reconnectDelay) {
            reconnectDelay = initReconnectionDelay(config);
        }
        else {
            reconnectDelay = updateReconnectionDelay(config, reconnectDelay);
        }
        log('handleClose - reconnectDelay:', reconnectDelay);
        if (shouldRetry) {
            setTimeout(connect, reconnectDelay);
        }
    };
    var connect = function () {
        if (!shouldRetry) {
            return;
        }
        log('connect');
        var oldWs = ws;
        var wsUrl = (typeof url === 'function') ? url() : url;
        ws = new config.constructor(wsUrl, protocols);
        connectingTimeout = setTimeout(function () {
            log('timeout');
            ws.close();
            emitError('ETIMEDOUT', 'Connection timeout');
        }, config.connectionTimeout);
        log('bypass properties');
        for (var key in ws) {
            // @todo move to constant
            if (['addEventListener', 'removeEventListener', 'close', 'send'].indexOf(key) < 0) {
                bypassProperty(ws, _this, key);
            }
        }
        ws.addEventListener('open', function () {
            clearTimeout(connectingTimeout);
            log('open');
            reconnectDelay = initReconnectionDelay(config);
            log('reconnectDelay:', reconnectDelay);
            retriesCount = 0;
        });
        ws.addEventListener('close', handleClose);
        reassignEventListeners(ws, oldWs, listeners);
        // because when closing with fastClose=true, it is saved and set to null to avoid double calls
        ws.onclose = ws.onclose || savedOnClose;
        savedOnClose = null;
    };
    log('init');
    connect();
    this.close = function (code, reason, _a) {
        if (code === void 0) { code = 1000; }
        if (reason === void 0) { reason = ''; }
        var _b = _a === void 0 ? {} : _a, _c = _b.keepClosed, keepClosed = _c === void 0 ? false : _c, _d = _b.fastClose, fastClose = _d === void 0 ? true : _d, _e = _b.delay, delay = _e === void 0 ? 0 : _e;
        log('close - params:', { reason: reason, keepClosed: keepClosed, fastClose: fastClose, delay: delay, retriesCount: retriesCount, maxRetries: config.maxRetries });
        shouldRetry = !keepClosed && retriesCount <= config.maxRetries;
        if (delay) {
            reconnectDelay = delay;
        }
        ws.close(code, reason);
        if (fastClose) {
            var fakeCloseEvent_1 = {
                code: code,
                reason: reason,
                wasClean: true,
            };
            // execute close listeners soon with a fake closeEvent
            // and remove them from the WS instance so they
            // don't get fired on the real close.
            handleClose();
            ws.removeEventListener('close', handleClose);
            // run and remove level2
            if (Array.isArray(listeners.close)) {
                listeners.close.forEach(function (_a) {
                    var listener = _a[0], options = _a[1];
                    listener(fakeCloseEvent_1);
                    ws.removeEventListener('close', listener, options);
                });
            }
            // run and remove level0
            if (ws.onclose) {
                savedOnClose = ws.onclose;
                ws.onclose(fakeCloseEvent_1);
                ws.onclose = null;
            }
        }
    };
    this.send = function (data) {
        ws.send(data);
    };
    this.addEventListener = function (type, listener, options) {
        if (Array.isArray(listeners[type])) {
            if (!listeners[type].some(function (_a) {
                var l = _a[0];
                return l === listener;
            })) {
                listeners[type].push([listener, options]);
            }
        }
        else {
            listeners[type] = [[listener, options]];
        }
        ws.addEventListener(type, listener, options);
    };
    this.removeEventListener = function (type, listener, options) {
        if (Array.isArray(listeners[type])) {
            listeners[type] = listeners[type].filter(function (_a) {
                var l = _a[0];
                return l !== listener;
            });
        }
        ws.removeEventListener(type, listener, options);
    };
};
module.exports = ReconnectingWebsocket;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(239), __webpack_require__(309)))

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (html) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];


    var context = options.context || document;

    // If there's nothing here, return null;
    if (!html) {
        return null;
    }

    // Maintain a list of created vnodes so we can call the create hook.
    var createdVNodes = [];

    // Parse the string into the AST and convert to VNodes.
    var vnodes = convertNodes((0, _parse2.default)(html), createdVNodes, context);

    var res = void 0;
    if (!vnodes) {
        // If there are no vnodes but there is string content, then the string
        // must be just text or at least invalid HTML that we should treat as
        // text (since the AST parser didn't find any well-formed HTML).
        res = toVNode({ type: 'text', content: html }, createdVNodes, context);
    } else if (vnodes.length === 1) {
        // If there's only one root node, just return it as opposed to an array.
        res = vnodes[0];
    } else {
        // Otherwise we have an array of VNodes, which we should return.
        res = vnodes;
    }

    // Call the 'create' hook for each created node.
    options.hooks && options.hooks.create && createdVNodes.forEach(function (node) {
        options.hooks.create(node);
    });
    return res;
};

var _parse = __webpack_require__(212);

var _parse2 = _interopRequireDefault(_parse);

var _h = __webpack_require__(245);

var _h2 = _interopRequireDefault(_h);

var _utils = __webpack_require__(243);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function convertNodes(nodes, createdVNodes, context) {
    if (nodes instanceof Array && nodes.length > 0) {
        return nodes.map(function (node) {
            return toVNode(node, createdVNodes, context);
        });
    } else {
        return undefined;
    }
}

function toVNode(node, createdVNodes, context) {
    var newNode = void 0;
    if (node.type === 'text') {
        newNode = (0, _utils.createTextVNode)(node.content, context);
    } else {
        newNode = (0, _h2.default)(node.name, buildVNodeData(node, context), convertNodes(node.children, createdVNodes, context));
    }
    createdVNodes.push(newNode);
    return newNode;
}

function buildVNodeData(node, context) {
    var data = {};
    if (!node.attrs) {
        return data;
    }

    var attrs = Object.keys(node.attrs).reduce(function (memo, name) {
        if (name !== 'style' && name !== 'class') {
            var val = (0, _utils.unescapeEntities)(node.attrs[name], context);
            memo ? memo[name] = val : memo = _defineProperty({}, name, val);
        }
        return memo;
    }, null);
    if (attrs) {
        data.attrs = attrs;
    }

    var style = parseStyle(node);
    if (style) {
        data.style = style;
    }

    var classes = parseClass(node);
    if (classes) {
        data.class = classes;
    }

    return data;
}

function parseStyle(node) {
    try {
        return node.attrs.style.split(';').reduce(function (memo, styleProp) {
            var res = styleProp.split(':');
            var name = (0, _utils.transformName)(res[0].trim());
            if (name) {
                var val = res[1].replace('!important', '').trim();
                memo ? memo[name] = val : memo = _defineProperty({}, name, val);
            }
            return memo;
        }, null);
    } catch (e) {
        return null;
    }
}

function parseClass(node) {
    try {
        return node.attrs.class.split(' ').reduce(function (memo, className) {
            className = className.trim();
            if (className) {
                memo ? memo[className] = true : memo = _defineProperty({}, className, true);
            }
            return memo;
        }, null);
    } catch (e) {
        return null;
    }
}

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createTextVNode = createTextVNode;
exports.transformName = transformName;
exports.unescapeEntities = unescapeEntities;

var _vnode = __webpack_require__(128);

var _vnode2 = _interopRequireDefault(_vnode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTextVNode(text, context) {
    return (0, _vnode2.default)(undefined, undefined, undefined, unescapeEntities(text, context));
}

function transformName(name) {
    // Replace -a with A to help camel case style property names.
    name = name.replace(/-(\w)/g, function _replace($1, $2) {
        return $2.toUpperCase();
    });
    // Handle properties that start with a -.
    var firstChar = name.charAt(0).toLowerCase();
    return '' + firstChar + name.substring(1);
}

// Regex for matching HTML entities.
var entityRegex = new RegExp('&[a-z0-9#]+;', 'gi');
// Element for setting innerHTML for transforming entities.
var el = null;

function unescapeEntities(text, context) {
    // Create the element using the context if it doesn't exist.
    if (!el) {
        el = context.createElement('div');
    }
    return text.replace(entityRegex, function (entity) {
        el.innerHTML = entity;
        return el.textContent;
    });
}

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(242);


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vnode_1 = __webpack_require__(128);
var is = __webpack_require__(246);
function addNS(data, children, sel) {
    data.ns = 'http://www.w3.org/2000/svg';
    if (sel !== 'foreignObject' && children !== undefined) {
        for (var i = 0; i < children.length; ++i) {
            var childData = children[i].data;
            if (childData !== undefined) {
                addNS(childData, children[i].children, children[i].sel);
            }
        }
    }
}
function h(sel, b, c) {
    var data = {}, children, text, i;
    if (c !== undefined) {
        data = b;
        if (is.array(c)) {
            children = c;
        }
        else if (is.primitive(c)) {
            text = c;
        }
        else if (c && c.sel) {
            children = [c];
        }
    }
    else if (b !== undefined) {
        if (is.array(b)) {
            children = b;
        }
        else if (is.primitive(b)) {
            text = b;
        }
        else if (b && b.sel) {
            children = [b];
        }
        else {
            data = b;
        }
    }
    if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
            if (is.primitive(children[i]))
                children[i] = vnode_1.vnode(undefined, undefined, undefined, children[i], undefined);
        }
    }
    if (sel[0] === 's' && sel[1] === 'v' && sel[2] === 'g' &&
        (sel.length === 3 || sel[3] === '.' || sel[3] === '#')) {
        addNS(data, children, sel);
    }
    return vnode_1.vnode(sel, data, children, text, undefined);
}
exports.h = h;
;
exports.default = h;
//# sourceMappingURL=h.js.map

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.array = Array.isArray;
function primitive(s) {
    return typeof s === 'string' || typeof s === 'number';
}
exports.primitive = primitive;
//# sourceMappingURL=is.js.map

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(1);
function overrideCommandStackOptions(container, options) {
    var defaultOptions = container.get(types_1.TYPES.CommandStackOptions);
    for (var p in options) {
        defaultOptions[p] = options[p];
    }
    return defaultOptions;
}
exports.overrideCommandStackOptions = overrideCommandStackOptions;
//# sourceMappingURL=command-stack-options.js.map

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var smodel_storage_1 = __webpack_require__(87);
var types_1 = __webpack_require__(1);
var initialize_canvas_1 = __webpack_require__(60);
var logging_1 = __webpack_require__(103);
var action_dispatcher_1 = __webpack_require__(85);
var action_handler_1 = __webpack_require__(38);
var command_stack_1 = __webpack_require__(130);
var smodel_factory_1 = __webpack_require__(17);
var animation_frame_syncer_1 = __webpack_require__(48);
var viewer_1 = __webpack_require__(134);
var mouse_tool_1 = __webpack_require__(30);
var key_tool_1 = __webpack_require__(35);
var vnode_decorators_1 = __webpack_require__(135);
var view_1 = __webpack_require__(132);
var viewer_cache_1 = __webpack_require__(133);
var dom_helper_1 = __webpack_require__(88);
var id_decorator_1 = __webpack_require__(249);
var command_1 = __webpack_require__(8);
var defaultContainerModule = new inversify_1.ContainerModule(function (bind) {
    // Logging ---------------------------------------------
    bind(types_1.TYPES.ILogger).to(logging_1.NullLogger).inSingletonScope();
    bind(types_1.TYPES.LogLevel).toConstantValue(logging_1.LogLevel.warn);
    // Registries ---------------------------------------------
    bind(types_1.TYPES.ActionHandlerRegistry).to(action_handler_1.ActionHandlerRegistry).inSingletonScope();
    bind(types_1.TYPES.ViewRegistry).to(view_1.ViewRegistry).inSingletonScope();
    // Model Creation ---------------------------------------------
    bind(types_1.TYPES.IModelFactory).to(smodel_factory_1.SModelFactory).inSingletonScope();
    // Action Dispatcher ---------------------------------------------
    bind(types_1.TYPES.IActionDispatcher).to(action_dispatcher_1.ActionDispatcher).inSingletonScope();
    bind(types_1.TYPES.IActionDispatcherProvider).toProvider(function (context) {
        return function () {
            return new Promise(function (resolve) {
                resolve(context.container.get(types_1.TYPES.IActionDispatcher));
            });
        };
    });
    // Action handler
    bind(types_1.TYPES.IActionHandlerInitializer).to(command_1.CommandActionHandlerInitializer);
    // Command Stack ---------------------------------------------
    bind(types_1.TYPES.ICommandStack).to(command_stack_1.CommandStack).inSingletonScope();
    bind(types_1.TYPES.ICommandStackProvider).toProvider(function (context) {
        return function () {
            return new Promise(function (resolve) {
                resolve(context.container.get(types_1.TYPES.ICommandStack));
            });
        };
    });
    bind(types_1.TYPES.CommandStackOptions).toConstantValue({
        defaultDuration: 250,
        undoHistoryLimit: 50
    });
    // Viewer ---------------------------------------------
    bind(viewer_1.Viewer).toSelf().inSingletonScope();
    bind(types_1.TYPES.IViewer).toDynamicValue(function (context) {
        return context.container.get(viewer_1.Viewer);
    }).inSingletonScope().whenTargetNamed('delegate');
    bind(viewer_cache_1.ViewerCache).toSelf().inSingletonScope();
    bind(types_1.TYPES.IViewer).toDynamicValue(function (context) {
        return context.container.get(viewer_cache_1.ViewerCache);
    }).inSingletonScope().whenTargetIsDefault();
    bind(types_1.TYPES.IViewerProvider).toProvider(function (context) {
        return function () {
            return new Promise(function (resolve) {
                resolve(context.container.get(types_1.TYPES.IViewer));
            });
        };
    });
    bind(types_1.TYPES.ViewerOptions).toConstantValue({
        baseDiv: 'sprotty',
        baseClass: 'sprotty',
        hiddenDiv: 'sprotty-hidden',
        hiddenClass: 'sprotty-hidden',
        popupDiv: 'sprotty-popup',
        popupClass: 'sprotty-popup',
        popupClosedClass: 'sprotty-popup-closed',
        needsClientLayout: true,
        needsServerLayout: false,
        popupOpenDelay: 700,
        popupCloseDelay: 300
    });
    bind(types_1.TYPES.DOMHelper).to(dom_helper_1.DOMHelper).inSingletonScope();
    bind(types_1.TYPES.ModelRendererFactory).toFactory(function (context) {
        return function (decorators) {
            var viewRegistry = context.container.get(types_1.TYPES.ViewRegistry);
            return new viewer_1.ModelRenderer(viewRegistry, decorators);
        };
    });
    // Tools & Decorators --------------------------------------
    bind(id_decorator_1.IdDecorator).toSelf().inSingletonScope();
    bind(types_1.TYPES.IVNodeDecorator).toDynamicValue(function (context) {
        return context.container.get(id_decorator_1.IdDecorator);
    }).inSingletonScope();
    bind(mouse_tool_1.MouseTool).toSelf().inSingletonScope();
    bind(types_1.TYPES.IVNodeDecorator).toDynamicValue(function (context) {
        return context.container.get(mouse_tool_1.MouseTool);
    }).inSingletonScope();
    bind(key_tool_1.KeyTool).toSelf().inSingletonScope();
    bind(types_1.TYPES.IVNodeDecorator).toDynamicValue(function (context) {
        return context.container.get(key_tool_1.KeyTool);
    }).inSingletonScope();
    bind(vnode_decorators_1.FocusFixDecorator).toSelf().inSingletonScope();
    bind(types_1.TYPES.IVNodeDecorator).toDynamicValue(function (context) {
        return context.container.get(vnode_decorators_1.FocusFixDecorator);
    }).inSingletonScope();
    bind(types_1.TYPES.PopupVNodeDecorator).toDynamicValue(function (context) {
        return context.container.get(id_decorator_1.IdDecorator);
    }).inSingletonScope();
    bind(mouse_tool_1.PopupMouseTool).toSelf().inSingletonScope();
    bind(types_1.TYPES.PopupVNodeDecorator).toDynamicValue(function (context) {
        return context.container.get(mouse_tool_1.PopupMouseTool);
    }).inSingletonScope();
    bind(types_1.TYPES.HiddenVNodeDecorator).toDynamicValue(function (context) {
        return context.container.get(id_decorator_1.IdDecorator);
    }).inSingletonScope();
    // Animation Frame Sync ------------------------------------------
    bind(types_1.TYPES.AnimationFrameSyncer).to(animation_frame_syncer_1.AnimationFrameSyncer).inSingletonScope();
    // Canvas Initialization ---------------------------------------------
    bind(types_1.TYPES.ICommand).toConstructor(initialize_canvas_1.InitializeCanvasBoundsCommand);
    bind(initialize_canvas_1.CanvasBoundsInitializer).toSelf().inSingletonScope();
    bind(types_1.TYPES.IVNodeDecorator).toDynamicValue(function (context) {
        return context.container.get(initialize_canvas_1.CanvasBoundsInitializer);
    }).inSingletonScope();
    bind(types_1.TYPES.SModelStorage).to(smodel_storage_1.SModelStorage).inSingletonScope();
});
exports.default = defaultContainerModule;
//# sourceMappingURL=di.config.js.map

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var dom_helper_1 = __webpack_require__(88);
var vnode_utils_1 = __webpack_require__(18);
var IdDecorator = /** @class */ (function () {
    function IdDecorator(logger, domHelper) {
        this.logger = logger;
        this.domHelper = domHelper;
    }
    IdDecorator.prototype.decorate = function (vnode, element) {
        var attrs = vnode_utils_1.getAttrs(vnode);
        if (attrs.id !== undefined)
            this.logger.warn(vnode, 'Overriding id of vnode (' + attrs.id + '). Make sure not to set it manually in view.');
        attrs.id = this.domHelper.createUniqueDOMElementId(element);
        if (!vnode.key)
            vnode.key = element.id;
        return vnode;
    };
    IdDecorator.prototype.postUpdate = function () {
    };
    IdDecorator = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.ILogger)),
        __param(1, inversify_1.inject(types_1.TYPES.DOMHelper)),
        __metadata("design:paramtypes", [Object, dom_helper_1.DOMHelper])
    ], IdDecorator);
    return IdDecorator;
}());
exports.IdDecorator = IdDecorator;
//# sourceMappingURL=id-decorator.js.map

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var types_1 = __webpack_require__(1);
function overrideViewerOptions(container, options) {
    var defaultOptions = container.get(types_1.TYPES.ViewerOptions);
    for (var p in options) {
        defaultOptions[p] = options[p];
    }
    return defaultOptions;
}
exports.overrideViewerOptions = overrideViewerOptions;
//# sourceMappingURL=viewer-options.js.map

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var bounds_manipulation_1 = __webpack_require__(50);
var hidden_bounds_updater_1 = __webpack_require__(252);
var layout_1 = __webpack_require__(90);
var boundsModule = new inversify_1.ContainerModule(function (bind) {
    bind(types_1.TYPES.ICommand).toConstructor(bounds_manipulation_1.SetBoundsCommand);
    bind(types_1.TYPES.ICommand).toConstructor(bounds_manipulation_1.RequestBoundsCommand);
    bind(types_1.TYPES.HiddenVNodeDecorator).to(hidden_bounds_updater_1.HiddenBoundsUpdater).inSingletonScope();
    bind(types_1.TYPES.Layouter).to(layout_1.Layouter).inSingletonScope();
    bind(types_1.TYPES.LayoutRegistry).to(layout_1.LayoutRegistry).inSingletonScope();
});
exports.default = boundsModule;
//# sourceMappingURL=di.config.js.map

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var geometry_1 = __webpack_require__(3);
var smodel_1 = __webpack_require__(2);
var bounds_manipulation_1 = __webpack_require__(50);
var model_1 = __webpack_require__(9);
var layout_1 = __webpack_require__(90);
var model_2 = __webpack_require__(62);
var BoundsData = /** @class */ (function () {
    function BoundsData() {
    }
    return BoundsData;
}());
exports.BoundsData = BoundsData;
/**
 * Grabs the bounds from hidden SVG DOM elements, applies layouts and fires
 * ComputedBoundsActions.
 *
 * The actual bounds of an element can usually not be determined from the SModel
 * as they depend on the view implementation and CSS stylings. So the best way is
 * to grab them from a live (but hidden) SVG using getBBox().
 *
 * If an element is Alignable, and the top-left corner of its bounding box is not
 * the origin, we also issue a realign with the ComputedBoundsAction.
 */
var HiddenBoundsUpdater = /** @class */ (function () {
    function HiddenBoundsUpdater(actionDispatcher, layouter) {
        this.actionDispatcher = actionDispatcher;
        this.layouter = layouter;
        this.element2boundsData = new Map;
    }
    HiddenBoundsUpdater.prototype.decorate = function (vnode, element) {
        if (model_1.isSizeable(element) || model_1.isLayoutContainer(element)) {
            this.element2boundsData.set(element, {
                vnode: vnode,
                bounds: element.bounds,
                boundsChanged: false,
                alignmentChanged: false
            });
        }
        if (element instanceof smodel_1.SModelRoot)
            this.root = element;
        return vnode;
    };
    HiddenBoundsUpdater.prototype.postUpdate = function () {
        if (this.root !== undefined && model_2.isExportable(this.root) && this.root.export)
            return;
        this.getBoundsFromDOM();
        this.layouter.layout(this.element2boundsData);
        var resizes = [];
        var realignments = [];
        this.element2boundsData.forEach(function (boundsData, element) {
            if (boundsData.boundsChanged && boundsData.bounds !== undefined)
                resizes.push({
                    elementId: element.id,
                    newBounds: boundsData.bounds
                });
            if (boundsData.alignmentChanged && boundsData.alignment !== undefined)
                realignments.push({
                    elementId: element.id,
                    newAlignment: boundsData.alignment
                });
        });
        var revision = (this.root !== undefined) ? this.root.revision : undefined;
        this.actionDispatcher.dispatch(new bounds_manipulation_1.ComputedBoundsAction(resizes, revision, realignments));
        this.element2boundsData.clear();
    };
    HiddenBoundsUpdater.prototype.getBoundsFromDOM = function () {
        var _this = this;
        this.element2boundsData.forEach(function (boundsData, element) {
            if (boundsData.bounds && model_1.isSizeable(element)) {
                var vnode = boundsData.vnode;
                if (vnode && vnode.elm) {
                    var boundingBox = _this.getBounds(vnode.elm, element);
                    if (model_1.isAlignable(element) && !(geometry_1.almostEquals(boundingBox.x, 0) && geometry_1.almostEquals(boundingBox.y, 0))) {
                        boundsData.alignment = {
                            x: -boundingBox.x,
                            y: -boundingBox.y
                        };
                        boundsData.alignmentChanged = true;
                    }
                    var newBounds = {
                        x: element.bounds.x,
                        y: element.bounds.y,
                        width: boundingBox.width,
                        height: boundingBox.height
                    };
                    if (!(geometry_1.almostEquals(newBounds.x, element.bounds.x)
                        && geometry_1.almostEquals(newBounds.y, element.bounds.y)
                        && geometry_1.almostEquals(newBounds.width, element.bounds.width)
                        && geometry_1.almostEquals(newBounds.height, element.bounds.height))) {
                        boundsData.bounds = newBounds;
                        boundsData.boundsChanged = true;
                    }
                }
            }
        });
    };
    HiddenBoundsUpdater.prototype.getBounds = function (elm, element) {
        var bounds = elm.getBBox();
        return {
            x: bounds.x,
            y: bounds.y,
            width: bounds.width,
            height: bounds.height
        };
    };
    HiddenBoundsUpdater = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.IActionDispatcher)),
        __param(1, inversify_1.inject(types_1.TYPES.Layouter)),
        __metadata("design:paramtypes", [Object, layout_1.Layouter])
    ], HiddenBoundsUpdater);
    return HiddenBoundsUpdater;
}());
exports.HiddenBoundsUpdater = HiddenBoundsUpdater;
//# sourceMappingURL=hidden-bounds-updater.js.map

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
* Copyright (C) 2017 TypeFox and others.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
* You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animation_1 = __webpack_require__(39);
var ResizeAnimation = /** @class */ (function (_super) {
    __extends(ResizeAnimation, _super);
    function ResizeAnimation(model, elementResizes, context, reverse) {
        if (reverse === void 0) { reverse = false; }
        var _this = _super.call(this, context) || this;
        _this.model = model;
        _this.elementResizes = elementResizes;
        _this.reverse = reverse;
        return _this;
    }
    ResizeAnimation.prototype.tween = function (t) {
        var _this = this;
        this.elementResizes.forEach(function (elementResize) {
            var element = elementResize.element;
            var newDimension = (_this.reverse) ? {
                width: (1 - t) * elementResize.toDimension.width + t * elementResize.fromDimension.width,
                height: (1 - t) * elementResize.toDimension.height + t * elementResize.fromDimension.height
            } : {
                width: (1 - t) * elementResize.fromDimension.width + t * elementResize.toDimension.width,
                height: (1 - t) * elementResize.fromDimension.height + t * elementResize.toDimension.height
            };
            element.bounds = {
                x: element.bounds.x,
                y: element.bounds.y,
                width: newDimension.width,
                height: newDimension.height
            };
        });
        return this.model;
    };
    return ResizeAnimation;
}(animation_1.Animation));
exports.ResizeAnimation = ResizeAnimation;
//# sourceMappingURL=resize.js.map

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var button_handler_1 = __webpack_require__(91);
var buttonModule = new inversify_1.ContainerModule(function (bind) {
    bind(button_handler_1.ButtonHandlerRegistry).toSelf().inSingletonScope();
});
exports.default = buttonModule;
//# sourceMappingURL=di.config.js.map

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var expand_1 = __webpack_require__(61);
var expandModule = new inversify_1.ContainerModule(function (bind) {
    bind(types_1.TYPES.IButtonHandler).toConstructor(expand_1.ExpandButtonHandler);
});
exports.default = expandModule;
//# sourceMappingURL=di.config.js.map

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var snabbdom = __webpack_require__(7);
var model_1 = __webpack_require__(93);
var smodel_utils_1 = __webpack_require__(13);
var JSX = { createElement: snabbdom.svg };
var ExpandButtonView = /** @class */ (function () {
    function ExpandButtonView() {
    }
    ExpandButtonView.prototype.render = function (button, context) {
        var expandable = smodel_utils_1.findParentByFeature(button, model_1.isExpandable);
        var path = (expandable !== undefined && expandable.expanded)
            ? 'M 1,5 L 8,12 L 15,5 Z'
            : 'M 1,8 L 8,15 L 8,1 Z';
        return JSX.createElement("g", { "class-sprotty-button": "{true}", "class-enabled": "{button.enabled}" },
            JSX.createElement("rect", { x: 0, y: 0, width: 16, height: 16, opacity: 0 }),
            JSX.createElement("path", { d: path }));
    };
    return ExpandButtonView;
}());
exports.ExpandButtonView = ExpandButtonView;
//# sourceMappingURL=views.js.map

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var export_1 = __webpack_require__(139);
var svg_exporter_1 = __webpack_require__(40);
var exportSvgModule = new inversify_1.ContainerModule(function (bind) {
    bind(types_1.TYPES.KeyListener).to(export_1.ExportSvgKeyListener).inSingletonScope();
    bind(types_1.TYPES.HiddenVNodeDecorator).to(export_1.ExportSvgDecorator).inSingletonScope();
    bind(types_1.TYPES.ICommand).toConstructor(export_1.ExportSvgCommand);
    bind(types_1.TYPES.SvgExporter).to(svg_exporter_1.SvgExporter).inSingletonScope();
});
exports.default = exportSvgModule;
//# sourceMappingURL=di.config.js.map

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var fade_1 = __webpack_require__(94);
var fadeModule = new inversify_1.ContainerModule(function (bind) {
    bind(types_1.TYPES.IVNodeDecorator).to(fade_1.ElementFader).inSingletonScope();
});
exports.default = fadeModule;
//# sourceMappingURL=di.config.js.map

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var hover_1 = __webpack_require__(52);
var popup_position_updater_1 = __webpack_require__(261);
var initializer_1 = __webpack_require__(260);
var hoverModule = new inversify_1.ContainerModule(function (bind) {
    bind(types_1.TYPES.PopupVNodeDecorator).to(popup_position_updater_1.PopupPositionUpdater).inSingletonScope();
    bind(types_1.TYPES.IActionHandlerInitializer).to(initializer_1.PopupActionHandlerInitializer);
    bind(types_1.TYPES.ICommand).toConstructor(hover_1.HoverFeedbackCommand);
    bind(types_1.TYPES.ICommand).toConstructor(hover_1.SetPopupModelCommand);
    bind(types_1.TYPES.MouseListener).to(hover_1.HoverMouseListener);
    bind(types_1.TYPES.PopupMouseListener).to(hover_1.PopupHoverMouseListener);
    bind(types_1.TYPES.KeyListener).to(hover_1.HoverKeyListener);
    bind(types_1.TYPES.HoverState).toConstantValue({
        mouseOverTimer: undefined,
        mouseOutTimer: undefined,
        popupOpen: false,
        previousPopupElement: undefined
    });
});
exports.default = hoverModule;
//# sourceMappingURL=di.config.js.map

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var hover_1 = __webpack_require__(52);
var smodel_factory_1 = __webpack_require__(17);
var center_fit_1 = __webpack_require__(99);
var viewport_1 = __webpack_require__(42);
var move_1 = __webpack_require__(64);
var ClosePopupActionHandler = /** @class */ (function () {
    function ClosePopupActionHandler() {
        this.popupOpen = false;
    }
    ClosePopupActionHandler.prototype.handle = function (action) {
        if (action.kind === hover_1.SetPopupModelCommand.KIND) {
            this.popupOpen = action.newRoot.type !== smodel_factory_1.EMPTY_ROOT.type;
        }
        else if (this.popupOpen) {
            return new hover_1.SetPopupModelAction({ id: smodel_factory_1.EMPTY_ROOT.id, type: smodel_factory_1.EMPTY_ROOT.type });
        }
    };
    return ClosePopupActionHandler;
}());
var PopupActionHandlerInitializer = /** @class */ (function () {
    function PopupActionHandlerInitializer() {
    }
    PopupActionHandlerInitializer.prototype.initialize = function (registry) {
        var closePopupActionHandler = new ClosePopupActionHandler();
        registry.register(center_fit_1.FitToScreenCommand.KIND, closePopupActionHandler);
        registry.register(center_fit_1.CenterCommand.KIND, closePopupActionHandler);
        registry.register(viewport_1.ViewportCommand.KIND, closePopupActionHandler);
        registry.register(hover_1.SetPopupModelCommand.KIND, closePopupActionHandler);
        registry.register(move_1.MoveCommand.KIND, closePopupActionHandler);
    };
    PopupActionHandlerInitializer = __decorate([
        inversify_1.injectable()
    ], PopupActionHandlerInitializer);
    return PopupActionHandlerInitializer;
}());
exports.PopupActionHandlerInitializer = PopupActionHandlerInitializer;
//# sourceMappingURL=initializer.js.map

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var PopupPositionUpdater = /** @class */ (function () {
    function PopupPositionUpdater(options) {
        this.options = options;
    }
    PopupPositionUpdater.prototype.decorate = function (vnode, element) {
        return vnode;
    };
    PopupPositionUpdater.prototype.postUpdate = function () {
        var popupDiv = document.getElementById(this.options.popupDiv);
        if (popupDiv !== null && typeof window !== 'undefined') {
            var boundingClientRect = popupDiv.getBoundingClientRect();
            if (window.innerHeight < boundingClientRect.height + boundingClientRect.top) {
                popupDiv.style.top = (window.scrollY + window.innerHeight - boundingClientRect.height - 5) + 'px';
            }
            if (window.innerWidth < boundingClientRect.left + boundingClientRect.width) {
                popupDiv.style.left = (window.scrollX + window.innerWidth - boundingClientRect.width - 5) + 'px';
            }
            if (boundingClientRect.left < 0) {
                popupDiv.style.left = '0px';
            }
            if (boundingClientRect.top < 0) {
                popupDiv.style.top = '0px';
            }
        }
    };
    PopupPositionUpdater = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.ViewerOptions)),
        __metadata("design:paramtypes", [Object])
    ], PopupPositionUpdater);
    return PopupPositionUpdater;
}());
exports.PopupPositionUpdater = PopupPositionUpdater;
//# sourceMappingURL=popup-position-updater.js.map

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var move_1 = __webpack_require__(64);
var moveModule = new inversify_1.ContainerModule(function (bind) {
    bind(types_1.TYPES.MouseListener).to(move_1.MoveMouseListener);
    bind(types_1.TYPES.ICommand).toConstructor(move_1.MoveCommand);
    bind(types_1.TYPES.IVNodeDecorator).to(move_1.LocationDecorator);
    bind(types_1.TYPES.HiddenVNodeDecorator).to(move_1.LocationDecorator);
});
exports.default = moveModule;
//# sourceMappingURL=di.config.js.map

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var open_1 = __webpack_require__(95);
var openModule = new inversify_1.ContainerModule(function (bind) {
    bind(types_1.TYPES.MouseListener).to(open_1.OpenMouseListener);
});
exports.default = openModule;
//# sourceMappingURL=di.config.js.map

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var select_1 = __webpack_require__(141);
var selectModule = new inversify_1.ContainerModule(function (bind) {
    bind(types_1.TYPES.ICommand).toConstructor(select_1.SelectCommand);
    bind(types_1.TYPES.ICommand).toConstructor(select_1.SelectAllCommand);
    bind(types_1.TYPES.KeyListener).to(select_1.SelectKeyboardListener);
    bind(types_1.TYPES.MouseListener).to(select_1.SelectMouseListener);
});
exports.default = selectModule;
//# sourceMappingURL=di.config.js.map

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var undo_redo_1 = __webpack_require__(96);
var undoRedoModule = new inversify_1.ContainerModule(function (bind) {
    bind(types_1.TYPES.KeyListener).to(undo_redo_1.UndoRedoKeyListener);
});
exports.default = undoRedoModule;
//# sourceMappingURL=di.config.js.map

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var center_fit_1 = __webpack_require__(99);
var viewport_1 = __webpack_require__(42);
var scroll_1 = __webpack_require__(142);
var zoom_1 = __webpack_require__(143);
var viewportModule = new inversify_1.ContainerModule(function (bind) {
    bind(types_1.TYPES.ICommand).toConstructor(center_fit_1.CenterCommand);
    bind(types_1.TYPES.ICommand).toConstructor(center_fit_1.FitToScreenCommand);
    bind(types_1.TYPES.ICommand).toConstructor(viewport_1.ViewportCommand);
    bind(types_1.TYPES.KeyListener).to(center_fit_1.CenterKeyboardListener);
    bind(types_1.TYPES.MouseListener).to(scroll_1.ScrollMouseListener);
    bind(types_1.TYPES.MouseListener).to(zoom_1.ZoomMouseListener);
});
exports.default = viewportModule;
//# sourceMappingURL=di.config.js.map

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var smodel_factory_1 = __webpack_require__(17);
var smodel_utils_1 = __webpack_require__(13);
var sgraph_1 = __webpack_require__(101);
var model_1 = __webpack_require__(92);
var SGraphFactory = /** @class */ (function (_super) {
    __extends(SGraphFactory, _super);
    function SGraphFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SGraphFactory.prototype.createElement = function (schema, parent) {
        if (this.isNodeSchema(schema))
            return this.initializeChild(new sgraph_1.SNode(), schema, parent);
        else if (this.isPortSchema(schema))
            return this.initializeChild(new sgraph_1.SPort(), schema, parent);
        else if (this.isEdgeSchema(schema))
            return this.initializeChild(new sgraph_1.SEdge(), schema, parent);
        else if (this.isLabelSchema(schema))
            return this.initializeChild(new sgraph_1.SLabel(), schema, parent);
        else if (this.isCompartmentSchema(schema))
            return this.initializeChild(new sgraph_1.SCompartment(), schema, parent);
        if (this.isButtonSchema(schema))
            return this.initializeChild(new model_1.SButton(), schema, parent);
        else
            return _super.prototype.createElement.call(this, schema, parent);
    };
    SGraphFactory.prototype.createRoot = function (schema) {
        if (this.isGraphSchema(schema))
            return this.initializeRoot(new sgraph_1.SGraph(), schema);
        else
            return _super.prototype.createRoot.call(this, schema);
    };
    SGraphFactory.prototype.isGraphSchema = function (schema) {
        return smodel_utils_1.getBasicType(schema) === 'graph';
    };
    SGraphFactory.prototype.isNodeSchema = function (schema) {
        return smodel_utils_1.getBasicType(schema) === 'node';
    };
    SGraphFactory.prototype.isPortSchema = function (schema) {
        return smodel_utils_1.getBasicType(schema) === 'port';
    };
    SGraphFactory.prototype.isEdgeSchema = function (schema) {
        return smodel_utils_1.getBasicType(schema) === 'edge';
    };
    SGraphFactory.prototype.isLabelSchema = function (schema) {
        return smodel_utils_1.getBasicType(schema) === 'label';
    };
    SGraphFactory.prototype.isCompartmentSchema = function (schema) {
        return smodel_utils_1.getBasicType(schema) === 'comp';
    };
    SGraphFactory.prototype.isButtonSchema = function (schema) {
        return smodel_utils_1.getBasicType(schema) === 'button';
    };
    SGraphFactory = __decorate([
        inversify_1.injectable()
    ], SGraphFactory);
    return SGraphFactory;
}(smodel_factory_1.SModelFactory));
exports.SGraphFactory = SGraphFactory;
//# sourceMappingURL=sgraph-factory.js.map

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var strings_1 = __webpack_require__(244);
var PreRenderedView = /** @class */ (function () {
    function PreRenderedView() {
    }
    PreRenderedView.prototype.render = function (model, context) {
        var node = strings_1.default(model.code);
        this.correctNamespace(node);
        return node;
    };
    PreRenderedView.prototype.correctNamespace = function (node) {
        if (node.sel === 'svg' || node.sel === 'g')
            this.setNamespace(node, 'http://www.w3.org/2000/svg');
    };
    PreRenderedView.prototype.setNamespace = function (node, ns) {
        if (node.data === undefined)
            node.data = {};
        node.data.ns = ns;
        var children = node.children;
        if (children !== undefined) {
            for (var i = 0; i < children.length; i++) {
                var child = children[i];
                if (typeof child !== 'string')
                    this.setNamespace(child, ns);
            }
        }
    };
    return PreRenderedView;
}());
exports.PreRenderedView = PreRenderedView;
//# sourceMappingURL=generic-views.js.map

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var snabbdom = __webpack_require__(7);
var vnode_utils_1 = __webpack_require__(18);
var JSX = { createElement: snabbdom.html };
var HtmlRootView = /** @class */ (function () {
    function HtmlRootView() {
    }
    HtmlRootView.prototype.render = function (model, context) {
        var root = JSX.createElement("div", null, context.renderChildren(model));
        for (var _i = 0, _a = model.classes; _i < _a.length; _i++) {
            var c = _a[_i];
            vnode_utils_1.setClass(root, c, true);
        }
        return root;
    };
    return HtmlRootView;
}());
exports.HtmlRootView = HtmlRootView;
//# sourceMappingURL=html-views.js.map

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var smodel_1 = __webpack_require__(2);
var geometry_1 = __webpack_require__(3);
var model_1 = __webpack_require__(9);
var model_2 = __webpack_require__(41);
var model_3 = __webpack_require__(31);
/**
 * Root model element class for HTML content. Usually this is rendered with a `div` DOM element.
 */
var HtmlRoot = /** @class */ (function (_super) {
    __extends(HtmlRoot, _super);
    function HtmlRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.classes = [];
        return _this;
    }
    return HtmlRoot;
}(smodel_1.SModelRoot));
exports.HtmlRoot = HtmlRoot;
/**
 * Pre-rendered elements contain HTML or SVG code to be transferred to the DOM. This can be useful to
 * render complex figures or to compute the view on the server instead of the client code.
 */
var PreRenderedElement = /** @class */ (function (_super) {
    __extends(PreRenderedElement, _super);
    function PreRenderedElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PreRenderedElement;
}(smodel_1.SChildElement));
exports.PreRenderedElement = PreRenderedElement;
/**
 * Same as PreRenderedElement, but with a position and a size.
 */
var ShapedPreRenderedElement = /** @class */ (function (_super) {
    __extends(ShapedPreRenderedElement, _super);
    function ShapedPreRenderedElement() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.position = geometry_1.ORIGIN_POINT;
        _this.size = geometry_1.EMPTY_DIMENSION;
        _this.selected = false;
        _this.alignment = geometry_1.ORIGIN_POINT;
        return _this;
    }
    Object.defineProperty(ShapedPreRenderedElement.prototype, "bounds", {
        get: function () {
            return {
                x: this.position.x,
                y: this.position.y,
                width: this.size.width,
                height: this.size.height
            };
        },
        set: function (newBounds) {
            this.position = {
                x: newBounds.x,
                y: newBounds.y
            };
            this.size = {
                width: newBounds.width,
                height: newBounds.height
            };
        },
        enumerable: true,
        configurable: true
    });
    ShapedPreRenderedElement.prototype.hasFeature = function (feature) {
        return feature === model_2.moveFeature || feature === model_1.boundsFeature || feature === model_3.selectFeature || feature === model_1.alignFeature;
    };
    return ShapedPreRenderedElement;
}(PreRenderedElement));
exports.ShapedPreRenderedElement = ShapedPreRenderedElement;
//# sourceMappingURL=model.js.map

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var snabbdom = __webpack_require__(7);
var geometry_1 = __webpack_require__(3);
var views_1 = __webpack_require__(144);
var JSX = { createElement: snabbdom.svg };
var SvgViewportView = /** @class */ (function () {
    function SvgViewportView() {
    }
    SvgViewportView.prototype.render = function (model, context) {
        var transform = "scale(" + model.zoom + ") translate(" + -model.scroll.x + "," + -model.scroll.y + ")";
        return JSX.createElement("svg", null,
            JSX.createElement("g", { transform: transform }, context.renderChildren(model)));
    };
    return SvgViewportView;
}());
exports.SvgViewportView = SvgViewportView;
var CircularNodeView = /** @class */ (function (_super) {
    __extends(CircularNodeView, _super);
    function CircularNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircularNodeView.prototype.render = function (node, context) {
        var radius = this.getRadius(node);
        return JSX.createElement("g", null,
            JSX.createElement("circle", { "class-sprotty-node": true, "class-mouseover": node.hoverFeedback, "class-selected": node.selected, r: radius, cx: radius, cy: radius }));
    };
    CircularNodeView.prototype.getRadius = function (node) {
        var d = Math.min(node.size.width, node.size.height);
        if (d > 0)
            return d / 2;
        else
            return 0;
    };
    CircularNodeView.prototype.getAnchor = function (node, refPoint, anchorCorrection) {
        var radius = this.getRadius(node);
        var cx = node.position.x + radius;
        var cy = node.position.y + radius;
        var dx = cx - refPoint.x;
        var dy = cy - refPoint.y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        var normX = (dx / distance) || 0;
        var normY = (dy / distance) || 0;
        var strokeCorrection = 0.5 * this.getStrokeWidth(node);
        return {
            x: cx - normX * (radius + strokeCorrection + anchorCorrection),
            y: cy - normY * (radius + strokeCorrection + anchorCorrection)
        };
    };
    return CircularNodeView;
}(views_1.AnchorableView));
exports.CircularNodeView = CircularNodeView;
var RectangularNodeView = /** @class */ (function (_super) {
    __extends(RectangularNodeView, _super);
    function RectangularNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RectangularNodeView.prototype.render = function (node, context) {
        return JSX.createElement("g", null,
            JSX.createElement("rect", { "class-sprotty-node": true, "class-mouseover": node.hoverFeedback, "class-selected": node.selected, x: "0", y: "0", width: node.size.width, height: node.size.height }));
    };
    RectangularNodeView.prototype.getAnchor = function (node, refPoint, anchorCorrection) {
        var bounds = node.bounds;
        var correction = 0.5 * this.getStrokeWidth(node) + anchorCorrection;
        var c = geometry_1.center(bounds);
        var finder = new NearestPointFinder(c, refPoint);
        if (!geometry_1.almostEquals(c.y, refPoint.y)) {
            var xTop = this.getXIntersection(bounds.y, c, refPoint);
            if (xTop >= bounds.x && xTop <= bounds.x + bounds.width)
                finder.addCandidate(xTop, bounds.y - correction);
            var xBottom = this.getXIntersection(bounds.y + bounds.height, c, refPoint);
            if (xBottom >= bounds.x && xBottom <= bounds.x + bounds.width)
                finder.addCandidate(xBottom, bounds.y + bounds.height + correction);
        }
        if (!geometry_1.almostEquals(c.x, refPoint.x)) {
            var yLeft = this.getYIntersection(bounds.x, c, refPoint);
            if (yLeft >= bounds.y && yLeft <= bounds.y + bounds.height)
                finder.addCandidate(bounds.x - correction, yLeft);
            var yRight = this.getYIntersection(bounds.x + bounds.width, c, refPoint);
            if (yRight >= bounds.y && yRight <= bounds.y + bounds.height)
                finder.addCandidate(bounds.x + bounds.width + correction, yRight);
        }
        return finder.best;
    };
    RectangularNodeView.prototype.getXIntersection = function (yIntersection, center, point) {
        var t = (yIntersection - center.y) / (point.y - center.y);
        return (point.x - center.x) * t + center.x;
    };
    RectangularNodeView.prototype.getYIntersection = function (xIntersection, center, point) {
        var t = (xIntersection - center.x) / (point.x - center.x);
        return (point.y - center.y) * t + center.y;
    };
    return RectangularNodeView;
}(views_1.AnchorableView));
exports.RectangularNodeView = RectangularNodeView;
var NearestPointFinder = /** @class */ (function () {
    function NearestPointFinder(center, refPoint) {
        this.center = center;
        this.refPoint = refPoint;
        this.currentDist = -1;
    }
    NearestPointFinder.prototype.addCandidate = function (x, y) {
        var dx = this.refPoint.x - x;
        var dy = this.refPoint.y - y;
        var dist = dx * dx + dy * dy;
        if (this.currentDist < 0 || dist < this.currentDist) {
            this.currentBest = {
                x: x,
                y: y
            };
            this.currentDist = dist;
        }
    };
    Object.defineProperty(NearestPointFinder.prototype, "best", {
        get: function () {
            if (this.currentBest === undefined)
                return this.center;
            else
                return this.currentBest;
        },
        enumerable: true,
        configurable: true
    });
    return NearestPointFinder;
}());
//# sourceMappingURL=svg-views.js.map

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
/**
 * This container module does NOT provide any binding for TYPES.ModelSource because that needs to be
 * done according to the needs of the application. You can choose between a local (LocalModelSource)
 * and a remote (e.g. WebSocketDiagramServer) implementation.
 */
var modelSourceModule = new inversify_1.ContainerModule(function (bind) {
    bind(types_1.TYPES.ModelSourceProvider).toProvider(function (context) {
        return function () {
            return new Promise(function (resolve) {
                resolve(context.container.get(types_1.TYPES.ModelSource));
            });
        };
    });
});
exports.default = modelSourceModule;
//# sourceMappingURL=di.config.js.map

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var types_1 = __webpack_require__(1);
var action_handler_1 = __webpack_require__(38);
var smodel_utils_1 = __webpack_require__(13);
var set_model_1 = __webpack_require__(49);
var smodel_1 = __webpack_require__(2);
var bounds_manipulation_1 = __webpack_require__(50);
var model_matching_1 = __webpack_require__(97);
var update_model_1 = __webpack_require__(98);
var hover_1 = __webpack_require__(52);
var model_source_1 = __webpack_require__(102);
var svg_exporter_1 = __webpack_require__(40);
var file_saver_1 = __webpack_require__(121);
var expand_1 = __webpack_require__(61);
var diagram_state_1 = __webpack_require__(146);
/**
 * A model source that handles actions for bounds calculation and model
 * updates.
 */
var LocalModelSource = /** @class */ (function (_super) {
    __extends(LocalModelSource, _super);
    function LocalModelSource(actionDispatcher, actionHandlerRegistry, viewerOptions, popupModelFactory, modelProvider) {
        var _this = _super.call(this, actionDispatcher, actionHandlerRegistry, viewerOptions) || this;
        _this.popupModelFactory = popupModelFactory;
        _this.modelProvider = modelProvider;
        _this.currentRoot = {
            type: 'NONE',
            id: 'ROOT'
        };
        _this.diagramState = {
            expansionState: new diagram_state_1.ExpansionState(_this.currentRoot)
        };
        return _this;
    }
    Object.defineProperty(LocalModelSource.prototype, "model", {
        get: function () {
            return this.currentRoot;
        },
        set: function (root) {
            this.setModel(root);
        },
        enumerable: true,
        configurable: true
    });
    LocalModelSource.prototype.initialize = function (registry) {
        _super.prototype.initialize.call(this, registry);
        // Register model manipulation commands
        registry.registerCommand(update_model_1.UpdateModelCommand);
        // Register this model source
        registry.register(bounds_manipulation_1.ComputedBoundsAction.KIND, this);
        registry.register(hover_1.RequestPopupModelAction.KIND, this);
        registry.register(expand_1.CollapseExpandAction.KIND, this);
        registry.register(expand_1.CollapseExpandAllAction.KIND, this);
    };
    LocalModelSource.prototype.setModel = function (newRoot) {
        this.currentRoot = newRoot;
        this.diagramState = {
            expansionState: new diagram_state_1.ExpansionState(newRoot)
        };
        this.submitModel(newRoot, false);
    };
    LocalModelSource.prototype.updateModel = function (newRoot) {
        if (newRoot === undefined) {
            this.submitModel(this.currentRoot, true);
        }
        else {
            this.currentRoot = newRoot;
            this.submitModel(newRoot, true);
        }
    };
    LocalModelSource.prototype.submitModel = function (newRoot, update) {
        if (this.viewerOptions.needsClientLayout) {
            this.actionDispatcher.dispatch(new bounds_manipulation_1.RequestBoundsAction(newRoot));
        }
        else {
            if (update) {
                this.actionDispatcher.dispatch(new update_model_1.UpdateModelAction(newRoot));
            }
            else {
                this.actionDispatcher.dispatch(new set_model_1.SetModelAction(newRoot));
            }
            if (this.onModelSubmitted !== undefined) {
                this.onModelSubmitted(newRoot);
            }
        }
    };
    LocalModelSource.prototype.applyMatches = function (matches) {
        var root = this.currentRoot;
        model_matching_1.applyMatches(root, matches);
        if (this.viewerOptions.needsClientLayout) {
            this.actionDispatcher.dispatch(new bounds_manipulation_1.RequestBoundsAction(root));
        }
        else {
            var update = new update_model_1.UpdateModelAction();
            update.matches = matches;
            this.actionDispatcher.dispatch(update);
            if (this.onModelSubmitted !== undefined) {
                this.onModelSubmitted(root);
            }
        }
    };
    LocalModelSource.prototype.addElements = function (elements) {
        var matches = [];
        for (var i in elements) {
            var e = elements[i];
            if (e.element !== undefined && e.parentId !== undefined) {
                matches.push({
                    right: e.element,
                    rightParentId: e.parentId
                });
            }
            else if (e.id !== undefined) {
                matches.push({
                    right: e,
                    rightParentId: this.currentRoot.id
                });
            }
        }
        this.applyMatches(matches);
    };
    LocalModelSource.prototype.removeElements = function (elements) {
        var matches = [];
        var index = new smodel_1.SModelIndex();
        index.add(this.currentRoot);
        for (var i in elements) {
            var e = elements[i];
            if (e.elementId !== undefined && e.parentId !== undefined) {
                var element = index.getById(e.elementId);
                if (element !== undefined) {
                    matches.push({
                        left: element,
                        leftParentId: e.parentId
                    });
                }
            }
            else {
                var element = index.getById(e);
                if (element !== undefined) {
                    matches.push({
                        left: element,
                        leftParentId: this.currentRoot.id
                    });
                }
            }
        }
        this.applyMatches(matches);
    };
    LocalModelSource.prototype.handle = function (action) {
        switch (action.kind) {
            case set_model_1.RequestModelAction.KIND:
                this.handleRequestModel(action);
                break;
            case bounds_manipulation_1.ComputedBoundsAction.KIND:
                this.handleComputedBounds(action);
                break;
            case hover_1.RequestPopupModelAction.KIND:
                this.handleRequestPopupModel(action);
                break;
            case svg_exporter_1.ExportSvgAction.KIND:
                this.handleExportSvgAction(action);
                break;
            case expand_1.CollapseExpandAction.KIND:
                this.handleCollapseExpandAction(action);
                break;
            case expand_1.CollapseExpandAllAction.KIND:
                this.handleCollapseExpandAllAction(action);
                break;
        }
    };
    LocalModelSource.prototype.handleRequestModel = function (action) {
        this.submitModel(this.currentRoot, false);
    };
    LocalModelSource.prototype.handleComputedBounds = function (action) {
        var root = this.currentRoot;
        var index = new smodel_1.SModelIndex();
        index.add(root);
        for (var _i = 0, _a = action.bounds; _i < _a.length; _i++) {
            var b = _a[_i];
            var element = index.getById(b.elementId);
            if (element !== undefined)
                this.applyBounds(element, b.newBounds);
        }
        if (action.alignments !== undefined) {
            for (var _b = 0, _c = action.alignments; _b < _c.length; _b++) {
                var a = _c[_b];
                var element = index.getById(a.elementId);
                if (element !== undefined)
                    this.applyAlignment(element, a.newAlignment);
            }
        }
        this.actionDispatcher.dispatch(new update_model_1.UpdateModelAction(root));
        if (this.onModelSubmitted !== undefined) {
            this.onModelSubmitted(root);
        }
    };
    LocalModelSource.prototype.applyBounds = function (element, newBounds) {
        var e = element;
        e.position = { x: newBounds.x, y: newBounds.y };
        e.size = { width: newBounds.width, height: newBounds.height };
    };
    LocalModelSource.prototype.applyAlignment = function (element, newAlignment) {
        var e = element;
        e.alignment = { x: newAlignment.x, y: newAlignment.y };
    };
    LocalModelSource.prototype.handleRequestPopupModel = function (action) {
        if (this.popupModelFactory !== undefined) {
            var element = smodel_utils_1.findElement(this.currentRoot, action.elementId);
            var popupRoot = this.popupModelFactory(action, element);
            if (popupRoot !== undefined) {
                popupRoot.canvasBounds = action.bounds;
                this.actionDispatcher.dispatch(new hover_1.SetPopupModelAction(popupRoot));
            }
        }
    };
    LocalModelSource.prototype.handleExportSvgAction = function (action) {
        var blob = new Blob([action.svg], { type: "text/plain;charset=utf-8" });
        file_saver_1.saveAs(blob, "diagram.svg");
    };
    LocalModelSource.prototype.handleCollapseExpandAction = function (action) {
        if (this.modelProvider !== undefined) {
            this.diagramState.expansionState.apply(action);
            var expandedModel = this.modelProvider.getModel(this.diagramState, this.currentRoot);
            this.updateModel(expandedModel);
        }
    };
    LocalModelSource.prototype.handleCollapseExpandAllAction = function (action) {
        if (this.modelProvider !== undefined) {
            if (action.expand) {
                // Expanding all elements locally is currently not supported
            }
            else {
                this.diagramState.expansionState.collapseAll();
            }
            var expandedModel = this.modelProvider.getModel(this.diagramState, this.currentRoot);
            this.updateModel(expandedModel);
        }
    };
    LocalModelSource = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.IActionDispatcher)),
        __param(1, inversify_1.inject(types_1.TYPES.ActionHandlerRegistry)),
        __param(2, inversify_1.inject(types_1.TYPES.ViewerOptions)),
        __param(3, inversify_1.inject(types_1.TYPES.PopupModelFactory)), __param(3, inversify_1.optional()),
        __param(4, inversify_1.inject(types_1.TYPES.StateAwareModelProvider)), __param(4, inversify_1.optional()),
        __metadata("design:paramtypes", [Object, action_handler_1.ActionHandlerRegistry, Object, Function, Object])
    ], LocalModelSource);
    return LocalModelSource;
}(model_source_1.ModelSource));
exports.LocalModelSource = LocalModelSource;
//# sourceMappingURL=local-model-source.js.map

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var logging_1 = __webpack_require__(103);
var types_1 = __webpack_require__(1);
var LoggingAction = /** @class */ (function () {
    function LoggingAction(severity, time, caller, message, params) {
        this.severity = severity;
        this.time = time;
        this.caller = caller;
        this.message = message;
        this.params = params;
        this.kind = LoggingAction.KIND;
    }
    LoggingAction.KIND = 'logging';
    return LoggingAction;
}());
exports.LoggingAction = LoggingAction;
/**
 * A logger that forwards messages of type 'error', 'warn', and 'info' to the model source.
 */
var ForwardingLogger = /** @class */ (function () {
    function ForwardingLogger(modelSourceProvider, logLevel) {
        this.modelSourceProvider = modelSourceProvider;
        this.logLevel = logLevel;
    }
    ForwardingLogger.prototype.error = function (thisArg, message) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        if (this.logLevel >= logging_1.LogLevel.error)
            this.forward(thisArg, message, logging_1.LogLevel.error, params);
    };
    ForwardingLogger.prototype.warn = function (thisArg, message) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        if (this.logLevel >= logging_1.LogLevel.warn)
            this.forward(thisArg, message, logging_1.LogLevel.warn, params);
    };
    ForwardingLogger.prototype.info = function (thisArg, message) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        if (this.logLevel >= logging_1.LogLevel.info)
            this.forward(thisArg, message, logging_1.LogLevel.info, params);
    };
    ForwardingLogger.prototype.log = function (thisArg, message) {
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        if (this.logLevel >= logging_1.LogLevel.log) {
            // We cannot forward 'log' level messages since that would lead to endless loops
            try {
                var caller = typeof thisArg === 'object' ? thisArg.constructor.name : String(thisArg);
                console.log.apply(thisArg, [caller + ': ' + message].concat(params));
            }
            catch (error) { }
        }
    };
    ForwardingLogger.prototype.forward = function (thisArg, message, logLevel, params) {
        var date = new Date();
        var action = new LoggingAction(logging_1.LogLevel[logLevel], date.toLocaleTimeString(), typeof thisArg === 'object' ? thisArg.constructor.name : String(thisArg), message, params.map(function (p) { return JSON.stringify(p); }));
        this.modelSourceProvider().then(function (modelSource) {
            try {
                modelSource.handle(action);
            }
            catch (error) {
                try {
                    console.log.apply(thisArg, [message, action, error]);
                }
                catch (error) { }
            }
        });
    };
    ForwardingLogger = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.TYPES.ModelSourceProvider)),
        __param(1, inversify_1.inject(types_1.TYPES.LogLevel)),
        __metadata("design:paramtypes", [Function, Number])
    ], ForwardingLogger);
    return ForwardingLogger;
}());
exports.ForwardingLogger = ForwardingLogger;
//# sourceMappingURL=logging.js.map

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(0);
var diagram_server_1 = __webpack_require__(145);
/**
 * An external ModelSource that connects to the model provider using a
 * websocket.
 */
var WebSocketDiagramServer = /** @class */ (function (_super) {
    __extends(WebSocketDiagramServer, _super);
    function WebSocketDiagramServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebSocketDiagramServer.prototype.listen = function (webSocket) {
        var _this = this;
        webSocket.addEventListener('message', function (event) {
            _this.messageReceived(event.data);
        });
        webSocket.addEventListener('error', function (event) {
            _this.logger.error(_this, 'error event received', event);
        });
        this.webSocket = webSocket;
    };
    WebSocketDiagramServer.prototype.disconnect = function () {
        if (this.webSocket) {
            this.webSocket.close();
            this.webSocket = undefined;
        }
    };
    WebSocketDiagramServer.prototype.sendMessage = function (message) {
        if (this.webSocket) {
            this.webSocket.send(JSON.stringify(message));
        }
        else {
            throw new Error('WebSocket is not connected');
        }
    };
    WebSocketDiagramServer = __decorate([
        inversify_1.injectable()
    ], WebSocketDiagramServer);
    return WebSocketDiagramServer;
}(diagram_server_1.DiagramServer));
exports.WebSocketDiagramServer = WebSocketDiagramServer;
//# sourceMappingURL=websocket.js.map

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Copyright (C) 2017 TypeFox and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
function rgb(red, green, blue) {
    return {
        red: red,
        green: green,
        blue: blue
    };
}
exports.rgb = rgb;
function toSVG(c) {
    return 'rgb(' + c.red + ',' + c.green + ',' + c.blue + ')';
}
exports.toSVG = toSVG;
var ColorMap = /** @class */ (function () {
    function ColorMap(stops) {
        this.stops = stops;
    }
    ColorMap.prototype.getColor = function (t) {
        t = Math.max(0, Math.min(0.99999999, t));
        var i = Math.floor(t * this.stops.length);
        return this.stops[i];
    };
    return ColorMap;
}());
exports.ColorMap = ColorMap;
//# sourceMappingURL=color.js.map

/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export htmlDomApi */
function createElement(tagName) {
    return document.createElement(tagName);
}
function createElementNS(namespaceURI, qualifiedName) {
    return document.createElementNS(namespaceURI, qualifiedName);
}
function createTextNode(text) {
    return document.createTextNode(text);
}
function createComment(text) {
    return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
    parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
    node.removeChild(child);
}
function appendChild(node, child) {
    node.appendChild(child);
}
function parentNode(node) {
    return node.parentNode;
}
function nextSibling(node) {
    return node.nextSibling;
}
function tagName(elm) {
    return elm.tagName;
}
function setTextContent(node, text) {
    node.textContent = text;
}
function getTextContent(node) {
    return node.textContent;
}
function isElement(node) {
    return node.nodeType === 1;
}
function isText(node) {
    return node.nodeType === 3;
}
function isComment(node) {
    return node.nodeType === 8;
}
var htmlDomApi = {
    createElement: createElement,
    createElementNS: createElementNS,
    createTextNode: createTextNode,
    createComment: createComment,
    insertBefore: insertBefore,
    removeChild: removeChild,
    appendChild: appendChild,
    parentNode: parentNode,
    nextSibling: nextSibling,
    tagName: tagName,
    setTextContent: setTextContent,
    getTextContent: getTextContent,
    isElement: isElement,
    isText: isText,
    isComment: isComment,
};
/* harmony default export */ __webpack_exports__["a"] = (htmlDomApi);
//# sourceMappingURL=htmldomapi.js.map

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return thunk; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__h__ = __webpack_require__(147);

function copyToThunk(vnode, thunk) {
    thunk.elm = vnode.elm;
    vnode.data.fn = thunk.data.fn;
    vnode.data.args = thunk.data.args;
    thunk.data = vnode.data;
    thunk.children = vnode.children;
    thunk.text = vnode.text;
    thunk.elm = vnode.elm;
}
function init(thunk) {
    var cur = thunk.data;
    var vnode = cur.fn.apply(undefined, cur.args);
    copyToThunk(vnode, thunk);
}
function prepatch(oldVnode, thunk) {
    var i, old = oldVnode.data, cur = thunk.data;
    var oldArgs = old.args, args = cur.args;
    if (old.fn !== cur.fn || oldArgs.length !== args.length) {
        copyToThunk(cur.fn.apply(undefined, args), thunk);
        return;
    }
    for (i = 0; i < args.length; ++i) {
        if (oldArgs[i] !== args[i]) {
            copyToThunk(cur.fn.apply(undefined, args), thunk);
            return;
        }
    }
    copyToThunk(oldVnode, thunk);
}
var thunk = function thunk(sel, key, fn, args) {
    if (args === undefined) {
        args = fn;
        fn = key;
        key = undefined;
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__h__["a" /* h */])(sel, {
        key: key,
        hook: { init: init, prepatch: prepatch },
        fn: fn,
        args: args
    });
};
/* unused harmony default export */ var _unused_webpack_default_export = (thunk);
//# sourceMappingURL=thunk.js.map

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var xlinkNS = 'http://www.w3.org/1999/xlink';
var xmlNS = 'http://www.w3.org/XML/1998/namespace';
var colonChar = 58;
var xChar = 120;
function updateAttrs(oldVnode, vnode) {
    var key, elm = vnode.elm, oldAttrs = oldVnode.data.attrs, attrs = vnode.data.attrs;
    if (!oldAttrs && !attrs)
        return;
    if (oldAttrs === attrs)
        return;
    oldAttrs = oldAttrs || {};
    attrs = attrs || {};
    // update modified attributes, add new attributes
    for (key in attrs) {
        var cur = attrs[key];
        var old = oldAttrs[key];
        if (old !== cur) {
            if (cur === true) {
                elm.setAttribute(key, "");
            }
            else if (cur === false) {
                elm.removeAttribute(key);
            }
            else {
                if (key.charCodeAt(0) !== xChar) {
                    elm.setAttribute(key, cur);
                }
                else if (key.charCodeAt(3) === colonChar) {
                    // Assume xml namespace
                    elm.setAttributeNS(xmlNS, key, cur);
                }
                else if (key.charCodeAt(5) === colonChar) {
                    // Assume xlink namespace
                    elm.setAttributeNS(xlinkNS, key, cur);
                }
                else {
                    elm.setAttribute(key, cur);
                }
            }
        }
    }
    // remove removed attributes
    // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
    // the other option is to remove all attributes with value == undefined
    for (key in oldAttrs) {
        if (!(key in attrs)) {
            elm.removeAttribute(key);
        }
    }
}
exports.attributesModule = { create: updateAttrs, update: updateAttrs };
exports.default = exports.attributesModule;
//# sourceMappingURL=attributes.js.map

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function updateClass(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldClass = oldVnode.data.class, klass = vnode.data.class;
    if (!oldClass && !klass)
        return;
    if (oldClass === klass)
        return;
    oldClass = oldClass || {};
    klass = klass || {};
    for (name in oldClass) {
        if (!klass[name]) {
            elm.classList.remove(name);
        }
    }
    for (name in klass) {
        cur = klass[name];
        if (cur !== oldClass[name]) {
            elm.classList[cur ? 'add' : 'remove'](name);
        }
    }
}
exports.classModule = { create: updateClass, update: updateClass };
exports.default = exports.classModule;
//# sourceMappingURL=class.js.map

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function invokeHandler(handler, vnode, event) {
    if (typeof handler === "function") {
        // call function handler
        handler.call(vnode, event, vnode);
    }
    else if (typeof handler === "object") {
        // call handler with arguments
        if (typeof handler[0] === "function") {
            // special case for single argument for performance
            if (handler.length === 2) {
                handler[0].call(vnode, handler[1], event, vnode);
            }
            else {
                var args = handler.slice(1);
                args.push(event);
                args.push(vnode);
                handler[0].apply(vnode, args);
            }
        }
        else {
            // call multiple handlers
            for (var i = 0; i < handler.length; i++) {
                invokeHandler(handler[i]);
            }
        }
    }
}
function handleEvent(event, vnode) {
    var name = event.type, on = vnode.data.on;
    // call event handler(s) if exists
    if (on && on[name]) {
        invokeHandler(on[name], vnode, event);
    }
}
function createListener() {
    return function handler(event) {
        handleEvent(event, handler.vnode);
    };
}
function updateEventListeners(oldVnode, vnode) {
    var oldOn = oldVnode.data.on, oldListener = oldVnode.listener, oldElm = oldVnode.elm, on = vnode && vnode.data.on, elm = (vnode && vnode.elm), name;
    // optimization for reused immutable handlers
    if (oldOn === on) {
        return;
    }
    // remove existing listeners which no longer used
    if (oldOn && oldListener) {
        // if element changed or deleted we remove all existing listeners unconditionally
        if (!on) {
            for (name in oldOn) {
                // remove listener if element was changed or existing listeners removed
                oldElm.removeEventListener(name, oldListener, false);
            }
        }
        else {
            for (name in oldOn) {
                // remove listener if existing listener removed
                if (!on[name]) {
                    oldElm.removeEventListener(name, oldListener, false);
                }
            }
        }
    }
    // add new listeners which has not already attached
    if (on) {
        // reuse existing listener or create new
        var listener = vnode.listener = oldVnode.listener || createListener();
        // update vnode for listener
        listener.vnode = vnode;
        // if element changed or added we add all needed listeners unconditionally
        if (!oldOn) {
            for (name in on) {
                // add listener if element was changed or new listeners added
                elm.addEventListener(name, listener, false);
            }
        }
        else {
            for (name in on) {
                // add listener if new listener added
                if (!oldOn[name]) {
                    elm.addEventListener(name, listener, false);
                }
            }
        }
    }
}
exports.eventListenersModule = {
    create: updateEventListeners,
    update: updateEventListeners,
    destroy: updateEventListeners
};
exports.default = exports.eventListenersModule;
//# sourceMappingURL=eventlisteners.js.map

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function updateProps(oldVnode, vnode) {
    var key, cur, old, elm = vnode.elm, oldProps = oldVnode.data.props, props = vnode.data.props;
    if (!oldProps && !props)
        return;
    if (oldProps === props)
        return;
    oldProps = oldProps || {};
    props = props || {};
    for (key in oldProps) {
        if (!props[key]) {
            delete elm[key];
        }
    }
    for (key in props) {
        cur = props[key];
        old = oldProps[key];
        if (old !== cur && (key !== 'value' || elm[key] !== cur)) {
            elm[key] = cur;
        }
    }
}
exports.propsModule = { create: updateProps, update: updateProps };
exports.default = exports.propsModule;
//# sourceMappingURL=props.js.map

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || setTimeout;
var nextFrame = function (fn) { raf(function () { raf(fn); }); };
function setNextFrame(obj, prop, val) {
    nextFrame(function () { obj[prop] = val; });
}
function updateStyle(oldVnode, vnode) {
    var cur, name, elm = vnode.elm, oldStyle = oldVnode.data.style, style = vnode.data.style;
    if (!oldStyle && !style)
        return;
    if (oldStyle === style)
        return;
    oldStyle = oldStyle || {};
    style = style || {};
    var oldHasDel = 'delayed' in oldStyle;
    for (name in oldStyle) {
        if (!style[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.removeProperty(name);
            }
            else {
                elm.style[name] = '';
            }
        }
    }
    for (name in style) {
        cur = style[name];
        if (name === 'delayed' && style.delayed) {
            for (var name2 in style.delayed) {
                cur = style.delayed[name2];
                if (!oldHasDel || cur !== oldStyle.delayed[name2]) {
                    setNextFrame(elm.style, name2, cur);
                }
            }
        }
        else if (name !== 'remove' && cur !== oldStyle[name]) {
            if (name[0] === '-' && name[1] === '-') {
                elm.style.setProperty(name, cur);
            }
            else {
                elm.style[name] = cur;
            }
        }
    }
}
function applyDestroyStyle(vnode) {
    var style, name, elm = vnode.elm, s = vnode.data.style;
    if (!s || !(style = s.destroy))
        return;
    for (name in style) {
        elm.style[name] = style[name];
    }
}
function applyRemoveStyle(vnode, rm) {
    var s = vnode.data.style;
    if (!s || !s.remove) {
        rm();
        return;
    }
    var name, elm = vnode.elm, i = 0, compStyle, style = s.remove, amount = 0, applied = [];
    for (name in style) {
        applied.push(name);
        elm.style[name] = style[name];
    }
    compStyle = getComputedStyle(elm);
    var props = compStyle['transition-property'].split(', ');
    for (; i < props.length; ++i) {
        if (applied.indexOf(props[i]) !== -1)
            amount++;
    }
    elm.addEventListener('transitionend', function (ev) {
        if (ev.target === elm)
            --amount;
        if (amount === 0)
            rm();
    });
}
exports.styleModule = {
    create: updateStyle,
    update: updateStyle,
    destroy: applyDestroyStyle,
    remove: applyRemoveStyle
};
exports.default = exports.styleModule;
//# sourceMappingURL=style.js.map

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Action used to execute container creation tools.
 *
 * @sbegaudeau
 */
var ExecuteContainerCreationToolAction = /** @class */ (function () {
    /**
     * The constructor.
     * @param toolName The name of the tool to execute
     */
    function ExecuteContainerCreationToolAction(toolName) {
        /**
         * The kind of the action.
         */
        this.kind = ExecuteContainerCreationToolAction.KIND;
        this.toolName = toolName;
    }
    /**
     * The kind of the action.
     */
    ExecuteContainerCreationToolAction.KIND = 'executeContainerCreationTool';
    /**
     * The type of the action.
     */
    ExecuteContainerCreationToolAction.TYPE = 'ContainerCreationDescriptionImpl';
    return ExecuteContainerCreationToolAction;
}());
exports.ExecuteContainerCreationToolAction = ExecuteContainerCreationToolAction;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Action used to execute node creation tools.
 *
 * @gcoutable
 */
var ExecuteNodeCreationToolAction = /** @class */ (function () {
    /**
     * The constructor.
     * @param toolName The name of the tool to execute
     */
    function ExecuteNodeCreationToolAction(toolName) {
        /**
         * The kind of the action.
         */
        this.kind = ExecuteNodeCreationToolAction.KIND;
        this.toolName = toolName;
    }
    /**
     * The kind of the action.
     */
    ExecuteNodeCreationToolAction.KIND = 'executeNodeCreationTool';
    /**
     * The type of the action.
     */
    ExecuteNodeCreationToolAction.TYPE = 'NodeCreationDescriptionImpl';
    return ExecuteNodeCreationToolAction;
}());
exports.ExecuteNodeCreationToolAction = ExecuteNodeCreationToolAction;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Action used to generic tools.
 *
 * @sbegaudeau
 */
var ExecuteToolAction = /** @class */ (function () {
    /**
     * The constructor.
     * @param toolName The name of the tool to execute
     */
    function ExecuteToolAction(toolName) {
        /**
         * The kind of the action.
         */
        this.kind = ExecuteToolAction.KIND;
        this.toolName = toolName;
    }
    /**
     * The kind of the action.
     */
    ExecuteToolAction.KIND = 'executeTool';
    /**
     * The type of the action.
     */
    ExecuteToolAction.TYPE = 'ToolDescriptionImpl';
    return ExecuteToolAction;
}());
exports.ExecuteToolAction = ExecuteToolAction;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Action used to retrieve the layers of the diagram.
 *
 * @gcoutable
 */
var RequestLayersAction = /** @class */ (function () {
    function RequestLayersAction() {
        /**
         * The kind of the action.
         */
        this.kind = RequestLayersAction.KIND;
    }
    /**
     * The kind of the action.
     */
    RequestLayersAction.KIND = 'requestLayers';
    return RequestLayersAction;
}());
exports.RequestLayersAction = RequestLayersAction;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Action used to retrieve the tools of the diagram.
 *
 * @gcoutable
 */
var RequestToolsAction = /** @class */ (function () {
    function RequestToolsAction() {
        /**
         * The kind of the action.
         */
        this.kind = RequestToolsAction.KIND;
    }
    /**
     * The kind of the action.
     */
    RequestToolsAction.KIND = 'requestTools';
    return RequestToolsAction;
}());
exports.RequestToolsAction = RequestToolsAction;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Action used to set the layers of the diagram.
 *
 * @gcoutable
 */
var SetLayersAction = /** @class */ (function () {
    /**
     * The constructor.
     * @param layers The layers of the diagram
     */
    function SetLayersAction(layers) {
        /**
         * The kind of the action.
         */
        this.kind = SetLayersAction.KIND;
        this.layers = layers;
    }
    /**
     * The kind of the action.
     */
    SetLayersAction.KIND = 'setLayers';
    return SetLayersAction;
}());
exports.SetLayersAction = SetLayersAction;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Action used to set the tools of the diagram.
 *
 * @gcoutable
 */
var SetToolsAction = /** @class */ (function () {
    /**
     * The constructor.
     * @param tools The tools of the diagram
     */
    function SetToolsAction(tools) {
        /**
         * The kind of the action.
         */
        this.kind = SetToolsAction.KIND;
        this.tools = tools;
    }
    /**
     * The kind of the action.
     */
    SetToolsAction.KIND = 'setTools';
    return SetToolsAction;
}());
exports.SetToolsAction = SetToolsAction;


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Action used to toggle a layer.
 *
 * @author gcoutable
 */
var ToggleLayerAction = /** @class */ (function () {
    /**
     * The constructor.
     * @param layerName The name of the layer
     * @param newState The new state of the layer
     */
    function ToggleLayerAction(layerName, newState) {
        /**
         * The kind of the action.
         */
        this.kind = ToggleLayerAction.KIND;
        this.layerName = layerName;
        this.newState = newState;
    }
    /**
     * The kind of the action.
     */
    ToggleLayerAction.KIND = 'toggleLayer';
    return ToggleLayerAction;
}());
exports.ToggleLayerAction = ToggleLayerAction;


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Copyright (c) 2018 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
var lib_1 = __webpack_require__(15);
var request_layers_action_1 = __webpack_require__(287);
var request_tools_action_1 = __webpack_require__(288);
var set_layers_action_1 = __webpack_require__(289);
var set_tools_action_1 = __webpack_require__(290);
var di_config_1 = __webpack_require__(294);
var tools_utils_1 = __webpack_require__(293);
__webpack_require__(240);
/* tslint:disable */
var SetLayersActionHandler = /** @class */ (function () {
    function SetLayersActionHandler(diagramServer) {
        this.diagramServer = diagramServer;
    }
    /**
     * Handles the given action received by the server.
     * @param action The action
     */
    SetLayersActionHandler.prototype.handle = function (action) {
        this.handleSetLayersAction(action);
    };
    /**
     * Handles the set layers action.
     * @param action The action
     */
    SetLayersActionHandler.prototype.handleSetLayersAction = function (action) {
        tools_utils_1.cleanDOMElement(document.getElementById('layers-palette'));
        tools_utils_1.createDOMElementForLayers(this.diagramServer, action.layers);
    };
    return SetLayersActionHandler;
}());
exports.SetLayersActionHandler = SetLayersActionHandler;
/* tslint:enable */
/* tslint:disable */
var SetToolsActionHandler = /** @class */ (function () {
    function SetToolsActionHandler(diagramServer) {
        this.diagramServer = diagramServer;
    }
    /**
     * Handles the given action received by the server.
     * @param action The action
     */
    SetToolsActionHandler.prototype.handle = function (action) {
        this.handleSetToolsAction(action);
    };
    /**
   * Handles the set tools action.
   * @param action The action
   */
    SetToolsActionHandler.prototype.handleSetToolsAction = function (action) {
        var tools = action.tools.filter(function (tool) {
            return tools_utils_1.canHandleTool(tool);
        });
        tools_utils_1.cleanDOMElement(document.getElementById('tools-palette'));
        tools_utils_1.createDOMElementsForTools(this.diagramServer, tools);
    };
    return SetToolsActionHandler;
}());
exports.SetToolsActionHandler = SetToolsActionHandler;
/* tslint:enable */
/**
 * Creates the Sirius diagram and connect it to the server.
 *
 * @sbegaudeau
 */
function initializeSiriusDiagram() {
    var websocket = new WebSocket('ws://' + window.location.host + '/diagrams/api');
    var container = di_config_1.createContainer('sprotty');
    var diagramServer = container.get(lib_1.TYPES.ModelSource);
    diagramServer.listen(websocket);
    var actionHandlerRegistry = container.get(lib_1.TYPES.ActionHandlerRegistry);
    actionHandlerRegistry.register(set_layers_action_1.SetLayersAction.KIND, new SetLayersActionHandler(diagramServer));
    actionHandlerRegistry.register(set_tools_action_1.SetToolsAction.KIND, new SetToolsActionHandler(diagramServer));
    // Connect to the diagram server
    websocket.addEventListener('open', function (event) {
        var url = new URL(window.location.href);
        var parameters = new URLSearchParams(url.search);
        var project = parameters.get('project') || '';
        var aird = parameters.get('aird') || '';
        var representationName = parameters.get('representationName') || '';
        diagramServer.clientId = "__PROJECT__" + project + "__AIRD__" + aird + "__REPRESENTATION__" + representationName + "__CLIENT_ID__" + Math.random();
        diagramServer.handle(new request_tools_action_1.RequestToolsAction());
        diagramServer.handle(new request_layers_action_1.RequestLayersAction());
        diagramServer.handle(new lib_1.RequestModelAction({
            project: project,
            aird: aird,
            representationName: representationName
        }));
    });
}
exports.initializeSiriusDiagram = initializeSiriusDiagram;


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var execute_container_creation_tool_action_1 = __webpack_require__(284);
var execute_node_creation_tool_action_1 = __webpack_require__(285);
var execute_tool_action_1 = __webpack_require__(286);
var toogle_layers_action_1 = __webpack_require__(291);
/**
 * Indicates if the given tool is supported by the diagram.
 * @param tool The tool
 * @returns true if the tool is supported, false otherwise
 */
function canHandleTool(tool) {
    var canHandle = false;
    switch (tool.toolType) {
        case execute_node_creation_tool_action_1.ExecuteNodeCreationToolAction.TYPE:
            canHandle = true;
            break;
        case execute_container_creation_tool_action_1.ExecuteContainerCreationToolAction.TYPE:
            canHandle = true;
            break;
        case execute_tool_action_1.ExecuteToolAction.TYPE:
            canHandle = true;
            break;
        default:
            canHandle = false;
            break;
    }
    return canHandle;
}
exports.canHandleTool = canHandleTool;
/**
 * Creates the action for the given tool.
 * @param tool The tool
 * @returns The action used to run the given tool or null if the tool is not supported
 */
function createToolAction(tool) {
    var action = null;
    switch (tool.toolType) {
        case execute_node_creation_tool_action_1.ExecuteNodeCreationToolAction.TYPE:
            action = new execute_node_creation_tool_action_1.ExecuteNodeCreationToolAction(tool.id);
            break;
        case execute_container_creation_tool_action_1.ExecuteContainerCreationToolAction.TYPE:
            action = new execute_container_creation_tool_action_1.ExecuteContainerCreationToolAction(tool.id);
            break;
        case execute_tool_action_1.ExecuteToolAction.TYPE:
            action = new execute_tool_action_1.ExecuteToolAction(tool.id);
        default:
            break;
    }
    return action;
}
/**
 * Creates the action for the given layer.
 * @param layer The layer
 * @returns The action used to toggle the given layer
 */
function createLayerAction(layer, newState) {
    return new toogle_layers_action_1.ToggleLayerAction(layer.id, newState);
}
/**
 * Creates the DOM elements used to execute the given tools.
 * @param diagramServer The diagram server
 * @param tools The tools to display
 */
function createDOMElementsForTools(diagramServer, tools) {
    var toolPaletteElement = document.getElementById('tools-palette');
    if (toolPaletteElement !== null) {
        tools.forEach(function (tool) {
            var button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.setAttribute('class', 'tool');
            var toolLabel = tool.name || tool.id;
            var image = document.createElement('img');
            // FIXME Change the computation of the tool image source
            var imageSource = 'assets/ToolDescription.gif';
            if (toolLabel.includes('Woman')) {
                imageSource = 'assets/woman.svg';
            }
            else if (toolLabel.includes('Man')) {
                imageSource = 'assets/man.svg';
            }
            else if (toolLabel.includes('New customer')) {
                imageSource = 'assets/LaneSet.png';
            }
            else if (toolLabel.includes('Start')) {
                imageSource = 'assets/start.svg';
            }
            else if (toolLabel.includes('Select')) {
                imageSource = 'assets/Task.svg';
            }
            else if (toolLabel.includes('Order')) {
                imageSource = 'assets/Task.svg';
            }
            else if (toolLabel.includes('Wait')) {
                imageSource = 'assets/event-based-gateway.svg';
            }
            else if (toolLabel.includes('Eat')) {
                imageSource = 'assets/end.svg';
            }
            image.setAttribute('src', imageSource);
            button.appendChild(image);
            var label = document.createElement('label');
            label.textContent = toolLabel;
            button.appendChild(label);
            button.addEventListener('click', function (event) {
                var toolAction = createToolAction(tool);
                if (toolAction !== null) {
                    diagramServer.handle(toolAction);
                }
            });
            toolPaletteElement.appendChild(button);
        });
    }
}
exports.createDOMElementsForTools = createDOMElementsForTools;
/**
 * Creates the DOM elements used to activate or deactivate layers.
 * @param diagramServer The diagram server
 * @param layers The layers to display
 */
function createDOMElementForLayers(diagramServer, layers) {
    var layerPaletteElement = document.getElementById('layers-palette');
    if (layerPaletteElement != null) {
        layers.forEach(function (layer) {
            var layerId = "layer-" + layer.id;
            var layerContainerElement = document.createElement('div');
            layerContainerElement.setAttribute('class', 'layer');
            var layerLabelElement = document.createElement('label');
            layerLabelElement.setAttribute('for', layerId);
            layerLabelElement.textContent = (layer.name || layer.id) + " ";
            layerContainerElement.appendChild(layerLabelElement);
            var layerCheckboxElement = document.createElement('input');
            layerCheckboxElement.setAttribute('type', 'checkbox');
            if (layer.isActive) {
                layerCheckboxElement.setAttribute('checked', 'checked');
            }
            layerCheckboxElement.setAttribute('id', layerId);
            layerCheckboxElement.addEventListener('click', function (event) {
                var eventTarget = event.target;
                var layerAction = createLayerAction(layer, eventTarget.checked);
                if (layerAction !== null) {
                    diagramServer.handle(layerAction);
                }
            });
            layerContainerElement.appendChild(layerCheckboxElement);
            layerPaletteElement.appendChild(layerContainerElement);
        });
    }
}
exports.createDOMElementForLayers = createDOMElementForLayers;
/**
 * Cleans the content of the HTMLElement.
 * @param element The HTMLElement
 */
function cleanDOMElement(element) {
    if (element !== null) {
        for (var index = 0; index < element.children.length;) {
            var item = element.children.item(index);
            element.removeChild(item);
        }
    }
}
exports.cleanDOMElement = cleanDOMElement;


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Copyright (c) 2018 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
var inversify_1 = __webpack_require__(0);
var lib_1 = __webpack_require__(15);
var sirius_edge_view_1 = __webpack_require__(298);
var sirius_free_form_flat_container_node_view_1 = __webpack_require__(299);
var sirius_list_flat_container_node_view_1 = __webpack_require__(301);
var sirius_square_border_node_view_1 = __webpack_require__(302);
var sirius_svg_border_node_view_1 = __webpack_require__(304);
var sirius_label_view_1 = __webpack_require__(300);
var sirius_square_node_view_1 = __webpack_require__(303);
var sirius_svg_node_view_1 = __webpack_require__(305);
var sirius_graph_factory_1 = __webpack_require__(296);
var popup_1 = __webpack_require__(295);
var sirius_websocket_diagram_server_1 = __webpack_require__(297);
var siriusContainerModule = new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
    rebind(lib_1.TYPES.ILogger)
        .to(lib_1.ConsoleLogger)
        .inSingletonScope();
    rebind(lib_1.TYPES.LogLevel).toConstantValue(lib_1.LogLevel.log);
    rebind(lib_1.TYPES.IModelFactory)
        .to(sirius_graph_factory_1.SiriusGraphFactory)
        .inSingletonScope();
    bind(lib_1.TYPES.PopupModelFactory).toConstantValue(popup_1.siriusPopupModelFactory);
});
/**
 * Create the dependency injection container.
 * @param containerId The identifier of the container
 */
exports.createContainer = function (containerId) {
    var container = new inversify_1.Container();
    container.load(lib_1.defaultModule, lib_1.selectModule, lib_1.moveModule, lib_1.boundsModule, lib_1.undoRedoModule, lib_1.viewportModule, lib_1.hoverModule, lib_1.exportModule, siriusContainerModule);
    container
        .bind(lib_1.TYPES.ModelSource)
        .to(sirius_websocket_diagram_server_1.SiriusWebSocketDiagramServer)
        .inSingletonScope();
    lib_1.overrideViewerOptions(container, {
        needsClientLayout: true,
        needsServerLayout: true,
        baseDiv: containerId,
        hiddenDiv: containerId + '-hidden'
    });
    var viewRegistry = container.get(lib_1.TYPES.ViewRegistry);
    viewRegistry.register('graph', lib_1.SGraphView);
    viewRegistry.register('node:square', sirius_square_node_view_1.SiriusSquareNodeView);
    viewRegistry.register('node:svg', sirius_svg_node_view_1.SiriusSVGNodeView);
    viewRegistry.register('port:square', sirius_square_border_node_view_1.SiriusSquareBorderNodeView);
    viewRegistry.register('port:image', sirius_svg_border_node_view_1.SiriusSvgBorderNodeView);
    viewRegistry.register('node:freeformflatcontainer', sirius_free_form_flat_container_node_view_1.SiriusFreeFormFlatContainerNodeView);
    viewRegistry.register('node:listflatcontainer', sirius_list_flat_container_node_view_1.SiriusListFlatContainerNodeView);
    viewRegistry.register('comp:listflatcontainer_label', lib_1.SCompartmentView);
    viewRegistry.register('comp:listflatcontainer_body', lib_1.SCompartmentView);
    viewRegistry.register('edge:straight', sirius_edge_view_1.SiriusEdgeView);
    viewRegistry.register('label:inside-left', sirius_label_view_1.SiriusLabelView);
    viewRegistry.register('label:inside-center', sirius_label_view_1.SiriusLabelView);
    viewRegistry.register('label:inside-right', sirius_label_view_1.SiriusLabelView);
    viewRegistry.register('label:outside-left', sirius_label_view_1.SiriusLabelView);
    viewRegistry.register('label:outside-center', sirius_label_view_1.SiriusLabelView);
    viewRegistry.register('label:outside-right', sirius_label_view_1.SiriusLabelView);
    viewRegistry.register('label:text', lib_1.SLabelView);
    viewRegistry.register('comp:main', lib_1.SCompartmentView);
    viewRegistry.register('html', lib_1.HtmlRootView);
    viewRegistry.register('pre-rendered', lib_1.PreRenderedView);
    return container;
};


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Creates a popup for the given action.
 * @param request The request popup model action
 * @param element The model element schema
 */
exports.siriusPopupModelFactory = function (request, element) {
    if (element !== undefined && element.type === 'node:svg') {
        return {
            type: 'html',
            id: 'popup',
            children: [
                {
                    type: 'pre-rendered',
                    id: 'popup-title',
                    code: "<div class=\"popup-title\">Class " + (element.id === 'node0' ? 'Foo' : 'Bar') + "</div>"
                },
                {
                    type: 'pre-rendered',
                    id: 'popup-body',
                    code: '<div class="popup-body">Hello World</div>'
                }
            ]
        };
    }
    return undefined;
};


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Copyright (c) 2018 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
var lib_1 = __webpack_require__(15);
/**
 * The Sirius graph factory used to create all the graph elements.
 *
 * @sbegaudeau
 */
var SiriusGraphFactory = /** @class */ (function (_super) {
    __extends(SiriusGraphFactory, _super);
    function SiriusGraphFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates the element with the given schema.
     * @param schema The model element schema
     * @param parent The parent element
     */
    SiriusGraphFactory.prototype.createElement = function (schema, parent) {
        /*if (this.isNodeSchema(schema)) {
          return this.initializeChild(new SiriusNode(), schema, parent)
        } else */
        if (this.isPreRenderedSchema(schema)) {
            return this.initializeChild(new lib_1.PreRenderedElement(), schema, parent);
        }
        else {
            return _super.prototype.createElement.call(this, schema, parent);
        }
    };
    /**
     * Creates the root for the given schema.
     * @param schema The schema
     */
    SiriusGraphFactory.prototype.createRoot = function (schema) {
        if (this.isHtmlRootSchema(schema)) {
            return this.initializeRoot(new lib_1.HtmlRoot(), schema);
        }
        else {
            return _super.prototype.createRoot.call(this, schema);
        }
    };
    /**
     * Indicates if the given schema is an HTML root schema.
     * @param schema The model root schema
     */
    SiriusGraphFactory.prototype.isHtmlRootSchema = function (schema) {
        return lib_1.getBasicType(schema) === 'html';
    };
    /**
     * Indicates if the given schema is a pre-rendered schema.
     * @param schema The model element schema
     */
    SiriusGraphFactory.prototype.isPreRenderedSchema = function (schema) {
        return lib_1.getBasicType(schema) === 'pre-rendered';
    };
    return SiriusGraphFactory;
}(lib_1.SGraphFactory));
exports.SiriusGraphFactory = SiriusGraphFactory;


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Copyright (c) 2018 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
var lib_1 = __webpack_require__(15);
/**
 * The Sirius WebSocket diagram server used to communicate with the remote server.
 *
 * @gcoutable
 */
var SiriusWebSocketDiagramServer = /** @class */ (function (_super) {
    __extends(SiriusWebSocketDiagramServer, _super);
    function SiriusWebSocketDiagramServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Initializes the given action handler registry.
     * @param registry The action handler registry
     */
    SiriusWebSocketDiagramServer.prototype.initialize = function (registry) {
        _super.prototype.initialize.call(this, registry);
    };
    /**
     * Handles the given action received by the server.
     * @param action The action
     */
    SiriusWebSocketDiagramServer.prototype.handle = function (action) {
        switch (action.kind) {
            default:
                _super.prototype.handle.call(this, action);
                break;
        }
    };
    return SiriusWebSocketDiagramServer;
}(lib_1.WebSocketDiagramServer));
exports.SiriusWebSocketDiagramServer = SiriusWebSocketDiagramServer;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Copyright (c) 2018 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
var lib_1 = __webpack_require__(15);
var snabbdom = __webpack_require__(7);
var JSX = { createElement: snabbdom.svg };
/**
 * The view used to display Sirius edges.
 *
 * @sbegaudeau
 */
var SiriusEdgeView = /** @class */ (function (_super) {
    __extends(SiriusEdgeView, _super);
    function SiriusEdgeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renders the line of the edge with a specific style configured.
     * @param edge The edge
     * @param segments The segments
     * @param context The context
     */
    SiriusEdgeView.prototype.renderLine = function (edge, segments, context) {
        var style = edge.style;
        var firstPoint = segments[0];
        var path = "M " + firstPoint.x + "," + firstPoint.y;
        for (var i = 1; i < segments.length; i++) {
            var p = segments[i];
            path += " L " + p.x + "," + p.y;
        }
        return JSX.createElement("path", { "class-sprotty-edge": true, d: path, style: JSON.parse(style) });
    };
    /**
     * Renders additionals element for the given Edge. This method is overriden in order to let
     * us add decorators to the beggining or the end of the edge (to create an arrow for example).
     * @param edge The edge
     * @param segments The segments
     * @param context The context
     */
    SiriusEdgeView.prototype.renderAdditionals = function (edge, segments, context) {
        var style = edge.style;
        var styleObject = JSON.parse(style);
        styleObject.fill = styleObject.stroke;
        var p1 = segments[segments.length - 2];
        var p2 = segments[segments.length - 1];
        return [
            JSX.createElement("path", { "class-edge": true, "class-arrow": true, d: "M 0,0 L 6,-3 L 6,3 Z", transform: "rotate(" + lib_1.toDegrees(lib_1.angle(p2, p1)) + " " + p2.x + " " + p2.y + ") translate(" + p2.x + " " + p2.y + ")", style: styleObject })
        ];
    };
    return SiriusEdgeView;
}(lib_1.PolylineEdgeView));
exports.SiriusEdgeView = SiriusEdgeView;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Copyright (c) 2018 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
var lib_1 = __webpack_require__(15);
var snabbdom = __webpack_require__(7);
var JSX = { createElement: snabbdom.svg };
/**
 * The view used to display free form containers with a flat style.
 *
 * @sbegaudeau
 */
var SiriusFreeFormFlatContainerNodeView = /** @class */ (function (_super) {
    __extends(SiriusFreeFormFlatContainerNodeView, _super);
    function SiriusFreeFormFlatContainerNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renders the given node in the context.
     * @param node The node
     * @param context The context
     */
    SiriusFreeFormFlatContainerNodeView.prototype.render = function (node, context) {
        var style = node.style;
        return (JSX.createElement("g", null,
            JSX.createElement("rect", { "class-selected": node.selected, "class-mouseover": node.hoverFeedback, x: 0, y: 0, rx: "5", ry: "5", width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height), style: JSON.parse(style) }),
            context.renderChildren(node)));
    };
    return SiriusFreeFormFlatContainerNodeView;
}(lib_1.RectangularNodeView));
exports.SiriusFreeFormFlatContainerNodeView = SiriusFreeFormFlatContainerNodeView;


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Copyright (c) 2018 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
var lib_1 = __webpack_require__(15);
var snabbdom = __webpack_require__(7);
var JSX = { createElement: snabbdom.svg };
/**
 * The view used to display labels.
 *
 * @sbegaudeau
 */
var SiriusLabelView = /** @class */ (function (_super) {
    __extends(SiriusLabelView, _super);
    function SiriusLabelView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renders the given label in the context.
     * @param label The label
     * @param context The context
     */
    SiriusLabelView.prototype.render = function (label, context) {
        var style = label.style;
        var styleObject = JSON.parse(style);
        var vnode = JSX.createElement("text", { "class-sprotty-label": true, style: styleObject }, label.text);
        var subType = lib_1.getSubType(label);
        if (subType) {
            lib_1.setAttr(vnode, 'class', subType);
        }
        return vnode;
    };
    return SiriusLabelView;
}(lib_1.SLabelView));
exports.SiriusLabelView = SiriusLabelView;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Copyright (c) 2018 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
var lib_1 = __webpack_require__(15);
var snabbdom = __webpack_require__(7);
var JSX = { createElement: snabbdom.svg };
/**
 * The view used to display list containers with a flat style.
 *
 * @sbegaudeau
 */
var SiriusListFlatContainerNodeView = /** @class */ (function (_super) {
    __extends(SiriusListFlatContainerNodeView, _super);
    function SiriusListFlatContainerNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renders the given node in the context.
     * @param node The node
     * @param context The context
     */
    SiriusListFlatContainerNodeView.prototype.render = function (node, context) {
        var style = node.style;
        return (JSX.createElement("g", null,
            JSX.createElement("rect", { "class-selected": node.selected, "class-mouseover": node.hoverFeedback, x: 0, y: 0, rx: "5", ry: "5", width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height), style: JSON.parse(style) }),
            context.renderChildren(node)));
    };
    return SiriusListFlatContainerNodeView;
}(lib_1.RectangularNodeView));
exports.SiriusListFlatContainerNodeView = SiriusListFlatContainerNodeView;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Copyright (c) 2018 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
var lib_1 = __webpack_require__(15);
var snabbdom = __webpack_require__(7);
var JSX = { createElement: snabbdom.svg };
/**
 * The view used to display a border node nodes with a square style.
 *
 * @hmarchadour
 */
var SiriusSquareBorderNodeView = /** @class */ (function (_super) {
    __extends(SiriusSquareBorderNodeView, _super);
    function SiriusSquareBorderNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renders the given port in the context.
     * @param port The port
     * @param context The context
     */
    SiriusSquareBorderNodeView.prototype.render = function (port, context) {
        var style = port.style;
        return (JSX.createElement("g", null,
            JSX.createElement("rect", { "class-selected": port.selected, "class-mouseover": port.hoverFeedback, x: 0, y: 0, width: Math.max(5, port.bounds.width), height: Math.max(5, port.bounds.height), style: JSON.parse(style) }),
            context.renderChildren(port)));
    };
    return SiriusSquareBorderNodeView;
}(lib_1.RectangularNodeView));
exports.SiriusSquareBorderNodeView = SiriusSquareBorderNodeView;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Copyright (c) 2018 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
var lib_1 = __webpack_require__(15);
var snabbdom = __webpack_require__(7);
var JSX = { createElement: snabbdom.svg };
/**
 * The view used to display nodes with a square style.
 *
 * @sbegaudeau
 */
var SiriusSquareNodeView = /** @class */ (function (_super) {
    __extends(SiriusSquareNodeView, _super);
    function SiriusSquareNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renders the given node in the context.
     * @param node The node
     * @param context The context
     */
    SiriusSquareNodeView.prototype.render = function (node, context) {
        var style = node.style;
        return (JSX.createElement("g", null,
            JSX.createElement("rect", { "class-selected": node.selected, "class-mouseover": node.hoverFeedback, x: 0, y: 0, rx: "5", ry: "5", width: Math.max(0, node.bounds.width), height: Math.max(0, node.bounds.height), style: JSON.parse(style) }),
            context.renderChildren(node)));
    };
    return SiriusSquareNodeView;
}(lib_1.RectangularNodeView));
exports.SiriusSquareNodeView = SiriusSquareNodeView;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Copyright (c) 2018 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
var lib_1 = __webpack_require__(15);
var snabbdom = __webpack_require__(7);
var JSX = { createElement: snabbdom.svg };
/**
 * The view used to display an SVG border node.
 *
 * @hmarchadour
 */
var SiriusSvgBorderNodeView = /** @class */ (function (_super) {
    __extends(SiriusSvgBorderNodeView, _super);
    function SiriusSvgBorderNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renders the given port in the context.
     * @param port The port
     * @param context The context
     */
    SiriusSvgBorderNodeView.prototype.render = function (port, context) {
        var url = port.url;
        return (JSX.createElement("g", null,
            JSX.createElement("image", { x: "0", y: "0", height: "10", width: "10", href: url })));
    };
    return SiriusSvgBorderNodeView;
}(lib_1.RectangularNodeView));
exports.SiriusSvgBorderNodeView = SiriusSvgBorderNodeView;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/*******************************************************************************
 * Copyright (c) 2018 Obeo.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *
 * Contributors:
 *    Obeo - initial API and implementation
 *******************************************************************************/
var lib_1 = __webpack_require__(15);
var snabbdom = __webpack_require__(7);
var JSX = { createElement: snabbdom.svg };
/**
 * The view used to display nodes with an SVG image.
 */
var SiriusSVGNodeView = /** @class */ (function (_super) {
    __extends(SiriusSVGNodeView, _super);
    function SiriusSVGNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Renders the given node in the context.
     * @param node The node
     * @param context The context
     */
    SiriusSVGNodeView.prototype.render = function (node, context) {
        var svgData = node.svgData;
        return (JSX.createElement("g", null,
            JSX.createElement("image", { x: "0", y: "0", href: "data:image/svg+xml;utf," + svgData, width: 30, height: 30 }),
            context.renderChildren(node)));
    };
    return SiriusSVGNodeView;
}(lib_1.RectangularNodeView));
exports.SiriusSVGNodeView = SiriusSVGNodeView;


/***/ }),
/* 306 */
/***/ (function(module, exports) {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "keygen": true,
  "link": true,
  "menuitem": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};


/***/ }),
/* 307 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 308 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 309 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(151);
__webpack_require__(152);
__webpack_require__(153);
__webpack_require__(154);
module.exports = __webpack_require__(155);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
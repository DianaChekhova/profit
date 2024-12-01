import {
  EnvironmentContextProvider,
  LocaleContextProvider,
  MAX_Z_INDEX,
  PresenceProvider,
  RenderStrategyPropsProvider,
  accordion_exports,
  addDomEvent,
  ark,
  avatar_exports,
  checkbox_exports,
  clickIfLink,
  collapsible_exports,
  color_picker_exports,
  compact,
  compact2,
  composeRefs,
  contains,
  createAnatomy,
  createContext,
  createListCollection,
  createMachine,
  createProps,
  createScope,
  createSplitProps,
  createSplitProps2,
  createSystem,
  cx,
  dataAttr,
  defaultBaseConfig,
  defaultConfig,
  defaultSystem,
  defineAnimationStyles,
  defineConditions,
  defineConfig,
  defineGlobalStyles,
  defineKeyframes,
  defineLayerStyles,
  defineRecipe,
  defineSemanticTokens,
  defineSlotRecipe,
  defineStyle,
  defineTextStyles,
  defineTokens,
  dialog_exports,
  editable_exports,
  field_exports,
  fieldset_exports,
  file_upload_exports,
  first,
  formatBytes,
  formatNumber,
  fromLength,
  getDocument,
  getEventKey,
  getFocusables,
  getWindow,
  guards,
  hover_card_exports,
  isComposingEvent,
  isCssVar,
  isEqual,
  isMachine,
  isRTL,
  isSafari,
  isSelfTarget,
  isShadowRoot,
  isValidSystem,
  itemById,
  last,
  mapObject,
  menu_exports,
  mergeConfigs,
  mergeProps,
  nextById,
  nextTick,
  normalizeProps,
  number_input_exports,
  parse,
  pin_input_exports,
  popover_exports,
  prevById,
  progress_exports,
  queryAll,
  radio_group_exports,
  raf,
  rating_group_exports,
  ref,
  require_jsx_runtime,
  runIfFn,
  segment_group_exports,
  select_exports,
  slider_exports,
  splitProps,
  splitRenderStrategyProps,
  subscribe,
  switch_exports,
  tooltip_exports,
  trackDismissableBranch,
  trackElementRect,
  useAccordion,
  useAccordionContext,
  useAccordionItemContext,
  useActor,
  useAvatar,
  useAvatarContext,
  useCheckbox,
  useCheckboxContext,
  useCheckboxGroup,
  useCheckboxGroupContext,
  useCollapsible,
  useCollapsibleContext,
  useColorPicker,
  useColorPickerContext,
  useControllableState,
  useDialog,
  useDialogContext,
  useEditable,
  useEditableContext,
  useEnvironmentContext,
  useEvent,
  useFieldContext,
  useFieldsetContext,
  useFileUpload,
  useFileUploadContext,
  useHoverCard,
  useHoverCardContext,
  useLocaleContext,
  useMachine,
  useMenu,
  useMenuContext,
  useMenuItemContext,
  useNumberInput,
  useNumberInputContext,
  usePinInput,
  usePinInputContext,
  usePopover,
  usePopoverContext,
  usePresence,
  useProgress,
  useProgressContext,
  useRadioGroup,
  useRadioGroupContext,
  useRadioGroupItemContext,
  useRatingGroup,
  useRatingGroupContext,
  useRatingGroupItemContext,
  useRenderStrategyPropsContext,
  useSegmentGroup,
  useSegmentGroupContext,
  useSegmentGroupItemContext,
  useSelect,
  useSelectContext,
  useSelectItemContext,
  useSlider,
  useSliderContext,
  useSwitch,
  useSwitchContext,
  useTooltip,
  useTooltipContext,
  uuid,
  warn
} from "./chunk-35GP23MF.js";
import {
  require_react_dom
} from "./chunk-YBFRUR3B.js";
import {
  __commonJS,
  __export,
  __toESM,
  require_react
} from "./chunk-JRE55LYH.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment13 = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal2 = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment13;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal2;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var require_hoist_non_react_statics_cjs = __commonJS({
  "node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(exports, module) {
    "use strict";
    var reactIs = require_react_is();
    var REACT_STATICS = {
      childContextTypes: true,
      contextType: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromError: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
    };
    var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
    };
    var FORWARD_REF_STATICS = {
      "$$typeof": true,
      render: true,
      defaultProps: true,
      displayName: true,
      propTypes: true
    };
    var MEMO_STATICS = {
      "$$typeof": true,
      compare: true,
      defaultProps: true,
      displayName: true,
      propTypes: true,
      type: true
    };
    var TYPE_STATICS = {};
    TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
    TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
    function getStatics(component) {
      if (reactIs.isMemo(component)) {
        return MEMO_STATICS;
      }
      return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
    }
    var defineProperty = Object.defineProperty;
    var getOwnPropertyNames = Object.getOwnPropertyNames;
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectPrototype = Object.prototype;
    function hoistNonReactStatics2(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== "string") {
        if (objectPrototype) {
          var inheritedComponent = getPrototypeOf(sourceComponent);
          if (inheritedComponent && inheritedComponent !== objectPrototype) {
            hoistNonReactStatics2(targetComponent, inheritedComponent, blacklist);
          }
        }
        var keys = getOwnPropertyNames(sourceComponent);
        if (getOwnPropertySymbols) {
          keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }
        var targetStatics = getStatics(targetComponent);
        var sourceStatics = getStatics(sourceComponent);
        for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
            var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
            try {
              defineProperty(targetComponent, key, descriptor);
            } catch (e) {
            }
          }
        }
      }
      return targetComponent;
    }
    module.exports = hoistNonReactStatics2;
  }
});

// node_modules/@chakra-ui/react/dist/esm/components/color-swatch/index.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var import_react9 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/styled-system/create-recipe-context.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var import_react7 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/create-context.js
var import_react = __toESM(require_react(), 1);
function getErrorMessage(hook, provider) {
  return `${hook} returned \`undefined\`. Seems you forgot to wrap component within ${provider}`;
}
function createContext2(options = {}) {
  const {
    name,
    strict = true,
    hookName = "useContext",
    providerName = "Provider",
    errorMessage,
    defaultValue
  } = options;
  const Context = (0, import_react.createContext)(defaultValue);
  Context.displayName = name;
  function useContext$1() {
    var _a;
    const context = (0, import_react.useContext)(Context);
    if (!context && strict) {
      const error = new Error(
        errorMessage ?? getErrorMessage(hookName, providerName)
      );
      error.name = "ContextError";
      (_a = Error.captureStackTrace) == null ? void 0 : _a.call(Error, error, useContext$1);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext$1, Context];
}

// node_modules/@chakra-ui/react/dist/esm/utils/call-all.js
function callAll(...fns) {
  return function mergedFn(...args) {
    fns.forEach((fn) => fn == null ? void 0 : fn(...args));
  };
}

// node_modules/@chakra-ui/react/dist/esm/merge-props.js
var clsx = (...args) => args.map((str) => {
  var _a;
  return (_a = str == null ? void 0 : str.trim) == null ? void 0 : _a.call(str);
}).filter(Boolean).join(" ");
var eventRegex = /^on[A-Z]/;
function mergeProps2(...args) {
  let result = {};
  for (let props5 of args) {
    for (let key in result) {
      if (eventRegex.test(key) && typeof result[key] === "function" && typeof props5[key] === "function") {
        result[key] = callAll(result[key], props5[key]);
        continue;
      }
      if (key === "className" || key === "class") {
        result[key] = clsx(result[key], props5[key]);
        continue;
      }
      if (key === "style") {
        result[key] = Object.assign({}, result[key] ?? {}, props5[key] ?? {});
        continue;
      }
      result[key] = props5[key] !== void 0 ? props5[key] : result[key];
    }
    for (let key in props5) {
      if (result[key] === void 0) {
        result[key] = props5[key];
      }
    }
  }
  return result;
}

// node_modules/@chakra-ui/react/dist/esm/styled-system/empty.js
var EMPTY_STYLES = Object.freeze({});
var EMPTY_SLOT_STYLES = Object.freeze(
  {}
);

// node_modules/@chakra-ui/react/dist/esm/styled-system/factory.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);

// node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache2 = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache2[arg] === void 0) cache2[arg] = fn(arg);
    return cache2[arg];
  };
}

// node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);

// node_modules/@emotion/react/dist/emotion-element-7a1343fa.browser.development.esm.js
var React2 = __toESM(require_react());
var import_react2 = __toESM(require_react());

// node_modules/@emotion/sheet/dist/emotion-sheet.development.esm.js
var isDevelopment = true;
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
  return void 0;
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? !isDevelopment : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    {
      var isImportRule3 = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;
      if (isImportRule3 && this._alreadyInsertedOrderInsensitiveRule) {
        console.error("You're attempting to insert the following rule:\n" + rule + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.");
      }
      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule3;
    }
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (!/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(rule)) {
          console.error('There was a problem inserting the following rule: "' + rule + '"', e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      var _tag$parentNode;
      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
    {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };
  return StyleSheet2;
}();

// node_modules/stylis/src/Enum.js
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";

// node_modules/stylis/src/Utility.js
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}

// node_modules/stylis/src/Tokenizer.js
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props5, children, length2) {
  return { value, root, parent, type, props: props5, children, line, column, length: length2, return: "" };
}
function copy(root, props5) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props5);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}

// node_modules/stylis/src/Parser.js
function compile(value) {
  return dealloc(parse2("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse2(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props5 = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props5 = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse2(characters2, root, reference, reference, props5, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse2(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props5 = [], length2), children), rules, children, length2, points, rule ? props5 : children);
                    break;
                  default:
                    parse2(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props5, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k = 0; i < index; ++i)
    for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x)
      if (z = trim(j > 0 ? rule[x] + " " + y : replace(y, /&\f/g, rule[x])))
        props5[k++] = z;
  return node(value, root, parent, offset === 0 ? RULESET : type, props5, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}

// node_modules/stylis/src/Serializer.js
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}

// node_modules/stylis/src/Middleware.js
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}

// node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize2(func) {
  var cache2 = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache2.has(arg)) {
      return cache2.get(arg);
    }
    var ret = func(arg);
    cache2.set(arg, ret);
    return ret;
  };
};

// node_modules/@emotion/cache/dist/emotion-cache.browser.development.esm.js
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent) return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
var ignoreFlag = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason";
var isIgnoringComment = function isIgnoringComment2(element) {
  return element.type === "comm" && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache2) {
  return function(element, index, children) {
    if (element.type !== "rule" || cache2.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses) {
      var isNested = !!element.parent;
      var commentContainer = isNested ? element.parent.children : (
        // global rule at the root level
        children
      );
      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node2 = commentContainer[i];
        if (node2.line < element.line) {
          break;
        }
        if (node2.column < element.column) {
          if (isIgnoringComment(node2)) {
            return;
          }
          break;
        }
      }
      unsafePseudoClasses.forEach(function(unsafePseudoClass) {
        console.error('The pseudo class "' + unsafePseudoClass + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + unsafePseudoClass.split("-child")[0] + '-of-type".');
      });
    }
  };
};
var isImportRule = function isImportRule2(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules2(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }
  return false;
};
var nullifyElement = function nullifyElement2(element) {
  element.type = "";
  element.value = "";
  element["return"] = "";
  element.children = "";
  element.props = "";
};
var incorrectImportAlarm = function incorrectImportAlarm2(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};
function prefix2(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6) switch (charat(value, length2 + 1)) {
        case 109:
          if (charat(value, length2 + 4) !== 45) break;
        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
        case 115:
          return ~indexof(value, "stretch") ? prefix2(replace(value, "stretch", "fill-available"), length2) + value : value;
      }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115) break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index, children, callback) {
  if (element.length > -1) {
    if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix2(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, "@", "@" + WEBKIT)
        })], callback);
      case RULESET:
        if (element.length) return combine(element.props, function(value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
              })], callback);
            case "::placeholder":
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
              })], callback);
          }
          return "";
        });
    }
  }
};
var defaultStylisPlugins = [prefixer];
var getSourceMap;
{
  sourceMapPattern2 = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
  getSourceMap = function getSourceMap2(styles) {
    var matches = styles.match(sourceMapPattern2);
    if (!matches) return;
    return matches[matches.length - 1];
  };
}
var sourceMapPattern2;
var createCache = function createCache2(options) {
  var key = options.key;
  if (!key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements.");
  }
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  {
    if (/[^a-z-]/.test(key)) {
      throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed');
    }
  }
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache2.compat;
      }
    }), incorrectImportAlarm);
  }
  {
    var currentSheet;
    var finalizingPlugins = [stringify, function(element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== COMMENT) {
          currentSheet.insert(element.value + "{}");
        }
      }
    }];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      {
        var sourceMap = getSourceMap(serialized.styles);
        if (sourceMap) {
          currentSheet = {
            insert: function insert2(rule) {
              sheet.insert(rule + sourceMap);
            }
          };
        }
      }
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache2.inserted[serialized.name] = true;
      }
    };
  }
  var cache2 = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache2.sheet.hydrate(nodesToHydrate);
  return cache2;
};

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js
var import_hoist_non_react_statics = __toESM(require_hoist_non_react_statics_cjs());

// node_modules/@emotion/react/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache2, serialized, isStringTag) {
  var className = cache2.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache2.registered[className] === void 0
  ) {
    cache2.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache2, serialized, isStringTag) {
  registerStyles(cache2, serialized, isStringTag);
  var className = cache2.key + "-" + serialized.name;
  if (cache2.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache2.insert(serialized === current ? "." + className : "", current, cache2.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};

// node_modules/@emotion/hash/dist/emotion-hash.esm.js
function murmur2(str) {
  var h = 0;
  var k, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16);
    k ^= /* k >>> r: */
    k >>> 24;
    h = /* Math.imul(k, m): */
    (k & 65535) * 1540483477 + ((k >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h ^= str.charCodeAt(i) & 255;
      h = /* Math.imul(h, m): */
      (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  }
  h ^= h >>> 13;
  h = /* Math.imul(h, m): */
  (h & 65535) * 1540483477 + ((h >>> 16) * 59797 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

// node_modules/@emotion/unitless/dist/emotion-unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

// node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js
var isDevelopment2 = true;
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
{
  contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  contentValues = ["normal", "none", "initial", "inherit", "unset"];
  oldProcessStyleValue = processStyleValue;
  msPattern = /^-ms-/;
  hyphenPattern = /-(.)/g;
  hyphenatedCache = {};
  processStyleValue = function processStyleValue5(key, value) {
    if (key === "content") {
      if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== "" && !isCustomProperty(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var contentValuePattern;
var contentValues;
var oldProcessStyleValue;
var msPattern;
var hyphenPattern;
var hyphenatedCache;
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== void 0) {
    if (String(componentSelector) === "NO_COMPONENT_SELECTOR") {
      throw new Error(noComponentSelectorMessage);
    }
    return componentSelector;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      var keyframes = interpolation;
      if (keyframes.anim === 1) {
        cursor = {
          name: keyframes.name,
          styles: keyframes.styles,
          next: cursor
        };
        return keyframes.name;
      }
      var serializedStyles = interpolation;
      if (serializedStyles.styles !== void 0) {
        var next2 = serializedStyles.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles = serializedStyles.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      } else {
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      }
      break;
    }
    case "string":
      {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function(_match, _p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\ncss`" + replaced + "`");
        }
      }
      break;
  }
  var asString = interpolation;
  if (registered == null) {
    return asString;
  }
  var cached = registered[asString];
  return cached !== void 0 ? cached : asString;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value !== "object") {
        var asString = value;
        if (registered != null && registered[asString] !== void 0) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === "NO_COMPONENT_SELECTOR" && isDevelopment2) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (key) {
            case "animation":
            case "animationName": {
              string += processStyleName(key) + ":" + interpolated + ";";
              break;
            }
            default: {
              if (key === "undefined") {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
              }
              string += key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;{]+)\s*(;|$)/g;
var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    if (asTemplateStringsArr[0] === void 0) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles += asTemplateStringsArr[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      var templateStringsArr = strings;
      if (templateStringsArr[i] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += templateStringsArr[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = murmur2(styles) + identifierName;
  {
    var devStyles = {
      name,
      styles,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return devStyles;
  }
}

// node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
var React = __toESM(require_react());
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect2 = React["useInsertionEffect"] ? React["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect2 || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect2 || React.useLayoutEffect;

// node_modules/@emotion/react/dist/emotion-element-7a1343fa.browser.development.esm.js
var EmotionCacheContext = React2.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== "undefined" ? createCache({
    key: "css"
  }) : null
);
{
  EmotionCacheContext.displayName = "EmotionCacheContext";
}
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return (0, import_react2.forwardRef)(function(props5, ref2) {
    var cache2 = (0, import_react2.useContext)(EmotionCacheContext);
    return func(props5, cache2, ref2);
  });
};
var ThemeContext = React2.createContext({});
{
  ThemeContext.displayName = "EmotionThemeContext";
}
var getTheme = function getTheme2(outerTheme, theme) {
  if (typeof theme === "function") {
    var mergedTheme = theme(outerTheme);
    if (mergedTheme == null || typeof mergedTheme !== "object" || Array.isArray(mergedTheme)) {
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    }
    return mergedTheme;
  }
  if (theme == null || typeof theme !== "object" || Array.isArray(theme)) {
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  }
  return _extends({}, outerTheme, theme);
};
var createCacheWithTheme = weakMemoize(function(outerTheme) {
  return weakMemoize(function(theme) {
    return getTheme(outerTheme, theme);
  });
});
var hasOwn = {}.hasOwnProperty;
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var labelPropName = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__";
var Insertion = function Insertion2(_ref) {
  var cache2 = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache2, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache2, serialized, isStringTag);
  });
  return null;
};
var Emotion = withEmotionCache(
  /* <any, any> */
  function(props5, cache2, ref2) {
    var cssProp = props5.css;
    if (typeof cssProp === "string" && cache2.registered[cssProp] !== void 0) {
      cssProp = cache2.registered[cssProp];
    }
    var WrappedComponent = props5[typePropName];
    var registeredStyles = [cssProp];
    var className = "";
    if (typeof props5.className === "string") {
      className = getRegisteredStyles(cache2.registered, registeredStyles, props5.className);
    } else if (props5.className != null) {
      className = props5.className + " ";
    }
    var serialized = serializeStyles(registeredStyles, void 0, React2.useContext(ThemeContext));
    if (serialized.name.indexOf("-") === -1) {
      var labelFromStack = props5[labelPropName];
      if (labelFromStack) {
        serialized = serializeStyles([serialized, "label:" + labelFromStack + ";"]);
      }
    }
    className += cache2.key + "-" + serialized.name;
    var newProps = {};
    for (var key in props5) {
      if (hasOwn.call(props5, key) && key !== "css" && key !== typePropName && key !== labelPropName) {
        newProps[key] = props5[key];
      }
    }
    newProps.className = className;
    if (ref2) {
      newProps.ref = ref2;
    }
    return React2.createElement(React2.Fragment, null, React2.createElement(Insertion, {
      cache: cache2,
      serialized,
      isStringTag: typeof WrappedComponent === "string"
    }), React2.createElement(WrappedComponent, newProps));
  }
);
{
  Emotion.displayName = "EmotionCssPropInternal";
}

// node_modules/@emotion/react/dist/emotion-react.browser.development.esm.js
var React3 = __toESM(require_react());
var import_hoist_non_react_statics2 = __toESM(require_hoist_non_react_statics_cjs());
var isDevelopment3 = true;
var pkg = {
  name: "@emotion/react",
  version: "11.13.5",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  exports: {
    ".": {
      types: {
        "import": "./dist/emotion-react.cjs.mjs",
        "default": "./dist/emotion-react.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./dist/emotion-react.development.edge-light.esm.js",
          "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
          "default": "./dist/emotion-react.development.edge-light.cjs.js"
        },
        worker: {
          module: "./dist/emotion-react.development.edge-light.esm.js",
          "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
          "default": "./dist/emotion-react.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./dist/emotion-react.development.edge-light.esm.js",
          "import": "./dist/emotion-react.development.edge-light.cjs.mjs",
          "default": "./dist/emotion-react.development.edge-light.cjs.js"
        },
        browser: {
          module: "./dist/emotion-react.browser.development.esm.js",
          "import": "./dist/emotion-react.browser.development.cjs.mjs",
          "default": "./dist/emotion-react.browser.development.cjs.js"
        },
        module: "./dist/emotion-react.development.esm.js",
        "import": "./dist/emotion-react.development.cjs.mjs",
        "default": "./dist/emotion-react.development.cjs.js"
      },
      "edge-light": {
        module: "./dist/emotion-react.edge-light.esm.js",
        "import": "./dist/emotion-react.edge-light.cjs.mjs",
        "default": "./dist/emotion-react.edge-light.cjs.js"
      },
      worker: {
        module: "./dist/emotion-react.edge-light.esm.js",
        "import": "./dist/emotion-react.edge-light.cjs.mjs",
        "default": "./dist/emotion-react.edge-light.cjs.js"
      },
      workerd: {
        module: "./dist/emotion-react.edge-light.esm.js",
        "import": "./dist/emotion-react.edge-light.cjs.mjs",
        "default": "./dist/emotion-react.edge-light.cjs.js"
      },
      browser: {
        module: "./dist/emotion-react.browser.esm.js",
        "import": "./dist/emotion-react.browser.cjs.mjs",
        "default": "./dist/emotion-react.browser.cjs.js"
      },
      module: "./dist/emotion-react.esm.js",
      "import": "./dist/emotion-react.cjs.mjs",
      "default": "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      types: {
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
        },
        worker: {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.edge-light.cjs.js"
        },
        browser: {
          module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.esm.js",
          "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.mjs",
          "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.development.cjs.js"
        },
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.development.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.development.cjs.js"
      },
      "edge-light": {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
      },
      worker: {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
      },
      workerd: {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.edge-light.cjs.js"
      },
      browser: {
        module: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.mjs",
        "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.cjs.js"
      },
      module: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js",
      "import": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      "default": "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      types: {
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
        },
        worker: {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.edge-light.cjs.js"
        },
        browser: {
          module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.esm.js",
          "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.mjs",
          "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.development.cjs.js"
        },
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.development.cjs.js"
      },
      "edge-light": {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
      },
      worker: {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
      },
      workerd: {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.edge-light.cjs.js"
      },
      browser: {
        module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.mjs",
        "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.cjs.js"
      },
      module: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js",
      "import": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      "default": "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      types: {
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
      },
      development: {
        "edge-light": {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
        },
        worker: {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
        },
        workerd: {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.edge-light.cjs.js"
        },
        browser: {
          module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.esm.js",
          "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.mjs",
          "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.development.cjs.js"
        },
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.development.cjs.js"
      },
      "edge-light": {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
      },
      worker: {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
      },
      workerd: {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.edge-light.cjs.js"
      },
      browser: {
        module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.mjs",
        "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.cjs.js"
      },
      module: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js",
      "import": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      "default": "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        "import": "./macro.d.mts",
        "default": "./macro.d.ts"
      },
      "default": "./macro.js"
    }
  },
  imports: {
    "#is-development": {
      development: "./src/conditions/true.js",
      "default": "./src/conditions/false.js"
    },
    "#is-browser": {
      "edge-light": "./src/conditions/false.js",
      workerd: "./src/conditions/false.js",
      worker: "./src/conditions/false.js",
      browser: "./src/conditions/true.js",
      "default": "./src/conditions/is-browser.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: false,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.13.5",
    "@emotion/cache": "^11.13.5",
    "@emotion/serialize": "^1.3.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.1.0",
    "@emotion/utils": "^1.4.2",
    "@emotion/weak-memoize": "^0.4.0",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.13.5",
    "@emotion/css-prettifier": "1.1.4",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.13.5",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^5.4.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            "import": "./macro.d.mts",
            "default": "./macro.d.ts"
          },
          "default": "./macro.js"
        }
      }
    }
  }
};
var warnedAboutCssPropForGlobal = false;
var Global = withEmotionCache(function(props5, cache2) {
  if (!warnedAboutCssPropForGlobal && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // I don't really want to add it to the type since it shouldn't be used
  (props5.className || props5.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }
  var styles = props5.styles;
  var serialized = serializeStyles([styles], void 0, React3.useContext(ThemeContext));
  var sheetRef = React3.useRef();
  useInsertionEffectWithLayoutFallback(function() {
    var key = cache2.key + "-global";
    var sheet = new cache2.sheet.constructor({
      key,
      nonce: cache2.sheet.nonce,
      container: cache2.sheet.container,
      speedy: cache2.sheet.isSpeedy
    });
    var rehydrating = false;
    var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache2.sheet.tags.length) {
      sheet.before = cache2.sheet.tags[0];
    }
    if (node2 !== null) {
      rehydrating = true;
      node2.setAttribute("data-emotion", key);
      sheet.hydrate([node2]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache2]);
  useInsertionEffectWithLayoutFallback(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache2, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache2.insert("", serialized, sheet, false);
  }, [cache2, serialized.name]);
  return null;
});
{
  Global.displayName = "EmotionGlobal";
}
var classnames = function classnames2(args) {
  var len = args.length;
  var i = 0;
  var cls = "";
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case "boolean":
        break;
      case "object": {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          if (arg.styles !== void 0 && arg.name !== void 0) {
            console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.");
          }
          toAdd = "";
          for (var k in arg) {
            if (arg[k] && k) {
              toAdd && (toAdd += " ");
              toAdd += k;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += " ");
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css(registeredStyles);
}
var Insertion3 = function Insertion4(_ref) {
  var cache2 = _ref.cache, serializedArr = _ref.serializedArr;
  useInsertionEffectAlwaysWithSyncFallback(function() {
    for (var i = 0; i < serializedArr.length; i++) {
      insertStyles(cache2, serializedArr[i], false);
    }
  });
  return null;
};
var ClassNames = withEmotionCache(function(props5, cache2) {
  var hasRendered = false;
  var serializedArr = [];
  var css = function css2() {
    if (hasRendered && isDevelopment3) {
      throw new Error("css can only be used during render");
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles(args, cache2.registered);
    serializedArr.push(serialized);
    registerStyles(cache2, serialized, false);
    return cache2.key + "-" + serialized.name;
  };
  var cx2 = function cx3() {
    if (hasRendered && isDevelopment3) {
      throw new Error("cx can only be used during render");
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache2.registered, css, classnames(args));
  };
  var content = {
    css,
    cx: cx2,
    theme: React3.useContext(ThemeContext)
  };
  var ele = props5.children(content);
  hasRendered = true;
  return React3.createElement(React3.Fragment, null, React3.createElement(Insertion3, {
    cache: cache2,
    serializedArr
  }), ele);
});
{
  ClassNames.displayName = "EmotionClassNames";
}
{
  isBrowser4 = typeof document !== "undefined";
  isTestEnv = typeof jest !== "undefined" || typeof vi !== "undefined";
  if (isBrowser4 && !isTestEnv) {
    globalContext = // $FlowIgnore
    typeof globalThis !== "undefined" ? globalThis : isBrowser4 ? window : global;
    globalKey = "__EMOTION_REACT_" + pkg.version.split(".")[0] + "__";
    if (globalContext[globalKey]) {
      console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.");
    }
    globalContext[globalKey] = true;
  }
}
var isBrowser4;
var isTestEnv;
var globalContext;
var globalKey;

// node_modules/@chakra-ui/react/node_modules/@emotion/serialize/dist/emotion-serialize.development.esm.js
var isDevelopment4 = true;
var ILLEGAL_ESCAPE_SEQUENCE_ERROR2 = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var UNDEFINED_AS_OBJECT_KEY_ERROR2 = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex2 = /[A-Z]|^ms/g;
var animationRegex2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty3 = function isCustomProperty4(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue3 = function isProcessableValue4(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName2 = memoize(function(styleName) {
  return isCustomProperty3(styleName) ? styleName : styleName.replace(hyphenateRegex2, "-$&").toLowerCase();
});
var processStyleValue3 = function processStyleValue4(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex2, function(match2, p1, p2) {
          cursor2 = {
            name: p1,
            styles: p2,
            next: cursor2
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty3(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
{
  contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  contentValues = ["normal", "none", "initial", "inherit", "unset"];
  oldProcessStyleValue = processStyleValue3;
  msPattern = /^-ms-/;
  hyphenPattern = /-(.)/g;
  hyphenatedCache = {};
  processStyleValue3 = function processStyleValue5(key, value) {
    if (key === "content") {
      if (typeof value !== "string" || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== "" && !isCustomProperty3(key) && key.indexOf("-") !== -1 && hyphenatedCache[key] === void 0) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, "ms-").replace(hyphenPattern, function(str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }
    return processed;
  };
}
var contentValuePattern;
var contentValues;
var oldProcessStyleValue;
var msPattern;
var hyphenPattern;
var hyphenatedCache;
var noComponentSelectorMessage2 = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation2(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== void 0) {
    if (String(componentSelector) === "NO_COMPONENT_SELECTOR") {
      throw new Error(noComponentSelectorMessage2);
    }
    return componentSelector;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      var keyframes = interpolation;
      if (keyframes.anim === 1) {
        cursor2 = {
          name: keyframes.name,
          styles: keyframes.styles,
          next: cursor2
        };
        return keyframes.name;
      }
      var serializedStyles = interpolation;
      if (serializedStyles.styles !== void 0) {
        var next2 = serializedStyles.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor2 = {
              name: next2.name,
              styles: next2.styles,
              next: cursor2
            };
            next2 = next2.next;
          }
        }
        var styles = serializedStyles.styles + ";";
        if (serializedStyles.map !== void 0) {
          styles += serializedStyles.map;
        }
        return styles;
      }
      return createStringFromObject2(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor2;
        var result = interpolation(mergedProps);
        cursor2 = previousCursor;
        return handleInterpolation2(mergedProps, registered, result);
      } else {
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      }
      break;
    }
    case "string":
      {
        var matched = [];
        var replaced = interpolation.replace(animationRegex2, function(_match, _p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, "") + "`");
          return "${" + fakeVarName + "}";
        });
        if (matched.length) {
          console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(matched, ["`" + replaced + "`"]).join("\n") + "\n\nYou should wrap it with `css` like this:\n\ncss`" + replaced + "`");
        }
      }
      break;
  }
  var asString = interpolation;
  if (registered == null) {
    return asString;
  }
  var cached = registered[asString];
  return cached !== void 0 ? cached : asString;
}
function createStringFromObject2(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation2(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value !== "object") {
        var asString = value;
        if (registered != null && registered[asString] !== void 0) {
          string += key + "{" + registered[asString] + "}";
        } else if (isProcessableValue3(asString)) {
          string += processStyleName2(key) + ":" + processStyleValue3(key, asString) + ";";
        }
      } else {
        if (key === "NO_COMPONENT_SELECTOR" && isDevelopment4) {
          throw new Error(noComponentSelectorMessage2);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue3(value[_i])) {
              string += processStyleName2(key) + ":" + processStyleValue3(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation2(mergedProps, registered, value);
          switch (key) {
            case "animation":
            case "animationName": {
              string += processStyleName2(key) + ":" + interpolated + ";";
              break;
            }
            default: {
              if (key === "undefined") {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR2);
              }
              string += key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern2 = /label:\s*([^\s;{]+)\s*(;|$)/g;
var sourceMapPattern;
{
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
}
var cursor2;
function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor2 = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation2(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    if (asTemplateStringsArr[0] === void 0) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
    }
    styles += asTemplateStringsArr[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation2(mergedProps, registered, args[i]);
    if (stringMode) {
      var templateStringsArr = strings;
      if (templateStringsArr[i] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR2);
      }
      styles += templateStringsArr[i];
    }
  }
  var sourceMap;
  {
    styles = styles.replace(sourceMapPattern, function(match3) {
      sourceMap = match3;
      return "";
    });
  }
  labelPattern2.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern2.exec(styles)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = murmur2(styles) + identifierName;
  {
    var devStyles = {
      name,
      styles,
      map: sourceMap,
      next: cursor2,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return devStyles;
  }
}

// node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js
var isBrowser2 = true;
function getRegisteredStyles2(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else if (className) {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles3 = function registerStyles4(cache2, serialized, isStringTag) {
  var className = cache2.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser2 === false) && cache2.registered[className] === void 0
  ) {
    cache2.registered[className] = serialized.styles;
  }
};
var insertStyles3 = function insertStyles4(cache2, serialized, isStringTag) {
  registerStyles3(cache2, serialized, isStringTag);
  var className = cache2.key + "-" + serialized.name;
  if (cache2.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache2.insert(serialized === current ? "." + className : "", current, cache2.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};

// node_modules/@chakra-ui/react/dist/esm/styled-system/factory.js
var React4 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/merge-refs.js
function assignRef(ref2, value) {
  if (ref2 == null) return;
  if (typeof ref2 === "function") {
    ref2(value);
    return;
  }
  try {
    ref2.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref2}'`);
  }
}
function mergeRefs(...refs) {
  return (node2) => {
    refs.forEach((ref2) => {
      assignRef(ref2, node2);
    });
  };
}

// node_modules/@chakra-ui/react/dist/esm/utils/interop.js
function interopDefault(mod) {
  return mod.default || mod;
}

// node_modules/@chakra-ui/react/dist/esm/styled-system/provider.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var [ChakraContextProvider, useChakraContext] = createContext2({
  name: "ChakraContext",
  strict: true,
  providerName: "<ChakraProvider />"
});
function ChakraProvider(props5) {
  const { value: sys, children } = props5;
  return (0, import_jsx_runtime.jsxs)(ChakraContextProvider, { value: sys, children: [
    !sys._config.disableLayers && (0, import_jsx_runtime.jsx)(Global, { styles: sys.layers.atRule }),
    (0, import_jsx_runtime.jsx)(
      Global,
      {
        styles: [sys.getPreflightCss(), sys.getGlobalCss(), sys.getTokenCss()]
      }
    ),
    children
  ] });
}

// node_modules/@chakra-ui/react/dist/esm/styled-system/use-resolved-props.js
var import_react4 = __toESM(require_react(), 1);
function useResolvedProps(inProps, cvaRecipe, shouldForwardProps) {
  const { css, isValidProperty } = useChakraContext();
  const { children, ...props5 } = inProps;
  const result = (0, import_react4.useMemo)(() => {
    const [htmlProps, restProps_A] = splitProps(props5, [
      "htmlWidth",
      "htmlHeight",
      "htmlSize",
      "htmlTranslate"
    ]);
    const [forwardedProps, restProps_B] = splitProps(
      restProps_A,
      (key) => shouldForwardProps(key, cvaRecipe.variantKeys)
    );
    const [variantProps, restProps_C] = splitProps(
      restProps_B,
      cvaRecipe.variantKeys
    );
    const [styleProps, elementProps] = splitProps(restProps_C, isValidProperty);
    return {
      htmlProps: getHtmlProps(htmlProps),
      forwardedProps,
      variantProps,
      styleProps,
      elementProps
    };
  }, [cvaRecipe.variantKeys, shouldForwardProps, props5, isValidProperty]);
  const { css: cssStyles, ...propStyles } = result.styleProps;
  const cvaStyles = (0, import_react4.useMemo)(
    () => cvaRecipe(result.variantProps),
    [cvaRecipe, result.variantProps]
  );
  const styles = (0, import_react4.useMemo)(() => {
    return css(cvaStyles, ...toArray(cssStyles), propStyles);
  }, [css, cvaStyles, cssStyles, propStyles]);
  return {
    styles,
    props: {
      ...result.forwardedProps,
      ...result.elementProps,
      ...result.htmlProps,
      children
    }
  };
}
var getHtmlProps = (props5) => {
  const htmlProps = {};
  for (const key in props5) {
    if (key.startsWith("html")) {
      htmlProps[key.replace("html", "").toLowerCase()] = props5[key];
    }
  }
  return htmlProps;
};
var toArray = (val) => {
  const res = Array.isArray(val) ? val : [val];
  return res.filter(Boolean).flat();
};

// node_modules/@chakra-ui/react/dist/esm/styled-system/factory.js
var isPropValid2 = interopDefault(isPropValid);
var testOmitPropsOnStringTag = isPropValid2;
var testOmitPropsOnComponent = (key) => key !== "theme";
var composeShouldForwardProps = (tag, options, isReal) => {
  let shouldForwardProp;
  if (options) {
    const optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp = tag.__emotion_forwardProp && optionsShouldForwardProp ? (propName) => tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName) : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp !== "function" && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }
  return shouldForwardProp;
};
var isBrowser3 = typeof document !== "undefined";
var Insertion5 = ({ cache: cache2, serialized, isStringTag }) => {
  registerStyles3(cache2, serialized, isStringTag);
  const rules = useInsertionEffectAlwaysWithSyncFallback(
    () => insertStyles3(cache2, serialized, isStringTag)
  );
  if (!isBrowser3 && rules !== void 0) {
    let serializedNames = serialized.name;
    let next2 = serialized.next;
    while (next2 !== void 0) {
      serializedNames = cx(serializedNames, next2.name);
      next2 = next2.next;
    }
    return (0, import_jsx_runtime2.jsx)(
      "style",
      {
        ...{
          [`data-emotion`]: cx(cache2.key, serializedNames),
          dangerouslySetInnerHTML: { __html: rules },
          nonce: cache2.sheet.nonce
        }
      }
    );
  }
  return null;
};
var createStyled = (tag, configOrCva = {}, options = {}) => {
  if (true) {
    if (tag === void 0) {
      throw new Error(
        "You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it."
      );
    }
  }
  const isReal = tag.__emotion_real === tag;
  const baseTag = isReal && tag.__emotion_base || tag;
  let identifierName;
  let targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  let styles = [];
  const Styled = withEmotionCache((inProps, cache2, ref2) => {
    var _a;
    const { cva, isValidProperty } = useChakraContext();
    const cvaFn = configOrCva.__cva__ ? configOrCva : cva(configOrCva);
    const cvaRecipe = mergeCva(tag.__emotion_cva, cvaFn);
    const createShouldForwardProps = (props22) => {
      return (prop, variantKeys) => {
        if (props22.includes(prop)) return true;
        return !(variantKeys == null ? void 0 : variantKeys.includes(prop)) && !isValidProperty(prop);
      };
    };
    if (!options.shouldForwardProp && options.forwardProps) {
      options.shouldForwardProp = createShouldForwardProps(options.forwardProps);
    }
    const fallbackShouldForwardProp = (prop, variantKeys) => {
      const emotionSfp = typeof tag === "string" && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
      const chakraSfp = !(variantKeys == null ? void 0 : variantKeys.includes(prop)) && !isValidProperty(prop);
      return emotionSfp(prop) && chakraSfp;
    };
    const shouldForwardProp = composeShouldForwardProps(tag, options, isReal) || fallbackShouldForwardProp;
    const propsWithDefault = React4.useMemo(
      () => Object.assign({}, options.defaultProps, compact(inProps)),
      [inProps]
    );
    const { props: props5, styles: styleProps } = useResolvedProps(
      propsWithDefault,
      cvaRecipe,
      shouldForwardProp
    );
    let className = "";
    let classInterpolations = [styleProps];
    let mergedProps = props5;
    if (props5.theme == null) {
      mergedProps = {};
      for (let key in props5) {
        mergedProps[key] = props5[key];
      }
      mergedProps.theme = React4.useContext(ThemeContext);
    }
    if (typeof props5.className === "string") {
      className = getRegisteredStyles2(
        cache2.registered,
        classInterpolations,
        props5.className
      );
    } else if (props5.className != null) {
      className = cx(className, props5.className);
    }
    const serialized = serializeStyles2(
      styles.concat(classInterpolations),
      cache2.registered,
      mergedProps
    );
    className = cx(className, `${cache2.key}-${serialized.name}`);
    if (targetClassName !== void 0) {
      className = cx(className, targetClassName);
    }
    const shouldUseAs = !shouldForwardProp("as");
    let FinalTag = shouldUseAs && props5.as || baseTag;
    let newProps = {};
    for (let prop in props5) {
      if (shouldUseAs && prop === "as") continue;
      if (shouldForwardProp(prop)) {
        newProps[prop] = props5[prop];
      }
    }
    newProps.className = className.trim();
    newProps.ref = ref2;
    const forwardAsChild = options.forwardAsChild || ((_a = options.forwardProps) == null ? void 0 : _a.includes("asChild"));
    if (props5.asChild && !forwardAsChild) {
      const child = React4.Children.only(props5.children);
      FinalTag = child.type;
      newProps.children = null;
      newProps = mergeProps2(newProps, child.props);
      newProps.ref = mergeRefs(ref2, child.ref);
    }
    if (newProps.as && forwardAsChild) {
      newProps.as = void 0;
      return (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
        (0, import_jsx_runtime2.jsx)(
          Insertion5,
          {
            cache: cache2,
            serialized,
            isStringTag: typeof FinalTag === "string"
          }
        ),
        (0, import_jsx_runtime2.jsx)(FinalTag, { asChild: true, ...newProps, children: (0, import_jsx_runtime2.jsx)(props5.as, { children: newProps.children }) })
      ] });
    }
    return (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      (0, import_jsx_runtime2.jsx)(
        Insertion5,
        {
          cache: cache2,
          serialized,
          isStringTag: typeof FinalTag === "string"
        }
      ),
      (0, import_jsx_runtime2.jsx)(FinalTag, { ...newProps })
    ] });
  });
  Styled.displayName = identifierName !== void 0 ? identifierName : `Styled(${typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component"})`;
  Styled.__emotion_real = Styled;
  Styled.__emotion_base = baseTag;
  Styled.__emotion_forwardProp = options.shouldForwardProp;
  Styled.__emotion_cva = configOrCva;
  Object.defineProperty(Styled, "toString", {
    value() {
      if (targetClassName === void 0 && true) {
        return "NO_COMPONENT_SELECTOR";
      }
      return `.${targetClassName}`;
    }
  });
  return Styled;
};
var styledFn = createStyled.bind();
var cache = /* @__PURE__ */ new Map();
var chakraImpl = new Proxy(styledFn, {
  apply(_, __, args) {
    return styledFn(...args);
  },
  get(_, el) {
    if (!cache.has(el)) {
      cache.set(el, styledFn(el));
    }
    return cache.get(el);
  }
});
var chakra = chakraImpl;
var mergeCva = (cvaA, cvaB) => {
  if (cvaA && !cvaB) return cvaA;
  if (!cvaA && cvaB) return cvaB;
  return cvaA.merge(cvaB);
};

// node_modules/@chakra-ui/react/dist/esm/styled-system/use-recipe.js
var import_react6 = __toESM(require_react(), 1);
function useRecipe(options) {
  const { key, recipe: recipeProp } = options;
  const sys = useChakraContext();
  return (0, import_react6.useMemo)(() => {
    const recipe = recipeProp || (key != null ? sys.getRecipe(key) : {});
    return sys.cva(structuredClone(recipe));
  }, [key, recipeProp, sys]);
}

// node_modules/@chakra-ui/react/dist/esm/styled-system/create-recipe-context.js
var upperFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);
function createRecipeContext(options) {
  const { key: recipeKey, recipe: recipeConfig } = options;
  const contextName = upperFirst(
    recipeKey || recipeConfig.className || "Component"
  );
  const [PropsProvider60, usePropsContext] = createContext2({
    strict: false,
    name: `${contextName}PropsContext`,
    providerName: `${contextName}PropsContext`
  });
  function useRecipeResult3(props5) {
    const { unstyled, ...restProps } = props5;
    const recipe = useRecipe({
      key: recipeKey,
      recipe: restProps.recipe || recipeConfig
    });
    const [variantProps, otherProps] = recipe.splitVariantProps(restProps);
    const styles = unstyled ? EMPTY_STYLES : recipe(variantProps);
    return {
      styles,
      className: recipe.className,
      props: otherProps
    };
  }
  const withContext62 = (Component, options2) => {
    const SuperComponent = chakra(Component, {}, options2);
    const StyledComponent = (0, import_react7.forwardRef)((inProps, ref2) => {
      const props5 = mergeProps2(usePropsContext(), inProps);
      const { styles, className, props: localProps } = useRecipeResult3(props5);
      return (0, import_jsx_runtime3.jsx)(
        SuperComponent,
        {
          ...localProps,
          ref: ref2,
          css: [styles, props5.css],
          className: cx(className, props5.className)
        }
      );
    });
    StyledComponent.displayName = Component.displayName || Component.name;
    return StyledComponent;
  };
  function withPropsProvider2() {
    return PropsProvider60;
  }
  return {
    withContext: withContext62,
    PropsProvider: PropsProvider60,
    withPropsProvider: withPropsProvider2,
    usePropsContext,
    useRecipeResult: useRecipeResult3
  };
}

// node_modules/@chakra-ui/react/dist/esm/components/grid/grid.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var import_react8 = __toESM(require_react(), 1);
var Grid = (0, import_react8.forwardRef)(
  function Grid2(props5, ref2) {
    const {
      templateAreas,
      column: column2,
      row,
      autoFlow,
      autoRows,
      templateRows,
      autoColumns,
      templateColumns,
      inline,
      ...rest
    } = props5;
    return (0, import_jsx_runtime4.jsx)(
      chakra.div,
      {
        ...rest,
        ref: ref2,
        css: [
          {
            display: inline ? "inline-grid" : "grid",
            gridTemplateAreas: templateAreas,
            gridAutoColumns: autoColumns,
            gridColumn: column2,
            gridRow: row,
            gridAutoFlow: autoFlow,
            gridAutoRows: autoRows,
            gridTemplateRows: templateRows,
            gridTemplateColumns: templateColumns
          },
          props5.css
        ]
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/color-swatch/index.js
var { withPropsProvider, useRecipeResult } = createRecipeContext({
  key: "colorSwatch"
});
var ColorSwatch = (0, import_react9.forwardRef)(
  function ColorSwatch2(props5, ref2) {
    const { value, ...restProps } = props5;
    const { styles, className, props: localProps } = useRecipeResult(restProps);
    return (0, import_jsx_runtime5.jsx)(
      chakra.span,
      {
        ...localProps,
        ref: ref2,
        "data-value": value,
        css: [styles, { "--color": value }, props5.css],
        className: cx(className, props5.className)
      }
    );
  }
);
var ColorSwatchPropsProvider = withPropsProvider();
var ColorSwatchMix = (props5) => {
  const { items, ...restProps } = props5;
  if (items.length > 4) {
    throw new Error("ColorSwatchMix doesn't support more than 4 colors");
  }
  const isThreeColors = items.length === 3;
  return (0, import_jsx_runtime5.jsx)(ColorSwatch, { overflow: "hidden", ...restProps, value: "transparent", children: (0, import_jsx_runtime5.jsx)(Grid, { templateColumns: "var(--swatch-size) var(--swatch-size)", children: items.map((item, index) => {
    const isLast = index === items.length - 1;
    return (0, import_jsx_runtime5.jsx)(
      ColorSwatch,
      {
        size: "inherit",
        rounded: "none",
        value: item,
        boxShadow: "none",
        gridColumn: isThreeColors && isLast ? "span 2 / span 2" : void 0,
        width: isThreeColors && isLast ? "unset" : void 0
      },
      item
    );
  }) }) });
};

// node_modules/@ark-ui/react/dist/components/format/format-byte.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var import_react10 = __toESM(require_react(), 1);
var FormatByte = (props5) => {
  const { value, ...intlOptions } = props5;
  const { locale } = useLocaleContext();
  const text = (0, import_react10.useMemo)(() => formatBytes(value, locale, intlOptions), [value, locale, intlOptions]);
  return (0, import_jsx_runtime6.jsx)(import_jsx_runtime6.Fragment, { children: text });
};
FormatByte.displayName = "FormatByte";

// node_modules/@ark-ui/react/dist/components/format/format-number.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var import_react11 = __toESM(require_react(), 1);
var FormatNumber = (props5) => {
  const { value, ...intlOptions } = props5;
  const { locale } = useLocaleContext();
  const text = (0, import_react11.useMemo)(() => formatNumber(value, locale, intlOptions), [value, locale, intlOptions]);
  return (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: text });
};
FormatNumber.displayName = "FormatNumber";

// node_modules/@ark-ui/react/dist/components/format/format.js
var format_exports = {};
__export(format_exports, {
  Byte: () => FormatByte,
  Number: () => FormatNumber
});

// node_modules/@chakra-ui/react/dist/esm/components/format/index.js
var FormatNumber2 = format_exports.Number;
var FormatByte2 = format_exports.Byte;

// node_modules/@chakra-ui/react/dist/esm/components/theme.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var import_react12 = __toESM(require_react(), 1);
var Theme = (0, import_react12.forwardRef)(
  function Theme2(props5, ref2) {
    const {
      appearance,
      style,
      className,
      hasBackground = true,
      ...rest
    } = props5;
    return (0, import_jsx_runtime8.jsx)(
      chakra.div,
      {
        color: "fg",
        bg: hasBackground ? "bg" : void 0,
        colorPalette: "gray",
        ...rest,
        className: cx("chakra-theme", appearance, className),
        style: { ...style, colorScheme: appearance },
        ref: ref2
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/hooks/use-callback-ref.js
var import_react13 = __toESM(require_react(), 1);
function useCallbackRef(callback, deps = []) {
  const callbackRef = (0, import_react13.useRef)(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  (0, import_react13.useInsertionEffect)(() => {
    callbackRef.current = callback;
  });
  return (0, import_react13.useCallback)((...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  }, deps);
}

// node_modules/@chakra-ui/react/dist/esm/hooks/use-controllable-state.js
var import_react14 = __toESM(require_react(), 1);
function useControllableProp(prop, state) {
  const controlled = typeof prop !== "undefined";
  const value = controlled ? prop : state;
  return (0, import_react14.useMemo)(() => [controlled, value], [controlled, value]);
}
function useControllableState2(props5) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev2, next2) => prev2 !== next2
  } = props5;
  const onChangeProp = useCallbackRef(onChange);
  const shouldUpdateProp = useCallbackRef(shouldUpdate);
  const [uncontrolledState, setUncontrolledState] = (0, import_react14.useState)(defaultValue);
  const controlled = valueProp !== void 0;
  const value = controlled ? valueProp : uncontrolledState;
  const setValue = useCallbackRef(
    (next2) => {
      const setter = next2;
      const nextValue = typeof next2 === "function" ? setter(value) : next2;
      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }
      if (!controlled) {
        setUncontrolledState(nextValue);
      }
      onChangeProp(nextValue);
    },
    [controlled, onChangeProp, value, shouldUpdateProp]
  );
  return [value, setValue];
}

// node_modules/@chakra-ui/react/dist/esm/hooks/use-disclosure.js
var import_react15 = __toESM(require_react(), 1);
function useDisclosure(props5 = {}) {
  const { onClose: onCloseProp, onOpen: onOpenProp, open: openProp } = props5;
  const handleOpen = useCallbackRef(onOpenProp);
  const handleClose = useCallbackRef(onCloseProp);
  const [openState, setopen] = (0, import_react15.useState)(props5.defaultOpen || false);
  const open = openProp !== void 0 ? openProp : openState;
  const isControlled = openProp !== void 0;
  const onClose = (0, import_react15.useCallback)(() => {
    if (!isControlled) {
      setopen(false);
    }
    handleClose == null ? void 0 : handleClose();
  }, [isControlled, handleClose]);
  const onOpen = (0, import_react15.useCallback)(() => {
    if (!isControlled) {
      setopen(true);
    }
    handleOpen == null ? void 0 : handleOpen();
  }, [isControlled, handleOpen]);
  const onToggle = (0, import_react15.useCallback)(() => {
    if (open) {
      onClose();
    } else {
      onOpen();
    }
  }, [open, onOpen, onClose]);
  return {
    open,
    onOpen,
    onClose,
    onToggle
  };
}

// node_modules/@chakra-ui/react/dist/esm/hooks/use-media-query.js
var import_react16 = __toESM(require_react(), 1);
function listen(query, callback) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}
function useMediaQuery(query, options) {
  const { fallback: _fallback, ssr = true, getWindow: getWindow2 } = options;
  const getWin = useCallbackRef(getWindow2);
  const queries = Array.isArray(query) ? query : [query];
  const fallback = _fallback == null ? void 0 : _fallback.filter((v) => v != null);
  const [value, setValue] = (0, import_react16.useState)(() => {
    return queries.map((query2, index) => {
      var _a, _b, _c;
      return {
        media: query2,
        matches: !ssr ? (_c = (_b = (_a = (getWindow2 == null ? void 0 : getWindow2()) ?? window).matchMedia) == null ? void 0 : _b.call(_a, query2)) == null ? void 0 : _c.matches : !!fallback[index]
      };
    });
  });
  (0, import_react16.useEffect)(() => {
    const win = getWin() ?? window;
    setValue((prev2) => {
      const current = queries.map((query2) => ({
        media: query2,
        matches: win.matchMedia(query2).matches
      }));
      return prev2.every(
        (v, i) => v.matches === current[i].matches && v.media === current[i].media
      ) ? prev2 : current;
    });
    const mql = queries.map((query2) => win.matchMedia(query2));
    const handler = (evt) => {
      setValue((prev2) => {
        return prev2.slice().map((item) => {
          if (item.media === evt.media) return { ...item, matches: evt.matches };
          return item;
        });
      });
    };
    const cleanups = mql.map((v) => listen(v, handler));
    return () => cleanups.forEach((fn) => fn());
  }, [getWin]);
  return value.map((item) => item.matches);
}

// node_modules/@chakra-ui/react/dist/esm/hooks/use-breakpoint.js
function useBreakpoint(options = {}) {
  var _a;
  options.fallback || (options.fallback = "base");
  const sys = useChakraContext();
  let fallbackPassed = false;
  const allBreakpoints = sys.breakpoints.values;
  const breakpoints = allBreakpoints.map(({ min, name: breakpoint }) => {
    const item = {
      breakpoint,
      query: `(min-width: ${min})`,
      fallback: !fallbackPassed
    };
    if (breakpoint === options.fallback) {
      fallbackPassed = true;
    }
    return item;
  }).filter(({ breakpoint }) => {
    var _a2;
    return !!((_a2 = options.breakpoints) == null ? void 0 : _a2.includes(breakpoint));
  });
  const fallback = breakpoints.map(({ fallback: fallback2 }) => fallback2);
  const values = useMediaQuery(
    breakpoints.map((bp) => bp.query),
    { fallback, ssr: options.ssr }
  );
  const index = values.lastIndexOf(true);
  return ((_a = breakpoints[index]) == null ? void 0 : _a.breakpoint) ?? options.fallback;
}
function useBreakpointValue(value, opts) {
  const sys = useChakraContext();
  const normalized = sys.normalizeValue(value);
  const breakpoint = useBreakpoint({
    breakpoints: Object.keys(normalized),
    ...opts
  });
  return normalized[breakpoint];
}

// node_modules/@chakra-ui/react/dist/esm/styled-system/create-slot-recipe-context.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var import_react18 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/styled-system/use-slot-recipe.js
var import_react17 = __toESM(require_react(), 1);
function useSlotRecipe(options) {
  const { key, recipe: recipeProp } = options;
  const sys = useChakraContext();
  return (0, import_react17.useMemo)(() => {
    const recipe = recipeProp || (key != null ? sys.getSlotRecipe(key) : {});
    return sys.sva(structuredClone(recipe));
  }, [key, recipeProp, sys]);
}

// node_modules/@chakra-ui/react/dist/esm/styled-system/create-slot-recipe-context.js
var upperFirst2 = (str) => str.charAt(0).toUpperCase() + str.slice(1);
var createSlotRecipeContext = (options) => {
  const { key: recipeKey, recipe: recipeConfig } = options;
  const contextName = upperFirst2(
    recipeKey || recipeConfig.className || "Component"
  );
  const [StylesProvider2, useStyles] = createContext2({
    name: `${contextName}StylesContext`,
    errorMessage: `use${contextName}Styles returned is 'undefined'. Seems you forgot to wrap the components in "<${contextName}.Root />" `
  });
  const [ClassNamesProvider2, useClassNames3] = createContext2({
    name: `${contextName}ClassNameContext`,
    errorMessage: `use${contextName}ClassNames returned is 'undefined'. Seems you forgot to wrap the components in "<${contextName}.Root />" `,
    strict: false
  });
  const [PropsProvider60, usePropsContext] = createContext2({
    strict: false,
    name: `${contextName}PropsContext`,
    providerName: `${contextName}PropsContext`,
    defaultValue: {}
  });
  function useRecipeResult3(props5) {
    const { unstyled, ...restProps } = props5;
    const slotRecipe = useSlotRecipe({
      key: recipeKey,
      recipe: restProps.recipe || recipeConfig
    });
    const [variantProps, otherProps] = slotRecipe.splitVariantProps(restProps);
    const styles = unstyled ? EMPTY_SLOT_STYLES : slotRecipe(variantProps);
    return {
      styles,
      classNames: slotRecipe.classNameMap,
      props: otherProps
    };
  }
  function withRootProvider8(Component, options2 = {}) {
    const { defaultProps } = options2;
    const StyledComponent = (inProps) => {
      const props5 = mergeProps2(defaultProps, usePropsContext(), inProps);
      const { styles, classNames, props: rootProps } = useRecipeResult3(props5);
      return (0, import_jsx_runtime9.jsx)(StylesProvider2, { value: styles, children: (0, import_jsx_runtime9.jsx)(ClassNamesProvider2, { value: classNames, children: (0, import_jsx_runtime9.jsx)(Component, { ...rootProps }) }) });
    };
    StyledComponent.displayName = Component.displayName || Component.name;
    return StyledComponent;
  }
  const withProvider40 = (Component, slot, options2) => {
    const { defaultProps, ...restOptions } = options2 ?? {};
    const SuperComponent = chakra(Component, {}, restOptions);
    const StyledComponent = (0, import_react18.forwardRef)((inProps, ref2) => {
      var _a;
      const props5 = mergeProps2(defaultProps ?? {}, usePropsContext(), inProps);
      const { styles, props: rootProps, classNames } = useRecipeResult3(props5);
      const className = classNames[slot];
      const element = (0, import_jsx_runtime9.jsx)(StylesProvider2, { value: styles, children: (0, import_jsx_runtime9.jsx)(ClassNamesProvider2, { value: classNames, children: (0, import_jsx_runtime9.jsx)(
        SuperComponent,
        {
          ref: ref2,
          ...rootProps,
          css: [styles[slot], props5.css],
          className: cx(props5.className, className)
        }
      ) }) });
      return ((_a = options2 == null ? void 0 : options2.wrapElement) == null ? void 0 : _a.call(options2, element, props5)) ?? element;
    });
    StyledComponent.displayName = Component.displayName || Component.name;
    return StyledComponent;
  };
  const withContext62 = (Component, slot, options2) => {
    const SuperComponent = chakra(Component, {}, options2);
    const StyledComponent = (0, import_react18.forwardRef)((props5, ref2) => {
      const styles = useStyles();
      const classNames = useClassNames3();
      const className = classNames == null ? void 0 : classNames[slot];
      return (0, import_jsx_runtime9.jsx)(
        SuperComponent,
        {
          ...props5,
          css: [slot ? styles[slot] : void 0, props5.css],
          ref: ref2,
          className: cx(props5.className, className)
        }
      );
    });
    StyledComponent.displayName = Component.displayName || Component.name;
    return StyledComponent;
  };
  return {
    StylesProvider: StylesProvider2,
    ClassNamesProvider: ClassNamesProvider2,
    PropsProvider: PropsProvider60,
    usePropsContext,
    useRecipeResult: useRecipeResult3,
    withProvider: withProvider40,
    withContext: withContext62,
    withRootProvider: withRootProvider8,
    useStyles,
    useClassNames: useClassNames3
  };
};

// node_modules/@chakra-ui/react/dist/esm/styled-system/recipe-props.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var [RecipePropsContextProvider, useParentRecipeProps] = createContext2({
  name: "RecipePropsContext",
  strict: false
});
function RecipePropsProvider(props5) {
  return (0, import_jsx_runtime10.jsx)(RecipePropsContextProvider, { value: props5.value, children: props5.children });
}

// node_modules/@chakra-ui/react/dist/esm/styled-system/use-token.js
var import_react19 = __toESM(require_react(), 1);
function useToken(category, token2) {
  const sys = useChakraContext();
  return (0, import_react19.useMemo)(() => {
    const arr = Array.isArray(token2) ? token2 : [token2];
    return arr.map((t) => sys.token(`${category}.${t}`, t));
  }, [sys, category, token2]);
}

// node_modules/@chakra-ui/react/dist/esm/components/accordion/accordion.js
var {
  withProvider,
  withContext,
  useStyles: useAccordionStyles,
  PropsProvider
} = createSlotRecipeContext({ key: "accordion" });
var AccordionRootProvider = withProvider(accordion_exports.RootProvider, "root", { forwardAsChild: true });
var AccordionRoot = withProvider(
  accordion_exports.Root,
  "root",
  { forwardAsChild: true }
);
var AccordionPropsProvider = PropsProvider;
var AccordionItem = withContext(
  accordion_exports.Item,
  "item",
  { forwardAsChild: true }
);
var AccordionItemContent = withContext(accordion_exports.ItemContent, "itemContent", { forwardAsChild: true });
var AccordionItemBody = withContext("div", "itemBody");
var AccordionItemTrigger = withContext(accordion_exports.ItemTrigger, "itemTrigger", { forwardAsChild: true });
var AccordionItemIndicator = withContext(accordion_exports.ItemIndicator, "itemIndicator", { forwardAsChild: true });
var AccordionContext = accordion_exports.Context;
var AccordionItemContext = accordion_exports.ItemContext;

// node_modules/@chakra-ui/react/dist/esm/components/accordion/namespace.js
var namespace_exports = {};
__export(namespace_exports, {
  Context: () => AccordionContext,
  Item: () => AccordionItem,
  ItemBody: () => AccordionItemBody,
  ItemContent: () => AccordionItemContent,
  ItemContext: () => AccordionItemContext,
  ItemIndicator: () => AccordionItemIndicator,
  ItemTrigger: () => AccordionItemTrigger,
  PropsProvider: () => AccordionPropsProvider,
  Root: () => AccordionRoot,
  RootProvider: () => AccordionRootProvider
});

// node_modules/@chakra-ui/react/dist/esm/components/action-bar/action-bar.js
var {
  withRootProvider,
  withContext: withContext2,
  useStyles: useActionBarStyles,
  PropsProvider: PropsProvider2
} = createSlotRecipeContext({ key: "actionBar" });
var ActionBarRootProvider = withRootProvider(popover_exports.Root, {
  defaultProps: {
    lazyMount: true,
    unmountOnExit: true
  }
});
var ActionBarRoot = withRootProvider(
  popover_exports.Root,
  {
    defaultProps: {
      autoFocus: false,
      lazyMount: true,
      unmountOnExit: true
    }
  }
);
var ActionBarPropsProvider = PropsProvider2;
var ActionBarPositioner = withContext2("div", "positioner", { forwardAsChild: true });
var ActionBarContent = withContext2(popover_exports.Content, "content", { forwardAsChild: true });
var ActionBarSeparator = withContext2("div", "separator");
var ActionBarSelectionTrigger = withContext2("button", "selectionTrigger");
var ActionBarCloseTrigger = withContext2(popover_exports.CloseTrigger, "closeTrigger", { forwardAsChild: true });
var ActionBarContext = popover_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/action-bar/namespace.js
var namespace_exports2 = {};
__export(namespace_exports2, {
  CloseTrigger: () => ActionBarCloseTrigger,
  Content: () => ActionBarContent,
  Context: () => ActionBarContext,
  Positioner: () => ActionBarPositioner,
  PropsProvider: () => ActionBarPropsProvider,
  Root: () => ActionBarRoot,
  RootProvider: () => ActionBarRootProvider,
  SelectionTrigger: () => ActionBarSelectionTrigger,
  Separator: () => ActionBarSeparator
});

// node_modules/@chakra-ui/react/dist/esm/components/alert/alert.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var import_react20 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/components/icons.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var CheckIcon = (props5) => {
  return (0, import_jsx_runtime11.jsx)(
    chakra.svg,
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props5,
      children: (0, import_jsx_runtime11.jsx)("path", { d: "M20 6 9 17l-5-5" })
    }
  );
};
var ChevronUpIcon = (props5) => (0, import_jsx_runtime11.jsx)(
  chakra.svg,
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props5,
    children: (0, import_jsx_runtime11.jsx)("path", { d: "m18 15-6-6-6 6" })
  }
);
var ChevronDownIcon = (props5) => {
  return (0, import_jsx_runtime11.jsx)(
    chakra.svg,
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props5,
      children: (0, import_jsx_runtime11.jsx)("path", { d: "m6 9 6 6 6-6" })
    }
  );
};
var ChevronRightIcon = (props5) => (0, import_jsx_runtime11.jsx)(
  chakra.svg,
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props5,
    children: (0, import_jsx_runtime11.jsx)("path", { d: "m9 18 6-6-6-6" })
  }
);
var EllpsisIcon = (props5) => (0, import_jsx_runtime11.jsxs)(
  chakra.svg,
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props5,
    children: [
      (0, import_jsx_runtime11.jsx)("circle", { cx: "12", cy: "12", r: "1" }),
      (0, import_jsx_runtime11.jsx)("circle", { cx: "19", cy: "12", r: "1" }),
      (0, import_jsx_runtime11.jsx)("circle", { cx: "5", cy: "12", r: "1" })
    ]
  }
);
var ArrowUpIcon = (props5) => (0, import_jsx_runtime11.jsxs)(
  chakra.svg,
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props5,
    children: [
      (0, import_jsx_runtime11.jsx)("path", { d: "m5 12 7-7 7 7" }),
      (0, import_jsx_runtime11.jsx)("path", { d: "M12 19V5" })
    ]
  }
);
var ArrowDownIcon = (props5) => (0, import_jsx_runtime11.jsxs)(
  chakra.svg,
  {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ...props5,
    children: [
      (0, import_jsx_runtime11.jsx)("path", { d: "M12 5v14" }),
      (0, import_jsx_runtime11.jsx)("path", { d: "m19 12-7 7-7-7" })
    ]
  }
);
var CheckCircleIcon = (props5) => (0, import_jsx_runtime11.jsx)(
  chakra.svg,
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    ...props5,
    children: (0, import_jsx_runtime11.jsx)("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z" })
  }
);
var WarningIcon = (props5) => (0, import_jsx_runtime11.jsx)(
  chakra.svg,
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    ...props5,
    children: (0, import_jsx_runtime11.jsx)("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM11 7H13V13H11V7Z" })
  }
);
var InfoIcon = (props5) => (0, import_jsx_runtime11.jsx)(
  chakra.svg,
  {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    stroke: "currentColor",
    strokeWidth: "0",
    ...props5,
    children: (0, import_jsx_runtime11.jsx)("path", { d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" })
  }
);
var QuoteIcon = (props5) => (0, import_jsx_runtime11.jsx)(chakra.svg, { viewBox: "0 0 24 24", fill: "currentColor", ...props5, children: (0, import_jsx_runtime11.jsx)("path", { d: "M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z" }) });
var StarIcon = (props5) => (0, import_jsx_runtime11.jsx)(chakra.svg, { viewBox: "0 0 24 24", fill: "currentColor", ...props5, children: (0, import_jsx_runtime11.jsx)("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" }) });
var CloseIcon = (props5) => (0, import_jsx_runtime11.jsx)(chakra.svg, { viewBox: "0 0 24 24", fill: "currentColor", ...props5, children: (0, import_jsx_runtime11.jsx)(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z"
  }
) });

// node_modules/@chakra-ui/react/dist/esm/components/alert/alert.js
var [AlertStatusProvider, useAlertStatusContext] = createContext2({
  name: "AlertStatusContext",
  hookName: "useAlertStatusContext",
  providerName: "<Alert />"
});
var {
  withProvider: withProvider2,
  withContext: withContext3,
  useStyles: useAlertStyles,
  PropsProvider: PropsProvider3
} = createSlotRecipeContext({ key: "alert" });
var AlertRoot = withProvider2(
  "div",
  "root",
  {
    forwardAsChild: true,
    wrapElement(element, props5) {
      return (
        // @ts-ignore fix later
        (0, import_jsx_runtime12.jsx)(AlertStatusProvider, { value: { status: props5.status || "info" }, children: element })
      );
    }
  }
);
var AlertPropsProvider = PropsProvider3;
var AlertTitle = withContext3(
  "div",
  "title"
);
var AlertDescription = withContext3("div", "description");
var AlertContent = withContext3(
  "div",
  "content"
);
var iconMap = {
  info: InfoIcon,
  warning: WarningIcon,
  success: CheckCircleIcon,
  error: WarningIcon,
  neutral: InfoIcon
};
var AlertIndicator = (0, import_react20.forwardRef)(
  function AlertIndicator2(props5, ref2) {
    const api = useAlertStatusContext();
    const styles = useAlertStyles();
    const Icon2 = typeof api.status === "string" ? iconMap[api.status] : import_react20.Fragment;
    const { children = (0, import_jsx_runtime12.jsx)(Icon2, {}), ...rest } = props5;
    return (0, import_jsx_runtime12.jsx)(chakra.span, { ref: ref2, ...rest, css: [styles.indicator, props5.css], children });
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/alert/namespace.js
var namespace_exports3 = {};
__export(namespace_exports3, {
  Content: () => AlertContent,
  Description: () => AlertDescription,
  Indicator: () => AlertIndicator,
  Root: () => AlertRoot,
  RootPropsProvider: () => AlertPropsProvider,
  Title: () => AlertTitle
});

// node_modules/@chakra-ui/react/dist/esm/components/aspect-ratio/aspect-ratio.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var import_react21 = __toESM(require_react(), 1);
var AspectRatio = (0, import_react21.forwardRef)(
  function AspectRatio2(props5, ref2) {
    const { ratio = 4 / 3, children, className, ...rest } = props5;
    const child = import_react21.Children.only(children);
    return (0, import_jsx_runtime13.jsx)(
      chakra.div,
      {
        ref: ref2,
        position: "relative",
        className: cx("chakra-aspect-ratio", className),
        _before: {
          height: 0,
          content: `""`,
          display: "block",
          paddingBottom: mapObject(ratio, (r) => `${1 / r * 100}%`)
        },
        css: {
          "& > *:not(style)": {
            overflow: "hidden",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          "& > img, & > video": {
            objectFit: "cover"
          },
          ...props5.css
        },
        ...rest,
        children: child
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/avatar/avatar.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var import_react22 = __toESM(require_react(), 1);
var {
  withProvider: withProvider3,
  withContext: withContext4,
  useStyles: useAvatarStyles,
  PropsProvider: PropsProvider4
} = createSlotRecipeContext({ key: "avatar" });
var AvatarRootProvider = withProvider3(avatar_exports.RootProvider, "root", { forwardAsChild: true });
var AvatarRoot = withProvider3(
  avatar_exports.Root,
  "root",
  { forwardAsChild: true }
);
var AvatarPropsProvider = PropsProvider4;
var AvatarFallback = withContext4(
  avatar_exports.Fallback,
  "fallback",
  { forwardAsChild: true }
);
var AvatarImage = withContext4(
  avatar_exports.Image,
  "image",
  {
    forwardAsChild: true,
    defaultProps: {
      draggable: "false",
      referrerPolicy: "no-referrer"
    }
  }
);
var AvatarIcon = (0, import_react22.forwardRef)(
  function AvatarIcon2(props5, ref2) {
    return (0, import_jsx_runtime14.jsx)(
      chakra.svg,
      {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 24 24",
        height: "1.2em",
        width: "1.2em",
        ref: ref2,
        ...props5,
        children: (0, import_jsx_runtime14.jsx)("path", { d: "M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" })
      }
    );
  }
);
var AvatarContext = avatar_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/avatar/namespace.js
var namespace_exports4 = {};
__export(namespace_exports4, {
  Context: () => AvatarContext,
  Fallback: () => AvatarFallback,
  Icon: () => AvatarIcon,
  Image: () => AvatarImage,
  PropsProvider: () => AvatarPropsProvider,
  Root: () => AvatarRoot
});

// node_modules/@chakra-ui/react/dist/esm/components/badge/badge.js
var { PropsProvider: PropsProvider5, withContext: withContext5 } = createRecipeContext({
  key: "badge"
});
var Badge = withContext5("span");
var BadgePropsProvider = PropsProvider5;

// node_modules/@chakra-ui/react/dist/esm/components/bleed/bleed.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var import_react23 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/utils/unit.js
var lengthUnits = "cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%";
var lengthUnitsPattern = `(?:${lengthUnits.split(",").join("|")})`;
var lengthRegExp = new RegExp(
  `^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?${lengthUnitsPattern}$`
);
var isCssUnit = (v) => typeof v === "string" && lengthRegExp.test(v);

// node_modules/@chakra-ui/react/dist/esm/components/bleed/bleed.js
var valueFn = (v) => isCssUnit(v) || isCssVar(v) ? v : `token(spacing.${v}, ${v})`;
var Bleed = (0, import_react23.forwardRef)(
  function Bleed2(props5, ref2) {
    const {
      inline,
      inlineStart,
      inlineEnd,
      block,
      blockStart,
      blockEnd,
      ...rest
    } = props5;
    return (0, import_jsx_runtime15.jsx)(
      chakra.div,
      {
        ref: ref2,
        ...rest,
        css: {
          "--bleed-inline-start": mapObject(inline ?? inlineStart, valueFn),
          "--bleed-inline-end": mapObject(inline ?? inlineEnd, valueFn),
          "--bleed-block-start": mapObject(block ?? blockStart, valueFn),
          "--bleed-block-end": mapObject(block ?? blockEnd, valueFn),
          marginInlineStart: "calc(var(--bleed-inline-start, 0) * -1)",
          marginInlineEnd: "calc(var(--bleed-inline-end, 0) * -1)",
          marginBlockStart: "calc(var(--bleed-block-start, 0) * -1)",
          marginBlockEnd: "calc(var(--bleed-block-end, 0) * -1)"
        }
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/blockquote/blockquote.js
var {
  withProvider: withProvider4,
  withContext: withContext6,
  useStyles: useBlockquoteStyles,
  PropsProvider: PropsProvider6
} = createSlotRecipeContext({ key: "blockquote" });
var BlockquoteRoot = withProvider4(
  "figure",
  "root"
);
var BlockquotePropsProvider = PropsProvider6;
var BlockquoteContent = withContext6("blockquote", "content");
var BlockquoteCaption = withContext6("figcaption", "caption");
var BlockquoteIcon = withContext6(
  QuoteIcon,
  "icon"
);

// node_modules/@chakra-ui/react/dist/esm/components/blockquote/namespace.js
var namespace_exports5 = {};
__export(namespace_exports5, {
  Caption: () => BlockquoteCaption,
  Content: () => BlockquoteContent,
  Icon: () => BlockquoteIcon,
  PropsProvider: () => BlockquotePropsProvider,
  Root: () => BlockquoteRoot
});

// node_modules/@chakra-ui/react/dist/esm/components/box/box.js
var Box = chakra("div");
Box.displayName = "Box";

// node_modules/@chakra-ui/react/dist/esm/components/box/square.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var import_react24 = __toESM(require_react(), 1);
var Square = (0, import_react24.forwardRef)(
  function Square2(props5, ref2) {
    const { size, ...rest } = props5;
    return (0, import_jsx_runtime16.jsx)(
      Box,
      {
        ...rest,
        ref: ref2,
        boxSize: size,
        css: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          flexGrow: 0,
          ...props5.css
        }
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/box/circle.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);
var import_react25 = __toESM(require_react(), 1);
var Circle = (0, import_react25.forwardRef)(
  function Circle2(props5, ref2) {
    const { size, ...rest } = props5;
    return (0, import_jsx_runtime17.jsx)(Square, { size, ref: ref2, borderRadius: "9999px", ...rest });
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/box/span.js
var Span = chakra("span");

// node_modules/@chakra-ui/react/dist/esm/components/box/sticky.js
var Sticky = chakra("div", {
  base: {
    position: "sticky",
    top: 0
  }
});
Sticky.displayName = "Sticky";

// node_modules/@chakra-ui/react/dist/esm/components/breadcrumb/breadcrumb.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
var {
  withProvider: withProvider5,
  withContext: withContext7,
  useStyles: useBreadcrumbStyles,
  PropsProvider: PropsProvider7
} = createSlotRecipeContext({ key: "breadcrumb" });
var BreadcrumbRoot = withProvider5(
  "nav",
  "root",
  {
    defaultProps: { "aria-label": "breadcrumb" }
  }
);
var BreadcrumbPropsProvider = PropsProvider7;
var BreadcrumbList = withContext7(
  "ol",
  "list"
);
var BreadcrumbItem = withContext7(
  "li",
  "item"
);
var BreadcrumbLink = withContext7("a", "link");
var BreadcrumbCurrentLink = withContext7("span", "currentLink", {
  defaultProps: {
    role: "link",
    "aria-current": "page"
  }
});
var BreadcrumbSeparator = withContext7("li", "separator", {
  defaultProps: {
    children: (0, import_jsx_runtime18.jsx)(ChevronRightIcon, {})
  }
});
var BreadcrumbEllipsis = withContext7("span", "ellipsis", {
  defaultProps: {
    role: "presentation",
    "aria-hidden": true,
    children: (0, import_jsx_runtime18.jsx)(EllpsisIcon, {})
  }
});

// node_modules/@chakra-ui/react/dist/esm/components/breadcrumb/namespace.js
var namespace_exports6 = {};
__export(namespace_exports6, {
  CurrentLink: () => BreadcrumbCurrentLink,
  Ellipsis: () => BreadcrumbEllipsis,
  Item: () => BreadcrumbItem,
  Link: () => BreadcrumbLink,
  List: () => BreadcrumbList,
  PropsProvider: () => BreadcrumbPropsProvider,
  Root: () => BreadcrumbRoot,
  Separator: () => BreadcrumbSeparator
});

// node_modules/@chakra-ui/react/dist/esm/components/button/button.js
var { withContext: withContext8, PropsProvider: PropsProvider8 } = createRecipeContext({
  key: "button"
});
var Button = withContext8("button", {
  defaultProps: { type: "button" }
});

// node_modules/@chakra-ui/react/dist/esm/components/button/icon-button.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
var import_react26 = __toESM(require_react(), 1);
var IconButton = (0, import_react26.forwardRef)(
  function IconButton2(props5, ref2) {
    return (0, import_jsx_runtime19.jsx)(
      Button,
      {
        px: "0",
        py: "0",
        _icon: { fontSize: "1.2em" },
        ref: ref2,
        ...props5
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/card/card.js
var {
  withProvider: withProvider6,
  withContext: withContext9,
  useStyles: useCardStyles,
  PropsProvider: PropsProvider9
} = createSlotRecipeContext({ key: "card" });
var CardRoot = withProvider6(
  "div",
  "root"
);
var CardPropsProvider = PropsProvider9;
var CardBody = withContext9(
  "div",
  "body"
);
var CardHeader = withContext9(
  "div",
  "header"
);
var CardFooter = withContext9(
  "div",
  "footer"
);
var CardTitle = withContext9(
  "h3",
  "title"
);
var CardDescription = withContext9("p", "description");

// node_modules/@chakra-ui/react/dist/esm/components/card/namespace.js
var namespace_exports7 = {};
__export(namespace_exports7, {
  Body: () => CardBody,
  Description: () => CardDescription,
  Footer: () => CardFooter,
  Header: () => CardHeader,
  PropsProvider: () => CardPropsProvider,
  Root: () => CardRoot,
  Title: () => CardTitle
});

// node_modules/@chakra-ui/react/dist/esm/components/center/center.js
var Center = chakra("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  variants: {
    inline: {
      true: {
        display: "inline-flex"
      }
    }
  }
});
Center.displayName = "Center";

// node_modules/@chakra-ui/react/dist/esm/components/center/absolute-center.js
var AbsoluteCenter = chakra("div", {
  base: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  variants: {
    axis: {
      horizontal: {
        insetStart: "50%",
        transform: "translateX(-50%)"
      },
      vertical: {
        top: "50%",
        transform: "translateY(-50%)"
      },
      both: {
        insetStart: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
      }
    }
  },
  defaultVariants: {
    axis: "both"
  }
});
AbsoluteCenter.displayName = "AbsoluteCenter";

// node_modules/@chakra-ui/react/dist/esm/components/checkbox/checkbox.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
var import_react28 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/components/checkmark/checkmark.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
var import_react27 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/utils/attr.js
var dataAttr2 = (condition) => condition ? "" : void 0;

// node_modules/@chakra-ui/react/dist/esm/components/checkmark/checkmark.js
var Checkmark = (0, import_react27.forwardRef)(
  function Checkmark2(props5, ref2) {
    const recipe = useRecipe({ key: "checkmark", recipe: props5.recipe });
    const [variantProps, restProps] = recipe.splitVariantProps(props5);
    const { checked, indeterminate, disabled, unstyled, children, ...rest } = restProps;
    const styles = unstyled ? EMPTY_STYLES : recipe(variantProps);
    return (0, import_jsx_runtime20.jsx)(
      chakra.svg,
      {
        ref: ref2,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: "3px",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "data-state": indeterminate ? "indeterminate" : checked ? "checked" : "unchecked",
        "data-disabled": dataAttr2(disabled),
        css: [styles, props5.css],
        ...rest,
        children: indeterminate ? (0, import_jsx_runtime20.jsx)("path", { d: "M5 12h14" }) : checked ? (0, import_jsx_runtime20.jsx)("polyline", { points: "20 6 9 17 4 12" }) : null
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/checkbox/checkbox.js
var {
  withProvider: withProvider7,
  withContext: withContext10,
  useStyles: useCheckboxStyles,
  PropsProvider: PropsProvider10
} = createSlotRecipeContext({ key: "checkbox" });
var CheckboxRootProvider = withProvider7(checkbox_exports.RootProvider, "root", { forwardAsChild: true });
var CheckboxRoot = withProvider7(
  checkbox_exports.Root,
  "root",
  { forwardAsChild: true }
);
var CheckboxPropsProvider = PropsProvider10;
var CheckboxLabel = withContext10(
  checkbox_exports.Label,
  "label",
  { forwardAsChild: true }
);
var CheckboxControl = withContext10(
  checkbox_exports.Control,
  "control",
  { forwardAsChild: true }
);
var CheckboxIndicator = (0, import_react28.forwardRef)(function CheckboxIndicator2(props5, ref2) {
  const { checked, indeterminate, ...rest } = props5;
  const api = useCheckboxContext();
  const styles = useCheckboxStyles();
  if (checked && api.checked) {
    return (0, import_jsx_runtime21.jsx)(
      chakra.svg,
      {
        ref: ref2,
        asChild: true,
        ...rest,
        css: [styles.indicator, props5.css],
        children: checked
      }
    );
  }
  if (indeterminate && api.indeterminate) {
    return (0, import_jsx_runtime21.jsx)(
      chakra.svg,
      {
        ref: ref2,
        asChild: true,
        ...rest,
        css: [styles.indicator, props5.css],
        children: indeterminate
      }
    );
  }
  return (0, import_jsx_runtime21.jsx)(
    Checkmark,
    {
      ref: ref2,
      checked: api.checked,
      indeterminate: api.indeterminate,
      disabled: api.disabled,
      unstyled: true,
      ...rest,
      css: [styles.indicator, props5.css]
    }
  );
});
var CheckboxGroup = chakra(
  checkbox_exports.Group,
  {
    base: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5"
    }
  },
  { forwardAsChild: true }
);
var CheckboxContext = checkbox_exports.Context;
var CheckboxHiddenInput = checkbox_exports.HiddenInput;

// node_modules/@chakra-ui/react/dist/esm/components/checkbox/namespace.js
var namespace_exports8 = {};
__export(namespace_exports8, {
  Context: () => CheckboxContext,
  Control: () => CheckboxControl,
  Group: () => CheckboxGroup,
  HiddenInput: () => CheckboxHiddenInput,
  Indicator: () => CheckboxIndicator,
  Label: () => CheckboxLabel,
  PropsProvider: () => CheckboxPropsProvider,
  Root: () => CheckboxRoot,
  RootProvider: () => CheckboxRootProvider
});

// node_modules/@chakra-ui/react/dist/esm/components/checkbox-card/checkbox-card.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);
var import_react29 = __toESM(require_react(), 1);
var {
  withProvider: withProvider8,
  withContext: withContext11,
  useStyles: useCheckboxCardStyles,
  PropsProvider: PropsProvider11
} = createSlotRecipeContext({ key: "checkboxCard" });
var CheckboxCardRootProvider = withProvider8(checkbox_exports.RootProvider, "root", { forwardAsChild: true });
var CheckboxCardRoot = withProvider8(checkbox_exports.Root, "root", { forwardAsChild: true });
var CheckboxCardRootPropsProvider = PropsProvider11;
var CheckboxCardLabel = withContext11(checkbox_exports.Label, "label", { forwardAsChild: true });
var CheckboxCardDescription = withContext11("div", "description");
var CheckboxCardControl = withContext11(checkbox_exports.Control, "control", { forwardAsChild: true });
var CheckboxCardContent = withContext11("div", "content");
var CheckboxCardIndicator = (0, import_react29.forwardRef)(function CheckboxCardIndicator2(props5, ref2) {
  const api = useCheckboxContext();
  const styles = useCheckboxCardStyles();
  return (0, import_jsx_runtime22.jsx)(
    Checkmark,
    {
      ref: ref2,
      checked: api.checked,
      indeterminate: api.indeterminate,
      disabled: api.disabled,
      unstyled: true,
      ...props5,
      css: [styles.indicator, props5.css]
    }
  );
});
var CheckboxCardAddon = withContext11("div", "addon");
var CheckboxCardContext = checkbox_exports.Context;
var CheckboxCardHiddenInput = checkbox_exports.HiddenInput;

// node_modules/@chakra-ui/react/dist/esm/components/checkbox-card/namespace.js
var namespace_exports9 = {};
__export(namespace_exports9, {
  Addon: () => CheckboxCardAddon,
  Content: () => CheckboxCardContent,
  Context: () => CheckboxCardContext,
  Control: () => CheckboxCardControl,
  Description: () => CheckboxCardDescription,
  HiddenInput: () => CheckboxCardHiddenInput,
  Indicator: () => CheckboxCardIndicator,
  Label: () => CheckboxCardLabel,
  Root: () => CheckboxCardRoot,
  RootPropsProvider: () => CheckboxCardRootPropsProvider,
  RootProvider: () => CheckboxCardRootProvider
});

// node_modules/@chakra-ui/react/dist/esm/components/client-only/client-only.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
var import_react31 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/components/show/show.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);
var import_react30 = __toESM(require_react(), 1);
function Show(props5) {
  const { when, fallback, children } = props5;
  let result;
  if (!when) {
    result = fallback;
  } else {
    result = typeof children === "function" ? children(when) : children;
  }
  return (0, import_react30.isValidElement)(result) ? result : (0, import_jsx_runtime23.jsx)(import_jsx_runtime23.Fragment, { children: result });
}

// node_modules/@chakra-ui/react/dist/esm/components/client-only/client-only.js
var ClientOnly = (props5) => {
  const { children, fallback } = props5;
  const [hasMounted, setHasMounted] = (0, import_react31.useState)(false);
  (0, import_react31.useEffect)(() => {
    setHasMounted(true);
  }, []);
  return (0, import_jsx_runtime24.jsx)(Show, { when: hasMounted, fallback, children });
};

// node_modules/@ark-ui/react/dist/components/clipboard/use-clipboard-context.js
var [ClipboardProvider, useClipboardContext] = createContext({
  name: "ClipboardContext",
  hookName: "useClipboardContext",
  providerName: "<ClipboardProvider />"
});

// node_modules/@ark-ui/react/dist/components/clipboard/clipboard-context.js
var ClipboardContext = (props5) => props5.children(useClipboardContext());

// node_modules/@ark-ui/react/dist/components/clipboard/clipboard-control.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
var import_react33 = __toESM(require_react(), 1);
var ClipboardControl = (0, import_react33.forwardRef)((props5, ref2) => {
  const clipboard = useClipboardContext();
  const mergedProps = mergeProps(clipboard.getControlProps(), props5);
  return (0, import_jsx_runtime25.jsx)(ark.div, { ...mergedProps, ref: ref2 });
});
ClipboardControl.displayName = "ClipboardControl";

// node_modules/@ark-ui/react/dist/components/clipboard/clipboard-indicator.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);
var import_react35 = __toESM(require_react(), 1);
var ClipboardIndicator = (0, import_react35.forwardRef)(
  (props5, ref2) => {
    const { children, copied, ...localProps } = props5;
    const clipboard = useClipboardContext();
    const mergedProps = mergeProps(
      clipboard.getIndicatorProps({ copied: clipboard.copied }),
      localProps
    );
    return (0, import_jsx_runtime26.jsx)(ark.div, { ...mergedProps, ref: ref2, children: clipboard.copied ? copied : children });
  }
);
ClipboardIndicator.displayName = "ClipboardIndicator";

// node_modules/@ark-ui/react/dist/components/clipboard/clipboard-input.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var import_react37 = __toESM(require_react(), 1);
var ClipboardInput = (0, import_react37.forwardRef)((props5, ref2) => {
  const clipboard = useClipboardContext();
  const mergedProps = mergeProps(clipboard.getInputProps(), props5);
  return (0, import_jsx_runtime27.jsx)(ark.input, { ...mergedProps, ref: ref2 });
});
ClipboardInput.displayName = "ClipboardInput";

// node_modules/@ark-ui/react/dist/components/clipboard/clipboard-label.js
var import_jsx_runtime28 = __toESM(require_jsx_runtime(), 1);
var import_react39 = __toESM(require_react(), 1);
var ClipboardLabel = (0, import_react39.forwardRef)((props5, ref2) => {
  const clipboard = useClipboardContext();
  const mergedProps = mergeProps(clipboard.getLabelProps(), props5);
  return (0, import_jsx_runtime28.jsx)(ark.label, { ...mergedProps, ref: ref2 });
});
ClipboardLabel.displayName = "ClipboardLabel";

// node_modules/@ark-ui/react/dist/components/clipboard/clipboard-root.js
var import_jsx_runtime29 = __toESM(require_jsx_runtime(), 1);
var import_react43 = __toESM(require_react(), 1);

// node_modules/@zag-js/clipboard/dist/index.mjs
var anatomy = createAnatomy("clipboard").parts("root", "control", "trigger", "indicator", "input", "label");
var parts = anatomy.build();
var dom = createScope({
  getRootId: (ctx) => {
    var _a;
    return ((_a = ctx.ids) == null ? void 0 : _a.root) ?? `clip:${ctx.id}`;
  },
  getInputId: (ctx) => {
    var _a;
    return ((_a = ctx.ids) == null ? void 0 : _a.input) ?? `clip:${ctx.id}:input`;
  },
  getLabelId: (ctx) => {
    var _a;
    return ((_a = ctx.ids) == null ? void 0 : _a.label) ?? `clip:${ctx.id}:label`;
  },
  getInputEl: (ctx) => dom.getById(ctx, dom.getInputId(ctx)),
  writeToClipboard: (ctx) => copyText(dom.getDoc(ctx), ctx.value)
});
function createNode(doc, text) {
  const node2 = doc.createElement("pre");
  Object.assign(node2.style, {
    width: "1px",
    height: "1px",
    position: "fixed",
    top: "5px"
  });
  node2.textContent = text;
  return node2;
}
function copyNode(node2) {
  const win = getWindow(node2);
  const selection = win.getSelection();
  if (selection == null) {
    return Promise.reject(new Error());
  }
  selection.removeAllRanges();
  const doc = node2.ownerDocument;
  const range2 = doc.createRange();
  range2.selectNodeContents(node2);
  selection.addRange(range2);
  doc.execCommand("copy");
  selection.removeAllRanges();
  return Promise.resolve();
}
function copyText(doc, text) {
  var _a;
  const win = doc.defaultView || window;
  if (((_a = win.navigator.clipboard) == null ? void 0 : _a.writeText) !== void 0) {
    return win.navigator.clipboard.writeText(text);
  }
  if (!doc.body) {
    return Promise.reject(new Error());
  }
  const node2 = createNode(doc, text);
  doc.body.appendChild(node2);
  copyNode(node2);
  doc.body.removeChild(node2);
  return Promise.resolve();
}
function connect(state, send, normalize) {
  const copied = state.matches("copied");
  return {
    copied,
    value: state.context.value,
    setValue(value) {
      send({ type: "VALUE.SET", value });
    },
    copy() {
      send({ type: "COPY" });
    },
    getRootProps() {
      return normalize.element({
        ...parts.root.attrs,
        "data-copied": dataAttr(copied),
        id: dom.getRootId(state.context)
      });
    },
    getLabelProps() {
      return normalize.label({
        ...parts.label.attrs,
        htmlFor: dom.getInputId(state.context),
        "data-copied": dataAttr(copied),
        id: dom.getLabelId(state.context)
      });
    },
    getControlProps() {
      return normalize.element({
        ...parts.control.attrs,
        "data-copied": dataAttr(copied)
      });
    },
    getInputProps() {
      return normalize.input({
        ...parts.input.attrs,
        defaultValue: state.context.value,
        "data-copied": dataAttr(copied),
        readOnly: true,
        "data-readonly": "true",
        id: dom.getInputId(state.context),
        onFocus(event) {
          event.currentTarget.select();
        },
        onCopy() {
          send({ type: "INPUT.COPY" });
        }
      });
    },
    getTriggerProps() {
      return normalize.button({
        ...parts.trigger.attrs,
        type: "button",
        "aria-label": copied ? "Copied to clipboard" : "Copy to clipboard",
        "data-copied": dataAttr(copied),
        onClick() {
          send({ type: "COPY" });
        }
      });
    },
    getIndicatorProps(props22) {
      return normalize.element({
        ...parts.indicator.attrs,
        hidden: props22.copied !== copied
      });
    }
  };
}
function machine(userContext) {
  const ctx = compact2(userContext);
  return createMachine(
    {
      id: "clipboard",
      initial: "idle",
      context: {
        value: "",
        timeout: 3e3,
        ...ctx
      },
      watch: {
        value: ["syncInputElement"]
      },
      on: {
        "VALUE.SET": {
          actions: ["setValue"]
        },
        COPY: {
          target: "copied",
          actions: ["copyToClipboard", "invokeOnCopy"]
        }
      },
      states: {
        idle: {
          on: {
            "INPUT.COPY": {
              target: "copied",
              actions: ["invokeOnCopy"]
            }
          }
        },
        copied: {
          after: {
            COPY_TIMEOUT: "idle"
          },
          on: {
            COPY: {
              target: "copied",
              actions: ["copyToClipboard", "invokeOnCopy"]
            },
            "INPUT.COPY": {
              actions: ["invokeOnCopy"]
            }
          }
        }
      }
    },
    {
      actions: {
        setValue(ctx2, evt) {
          ctx2.value = evt.value;
        },
        copyToClipboard(ctx2) {
          dom.writeToClipboard(ctx2);
        },
        invokeOnCopy(ctx2) {
          var _a;
          (_a = ctx2.onStatusChange) == null ? void 0 : _a.call(ctx2, { copied: true });
        },
        syncInputElement(ctx2) {
          dom.setValue(dom.getInputEl(ctx2), ctx2.value);
        }
      },
      delays: {
        COPY_TIMEOUT: (ctx2) => ctx2.timeout
      }
    }
  );
}
var props = createProps()([
  "getRootNode",
  "id",
  "ids",
  "value",
  "timeout",
  "onStatusChange"
]);
var contextProps = createSplitProps(props);
var indicatorProps = createProps()(["copied"]);
var splitIndicatorProps = createSplitProps(indicatorProps);

// node_modules/@ark-ui/react/dist/components/clipboard/use-clipboard.js
var import_react41 = __toESM(require_react(), 1);
var useClipboard = (props5 = {}) => {
  const { getRootNode } = useEnvironmentContext();
  const initialContext = {
    id: (0, import_react41.useId)(),
    getRootNode,
    ...props5
  };
  const context = {
    ...initialContext
  };
  const [state, send] = useMachine(machine(initialContext), { context });
  return connect(state, send, normalizeProps);
};

// node_modules/@ark-ui/react/dist/components/clipboard/clipboard-root.js
var ClipboardRoot = (0, import_react43.forwardRef)((props5, ref2) => {
  const [useClipboardProps, localProps] = createSplitProps2()(props5, [
    "id",
    "ids",
    "onStatusChange",
    "timeout",
    "value"
  ]);
  const clipboard = useClipboard(useClipboardProps);
  const mergedProps = mergeProps(clipboard.getRootProps(), localProps);
  return (0, import_jsx_runtime29.jsx)(ClipboardProvider, { value: clipboard, children: (0, import_jsx_runtime29.jsx)(ark.div, { ref: ref2, ...mergedProps }) });
});
ClipboardRoot.displayName = "ClipboardRoot";

// node_modules/@ark-ui/react/dist/components/clipboard/clipboard-root-provider.js
var import_jsx_runtime30 = __toESM(require_jsx_runtime(), 1);
var import_react45 = __toESM(require_react(), 1);
var ClipboardRootProvider = (0, import_react45.forwardRef)(
  (props5, ref2) => {
    const [{ value: clipboard }, localProps] = createSplitProps2()(props5, [
      "value"
    ]);
    const mergedProps = mergeProps(clipboard.getRootProps(), localProps);
    return (0, import_jsx_runtime30.jsx)(ClipboardProvider, { value: clipboard, children: (0, import_jsx_runtime30.jsx)(ark.div, { ref: ref2, ...mergedProps }) });
  }
);
ClipboardRootProvider.displayName = "ClipboardRootProvider";

// node_modules/@ark-ui/react/dist/components/clipboard/clipboard-trigger.js
var import_jsx_runtime31 = __toESM(require_jsx_runtime(), 1);
var import_react47 = __toESM(require_react(), 1);
var ClipboardTrigger = (0, import_react47.forwardRef)(
  (props5, ref2) => {
    const clipboard = useClipboardContext();
    const mergedProps = mergeProps(clipboard.getTriggerProps(), props5);
    return (0, import_jsx_runtime31.jsx)(ark.button, { ...mergedProps, ref: ref2 });
  }
);
ClipboardTrigger.displayName = "ClipboardTrigger";

// node_modules/@ark-ui/react/dist/components/clipboard/clipboard.js
var clipboard_exports = {};
__export(clipboard_exports, {
  Context: () => ClipboardContext,
  Control: () => ClipboardControl,
  Indicator: () => ClipboardIndicator,
  Input: () => ClipboardInput,
  Label: () => ClipboardLabel,
  Root: () => ClipboardRoot,
  RootProvider: () => ClipboardRootProvider,
  Trigger: () => ClipboardTrigger
});

// node_modules/@chakra-ui/react/dist/esm/components/clipboard/clipboard.js
var {
  withProvider: withProvider9,
  withContext: withContext12,
  useStyles: useClipboardStyles,
  PropsProvider: PropsProvider12
} = createSlotRecipeContext({ key: "clipboard" });
var ClipboardRootProvider2 = withProvider9(clipboard_exports.RootProvider, "root", { forwardAsChild: true });
var ClipboardRoot2 = withProvider9(
  clipboard_exports.Root,
  "root",
  { forwardAsChild: true }
);
var ClipboardPropsProvider = PropsProvider12;
var ClipboardTrigger2 = withContext12(clipboard_exports.Trigger, "trigger", { forwardAsChild: true });
var ClipboardControl2 = withContext12(clipboard_exports.Control, "control", { forwardAsChild: true });
var ClipboardIndicator2 = withContext12(clipboard_exports.Indicator, "indicator", { forwardAsChild: true });
var ClipboardInput2 = withContext12(clipboard_exports.Input, "input", { forwardAsChild: true });
var ClipboardLabel2 = withContext12(clipboard_exports.Label, "label", { forwardAsChild: true });
var ClipboardContext2 = clipboard_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/clipboard/namespace.js
var namespace_exports10 = {};
__export(namespace_exports10, {
  Context: () => ClipboardContext2,
  Control: () => ClipboardControl2,
  Indicator: () => ClipboardIndicator2,
  Input: () => ClipboardInput2,
  Label: () => ClipboardLabel2,
  PropsProvider: () => ClipboardPropsProvider,
  Root: () => ClipboardRoot2,
  RootProvider: () => ClipboardRootProvider2,
  Trigger: () => ClipboardTrigger2
});

// node_modules/@chakra-ui/react/dist/esm/components/code/code.js
var { withContext: withContext13, PropsProvider: PropsProvider13 } = createRecipeContext({
  key: "code"
});
var Code = withContext13("code");
var CodePropsProvider = PropsProvider13;

// node_modules/@chakra-ui/react/dist/esm/components/collapsible/collapsible.js
var {
  withProvider: withProvider10,
  withContext: withContext14,
  useStyles: useCollapsibleStyles,
  PropsProvider: PropsProvider14
} = createSlotRecipeContext({ key: "collapsible" });
var CollapsibleRootProvider = withProvider10(collapsible_exports.RootProvider, "root", { forwardAsChild: true });
var CollapsibleRoot = withProvider10(collapsible_exports.Root, "root", { forwardAsChild: true });
var CollapsiblePropsProvider = PropsProvider14;
var CollapsibleTrigger = withContext14(collapsible_exports.Trigger, "trigger", { forwardAsChild: true });
var CollapsibleContent = withContext14(collapsible_exports.Content, "content", { forwardAsChild: true });
var CollapsibleContext = collapsible_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/collapsible/namespace.js
var namespace_exports11 = {};
__export(namespace_exports11, {
  Content: () => CollapsibleContent,
  Context: () => CollapsibleContext,
  PropsProvider: () => CollapsiblePropsProvider,
  Root: () => CollapsibleRoot,
  RootProvider: () => CollapsibleRootProvider,
  Trigger: () => CollapsibleTrigger
});

// node_modules/@chakra-ui/react/dist/esm/components/color-picker/color-picker.js
var {
  withProvider: withProvider11,
  withContext: withContext15,
  useStyles: useColorPickerStyles,
  PropsProvider: PropsProvider15
} = createSlotRecipeContext({ key: "colorPicker" });
var ColorPickerRootProvider = withProvider11(color_picker_exports.RootProvider, "root", { forwardAsChild: true });
var ColorPickerRoot = withProvider11(color_picker_exports.Root, "root", { forwardAsChild: true });
var ColorPickerPropsProvider = PropsProvider15;
var ColorPickerLabel = withContext15(color_picker_exports.Label, "label", { forwardAsChild: true });
var ColorPickerControl = withContext15(color_picker_exports.Control, "control", { forwardAsChild: true });
var ColorPickerTrigger = withContext15(color_picker_exports.Trigger, "trigger", { forwardAsChild: true });
var ColorPickerPositioner = withContext15(color_picker_exports.Positioner, "positioner", { forwardAsChild: true });
var ColorPickerContent = withContext15(color_picker_exports.Content, "content", { forwardAsChild: true });
var ColorPickerArea = withContext15(color_picker_exports.Area, "area", { forwardAsChild: true });
var ColorPickerAreaBackground = withContext15(color_picker_exports.AreaBackground, "areaBackground", { forwardAsChild: true });
var ColorPickerAreaThumb = withContext15(color_picker_exports.AreaThumb, "areaThumb", { forwardAsChild: true });
var ColorPickerChannelSlider = withContext15(color_picker_exports.ChannelSlider, "channelSlider", { forwardAsChild: true });
var ColorPickerChannelSliderTrack = withContext15(color_picker_exports.ChannelSliderTrack, "channelSliderTrack", {
  forwardAsChild: true
});
var ColorPickerChannelSliderThumb = withContext15(color_picker_exports.ChannelSliderThumb, "channelSliderThumb", {
  forwardAsChild: true
});
var ColorPickerChannelInput = withContext15(color_picker_exports.ChannelInput, "channelInput", { forwardAsChild: true });
var ColorPickerTransparencyGrid = withContext15(color_picker_exports.TransparencyGrid, "transparencyGrid", { forwardAsChild: true });
var ColorPickerSwatchGroup = withContext15(color_picker_exports.SwatchGroup, "swatchGroup", { forwardAsChild: true });
var ColorPickerSwatchTrigger = withContext15(color_picker_exports.SwatchTrigger, "swatchTrigger", { forwardAsChild: true });
var ColorPickerSwatch = withContext15(color_picker_exports.Swatch, "swatch", { forwardAsChild: true });
var ColorPickerSwatchIndicator = withContext15(color_picker_exports.SwatchIndicator, "swatchIndicator", { forwardAsChild: true });
var ColorPickerValueText = withContext15(color_picker_exports.ValueText, "valueText", { forwardAsChild: true });
var ColorPickerValueSwatch = withContext15(color_picker_exports.ValueSwatch, "swatch", { forwardAsChild: true });
var ColorPickerView = withContext15(color_picker_exports.View, "view", { forwardAsChild: true });
var ColorPickerFormatTrigger = withContext15(color_picker_exports.FormatTrigger, "formatTrigger", { forwardAsChild: true });
var ColorPickerFormatSelect = withContext15(color_picker_exports.FormatSelect, "formatSelect", { forwardAsChild: true });
var ColorPickerEyeDropperTrigger = withContext15(color_picker_exports.EyeDropperTrigger, "eyeDropperTrigger", {
  forwardAsChild: true
});
var ColorPickerChannelSliderValueText = withContext15(color_picker_exports.ChannelSliderValueText, "channelSliderValueText", {
  forwardAsChild: true
});
var ColorPickerChannelSliderLabel = withContext15(color_picker_exports.ChannelSliderLabel, "channelSliderLabel", {
  forwardAsChild: true
});
var ColorPickerHiddenInput = color_picker_exports.HiddenInput;
var ColorPickerContext = color_picker_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/color-picker/namespace.js
var namespace_exports12 = {};
__export(namespace_exports12, {
  Area: () => ColorPickerArea,
  AreaBackground: () => ColorPickerAreaBackground,
  AreaThumb: () => ColorPickerAreaThumb,
  ChannelInput: () => ColorPickerChannelInput,
  ChannelSlider: () => ColorPickerChannelSlider,
  ChannelSliderLabel: () => ColorPickerChannelSliderLabel,
  ChannelSliderThumb: () => ColorPickerChannelSliderThumb,
  ChannelSliderTrack: () => ColorPickerChannelSliderTrack,
  ChannelSliderValueText: () => ColorPickerChannelSliderValueText,
  Content: () => ColorPickerContent,
  Context: () => ColorPickerContext,
  Control: () => ColorPickerControl,
  EyeDropperTrigger: () => ColorPickerEyeDropperTrigger,
  FormatSelect: () => ColorPickerFormatSelect,
  FormatTrigger: () => ColorPickerFormatTrigger,
  HiddenInput: () => ColorPickerHiddenInput,
  Label: () => ColorPickerLabel,
  Positioner: () => ColorPickerPositioner,
  PropsProvider: () => ColorPickerPropsProvider,
  Root: () => ColorPickerRoot,
  RootProvider: () => ColorPickerRootProvider,
  Swatch: () => ColorPickerSwatch,
  SwatchGroup: () => ColorPickerSwatchGroup,
  SwatchIndicator: () => ColorPickerSwatchIndicator,
  SwatchTrigger: () => ColorPickerSwatchTrigger,
  TransparencyGrid: () => ColorPickerTransparencyGrid,
  Trigger: () => ColorPickerTrigger,
  ValueSwatch: () => ColorPickerValueSwatch,
  ValueText: () => ColorPickerValueText,
  View: () => ColorPickerView
});

// node_modules/@chakra-ui/react/dist/esm/components/container/container.js
var { withContext: withContext16, PropsProvider: PropsProvider16 } = createRecipeContext({
  key: "container"
});
var Container = withContext16("div");
var ContainerPropsProvider = PropsProvider16;

// node_modules/@chakra-ui/react/dist/esm/components/data-list/data-list.js
var {
  withProvider: withProvider12,
  withContext: withContext17,
  useStyles: useDataListStyles,
  PropsProvider: PropsProvider17
} = createSlotRecipeContext({ key: "dataList" });
var DataListRoot = withProvider12(
  "dl",
  "root"
);
var DataListPropsProvider = PropsProvider17;
var DataListItem = withContext17(
  "div",
  "item"
);
var DataListItemLabel = withContext17("dt", "itemLabel");
var DataListItemValue = withContext17("dd", "itemValue");

// node_modules/@chakra-ui/react/dist/esm/components/data-list/namespace.js
var namespace_exports13 = {};
__export(namespace_exports13, {
  Item: () => DataListItem,
  ItemLabel: () => DataListItemLabel,
  ItemValue: () => DataListItemValue,
  PropsProvider: () => DataListPropsProvider,
  Root: () => DataListRoot
});

// node_modules/@chakra-ui/react/dist/esm/components/dialog/dialog.js
var import_jsx_runtime32 = __toESM(require_jsx_runtime(), 1);
var import_react48 = __toESM(require_react(), 1);
var {
  withRootProvider: withRootProvider2,
  withContext: withContext18,
  useStyles: useDialogStyles,
  PropsProvider: PropsProvider18
} = createSlotRecipeContext({ key: "dialog" });
var DialogRootProvider = withRootProvider2(
  dialog_exports.RootProvider,
  {
    defaultProps: { unmountOnExit: true, lazyMount: true }
  }
);
var DialogRoot = withRootProvider2(dialog_exports.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var DialogPropsProvider = PropsProvider18;
var DialogTrigger = withContext18(
  dialog_exports.Trigger,
  "trigger",
  { forwardAsChild: true }
);
var DialogPositioner = withContext18(dialog_exports.Positioner, "positioner", { forwardAsChild: true });
var DialogContent = withContext18(
  dialog_exports.Content,
  "content",
  { forwardAsChild: true }
);
var DialogDescription = withContext18(dialog_exports.Description, "description", { forwardAsChild: true });
var DialogTitle = withContext18(
  dialog_exports.Title,
  "title",
  { forwardAsChild: true }
);
var DialogCloseTrigger = withContext18(dialog_exports.CloseTrigger, "closeTrigger", { forwardAsChild: true });
var DialogActionTrigger = (0, import_react48.forwardRef)(function DialogActionTrigger2(props5, ref2) {
  const dialog = useDialogContext();
  return (0, import_jsx_runtime32.jsx)(chakra.button, { ...props5, ref: ref2, onClick: () => dialog.setOpen(false) });
});
var DialogBackdrop = withContext18(
  dialog_exports.Backdrop,
  "backdrop",
  { forwardAsChild: true }
);
var DialogBody = withContext18(
  "div",
  "body"
);
var DialogFooter = withContext18(
  "div",
  "footer"
);
var DialogHeader = withContext18(
  "div",
  "header"
);
var DialogContext = dialog_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/dialog/namespace.js
var namespace_exports14 = {};
__export(namespace_exports14, {
  ActionTrigger: () => DialogActionTrigger,
  Backdrop: () => DialogBackdrop,
  Body: () => DialogBody,
  CloseTrigger: () => DialogCloseTrigger,
  Content: () => DialogContent,
  Context: () => DialogContext,
  Description: () => DialogDescription,
  Footer: () => DialogFooter,
  Header: () => DialogHeader,
  Positioner: () => DialogPositioner,
  PropsProvider: () => DialogPropsProvider,
  Root: () => DialogRoot,
  RootProvider: () => DialogRootProvider,
  Title: () => DialogTitle,
  Trigger: () => DialogTrigger
});

// node_modules/@chakra-ui/react/dist/esm/components/drawer/drawer.js
var import_jsx_runtime33 = __toESM(require_jsx_runtime(), 1);
var import_react49 = __toESM(require_react(), 1);
var {
  withRootProvider: withRootProvider3,
  withContext: withContext19,
  useStyles: useDrawerStyles,
  PropsProvider: PropsProvider19
} = createSlotRecipeContext({ key: "drawer" });
var DrawerRootProvider = withRootProvider3(
  dialog_exports.RootProvider,
  {
    defaultProps: { unmountOnExit: true, lazyMount: true }
  }
);
var DrawerRoot = withRootProvider3(dialog_exports.Root, {
  defaultProps: { unmountOnExit: true, lazyMount: true }
});
var DrawerRootPropsProvider = PropsProvider19;
var DrawerTrigger = withContext19(
  dialog_exports.Trigger,
  "trigger",
  { forwardAsChild: true }
);
var DrawerPositioner = withContext19(dialog_exports.Positioner, "positioner", { forwardAsChild: true });
var DrawerContent = withContext19(
  dialog_exports.Content,
  "content",
  { forwardAsChild: true }
);
var DrawerDescription = withContext19(dialog_exports.Description, "description", { forwardAsChild: true });
var DrawerTitle = withContext19(
  dialog_exports.Title,
  "title",
  { forwardAsChild: true }
);
var DrawerCloseTrigger = withContext19(dialog_exports.CloseTrigger, "closeTrigger", { forwardAsChild: true });
var DrawerActionTrigger = (0, import_react49.forwardRef)(function DrawerActionTrigger2(props5, ref2) {
  const drawer = useDialogContext();
  return (0, import_jsx_runtime33.jsx)(chakra.button, { ...props5, ref: ref2, onClick: () => drawer.setOpen(false) });
});
var DrawerBackdrop = withContext19(
  dialog_exports.Backdrop,
  "backdrop",
  { forwardAsChild: true }
);
var DrawerBody = withContext19(
  "div",
  "body"
);
var DrawerFooter = withContext19(
  "div",
  "footer"
);
var DrawerHeader = withContext19(
  "div",
  "header"
);
var DrawerContext = dialog_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/drawer/namespace.js
var namespace_exports15 = {};
__export(namespace_exports15, {
  ActionTrigger: () => DrawerActionTrigger,
  Backdrop: () => DrawerBackdrop,
  Body: () => DrawerBody,
  CloseTrigger: () => DrawerCloseTrigger,
  Content: () => DrawerContent,
  Context: () => DrawerContext,
  Description: () => DrawerDescription,
  Footer: () => DrawerFooter,
  Header: () => DrawerHeader,
  Positioner: () => DrawerPositioner,
  Root: () => DrawerRoot,
  RootPropsProvider: () => DrawerRootPropsProvider,
  RootProvider: () => DrawerRootProvider,
  Title: () => DrawerTitle,
  Trigger: () => DrawerTrigger
});

// node_modules/@chakra-ui/react/dist/esm/components/editable/editable.js
var import_jsx_runtime34 = __toESM(require_jsx_runtime(), 1);
var import_react50 = __toESM(require_react(), 1);
var {
  withProvider: withProvider13,
  withContext: withContext20,
  useStyles: useEditableStyles,
  PropsProvider: PropsProvider20
} = createSlotRecipeContext({ key: "editable" });
var EditableRootProvider = withProvider13(editable_exports.RootProvider, "root", { forwardAsChild: true });
var EditableRoot = withProvider13(
  editable_exports.Root,
  "root",
  { forwardAsChild: true }
);
var EditablePropsProvider = PropsProvider20;
var EditablePreview = withContext20(editable_exports.Preview, "preview", { forwardAsChild: true });
var EditableInput = withContext20(
  editable_exports.Input,
  "input",
  { forwardAsChild: true }
);
var ArkEditableTextarea = (0, import_react50.forwardRef)(function EditableTextarea2(props5, ref2) {
  const editable = useEditableContext();
  const mergedProps = mergeProps2(editable.getInputProps(), props5);
  return (0, import_jsx_runtime34.jsx)(ark.textarea, { ref: ref2, ...mergedProps });
});
var EditableTextarea = withContext20(ArkEditableTextarea, "input", { forwardAsChild: true });
var EditableControl = withContext20(editable_exports.Control, "control", { forwardAsChild: true });
var EditableArea = withContext20(
  editable_exports.Area,
  "area",
  { forwardAsChild: true }
);
var EditableEditTrigger = withContext20(editable_exports.EditTrigger, "editTrigger", { forwardAsChild: true });
var EditableSubmitTrigger = withContext20(editable_exports.SubmitTrigger, "submitTrigger", { forwardAsChild: true });
var EditableCancelTrigger = withContext20(editable_exports.CancelTrigger, "cancelTrigger", { forwardAsChild: true });
var EditableContext = editable_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/editable/namespace.js
var namespace_exports16 = {};
__export(namespace_exports16, {
  Area: () => EditableArea,
  CancelTrigger: () => EditableCancelTrigger,
  Context: () => EditableContext,
  Control: () => EditableControl,
  EditTrigger: () => EditableEditTrigger,
  Input: () => EditableInput,
  Preview: () => EditablePreview,
  PropsProvider: () => EditablePropsProvider,
  Root: () => EditableRoot,
  RootProvider: () => EditableRootProvider,
  SubmitTrigger: () => EditableSubmitTrigger,
  Textarea: () => EditableTextarea
});

// node_modules/@chakra-ui/react/dist/esm/components/empty-state/empty-state.js
var {
  withProvider: withProvider14,
  withContext: withContext21,
  useStyles: useEmptyStateStyles,
  PropsProvider: PropsProvider21
} = createSlotRecipeContext({ key: "emptyState" });
var EmptyStateRoot = withProvider14(
  "div",
  "root"
);
var EmptyStatePropsProvider = PropsProvider21;
var EmptyStateContent = withContext21("div", "content");
var EmptyStateIndicator = withContext21("div", "indicator");
var EmptyStateTitle = withContext21("h3", "title");
var EmptyStateDescription = withContext21("p", "description");

// node_modules/@chakra-ui/react/dist/esm/components/empty-state/namespace.js
var namespace_exports17 = {};
__export(namespace_exports17, {
  Content: () => EmptyStateContent,
  Description: () => EmptyStateDescription,
  Indicator: () => EmptyStateIndicator,
  PropsProvider: () => EmptyStatePropsProvider,
  Root: () => EmptyStateRoot,
  Title: () => EmptyStateTitle
});

// node_modules/@ark-ui/react/dist/providers/environment/environment-provider.js
var import_jsx_runtime35 = __toESM(require_jsx_runtime(), 1);
var import_react51 = __toESM(require_react(), 1);

// node_modules/@ark-ui/react/dist/utils/run-if-fn.js
var isFunction = (value) => typeof value === "function";
var runIfFn2 = (valueOrFn, ...args) => isFunction(valueOrFn) ? valueOrFn(...args) : valueOrFn;

// node_modules/@ark-ui/react/dist/providers/environment/environment-provider.js
var EnvironmentProvider = (props5) => {
  const { value, children } = props5;
  const [spanRef, setSpanRef] = (0, import_react51.useState)();
  const getRootNode = (0, import_react51.useMemo)(() => {
    return () => runIfFn2(value) ?? (spanRef == null ? void 0 : spanRef.ownerDocument) ?? document;
  }, [value, spanRef]);
  const environment = (0, import_react51.useMemo)(
    () => ({
      getRootNode,
      getWindow: () => getWindow(getRootNode()),
      getDocument: () => getDocument(getRootNode())
    }),
    [getRootNode]
  );
  return (0, import_jsx_runtime35.jsxs)(EnvironmentContextProvider, { value: environment, children: [
    children,
    !value && (0, import_jsx_runtime35.jsx)("span", { hidden: true, ref: setSpanRef })
  ] });
};

// node_modules/@chakra-ui/react/dist/esm/components/field/field.js
var import_jsx_runtime37 = __toESM(require_jsx_runtime(), 1);
var import_react53 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/components/icon/create-icon.js
var import_jsx_runtime36 = __toESM(require_jsx_runtime(), 1);
var import_react52 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/components/icon/icon.js
var { withContext: withContext22 } = createRecipeContext({ key: "icon" });
var Icon = withContext22("svg", {
  defaultProps: {
    focusable: false,
    asChild: true,
    "aria-hidden": true
  }
});

// node_modules/@chakra-ui/react/dist/esm/components/icon/create-icon.js
function createIcon(options) {
  const {
    viewBox = "0 0 24 24",
    d: pathDefinition,
    displayName,
    defaultProps = {}
  } = options;
  const path = import_react52.Children.toArray(options.path);
  const Comp = (0, import_react52.forwardRef)((props5, ref2) => (0, import_jsx_runtime36.jsx)(
    Icon,
    {
      ref: ref2,
      asChild: false,
      viewBox,
      ...defaultProps,
      ...props5,
      children: path.length ? path : (0, import_jsx_runtime36.jsx)("path", { fill: "currentColor", d: pathDefinition })
    }
  ));
  Comp.displayName = displayName;
  return Comp;
}

// node_modules/@chakra-ui/react/dist/esm/components/field/field.js
var {
  withProvider: withProvider15,
  withContext: withContext23,
  useStyles: useFieldStyles,
  useClassNames,
  PropsProvider: PropsProvider22
} = createSlotRecipeContext({ key: "field" });
var FieldRoot = withProvider15(
  field_exports.Root,
  "root",
  { forwardAsChild: true }
);
var FieldPropsProvider = PropsProvider22;
var FieldLabel = withContext23(
  field_exports.Label,
  "label",
  { forwardAsChild: true }
);
var FieldHelperText = withContext23(field_exports.HelperText, "helperText", { forwardAsChild: true });
var FieldErrorText = withContext23(
  field_exports.ErrorText,
  "errorText",
  { forwardAsChild: true }
);
var FieldErrorIcon = createIcon({
  d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
});
var FieldRequiredIndicator = (0, import_react53.forwardRef)(function RequiredIndicator(props5, ref2) {
  const { fallback, children = "*", ...restProps } = props5;
  const field = useFieldContext();
  const classNames = useClassNames();
  const styles = useFieldStyles();
  if (!(field == null ? void 0 : field.required)) {
    return fallback;
  }
  return (0, import_jsx_runtime37.jsx)(
    chakra.span,
    {
      ref: ref2,
      "aria-hidden": "true",
      ...restProps,
      className: cx(classNames.requiredIndicator, props5.className),
      css: [styles.requiredIndicator, props5.css],
      children
    }
  );
});

// node_modules/@chakra-ui/react/dist/esm/components/field/namespace.js
var namespace_exports18 = {};
__export(namespace_exports18, {
  ErrorIcon: () => FieldErrorIcon,
  ErrorText: () => FieldErrorText,
  HelperText: () => FieldHelperText,
  Label: () => FieldLabel,
  PropsProvider: () => FieldPropsProvider,
  RequiredIndicator: () => FieldRequiredIndicator,
  Root: () => FieldRoot
});

// node_modules/@chakra-ui/react/dist/esm/components/fieldset/fieldset.js
var { withProvider: withProvider16, withContext: withContext24 } = createSlotRecipeContext({
  key: "fieldset"
});
var FieldsetRoot = withProvider16(fieldset_exports.Root, "root");
var FieldsetErrorText = withContext24(fieldset_exports.ErrorText, "errorText");
var FieldsetHelperText = withContext24(fieldset_exports.HelperText, "helperText");
var FieldsetLegend = withContext24(fieldset_exports.Legend, "legend");
var FieldsetContent = withContext24(ark.div, "content");
var FieldsetContext = fieldset_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/fieldset/namespace.js
var namespace_exports19 = {};
__export(namespace_exports19, {
  Content: () => FieldsetContent,
  Context: () => FieldsetContext,
  ErrorText: () => FieldsetErrorText,
  HelperText: () => FieldsetHelperText,
  Legend: () => FieldsetLegend,
  Root: () => FieldsetRoot
});

// node_modules/@chakra-ui/react/dist/esm/components/file-upload/file-upload.js
var import_jsx_runtime38 = __toESM(require_jsx_runtime(), 1);
var import_react54 = __toESM(require_react(), 1);
var {
  withProvider: withProvider17,
  withContext: withContext25,
  useStyles: useFileUploadStyles,
  PropsProvider: PropsProvider23
} = createSlotRecipeContext({ key: "fileUpload" });
var FileUploadRootProvider = withProvider17(file_upload_exports.RootProvider, "root", { forwardAsChild: true });
var FileUploadRoot = withProvider17(
  file_upload_exports.Root,
  "root",
  { forwardAsChild: true }
);
var FileUploadPropsProvider = PropsProvider23;
var FileUploadClearTrigger = (0, import_react54.forwardRef)(function FileUploadClearTrigger2(props5, ref2) {
  const fileUpload = useFileUploadContext();
  return (0, import_jsx_runtime38.jsx)(
    chakra.button,
    {
      ref: ref2,
      type: "button",
      "data-scope": "file-upload",
      "data-part": "clear-trigger",
      "aria-label": "Clear selected files",
      hidden: fileUpload.acceptedFiles.length === 0,
      ...props5,
      onClick: (event) => {
        var _a;
        (_a = props5.onClick) == null ? void 0 : _a.call(props5, event);
        if (event.defaultPrevented) return;
        fileUpload.clearFiles();
      }
    }
  );
});
var FileUploadDropzone = withContext25(file_upload_exports.Dropzone, "dropzone", { forwardAsChild: true });
var FileUploadDropzoneContent = withContext25("div", "dropzoneContent");
var FileUploadItem = withContext25(
  file_upload_exports.Item,
  "item",
  { forwardAsChild: true }
);
var FileUploadItemContent = withContext25("div", "itemContent");
var FileUploadItemDeleteTrigger = withContext25(file_upload_exports.ItemDeleteTrigger, "itemDeleteTrigger", {
  forwardAsChild: true
});
var FileUploadItemGroup = withContext25(file_upload_exports.ItemGroup, "itemGroup", { forwardAsChild: true });
var FileUploadItemName = withContext25(file_upload_exports.ItemName, "itemName", { forwardAsChild: true });
var FileUploadItemPreview = withContext25(file_upload_exports.ItemPreview, "itemPreview", { forwardAsChild: true });
var FileUploadItemPreviewImage = withContext25(file_upload_exports.ItemPreviewImage, "itemPreviewImage", { forwardAsChild: true });
var FileUploadItemSizeText = withContext25(file_upload_exports.ItemSizeText, "itemSizeText", { forwardAsChild: true });
var FileUploadLabel = withContext25(file_upload_exports.Label, "label", { forwardAsChild: true });
var FileUploadTrigger = withContext25(file_upload_exports.Trigger, "trigger", { forwardAsChild: true });
var FileUploadContext = file_upload_exports.Context;
var FileUploadHiddenInput = file_upload_exports.HiddenInput;

// node_modules/@chakra-ui/react/dist/esm/components/file-upload/namespace.js
var namespace_exports20 = {};
__export(namespace_exports20, {
  ClearTrigger: () => FileUploadClearTrigger,
  Context: () => FileUploadContext,
  Dropzone: () => FileUploadDropzone,
  DropzoneContent: () => FileUploadDropzoneContent,
  HiddenInput: () => FileUploadHiddenInput,
  Item: () => FileUploadItem,
  ItemContent: () => FileUploadItemContent,
  ItemDeleteTrigger: () => FileUploadItemDeleteTrigger,
  ItemGroup: () => FileUploadItemGroup,
  ItemName: () => FileUploadItemName,
  ItemPreview: () => FileUploadItemPreview,
  ItemPreviewImage: () => FileUploadItemPreviewImage,
  ItemSizeText: () => FileUploadItemSizeText,
  Label: () => FileUploadLabel,
  PropsProvider: () => FileUploadPropsProvider,
  Root: () => FileUploadRoot,
  RootProvider: () => FileUploadRootProvider,
  Trigger: () => FileUploadTrigger
});

// node_modules/@chakra-ui/react/dist/esm/components/flex/flex.js
var import_jsx_runtime39 = __toESM(require_jsx_runtime(), 1);
var import_react55 = __toESM(require_react(), 1);
var Flex = (0, import_react55.forwardRef)(
  function Flex2(props5, ref2) {
    const {
      direction,
      align,
      justify,
      wrap,
      basis,
      grow,
      shrink,
      inline,
      ...rest
    } = props5;
    return (0, import_jsx_runtime39.jsx)(
      chakra.div,
      {
        ref: ref2,
        ...rest,
        css: {
          display: inline ? "inline-flex" : "flex",
          flexDirection: direction,
          alignItems: align,
          justifyContent: justify,
          flexWrap: wrap,
          flexBasis: basis,
          flexGrow: grow,
          flexShrink: shrink,
          ...props5.css
        }
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/float/float.js
var import_jsx_runtime40 = __toESM(require_jsx_runtime(), 1);
var import_react56 = __toESM(require_react(), 1);
var Float = (0, import_react56.forwardRef)(
  function Float2(props5, ref2) {
    const {
      offsetX,
      offsetY,
      offset = "0",
      placement = "top-end",
      ...rest
    } = props5;
    const styles = (0, import_react56.useMemo)(
      () => ({
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        insetBlockStart: mapObject(placement, (v) => {
          const [side] = v.split("-");
          const map = {
            top: offsetY ?? offset,
            middle: "50%",
            bottom: "auto"
          };
          return map[side];
        }),
        insetBlockEnd: mapObject(placement, (v) => {
          const [side] = v.split("-");
          const map = {
            top: "auto",
            middle: "50%",
            bottom: offsetY ?? offset
          };
          return map[side];
        }),
        insetStart: mapObject(placement, (v) => {
          const [, align] = v.split("-");
          const map = {
            start: offsetX ?? offset,
            center: "50%",
            end: "auto"
          };
          return map[align];
        }),
        insetEnd: mapObject(placement, (v) => {
          const [, align] = v.split("-");
          const map = {
            start: "auto",
            center: "50%",
            end: offsetX ?? offset
          };
          return map[align];
        }),
        translate: mapObject(placement, (v) => {
          const [side, align] = v.split("-");
          const mapX = { start: "-50%", center: "-50%", end: "50%" };
          const mapY = { top: "-50%", middle: "-50%", bottom: "50%" };
          return `${mapX[align]} ${mapY[side]}`;
        })
      }),
      [offset, offsetX, offsetY, placement]
    );
    return (0, import_jsx_runtime40.jsx)(chakra.div, { ref: ref2, css: styles, ...rest });
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/for/for.js
function For(props5) {
  const { each: each2, fallback, children } = props5;
  if ((each2 == null ? void 0 : each2.length) === 0) {
    return fallback || null;
  }
  return each2 == null ? void 0 : each2.map(children);
}

// node_modules/@chakra-ui/react/dist/esm/components/grid/grid-item.js
var import_jsx_runtime41 = __toESM(require_jsx_runtime(), 1);
var import_react57 = __toESM(require_react(), 1);
function spanFn(span) {
  return mapObject(
    span,
    (value) => value === "auto" ? "auto" : `span ${value}/span ${value}`
  );
}
var GridItem = (0, import_react57.forwardRef)(
  function GridItem2(props5, ref2) {
    const {
      area,
      colSpan,
      colStart,
      colEnd,
      rowEnd,
      rowSpan,
      rowStart,
      ...rest
    } = props5;
    const styles = compact({
      gridArea: area,
      gridColumn: spanFn(colSpan),
      gridRow: spanFn(rowSpan),
      gridColumnStart: colStart,
      gridColumnEnd: colEnd,
      gridRowStart: rowStart,
      gridRowEnd: rowEnd
    });
    return (0, import_jsx_runtime41.jsx)(chakra.div, { ref: ref2, css: styles, ...rest });
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/grid/simple-grid.js
var import_jsx_runtime42 = __toESM(require_jsx_runtime(), 1);
var import_react58 = __toESM(require_react(), 1);
var SimpleGrid = (0, import_react58.forwardRef)(
  function SimpleGrid2(props5, ref2) {
    const { columns, minChildWidth, ...rest } = props5;
    const sys = useChakraContext();
    const templateColumns = minChildWidth ? widthToColumns(minChildWidth, sys) : countToColumns(columns);
    return (0, import_jsx_runtime42.jsx)(Grid, { ref: ref2, templateColumns, ...rest });
  }
);
function toPx(n) {
  return typeof n === "number" ? `${n}px` : n;
}
function widthToColumns(width, sys) {
  return mapObject(width, (value) => {
    const _value = sys.tokens.getVar(`sizes.${value}`, toPx(value));
    return value === null ? null : `repeat(auto-fit, minmax(${_value}, 1fr))`;
  });
}
function countToColumns(count) {
  return mapObject(
    count,
    (value) => value === null ? null : `repeat(${value}, minmax(0, 1fr))`
  );
}

// node_modules/@chakra-ui/react/dist/esm/components/group/group.js
var import_jsx_runtime43 = __toESM(require_jsx_runtime(), 1);
var import_react59 = __toESM(require_react(), 1);
var StyledGroup = chakra("div", {
  base: {
    display: "inline-flex",
    gap: "0.5rem",
    isolation: "isolate",
    position: "relative",
    "& [data-group-item]": {
      _focusVisible: {
        zIndex: 1
      }
    }
  },
  variants: {
    orientation: {
      horizontal: {
        flexDirection: "row"
      },
      vertical: {
        flexDirection: "column"
      }
    },
    attached: {
      true: {
        gap: "0!"
      }
    },
    grow: {
      true: {
        display: "flex",
        "& > *": {
          flex: 1
        }
      }
    },
    stacking: {
      "first-on-top": {
        "& > [data-group-item]": {
          zIndex: "calc(var(--group-count) - var(--group-index))"
        }
      },
      "last-on-top": {
        "& > [data-group-item]": {
          zIndex: "var(--group-index)"
        }
      }
    }
  },
  compoundVariants: [
    {
      orientation: "horizontal",
      attached: true,
      css: {
        "& > *[data-first]": {
          borderEndRadius: "0!",
          marginEnd: "-1px"
        },
        "& > *[data-between]": {
          borderRadius: "0!",
          marginEnd: "-1px"
        },
        "& > *[data-last]": {
          borderStartRadius: "0!"
        }
      }
    },
    {
      orientation: "vertical",
      attached: true,
      css: {
        "& > *[data-first]": {
          borderBottomRadius: "0!",
          marginBottom: "-1px"
        },
        "& > *[data-between]": {
          borderRadius: "0!",
          marginBottom: "-1px"
        },
        "& > *[data-last]": {
          borderTopRadius: "0!"
        }
      }
    }
  ],
  defaultVariants: {
    orientation: "horizontal"
  }
});
var Group = (0, import_react59.memo)(
  (0, import_react59.forwardRef)(function Group2(props5, ref2) {
    const {
      align = "center",
      justify = "flex-start",
      children,
      wrap,
      ...rest
    } = props5;
    const count = import_react59.Children.count(children);
    const _children = (0, import_react59.useMemo)(() => {
      const childArray = import_react59.Children.toArray(children).filter(
        import_react59.isValidElement
      );
      return childArray.map((child, index) => {
        const childProps = child.props;
        return (0, import_react59.cloneElement)(child, {
          ...childProps,
          "data-group-item": "",
          "data-first": dataAttr2(index === 0),
          "data-last": dataAttr2(index === count - 1),
          "data-between": dataAttr2(index > 0 && index < count - 1),
          style: {
            "--group-count": count,
            "--group-index": index,
            ...(childProps == null ? void 0 : childProps.style) ?? {}
          }
        });
      });
    }, [children, count]);
    return (0, import_jsx_runtime43.jsx)(
      StyledGroup,
      {
        ref: ref2,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        ...rest,
        children: _children
      }
    );
  })
);

// node_modules/@chakra-ui/react/dist/esm/components/highlight/highlight.js
var import_jsx_runtime45 = __toESM(require_jsx_runtime(), 1);

// node_modules/@ark-ui/react/dist/components/highlight/highlight.js
var import_jsx_runtime44 = __toESM(require_jsx_runtime(), 1);
var import_react61 = __toESM(require_react(), 1);

// node_modules/@zag-js/highlight-word/dist/index.mjs
var normalizeSpan = (spans, len) => {
  const result = [];
  const append2 = (start, end, match2) => {
    if (end - start > 0) result.push({ start, end, match: match2 });
  };
  if (spans.length === 0) {
    append2(0, len, false);
  } else {
    let lastIndex = 0;
    for (const chunk of spans) {
      append2(lastIndex, chunk.start, false);
      append2(chunk.start, chunk.end, true);
      lastIndex = chunk.end;
    }
    append2(lastIndex, len, false);
  }
  return result;
};
function highlightFirst(props5) {
  const { text, query, ignoreCase } = props5;
  const searchText = ignoreCase ? text.toLowerCase() : text;
  const searchQuery = ignoreCase ? typeof query === "string" ? query.toLowerCase() : query : query;
  const start = typeof searchText === "string" ? searchText.indexOf(searchQuery) : -1;
  if (start === -1) {
    return [{ text, match: false }];
  }
  const end = start + searchQuery.length;
  const spans = [{ start, end }];
  return normalizeSpan(spans, text.length).map((chunk) => ({
    text: text.slice(chunk.start, chunk.end),
    match: !!chunk.match
  }));
}
var escapeRegexp = (term) => term.replace(/[|\\{}()[\]^$+*?.-]/g, (char2) => `\\${char2}`);
var buildRegex = (queryProp, flags) => {
  const query = queryProp.filter(Boolean).map((text) => escapeRegexp(text));
  return new RegExp(`(${query.join("|")})`, flags);
};
var getRegexFlags = (ignoreCase, matchAll = true) => `${ignoreCase ? "i" : ""}${matchAll ? "g" : ""}`;
function highlightMultiple(props5) {
  const { text, query, ignoreCase, matchAll } = props5;
  if (query.length === 0) {
    return [{ text, match: false }];
  }
  const flags = getRegexFlags(ignoreCase, matchAll);
  const regex = buildRegex(Array.isArray(query) ? query : [query], flags);
  const spans = [...text.matchAll(regex)].map((match2) => ({
    start: match2.index || 0,
    end: (match2.index || 0) + match2[0].length
  }));
  return normalizeSpan(spans, props5.text.length).map((chunk) => ({
    text: props5.text.slice(chunk.start, chunk.end),
    match: !!chunk.match
  }));
}
var highlightWord = (props5) => {
  if (props5.matchAll == null) {
    props5.matchAll = Array.isArray(props5.query);
  }
  if (!props5.matchAll && Array.isArray(props5.query)) {
    throw new Error("matchAll must be true when using multiple queries");
  }
  return props5.matchAll ? highlightMultiple(props5) : highlightFirst(props5);
};

// node_modules/@ark-ui/react/dist/components/highlight/use-highlight.js
var import_react60 = __toESM(require_react(), 1);
var useHighlight = (props5) => {
  return (0, import_react60.useMemo)(() => highlightWord(props5), [props5]);
};

// node_modules/@chakra-ui/react/dist/esm/components/highlight/highlight.js
var import_react62 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/components/typography/mark.js
var { withContext: withContext26, PropsProvider: PropsProvider24 } = createRecipeContext({
  key: "mark"
});
var Mark = withContext26("mark");
var MarkPropsProvider = PropsProvider24;

// node_modules/@chakra-ui/react/dist/esm/components/highlight/highlight.js
function Highlight2(props5) {
  const { children, query, ignoreCase, matchAll, styles } = props5;
  if (typeof children !== "string") {
    throw new Error("The children prop of Highlight must be a string");
  }
  const chunks = useHighlight({
    query,
    text: children,
    matchAll,
    ignoreCase
  });
  return (0, import_jsx_runtime45.jsx)(For, { each: chunks, children: (chunk, index) => {
    return chunk.match ? (0, import_jsx_runtime45.jsx)(Mark, { css: styles, children: chunk.text }, index) : (0, import_jsx_runtime45.jsx)(import_react62.Fragment, { children: chunk.text }, index);
  } });
}

// node_modules/@chakra-ui/react/dist/esm/components/hover-card/hover-card.js
var {
  withRootProvider: withRootProvider4,
  withContext: withContext27,
  useStyles: useHoverCardStyles,
  PropsProvider: PropsProvider25
} = createSlotRecipeContext({ key: "hoverCard" });
var HoverCardRootProvider = withRootProvider4(hover_card_exports.Root);
var HoverCardRoot = withRootProvider4(
  hover_card_exports.Root
);
var HoverCardPropsProvider = PropsProvider25;
var HoverCardTrigger = withContext27(hover_card_exports.Trigger, "trigger", { forwardAsChild: true });
var HoverCardPositioner = withContext27(hover_card_exports.Positioner, "positioner", { forwardAsChild: true });
var HoverCardContent = withContext27(hover_card_exports.Content, "content", { forwardAsChild: true });
var HoverCardArrow = withContext27(
  hover_card_exports.Arrow,
  "arrow",
  { forwardAsChild: true }
);
var HoverCardArrowTip = withContext27(hover_card_exports.ArrowTip, "arrowTip", { forwardAsChild: true });
var HoverCardContext = hover_card_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/hover-card/namespace.js
var namespace_exports21 = {};
__export(namespace_exports21, {
  Arrow: () => HoverCardArrow,
  ArrowTip: () => HoverCardArrowTip,
  Content: () => HoverCardContent,
  Context: () => HoverCardContext,
  Positioner: () => HoverCardPositioner,
  PropsProvider: () => HoverCardPropsProvider,
  Root: () => HoverCardRoot,
  RootProvider: () => HoverCardRootProvider,
  Trigger: () => HoverCardTrigger
});

// node_modules/@chakra-ui/react/dist/esm/components/image/image.js
var import_jsx_runtime46 = __toESM(require_jsx_runtime(), 1);
var import_react63 = __toESM(require_react(), 1);
var Image = (0, import_react63.forwardRef)(
  function Image2(props5, ref2) {
    const { align, fit = "cover", ...rest } = props5;
    return (0, import_jsx_runtime46.jsx)(
      chakra.img,
      {
        ref: ref2,
        objectFit: fit,
        objectPosition: align,
        className: cx("chakra-image", props5.className),
        ...rest
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/input/input.js
var { withContext: withContext28, PropsProvider: PropsProvider26 } = createRecipeContext({
  key: "input"
});
var Input = withContext28(field_exports.Input);
var InputPropsProvider = PropsProvider26;

// node_modules/@chakra-ui/react/dist/esm/components/input/input-addon.js
var import_jsx_runtime47 = __toESM(require_jsx_runtime(), 1);
var import_react64 = __toESM(require_react(), 1);
var InputAddon = (0, import_react64.forwardRef)(
  function InputAddon2({ unstyled, ...props5 }, ref2) {
    const recipe = useRecipe({ key: "inputAddon", recipe: props5.recipe });
    const [variantProps, localProps] = recipe.splitVariantProps(props5);
    const styles = unstyled ? EMPTY_SLOT_STYLES : recipe(variantProps);
    return (0, import_jsx_runtime47.jsx)(chakra.div, { ref: ref2, ...localProps, css: [styles, props5.css] });
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/input/input-element.js
var InputElement = chakra("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 2,
    color: "fg.subtle",
    height: "full",
    fontSize: "sm",
    px: "3"
  },
  variants: {
    placement: {
      start: {
        insetInlineStart: "0"
      },
      end: {
        insetInlineEnd: "0"
      }
    }
  }
});

// node_modules/@chakra-ui/react/dist/esm/components/kbd/kbd.js
var { withContext: withContext29, PropsProvider: PropsProvider27 } = createRecipeContext({
  key: "kbd"
});
var Kbd = withContext29("kbd");

// node_modules/@chakra-ui/react/dist/esm/components/link/link.js
var { withContext: withContext30, PropsProvider: PropsProvider28 } = createRecipeContext({
  key: "link"
});
var Link = withContext30("a");
var LinkPropsProvider = PropsProvider28;

// node_modules/@chakra-ui/react/dist/esm/components/link/link-box.js
var import_jsx_runtime48 = __toESM(require_jsx_runtime(), 1);
var import_react65 = __toESM(require_react(), 1);
var LinkOverlay = (0, import_react65.forwardRef)(
  function LinkOverlay2(props5, ref2) {
    const { rel, className, ...rest } = props5;
    return (0, import_jsx_runtime48.jsx)(
      chakra.a,
      {
        ...rest,
        ref: ref2,
        className: cx("chakra-linkbox__overlay", className),
        css: [
          {
            position: "static",
            "&::before": {
              content: "''",
              cursor: "inherit",
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 0,
              width: "100%",
              height: "100%"
            }
          },
          props5.css
        ]
      }
    );
  }
);
var LinkBox = (0, import_react65.forwardRef)(
  function LinkBox2(props5, ref2) {
    const { className, ...rest } = props5;
    return (0, import_jsx_runtime48.jsx)(
      chakra.div,
      {
        ref: ref2,
        position: "relative",
        ...rest,
        className: cx("chakra-linkbox", className),
        css: [
          {
            /* Elevate the links and abbreviations up */
            "& a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
              position: "relative",
              zIndex: 1
            }
          },
          props5.css
        ]
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/list/list.js
var {
  withProvider: withProvider18,
  withContext: withContext31,
  useStyles: useListStyles,
  PropsProvider: PropsProvider29
} = createSlotRecipeContext({ key: "list" });
var ListRoot = withProvider18(
  "ul",
  "root",
  { defaultProps: { role: "list" } }
);
var ListRootPropsProvider = PropsProvider29;
var ListItem = withContext31("li", "item");
var ListIndicator = withContext31(
  "span",
  "indicator"
);

// node_modules/@chakra-ui/react/dist/esm/components/list/namespace.js
var namespace_exports22 = {};
__export(namespace_exports22, {
  Indicator: () => ListIndicator,
  Item: () => ListItem,
  Root: () => ListRoot,
  RootPropsProvider: () => ListRootPropsProvider
});

// node_modules/@ark-ui/react/dist/providers/locale/locale-provider.js
var import_jsx_runtime49 = __toESM(require_jsx_runtime(), 1);
var LocaleProvider = (props5) => {
  const { children, locale } = props5;
  const context = {
    locale,
    dir: isRTL(locale) ? "rtl" : "ltr"
  };
  return (0, import_jsx_runtime49.jsx)(LocaleContextProvider, { value: context, children });
};

// node_modules/@chakra-ui/react/dist/esm/components/menu/menu.js
var {
  withRootProvider: withRootProvider5,
  withContext: withContext32,
  useStyles: useMenuStyles,
  PropsProvider: PropsProvider30
} = createSlotRecipeContext({ key: "menu" });
var MenuRootProvider = withRootProvider5(
  menu_exports.RootProvider
);
var MenuRoot = withRootProvider5(menu_exports.Root);
var MenuPropsProvider = PropsProvider30;
var MenuTrigger = withContext32(
  menu_exports.Trigger,
  "trigger",
  { forwardAsChild: true }
);
var MenuContextTrigger = withContext32(menu_exports.ContextTrigger, "contextTrigger", { forwardAsChild: true });
var MenuPositioner = withContext32(
  menu_exports.Positioner,
  "positioner",
  { forwardAsChild: true }
);
var MenuSeparator = withContext32(
  menu_exports.Separator,
  "separator",
  { forwardAsChild: true }
);
var MenuContent = withContext32(
  menu_exports.Content,
  "content",
  { forwardAsChild: true }
);
var MenuArrow = withContext32(
  menu_exports.Arrow,
  "arrow",
  { forwardAsChild: true }
);
var MenuArrowTip = withContext32(
  menu_exports.ArrowTip,
  "arrowTip",
  { forwardAsChild: true }
);
var MenuIndicator = withContext32(
  menu_exports.Indicator,
  "indicator",
  { forwardAsChild: true }
);
var MenuItemGroup = withContext32(
  menu_exports.ItemGroup,
  "itemGroup",
  { forwardAsChild: true }
);
var MenuItemGroupLabel = withContext32(menu_exports.ItemGroupLabel, "itemGroupLabel", { forwardAsChild: true });
var MenuItem = withContext32(
  menu_exports.Item,
  "item",
  { forwardAsChild: true }
);
var MenuTriggerItem = withContext32(menu_exports.TriggerItem, "item", { forwardAsChild: true });
var MenuItemText = withContext32(
  menu_exports.ItemText,
  "itemText",
  { forwardAsChild: true }
);
var MenuItemCommand = withContext32(
  "kbd",
  "itemCommand"
);
var MenuItemIndicator = withContext32(menu_exports.ItemIndicator, "itemIndicator", { forwardAsChild: true });
var MenuCheckboxItem = withContext32(menu_exports.CheckboxItem, "item", { forwardAsChild: true });
var MenuRadioItemGroup = withContext32(menu_exports.RadioItemGroup, "itemGroup", { forwardAsChild: true });
var MenuRadioItem = withContext32(
  menu_exports.RadioItem,
  "item",
  { forwardAsChild: true }
);
var MenuContext = menu_exports.Context;
var MenuItemContext = menu_exports.ItemContext;

// node_modules/@chakra-ui/react/dist/esm/components/menu/namespace.js
var namespace_exports23 = {};
__export(namespace_exports23, {
  Arrow: () => MenuArrow,
  ArrowTip: () => MenuArrowTip,
  CheckboxItem: () => MenuCheckboxItem,
  Content: () => MenuContent,
  Context: () => MenuContext,
  ContextTrigger: () => MenuContextTrigger,
  Indicator: () => MenuIndicator,
  Item: () => MenuItem,
  ItemCommand: () => MenuItemCommand,
  ItemContext: () => MenuItemContext,
  ItemGroup: () => MenuItemGroup,
  ItemGroupLabel: () => MenuItemGroupLabel,
  ItemIndicator: () => MenuItemIndicator,
  ItemText: () => MenuItemText,
  Positioner: () => MenuPositioner,
  RadioItem: () => MenuRadioItem,
  RadioItemGroup: () => MenuRadioItemGroup,
  Root: () => MenuRoot,
  RootPropsProvider: () => MenuPropsProvider,
  RootProvider: () => MenuRootProvider,
  Separator: () => MenuSeparator,
  Trigger: () => MenuTrigger,
  TriggerItem: () => MenuTriggerItem
});

// node_modules/@chakra-ui/react/dist/esm/components/native-select/native-select.js
var import_jsx_runtime50 = __toESM(require_jsx_runtime(), 1);
var import_react66 = __toESM(require_react(), 1);
var [BasePropsProvider, useBasePropsContext] = createContext2({
  name: "BasePropsContext",
  hookName: "useBasePropsContext",
  providerName: "<NativeSelect />",
  strict: false
});
var {
  withProvider: withProvider19,
  useClassNames: useClassNames2,
  useStyles: useNativeSelectStyles,
  PropsProvider: PropsProvider31
} = createSlotRecipeContext({ key: "nativeSelect" });
var NativeSelectRoot = withProvider19("div", "root", {
  wrapElement(element, props5) {
    const field = useFieldContext();
    const disabled = Boolean((field == null ? void 0 : field.disabled) ?? props5.disabled);
    const invalid = Boolean((field == null ? void 0 : field.invalid) ?? props5.invalid);
    return (0, import_jsx_runtime50.jsx)(BasePropsProvider, { value: { disabled, invalid }, children: element });
  }
});
var NativeSelectPropsProvider = PropsProvider31;
var StyledSelect = chakra(field_exports.Select, {}, { forwardAsChild: true });
var NativeSelectField = (0, import_react66.forwardRef)(function NativeSelectField2(props5, ref2) {
  const { children, placeholder, ...restProps } = props5;
  const styles = useNativeSelectStyles();
  const classNames = useClassNames2();
  return (0, import_jsx_runtime50.jsxs)(
    StyledSelect,
    {
      ...restProps,
      ref: ref2,
      className: cx(classNames.field, props5.className),
      css: [styles.field, props5.css],
      children: [
        placeholder && (0, import_jsx_runtime50.jsx)("option", { value: "", children: placeholder }),
        children
      ]
    }
  );
});
function NativeSelectIndicator(props5) {
  const styles = useNativeSelectStyles();
  const { disabled, invalid } = useBasePropsContext();
  const classNames = useClassNames2();
  return (0, import_jsx_runtime50.jsx)(
    chakra.div,
    {
      ...props5,
      "data-disabled": dataAttr2(disabled),
      "data-invalid": dataAttr2(invalid),
      className: cx(classNames.indicator, props5.className),
      css: [styles.indicator, props5.css],
      children: props5.children ?? (0, import_jsx_runtime50.jsx)(ChevronDownIcon, {})
    }
  );
}

// node_modules/@chakra-ui/react/dist/esm/components/native-select/namespace.js
var namespace_exports24 = {};
__export(namespace_exports24, {
  Field: () => NativeSelectField,
  Indicator: () => NativeSelectIndicator,
  PropsProvider: () => NativeSelectPropsProvider,
  Root: () => NativeSelectRoot
});

// node_modules/@chakra-ui/react/dist/esm/components/number-input/number-input.js
var import_jsx_runtime51 = __toESM(require_jsx_runtime(), 1);
var {
  withProvider: withProvider20,
  withContext: withContext33,
  useStyles: useNumberInputStyles,
  PropsProvider: PropsProvider32
} = createSlotRecipeContext({ key: "numberInput" });
var NumberInputRootProvider = withProvider20(number_input_exports.RootProvider, "root", { forwardAsChild: true });
var NumberInputRoot = withProvider20(number_input_exports.Root, "root", { forwardAsChild: true });
var NumberInputPropsProvider = PropsProvider32;
var NumberInputControl = withContext33(number_input_exports.Control, "control", { forwardAsChild: true });
var NumberInputLabel = withContext33(number_input_exports.Label, "label", { forwardAsChild: true });
var NumberInputInput = withContext33(number_input_exports.Input, "input", { forwardAsChild: true });
var NumberInputIncrementTrigger = withContext33(number_input_exports.IncrementTrigger, "incrementTrigger", {
  forwardAsChild: true,
  defaultProps: { children: (0, import_jsx_runtime51.jsx)(ChevronUpIcon, {}) }
});
var NumberInputDecrementTrigger = withContext33(number_input_exports.DecrementTrigger, "decrementTrigger", {
  forwardAsChild: true,
  defaultProps: { children: (0, import_jsx_runtime51.jsx)(ChevronDownIcon, {}) }
});
var NumberInputScrubber = withContext33(number_input_exports.Scrubber, "scrubber", { forwardAsChild: true });
var NumberInputValueText = withContext33(number_input_exports.ValueText, "valueText", { forwardAsChild: true });
var NumberInputContext = number_input_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/number-input/namespace.js
var namespace_exports25 = {};
__export(namespace_exports25, {
  Context: () => NumberInputContext,
  Control: () => NumberInputControl,
  DecrementTrigger: () => NumberInputDecrementTrigger,
  IncrementTrigger: () => NumberInputIncrementTrigger,
  Input: () => NumberInputInput,
  Label: () => NumberInputLabel,
  PropsProvider: () => NumberInputPropsProvider,
  Root: () => NumberInputRoot,
  RootProvider: () => NumberInputRootProvider,
  Scrubber: () => NumberInputScrubber,
  ValueText: () => NumberInputValueText
});

// node_modules/@ark-ui/react/dist/components/pagination/use-pagination-context.js
var [PaginationProvider, usePaginationContext] = createContext({
  name: "PaginationContext",
  hookName: "usePaginationContext",
  providerName: "<PaginationProvider />"
});

// node_modules/@ark-ui/react/dist/components/pagination/pagination-context.js
var PaginationContext = (props5) => props5.children(usePaginationContext());

// node_modules/@ark-ui/react/dist/components/pagination/pagination-ellipsis.js
var import_jsx_runtime52 = __toESM(require_jsx_runtime(), 1);
var import_react68 = __toESM(require_react(), 1);
var PaginationEllipsis = (0, import_react68.forwardRef)(
  (props5, ref2) => {
    const [ellipsisProps2, localProps] = createSplitProps2()(props5, ["index"]);
    const pagination = usePaginationContext();
    const mergedProps = mergeProps(pagination.getEllipsisProps(ellipsisProps2), localProps);
    return (0, import_jsx_runtime52.jsx)(ark.div, { ...mergedProps, ref: ref2 });
  }
);
PaginationEllipsis.displayName = "PaginationEllipsis";

// node_modules/@ark-ui/react/dist/components/pagination/pagination-item.js
var import_jsx_runtime53 = __toESM(require_jsx_runtime(), 1);
var import_react70 = __toESM(require_react(), 1);
var PaginationItem = (0, import_react70.forwardRef)((props5, ref2) => {
  const [itemProps2, localProps] = createSplitProps2()(props5, ["value", "type"]);
  const pagination = usePaginationContext();
  const mergedProps = mergeProps(pagination.getItemProps(itemProps2), localProps);
  return (0, import_jsx_runtime53.jsx)(ark.button, { ...mergedProps, ref: ref2 });
});
PaginationItem.displayName = "PaginationItem";

// node_modules/@ark-ui/react/dist/components/pagination/pagination-next-trigger.js
var import_jsx_runtime54 = __toESM(require_jsx_runtime(), 1);
var import_react72 = __toESM(require_react(), 1);
var PaginationNextTrigger = (0, import_react72.forwardRef)(
  (props5, ref2) => {
    const pagination = usePaginationContext();
    const mergedProps = mergeProps(pagination.getNextTriggerProps(), props5);
    return (0, import_jsx_runtime54.jsx)(ark.button, { ...mergedProps, ref: ref2 });
  }
);
PaginationNextTrigger.displayName = "PaginationNextTrigger";

// node_modules/@ark-ui/react/dist/components/pagination/pagination-prev-trigger.js
var import_jsx_runtime55 = __toESM(require_jsx_runtime(), 1);
var import_react74 = __toESM(require_react(), 1);
var PaginationPrevTrigger = (0, import_react74.forwardRef)(
  (props5, ref2) => {
    const pagination = usePaginationContext();
    const mergedProps = mergeProps(pagination.getPrevTriggerProps(), props5);
    return (0, import_jsx_runtime55.jsx)(ark.button, { ...mergedProps, ref: ref2 });
  }
);
PaginationPrevTrigger.displayName = "PaginationPrevTrigger";

// node_modules/@ark-ui/react/dist/components/pagination/pagination-root.js
var import_jsx_runtime56 = __toESM(require_jsx_runtime(), 1);
var import_react78 = __toESM(require_react(), 1);

// node_modules/@zag-js/pagination/dist/index.mjs
var anatomy2 = createAnatomy("pagination").parts("root", "item", "ellipsis", "prevTrigger", "nextTrigger");
var parts2 = anatomy2.build();
var dom2 = createScope({
  getRootId: (ctx) => {
    var _a;
    return ((_a = ctx.ids) == null ? void 0 : _a.root) ?? `pagination:${ctx.id}`;
  },
  getPrevTriggerId: (ctx) => {
    var _a;
    return ((_a = ctx.ids) == null ? void 0 : _a.prevTrigger) ?? `pagination:${ctx.id}:prev`;
  },
  getNextTriggerId: (ctx) => {
    var _a;
    return ((_a = ctx.ids) == null ? void 0 : _a.nextTrigger) ?? `pagination:${ctx.id}:next`;
  },
  getEllipsisId: (ctx, index) => {
    var _a, _b;
    return ((_b = (_a = ctx.ids) == null ? void 0 : _a.ellipsis) == null ? void 0 : _b.call(_a, index)) ?? `pagination:${ctx.id}:ellipsis:${index}`;
  },
  getItemId: (ctx, page) => {
    var _a, _b;
    return ((_b = (_a = ctx.ids) == null ? void 0 : _a.item) == null ? void 0 : _b.call(_a, page)) ?? `pagination:${ctx.id}:item:${page}`;
  }
});
var range = (start, end) => {
  let length2 = end - start + 1;
  return Array.from({ length: length2 }, (_, idx) => idx + start);
};
var transform = (items) => {
  return items.map((value) => {
    if (typeof value === "number") return { type: "page", value };
    return { type: "ellipsis" };
  });
};
var ELLIPSIS = "ellipsis";
var getRange = (ctx) => {
  const totalPageNumbers = Math.min(2 * ctx.siblingCount + 5, ctx.totalPages);
  const firstPageIndex = 1;
  const lastPageIndex = ctx.totalPages;
  const leftSiblingIndex = Math.max(ctx.page - ctx.siblingCount, firstPageIndex);
  const rightSiblingIndex = Math.min(ctx.page + ctx.siblingCount, lastPageIndex);
  const showLeftEllipsis = leftSiblingIndex > firstPageIndex + 1;
  const showRightEllipsis = rightSiblingIndex < lastPageIndex - 1;
  const itemCount = totalPageNumbers - 2;
  if (!showLeftEllipsis && showRightEllipsis) {
    const leftRange = range(1, itemCount);
    return [...leftRange, ELLIPSIS, lastPageIndex];
  }
  if (showLeftEllipsis && !showRightEllipsis) {
    const rightRange = range(lastPageIndex - itemCount + 1, lastPageIndex);
    return [firstPageIndex, ELLIPSIS, ...rightRange];
  }
  if (showLeftEllipsis && showRightEllipsis) {
    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, ELLIPSIS, ...middleRange, ELLIPSIS, lastPageIndex];
  }
  const fullRange = range(firstPageIndex, lastPageIndex);
  return fullRange;
};
var getTransformedRange = (ctx) => transform(getRange(ctx));
function connect2(state, send, normalize) {
  const totalPages = state.context.totalPages;
  const page = state.context.page;
  const translations = state.context.translations;
  const count = state.context.count;
  const previousPage = state.context.previousPage;
  const nextPage = state.context.nextPage;
  const pageRange = state.context.pageRange;
  const type = state.context.type;
  const isButton = type === "button";
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;
  const pages = getTransformedRange(state.context);
  return {
    count,
    page,
    pageSize: state.context.pageSize,
    totalPages,
    pages,
    previousPage,
    nextPage,
    pageRange,
    slice(data) {
      return data.slice(pageRange.start, pageRange.end);
    },
    setCount(count2) {
      send({ type: "SET_COUNT", count: count2 });
    },
    setPageSize(size) {
      send({ type: "SET_PAGE_SIZE", size });
    },
    setPage(page2) {
      send({ type: "SET_PAGE", page: page2 });
    },
    goToNextPage() {
      send({ type: "NEXT_PAGE" });
    },
    goToPrevPage() {
      send({ type: "PREVIOUS_PAGE" });
    },
    goToFirstPage() {
      send({ type: "FIRST_PAGE" });
    },
    goToLastPage() {
      send({ type: "LAST_PAGE" });
    },
    getRootProps() {
      return normalize.element({
        id: dom2.getRootId(state.context),
        ...parts2.root.attrs,
        dir: state.context.dir,
        "aria-label": translations.rootLabel
      });
    },
    getEllipsisProps(props22) {
      return normalize.element({
        id: dom2.getEllipsisId(state.context, props22.index),
        ...parts2.ellipsis.attrs,
        dir: state.context.dir
      });
    },
    getItemProps(props22) {
      var _a;
      const index = props22.value;
      const isCurrentPage = index === state.context.page;
      return normalize.element({
        id: dom2.getItemId(state.context, index),
        ...parts2.item.attrs,
        dir: state.context.dir,
        "data-index": index,
        "data-selected": dataAttr(isCurrentPage),
        "aria-current": isCurrentPage ? "page" : void 0,
        "aria-label": (_a = translations.itemLabel) == null ? void 0 : _a.call(translations, { page: index, totalPages }),
        onClick() {
          send({ type: "SET_PAGE", page: index });
        },
        ...isButton && { type: "button" }
      });
    },
    getPrevTriggerProps() {
      return normalize.element({
        id: dom2.getPrevTriggerId(state.context),
        ...parts2.prevTrigger.attrs,
        dir: state.context.dir,
        "data-disabled": dataAttr(isFirstPage),
        "aria-label": translations.prevTriggerLabel,
        onClick() {
          send({ type: "PREVIOUS_PAGE" });
        },
        ...isButton && { disabled: isFirstPage, type: "button" }
      });
    },
    getNextTriggerProps() {
      return normalize.element({
        id: dom2.getNextTriggerId(state.context),
        ...parts2.nextTrigger.attrs,
        dir: state.context.dir,
        "data-disabled": dataAttr(isLastPage),
        "aria-label": translations.nextTriggerLabel,
        onClick() {
          send({ type: "NEXT_PAGE" });
        },
        ...isButton && { disabled: isLastPage, type: "button" }
      });
    }
  };
}
var defaultTranslations = {
  rootLabel: "pagination",
  prevTriggerLabel: "previous page",
  nextTriggerLabel: "next page",
  itemLabel({ page, totalPages }) {
    const isLastPage = totalPages > 1 && page === totalPages;
    return `${isLastPage ? "last page, " : ""}page ${page}`;
  }
};
function machine2(userContext) {
  const ctx = compact2(userContext);
  return createMachine(
    {
      id: "pagination",
      initial: "idle",
      context: {
        pageSize: 10,
        siblingCount: 1,
        page: 1,
        type: "button",
        translations: {
          ...defaultTranslations,
          ...ctx.translations
        },
        ...ctx
      },
      watch: {
        pageSize: ["setPageIfNeeded"]
      },
      computed: {
        totalPages: (ctx2) => Math.ceil(ctx2.count / ctx2.pageSize),
        previousPage: (ctx2) => ctx2.page === 1 ? null : ctx2.page - 1,
        nextPage: (ctx2) => ctx2.page === ctx2.totalPages ? null : ctx2.page + 1,
        pageRange: (ctx2) => {
          const start = (ctx2.page - 1) * ctx2.pageSize;
          const end = start + ctx2.pageSize;
          return { start, end };
        },
        isValidPage: (ctx2) => ctx2.page >= 1 && ctx2.page <= ctx2.totalPages
      },
      on: {
        SET_COUNT: [
          {
            guard: "isValidCount",
            actions: ["setCount", "goToFirstPage"]
          },
          {
            actions: "setCount"
          }
        ],
        SET_PAGE: {
          guard: "isValidPage",
          actions: "setPage"
        },
        SET_PAGE_SIZE: {
          actions: "setPageSize"
        },
        FIRST_PAGE: {
          actions: "goToFirstPage"
        },
        LAST_PAGE: {
          actions: "goToLastPage"
        },
        PREVIOUS_PAGE: {
          guard: "canGoToPrevPage",
          actions: "goToPrevPage"
        },
        NEXT_PAGE: {
          guard: "canGoToNextPage",
          actions: "goToNextPage"
        }
      },
      states: {
        idle: {}
      }
    },
    {
      guards: {
        isValidPage: (ctx2, evt) => evt.page >= 1 && evt.page <= ctx2.totalPages,
        isValidCount: (ctx2, evt) => ctx2.page > evt.count,
        canGoToNextPage: (ctx2) => ctx2.page < ctx2.totalPages,
        canGoToPrevPage: (ctx2) => ctx2.page > 1
      },
      actions: {
        setCount(ctx2, evt) {
          ctx2.count = evt.count;
        },
        setPage(ctx2, evt) {
          set.page(ctx2, evt.page);
        },
        setPageSize(ctx2, evt) {
          set.pageSize(ctx2, evt.size);
        },
        goToFirstPage(ctx2) {
          set.page(ctx2, 1);
        },
        goToLastPage(ctx2) {
          set.page(ctx2, ctx2.totalPages);
        },
        goToPrevPage(ctx2) {
          set.page(ctx2, ctx2.page - 1);
        },
        goToNextPage(ctx2) {
          set.page(ctx2, ctx2.page + 1);
        },
        setPageIfNeeded(ctx2, _evt) {
          if (ctx2.isValidPage) return;
          set.page(ctx2, 1);
        }
      }
    }
  );
}
var clampPage = (page, totalPages) => Math.min(Math.max(page, 1), totalPages);
var set = {
  pageSize: (ctx, value) => {
    var _a;
    if (isEqual(ctx.pageSize, value)) return;
    ctx.pageSize = value;
    (_a = ctx.onPageSizeChange) == null ? void 0 : _a.call(ctx, { pageSize: ctx.pageSize });
  },
  page: (ctx, value) => {
    var _a;
    if (isEqual(ctx.page, value)) return;
    ctx.page = clampPage(value, ctx.totalPages);
    (_a = ctx.onPageChange) == null ? void 0 : _a.call(ctx, { page: ctx.page, pageSize: ctx.pageSize });
  }
};
var props2 = createProps()([
  "count",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "onPageChange",
  "onPageSizeChange",
  "page",
  "pageSize",
  "siblingCount",
  "translations",
  "type"
]);
var splitProps2 = createSplitProps(props2);
var itemProps = createProps()(["value", "type"]);
var splitItemProps = createSplitProps(itemProps);
var ellipsisProps = createProps()(["index"]);
var splitEllipsisProps = createSplitProps(ellipsisProps);

// node_modules/@ark-ui/react/dist/components/pagination/use-pagination.js
var import_react76 = __toESM(require_react(), 1);
var usePagination = (props5) => {
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const initialContext = {
    id: (0, import_react76.useId)(),
    dir,
    getRootNode,
    page: props5.defaultPage,
    ...props5
  };
  const context = {
    ...initialContext,
    page: props5.page,
    onPageChange: useEvent(props5.onPageChange, { sync: true })
  };
  const [state, send] = useMachine(machine2(initialContext), { context });
  return connect2(state, send, normalizeProps);
};

// node_modules/@ark-ui/react/dist/components/pagination/pagination-root.js
var PaginationRoot = (0, import_react78.forwardRef)((props5, ref2) => {
  const [paginationProps, localProps] = createSplitProps2()(props5, [
    "count",
    "defaultPage",
    "id",
    "ids",
    "onPageChange",
    "onPageSizeChange",
    "page",
    "pageSize",
    "siblingCount",
    "translations",
    "type"
  ]);
  const pagination = usePagination(paginationProps);
  const mergedProps = mergeProps(pagination.getRootProps(), localProps);
  return (0, import_jsx_runtime56.jsx)(PaginationProvider, { value: pagination, children: (0, import_jsx_runtime56.jsx)(ark.nav, { ...mergedProps, ref: ref2 }) });
});
PaginationRoot.displayName = "PaginationRoot";

// node_modules/@ark-ui/react/dist/components/pagination/pagination-root-provider.js
var import_jsx_runtime57 = __toESM(require_jsx_runtime(), 1);
var import_react80 = __toESM(require_react(), 1);
var PaginationRootProvider = (0, import_react80.forwardRef)(
  (props5, ref2) => {
    const [{ value: pagination }, localProps] = createSplitProps2()(props5, [
      "value"
    ]);
    const mergedProps = mergeProps(pagination.getRootProps(), localProps);
    return (0, import_jsx_runtime57.jsx)(PaginationProvider, { value: pagination, children: (0, import_jsx_runtime57.jsx)(ark.nav, { ...mergedProps, ref: ref2 }) });
  }
);
PaginationRootProvider.displayName = "PaginationRootProvider";

// node_modules/@ark-ui/react/dist/components/pagination/pagination.js
var pagination_exports = {};
__export(pagination_exports, {
  Context: () => PaginationContext,
  Ellipsis: () => PaginationEllipsis,
  Item: () => PaginationItem,
  NextTrigger: () => PaginationNextTrigger,
  PrevTrigger: () => PaginationPrevTrigger,
  Root: () => PaginationRoot,
  RootProvider: () => PaginationRootProvider
});

// node_modules/@chakra-ui/react/dist/esm/components/pagination/pagination.js
var {
  withProvider: withProvider21,
  withContext: withContext34,
  useStyles: usePaginationStyles,
  PropsProvider: PropsProvider33
} = createSlotRecipeContext({ key: "pagination" });
var PaginationRootProvider2 = withProvider21(pagination_exports.RootProvider, "root", {
  forwardAsChild: true,
  forwardProps: ["page"]
});
var PaginationRoot2 = withProvider21(
  pagination_exports.Root,
  "root",
  { forwardAsChild: true, forwardProps: ["page"] }
);
var PaginationPropsProvider = PropsProvider33;
var PaginationEllipsis2 = withContext34(pagination_exports.Ellipsis, "ellipsis", { forwardAsChild: true });
var PaginationItem2 = withContext34(pagination_exports.Item, "item", { forwardAsChild: true });
var PaginationNextTrigger2 = withContext34(pagination_exports.NextTrigger, "nextTrigger", { forwardAsChild: true });
var PaginationPrevTrigger2 = withContext34(pagination_exports.PrevTrigger, "prevTrigger", { forwardAsChild: true });
var PaginationContext2 = pagination_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/pagination/namespace.js
var namespace_exports26 = {};
__export(namespace_exports26, {
  Context: () => PaginationContext2,
  Ellipsis: () => PaginationEllipsis2,
  Item: () => PaginationItem2,
  NextTrigger: () => PaginationNextTrigger2,
  PrevTrigger: () => PaginationPrevTrigger2,
  PropsProvider: () => PaginationPropsProvider,
  Root: () => PaginationRoot2,
  RootProvider: () => PaginationRootProvider2
});

// node_modules/@chakra-ui/react/dist/esm/components/pin-input/pin-input.js
var {
  withProvider: withProvider22,
  withContext: withContext35,
  useStyles: usePinInputStyles,
  PropsProvider: PropsProvider34
} = createSlotRecipeContext({ key: "pinInput" });
var PinInputRootProvider = withProvider22(pin_input_exports.RootProvider, "root", { forwardAsChild: true });
var PinInputRoot = withProvider22(
  pin_input_exports.Root,
  "root",
  { forwardProps: ["mask"], forwardAsChild: true }
);
var PinInputPropsProvider = PropsProvider34;
var PinInputControl = withContext35(pin_input_exports.Control, "control", { forwardAsChild: true });
var PinInputInput = withContext35(
  pin_input_exports.Input,
  "input",
  { forwardAsChild: true }
);
var PinInputLabel = withContext35(
  pin_input_exports.Label,
  "label",
  { forwardAsChild: true }
);
var PinInputContext = pin_input_exports.Context;
var PinInputHiddenInput = pin_input_exports.HiddenInput;

// node_modules/@chakra-ui/react/dist/esm/components/pin-input/namespace.js
var namespace_exports27 = {};
__export(namespace_exports27, {
  Context: () => PinInputContext,
  Control: () => PinInputControl,
  HiddenInput: () => PinInputHiddenInput,
  Input: () => PinInputInput,
  Label: () => PinInputLabel,
  PropsProvider: () => PinInputPropsProvider,
  Root: () => PinInputRoot,
  RootProvider: () => PinInputRootProvider
});

// node_modules/@chakra-ui/react/dist/esm/components/popover/popover.js
var {
  withRootProvider: withRootProvider6,
  withContext: withContext36,
  useStyles: usePopoverStyles,
  PropsProvider: PropsProvider35
} = createSlotRecipeContext({ key: "popover" });
var PopoverRootProvider = withRootProvider6(
  popover_exports.RootProvider
);
var PopoverRoot = withRootProvider6(popover_exports.Root);
var PopoverPropsProvider = PropsProvider35;
var PopoverTrigger = withContext36(popover_exports.Trigger, "trigger", { forwardAsChild: true });
var PopoverPositioner = withContext36(popover_exports.Positioner, "positioner", { forwardAsChild: true });
var PopoverContent = withContext36(
  popover_exports.Content,
  "content",
  { forwardAsChild: true }
);
var PopoverArrow = withContext36(
  popover_exports.Arrow,
  "arrow",
  { forwardAsChild: true }
);
var PopoverArrowTip = withContext36(popover_exports.ArrowTip, "arrowTip", { forwardAsChild: true });
var PopoverCloseTrigger = withContext36(popover_exports.CloseTrigger, "closeTrigger", { forwardAsChild: true });
var PopoverIndicator = withContext36(popover_exports.Indicator, "indicator", { forwardAsChild: true });
var PopoverTitle = withContext36(
  popover_exports.Title,
  "title",
  { forwardAsChild: true }
);
var PopoverDescription = withContext36(popover_exports.Description, "description", { forwardAsChild: true });
var PopoverFooter = withContext36(
  "footer",
  "footer"
);
var PopoverHeader = withContext36(
  "header",
  "header"
);
var PopoverBody = withContext36(
  "div",
  "body"
);
var PopoverAnchor = withContext36(
  popover_exports.Anchor,
  void 0,
  { forwardAsChild: true }
);
var PopoverContext = popover_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/popover/namespace.js
var namespace_exports28 = {};
__export(namespace_exports28, {
  Anchor: () => PopoverAnchor,
  Arrow: () => PopoverArrow,
  ArrowTip: () => PopoverArrowTip,
  Body: () => PopoverBody,
  CloseTrigger: () => PopoverCloseTrigger,
  Content: () => PopoverContent,
  Context: () => PopoverContext,
  Description: () => PopoverDescription,
  Footer: () => PopoverFooter,
  Header: () => PopoverHeader,
  Positioner: () => PopoverPositioner,
  PropsProvider: () => PopoverPropsProvider,
  Root: () => PopoverRoot,
  RootProvider: () => PopoverRootProvider,
  Title: () => PopoverTitle,
  Trigger: () => PopoverTrigger,
  usePopoverStyles: () => usePopoverStyles
});

// node_modules/@ark-ui/react/dist/components/portal/portal.js
var import_jsx_runtime58 = __toESM(require_jsx_runtime(), 1);
var import_react81 = __toESM(require_react(), 1);
var import_react_dom = __toESM(require_react_dom(), 1);
var Portal = (props5) => {
  var _a;
  const { children, disabled } = props5;
  const [container, setContainer] = (0, import_react81.useState)((_a = props5.container) == null ? void 0 : _a.current);
  const isServer = (0, import_react81.useSyncExternalStore)(
    subscribe2,
    () => false,
    () => true
  );
  const { getRootNode } = useEnvironmentContext();
  (0, import_react81.useEffect)(() => {
    setContainer(() => {
      var _a2;
      return (_a2 = props5.container) == null ? void 0 : _a2.current;
    });
  }, [props5.container]);
  if (isServer || disabled) return (0, import_jsx_runtime58.jsx)(import_jsx_runtime58.Fragment, { children });
  const mountNode = container ?? getPortalNode(getRootNode);
  return (0, import_jsx_runtime58.jsx)(import_jsx_runtime58.Fragment, { children: import_react81.Children.map(children, (child) => (0, import_react_dom.createPortal)(child, mountNode)) });
};
var getPortalNode = (cb) => {
  const node2 = cb == null ? void 0 : cb();
  const rootNode = node2.getRootNode();
  if (isShadowRoot(rootNode)) return rootNode;
  return getDocument(node2).body;
};
var subscribe2 = () => () => {
};

// node_modules/@chakra-ui/react/dist/esm/components/progress/progress.js
var {
  withProvider: withProvider23,
  withContext: withContext37,
  useStyles: useProgressStyles,
  PropsProvider: PropsProvider36
} = createSlotRecipeContext({ key: "progress" });
var ProgressRootProvider = withProvider23(progress_exports.RootProvider, "root", { forwardAsChild: true });
var ProgressRoot = withProvider23(
  progress_exports.Root,
  "root"
);
var ProgressPropsProvider = PropsProvider36;
var ProgressLabel = withContext37(
  progress_exports.Label,
  "label",
  { forwardAsChild: true }
);
var ProgressTrack = withContext37(
  progress_exports.Track,
  "track",
  { forwardAsChild: true }
);
var ProgressRange = withContext37(
  progress_exports.Range,
  "range",
  { forwardAsChild: true }
);
var ProgressValueText = withContext37(progress_exports.ValueText, "valueText", { forwardAsChild: true });
var ProgressContext = progress_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/progress/namespace.js
var namespace_exports29 = {};
__export(namespace_exports29, {
  Context: () => ProgressContext,
  Label: () => ProgressLabel,
  PropsProvider: () => ProgressPropsProvider,
  Range: () => ProgressRange,
  Root: () => ProgressRoot,
  RootProvider: () => ProgressRootProvider,
  Track: () => ProgressTrack,
  ValueText: () => ProgressValueText
});

// node_modules/@chakra-ui/react/dist/esm/components/progress-circle/progress-circle.js
var {
  withProvider: withProvider24,
  withContext: withContext38,
  useStyles: useProgressCircleStyles,
  PropsProvider: PropsProvider37
} = createSlotRecipeContext({ key: "progressCircle" });
var ProgressCircleRootProvider = withProvider24(progress_exports.RootProvider, "root", { forwardAsChild: true });
var ProgressCircleRoot = withProvider24(progress_exports.Root, "root", { forwardAsChild: true });
var ProgressCirclePropsProvider = PropsProvider37;
var ProgressCircleLabel = withContext38(progress_exports.Label, "label", { forwardAsChild: true });
var ProgressCircleCircle = withContext38(progress_exports.Circle, "circle", { forwardAsChild: true });
var ProgressCircleTrack = withContext38(progress_exports.CircleTrack, "circleTrack", { forwardAsChild: true });
var ProgressCircleRange = withContext38(progress_exports.CircleRange, "circleRange", { forwardAsChild: true });
var ProgressCircleValueText = withContext38(progress_exports.ValueText, "valueText", { forwardAsChild: true });
var ProgressCircleContext = progress_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/progress-circle/namespace.js
var namespace_exports30 = {};
__export(namespace_exports30, {
  Circle: () => ProgressCircleCircle,
  Label: () => ProgressCircleLabel,
  PropsProvider: () => ProgressCirclePropsProvider,
  Range: () => ProgressCircleRange,
  Root: () => ProgressCircleRoot,
  RootProvider: () => ProgressCircleRootProvider,
  Track: () => ProgressCircleTrack,
  ValueText: () => ProgressCircleValueText
});

// node_modules/@chakra-ui/react/dist/esm/components/radio-card/radio-card.js
var import_jsx_runtime60 = __toESM(require_jsx_runtime(), 1);
var import_react83 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/components/radiomark/radiomark.js
var import_jsx_runtime59 = __toESM(require_jsx_runtime(), 1);
var import_react82 = __toESM(require_react(), 1);
var Radiomark = (0, import_react82.forwardRef)(
  function Radiomark2(props5, ref2) {
    const recipe = useRecipe({ key: "radiomark", recipe: props5.recipe });
    const [variantProps, restProps] = recipe.splitVariantProps(props5);
    const { checked, disabled, unstyled, children, ...rest } = restProps;
    const styles = unstyled ? EMPTY_STYLES : recipe(variantProps);
    const sharedProps = {
      ref: ref2,
      "data-checked": dataAttr2(checked),
      "data-disabled": dataAttr2(disabled),
      ...rest,
      css: [styles, props5.css]
    };
    return (0, import_jsx_runtime59.jsx)(chakra.span, { ...sharedProps, children: checked && (0, import_jsx_runtime59.jsx)("span", { className: "dot" }) });
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/radio-card/radio-card.js
var {
  withProvider: withProvider25,
  withContext: withContext39,
  useStyles: useRadioCardStyles,
  PropsProvider: PropsProvider38
} = createSlotRecipeContext({ key: "radioCard" });
var RadioCardRootProvider = withProvider25(radio_group_exports.RootProvider, "root", { forwardAsChild: true });
var RadioCardRoot = withProvider25(
  radio_group_exports.Root,
  "root",
  { forwardAsChild: true }
);
var RadioCardPropsProvider = PropsProvider38;
var RadioCardLabel = withContext39(
  radio_group_exports.Label,
  "label",
  { forwardAsChild: true }
);
var RadioCardItem = withContext39(
  radio_group_exports.Item,
  "item",
  { forwardAsChild: true }
);
var RadioCardItemText = withContext39(radio_group_exports.ItemText, "itemText", { forwardAsChild: true });
var RadioCardItemDescription = withContext39("div", "itemDescription", { forwardAsChild: true });
var RadioCardItemControl = withContext39(radio_group_exports.ItemControl, "itemControl", { forwardAsChild: true });
var RadioCardItemContent = withContext39("div", "itemContent");
var RadioCardItemAddon = withContext39("div", "itemAddon");
var RadioCardItemIndicator = (0, import_react83.forwardRef)(function RadioGroupItemIndicator(props5, ref2) {
  const { checked, ...rest } = props5;
  const styles = useRadioCardStyles();
  const itemContext = useRadioGroupItemContext();
  if (checked && itemContext.checked) {
    return (0, import_jsx_runtime60.jsx)(
      chakra.span,
      {
        ref: ref2,
        asChild: true,
        ...rest,
        css: [styles["itemIndicator"], props5.css],
        children: checked
      }
    );
  }
  return (0, import_jsx_runtime60.jsx)(
    Radiomark,
    {
      ref: ref2,
      unstyled: true,
      ...props5,
      checked: itemContext.checked,
      disabled: itemContext.disabled,
      css: [styles["itemIndicator"], props5.css]
    }
  );
});
var RadioCardContext = radio_group_exports.Context;
var RadioCardItemContext = radio_group_exports.ItemContext;
var RadioCardItemHiddenInput = radio_group_exports.ItemHiddenInput;

// node_modules/@chakra-ui/react/dist/esm/components/radio-card/namespace.js
var namespace_exports31 = {};
__export(namespace_exports31, {
  Context: () => RadioCardContext,
  Item: () => RadioCardItem,
  ItemAddon: () => RadioCardItemAddon,
  ItemContent: () => RadioCardItemContent,
  ItemContext: () => RadioCardItemContext,
  ItemControl: () => RadioCardItemControl,
  ItemDescription: () => RadioCardItemDescription,
  ItemHiddenInput: () => RadioCardItemHiddenInput,
  ItemIndicator: () => RadioCardItemIndicator,
  ItemText: () => RadioCardItemText,
  Label: () => RadioCardLabel,
  PropsProvider: () => RadioCardPropsProvider,
  Root: () => RadioCardRoot,
  RootProvider: () => RadioCardRootProvider
});

// node_modules/@chakra-ui/react/dist/esm/components/radio-group/radio-group.js
var import_jsx_runtime61 = __toESM(require_jsx_runtime(), 1);
var import_react84 = __toESM(require_react(), 1);
var {
  withProvider: withProvider26,
  withContext: withContext40,
  useStyles: useRadioGroupStyles,
  PropsProvider: PropsProvider39
} = createSlotRecipeContext({ key: "radioGroup" });
var RadioGroupRootProvider = withProvider26(radio_group_exports.RootProvider, "root", { forwardAsChild: true });
var RadioGroupRoot = withProvider26(
  radio_group_exports.Root,
  "root",
  { forwardAsChild: true }
);
var RadioGroupPropsProvider = PropsProvider39;
var RadioGroupLabel = withContext40(radio_group_exports.Label, "label", { forwardAsChild: true });
var RadioGroupItem = withContext40(
  radio_group_exports.Item,
  "item",
  { forwardAsChild: true }
);
var RadioGroupItemText = withContext40(radio_group_exports.ItemText, "itemText", { forwardAsChild: true });
var RadioGroupItemControl = withContext40(radio_group_exports.ItemControl, "itemControl", { forwardAsChild: true });
var RadioGroupItemIndicator2 = (0, import_react84.forwardRef)(function RadioGroupItemIndicator22(props5, ref2) {
  const styles = useRadioGroupStyles();
  return (0, import_jsx_runtime61.jsx)(radio_group_exports.ItemContext, { children: (itemState) => (0, import_jsx_runtime61.jsx)(radio_group_exports.ItemControl, { asChild: true, children: (0, import_jsx_runtime61.jsx)(
    Radiomark,
    {
      ref: ref2,
      unstyled: true,
      ...props5,
      checked: itemState.checked,
      disabled: itemState.disabled,
      css: [styles["itemControl"], props5.css]
    }
  ) }) });
});
var RadioGroupContext = radio_group_exports.Context;
var RadioGroupItemContext = radio_group_exports.ItemContext;
var RadioGroupItemHiddenInput = radio_group_exports.ItemHiddenInput;

// node_modules/@chakra-ui/react/dist/esm/components/radio-group/namespace.js
var namespace_exports32 = {};
__export(namespace_exports32, {
  Context: () => RadioGroupContext,
  Item: () => RadioGroupItem,
  ItemContext: () => RadioGroupItemContext,
  ItemControl: () => RadioGroupItemControl,
  ItemHiddenInput: () => RadioGroupItemHiddenInput,
  ItemIndicator: () => RadioGroupItemIndicator2,
  ItemText: () => RadioGroupItemText,
  Label: () => RadioGroupLabel,
  PropsProvider: () => RadioGroupPropsProvider,
  Root: () => RadioGroupRoot,
  RootProvider: () => RadioGroupRootProvider
});

// node_modules/@chakra-ui/react/dist/esm/components/rating-group/rating-group.js
var import_jsx_runtime62 = __toESM(require_jsx_runtime(), 1);
var import_react85 = __toESM(require_react(), 1);
var {
  withProvider: withProvider27,
  withContext: withContext41,
  useStyles: useRatingGroupStyles,
  PropsProvider: PropsProvider40
} = createSlotRecipeContext({ key: "ratingGroup" });
var RatingGroupRootProvider = withProvider27(rating_group_exports.RootProvider, "root", { forwardAsChild: true });
var RatingGroupRoot = withProvider27(rating_group_exports.Root, "root", { forwardAsChild: true });
var RatingGroupPropsProvider = PropsProvider40;
var RatingGroupLabel = withContext41(rating_group_exports.Label, "label", { forwardAsChild: true });
var RatingGroupControl = withContext41(rating_group_exports.Control, "control", { forwardAsChild: true });
var RatingGroupItem = withContext41(rating_group_exports.Item, "item", { forwardAsChild: true });
function cloneIcon(icon, type) {
  if (!(0, import_react85.isValidElement)(icon)) return null;
  const props5 = { [`data-${type}`]: "", "aria-hidden": "" };
  return (0, import_react85.cloneElement)(icon, props5);
}
var RatingGroupItemIndicator = (0, import_react85.forwardRef)(function RatingGroupItemIndicator2(props5, ref2) {
  const { icon = (0, import_jsx_runtime62.jsx)(StarIcon, {}), ...rest } = props5;
  const styles = useRatingGroupStyles();
  const itemState = useRatingGroupItemContext();
  return (0, import_jsx_runtime62.jsxs)(
    chakra.span,
    {
      ...rest,
      "data-highlighted": itemState.highlighted ? "" : void 0,
      "data-checked": itemState.checked ? "" : void 0,
      "data-half": itemState.half ? "" : void 0,
      css: [styles.itemIndicator, props5.css],
      ref: ref2,
      children: [
        cloneIcon(icon, "bg"),
        cloneIcon(icon, "fg")
      ]
    }
  );
});
var RatingGroupContext = rating_group_exports.Context;
var RatingGroupItemContext = rating_group_exports.ItemContext;
var RatingGroupHiddenInput = rating_group_exports.HiddenInput;

// node_modules/@chakra-ui/react/dist/esm/components/rating-group/namespace.js
var namespace_exports33 = {};
__export(namespace_exports33, {
  Context: () => RatingGroupContext,
  Control: () => RatingGroupControl,
  HiddenInput: () => RatingGroupHiddenInput,
  Item: () => RatingGroupItem,
  ItemContext: () => RatingGroupItemContext,
  ItemIndicator: () => RatingGroupItemIndicator,
  Label: () => RatingGroupLabel,
  PropsProvider: () => RatingGroupPropsProvider,
  Root: () => RatingGroupRoot,
  RootProvider: () => RatingGroupRootProvider,
  useRatingGroupStyles: () => useRatingGroupStyles
});

// node_modules/@chakra-ui/react/dist/esm/components/segment-group/segment-group.js
var {
  withProvider: withProvider28,
  withContext: withContext42,
  useStyles: useSegmentGroupStyles,
  PropsProvider: PropsProvider41
} = createSlotRecipeContext({ key: "segmentGroup" });
var SegmentGroupRootProvider = withProvider28(segment_group_exports.RootProvider, "root", { forwardAsChild: true });
var SegmentGroupRoot = withProvider28(segment_group_exports.Root, "root", { forwardAsChild: true });
var SegmentGroupPropsProvider = PropsProvider41;
var SegmentGroupItem = withContext42(segment_group_exports.Item, "item", { forwardAsChild: true });
var SegmentGroupItemText = withContext42(segment_group_exports.ItemText, "itemText", { forwardAsChild: true });
var SegmentGroupIndicator = withContext42(segment_group_exports.Indicator, "indicator", { forwardAsChild: true });
var SegmentGroupItemHiddenInput = segment_group_exports.ItemHiddenInput;
var SegmentGroupContext = segment_group_exports.Context;
var SegmentGroupItemContext = segment_group_exports.ItemContext;

// node_modules/@chakra-ui/react/dist/esm/components/segment-group/namespace.js
var namespace_exports34 = {};
__export(namespace_exports34, {
  Context: () => SegmentGroupContext,
  Indicator: () => SegmentGroupIndicator,
  Item: () => SegmentGroupItem,
  ItemContext: () => SegmentGroupItemContext,
  ItemHiddenInput: () => SegmentGroupItemHiddenInput,
  ItemText: () => SegmentGroupItemText,
  PropsProvider: () => SegmentGroupPropsProvider,
  Root: () => SegmentGroupRoot,
  RootProvider: () => SegmentGroupRootProvider
});

// node_modules/@chakra-ui/react/dist/esm/components/select/select.js
var import_jsx_runtime63 = __toESM(require_jsx_runtime(), 1);
var {
  withProvider: withProvider29,
  withContext: withContext43,
  useStyles: useSelectStyles,
  PropsProvider: PropsProvider42
} = createSlotRecipeContext({ key: "select" });
var SelectRootProvider = withProvider29(select_exports.RootProvider, "root", {
  forwardAsChild: true
});
var SelectRoot = withProvider29(
  select_exports.Root,
  "root",
  { forwardAsChild: true }
);
var SelectPropsProvider = PropsProvider42;
var SelectTrigger = withContext43(
  select_exports.Trigger,
  "trigger",
  { forwardAsChild: true }
);
var SelectPositioner = withContext43(select_exports.Positioner, "positioner", { forwardAsChild: true });
var SelectContent = withContext43(
  select_exports.Content,
  "content",
  { forwardAsChild: true }
);
var SelectValueText = withContext43(select_exports.ValueText, "valueText", { forwardAsChild: true });
var SelectClearTrigger = withContext43(select_exports.ClearTrigger, "clearTrigger", { forwardAsChild: true });
var SelectItemGroup = withContext43(select_exports.ItemGroup, "itemGroup", { forwardAsChild: true });
var SelectItemGroupLabel = withContext43(select_exports.ItemGroupLabel, "itemGroupLabel", { forwardAsChild: true });
var SelectItem = withContext43(
  select_exports.Item,
  "item",
  { forwardAsChild: true }
);
var SelectItemText = withContext43(
  select_exports.ItemText,
  "itemText",
  { forwardAsChild: true }
);
var SelectItemIndicator = withContext43(select_exports.ItemIndicator, "itemIndicator", {
  forwardAsChild: true,
  defaultProps: {
    children: (0, import_jsx_runtime63.jsx)(CheckIcon, {})
  }
});
var SelectIndicatorGroup = withContext43("div", "indicatorGroup");
var SelectIndicator = withContext43(select_exports.Indicator, "indicator", {
  forwardAsChild: true,
  defaultProps: {
    children: (0, import_jsx_runtime63.jsx)(ChevronDownIcon, {})
  }
});
var SelectControl = withContext43(
  select_exports.Control,
  "control",
  { forwardAsChild: true }
);
var SelectLabel = withContext43(
  select_exports.Label,
  "label",
  { forwardAsChild: true }
);
var SelectContext = select_exports.Context;
var SelectHiddenSelect = select_exports.HiddenSelect;
var SelectItemContext = select_exports.ItemContext;

// node_modules/@chakra-ui/react/dist/esm/components/select/namespace.js
var namespace_exports35 = {};
__export(namespace_exports35, {
  ClearTrigger: () => SelectClearTrigger,
  Content: () => SelectContent,
  Context: () => SelectContext,
  Control: () => SelectControl,
  HiddenSelect: () => SelectHiddenSelect,
  Indicator: () => SelectIndicator,
  IndicatorGroup: () => SelectIndicatorGroup,
  Item: () => SelectItem,
  ItemContext: () => SelectItemContext,
  ItemGroup: () => SelectItemGroup,
  ItemGroupLabel: () => SelectItemGroupLabel,
  ItemIndicator: () => SelectItemIndicator,
  ItemText: () => SelectItemText,
  Label: () => SelectLabel,
  Positioner: () => SelectPositioner,
  PropsProvider: () => SelectPropsProvider,
  Root: () => SelectRoot,
  RootProvider: () => SelectRootProvider,
  Trigger: () => SelectTrigger,
  ValueText: () => SelectValueText
});

// node_modules/@chakra-ui/react/dist/esm/components/separator/separator.js
var { withContext: withContext44, PropsProvider: PropsProvider43 } = createRecipeContext({
  key: "separator"
});
var Separator = withContext44("span", {
  defaultProps: { role: "separator" }
});
var SeparatorPropsProvider = PropsProvider43;

// node_modules/@chakra-ui/react/dist/esm/components/skeleton/skeleton.js
var { withContext: withContext45, PropsProvider: PropsProvider44 } = createRecipeContext({
  key: "skeleton"
});
var Skeleton = withContext45("div");
var SkeletonPropsProvider = PropsProvider44;

// node_modules/@chakra-ui/react/dist/esm/components/skip-nav/skip-nav-link.js
var import_jsx_runtime64 = __toESM(require_jsx_runtime(), 1);
var import_react86 = __toESM(require_react(), 1);
var fallbackId = "chakra-skip-nav";
var SkipNavLink = (0, import_react86.forwardRef)(
  function SkipNavLink2(props5, ref2) {
    const recipe = useRecipe({ key: "skipNavLink", recipe: props5.recipe });
    const [variantProps, localProps] = recipe.splitVariantProps(props5);
    const styles = recipe(variantProps);
    localProps.id || (localProps.id = fallbackId);
    return (0, import_jsx_runtime64.jsx)(
      chakra.a,
      {
        ...localProps,
        ref: ref2,
        href: `#${localProps.id}`,
        css: [styles, props5.css]
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/skip-nav/skip-nav-content.js
var import_jsx_runtime65 = __toESM(require_jsx_runtime(), 1);
var import_react87 = __toESM(require_react(), 1);
var SkipNavContent = (0, import_react87.forwardRef)(
  function SkipNavContent2(props5, ref2) {
    const { id = fallbackId, ...rest } = props5;
    return (0, import_jsx_runtime65.jsx)(
      chakra.div,
      {
        ref: ref2,
        id,
        tabIndex: -1,
        style: { outline: 0 },
        ...rest
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/slider/slider.js
var {
  withProvider: withProvider30,
  withContext: withContext46,
  useStyles: useSliderStyles,
  PropsProvider: PropsProvider45
} = createSlotRecipeContext({ key: "slider" });
var SliderRootProvider = withProvider30(slider_exports.RootProvider, "root", { forwardAsChild: true });
var SliderRoot = withProvider30(
  slider_exports.Root,
  "root",
  { forwardAsChild: true }
);
var SliderPropsProvider = PropsProvider45;
var SliderControl = withContext46(
  slider_exports.Control,
  "control",
  { forwardAsChild: true }
);
var SliderTrack = withContext46(
  slider_exports.Track,
  "track",
  { forwardAsChild: true }
);
var SliderRange = withContext46(
  slider_exports.Range,
  "range",
  { forwardAsChild: true }
);
var SliderThumb = withContext46(
  slider_exports.Thumb,
  "thumb",
  { forwardAsChild: true }
);
var SliderValueText = withContext46(slider_exports.ValueText, "valueText", { forwardAsChild: true });
var SliderLabel = withContext46(
  slider_exports.Label,
  "label",
  { forwardAsChild: true }
);
var SliderMarkerGroup = withContext46(slider_exports.MarkerGroup, "markerGroup", { forwardAsChild: true });
var SliderMarker = withContext46(
  slider_exports.Marker,
  "marker",
  { forwardAsChild: true }
);
var SliderMarkerIndicator = withContext46("div", "markerIndicator");
var SliderContext = slider_exports.Context;
var SliderHiddenInput = slider_exports.HiddenInput;

// node_modules/@chakra-ui/react/dist/esm/components/slider/namespace.js
var namespace_exports36 = {};
__export(namespace_exports36, {
  Context: () => SliderContext,
  Control: () => SliderControl,
  HiddenInput: () => SliderHiddenInput,
  Label: () => SliderLabel,
  Marker: () => SliderMarker,
  MarkerGroup: () => SliderMarkerGroup,
  MarkerIndicator: () => SliderMarkerIndicator,
  PropsProvider: () => SliderPropsProvider,
  Range: () => SliderRange,
  Root: () => SliderRoot,
  RootProvider: () => SliderRootProvider,
  Thumb: () => SliderThumb,
  Track: () => SliderTrack,
  ValueText: () => SliderValueText
});

// node_modules/@chakra-ui/react/dist/esm/components/spacer/spacer.js
var Spacer = chakra("div", {
  base: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
Spacer.displayName = "Spacer";

// node_modules/@chakra-ui/react/dist/esm/components/spinner/spinner.js
var { withContext: withContext47, PropsProvider: PropsProvider46 } = createRecipeContext({
  key: "spinner"
});
var Spinner = withContext47("span");
var SpinnerPropsProvider = PropsProvider46;

// node_modules/@chakra-ui/react/dist/esm/components/stack/h-stack.js
var import_jsx_runtime67 = __toESM(require_jsx_runtime(), 1);
var import_react89 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/components/stack/stack.js
var import_jsx_runtime66 = __toESM(require_jsx_runtime(), 1);
var import_react88 = __toESM(require_react(), 1);

// node_modules/@chakra-ui/react/dist/esm/components/stack/get-separator-style.js
function getSeparatorStyles(options) {
  const { gap, direction } = options;
  const styles = {
    column: {
      marginY: gap,
      marginX: 0,
      borderInlineStartWidth: 0,
      borderTopWidth: "1px"
    },
    "column-reverse": {
      marginY: gap,
      marginX: 0,
      borderInlineStartWidth: 0,
      borderTopWidth: "1px"
    },
    row: {
      marginX: gap,
      marginY: 0,
      borderInlineStartWidth: "1px",
      borderTopWidth: 0
    },
    "row-reverse": {
      marginX: gap,
      marginY: 0,
      borderInlineStartWidth: "1px",
      borderTopWidth: 0
    }
  };
  return {
    "&": mapObject(direction, (value) => styles[value])
  };
}

// node_modules/@chakra-ui/react/dist/esm/components/stack/stack.js
function getValidChildren(children) {
  return import_react88.Children.toArray(children).filter(
    (child) => (0, import_react88.isValidElement)(child)
  );
}
var Stack = (0, import_react88.forwardRef)(
  function Stack2(props5, ref2) {
    const {
      direction = "column",
      align,
      justify,
      gap = "0.5rem",
      wrap,
      children,
      separator,
      className,
      ...rest
    } = props5;
    const separatorStyle = (0, import_react88.useMemo)(
      () => getSeparatorStyles({ gap, direction }),
      [gap, direction]
    );
    const clones = (0, import_react88.useMemo)(() => {
      if (!separator) return children;
      return getValidChildren(children).map((child, index, arr) => {
        const key = typeof child.key !== "undefined" ? child.key : index;
        const sep = (0, import_react88.cloneElement)(separator, {
          css: [separatorStyle, separator.props.css]
        });
        return (0, import_jsx_runtime66.jsxs)(import_react88.Fragment, { children: [
          child,
          index === arr.length - 1 ? null : sep
        ] }, key);
      });
    }, [children, separator, separatorStyle]);
    return (0, import_jsx_runtime66.jsx)(
      chakra.div,
      {
        ref: ref2,
        display: "flex",
        alignItems: align,
        justifyContent: justify,
        flexDirection: direction,
        flexWrap: wrap,
        gap: separator ? void 0 : gap,
        className: cx("chakra-stack", className),
        ...rest,
        children: clones
      }
    );
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/stack/h-stack.js
var HStack = (0, import_react89.forwardRef)(
  function HStack2(props5, ref2) {
    return (0, import_jsx_runtime67.jsx)(Stack, { align: "center", ...props5, direction: "row", ref: ref2 });
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/stack/v-stack.js
var import_jsx_runtime68 = __toESM(require_jsx_runtime(), 1);
var import_react90 = __toESM(require_react(), 1);
var VStack = (0, import_react90.forwardRef)(
  function VStack2(props5, ref2) {
    return (0, import_jsx_runtime68.jsx)(Stack, { align: "center", ...props5, direction: "column", ref: ref2 });
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/stack/stack-separator.js
var StackSeparator = chakra("div", {
  base: {
    borderWidth: 0,
    alignSelf: "stretch",
    borderColor: "inherit",
    width: "auto",
    height: "auto"
  }
});
StackSeparator.displayName = "StackSeparator";

// node_modules/@chakra-ui/react/dist/esm/components/stat/stat.js
var import_jsx_runtime69 = __toESM(require_jsx_runtime(), 1);
var {
  withProvider: withProvider31,
  withContext: withContext48,
  useStyles: useStatStyles,
  PropsProvider: PropsProvider47
} = createSlotRecipeContext({ key: "stat" });
var StatRoot = withProvider31(
  "dl",
  "root"
);
var StatPropsProvider = PropsProvider47;
var StatLabel = withContext48("dt", "label");
var StatValueText = withContext48(
  "dd",
  "valueText"
);
var StatHelpText = withContext48(
  "span",
  "helpText"
);
var StatValueUnit = withContext48(
  "span",
  "valueUnit"
);
var StatUpIndicator = withContext48(
  "span",
  "indicator",
  {
    defaultProps: {
      "data-type": "up",
      children: (0, import_jsx_runtime69.jsx)(ArrowUpIcon, {})
    }
  }
);
var StatDownIndicator = withContext48("span", "indicator", {
  defaultProps: {
    "data-type": "down",
    children: (0, import_jsx_runtime69.jsx)(ArrowDownIcon, {})
  }
});

// node_modules/@chakra-ui/react/dist/esm/components/stat/namespace.js
var namespace_exports37 = {};
__export(namespace_exports37, {
  DownIndicator: () => StatDownIndicator,
  HelpText: () => StatHelpText,
  Label: () => StatLabel,
  PropsProvider: () => StatPropsProvider,
  Root: () => StatRoot,
  UpIndicator: () => StatUpIndicator,
  ValueText: () => StatValueText,
  ValueUnit: () => StatValueUnit
});

// node_modules/@chakra-ui/react/dist/esm/components/status/namespace.js
var namespace_exports38 = {};
__export(namespace_exports38, {
  Indicator: () => StatusIndicator,
  PropsProvider: () => StatusPropsProvider,
  Root: () => StatusRoot
});

// node_modules/@chakra-ui/react/dist/esm/components/status/status.js
var {
  withProvider: withProvider32,
  withContext: withContext49,
  useStyles: useStatusStyles,
  PropsProvider: PropsProvider48
} = createSlotRecipeContext({ key: "status" });
var StatusRoot = withProvider32(
  "div",
  "root"
);
var StatusPropsProvider = PropsProvider48;
var StatusIndicator = withContext49("div", "indicator");

// node_modules/@chakra-ui/react/dist/esm/components/steps/steps.js
var import_jsx_runtime82 = __toESM(require_jsx_runtime(), 1);

// node_modules/@ark-ui/react/dist/components/steps/steps-completed-content.js
var import_jsx_runtime70 = __toESM(require_jsx_runtime(), 1);
var import_react92 = __toESM(require_react(), 1);

// node_modules/@ark-ui/react/dist/components/steps/use-steps-context.js
var [StepsProvider, useStepsContext] = createContext({
  name: "StepsContext",
  hookName: "useStepsContext",
  providerName: "<StepsProvider />"
});

// node_modules/@ark-ui/react/dist/components/steps/steps-completed-content.js
var StepsCompletedContent = (0, import_react92.forwardRef)(
  (props5, ref2) => {
    const steps = useStepsContext();
    const mergedProps = mergeProps(steps.getContentProps({ index: steps.count }), props5);
    return (0, import_jsx_runtime70.jsx)(ark.div, { ...mergedProps, ref: ref2 });
  }
);
StepsCompletedContent.displayName = "StepsCompletedContent";

// node_modules/@ark-ui/react/dist/components/steps/steps-content.js
var import_jsx_runtime71 = __toESM(require_jsx_runtime(), 1);
var import_react94 = __toESM(require_react(), 1);
var StepsContent = (0, import_react94.forwardRef)((props5, ref2) => {
  const [itemProps2, localProps] = createSplitProps2()(props5, ["index"]);
  const steps = useStepsContext();
  const mergedProps = mergeProps(steps.getContentProps(itemProps2), localProps);
  return (0, import_jsx_runtime71.jsx)(ark.div, { ...mergedProps, ref: ref2 });
});
StepsContent.displayName = "StepsContent";

// node_modules/@ark-ui/react/dist/components/steps/steps-context.js
var StepsContext = (props5) => {
  const context = useStepsContext();
  return props5.children(context);
};
StepsContext.displayName = "StepsContext";

// node_modules/@ark-ui/react/dist/components/steps/steps-indicator.js
var import_jsx_runtime72 = __toESM(require_jsx_runtime(), 1);
var import_react96 = __toESM(require_react(), 1);

// node_modules/@ark-ui/react/dist/components/steps/use-steps-item-props-context.js
var [StepsItemPropsProvider, useStepsItemPropsContext] = createContext({
  name: "StepsItemPropsContext",
  hookName: "useStepsItemPropsContext",
  providerName: "<StepsItemPropsProvider />"
});

// node_modules/@ark-ui/react/dist/components/steps/steps-indicator.js
var StepsIndicator = (0, import_react96.forwardRef)((props5, ref2) => {
  const steps = useStepsContext();
  const itemProps2 = useStepsItemPropsContext();
  const mergedProps = mergeProps(steps.getIndicatorProps(itemProps2), props5);
  return (0, import_jsx_runtime72.jsx)(ark.div, { ...mergedProps, ref: ref2 });
});
StepsIndicator.displayName = "StepsIndicator";

// node_modules/@ark-ui/react/dist/components/steps/steps-item.js
var import_jsx_runtime73 = __toESM(require_jsx_runtime(), 1);
var import_react98 = __toESM(require_react(), 1);

// node_modules/@ark-ui/react/dist/components/steps/use-steps-item-context.js
var [StepsItemProvider, useStepsItemContext] = createContext({
  name: "StepsItemContext",
  hookName: "useStepsItemContext",
  providerName: "<StepsItem />"
});

// node_modules/@ark-ui/react/dist/components/steps/steps-item.js
var StepsItem = (0, import_react98.forwardRef)((props5, ref2) => {
  const [itemProps2, localProps] = createSplitProps2()(props5, ["index"]);
  const steps = useStepsContext();
  const mergedProps = mergeProps(steps.getItemProps(itemProps2), localProps);
  const itemState = steps.getItemState(itemProps2);
  return (0, import_jsx_runtime73.jsx)(StepsItemPropsProvider, { value: itemProps2, children: (0, import_jsx_runtime73.jsx)(StepsItemProvider, { value: itemState, children: (0, import_jsx_runtime73.jsx)(ark.li, { ...mergedProps, ref: ref2 }) }) });
});
StepsItem.displayName = "StepsItem";

// node_modules/@ark-ui/react/dist/components/steps/steps-item-context.js
var StepsItemContext = (props5) => {
  return props5.children(useStepsItemContext());
};
StepsItemContext.displayName = "StepsItemContext";

// node_modules/@ark-ui/react/dist/components/steps/steps-list.js
var import_jsx_runtime74 = __toESM(require_jsx_runtime(), 1);
var import_react100 = __toESM(require_react(), 1);
var StepsList = (0, import_react100.forwardRef)((props5, ref2) => {
  const steps = useStepsContext();
  const mergedProps = mergeProps(steps.getListProps(), props5);
  return (0, import_jsx_runtime74.jsx)(ark.ol, { ...mergedProps, ref: ref2 });
});
StepsList.displayName = "StepsList";

// node_modules/@ark-ui/react/dist/components/steps/steps-next-trigger.js
var import_jsx_runtime75 = __toESM(require_jsx_runtime(), 1);
var import_react102 = __toESM(require_react(), 1);
var StepsNextTrigger = (0, import_react102.forwardRef)(
  (props5, ref2) => {
    const steps = useStepsContext();
    const mergedProps = mergeProps(steps.getNextTriggerProps(), props5);
    return (0, import_jsx_runtime75.jsx)(ark.button, { ...mergedProps, ref: ref2 });
  }
);
StepsNextTrigger.displayName = "StepsNextTrigger";

// node_modules/@ark-ui/react/dist/components/steps/steps-prev-trigger.js
var import_jsx_runtime76 = __toESM(require_jsx_runtime(), 1);
var import_react104 = __toESM(require_react(), 1);
var StepsPrevTrigger = (0, import_react104.forwardRef)(
  (props5, ref2) => {
    const steps = useStepsContext();
    const mergedProps = mergeProps(steps.getPrevTriggerProps(), props5);
    return (0, import_jsx_runtime76.jsx)(ark.button, { ...mergedProps, ref: ref2 });
  }
);
StepsPrevTrigger.displayName = "StepsPrevTrigger";

// node_modules/@ark-ui/react/dist/components/steps/steps-progress.js
var import_jsx_runtime77 = __toESM(require_jsx_runtime(), 1);
var import_react106 = __toESM(require_react(), 1);
var StepsProgress = (0, import_react106.forwardRef)((props5, ref2) => {
  const steps = useStepsContext();
  const mergedProps = mergeProps(steps.getProgressProps(), props5);
  return (0, import_jsx_runtime77.jsx)(ark.div, { ...mergedProps, ref: ref2 });
});
StepsProgress.displayName = "StepsProgress";

// node_modules/@ark-ui/react/dist/components/steps/steps-root.js
var import_jsx_runtime78 = __toESM(require_jsx_runtime(), 1);
var import_react110 = __toESM(require_react(), 1);

// node_modules/@zag-js/steps/dist/index.mjs
var anatomy3 = createAnatomy("steps").parts(
  "root",
  "list",
  "item",
  "trigger",
  "indicator",
  "separator",
  "content",
  "nextTrigger",
  "prevTrigger",
  "progress"
);
var parts3 = anatomy3.build();
var dom3 = createScope({
  getRootId: (ctx) => {
    var _a;
    return ((_a = ctx.ids) == null ? void 0 : _a.root) ?? `steps:${ctx.id}`;
  },
  getListId: (ctx) => {
    var _a;
    return ((_a = ctx.ids) == null ? void 0 : _a.list) ?? `steps:${ctx.id}:list`;
  },
  getTriggerId: (ctx, index) => {
    var _a, _b;
    return ((_b = (_a = ctx.ids) == null ? void 0 : _a.triggerId) == null ? void 0 : _b.call(_a, index)) ?? `steps:${ctx.id}:trigger:${index}`;
  },
  getContentId: (ctx, index) => {
    var _a, _b;
    return ((_b = (_a = ctx.ids) == null ? void 0 : _a.contentId) == null ? void 0 : _b.call(_a, index)) ?? `steps:${ctx.id}:content:${index}`;
  }
});
function connect3(state, send, normalize) {
  const step = state.context.step;
  const count = state.context.count;
  const percent = state.context.percent;
  const hasNextStep = state.context.hasNextStep;
  const hasPrevStep = state.context.hasPrevStep;
  const getItemState = (props22) => ({
    triggerId: dom3.getTriggerId(state.context, props22.index),
    contentId: dom3.getContentId(state.context, props22.index),
    current: props22.index === step,
    completed: props22.index < step,
    incomplete: props22.index > step,
    index: props22.index,
    first: props22.index === 0,
    last: props22.index === count - 1
  });
  const goToNextStep = () => {
    send({ type: "STEP.NEXT", src: "next.trigger.click" });
  };
  const goToPrevStep = () => {
    send({ type: "STEP.PREV", src: "prev.trigger.click" });
  };
  const resetStep = () => {
    send({ type: "STEP.RESET", src: "reset.trigger.click" });
  };
  const setStep = (value) => {
    send({ type: "STEP.SET", value, src: "api.setValue" });
  };
  return {
    value: step,
    count,
    percent,
    hasNextStep,
    hasPrevStep,
    goToNextStep,
    goToPrevStep,
    resetStep,
    getItemState,
    setStep,
    getRootProps() {
      return normalize.element({
        ...parts3.root.attrs,
        id: dom3.getRootId(state.context),
        dir: state.context.dir,
        "data-orientation": state.context.orientation,
        style: {
          "--percent": `${percent}%`
        }
      });
    },
    getListProps() {
      const arr = fromLength(state.context.count);
      const triggerIds = arr.map((_, index) => dom3.getTriggerId(state.context, index));
      return normalize.element({
        ...parts3.list.attrs,
        dir: state.context.dir,
        id: dom3.getListId(state.context),
        role: "tablist",
        "aria-owns": triggerIds.join(" "),
        "aria-orientation": state.context.orientation,
        "data-orientation": state.context.orientation
      });
    },
    getItemProps(props22) {
      const itemState = getItemState(props22);
      return normalize.element({
        ...parts3.item.attrs,
        dir: state.context.dir,
        "aria-current": itemState.current ? "step" : void 0,
        "data-orientation": state.context.orientation
      });
    },
    getTriggerProps(props22) {
      const itemState = getItemState(props22);
      return normalize.button({
        ...parts3.trigger.attrs,
        id: itemState.triggerId,
        role: "tab",
        dir: state.context.dir,
        tabIndex: !state.context.linear || itemState.current ? 0 : -1,
        "aria-selected": itemState.current,
        "aria-controls": itemState.contentId,
        "data-state": itemState.current ? "open" : "closed",
        "data-orientation": state.context.orientation,
        "data-complete": dataAttr(itemState.completed),
        "data-current": dataAttr(itemState.current),
        "data-incomplete": dataAttr(itemState.incomplete),
        onClick(event) {
          if (event.defaultPrevented) return;
          if (state.context.linear) return;
          send({ type: "STEP.SET", value: props22.index, src: "trigger.click" });
        }
      });
    },
    getContentProps(props22) {
      const itemState = getItemState(props22);
      return normalize.element({
        ...parts3.content.attrs,
        dir: state.context.dir,
        id: itemState.contentId,
        role: "tabpanel",
        tabIndex: 0,
        hidden: !itemState.current,
        "data-state": itemState.current ? "open" : "closed",
        "data-orientation": state.context.orientation,
        "aria-labelledby": itemState.triggerId
      });
    },
    getIndicatorProps(props22) {
      const itemState = getItemState(props22);
      return normalize.element({
        ...parts3.indicator.attrs,
        dir: state.context.dir,
        "aria-hidden": true,
        "data-complete": dataAttr(itemState.completed),
        "data-current": dataAttr(itemState.current),
        "data-incomplete": dataAttr(itemState.incomplete)
      });
    },
    getSeparatorProps(props22) {
      const itemState = getItemState(props22);
      return normalize.element({
        ...parts3.separator.attrs,
        dir: state.context.dir,
        "data-orientation": state.context.orientation,
        "data-complete": dataAttr(itemState.completed),
        "data-current": dataAttr(itemState.current),
        "data-incomplete": dataAttr(itemState.incomplete)
      });
    },
    getNextTriggerProps() {
      return normalize.button({
        ...parts3.nextTrigger.attrs,
        dir: state.context.dir,
        type: "button",
        disabled: !hasNextStep,
        onClick(event) {
          if (event.defaultPrevented) return;
          goToNextStep();
        }
      });
    },
    getPrevTriggerProps() {
      return normalize.button({
        dir: state.context.dir,
        ...parts3.prevTrigger.attrs,
        type: "button",
        disabled: !hasPrevStep,
        onClick(event) {
          if (event.defaultPrevented) return;
          goToPrevStep();
        }
      });
    },
    getProgressProps() {
      return normalize.element({
        dir: state.context.dir,
        ...parts3.progress.attrs,
        role: "progressbar",
        "aria-valuenow": percent,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuetext": `${percent}% complete`,
        "data-complete": dataAttr(percent === 100)
      });
    }
  };
}
function machine3(userContext) {
  const ctx = compact2(userContext);
  return createMachine(
    {
      id: "steps",
      initial: "idle",
      context: {
        step: 0,
        count: 1,
        linear: false,
        orientation: "horizontal",
        ...ctx
      },
      computed: {
        percent: (ctx2) => ctx2.step / ctx2.count * 100,
        hasNextStep: (ctx2) => ctx2.step < ctx2.count,
        hasPrevStep: (ctx2) => ctx2.step > 0
      },
      states: {
        idle: {
          on: {
            "STEP.SET": {
              actions: "setStep"
            },
            "STEP.NEXT": {
              actions: "goToNextStep"
            },
            "STEP.PREV": {
              actions: "goToPrevStep"
            },
            "STEP.RESET": {
              actions: "resetStep"
            }
          }
        }
      }
    },
    {
      actions: {
        goToNextStep(ctx2) {
          const value = Math.min(ctx2.step + 1, ctx2.count);
          set2.value(ctx2, value);
        },
        goToPrevStep(ctx2) {
          const value = Math.max(ctx2.step - 1, 0);
          set2.value(ctx2, value);
        },
        resetStep(ctx2) {
          set2.value(ctx2, 0);
        },
        setStep(ctx2, event) {
          const value = event.value;
          const inRange = value >= 0 && value < ctx2.count;
          if (!inRange) throw new RangeError(`Index ${value} is out of bounds`);
          set2.value(ctx2, value);
        }
      }
    }
  );
}
var set2 = {
  value(ctx, step) {
    var _a;
    if (isEqual(ctx.step, step)) return;
    ctx.step = step;
    (_a = ctx.onStepChange) == null ? void 0 : _a.call(ctx, { step });
  }
};
var props3 = createProps()([
  "count",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "linear",
  "onStepChange",
  "onStepComplete",
  "orientation",
  "step"
]);
var splitProps3 = createSplitProps(props3);

// node_modules/@ark-ui/react/dist/components/steps/use-steps.js
var import_react108 = __toESM(require_react(), 1);
function useSteps(props5 = {}) {
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const initialContext = {
    id: (0, import_react108.useId)(),
    dir,
    getRootNode,
    step: props5.defaultStep,
    ...props5
  };
  const context = {
    ...initialContext,
    step: props5.step,
    onStepChange: useEvent(props5.onStepChange),
    onStepComplete: useEvent(props5.onStepComplete)
  };
  const [state, send] = useMachine(machine3(initialContext), {
    context
  });
  return connect3(state, send, normalizeProps);
}

// node_modules/@ark-ui/react/dist/components/steps/steps-root.js
var StepsRoot = (0, import_react110.forwardRef)((props5, ref2) => {
  const [useStepsProps, localProps] = createSplitProps2()(props5, [
    "defaultStep",
    "id",
    "ids",
    "count",
    "linear",
    "onStepChange",
    "onStepComplete",
    "orientation",
    "step"
  ]);
  const steps = useSteps(useStepsProps);
  const mergedProps = mergeProps(steps.getRootProps(), localProps);
  return (0, import_jsx_runtime78.jsx)(StepsProvider, { value: steps, children: (0, import_jsx_runtime78.jsx)(ark.div, { ...mergedProps, ref: ref2 }) });
});
StepsRoot.displayName = "StepsRoot";

// node_modules/@ark-ui/react/dist/components/steps/steps-root-provider.js
var import_jsx_runtime79 = __toESM(require_jsx_runtime(), 1);
var import_react112 = __toESM(require_react(), 1);
var StepsRootProvider = (0, import_react112.forwardRef)(
  (props5, ref2) => {
    const [{ value: steps }, rootProps] = createSplitProps2()(props5, ["value"]);
    const mergedProps = mergeProps(steps.getRootProps(), rootProps);
    return (0, import_jsx_runtime79.jsx)(StepsProvider, { value: steps, children: (0, import_jsx_runtime79.jsx)(ark.div, { ...mergedProps, ref: ref2, children: props5.children }) });
  }
);
StepsRootProvider.displayName = "StepsRootProvider";

// node_modules/@ark-ui/react/dist/components/steps/steps-separator.js
var import_jsx_runtime80 = __toESM(require_jsx_runtime(), 1);
var import_react114 = __toESM(require_react(), 1);
var StepsSeparator = (0, import_react114.forwardRef)((props5, ref2) => {
  const steps = useStepsContext();
  const itemProps2 = useStepsItemPropsContext();
  const mergedProps = mergeProps(steps.getSeparatorProps(itemProps2), props5);
  return (0, import_jsx_runtime80.jsx)(ark.div, { ...mergedProps, ref: ref2 });
});
StepsSeparator.displayName = "StepsSeparator";

// node_modules/@ark-ui/react/dist/components/steps/steps-trigger.js
var import_jsx_runtime81 = __toESM(require_jsx_runtime(), 1);
var import_react116 = __toESM(require_react(), 1);
var StepsTrigger = (0, import_react116.forwardRef)((props5, ref2) => {
  const steps = useStepsContext();
  const itemProps2 = useStepsItemPropsContext();
  const mergedProps = mergeProps(steps.getTriggerProps(itemProps2), props5);
  return (0, import_jsx_runtime81.jsx)(ark.button, { ...mergedProps, ref: ref2 });
});
StepsTrigger.displayName = "StepsTrigger";

// node_modules/@ark-ui/react/dist/components/steps/steps.js
var steps_exports = {};
__export(steps_exports, {
  CompletedContent: () => StepsCompletedContent,
  Content: () => StepsContent,
  Context: () => StepsContext,
  Indicator: () => StepsIndicator,
  Item: () => StepsItem,
  ItemContext: () => StepsItemContext,
  List: () => StepsList,
  NextTrigger: () => StepsNextTrigger,
  PrevTrigger: () => StepsPrevTrigger,
  Progress: () => StepsProgress,
  Root: () => StepsRoot,
  RootProvider: () => StepsRootProvider,
  Separator: () => StepsSeparator,
  Trigger: () => StepsTrigger
});

// node_modules/@chakra-ui/react/dist/esm/components/steps/steps.js
var import_react117 = __toESM(require_react(), 1);
var {
  withProvider: withProvider33,
  withContext: withContext50,
  useStyles: useStepsStyles,
  PropsProvider: PropsProvider49
} = createSlotRecipeContext({ key: "steps" });
var StepsRootProvider2 = withProvider33(steps_exports.RootProvider, "root", { forwardAsChild: true });
var StepsRoot2 = withProvider33(
  steps_exports.Root,
  "root",
  { forwardAsChild: true }
);
var StepsPropsProvider = PropsProvider49;
var StepsList2 = withContext50(
  steps_exports.List,
  "list",
  { forwardAsChild: true }
);
var StepsItem2 = withContext50(
  steps_exports.Item,
  "item",
  { forwardAsChild: true }
);
var StepsTrigger2 = withContext50(
  steps_exports.Trigger,
  "trigger",
  { forwardAsChild: true }
);
var StepsContent2 = withContext50(
  steps_exports.Content,
  "content",
  { forwardAsChild: true }
);
var StepsCompletedContent2 = withContext50(steps_exports.CompletedContent, "content");
var StepsNumber = (0, import_react117.forwardRef)(
  function StepsNumber2(props5, ref2) {
    return (0, import_jsx_runtime82.jsx)(steps_exports.ItemContext, { children: (api) => (0, import_jsx_runtime82.jsx)(chakra.div, { ref: ref2, ...props5, children: api.index + 1 }) });
  }
);
var StepsTitle = withContext50(
  "div",
  "title"
);
var StepsDescription = withContext50("div", "description");
var StepsSeparator2 = withContext50(
  steps_exports.Separator,
  "separator",
  { forwardAsChild: true }
);
var StepsStatus = (props5) => {
  return (0, import_jsx_runtime82.jsx)(steps_exports.ItemContext, { children: (api) => {
    if (api.current) return (0, import_jsx_runtime82.jsx)(import_jsx_runtime82.Fragment, { children: props5.current ?? props5.incomplete });
    if (api.completed) return (0, import_jsx_runtime82.jsx)(import_jsx_runtime82.Fragment, { children: props5.complete });
    return (0, import_jsx_runtime82.jsx)(import_jsx_runtime82.Fragment, { children: props5.incomplete ?? props5.current });
  } });
};
var StepsIndicator2 = withContext50(
  steps_exports.Indicator,
  "indicator",
  {
    forwardAsChild: true,
    defaultProps: {
      children: (0, import_jsx_runtime82.jsx)(StepsStatus, { complete: (0, import_jsx_runtime82.jsx)(CheckIcon, {}), incomplete: (0, import_jsx_runtime82.jsx)(StepsNumber, {}) })
    }
  }
);
var StepsNextTrigger2 = withContext50(steps_exports.NextTrigger, "nextTrigger", { forwardAsChild: true });
var StepsPrevTrigger2 = withContext50(steps_exports.PrevTrigger, "prevTrigger", { forwardAsChild: true });
var StepsContext2 = steps_exports.Context;
var StepsItemContext2 = steps_exports.ItemContext;

// node_modules/@chakra-ui/react/dist/esm/components/steps/namespace.js
var namespace_exports39 = {};
__export(namespace_exports39, {
  CompletedContent: () => StepsCompletedContent2,
  Content: () => StepsContent2,
  Context: () => StepsContext2,
  Description: () => StepsDescription,
  Indicator: () => StepsIndicator2,
  Item: () => StepsItem2,
  ItemContext: () => StepsItemContext2,
  List: () => StepsList2,
  NextTrigger: () => StepsNextTrigger2,
  Number: () => StepsNumber,
  PrevTrigger: () => StepsPrevTrigger2,
  PropsProvider: () => StepsPropsProvider,
  Root: () => StepsRoot2,
  RootProvider: () => StepsRootProvider2,
  Separator: () => StepsSeparator2,
  Status: () => StepsStatus,
  Title: () => StepsTitle,
  Trigger: () => StepsTrigger2
});

// node_modules/@chakra-ui/react/dist/esm/components/switch/switch.js
var import_jsx_runtime83 = __toESM(require_jsx_runtime(), 1);
var import_react118 = __toESM(require_react(), 1);
var {
  withProvider: withProvider34,
  withContext: withContext51,
  useStyles: useSwitchStyles,
  PropsProvider: PropsProvider50
} = createSlotRecipeContext({ key: "switch" });
var SwitchRootProvider = withProvider34(switch_exports.RootProvider, "root", { forwardAsChild: true });
var SwitchRoot = withProvider34(
  switch_exports.Root,
  "root",
  { forwardAsChild: true }
);
var SwitchPropsProvider = PropsProvider50;
var SwitchLabel = withContext51(
  switch_exports.Label,
  "label",
  { forwardAsChild: true }
);
var SwitchControl = withContext51(
  switch_exports.Control,
  "control",
  { forwardAsChild: true }
);
var SwitchThumb = withContext51(
  switch_exports.Thumb,
  "thumb",
  { forwardAsChild: true }
);
var SwitchIndicator = (0, import_react118.forwardRef)(function SwitchIndicator2(props5, ref2) {
  const api = useSwitchContext();
  const styles = useSwitchStyles();
  const { fallback, children, ...rest } = props5;
  return (0, import_jsx_runtime83.jsx)(
    chakra.span,
    {
      ref: ref2,
      "data-checked": dataAttr2(api.checked),
      ...rest,
      css: [styles.indicator, props5.css],
      children: api.checked ? children : fallback
    }
  );
});
var SwitchThumbIndicator = (0, import_react118.forwardRef)(function SwitchThumbIndicator2(props5, ref2) {
  const api = useSwitchContext();
  const { fallback, children, ...rest } = props5;
  return (0, import_jsx_runtime83.jsx)(chakra.span, { ref: ref2, "data-checked": dataAttr2(api.checked), ...rest, children: api.checked ? children : fallback });
});
var SwitchContext = switch_exports.Context;
var SwitchHiddenInput = switch_exports.HiddenInput;

// node_modules/@chakra-ui/react/dist/esm/components/switch/namespace.js
var namespace_exports40 = {};
__export(namespace_exports40, {
  Context: () => SwitchContext,
  Control: () => SwitchControl,
  HiddenInput: () => SwitchHiddenInput,
  Indicator: () => SwitchIndicator,
  Label: () => SwitchLabel,
  PropsProvider: () => SwitchPropsProvider,
  Root: () => SwitchRoot,
  RootProvider: () => SwitchRootProvider,
  Thumb: () => SwitchThumb,
  ThumbIndicator: () => SwitchThumbIndicator
});

// node_modules/@chakra-ui/react/dist/esm/components/table/table.js
var import_jsx_runtime84 = __toESM(require_jsx_runtime(), 1);
var import_react119 = __toESM(require_react(), 1);
var {
  StylesProvider,
  ClassNamesProvider,
  useRecipeResult: useRecipeResult2,
  withContext: withContext52,
  useStyles: useTableStyles,
  PropsProvider: PropsProvider51
} = createSlotRecipeContext({ key: "table" });
var TableRoot = (0, import_react119.forwardRef)(
  function TableRoot2({ native, ...props5 }, ref2) {
    const { styles, props: rootProps, classNames } = useRecipeResult2(props5);
    const rootCss = (0, import_react119.useMemo)(() => {
      if (!native) return styles.root;
      return {
        ...styles.root,
        "& thead": styles.header,
        "& tbody": styles.body,
        "& tfoot": styles.footer,
        "& thead th": styles.columnHeader,
        "& tr": styles.row,
        "& td": styles.cell,
        "& caption": styles.caption
      };
    }, [styles, native]);
    return (0, import_jsx_runtime84.jsx)(ClassNamesProvider, { value: classNames, children: (0, import_jsx_runtime84.jsx)(StylesProvider, { value: styles, children: (0, import_jsx_runtime84.jsx)(
      chakra.table,
      {
        ref: ref2,
        ...rootProps,
        css: [rootCss, props5.css],
        className: cx(classNames == null ? void 0 : classNames["root"], props5.className)
      }
    ) }) });
  }
);
var TableRootPropsProvider = PropsProvider51;
var TableRow = withContext52(
  "tr",
  "row"
);
var TableScrollArea = chakra("div", {
  base: {
    display: "block",
    whiteSpace: "nowrap",
    WebkitOverflowScrolling: "touch",
    overflow: "auto",
    maxWidth: "100%"
  }
});
var TableHeader = withContext52("thead", "header");
var TableFooter = withContext52("tfoot", "footer");
var TableColumnHeader = withContext52("th", "columnHeader");
var TableCell = withContext52(
  "td",
  "cell"
);
var TableCaption = withContext52("caption", "caption", {
  defaultProps: {
    captionSide: "bottom"
  }
});
var TableBody = withContext52(
  "tbody",
  "body"
);
var TableColumnGroup = withContext52("colgroup");
var TableColumn = withContext52(
  "col"
);

// node_modules/@chakra-ui/react/dist/esm/components/table/namespace.js
var namespace_exports41 = {};
__export(namespace_exports41, {
  Body: () => TableBody,
  Caption: () => TableCaption,
  Cell: () => TableCell,
  Column: () => TableColumn,
  ColumnGroup: () => TableColumnGroup,
  ColumnHeader: () => TableColumnHeader,
  Footer: () => TableFooter,
  Header: () => TableHeader,
  Root: () => TableRoot,
  RootPropsProvider: () => TableRootPropsProvider,
  Row: () => TableRow,
  ScrollArea: () => TableScrollArea
});

// node_modules/@ark-ui/react/dist/components/tabs/tab-content.js
var import_jsx_runtime85 = __toESM(require_jsx_runtime(), 1);
var import_react121 = __toESM(require_react(), 1);

// node_modules/@ark-ui/react/dist/components/tabs/use-tabs-context.js
var [TabsProvider, useTabsContext] = createContext({
  name: "TabsContext",
  hookName: "useTabsContext",
  providerName: "<TabsProvider />"
});

// node_modules/@ark-ui/react/dist/components/tabs/tab-content.js
var TabContent = (0, import_react121.forwardRef)((props5, ref2) => {
  const [contentProps2, localProps] = createSplitProps2()(props5, ["value"]);
  const tabs = useTabsContext();
  const renderStrategyProps = useRenderStrategyPropsContext();
  const presence = usePresence({
    ...renderStrategyProps,
    present: tabs.value === props5.value,
    immediate: true
  });
  const mergedProps = mergeProps(
    tabs.getContentProps(contentProps2),
    presence.getPresenceProps(),
    localProps
  );
  return (0, import_jsx_runtime85.jsx)(PresenceProvider, { value: presence, children: presence.unmounted ? null : (0, import_jsx_runtime85.jsx)(ark.div, { ...mergedProps, ref: composeRefs(presence.ref, ref2) }) });
});
TabContent.displayName = "TabContent";

// node_modules/@ark-ui/react/dist/components/tabs/tab-indicator.js
var import_jsx_runtime86 = __toESM(require_jsx_runtime(), 1);
var import_react123 = __toESM(require_react(), 1);
var TabIndicator = (0, import_react123.forwardRef)((props5, ref2) => {
  const tabs = useTabsContext();
  const mergedProps = mergeProps(tabs.getIndicatorProps(), props5);
  return (0, import_jsx_runtime86.jsx)(ark.div, { ...mergedProps, ref: ref2 });
});
TabIndicator.displayName = "TabIndicator";

// node_modules/@ark-ui/react/dist/components/tabs/tab-list.js
var import_jsx_runtime87 = __toESM(require_jsx_runtime(), 1);
var import_react125 = __toESM(require_react(), 1);
var TabList = (0, import_react125.forwardRef)((props5, ref2) => {
  const tabs = useTabsContext();
  const mergedProps = mergeProps(tabs.getListProps(), props5);
  return (0, import_jsx_runtime87.jsx)(ark.div, { ...mergedProps, ref: ref2 });
});
TabList.displayName = "TabList";

// node_modules/@ark-ui/react/dist/components/tabs/tab-trigger.js
var import_jsx_runtime88 = __toESM(require_jsx_runtime(), 1);
var import_react127 = __toESM(require_react(), 1);
var TabTrigger = (0, import_react127.forwardRef)((props5, ref2) => {
  const [tabProps, localProps] = createSplitProps2()(props5, ["disabled", "value"]);
  const tabs = useTabsContext();
  const mergedProps = mergeProps(tabs.getTriggerProps(tabProps), localProps);
  return (0, import_jsx_runtime88.jsx)(ark.button, { ...mergedProps, ref: ref2 });
});
TabTrigger.displayName = "TabTrigger";

// node_modules/@ark-ui/react/dist/components/tabs/tabs-context.js
var TabsContext = (props5) => props5.children(useTabsContext());

// node_modules/@ark-ui/react/dist/components/tabs/tabs-root.js
var import_jsx_runtime89 = __toESM(require_jsx_runtime(), 1);
var import_react131 = __toESM(require_react(), 1);

// node_modules/@zag-js/tabs/dist/index.mjs
var anatomy4 = createAnatomy("tabs").parts("root", "list", "trigger", "content", "indicator");
var parts4 = anatomy4.build();
var dom4 = createScope({
  getRootId: (ctx) => {
    var _a;
    return ((_a = ctx.ids) == null ? void 0 : _a.root) ?? `tabs:${ctx.id}`;
  },
  getListId: (ctx) => {
    var _a;
    return ((_a = ctx.ids) == null ? void 0 : _a.list) ?? `tabs:${ctx.id}:list`;
  },
  getContentId: (ctx, id) => {
    var _a;
    return ((_a = ctx.ids) == null ? void 0 : _a.content) ?? `tabs:${ctx.id}:content-${id}`;
  },
  getTriggerId: (ctx, id) => {
    var _a;
    return ((_a = ctx.ids) == null ? void 0 : _a.trigger) ?? `tabs:${ctx.id}:trigger-${id}`;
  },
  getIndicatorId: (ctx) => {
    var _a;
    return ((_a = ctx.ids) == null ? void 0 : _a.indicator) ?? `tabs:${ctx.id}:indicator`;
  },
  getListEl: (ctx) => dom4.getById(ctx, dom4.getListId(ctx)),
  getContentEl: (ctx, id) => dom4.getById(ctx, dom4.getContentId(ctx, id)),
  getTriggerEl: (ctx, id) => dom4.getById(ctx, dom4.getTriggerId(ctx, id)),
  getIndicatorEl: (ctx) => dom4.getById(ctx, dom4.getIndicatorId(ctx)),
  getElements: (ctx) => {
    const ownerId = CSS.escape(dom4.getListId(ctx));
    const selector = `[role=tab][data-ownedby='${ownerId}']:not([disabled])`;
    return queryAll(dom4.getListEl(ctx), selector);
  },
  getFirstTriggerEl: (ctx) => first(dom4.getElements(ctx)),
  getLastTriggerEl: (ctx) => last(dom4.getElements(ctx)),
  getNextTriggerEl: (ctx, id) => nextById(dom4.getElements(ctx), dom4.getTriggerId(ctx, id), ctx.loopFocus),
  getPrevTriggerEl: (ctx, id) => prevById(dom4.getElements(ctx), dom4.getTriggerId(ctx, id), ctx.loopFocus),
  getSelectedContentEl: (ctx) => {
    if (!ctx.value) return;
    return dom4.getContentEl(ctx, ctx.value);
  },
  getSelectedTriggerEl: (ctx) => {
    if (!ctx.value) return;
    return dom4.getTriggerEl(ctx, ctx.value);
  },
  getOffsetRect: (el) => {
    return {
      left: (el == null ? void 0 : el.offsetLeft) ?? 0,
      top: (el == null ? void 0 : el.offsetTop) ?? 0,
      width: (el == null ? void 0 : el.offsetWidth) ?? 0,
      height: (el == null ? void 0 : el.offsetHeight) ?? 0
    };
  },
  getRectById: (ctx, id) => {
    const tab = itemById(dom4.getElements(ctx), dom4.getTriggerId(ctx, id));
    return dom4.resolveRect(dom4.getOffsetRect(tab));
  },
  resolveRect: (rect) => ({
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    left: `${rect.left}px`,
    top: `${rect.top}px`
  })
});
function connect4(state, send, normalize) {
  const translations = state.context.translations;
  const focused = state.matches("focused");
  const isVertical = state.context.orientation === "vertical";
  const isHorizontal = state.context.orientation === "horizontal";
  const composite = state.context.composite;
  const indicator = state.context.indicatorState;
  function getTriggerState(props22) {
    return {
      selected: state.context.value === props22.value,
      focused: state.context.focusedValue === props22.value,
      disabled: !!props22.disabled
    };
  }
  return {
    value: state.context.value,
    focusedValue: state.context.focusedValue,
    setValue(value) {
      send({ type: "SET_VALUE", value });
    },
    clearValue() {
      send({ type: "CLEAR_VALUE" });
    },
    setIndicatorRect(value) {
      const id = dom4.getTriggerId(state.context, value);
      send({ type: "SET_INDICATOR_RECT", id });
    },
    syncTabIndex() {
      send("SYNC_TAB_INDEX");
    },
    selectNext(fromValue) {
      send({ type: "TAB_FOCUS", value: fromValue, src: "selectNext" });
      send({ type: "ARROW_NEXT", src: "selectNext" });
    },
    selectPrev(fromValue) {
      send({ type: "TAB_FOCUS", value: fromValue, src: "selectPrev" });
      send({ type: "ARROW_PREV", src: "selectPrev" });
    },
    focus() {
      var _a;
      (_a = dom4.getSelectedTriggerEl(state.context)) == null ? void 0 : _a.focus();
    },
    getRootProps() {
      return normalize.element({
        ...parts4.root.attrs,
        id: dom4.getRootId(state.context),
        "data-orientation": state.context.orientation,
        "data-focus": dataAttr(focused),
        dir: state.context.dir
      });
    },
    getListProps() {
      return normalize.element({
        ...parts4.list.attrs,
        id: dom4.getListId(state.context),
        role: "tablist",
        dir: state.context.dir,
        "data-focus": dataAttr(focused),
        "aria-orientation": state.context.orientation,
        "data-orientation": state.context.orientation,
        "aria-label": translations == null ? void 0 : translations.listLabel,
        onKeyDown(event) {
          if (event.defaultPrevented) return;
          if (!isSelfTarget(event)) return;
          if (isComposingEvent(event)) return;
          const keyMap = {
            ArrowDown() {
              if (isHorizontal) return;
              send({ type: "ARROW_NEXT", key: "ArrowDown" });
            },
            ArrowUp() {
              if (isHorizontal) return;
              send({ type: "ARROW_PREV", key: "ArrowUp" });
            },
            ArrowLeft() {
              if (isVertical) return;
              send({ type: "ARROW_PREV", key: "ArrowLeft" });
            },
            ArrowRight() {
              if (isVertical) return;
              send({ type: "ARROW_NEXT", key: "ArrowRight" });
            },
            Home() {
              send("HOME");
            },
            End() {
              send("END");
            },
            Enter() {
              send({ type: "ENTER" });
            }
          };
          let key = getEventKey(event, state.context);
          const exec = keyMap[key];
          if (exec) {
            event.preventDefault();
            exec(event);
          }
        }
      });
    },
    getTriggerState,
    getTriggerProps(props22) {
      const { value, disabled } = props22;
      const triggerState = getTriggerState(props22);
      return normalize.button({
        ...parts4.trigger.attrs,
        role: "tab",
        type: "button",
        disabled,
        dir: state.context.dir,
        "data-orientation": state.context.orientation,
        "data-disabled": dataAttr(disabled),
        "aria-disabled": disabled,
        "data-value": value,
        "aria-selected": triggerState.selected,
        "data-selected": dataAttr(triggerState.selected),
        "data-focus": dataAttr(triggerState.focused),
        "aria-controls": triggerState.selected ? dom4.getContentId(state.context, value) : void 0,
        "data-ownedby": dom4.getListId(state.context),
        "data-ssr": dataAttr(state.context.ssr),
        id: dom4.getTriggerId(state.context, value),
        tabIndex: triggerState.selected && composite ? 0 : -1,
        onFocus() {
          send({ type: "TAB_FOCUS", value });
        },
        onBlur(event) {
          const target = event.relatedTarget;
          if ((target == null ? void 0 : target.getAttribute("role")) !== "tab") {
            send({ type: "TAB_BLUR" });
          }
        },
        onClick(event) {
          if (event.defaultPrevented) return;
          if (disabled) return;
          if (isSafari()) {
            event.currentTarget.focus();
          }
          send({ type: "TAB_CLICK", value });
        }
      });
    },
    getContentProps(props22) {
      const { value } = props22;
      const selected = state.context.value === value;
      return normalize.element({
        ...parts4.content.attrs,
        dir: state.context.dir,
        id: dom4.getContentId(state.context, value),
        tabIndex: composite ? 0 : -1,
        "aria-labelledby": dom4.getTriggerId(state.context, value),
        role: "tabpanel",
        "data-ownedby": dom4.getListId(state.context),
        "data-selected": dataAttr(selected),
        "data-orientation": state.context.orientation,
        hidden: !selected
      });
    },
    getIndicatorProps() {
      var _a, _b, _c, _d;
      return normalize.element({
        id: dom4.getIndicatorId(state.context),
        ...parts4.indicator.attrs,
        dir: state.context.dir,
        "data-orientation": state.context.orientation,
        style: {
          "--transition-property": "left, right, top, bottom, width, height",
          "--left": (_a = indicator.rect) == null ? void 0 : _a.left,
          "--top": (_b = indicator.rect) == null ? void 0 : _b.top,
          "--width": (_c = indicator.rect) == null ? void 0 : _c.width,
          "--height": (_d = indicator.rect) == null ? void 0 : _d.height,
          position: "absolute",
          willChange: "var(--transition-property)",
          transitionProperty: "var(--transition-property)",
          transitionDuration: indicator.transition ? "var(--transition-duration, 150ms)" : "0ms",
          transitionTimingFunction: "var(--transition-timing-function)",
          [isHorizontal ? "left" : "top"]: isHorizontal ? "var(--left)" : "var(--top)"
        }
      });
    }
  };
}
var { not } = guards;
function machine4(userContext) {
  const ctx = compact2(userContext);
  return createMachine(
    {
      initial: "idle",
      context: {
        dir: "ltr",
        orientation: "horizontal",
        activationMode: "automatic",
        value: null,
        loopFocus: true,
        composite: true,
        ...ctx,
        focusedValue: ctx.value ?? null,
        ssr: true,
        indicatorState: {
          rendered: false,
          transition: false,
          rect: { left: "0px", top: "0px", width: "0px", height: "0px" }
        }
      },
      watch: {
        value: ["allowIndicatorTransition", "syncIndicatorRect", "syncTabIndex", "clickIfLink"],
        dir: ["syncIndicatorRect"],
        orientation: ["syncIndicatorRect"]
      },
      on: {
        SET_VALUE: {
          actions: "setValue"
        },
        CLEAR_VALUE: {
          actions: "clearValue"
        },
        SET_INDICATOR_RECT: {
          actions: "setIndicatorRect"
        },
        SYNC_TAB_INDEX: {
          actions: "syncTabIndex"
        }
      },
      created: ["syncFocusedValue"],
      entry: ["checkRenderedElements", "syncIndicatorRect", "syncTabIndex", "syncSsr"],
      exit: ["cleanupObserver"],
      states: {
        idle: {
          on: {
            TAB_FOCUS: {
              target: "focused",
              actions: "setFocusedValue"
            },
            TAB_CLICK: {
              target: "focused",
              actions: ["setFocusedValue", "setValue"]
            }
          }
        },
        focused: {
          on: {
            TAB_CLICK: {
              target: "focused",
              actions: ["setFocusedValue", "setValue"]
            },
            ARROW_PREV: [
              {
                guard: "selectOnFocus",
                actions: ["focusPrevTab", "selectFocusedTab"]
              },
              {
                actions: "focusPrevTab"
              }
            ],
            ARROW_NEXT: [
              {
                guard: "selectOnFocus",
                actions: ["focusNextTab", "selectFocusedTab"]
              },
              {
                actions: "focusNextTab"
              }
            ],
            HOME: [
              {
                guard: "selectOnFocus",
                actions: ["focusFirstTab", "selectFocusedTab"]
              },
              {
                actions: "focusFirstTab"
              }
            ],
            END: [
              {
                guard: "selectOnFocus",
                actions: ["focusLastTab", "selectFocusedTab"]
              },
              {
                actions: "focusLastTab"
              }
            ],
            ENTER: {
              guard: not("selectOnFocus"),
              actions: "selectFocusedTab"
            },
            TAB_FOCUS: {
              actions: ["setFocusedValue"]
            },
            TAB_BLUR: {
              target: "idle",
              actions: "clearFocusedValue"
            }
          }
        }
      }
    },
    {
      guards: {
        selectOnFocus: (ctx2) => ctx2.activationMode === "automatic"
      },
      actions: {
        syncFocusedValue(ctx2) {
          if (ctx2.value != null && ctx2.focusedValue == null) {
            ctx2.focusedValue = ctx2.value;
          }
        },
        selectFocusedTab(ctx2) {
          raf(() => {
            const nullable = ctx2.deselectable && ctx2.value === ctx2.focusedValue;
            const value = nullable ? null : ctx2.focusedValue;
            set3.value(ctx2, value);
          });
        },
        setFocusedValue(ctx2, evt) {
          if (evt.value == null) return;
          set3.focusedValue(ctx2, evt.value);
        },
        clearFocusedValue(ctx2) {
          set3.focusedValue(ctx2, null);
        },
        setValue(ctx2, evt) {
          const nullable = ctx2.deselectable && ctx2.value === ctx2.focusedValue;
          const value = nullable ? null : evt.value;
          set3.value(ctx2, value);
        },
        clearValue(ctx2) {
          set3.value(ctx2, null);
        },
        focusFirstTab(ctx2) {
          raf(() => {
            var _a;
            (_a = dom4.getFirstTriggerEl(ctx2)) == null ? void 0 : _a.focus();
          });
        },
        focusLastTab(ctx2) {
          raf(() => {
            var _a;
            (_a = dom4.getLastTriggerEl(ctx2)) == null ? void 0 : _a.focus();
          });
        },
        focusNextTab(ctx2) {
          if (!ctx2.focusedValue) return;
          const triggerEl = dom4.getNextTriggerEl(ctx2, ctx2.focusedValue);
          raf(() => {
            if (ctx2.composite) {
              triggerEl == null ? void 0 : triggerEl.focus();
            } else if ((triggerEl == null ? void 0 : triggerEl.dataset.value) != null) {
              set3.focusedValue(ctx2, triggerEl.dataset.value);
            }
          });
        },
        focusPrevTab(ctx2) {
          if (!ctx2.focusedValue) return;
          const triggerEl = dom4.getPrevTriggerEl(ctx2, ctx2.focusedValue);
          raf(() => {
            if (ctx2.composite) {
              triggerEl == null ? void 0 : triggerEl.focus();
            } else if ((triggerEl == null ? void 0 : triggerEl.dataset.value) != null) {
              set3.focusedValue(ctx2, triggerEl.dataset.value);
            }
          });
        },
        checkRenderedElements(ctx2) {
          ctx2.indicatorState.rendered = !!dom4.getIndicatorEl(ctx2);
        },
        syncTabIndex(ctx2) {
          raf(() => {
            const contentEl = dom4.getSelectedContentEl(ctx2);
            if (!contentEl) return;
            const focusables = getFocusables(contentEl);
            if (focusables.length > 0) {
              contentEl.removeAttribute("tabindex");
            } else {
              contentEl.setAttribute("tabindex", "0");
            }
          });
        },
        cleanupObserver(ctx2) {
          var _a;
          (_a = ctx2.indicatorCleanup) == null ? void 0 : _a.call(ctx2);
        },
        allowIndicatorTransition(ctx2) {
          ctx2.indicatorState.transition = true;
        },
        setIndicatorRect(ctx2, evt) {
          const value = evt.id ?? ctx2.value;
          if (!ctx2.indicatorState.rendered || !value) return;
          const triggerEl = dom4.getTriggerEl(ctx2, value);
          if (!triggerEl) return;
          ctx2.indicatorState.rect = dom4.getRectById(ctx2, value);
          nextTick(() => {
            ctx2.indicatorState.transition = false;
          });
        },
        syncSsr(ctx2) {
          ctx2.ssr = false;
        },
        syncIndicatorRect(ctx2) {
          var _a;
          (_a = ctx2.indicatorCleanup) == null ? void 0 : _a.call(ctx2);
          const value = ctx2.value;
          if (!ctx2.indicatorState.rendered || !value) return;
          const triggerEl = dom4.getSelectedTriggerEl(ctx2);
          if (!triggerEl) return;
          ctx2.indicatorCleanup = trackElementRect(triggerEl, {
            getRect(el) {
              return dom4.getOffsetRect(el);
            },
            onChange(rect) {
              ctx2.indicatorState.rect = dom4.resolveRect(rect);
              nextTick(() => {
                ctx2.indicatorState.transition = false;
              });
            }
          });
        },
        clickIfLink(ctx2) {
          clickIfLink(dom4.getSelectedTriggerEl(ctx2));
        }
      }
    }
  );
}
var invoke = {
  change: (ctx) => {
    var _a;
    if (ctx.value == null) return;
    (_a = ctx.onValueChange) == null ? void 0 : _a.call(ctx, { value: ctx.value });
  },
  focusChange: (ctx) => {
    var _a;
    if (ctx.focusedValue == null) return;
    (_a = ctx.onFocusChange) == null ? void 0 : _a.call(ctx, { focusedValue: ctx.focusedValue });
  }
};
var set3 = {
  value: (ctx, value) => {
    if (isEqual(value, ctx.value)) return;
    ctx.value = value;
    invoke.change(ctx);
  },
  focusedValue: (ctx, value) => {
    if (isEqual(value, ctx.focusedValue)) return;
    ctx.focusedValue = value;
    invoke.focusChange(ctx);
  }
};
var props4 = createProps()([
  "activationMode",
  "composite",
  "dir",
  "getRootNode",
  "id",
  "ids",
  "loopFocus",
  "onFocusChange",
  "onValueChange",
  "orientation",
  "translations",
  "deselectable",
  "value"
]);
var splitProps4 = createSplitProps(props4);
var triggerProps = createProps()(["disabled", "value"]);
var splitTriggerProps = createSplitProps(triggerProps);
var contentProps = createProps()(["value"]);
var splitContentProps = createSplitProps(contentProps);

// node_modules/@ark-ui/react/dist/components/tabs/use-tabs.js
var import_react129 = __toESM(require_react(), 1);
var useTabs = (props5 = {}) => {
  const { getRootNode } = useEnvironmentContext();
  const { dir } = useLocaleContext();
  const initialContext = {
    id: (0, import_react129.useId)(),
    dir,
    getRootNode,
    value: props5.defaultValue,
    ...props5
  };
  const context = {
    ...initialContext,
    value: props5.value,
    onValueChange: useEvent(props5.onValueChange, { sync: true }),
    onFocusChange: useEvent(props5.onFocusChange)
  };
  const [state, send] = useMachine(machine4(initialContext), { context });
  return connect4(state, send, normalizeProps);
};

// node_modules/@ark-ui/react/dist/components/tabs/tabs-root.js
var TabsRoot = (0, import_react131.forwardRef)((props5, ref2) => {
  const [renderStrategyProps, tabsProps] = splitRenderStrategyProps(props5);
  const [useTabsProps, localprops] = createSplitProps2()(tabsProps, [
    "activationMode",
    "composite",
    "defaultValue",
    "deselectable",
    "id",
    "ids",
    "loopFocus",
    "onFocusChange",
    "onValueChange",
    "orientation",
    "translations",
    "value"
  ]);
  const tabs = useTabs(useTabsProps);
  const mergedProps = mergeProps(tabs.getRootProps(), localprops);
  return (0, import_jsx_runtime89.jsx)(TabsProvider, { value: tabs, children: (0, import_jsx_runtime89.jsx)(RenderStrategyPropsProvider, { value: renderStrategyProps, children: (0, import_jsx_runtime89.jsx)(ark.div, { ...mergedProps, ref: ref2 }) }) });
});
TabsRoot.displayName = "TabsRoot";

// node_modules/@ark-ui/react/dist/components/tabs/tabs-root-provider.js
var import_jsx_runtime90 = __toESM(require_jsx_runtime(), 1);
var import_react133 = __toESM(require_react(), 1);
var TabsRootProvider = (0, import_react133.forwardRef)((props5, ref2) => {
  const [renderStrategyProps, tabsProps] = splitRenderStrategyProps(props5);
  const [{ value: tabs }, localprops] = createSplitProps2()(tabsProps, ["value"]);
  const mergedProps = mergeProps(tabs.getRootProps(), localprops);
  return (0, import_jsx_runtime90.jsx)(TabsProvider, { value: tabs, children: (0, import_jsx_runtime90.jsx)(RenderStrategyPropsProvider, { value: renderStrategyProps, children: (0, import_jsx_runtime90.jsx)(ark.div, { ...mergedProps, ref: ref2 }) }) });
});
TabsRootProvider.displayName = "TabsRootProvider";

// node_modules/@ark-ui/react/dist/components/tabs/tabs.js
var tabs_exports = {};
__export(tabs_exports, {
  Content: () => TabContent,
  Context: () => TabsContext,
  Indicator: () => TabIndicator,
  List: () => TabList,
  Root: () => TabsRoot,
  RootProvider: () => TabsRootProvider,
  Trigger: () => TabTrigger
});

// node_modules/@chakra-ui/react/dist/esm/components/tabs/tabs.js
var {
  withProvider: withProvider35,
  withContext: withContext53,
  useStyles: useTabsStyles,
  PropsProvider: PropsProvider52
} = createSlotRecipeContext({ key: "tabs" });
var TabsRootProvider2 = withProvider35(tabs_exports.RootProvider, "root", { forwardAsChild: true });
var TabsRoot2 = withProvider35(
  tabs_exports.Root,
  "root",
  { forwardAsChild: true }
);
var TabsPropsProvider = PropsProvider52;
var TabsTrigger = withContext53(
  tabs_exports.Trigger,
  "trigger",
  { forwardAsChild: true }
);
var TabsContent = withContext53(
  tabs_exports.Content,
  "content",
  { forwardAsChild: true }
);
var TabsContentGroup = withContext53("div", "contentGroup");
var TabsList = withContext53(
  tabs_exports.List,
  "list",
  { forwardAsChild: true }
);
var TabsIndicator = withContext53(
  tabs_exports.Indicator,
  "indicator",
  { forwardAsChild: true }
);
var TabsContext2 = tabs_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/tabs/namespace.js
var namespace_exports42 = {};
__export(namespace_exports42, {
  Content: () => TabsContent,
  ContentGroup: () => TabsContentGroup,
  Context: () => TabsContext2,
  Indicator: () => TabsIndicator,
  List: () => TabsList,
  PropsProvider: () => TabsPropsProvider,
  Root: () => TabsRoot2,
  RootProvider: () => TabsRootProvider2,
  Trigger: () => TabsTrigger
});

// node_modules/@chakra-ui/react/dist/esm/components/tag/tag.js
var import_jsx_runtime91 = __toESM(require_jsx_runtime(), 1);
var {
  withProvider: withProvider36,
  withContext: withContext54,
  useStyles: useTagStyles,
  PropsProvider: PropsProvider53
} = createSlotRecipeContext({ key: "tag" });
var TagRoot = withProvider36(
  "div",
  "root"
);
var TagRootPropsProvider = PropsProvider53;
var TagLabel = withContext54(
  "span",
  "label"
);
var TagCloseTrigger = withContext54("button", "closeTrigger", { defaultProps: { children: (0, import_jsx_runtime91.jsx)(CloseIcon, {}) } });
var TagStartElement = withContext54("span", "startElement");
var TagEndElement = withContext54(
  "span",
  "endElement"
);

// node_modules/@chakra-ui/react/dist/esm/components/tag/namespace.js
var namespace_exports43 = {};
__export(namespace_exports43, {
  CloseTrigger: () => TagCloseTrigger,
  EndElement: () => TagEndElement,
  Label: () => TagLabel,
  Root: () => TagRoot,
  RootPropsProvider: () => TagRootPropsProvider,
  StartElement: () => TagStartElement
});

// node_modules/@chakra-ui/react/dist/esm/components/textarea/textarea.js
var { withContext: withContext55, PropsProvider: PropsProvider54 } = createRecipeContext({
  key: "textarea"
});
var Textarea = withContext55(
  field_exports.Textarea
);
var TextareaPropsProvider = PropsProvider54;

// node_modules/@chakra-ui/react/dist/esm/components/timeline/timeline.js
var {
  withProvider: withProvider37,
  withContext: withContext56,
  useStyles: useTimelineStyles,
  PropsProvider: PropsProvider55
} = createSlotRecipeContext({ key: "timeline" });
var TimelineRoot = withProvider37(
  "div",
  "root",
  { defaultProps: { role: "list" } }
);
var TimelineRootPropsProvider = PropsProvider55;
var TimelineItem = withContext56(
  "div",
  "item",
  { defaultProps: { role: "listitem" } }
);
var TimelineSeparator = withContext56("div", "separator");
var TimelineIndicator = withContext56("div", "indicator");
var TimelineContent = withContext56("div", "content");
var TimelineTitle = withContext56(
  "div",
  "title"
);
var TimelineDescription = withContext56("div", "description");
var TimelineConnector = withContext56("div", "connector");

// node_modules/@chakra-ui/react/dist/esm/components/timeline/namespace.js
var namespace_exports44 = {};
__export(namespace_exports44, {
  Connector: () => TimelineConnector,
  Content: () => TimelineContent,
  Description: () => TimelineDescription,
  Indicator: () => TimelineIndicator,
  Item: () => TimelineItem,
  Root: () => TimelineRoot,
  RootPropsProvider: () => TimelineRootPropsProvider,
  Separator: () => TimelineSeparator,
  Title: () => TimelineTitle
});

// node_modules/@chakra-ui/react/dist/esm/components/toast/toast.js
var import_jsx_runtime98 = __toESM(require_jsx_runtime(), 1);

// node_modules/@zag-js/toast/dist/index.mjs
var anatomy5 = createAnatomy("toast").parts(
  "group",
  "root",
  "title",
  "description",
  "actionTrigger",
  "closeTrigger"
);
var parts5 = anatomy5.build();
var dom5 = createScope({
  getRegionId: (placement) => `toast-group:${placement}`,
  getRegionEl: (ctx, placement) => dom5.getById(ctx, `toast-group:${placement}`),
  getRootId: (ctx) => `toast:${ctx.id}`,
  getRootEl: (ctx) => dom5.getById(ctx, dom5.getRootId(ctx)),
  getTitleId: (ctx) => `toast:${ctx.id}:title`,
  getDescriptionId: (ctx) => `toast:${ctx.id}:description`,
  getCloseTriggerId: (ctx) => `toast${ctx.id}:close`
});
function getToastsByPlacement(toasts, placement) {
  return toasts.filter((toast) => toast.state.context.placement === placement);
}
var defaultTimeouts = {
  info: 5e3,
  error: 5e3,
  success: 2e3,
  loading: Infinity,
  DEFAULT: 5e3
};
function getToastDuration(duration, type) {
  return duration ?? defaultTimeouts[type] ?? defaultTimeouts.DEFAULT;
}
function getGroupPlacementStyle(ctx, placement) {
  var _a;
  const offset = ctx.offsets;
  const computedOffset = typeof offset === "string" ? { left: offset, right: offset, bottom: offset, top: offset } : offset;
  const rtl = ctx.dir === "rtl";
  const computedPlacement = placement.replace("-start", rtl ? "-right" : "-left").replace("-end", rtl ? "-left" : "-right");
  const isRighty = computedPlacement.includes("right");
  const isLefty = computedPlacement.includes("left");
  const styles = {
    position: "fixed",
    pointerEvents: ctx.count > 0 ? void 0 : "none",
    display: "flex",
    flexDirection: "column",
    "--gap": `${ctx.gap}px`,
    "--first-height": `${((_a = ctx.heights[0]) == null ? void 0 : _a.height) || 0}px`,
    zIndex: MAX_Z_INDEX
  };
  let alignItems = "center";
  if (isRighty) alignItems = "flex-end";
  if (isLefty) alignItems = "flex-start";
  styles.alignItems = alignItems;
  if (computedPlacement.includes("top")) {
    const offset2 = computedOffset.top;
    styles.top = `max(env(safe-area-inset-top, 0px), ${offset2})`;
  }
  if (computedPlacement.includes("bottom")) {
    const offset2 = computedOffset.bottom;
    styles.bottom = `max(env(safe-area-inset-bottom, 0px), ${offset2})`;
  }
  if (!computedPlacement.includes("left")) {
    const offset2 = computedOffset.right;
    styles.insetInlineEnd = `calc(env(safe-area-inset-right, 0px) + ${offset2})`;
  }
  if (!computedPlacement.includes("right")) {
    const offset2 = computedOffset.left;
    styles.insetInlineStart = `calc(env(safe-area-inset-left, 0px) + ${offset2})`;
  }
  return styles;
}
function getPlacementStyle(ctx, visible) {
  const [side] = ctx.placement.split("-");
  const sibling = !ctx.frontmost;
  const overlap = !ctx.stacked;
  const styles = {
    position: "absolute",
    pointerEvents: "auto",
    "--opacity": "0",
    "--remove-delay": `${ctx.removeDelay}ms`,
    "--duration": `${ctx.type === "loading" ? Number.MAX_SAFE_INTEGER : ctx.duration}ms`,
    "--initial-height": `${ctx.height}px`,
    "--offset": `${ctx.offset}px`,
    "--index": ctx.index,
    "--z-index": ctx.zIndex,
    "--lift-amount": "calc(var(--lift) * var(--gap))",
    "--y": "100%",
    "--x": "0"
  };
  const assign2 = (overrides) => Object.assign(styles, overrides);
  if (side === "top") {
    assign2({
      top: "0",
      "--sign": "-1",
      "--y": "-100%",
      "--lift": "1"
    });
  } else if (side === "bottom") {
    assign2({
      bottom: "0",
      "--sign": "1",
      "--y": "100%",
      "--lift": "-1"
    });
  }
  if (ctx.mounted) {
    assign2({
      "--y": "0",
      "--opacity": "1"
    });
    if (ctx.stacked) {
      assign2({
        "--y": "calc(var(--lift) * var(--offset))",
        "--height": "var(--initial-height)"
      });
    }
  }
  if (!visible) {
    assign2({
      "--opacity": "0",
      pointerEvents: "none"
    });
  }
  if (sibling && overlap) {
    assign2({
      "--base-scale": "var(--index) * 0.05 + 1",
      "--y": "calc(var(--lift-amount) * var(--index))",
      "--scale": "calc(-1 * var(--base-scale))",
      "--height": "var(--first-height)"
    });
    if (!visible) {
      assign2({
        "--y": "calc(var(--sign) * 40%)"
      });
    }
  }
  if (sibling && ctx.stacked && !visible) {
    assign2({
      "--y": "calc(var(--lift) * var(--offset) + var(--lift) * -100%)"
    });
  }
  if (ctx.frontmost && !visible) {
    assign2({
      "--y": "calc(var(--lift) * -100%)"
    });
  }
  return styles;
}
function getGhostBeforeStyle(ctx, visible) {
  const styles = {
    position: "absolute",
    inset: "0",
    scale: "1 2",
    pointerEvents: visible ? "none" : "auto"
  };
  const assign2 = (overrides) => Object.assign(styles, overrides);
  if (ctx.frontmost && !visible) {
    assign2({
      height: "calc(var(--initial-height) + 80%)"
    });
  }
  return styles;
}
function getGhostAfterStyle(_ctx, _visible) {
  return {
    position: "absolute",
    left: "0",
    height: "calc(var(--gap) + 2px)",
    bottom: "100%",
    width: "100%"
  };
}
function groupConnect(serviceOrState, send, normalize) {
  function getState() {
    const result = isMachine(serviceOrState) ? serviceOrState.getState() : serviceOrState;
    return result;
  }
  function getToastsByPlacementImpl(placement) {
    return getToastsByPlacement(getState().context.toasts, placement);
  }
  function isVisible(id) {
    const toasts = getState().context.toasts;
    if (!toasts.length) return false;
    return !!toasts.find((toast) => toast.id == id);
  }
  function create(options) {
    const uid = `toast:${uuid()}`;
    const id = options.id ? options.id : uid;
    if (isVisible(id)) return id;
    send({ type: "ADD_TOAST", toast: { ...options, id } });
    return id;
  }
  function update(id, options) {
    if (!isVisible(id)) return id;
    send({ type: "UPDATE_TOAST", id, toast: options });
    return id;
  }
  function upsert(options) {
    const { id } = options;
    const visible = id ? isVisible(id) : false;
    if (visible && id != null) {
      return update(id, options);
    } else {
      return create(options);
    }
  }
  function dismiss(id) {
    if (id == null) {
      send("DISMISS_ALL");
    } else if (isVisible(id)) {
      send({ type: "DISMISS_TOAST", id });
    }
  }
  return {
    getCount() {
      return getState().context.count;
    },
    getPlacements() {
      const toasts = getState().context.toasts;
      const placements = toasts.map((toast) => toast.state.context.placement);
      return Array.from(new Set(placements));
    },
    getToastsByPlacement: getToastsByPlacementImpl,
    isVisible,
    create,
    update,
    upsert,
    dismiss,
    remove(id) {
      if (id == null) {
        send("REMOVE_ALL");
      } else if (isVisible(id)) {
        send({ type: "REMOVE_TOAST", id });
      }
    },
    dismissByPlacement(placement) {
      const toasts = getToastsByPlacementImpl(placement);
      toasts.forEach((toast) => dismiss(toast.id));
    },
    loading(options) {
      return upsert({ ...options, type: "loading" });
    },
    success(options) {
      return upsert({ ...options, type: "success" });
    },
    error(options) {
      return upsert({ ...options, type: "error" });
    },
    promise(promise, options, shared = {}) {
      const id = upsert({ ...shared, ...options.loading, type: "loading" });
      runIfFn(promise).then((response) => {
        const successOptions = runIfFn(options.success, response);
        upsert({ ...shared, ...successOptions, id, type: "success" });
      }).catch((error) => {
        const errorOptions = runIfFn(options.error, error);
        upsert({ ...shared, ...errorOptions, id, type: "error" });
      }).finally(() => {
        var _a;
        (_a = options.finally) == null ? void 0 : _a.call(options);
      });
      return id;
    },
    pause(id) {
      if (id == null) {
        send("PAUSE_ALL");
      } else if (isVisible(id)) {
        send({ type: "PAUSE_TOAST", id });
      }
    },
    resume(id) {
      if (id == null) {
        send("RESUME_ALL");
      } else if (isVisible(id)) {
        send({ type: "RESUME_TOAST", id });
      }
    },
    getGroupProps(options) {
      const { placement, label = "Notifications" } = options;
      const state = getState();
      const hotkeyLabel = state.context.hotkey.join("+").replace(/Key/g, "").replace(/Digit/g, "");
      const [side, align = "center"] = placement.split("-");
      return normalize.element({
        ...parts5.group.attrs,
        dir: state.context.dir,
        tabIndex: -1,
        "aria-label": `${placement} ${label} ${hotkeyLabel}`,
        id: dom5.getRegionId(placement),
        "data-placement": placement,
        "data-side": side,
        "data-align": align,
        "aria-live": "polite",
        role: "region",
        style: getGroupPlacementStyle(state.context, placement),
        onMouseMove() {
          send({ type: "REGION.POINTER_ENTER", placement });
        },
        onMouseLeave() {
          send({ type: "REGION.POINTER_LEAVE", placement });
        },
        onFocus(event) {
          send({ type: "REGION.FOCUS", target: event.relatedTarget });
        },
        onBlur(event) {
          if (state.context.isFocusWithin && !contains(event.currentTarget, event.relatedTarget)) {
            send({ type: "REGION.BLUR" });
          }
        }
      });
    },
    subscribe(fn) {
      const state = getState();
      return subscribe(state.context.toasts, () => {
        const toasts = getToastsByPlacementImpl(state.context.placement);
        const contexts = toasts.map((toast) => toast.getState().context);
        fn(contexts);
      });
    }
  };
}
var { not: not2, and, or } = guards;
function createToastMachine(options) {
  const { type = "info", duration, id = "1", placement = "bottom", removeDelay = 200, ...restProps } = options;
  const ctx = compact2(restProps);
  const computedDuration = getToastDuration(duration, type);
  return createMachine(
    {
      id,
      context: {
        id,
        type,
        remaining: computedDuration,
        duration: computedDuration,
        removeDelay,
        createdAt: Date.now(),
        placement,
        ...ctx,
        height: 0,
        offset: 0,
        frontmost: false,
        mounted: false,
        index: -1,
        zIndex: 0
      },
      initial: type === "loading" ? "visible:persist" : "visible",
      on: {
        UPDATE: [
          {
            guard: and("hasTypeChanged", "isChangingToLoading"),
            target: "visible:persist",
            actions: ["setContext"]
          },
          {
            guard: or("hasDurationChanged", "hasTypeChanged"),
            target: "visible:updating",
            actions: ["setContext"]
          },
          {
            actions: ["setContext"]
          }
        ],
        MEASURE: {
          actions: ["measureHeight"]
        }
      },
      entry: ["invokeOnVisible"],
      activities: ["trackHeight"],
      states: {
        "visible:updating": {
          tags: ["visible", "updating"],
          after: {
            0: "visible"
          }
        },
        "visible:persist": {
          tags: ["visible", "paused"],
          on: {
            RESUME: {
              guard: not2("isLoadingType"),
              target: "visible",
              actions: ["setCreatedAt"]
            },
            DISMISS: "dismissing"
          }
        },
        visible: {
          tags: ["visible"],
          after: {
            VISIBLE_DURATION: "dismissing"
          },
          on: {
            DISMISS: "dismissing",
            PAUSE: {
              target: "visible:persist",
              actions: "setRemainingDuration"
            }
          }
        },
        dismissing: {
          entry: "invokeOnDismiss",
          after: {
            REMOVE_DELAY: {
              target: "unmounted",
              actions: "notifyParentToRemove"
            }
          }
        },
        unmounted: {
          entry: "invokeOnUnmount",
          type: "final"
        }
      }
    },
    {
      activities: {
        trackHeight(ctx2, _evt, { self }) {
          let cleanup;
          raf(() => {
            const rootEl = dom5.getRootEl(ctx2);
            if (!rootEl) return;
            ctx2.mounted = true;
            const ghosts = queryAll(rootEl, "[data-ghost]");
            warn(
              ghosts.length !== 2,
              "[toast] No ghost element found in toast. Render the `ghostBefore` and `ghostAfter` elements"
            );
            const syncHeight = () => {
              const originalHeight = rootEl.style.height;
              rootEl.style.height = "auto";
              const newHeight = rootEl.getBoundingClientRect().height;
              rootEl.style.height = originalHeight;
              ctx2.height = newHeight;
              self.sendParent({ type: "UPDATE_HEIGHT", id: self.id, height: newHeight, placement: ctx2.placement });
            };
            syncHeight();
            const win = dom5.getWin(ctx2);
            const observer = new win.MutationObserver(syncHeight);
            observer.observe(rootEl, { childList: true, subtree: true, characterData: true });
            cleanup = () => observer.disconnect();
          });
          return () => cleanup == null ? void 0 : cleanup();
        }
      },
      guards: {
        isChangingToLoading: (_, evt) => {
          var _a;
          return ((_a = evt.toast) == null ? void 0 : _a.type) === "loading";
        },
        isLoadingType: (ctx2) => ctx2.type === "loading",
        hasTypeChanged: (ctx2, evt) => {
          var _a;
          return ((_a = evt.toast) == null ? void 0 : _a.type) != null && evt.toast.type !== ctx2.type;
        },
        hasDurationChanged: (ctx2, evt) => {
          var _a;
          return ((_a = evt.toast) == null ? void 0 : _a.duration) != null && evt.toast.duration !== ctx2.duration;
        }
      },
      delays: {
        VISIBLE_DURATION: (ctx2) => ctx2.remaining,
        REMOVE_DELAY: (ctx2) => ctx2.removeDelay
      },
      actions: {
        measureHeight(ctx2, _evt, { self }) {
          raf(() => {
            const rootEl = dom5.getRootEl(ctx2);
            if (!rootEl) return;
            ctx2.mounted = true;
            const originalHeight = rootEl.style.height;
            rootEl.style.height = "auto";
            const newHeight = rootEl.getBoundingClientRect().height;
            rootEl.style.height = originalHeight;
            ctx2.height = newHeight;
            self.sendParent({ type: "UPDATE_HEIGHT", id: self.id, height: newHeight, placement: ctx2.placement });
          });
        },
        setRemainingDuration(ctx2) {
          ctx2.remaining -= Date.now() - ctx2.createdAt;
        },
        setCreatedAt(ctx2) {
          ctx2.createdAt = Date.now();
        },
        notifyParentToRemove(_ctx, _evt, { self }) {
          self.sendParent({ type: "REMOVE_TOAST", id: self.id });
        },
        invokeOnDismiss(ctx2) {
          var _a;
          (_a = ctx2.onStatusChange) == null ? void 0 : _a.call(ctx2, { status: "dismissing" });
        },
        invokeOnUnmount(ctx2) {
          var _a;
          (_a = ctx2.onStatusChange) == null ? void 0 : _a.call(ctx2, { status: "unmounted" });
        },
        invokeOnVisible(ctx2) {
          var _a;
          (_a = ctx2.onStatusChange) == null ? void 0 : _a.call(ctx2, { status: "visible" });
        },
        setContext(ctx2, evt) {
          var _a, _b;
          const duration2 = (_a = evt.toast) == null ? void 0 : _a.duration;
          const type2 = ((_b = evt.toast) == null ? void 0 : _b.type) ?? ctx2.type;
          const computedDuration2 = getToastDuration(duration2, type2);
          Object.assign(ctx2, {
            ...evt.toast,
            duration: computedDuration2,
            remaining: computedDuration2
          });
        }
      }
    }
  );
}
function groupMachine(userContext) {
  const ctx = compact2(userContext);
  return createMachine(
    {
      id: "toaster",
      initial: ctx.overlap ? "overlap" : "stack",
      context: {
        dir: "ltr",
        max: Number.MAX_SAFE_INTEGER,
        gap: 16,
        pauseOnPageIdle: false,
        hotkey: ["altKey", "KeyT"],
        offsets: "1rem",
        placement: "bottom",
        removeDelay: 200,
        ...ctx,
        toasts: [],
        lastFocusedEl: null,
        isFocusWithin: false,
        heights: []
      },
      computed: {
        count: (ctx2) => ctx2.toasts.length
      },
      activities: ["trackDocumentVisibility", "trackHotKeyPress"],
      watch: {
        toasts: ["collapsedIfEmpty", "setDismissableBranch"]
      },
      exit: ["removeToasts", "clearDismissableBranch", "clearLastFocusedEl"],
      on: {
        PAUSE_TOAST: {
          actions: ["pauseToast"]
        },
        PAUSE_ALL: {
          actions: ["pauseToasts"]
        },
        RESUME_TOAST: {
          actions: ["resumeToast"]
        },
        RESUME_ALL: {
          actions: ["resumeToasts"]
        },
        ADD_TOAST: {
          guard: "isWithinRange",
          actions: ["createToast", "syncToastIndex"]
        },
        UPDATE_TOAST: {
          actions: ["updateToast"]
        },
        DISMISS_TOAST: {
          actions: ["dismissToast"]
        },
        DISMISS_ALL: {
          actions: ["dismissToasts"]
        },
        REMOVE_TOAST: {
          actions: ["removeToast", "syncToastIndex", "syncToastOffset"]
        },
        REMOVE_ALL: {
          actions: ["removeToasts"]
        },
        UPDATE_HEIGHT: {
          actions: ["syncHeights", "syncToastOffset"]
        },
        "DOC.HOTKEY": {
          actions: ["focusRegionEl"]
        },
        "REGION.BLUR": [
          {
            guard: "isOverlapping",
            target: "overlap",
            actions: ["resumeToasts", "restoreLastFocusedEl"]
          },
          {
            actions: ["resumeToasts", "restoreLastFocusedEl"]
          }
        ]
      },
      states: {
        stack: {
          entry: ["expandToasts"],
          on: {
            "REGION.POINTER_LEAVE": [
              {
                guard: "isOverlapping",
                target: "overlap",
                actions: ["resumeToasts"]
              },
              {
                actions: ["resumeToasts"]
              }
            ],
            "REGION.OVERLAP": {
              target: "overlap"
            },
            "REGION.FOCUS": {
              actions: ["setLastFocusedEl", "pauseToasts"]
            },
            "REGION.POINTER_ENTER": {
              actions: ["pauseToasts"]
            }
          }
        },
        overlap: {
          entry: ["collapseToasts"],
          on: {
            "REGION.STACK": {
              target: "stack"
            },
            "REGION.POINTER_ENTER": {
              target: "stack",
              actions: ["pauseToasts"]
            },
            "REGION.FOCUS": {
              target: "stack",
              actions: ["setLastFocusedEl", "pauseToasts"]
            }
          }
        }
      }
    },
    {
      guards: {
        isWithinRange: (ctx2) => ctx2.toasts.length < ctx2.max,
        isOverlapping: (ctx2) => !!ctx2.overlap
      },
      activities: {
        trackHotKeyPress(ctx2, _evt, { send }) {
          const handleKeyDown = (event) => {
            const isHotkeyPressed = ctx2.hotkey.every((key) => event[key] || event.code === key);
            if (!isHotkeyPressed) return;
            send({ type: "DOC.HOTKEY" });
          };
          return addDomEvent(document, "keydown", handleKeyDown, { capture: true });
        },
        trackDocumentVisibility(ctx2, _evt, { send }) {
          if (!ctx2.pauseOnPageIdle) return;
          const doc = dom5.getDoc(ctx2);
          return addDomEvent(doc, "visibilitychange", () => {
            send(doc.visibilityState === "hidden" ? "PAUSE_ALL" : "RESUME_ALL");
          });
        }
      },
      actions: {
        setDismissableBranch(ctx2) {
          var _a;
          const currentToasts = getToastsByPlacement(ctx2.toasts, ctx2.placement);
          const hasToasts = currentToasts.length > 0;
          if (!hasToasts) {
            (_a = ctx2._cleanup) == null ? void 0 : _a.call(ctx2);
            return;
          }
          if (hasToasts && ctx2._cleanup) {
            return;
          }
          const groupEl = () => dom5.getRegionEl(ctx2, ctx2.placement);
          ctx2._cleanup = trackDismissableBranch(groupEl, { defer: true });
        },
        clearDismissableBranch(ctx2) {
          var _a;
          (_a = ctx2._cleanup) == null ? void 0 : _a.call(ctx2);
        },
        focusRegionEl(ctx2) {
          queueMicrotask(() => {
            var _a;
            (_a = dom5.getRegionEl(ctx2, ctx2.placement)) == null ? void 0 : _a.focus();
          });
        },
        expandToasts(ctx2) {
          each(ctx2, (toast) => {
            toast.state.context.stacked = true;
          });
        },
        collapseToasts(ctx2) {
          each(ctx2, (toast) => {
            toast.state.context.stacked = false;
          });
        },
        collapsedIfEmpty(ctx2, _evt, { send }) {
          if (!ctx2.overlap || ctx2.toasts.length > 1) return;
          send("REGION.OVERLAP");
        },
        pauseToast(_ctx, evt, { self }) {
          self.sendChild("PAUSE", evt.id);
        },
        pauseToasts(ctx2) {
          ctx2.toasts.forEach((toast) => toast.send("PAUSE"));
        },
        resumeToast(_ctx, evt, { self }) {
          self.sendChild("RESUME", evt.id);
        },
        resumeToasts(ctx2) {
          ctx2.toasts.forEach((toast) => toast.send("RESUME"));
        },
        measureToasts(ctx2) {
          ctx2.toasts.forEach((toast) => toast.send("MEASURE"));
        },
        createToast(ctx2, evt, { self, getState }) {
          const options = {
            placement: ctx2.placement,
            duration: ctx2.duration,
            removeDelay: ctx2.removeDelay,
            ...evt.toast,
            dir: ctx2.dir,
            getRootNode: ctx2.getRootNode,
            stacked: getState().matches("stack")
          };
          const toast = createToastMachine(options);
          const actor = self.spawn(toast);
          ctx2.toasts = [actor, ...ctx2.toasts];
        },
        updateToast(_ctx, evt, { self }) {
          self.sendChild({ type: "UPDATE", toast: evt.toast }, evt.id);
        },
        dismissToast(_ctx, evt, { self }) {
          self.sendChild("DISMISS", evt.id);
        },
        dismissToasts(ctx2) {
          ctx2.toasts.forEach((toast) => toast.send("DISMISS"));
        },
        removeToast(ctx2, evt, { self }) {
          self.stopChild(evt.id);
          ctx2.toasts = ctx2.toasts.filter((toast) => toast.id !== evt.id);
          ctx2.heights = ctx2.heights.filter((height) => height.id !== evt.id);
        },
        removeToasts(ctx2, _evt, { self }) {
          ctx2.toasts.forEach((toast) => self.stopChild(toast.id));
          ctx2.toasts = [];
          ctx2.heights = [];
        },
        syncHeights(ctx2, evt) {
          const existing = ctx2.heights.find((height) => height.id === evt.id);
          if (existing) {
            existing.height = evt.height;
            existing.placement = evt.placement;
          } else {
            const newHeight = { id: evt.id, height: evt.height, placement: evt.placement };
            ctx2.heights = [newHeight, ...ctx2.heights];
          }
        },
        syncToastIndex(ctx2) {
          each(ctx2, (toast, index, toasts) => {
            toast.state.context.index = index;
            toast.state.context.frontmost = index === 0;
            toast.state.context.zIndex = toasts.length - index;
          });
        },
        syncToastOffset(ctx2, evt) {
          const placement = evt.placement ?? ctx2.placement;
          each({ ...ctx2, placement }, (toast) => {
            const heightIndex = Math.max(
              ctx2.heights.findIndex((height) => height.id === toast.id),
              0
            );
            const toastsHeightBefore = ctx2.heights.reduce((prev2, curr, reducerIndex) => {
              if (reducerIndex >= heightIndex) return prev2;
              return prev2 + curr.height;
            }, 0);
            toast.state.context.offset = heightIndex * ctx2.gap + toastsHeightBefore;
          });
        },
        setLastFocusedEl(ctx2, evt) {
          if (ctx2.isFocusWithin || !evt.target) return;
          ctx2.isFocusWithin = true;
          ctx2.lastFocusedEl = ref(evt.target);
        },
        restoreLastFocusedEl(ctx2) {
          ctx2.isFocusWithin = false;
          if (!ctx2.lastFocusedEl) return;
          ctx2.lastFocusedEl.focus({ preventScroll: true });
          ctx2.lastFocusedEl = null;
        },
        clearLastFocusedEl(ctx2) {
          if (!ctx2.lastFocusedEl) return;
          ctx2.lastFocusedEl.focus({ preventScroll: true });
          ctx2.lastFocusedEl = null;
          ctx2.isFocusWithin = false;
        }
      }
    }
  );
}
function each(ctx, fn) {
  const currentToasts = getToastsByPlacement(ctx.toasts, ctx.placement);
  currentToasts.forEach(fn);
}
function connect5(state, send, normalize) {
  const visible = state.hasTag("visible");
  const paused = state.hasTag("paused");
  const placement = state.context.placement;
  const type = state.context.type;
  const [side, align = "center"] = placement.split("-");
  return {
    type,
    title: state.context.title,
    description: state.context.description,
    placement,
    visible,
    paused,
    pause() {
      send("PAUSE");
    },
    resume() {
      send("RESUME");
    },
    dismiss() {
      send("DISMISS");
    },
    getRootProps() {
      return normalize.element({
        ...parts5.root.attrs,
        dir: state.context.dir,
        id: dom5.getRootId(state.context),
        "data-state": visible ? "open" : "closed",
        "data-type": type,
        "data-placement": placement,
        "data-align": align,
        "data-side": side,
        "data-mounted": dataAttr(state.context.mounted),
        "data-paused": dataAttr(paused),
        "data-first": dataAttr(state.context.frontmost),
        "data-sibling": dataAttr(!state.context.frontmost),
        "data-stack": dataAttr(state.context.stacked),
        "data-overlap": dataAttr(!state.context.stacked),
        role: "status",
        "aria-atomic": "true",
        "aria-describedby": state.context.description ? dom5.getDescriptionId(state.context) : void 0,
        "aria-labelledby": state.context.title ? dom5.getTitleId(state.context) : void 0,
        tabIndex: 0,
        style: getPlacementStyle(state.context, visible),
        onKeyDown(event) {
          if (event.defaultPrevented) return;
          if (event.key == "Escape") {
            send("DISMISS");
            event.preventDefault();
          }
        }
      });
    },
    /* Leave a ghost div to avoid setting hover to false when transitioning out */
    getGhostBeforeProps() {
      return normalize.element({
        "data-ghost": "before",
        style: getGhostBeforeStyle(state.context, visible)
      });
    },
    /* Needed to avoid setting hover to false when in between toasts */
    getGhostAfterProps() {
      return normalize.element({
        "data-ghost": "after",
        style: getGhostAfterStyle()
      });
    },
    getTitleProps() {
      return normalize.element({
        ...parts5.title.attrs,
        id: dom5.getTitleId(state.context)
      });
    },
    getDescriptionProps() {
      return normalize.element({
        ...parts5.description.attrs,
        id: dom5.getDescriptionId(state.context)
      });
    },
    getActionTriggerProps() {
      return normalize.button({
        ...parts5.actionTrigger.attrs,
        type: "button",
        onClick(event) {
          var _a, _b;
          if (event.defaultPrevented) return;
          (_b = (_a = state.context.action) == null ? void 0 : _a.onClick) == null ? void 0 : _b.call(_a);
          send("DISMISS");
        }
      });
    },
    getCloseTriggerProps() {
      return normalize.button({
        id: dom5.getCloseTriggerId(state.context),
        ...parts5.closeTrigger.attrs,
        type: "button",
        "aria-label": "Dismiss notification",
        onClick(event) {
          if (event.defaultPrevented) return;
          send("DISMISS");
        }
      });
    }
  };
}
var group = {
  connect: groupConnect,
  machine: groupMachine
};

// node_modules/@ark-ui/react/dist/components/toast/create-toaster.js
var createToaster = (props5) => {
  const machine5 = group.machine({ id: "1", ...props5 });
  const api = group.connect(machine5, machine5.send, normalizeProps);
  return { ...api, machine: machine5 };
};

// node_modules/@ark-ui/react/dist/components/toast/toast-action-trigger.js
var import_jsx_runtime92 = __toESM(require_jsx_runtime(), 1);
var import_react136 = __toESM(require_react(), 1);

// node_modules/@ark-ui/react/dist/components/toast/use-toast-context.js
var [ToastProvider, useToastContext] = createContext({
  name: "ToastContext",
  hookName: "useToastContext",
  providerName: "<ToastProvider />"
});

// node_modules/@ark-ui/react/dist/components/toast/toast-action-trigger.js
var ToastActionTrigger = (0, import_react136.forwardRef)(
  (props5, ref2) => {
    const toast = useToastContext();
    const mergedProps = mergeProps(toast.getActionTriggerProps(), props5);
    return (0, import_jsx_runtime92.jsx)(ark.button, { ...mergedProps, ref: ref2 });
  }
);
ToastActionTrigger.displayName = "ToastActionTrigger";

// node_modules/@ark-ui/react/dist/components/toast/toast-close-trigger.js
var import_jsx_runtime93 = __toESM(require_jsx_runtime(), 1);
var import_react138 = __toESM(require_react(), 1);
var ToastCloseTrigger = (0, import_react138.forwardRef)(
  (props5, ref2) => {
    const toast = useToastContext();
    const mergedProps = mergeProps(toast.getCloseTriggerProps(), props5);
    return (0, import_jsx_runtime93.jsx)(ark.button, { ...mergedProps, ref: ref2 });
  }
);
ToastCloseTrigger.displayName = "ToastCloseTrigger";

// node_modules/@ark-ui/react/dist/components/toast/toast-context.js
var ToastContext = (props5) => props5.children(useToastContext());

// node_modules/@ark-ui/react/dist/components/toast/toast-description.js
var import_jsx_runtime94 = __toESM(require_jsx_runtime(), 1);
var import_react140 = __toESM(require_react(), 1);
var ToastDescription = (0, import_react140.forwardRef)((props5, ref2) => {
  const toast = useToastContext();
  const mergedProps = mergeProps(toast.getDescriptionProps(), props5);
  return (0, import_jsx_runtime94.jsx)(ark.div, { ...mergedProps, ref: ref2 });
});
ToastDescription.displayName = "ToastDescription";

// node_modules/@ark-ui/react/dist/components/toast/toast-root.js
var import_jsx_runtime95 = __toESM(require_jsx_runtime(), 1);
var import_react142 = __toESM(require_react(), 1);
var ToastRoot = (0, import_react142.forwardRef)((props5, ref2) => {
  const toast = useToastContext();
  const mergedProps = mergeProps(toast.getRootProps(), props5);
  return (0, import_jsx_runtime95.jsxs)("div", { ...mergedProps, ref: ref2, children: [
    (0, import_jsx_runtime95.jsx)("div", { ...toast.getGhostBeforeProps() }),
    props5.children,
    (0, import_jsx_runtime95.jsx)("div", { ...toast.getGhostAfterProps() })
  ] });
});
ToastRoot.displayName = "ToastRoot";

// node_modules/@ark-ui/react/dist/components/toast/toast-title.js
var import_jsx_runtime96 = __toESM(require_jsx_runtime(), 1);
var import_react144 = __toESM(require_react(), 1);
var ToastTitle = (0, import_react144.forwardRef)((props5, ref2) => {
  const toast = useToastContext();
  const mergedProps = mergeProps(toast.getTitleProps(), props5);
  return (0, import_jsx_runtime96.jsx)(ark.div, { ...mergedProps, ref: ref2 });
});
ToastTitle.displayName = "ToastTitle";

// node_modules/@ark-ui/react/dist/components/toast/toaster.js
var import_jsx_runtime97 = __toESM(require_jsx_runtime(), 1);
var import_react146 = __toESM(require_react(), 1);
var Toaster = (0, import_react146.forwardRef)((props5, ref2) => {
  const { toaster, children, ...rest } = props5;
  const [state, send] = useMachine(toaster.machine);
  const placement = state.context.placement;
  const api = group.connect(state, send, normalizeProps);
  const toasts = api.getToastsByPlacement(placement);
  const mergedProps = mergeProps(api.getGroupProps({ placement }), rest);
  return (0, import_jsx_runtime97.jsx)(ark.div, { ...mergedProps, ref: ref2, children: toasts.map((toast2) => (0, import_jsx_runtime97.jsx)(ToastActor, { value: toast2, children: (ctx) => children(ctx) }, toast2.id)) });
});
Toaster.displayName = "Toaster";
var ToastActor = (props5) => {
  const [state, send] = useActor(props5.value);
  const api = connect5(state, send, normalizeProps);
  return (0, import_jsx_runtime97.jsx)(ToastProvider, { value: api, children: props5.children(state.context) });
};

// node_modules/@ark-ui/react/dist/components/toast/toast.js
var toast_exports = {};
__export(toast_exports, {
  ActionTrigger: () => ToastActionTrigger,
  CloseTrigger: () => ToastCloseTrigger,
  Context: () => ToastContext,
  Description: () => ToastDescription,
  Root: () => ToastRoot,
  Title: () => ToastTitle
});

// node_modules/@chakra-ui/react/dist/esm/components/toast/toast.js
var import_react147 = __toESM(require_react(), 1);
var {
  withProvider: withProvider38,
  withContext: withContext57,
  useStyles: useToastStyles
} = createSlotRecipeContext({ key: "toast" });
var Toaster2 = chakra(
  Toaster,
  {},
  { forwardAsChild: true }
);
var ToastRoot2 = withProvider38(
  toast_exports.Root,
  "root",
  { forwardAsChild: true }
);
var ToastCloseTrigger2 = withContext57(toast_exports.CloseTrigger, "closeTrigger", {
  forwardAsChild: true,
  defaultProps: {
    children: (0, import_jsx_runtime98.jsx)(CloseIcon, {})
  }
});
var ToastTitle2 = withContext57(
  toast_exports.Title,
  "title",
  { forwardAsChild: true }
);
var ToastDescription2 = withContext57(toast_exports.Description, "description", { forwardAsChild: true });
var ToastActionTrigger2 = withContext57(toast_exports.ActionTrigger, "actionTrigger", { forwardAsChild: true });
var iconMap2 = {
  warning: WarningIcon,
  success: CheckCircleIcon,
  error: WarningIcon
};
var ToastIndicator = (0, import_react147.forwardRef)(
  function ToastIndicator2(props5, ref2) {
    const api = useToastContext();
    const styles = useToastStyles();
    const Component = iconMap2[api.type];
    if (!Component) return null;
    return (0, import_jsx_runtime98.jsx)(Component, { ref: ref2, ...props5, css: [styles.indicator, props5.css] });
  }
);

// node_modules/@chakra-ui/react/dist/esm/components/toast/namespace.js
var namespace_exports45 = {};
__export(namespace_exports45, {
  ActionTrigger: () => ToastActionTrigger2,
  CloseTrigger: () => ToastCloseTrigger2,
  Description: () => ToastDescription2,
  Indicator: () => ToastIndicator,
  Root: () => ToastRoot2,
  Title: () => ToastTitle2
});

// node_modules/@ark-ui/react/dist/components/toggle/use-toggle-context.js
var [ToggleProvider, useToggleContext] = createContext({
  name: "ToggleContext",
  hookName: "useToggleContext",
  providerName: "<ToggleProvider />"
});

// node_modules/@ark-ui/react/dist/components/toggle/toggle-context.js
var ToggleContext = (props5) => props5.children(useToggleContext());

// node_modules/@ark-ui/react/dist/components/toggle/toggle-indicator.js
var import_jsx_runtime99 = __toESM(require_jsx_runtime(), 1);
var import_react149 = __toESM(require_react(), 1);
var ToggleIndicator = (0, import_react149.forwardRef)((props5, ref2) => {
  const { children, fallback, ...restProps } = props5;
  const toggle = useToggleContext();
  const mergedProps = mergeProps(toggle.getIndicatorProps(), restProps);
  return (0, import_jsx_runtime99.jsx)(ark.div, { ...mergedProps, ref: ref2, children: toggle.pressed ? children : fallback });
});
ToggleIndicator.displayName = "ToggleIndicator";

// node_modules/@ark-ui/react/dist/components/toggle/toggle-root.js
var import_jsx_runtime100 = __toESM(require_jsx_runtime(), 1);
var import_react151 = __toESM(require_react(), 1);

// node_modules/@ark-ui/react/dist/components/toggle/toggle.anatomy.js
var toggleAnatomy = createAnatomy("toggle", ["root", "indicator"]);
var parts6 = toggleAnatomy.build();

// node_modules/@ark-ui/react/dist/components/toggle/use-toggle.js
function useToggle(props5) {
  const { defaultPressed, pressed, onPressedChange, disabled } = props5;
  const [pressedState, setPressedState] = useControllableState({
    defaultValue: !!defaultPressed,
    value: pressed,
    onChange: onPressedChange
  });
  return {
    pressed: pressedState,
    disabled: !!disabled,
    setPressed: setPressedState,
    getRootProps() {
      return {
        ...parts6.root.attrs,
        type: "button",
        disabled,
        "aria-pressed": pressedState,
        "data-state": pressedState ? "on" : "off",
        "data-pressed": dataAttr(pressedState),
        "data-disabled": dataAttr(disabled),
        onClick(event) {
          if (event.defaultPrevented) return;
          if (disabled) return;
          setPressedState(!pressedState);
        }
      };
    },
    getIndicatorProps() {
      return {
        ...parts6.indicator.attrs,
        "data-disabled": dataAttr(disabled),
        "data-pressed": dataAttr(pressedState),
        "data-state": pressedState ? "on" : "off"
      };
    }
  };
}

// node_modules/@ark-ui/react/dist/components/toggle/toggle-root.js
var ToggleRoot = (0, import_react151.forwardRef)((props5, ref2) => {
  const [useToggleProps, localProps] = createSplitProps2()(props5, [
    "pressed",
    "defaultPressed",
    "disabled",
    "onPressedChange"
  ]);
  const toggle = useToggle(useToggleProps);
  const mergedProps = mergeProps(toggle.getRootProps(), localProps);
  return (0, import_jsx_runtime100.jsx)(ToggleProvider, { value: toggle, children: (0, import_jsx_runtime100.jsx)(ark.button, { ...mergedProps, ref: ref2 }) });
});
ToggleRoot.displayName = "ToggleRoot";

// node_modules/@ark-ui/react/dist/components/toggle/toggle.js
var toggle_exports = {};
__export(toggle_exports, {
  Context: () => ToggleContext,
  Indicator: () => ToggleIndicator,
  Root: () => ToggleRoot,
  toggleAnatomy: () => toggleAnatomy
});

// node_modules/@chakra-ui/react/dist/esm/components/toggle/toggle.js
var {
  withProvider: withProvider39,
  withContext: withContext58,
  useStyles: useToggleStyles,
  PropsProvider: PropsProvider56
} = createSlotRecipeContext({ key: "toggle" });
var ToggleRootProvider = withProvider39(toggle_exports.Root, "root", { forwardAsChild: true });
var ToggleRoot2 = withProvider39(
  toggle_exports.Root,
  "root",
  { forwardAsChild: true }
);
var TogglePropsProvider = PropsProvider56;
var ToggleIndicator2 = withContext58(toggle_exports.Indicator, "indicator", { forwardAsChild: true });
var ToggleContext2 = toggle_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/toggle/namespace.js
var namespace_exports46 = {};
__export(namespace_exports46, {
  Context: () => ToggleContext2,
  Indicator: () => ToggleIndicator2,
  PropsProvider: () => TogglePropsProvider,
  Root: () => ToggleRoot2
});

// node_modules/@chakra-ui/react/dist/esm/components/tooltip/tooltip.js
var {
  withRootProvider: withRootProvider7,
  withContext: withContext59,
  useStyles: useTooltipStyles,
  PropsProvider: PropsProvider57
} = createSlotRecipeContext({ key: "tooltip" });
var TooltipRootProvider = withRootProvider7(
  tooltip_exports.RootProvider
);
var TooltipRoot = withRootProvider7(tooltip_exports.Root);
var TooltipPropsProvider = PropsProvider57;
var TooltipTrigger = withContext59(tooltip_exports.Trigger, "trigger", { forwardAsChild: true });
var TooltipPositioner = withContext59(tooltip_exports.Positioner, "positioner", { forwardAsChild: true });
var TooltipContent = withContext59(
  tooltip_exports.Content,
  "content",
  { forwardAsChild: true }
);
var TooltipArrow = withContext59(
  tooltip_exports.Arrow,
  "arrow",
  { forwardAsChild: true }
);
var TooltipArrowTip = withContext59(tooltip_exports.ArrowTip, "arrowTip", { forwardAsChild: true });
var TooltipContext = tooltip_exports.Context;

// node_modules/@chakra-ui/react/dist/esm/components/tooltip/namespace.js
var namespace_exports47 = {};
__export(namespace_exports47, {
  Arrow: () => TooltipArrow,
  ArrowTip: () => TooltipArrowTip,
  Content: () => TooltipContent,
  Context: () => TooltipContext,
  Positioner: () => TooltipPositioner,
  PropsProvider: () => TooltipPropsProvider,
  Root: () => TooltipRoot,
  RootProvider: () => TooltipRootProvider,
  Trigger: () => TooltipTrigger
});

// node_modules/@chakra-ui/react/dist/esm/components/typography/heading.js
var { withContext: withContext60, PropsProvider: PropsProvider58 } = createRecipeContext({
  key: "heading"
});
var Heading = withContext60("h2");
var HeadingPropsProvider = PropsProvider58;

// node_modules/@chakra-ui/react/dist/esm/components/typography/text.js
var { withContext: withContext61, PropsProvider: PropsProvider59 } = createRecipeContext({
  key: "text"
});
var Text = withContext61("p");
var TextPropsProvider = PropsProvider59;

// node_modules/@chakra-ui/react/dist/esm/components/typography/em.js
var Em = chakra("em", {
  base: {
    fontStyle: "italic"
  }
});

// node_modules/@chakra-ui/react/dist/esm/components/typography/strong.js
var Strong = chakra("strong", {
  base: { fontWeight: "semibold" }
});

// node_modules/@chakra-ui/react/dist/esm/components/visually-hidden/visually-hidden.js
var visuallyHiddenStyle = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
var VisuallyHidden = chakra("span", {
  base: visuallyHiddenStyle
});
VisuallyHidden.displayName = "VisuallyHidden";
export {
  AbsoluteCenter,
  namespace_exports as Accordion,
  AccordionContext,
  AccordionItem,
  AccordionItemBody,
  AccordionItemContent,
  AccordionItemContext,
  AccordionItemIndicator,
  AccordionItemTrigger,
  AccordionPropsProvider,
  AccordionRoot,
  AccordionRootProvider,
  namespace_exports2 as ActionBar,
  ActionBarCloseTrigger,
  ActionBarContent,
  ActionBarContext,
  ActionBarPositioner,
  ActionBarPropsProvider,
  ActionBarRoot,
  ActionBarRootProvider,
  ActionBarSelectionTrigger,
  ActionBarSeparator,
  namespace_exports3 as Alert,
  AlertContent,
  AlertDescription,
  AlertIndicator,
  AlertPropsProvider,
  AlertRoot,
  AlertTitle,
  AspectRatio,
  namespace_exports4 as Avatar,
  AvatarContext,
  AvatarFallback,
  AvatarIcon,
  AvatarImage,
  AvatarPropsProvider,
  AvatarRoot,
  AvatarRootProvider,
  Badge,
  BadgePropsProvider,
  Bleed,
  namespace_exports5 as Blockquote,
  BlockquoteCaption,
  BlockquoteContent,
  BlockquoteIcon,
  BlockquotePropsProvider,
  BlockquoteRoot,
  Box,
  namespace_exports6 as Breadcrumb,
  BreadcrumbCurrentLink,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPropsProvider,
  BreadcrumbRoot,
  BreadcrumbSeparator,
  Button,
  namespace_exports7 as Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardPropsProvider,
  CardRoot,
  CardTitle,
  Center,
  ChakraProvider,
  namespace_exports8 as Checkbox,
  namespace_exports9 as CheckboxCard,
  CheckboxCardAddon,
  CheckboxCardContent,
  CheckboxCardContext,
  CheckboxCardControl,
  CheckboxCardDescription,
  CheckboxCardHiddenInput,
  CheckboxCardIndicator,
  CheckboxCardLabel,
  CheckboxCardRoot,
  CheckboxCardRootPropsProvider,
  CheckboxCardRootProvider,
  CheckboxContext,
  CheckboxControl,
  CheckboxGroup,
  CheckboxHiddenInput,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxPropsProvider,
  CheckboxRoot,
  CheckboxRootProvider,
  Checkmark,
  Circle,
  ClientOnly,
  namespace_exports10 as Clipboard,
  ClipboardContext2 as ClipboardContext,
  ClipboardControl2 as ClipboardControl,
  ClipboardIndicator2 as ClipboardIndicator,
  ClipboardInput2 as ClipboardInput,
  ClipboardLabel2 as ClipboardLabel,
  ClipboardPropsProvider,
  ClipboardRoot2 as ClipboardRoot,
  ClipboardRootProvider2 as ClipboardRootProvider,
  ClipboardTrigger2 as ClipboardTrigger,
  Code,
  CodePropsProvider,
  namespace_exports11 as Collapsible,
  CollapsibleContent,
  CollapsibleContext,
  CollapsiblePropsProvider,
  CollapsibleRoot,
  CollapsibleRootProvider,
  CollapsibleTrigger,
  namespace_exports12 as ColorPicker,
  ColorPickerArea,
  ColorPickerAreaBackground,
  ColorPickerAreaThumb,
  ColorPickerChannelInput,
  ColorPickerChannelSlider,
  ColorPickerChannelSliderLabel,
  ColorPickerChannelSliderThumb,
  ColorPickerChannelSliderTrack,
  ColorPickerChannelSliderValueText,
  ColorPickerContent,
  ColorPickerContext,
  ColorPickerControl,
  ColorPickerEyeDropperTrigger,
  ColorPickerFormatSelect,
  ColorPickerFormatTrigger,
  ColorPickerHiddenInput,
  ColorPickerLabel,
  ColorPickerPositioner,
  ColorPickerPropsProvider,
  ColorPickerRoot,
  ColorPickerRootProvider,
  ColorPickerSwatch,
  ColorPickerSwatchGroup,
  ColorPickerSwatchIndicator,
  ColorPickerSwatchTrigger,
  ColorPickerTransparencyGrid,
  ColorPickerTrigger,
  ColorPickerValueSwatch,
  ColorPickerValueText,
  ColorPickerView,
  ColorSwatch,
  ColorSwatchMix,
  ColorSwatchPropsProvider,
  Container,
  ContainerPropsProvider,
  namespace_exports13 as DataList,
  DataListItem,
  DataListItemLabel,
  DataListItemValue,
  DataListPropsProvider,
  DataListRoot,
  namespace_exports14 as Dialog,
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogContext,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPositioner,
  DialogPropsProvider,
  DialogRoot,
  DialogRootProvider,
  DialogTitle,
  DialogTrigger,
  namespace_exports15 as Drawer,
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerContext,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPositioner,
  DrawerRoot,
  DrawerRootPropsProvider,
  DrawerRootProvider,
  DrawerTitle,
  DrawerTrigger,
  EMPTY_SLOT_STYLES,
  EMPTY_STYLES,
  namespace_exports16 as Editable,
  EditableArea,
  EditableCancelTrigger,
  EditableContext,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditablePreview,
  EditablePropsProvider,
  EditableRoot,
  EditableRootProvider,
  EditableSubmitTrigger,
  EditableTextarea,
  Em,
  namespace_exports17 as EmptyState,
  EmptyStateContent,
  EmptyStateDescription,
  EmptyStateIndicator,
  EmptyStatePropsProvider,
  EmptyStateRoot,
  EmptyStateTitle,
  EnvironmentProvider,
  namespace_exports18 as Field,
  FieldErrorIcon,
  FieldErrorText,
  FieldHelperText,
  FieldLabel,
  FieldPropsProvider,
  FieldRequiredIndicator,
  FieldRoot,
  namespace_exports19 as Fieldset,
  FieldsetContent,
  FieldsetContext,
  FieldsetErrorText,
  FieldsetHelperText,
  FieldsetLegend,
  FieldsetRoot,
  namespace_exports20 as FileUpload,
  FileUploadClearTrigger,
  FileUploadContext,
  FileUploadDropzone,
  FileUploadDropzoneContent,
  FileUploadItem,
  FileUploadItemContent,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemSizeText,
  FileUploadLabel,
  FileUploadPropsProvider,
  FileUploadRoot,
  FileUploadRootProvider,
  FileUploadTrigger,
  Flex,
  Float,
  For,
  FormatByte2 as FormatByte,
  FormatNumber2 as FormatNumber,
  Grid,
  GridItem,
  Group,
  HStack,
  Heading,
  HeadingPropsProvider,
  Highlight2 as Highlight,
  namespace_exports21 as HoverCard,
  HoverCardArrow,
  HoverCardArrowTip,
  HoverCardContent,
  HoverCardContext,
  HoverCardPositioner,
  HoverCardPropsProvider,
  HoverCardRoot,
  HoverCardRootProvider,
  HoverCardTrigger,
  Icon,
  IconButton,
  Image,
  Input,
  InputAddon,
  InputElement,
  InputPropsProvider,
  Kbd,
  Link,
  LinkBox,
  LinkOverlay,
  LinkPropsProvider,
  namespace_exports22 as List,
  ListIndicator,
  ListItem,
  ListRoot,
  ListRootPropsProvider,
  LocaleProvider,
  Mark,
  MarkPropsProvider,
  namespace_exports23 as Menu,
  MenuArrow,
  MenuArrowTip,
  MenuCheckboxItem,
  MenuContent,
  MenuContext,
  MenuContextTrigger,
  MenuIndicator,
  MenuItem,
  MenuItemCommand,
  MenuItemContext,
  MenuItemGroup,
  MenuItemGroupLabel,
  MenuItemIndicator,
  MenuItemText,
  MenuPositioner,
  MenuPropsProvider,
  MenuRadioItem,
  MenuRadioItemGroup,
  MenuRoot,
  MenuRootProvider,
  MenuSeparator,
  MenuTrigger,
  MenuTriggerItem,
  namespace_exports24 as NativeSelect,
  NativeSelectField,
  NativeSelectIndicator,
  NativeSelectPropsProvider,
  NativeSelectRoot,
  namespace_exports25 as NumberInput,
  NumberInputContext,
  NumberInputControl,
  NumberInputDecrementTrigger,
  NumberInputIncrementTrigger,
  NumberInputInput,
  NumberInputLabel,
  NumberInputPropsProvider,
  NumberInputRoot,
  NumberInputRootProvider,
  NumberInputScrubber,
  NumberInputValueText,
  namespace_exports26 as Pagination,
  PaginationContext2 as PaginationContext,
  PaginationEllipsis2 as PaginationEllipsis,
  PaginationItem2 as PaginationItem,
  PaginationNextTrigger2 as PaginationNextTrigger,
  PaginationPrevTrigger2 as PaginationPrevTrigger,
  PaginationPropsProvider,
  PaginationRoot2 as PaginationRoot,
  PaginationRootProvider2 as PaginationRootProvider,
  namespace_exports27 as PinInput,
  PinInputContext,
  PinInputControl,
  PinInputHiddenInput,
  PinInputInput,
  PinInputLabel,
  PinInputPropsProvider,
  PinInputRoot,
  PinInputRootProvider,
  namespace_exports28 as Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverArrowTip,
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverContext,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverPositioner,
  PopoverPropsProvider,
  PopoverRoot,
  PopoverRootProvider,
  PopoverTitle,
  PopoverTrigger,
  Portal,
  namespace_exports29 as Progress,
  namespace_exports30 as ProgressCircle,
  ProgressCircleCircle,
  ProgressCircleContext,
  ProgressCircleLabel,
  ProgressCirclePropsProvider,
  ProgressCircleRange,
  ProgressCircleRoot,
  ProgressCircleRootProvider,
  ProgressCircleTrack,
  ProgressCircleValueText,
  ProgressContext,
  ProgressLabel,
  ProgressPropsProvider,
  ProgressRange,
  ProgressRoot,
  ProgressRootProvider,
  ProgressTrack,
  ProgressValueText,
  namespace_exports31 as RadioCard,
  RadioCardContext,
  RadioCardItem,
  RadioCardItemAddon,
  RadioCardItemContent,
  RadioCardItemControl,
  RadioCardItemDescription,
  RadioCardItemHiddenInput,
  RadioCardItemIndicator,
  RadioCardItemText,
  RadioCardLabel,
  RadioCardPropsProvider,
  RadioCardRoot,
  RadioCardRootProvider,
  namespace_exports32 as RadioGroup,
  RadioGroupContext,
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemHiddenInput,
  RadioGroupItemIndicator2 as RadioGroupItemIndicator,
  RadioGroupItemText,
  RadioGroupLabel,
  RadioGroupPropsProvider,
  RadioGroupRoot,
  RadioGroupRootProvider,
  Radiomark,
  namespace_exports33 as RatingGroup,
  RatingGroupContext,
  RatingGroupControl,
  RatingGroupHiddenInput,
  RatingGroupItem,
  RatingGroupItemContext,
  RatingGroupItemIndicator,
  RatingGroupLabel,
  RatingGroupPropsProvider,
  RatingGroupRoot,
  RatingGroupRootProvider,
  RecipePropsProvider,
  namespace_exports34 as SegmentGroup,
  SegmentGroupContext,
  SegmentGroupIndicator,
  SegmentGroupItem,
  SegmentGroupItemContext,
  SegmentGroupItemHiddenInput,
  SegmentGroupItemText,
  SegmentGroupPropsProvider,
  SegmentGroupRoot,
  SegmentGroupRootProvider,
  namespace_exports35 as Select,
  SelectClearTrigger,
  SelectContent,
  SelectContext,
  SelectControl,
  SelectHiddenSelect,
  SelectIndicator,
  SelectIndicatorGroup,
  SelectItem,
  SelectItemContext,
  SelectItemGroup,
  SelectItemGroupLabel,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPositioner,
  SelectPropsProvider,
  SelectRoot,
  SelectRootProvider,
  SelectTrigger,
  SelectValueText,
  Separator,
  SeparatorPropsProvider,
  Show,
  SimpleGrid,
  Skeleton,
  SkeletonPropsProvider,
  SkipNavContent,
  SkipNavLink,
  namespace_exports36 as Slider,
  SliderContext,
  SliderControl,
  SliderHiddenInput,
  SliderLabel,
  SliderMarker,
  SliderMarkerGroup,
  SliderMarkerIndicator,
  SliderPropsProvider,
  SliderRange,
  SliderRoot,
  SliderRootProvider,
  SliderThumb,
  SliderTrack,
  SliderValueText,
  Spacer,
  Span,
  Spinner,
  SpinnerPropsProvider,
  Square,
  Stack,
  StackSeparator,
  namespace_exports37 as Stat,
  StatDownIndicator,
  StatHelpText,
  StatLabel,
  StatPropsProvider,
  StatRoot,
  StatUpIndicator,
  StatValueText,
  StatValueUnit,
  namespace_exports38 as Status,
  StatusIndicator,
  StatusPropsProvider,
  StatusRoot,
  namespace_exports39 as Steps,
  StepsCompletedContent2 as StepsCompletedContent,
  StepsContent2 as StepsContent,
  StepsContext2 as StepsContext,
  StepsDescription,
  StepsIndicator2 as StepsIndicator,
  StepsItem2 as StepsItem,
  StepsItemContext2 as StepsItemContext,
  StepsList2 as StepsList,
  StepsNextTrigger2 as StepsNextTrigger,
  StepsNumber,
  StepsPrevTrigger2 as StepsPrevTrigger,
  StepsPropsProvider,
  StepsRoot2 as StepsRoot,
  StepsRootProvider2 as StepsRootProvider,
  StepsSeparator2 as StepsSeparator,
  StepsStatus,
  StepsTitle,
  StepsTrigger2 as StepsTrigger,
  Sticky,
  Strong,
  namespace_exports40 as Switch,
  SwitchContext,
  SwitchControl,
  SwitchHiddenInput,
  SwitchIndicator,
  SwitchLabel,
  SwitchPropsProvider,
  SwitchRoot,
  SwitchRootProvider,
  SwitchThumb,
  SwitchThumbIndicator,
  namespace_exports41 as Table,
  TableBody,
  TableCaption,
  TableCell,
  TableColumn,
  TableColumnGroup,
  TableColumnHeader,
  TableFooter,
  TableHeader,
  TableRoot,
  TableRootPropsProvider,
  TableRow,
  TableScrollArea,
  namespace_exports42 as Tabs,
  TabsContent,
  TabsContentGroup,
  TabsContext2 as TabsContext,
  TabsIndicator,
  TabsList,
  TabsPropsProvider,
  TabsRoot2 as TabsRoot,
  TabsRootProvider2 as TabsRootProvider,
  TabsTrigger,
  namespace_exports43 as Tag,
  TagCloseTrigger,
  TagEndElement,
  TagLabel,
  TagRoot,
  TagRootPropsProvider,
  TagStartElement,
  Text,
  TextPropsProvider,
  Textarea,
  TextareaPropsProvider,
  Theme,
  namespace_exports44 as Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDescription,
  TimelineIndicator,
  TimelineItem,
  TimelineRoot,
  TimelineRootPropsProvider,
  TimelineSeparator,
  namespace_exports45 as Toast,
  ToastActionTrigger2 as ToastActionTrigger,
  ToastCloseTrigger2 as ToastCloseTrigger,
  ToastDescription2 as ToastDescription,
  ToastIndicator,
  ToastRoot2 as ToastRoot,
  ToastTitle2 as ToastTitle,
  Toaster2 as Toaster,
  namespace_exports46 as Toggle,
  ToggleContext2 as ToggleContext,
  ToggleIndicator2 as ToggleIndicator,
  TogglePropsProvider,
  ToggleRoot2 as ToggleRoot,
  namespace_exports47 as Tooltip,
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipContext,
  TooltipPositioner,
  TooltipPropsProvider,
  TooltipRoot,
  TooltipRootProvider,
  TooltipTrigger,
  VStack,
  VisuallyHidden,
  chakra,
  createContext2 as createContext,
  createIcon,
  createListCollection,
  createRecipeContext,
  createSlotRecipeContext,
  createSystem,
  createToaster,
  defaultBaseConfig,
  defaultConfig,
  defaultSystem,
  defineAnimationStyles,
  defineConditions,
  defineConfig,
  defineGlobalStyles,
  defineKeyframes,
  defineLayerStyles,
  defineRecipe,
  defineSemanticTokens,
  defineSlotRecipe,
  defineStyle,
  defineTextStyles,
  defineTokens,
  isValidSystem,
  mergeConfigs,
  mergeProps2 as mergeProps,
  mergeRefs,
  parse as parseColor,
  useAccordion,
  useAccordionContext,
  useAccordionItemContext,
  useAccordionStyles,
  usePopover as useActionBar,
  usePopoverContext as useActionBarContext,
  useActionBarStyles,
  useAlertStyles,
  useAvatar,
  useAvatarContext,
  useAvatarStyles,
  useBlockquoteStyles,
  useBreadcrumbStyles,
  useBreakpoint,
  useBreakpointValue,
  useCallbackRef,
  useCardStyles,
  useChakraContext,
  useCheckbox,
  useCheckbox as useCheckboxCard,
  useCheckboxContext as useCheckboxCardContext,
  useCheckboxCardStyles,
  useCheckboxContext,
  useCheckboxGroup,
  useCheckboxGroupContext,
  useCheckboxStyles,
  useClipboard,
  useClipboardContext,
  useClipboardStyles,
  useCollapsible,
  useCollapsibleContext,
  useCollapsibleStyles,
  useColorPicker,
  useColorPickerContext,
  useColorPickerStyles,
  useControllableProp,
  useControllableState2 as useControllableState,
  useDataListStyles,
  useDialog,
  useDialogContext,
  useDialogStyles,
  useDisclosure,
  useDialog as useDrawer,
  useDialogContext as useDrawerContext,
  useDrawerStyles,
  useEditable,
  useEditableContext,
  useEditableStyles,
  useEmptyStateStyles,
  useEnvironmentContext,
  useFieldContext,
  useFieldStyles,
  useFieldsetContext,
  useFileUpload,
  useFileUploadContext,
  useFileUploadStyles,
  useHighlight,
  useHoverCard,
  useHoverCardContext,
  useHoverCardStyles,
  useListStyles,
  useLocaleContext,
  useMediaQuery,
  useMenu,
  useMenuContext,
  useMenuItemContext,
  useMenuStyles,
  useNativeSelectStyles,
  useNumberInput,
  useNumberInputContext,
  useNumberInputStyles,
  usePagination,
  usePaginationContext,
  usePaginationStyles,
  useParentRecipeProps,
  usePinInput,
  usePinInputContext,
  usePinInputStyles,
  usePopover,
  usePopoverContext,
  usePopoverStyles,
  useProgress,
  useProgressCircleStyles,
  useProgressContext,
  useProgressStyles,
  useRadioGroupContext as useRadioCardContext,
  useRadioGroup as useRadioCardGroup,
  useRadioGroupItemContext as useRadioCardItemContext,
  useRadioCardStyles,
  useRadioGroup,
  useRadioGroupContext,
  useRadioGroupItemContext,
  useRadioGroupStyles,
  useRatingGroup,
  useRatingGroupContext,
  useRatingGroupItemContext,
  useRatingGroupStyles,
  useRecipe,
  useSegmentGroup,
  useSegmentGroupContext,
  useSegmentGroupItemContext,
  useSegmentGroupStyles,
  useSelect,
  useSelectContext,
  useSelectItemContext,
  useSelectStyles,
  useSlider,
  useSliderContext,
  useSliderStyles,
  useSlotRecipe,
  useStatStyles,
  useStatusStyles,
  useSteps,
  useStepsContext,
  useStepsItemContext,
  useStepsStyles,
  useSwitch,
  useSwitchContext,
  useSwitchStyles,
  useTableStyles,
  useTabsStyles,
  useTagStyles,
  useTimelineStyles,
  useToastStyles,
  useToggle,
  useToggleContext,
  useToggleStyles,
  useToken,
  useTooltip,
  useTooltipContext,
  useTooltipStyles,
  visuallyHiddenStyle
};
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=@chakra-ui_react.js.map

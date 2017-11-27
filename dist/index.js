'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

var _requireUniversalModule = require('./requireUniversalModule')

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES
  }
})
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS
  }
})

var _reportChunks = require('./report-chunks')

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default
  }
})

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _propTypes = require('prop-types')

var _propTypes2 = _interopRequireDefault(_propTypes)

var _hoistNonReactStatics = require('hoist-non-react-statics')

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics)

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule)

var _utils = require('./utils')

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
}

function _objectWithoutProperties(obj, keys) {
  var target = {}
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }
  return target
}

var hasBabelPlugin = false

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  )
}

var setHasBabelPlugin = (exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true
})

function universal(component) {
  var _class, _temp

  var opts =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {}

  var _opts$loading = opts.loading,
    Loading =
      _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
    _opts$error = opts.error,
    Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
    _opts$minDelay = opts.minDelay,
    minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
    _opts$alwaysDelay = opts.alwaysDelay,
    alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
    _opts$testBabelPlugin = opts.testBabelPlugin,
    testBabelPlugin =
      _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
    _opts$loadingTransiti = opts.loadingTransition,
    loadingTransition =
      _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
    options = _objectWithoutProperties(opts, [
      'loading',
      'error',
      'minDelay',
      'alwaysDelay',
      'testBabelPlugin',
      'loadingTransition'
    ])

  var isDynamic = hasBabelPlugin || testBabelPlugin
  options.isDynamic = isDynamic
  options.modCache = {}
  options.promCache = {}

  return (
    (_temp = _class = (function(_React$Component) {
      _inherits(UniversalComponent, _React$Component)

      _createClass(UniversalComponent, null, [
        {
          key: 'preload',

          /* eslint-enable react/sort-comp */

          /* eslint-disable react/sort-comp */
          value: function preload(props) {
            var context =
              arguments.length > 1 && arguments[1] !== undefined
                ? arguments[1]
                : {}

            props = props || {}

            var _req = (0, _requireUniversalModule2.default)(
                component,
                options,
                props
              ),
              requireAsync = _req.requireAsync,
              requireSync = _req.requireSync

            var Component = void 0

            try {
              Component = requireSync(props, context)
            } catch (error) {
              return Promise.reject(error)
            }

            if (Component) return Promise.resolve(Component)

            return requireAsync(props, context)
          }
        }
      ])

      function UniversalComponent(props, context) {
        _classCallCheck(this, UniversalComponent)

        var _this = _possibleConstructorReturn(
          this,
          (
            UniversalComponent.__proto__ ||
            Object.getPrototypeOf(UniversalComponent)
          ).call(this, props, context)
        )

        _this.update = function(state) {
          var isMount =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : false
          var isSync =
            arguments.length > 2 && arguments[2] !== undefined
              ? arguments[2]
              : false
          var isServer =
            arguments.length > 3 && arguments[3] !== undefined
              ? arguments[3]
              : false

          if (!_this._mounted) return
          if (!state.error) state.error = null
          _this.handleAfter(state, isMount, isSync, isServer)
        }

        _this.state = { error: null }
        return _this
      }

      _createClass(UniversalComponent, [
        {
          key: 'componentWillMount',
          value: function componentWillMount() {
            this._mounted = true

            var _req2 = (0, _requireUniversalModule2.default)(
                component,
                options,
                this.props
              ),
              addModule = _req2.addModule,
              requireSync = _req2.requireSync,
              requireAsync = _req2.requireAsync,
              asyncOnly = _req2.asyncOnly

            var Component = void 0

            try {
              Component = requireSync(this.props, this.context)
            } catch (error) {
              return this.update({ error: error })
            }

            this._asyncOnly = asyncOnly
            var chunkName = addModule(this.props) // record the module for SSR flushing :)

            if (this.context.report) {
              this.context.report(chunkName)
            }

            if (Component || _utils.isServer) {
              this.handleBefore(true, true, _utils.isServer)
              this.update({ Component: Component }, true, true, _utils.isServer)
              return
            }

            this.handleBefore(true, false)
            this.requireAsync(requireAsync, this.props, true)
          }
        },
        {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            this._mounted = false
          }
        },
        {
          key: 'componentWillReceiveProps',
          value: function componentWillReceiveProps(nextProps) {
            var _this2 = this

            if (isDynamic || this._asyncOnly) {
              var _req3 = (0, _requireUniversalModule2.default)(
                  component,
                  options,
                  nextProps,
                  this.props
                ),
                requireSync = _req3.requireSync,
                requireAsync = _req3.requireAsync,
                shouldUpdate = _req3.shouldUpdate

              if (shouldUpdate(nextProps, this.props)) {
                var Component = void 0

                try {
                  Component = requireSync(nextProps, this.context)
                } catch (error) {
                  return this.update({ error: error })
                }

                this.handleBefore(false, !!Component)

                if (!Component) {
                  return this.requireAsync(requireAsync, nextProps)
                }

                var state = { Component: Component }

                if (alwaysDelay) {
                  if (loadingTransition) this.update({ Component: null }) // display `loading` during componentWillReceiveProps
                  setTimeout(function() {
                    return _this2.update(state, false, true)
                  }, minDelay)
                  return
                }

                this.update(state, false, true)
              } else if (isHMR()) {
                var _Component = requireSync(nextProps, this.context)
                this.setState({
                  Component: function Component() {
                    return null
                  }
                }) // HMR /w Redux and HOCs can be finicky, so we
                setTimeout(function() {
                  return _this2.setState({ Component: _Component })
                }) // toggle components to insure updates occur
              }
            }
          }
        },
        {
          key: 'requireAsync',
          value: function requireAsync(_requireAsync, props, isMount) {
            var _this3 = this

            if (this.state.Component && loadingTransition) {
              this.update({ Component: null }) // display `loading` during componentWillReceiveProps
            }

            var time = new Date()

            _requireAsync(props, this.context)
              .then(function(Component) {
                var state = { Component: Component }

                var timeLapsed = new Date() - time
                if (timeLapsed < minDelay) {
                  var extraDelay = minDelay - timeLapsed
                  return setTimeout(function() {
                    return _this3.update(state, isMount)
                  }, extraDelay)
                }

                _this3.update(state, isMount)
              })
              .catch(function(error) {
                return _this3.update({ error: error })
              })
          }
        },
        {
          key: 'handleBefore',
          value: function handleBefore(isMount, isSync) {
            var isServer =
              arguments.length > 2 && arguments[2] !== undefined
                ? arguments[2]
                : false

            if (this.props.onBefore) {
              var onBefore = this.props.onBefore

              var info = {
                isMount: isMount,
                isSync: isSync,
                isServer: isServer
              }
              onBefore(info)
            }
          }
        },
        {
          key: 'handleAfter',
          value: function handleAfter(state, isMount, isSync, isServer) {
            var Component = state.Component,
              error = state.error

            if (Component && !error) {
              ;(0, _hoistNonReactStatics2.default)(
                UniversalComponent,
                Component,
                { preload: true }
              )

              if (this.props.onAfter) {
                var onAfter = this.props.onAfter

                var info = {
                  isMount: isMount,
                  isSync: isSync,
                  isServer: isServer
                }
                onAfter(info, Component)
              }
            } else if (error && this.props.onError) {
              this.props.onError(error)
            }

            this.setState(state)
          }
        },
        {
          key: 'render',
          value: function render() {
            var _state = this.state,
              error = _state.error,
              Component = _state.Component

            var _props = this.props,
              isLoading = _props.isLoading,
              userError = _props.error,
              props = _objectWithoutProperties(_props, ['isLoading', 'error'])

            // user-provided props (e.g. for data-fetching loading):

            if (isLoading) {
              return (0, _utils.createElement)(Loading, props)
            } else if (userError) {
              return (0, _utils.createElement)(
                Err,
                _extends({}, props, { error: userError })
              )
            } else if (Component) {
              // primary usage (for async import loading + errors):
              return (0, _utils.createElement)(Component, props)
            } else if (error) {
              return (0, _utils.createElement)(
                Err,
                _extends({}, props, { error: error })
              )
            }

            return (0, _utils.createElement)(Loading, props)
          }
        }
      ])

      return UniversalComponent
    })(_react2.default.Component)),
    (_class.contextTypes = {
      store: _propTypes2.default.object,
      report: _propTypes2.default.func
    }),
    _temp
  )
}
exports.default = universal

(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1177:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_NAMESPACE=void 0;var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.getNamespace=f,t.getColor=function(e,t,r){return f(r).getScale(t).getColor(e)},t.getScale=function(e,t){return f(t).getScale(e)};var o,a=r(1178),i=(o=a)&&o.__esModule?o:{default:o},u=r(89);var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.scales={},this.forcedItems={}}return n(e,[{key:"getScale",value:function(){return function(e){var t=e||(0,u.getDefaultSchemeName)(),r=this.scales[t];if(r)return r;var n=new i.default((0,u.getScheme)(t),this.forcedItems);return this.scales[t]=n,n}}()},{key:"setColor",value:function(){return function(e,t){return this.forcedItems[e]=t,this}}()}]),e}(),s={},c=t.DEFAULT_NAMESPACE="GLOBAL";function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=s[e];if(t)return t;var r=new l(e);return s[e]=r,r}},1178:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.cleanValue=a;var o=r(280);function a(e){return String(e).trim().toLowerCase().split(", ").filter(function(e){return!o.TIME_SHIFT_PATTERN.test(e)}).join(", ")}var i=function(){function e(t,r){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.colors=t,this.parentForcedColors=r,this.forcedColors={},this.seen={},this.fn=function(e){return n.getColor(e)}}return n(e,[{key:"getColor",value:function(){return function(e){var t=a(e),r=this.parentForcedColors&&this.parentForcedColors[t];if(r)return r;var n=this.forcedColors[t];if(n)return n;var o=this.seen[t],i=this.colors.length;if(void 0!==o)return this.colors[o%i];var u=Object.keys(this.seen).length;return this.seen[t]=u,this.colors[u%i]}}()},{key:"setColor",value:function(){return function(e,t){return this.forcedColors[e]=t,this}}()},{key:"toFunction",value:function(){return function(){return this.fn}}()}]),e}();t.default=i},1179:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return n.default.createElement("span",{className:"BootstrapSliderWrapper"},n.default.createElement(o.default,e))};var n=a(r(1)),o=a(r(1182));function a(e){return e&&e.__esModule?e:{default:e}}r(1183),r(1180)},1180:function(e,t,r){},1199:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLayer=s;var n,o=r(2667),a=r(2658),i=r(2666),u=(n=i)&&n.__esModule?n:{default:n},l=r(2671);function s(e,t,r,n){var i=t.data.features,u=e.color_picker,l=e.target_color_picker;return new o.ArcLayer(Object.assign({id:"path-layer-"+e.slice_id,data:i,getSourceColor:function(){return function(e){return e.sourceColor||e.color||[u.r,u.g,u.b,255*u.a]}}(),getTargetColor:function(){return function(e){return e.targetColor||e.color||[l.r,l.g,l.b,255*l.a]}}(),strokeWidth:e.stroke_width?e.stroke_width:3},(0,a.commonLayerProps)(e,r,n)))}t.default=(0,u.default)((0,l.createCategoricalDeckGLComponent)(s,function(e){var t=[];return e.forEach(function(e){t.push(e.sourcePosition),t.push(e.targetPosition)}),t}))},2658:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBounds=l,t.fitViewport=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;try{var n=l(t);return Object.assign({},e,(0,o.fitBounds)({height:e.height,width:e.width,padding:r,bounds:n}))}catch(t){return console.error("Could not auto zoom",t),e}},t.commonLayerProps=function(e,t,r){var o=e,a=void 0,u=void 0;o.js_tooltip?u=(0,i.default)(o.js_tooltip):o.line_column&&"geohash"===o.line_type&&(u=function(){return function(e){return n.default.createElement("div",null,n.default.createElement("div",null,o.line_column,": ",n.default.createElement("strong",null,e.object[o.line_column])),o.metric&&n.default.createElement("div",null,o.metric,": ",n.default.createElement("strong",null,e.object[o.metric])))}}());u&&(a=function(){return function(e){e.picked?r({content:u(e),x:e.x,y:e.y}):r(null)}}());var l=void 0;o.js_onclick_href?l=function(){return function(e){var t=(0,i.default)(o.js_onclick_href)(e);window.open(t)}}():o.table_filter&&"geohash"===o.line_type&&(l=function(){return function(e){return t(o.line_column,[e.object[o.line_column]],!1)}}());return{onClick:l,onHover:a,pickable:Boolean(a)}};var n=u(r(1)),o=r(2670),a=u(r(55)),i=u(r(751));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=a.default.extent(e,function(e){return e[1]}),r=a.default.extent(e,function(e){return e[0]});return[[r[0],t[0]],[r[1],t[1]]]}},2662:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=s(r(1)),i=s(r(0)),u=s(r(2686)),l=s(r(2667));function s(e){return e&&e.__esModule?e:{default:e}}r(2688);var c={viewport:i.default.object.isRequired,layers:i.default.array.isRequired,setControlValue:i.default.func,mapStyle:i.default.string,mapboxApiAccessToken:i.default.string.isRequired,onViewportChange:i.default.func},f={mapStyle:"light",onViewportChange:function(){return function(){}}(),setControlValue:function(){return function(){}}()},p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={viewport:e.viewport},r.tick=r.tick.bind(r),r.onViewportChange=r.onViewportChange.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["default"].Component),o(t,[{key:"componentWillMount",value:function(){return function(){var e=setInterval(this.tick,1e3);this.setState(function(){return{timer:e}})}}()},{key:"componentWillReceiveProps",value:function(){return function(e){var t=this;this.setState(function(){return{viewport:Object.assign({},e.viewport),previousViewport:t.state.viewport}})}}()},{key:"componentWillUnmount",value:function(){return function(){this.clearInterval(this.state.timer)}}()},{key:"onViewportChange",value:function(){return function(e){var t=Object.assign({},e);delete t.width,delete t.height;var r=Object.assign({},this.state.viewport,t);this.setState(function(){return{viewport:r}}),this.props.onViewportChange(r)}}()},{key:"tick",value:function(){return function(){var e=this;if(this.state.previousViewport!==this.state.viewport){var t=this.props.setControlValue,r=this.state.viewport;t&&t("viewport",r),this.setState(function(){return{previousViewport:e.state.viewport}})}}}()},{key:"layers",value:function(){return function(){return this.props.layers.some(function(e){return"function"==typeof e})?this.props.layers.map(function(e){return"function"==typeof e?e():e}):this.props.layers}}()},{key:"render",value:function(){return function(){var e=this.state.viewport;return a.default.createElement(u.default,n({},e,{mapStyle:this.props.mapStyle,onViewportChange:this.onViewportChange,mapboxApiAccessToken:this.props.mapboxApiAccessToken}),a.default.createElement(l.default,n({},e,{layers:this.layers(),initWebGLParameters:!0})))}}()}]),t}();t.default=p,p.propTypes=c,p.defaultProps=f},2666:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;return function(){return function(r,a,i){var l=new u(r,a,i);o.default.render(n.default.createElement(e,t(l)),document.querySelector(r.selector))}}()};var n=a(r(1)),o=a(r(10));function a(e){return e&&e.__esModule?e:{default:e}}var i=function(){return function(e){return e}}(),u=function(){return function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.formData=t.formData,this.payload=r,this.setControlValue=n,this.viewport=Object.assign({},this.formData.viewport,{width:t.width(),height:t.height()}),this.onAddFilter=function(){t.addFilter.apply(t,arguments)},this.setTooltip=function(){t.setTooltip.apply(t,arguments)}}}()},2671:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createDeckGLComponent=function(e,t){function r(r){var o=r.formData,i=r.payload,l=r.setControlValue,s=r.onAddFilter,c=r.setTooltip,f=r.viewport,p=o.autozoom?(0,u.fitViewport)(f,t(i.data.features)):f,d=e(o,i,s,c);return n.default.createElement(a.default,{mapboxApiAccessToken:i.data.mapboxApiKey,viewport:p,layers:[d],mapStyle:o.mapbox_style,setControlValue:l})}return r.propTypes=s,r.defaultProps=c,r},t.createCategoricalDeckGLComponent=function(e,t){function r(r){var o=r.formData,a=r.payload,l=r.setControlValue,s=r.onAddFilter,c=r.setTooltip,f=r.viewport,p=o.autozoom?(0,u.fitViewport)(f,t(a.data.features)):f;return n.default.createElement(i.default,{formData:o,mapboxApiKey:a.data.mapboxApiKey,setControlValue:l,viewport:p,getLayer:e,payload:a,onAddFilter:s,setTooltip:c})}return r.propTypes=s,r.defaultProps=c,r};var n=l(r(1)),o=l(r(0)),a=l(r(2662)),i=l(r(2678)),u=r(2658);function l(e){return e&&e.__esModule?e:{default:e}}var s={formData:o.default.object.isRequired,payload:o.default.object.isRequired,setControlValue:o.default.func.isRequired,viewport:o.default.object.isRequired,onAddFilter:o.default.func,setTooltip:o.default.func},c={onAddFilter:function(){return function(){}}(),setTooltip:function(){return function(){}}()}},2673:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=s(r(1)),i=s(r(0)),u=s(r(2662)),l=s(r(2675));function s(e){return e&&e.__esModule?e:{default:e}}var c={getLayers:i.default.func.isRequired,start:i.default.number.isRequired,end:i.default.number.isRequired,getStep:i.default.func,values:i.default.array.isRequired,aggregation:i.default.bool,disabled:i.default.bool,viewport:i.default.object.isRequired,children:i.default.node},f=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=(e.getLayers,e.start,e.end,e.getStep,e.values),o=(e.disabled,e.viewport),a=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(e,["getLayers","start","end","getStep","values","disabled","viewport"]);return r.state={values:n,viewport:o},r.other=a,r.onChange=r.onChange.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["default"].Component),o(t,[{key:"componentWillReceiveProps",value:function(){return function(e){this.setState({values:e.values,viewport:e.viewport})}}()},{key:"onChange",value:function(){return function(e){this.setState({values:Array.isArray(e)?e:[e,this.props.getStep(e)]})}}()},{key:"render",value:function(){return function(){var e=this,t=this.props,r=t.start,o=t.end,i=t.getStep,s=t.disabled,c=t.aggregation,f=t.children,p=t.getLayers,d=this.state,h=d.values,v=d.viewport,y=p(h);return a.default.createElement("div",null,a.default.createElement(u.default,n({},this.other,{viewport:v,layers:y,onViewportChange:function(t){return e.setState({viewport:t})}})),!s&&a.default.createElement(l.default,{start:r,end:o,step:i(r),values:h,range:!c,onChange:this.onChange}),f)}}()}]),t}();t.default=f,f.propTypes=c,f.defaultProps={aggregation:!1,disabled:!1}},2674:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getPlaySliderParams=void 0,t.truncate=l;var n,o=r(8),a=(n=o)&&n.__esModule?n:{default:n};function i(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var u=[1,0,1,0,0,0,0];function l(e,t){var r=(0,a.default)(e).subtract(t),n=e.toArray(),o=r.toArray(),i=n.map(function(e,t){return o[t]!==e}).indexOf(!0),l=n.map(function(e,t){if(t===i){var r=e-o[t];return e-(e-u[t])%r}return t<i||-1===i?e:u[t]});return(0,a.default)(l)}t.getPlaySliderParams=function(){return function(e,t){var r=(0,a.default)(Math.min.apply(Math,i(e))),n=(0,a.default)(Math.max.apply(Math,i(e))),o=void 0,u=void 0;if(-1!==t.indexOf("/")){var s=t.split("/",2);s[0].endsWith("Z")?(u=(0,a.default)(s[0]),o=a.default.duration(s[1])):(u=(0,a.default)(s[1]),o=a.default.duration(s[0]))}else u=l(r,o=a.default.duration(t));for(var c=(0,a.default)(u);c<r;)c.add(o);for(;c>r;)c.subtract(o);for(var f=(0,a.default)(u);f>n;)f.subtract(o);for(;f<n;)f.add(o);var p=null!=t?[c,(0,a.default)(c).add(o)]:[c,f],d=e.every(function(e){return null===e});return{start:parseInt(c.format("x"),10),end:parseInt(f.format("x"),10),getStep:function(e,t){var r=parseInt((0,a.default)(t).format("x"),10);return parseInt((0,a.default)(t).add(e).format("x"),10)-r}.bind(this,o),values:p.map(function(e){return parseInt(e.format("x"),10)}),disabled:d}}}()},2675:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=c(r(1)),a=c(r(0)),i=r(14),u=c(r(1184)),l=c(r(1179));r(2676);var s=r(12);function c(e){return e&&e.__esModule?e:{default:e}}var f={start:a.default.number.isRequired,step:a.default.number.isRequired,end:a.default.number.isRequired,values:a.default.array.isRequired,onChange:a.default.func,loopDuration:a.default.number,maxFrames:a.default.number,orientation:a.default.oneOf(["horizontal","vertical"]),reversed:a.default.bool,disabled:a.default.bool,range:a.default.bool},p={onChange:function(){return function(){}}(),loopDuration:15e3,maxFrames:100,orientation:"horizontal",reversed:!1,disabled:!1,range:!0},d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));r.state={intervalId:null};var n=e.end-e.start,o=Math.min(e.maxFrames,n/e.step),a=n/o;return r.intervalMilliseconds=e.loopDuration/o,r.increment=a<e.step?e.step:a-a%e.step,r.onChange=r.onChange.bind(r),r.play=r.play.bind(r),r.pause=r.pause.bind(r),r.stepBackward=r.stepBackward.bind(r),r.stepForward=r.stepForward.bind(r),r.getPlayClass=r.getPlayClass.bind(r),r.formatter=r.formatter.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["default"].PureComponent),n(t,[{key:"componentDidMount",value:function(){return function(){u.default.bind(["space"],this.play)}}()},{key:"componentWillUnmount",value:function(){return function(){u.default.unbind(["space"])}}()},{key:"onChange",value:function(){return function(e){this.props.onChange(e.target.value),null!=this.state.intervalId&&this.pause()}}()},{key:"getPlayClass",value:function(){return function(){return null==this.state.intervalId?"fa fa-play fa-lg slider-button":"fa fa-pause fa-lg slider-button"}}()},{key:"play",value:function(){return function(){if(!this.props.disabled)if(null!=this.state.intervalId)this.pause();else{var e=setInterval(this.stepForward,this.intervalMilliseconds);this.setState({intervalId:e})}}}()},{key:"pause",value:function(){return function(){clearInterval(this.state.intervalId),this.setState({intervalId:null})}}()},{key:"stepForward",value:function(){return function(){var e=this,t=this.props,r=t.start,n=t.end,o=t.step,a=t.values;if(!t.disabled){var i=(Array.isArray(a)?a:[a,a+o]).map(function(t){return t+e.increment}),u=i[1]>n?i[0]-r:0;this.props.onChange(i.map(function(e){return e-u}))}}}()},{key:"stepBackward",value:function(){return function(){var e=this,t=this.props,r=t.start,n=t.end,o=t.step,a=t.values;if(!t.disabled){var i=(Array.isArray(a)?a:[a,a+o]).map(function(t){return t-e.increment}),u=i[0]<r?n-i[1]:0;this.props.onChange(i.map(function(e){return e+u}))}}}()},{key:"formatter",value:function(){return function(e){if(this.props.disabled)return(0,s.t)("Data has no time steps");var t=e;return Array.isArray(e)?e[0]===e[1]&&(t=[e[0]]):t=[e],t.map(function(e){return new Date(e).toUTCString()}).join(" : ")}}()},{key:"render",value:function(){return function(){var e=this.props,t=e.start,r=e.end,n=e.step,a=e.orientation,u=e.reversed,s=e.disabled,c=e.range,f=e.values;return o.default.createElement(i.Row,{className:"play-slider"},o.default.createElement(i.Col,{md:1,className:"padded"},o.default.createElement("i",{className:"fa fa-step-backward fa-lg slider-button ",onClick:this.stepBackward}),o.default.createElement("i",{className:this.getPlayClass(),onClick:this.play}),o.default.createElement("i",{className:"fa fa-step-forward fa-lg slider-button ",onClick:this.stepForward})),o.default.createElement(i.Col,{md:11,className:"padded"},o.default.createElement(l.default,{value:c?f:f[0],range:c,formatter:this.formatter,change:this.onChange,min:t,max:r,step:n,orientation:a,reversed:u,disabled:s?"disabled":"enabled"})))}}()}]),t}();t.default=d,d.propTypes=f,d.defaultProps=p},2676:function(e,t,r){},2678:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=p(r(1)),a=p(r(0)),i=p(r(2673)),u=p(r(2679)),l=r(1177),s=r(388),c=r(2674),f=p(r(751));function p(e){return e&&e.__esModule?e:{default:e}}var d={formData:a.default.object.isRequired,mapboxApiKey:a.default.string.isRequired,setControlValue:a.default.func.isRequired,viewport:a.default.object.isRequired,getLayer:a.default.func.isRequired,payload:a.default.object.isRequired,onAddFilter:a.default.func,setTooltip:a.default.func},h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state=t.getDerivedStateFromProps(e),r.getLayers=r.getLayers.bind(r),r.toggleCategory=r.toggleCategory.bind(r),r.showSingleCategory=r.showSingleCategory.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o["default"].PureComponent),n(t,null,[{key:"getDerivedStateFromProps",value:function(){return function(e){var t=e.formData,r=t.time_grain_sqla||t.granularity||"PT1M",n=e.payload.data.features.map(function(e){return e.__timestamp}),o=(0,c.getPlaySliderParams)(n,r);return{start:o.start,end:o.end,getStep:o.getStep,values:o.values,disabled:o.disabled,categories:function(e,t){var r=e.color_picker||{r:0,g:0,b:0,a:1},n=[r.r,r.g,r.b,255*r.a],o=(0,l.getScale)(e.color_scheme).toFunction(),a={};return t.forEach(function(t){if(null!=t.cat_color&&!a.hasOwnProperty(t.cat_color)){var i=void 0;i=e.dimension?(0,s.hexToRGB)(o(t.cat_color),255*r.a):n,a[t.cat_color]={color:i,enabled:!0}}}),a}(t,e.payload.data.features)}}}()}]),n(t,[{key:"componentWillReceiveProps",value:function(){return function(e){this.setState(t.getDerivedStateFromProps(e,this.state))}}()},{key:"getLayers",value:function(){return function(e){var t=this,r=this.props,n=r.getLayer,o=r.payload,a=r.formData,i=r.onAddFilter,u=r.setTooltip,l=[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(o.data.features));return l=this.addColor(l,a),a.js_data_mutator&&(l=(0,f.default)(a.js_data_mutator)(l)),l=e[0]===e[1]||e[1]===this.end?l.filter(function(t){return t.__timestamp>=e[0]&&t.__timestamp<=e[1]}):l.filter(function(t){return t.__timestamp>=e[0]&&t.__timestamp<e[1]}),a.dimension&&(l=l.filter(function(e){return t.state.categories[e.cat_color].enabled})),o.data.features=l,[n(a,o,i,u)]}}()},{key:"addColor",value:function(){return function(e,t){var r=t.color_picker||{r:0,g:0,b:0,a:1},n=(0,l.getScale)(t.color_scheme).toFunction();return e.map(function(e){var o=void 0;return t.dimension?(o=(0,s.hexToRGB)(n(e.cat_color),255*r.a),Object.assign({},e,{color:o})):e})}}()},{key:"toggleCategory",value:function(){return function(e){var t=this.state.categories[e];t.enabled=!t.enabled;var r,n,o,a=Object.assign({},this.state.categories,(o=t,(n=e)in(r={})?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,r));Object.values(a).every(function(e){return!e.enabled})&&Object.values(a).forEach(function(e){e.enabled=!0}),this.setState({categories:a})}}()},{key:"showSingleCategory",value:function(){return function(e){var t=Object.assign({},this.state.categories);Object.values(t).forEach(function(e){e.enabled=!1}),t[e].enabled=!0,this.setState({categories:t})}}()},{key:"render",value:function(){return function(){return o.default.createElement("div",{style:{position:"relative"}},o.default.createElement(i.default,{getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,disabled:this.state.disabled,viewport:this.props.viewport,mapboxApiAccessToken:this.props.mapboxApiKey,mapStyle:this.props.formData.mapbox_style,setControlValue:this.props.setControlValue},o.default.createElement(u.default,{categories:this.state.categories,toggleCategory:this.toggleCategory,showSingleCategory:this.showSingleCategory,position:this.props.formData.legend_position})))}}()}]),t}();t.default=h,h.propTypes=d},2679:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(o)throw a}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=u(r(1)),i=u(r(0));function u(e){return e&&e.__esModule?e:{default:e}}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r(2680);var s={categories:i.default.object,toggleCategory:i.default.func,showSingleCategory:i.default.func,position:i.default.oneOf([null,"tl","tr","bl","br"])},c={categories:{},toggleCategory:function(){return function(){}}(),showSingleCategory:function(){return function(){}}(),position:"tr"},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a["default"].PureComponent),o(t,[{key:"render",value:function(){return function(){var e,t=this;if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;var r=Object.entries(this.props.categories).map(function(e){var r=n(e,2),o=r[0],i=r[1],u={color:"rgba("+i.color.join(", ")+")"},l=i.enabled?"●":"○";return a.default.createElement("li",{key:o},a.default.createElement("a",{href:"#",onClick:function(){return t.props.toggleCategory(o)},onDoubleClick:function(){return t.props.showSingleCategory(o)}},a.default.createElement("span",{style:u},l)," ",o))}),o="t"===this.props.position.charAt(0)?"top":"bottom",i="r"===this.props.position.charAt(1)?"right":"left",u=(l(e={position:"absolute"},o,"0px"),l(e,i,"10px"),e);return a.default.createElement("div",{className:"legend",style:u},a.default.createElement("ul",{className:"categories"},r))}}()}]),t}();t.default=f,f.propTypes=s,f.defaultProps=c},2680:function(e,t,r){},2685:function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=2685},2687:function(e,t){}}]);
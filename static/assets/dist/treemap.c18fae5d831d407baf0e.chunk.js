(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1177:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.DEFAULT_NAMESPACE=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.getNamespace=s,e.getColor=function(t,e,n){return s(n).getScale(e).getColor(t)},e.getScale=function(t,e){return s(e).getScale(t)};var a,o=n(1178),u=(a=o)&&a.__esModule?a:{default:a},i=n(89);var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.name=e,this.scales={},this.forcedItems={}}return r(t,[{key:"getScale",value:function(){return function(t){var e=t||(0,i.getDefaultSchemeName)(),n=this.scales[e];if(n)return n;var r=new u.default((0,i.getScheme)(e),this.forcedItems);return this.scales[e]=r,r}}()},{key:"setColor",value:function(){return function(t,e){return this.forcedItems[t]=e,this}}()}]),t}(),c={},f=e.DEFAULT_NAMESPACE="GLOBAL";function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=c[t];if(e)return e;var n=new l(t);return c[t]=n,n}},1178:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.cleanValue=o;var a=n(280);function o(t){return String(t).trim().toLowerCase().split(", ").filter(function(t){return!a.TIME_SHIFT_PATTERN.test(t)}).join(", ")}var u=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.colors=e,this.parentForcedColors=n,this.forcedColors={},this.seen={},this.fn=function(t){return r.getColor(t)}}return r(t,[{key:"getColor",value:function(){return function(t){var e=o(t),n=this.parentForcedColors&&this.parentForcedColors[e];if(n)return n;var r=this.forcedColors[e];if(r)return r;var a=this.seen[e],u=this.colors.length;if(void 0!==a)return this.colors[a%u];var i=Object.keys(this.seen).length;return this.seen[e]=i,this.colors[i%u]}}()},{key:"setColor",value:function(){return function(t,e){return this.forcedColors[t]=e,this}}()},{key:"toFunction",value:function(){return function(){return this.fn}}()}]),t}();e.default=u},1916:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(2652)),a=u(n(3222)),o=u(n(3226));function u(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)(a.default,o.default)},2652:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return function(){return function(n,i,l){var c=new u.default(n,i,l);o.default.render(a.default.createElement(t,r({width:n.width(),height:n.height()},e(c))),document.querySelector(n.selector))}}()};var a=i(n(1)),o=i(n(10)),u=i(n(2653));function i(t){return t&&t.__esModule?t:{default:t}}var l=function(){return function(t){return t}}()},2653:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=n(2654),o=(r=a)&&r.__esModule?r:{default:r};var u=function(){return function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.annotationData=e.annotationData,this.datasource=(0,o.default)(e.datasource),this.rawDatasource=e.datasource,this.filters=e.getFilters(),this.formData=(0,o.default)(e.formData),this.onAddFilter=function(){e.addFilter.apply(e,arguments)},this.onError=function(){e.error.apply(e,arguments)},this.payload=n,this.setControlValue=r}}();e.default=u},2654:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(2663)),a=u(n(2664)),o=u(n(2665));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){if(null==t)return t;if((0,r.default)(t))return(0,o.default)(function(t){return(0,a.default)(t)},t);throw new Error("Cannot convert input that is not a plain object: "+t)}},2657:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.default=function(t){var e=function(e){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.setContainerRef=e.setContainerRef.bind(e),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),r(n,[{key:"componentDidMount",value:function(){return function(){this.execute()}}()},{key:"componentDidUpdate",value:function(){return function(){this.execute()}}()},{key:"componentWillUnmount",value:function(){return function(){this.container=null}}()},{key:"setContainerRef",value:function(){return function(t){this.container=t}}()},{key:"execute",value:function(){return function(){this.container&&t(this.container,this.props)}}()},{key:"render",value:function(){return function(){var t=this.props,e=t.id,n=t.className;return u.default.createElement("div",{id:e,className:n,ref:this.setContainerRef})}}()}]),n}(u.default.Component);t.displayName&&(e.displayName=t.displayName);t.propTypes&&(e.propTypes=t.propTypes);t.defaultProps&&(e.defaultProps=t.defaultProps);return e};var a,o=n(1),u=(a=o)&&a.__esModule?a:{default:a}},3222:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(2657)),a=o(n(3223));function o(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)(a.default)},3223:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=arguments,a=i(n(55)),o=i(n(0)),u=n(1177);function i(t){return t&&t.__esModule?t:{default:t}}n(3224);var l=function(){return function(t){return function(){return t().apply(void 0,r)}}}(),c=o.default.shape({name:o.default.string,value:o.default.number.isRequired}),f={name:o.default.string,children:o.default.arrayOf(o.default.oneOfType([o.default.shape(l(function(){return f})),c]))},s=o.default.oneOfType([o.default.shape(f),c]),d={data:o.default.arrayOf(s),width:o.default.number,height:o.default.number,colorScheme:o.default.string,margin:o.default.shape({top:o.default.number,right:o.default.number,bottom:o.default.number,left:o.default.number}),numberFormat:o.default.string,treemapRatio:o.default.number},p={top:0,right:0,bottom:0,left:0};function h(t,e){var n=e.data,r=e.width,o=e.height,i=e.margin,l=void 0===i?p:i,c=e.numberFormat,f=e.colorScheme,s=e.treemapRatio,d=a.default.select(t),h=a.default.format(c),y=(0,u.getScale)(f).toFunction();d.selectAll("*").remove();var v=o/n.length;n.forEach(function(t){return function(t,e,n){var r=e-l.left-l.right,o=n-36-10-l.top-l.bottom,u=void 0,i=a.default.scale.linear().domain([0,r]).range([0,r]),c=a.default.scale.linear().domain([0,o]).range([0,o]),f=a.default.layout.treemap().children(function(t,e){return e?null:t.originalChildren}).sort(function(t,e){return t.value-e.value}).ratio(s).mode("squarify").round(!1),p=d.append("svg").attr("class","treemap").attr("width",e).attr("height",n),v=p.append("g").attr("transform","translate("+l.left+","+(l.top+36+10)+")").style("shape-rendering","crispEdges"),m=p.append("g").attr("class","grandparent").attr("transform","translate(0,"+(l.top+5)+")");m.append("rect").attr("width",r).attr("height",36),m.append("text").attr("x",r/2).attr("y",24).style("font-size","12px").style("text-anchor","middle");var g=function(t){t.x=0,t.y=0,t.dx=r,t.dy=o,t.depth=0},b=function(t){t.selectAll("tspan").attr("x",function(t){return i(t.x)+6}),t.attr("x",function(t){return i(t.x)+6}).attr("y",function(t){return c(t.y)+6}).style("opacity",function(t){return this.getComputedTextLength()<i(t.x+t.dx)-i(t.x)?1:0})},x=function(t){t.attr("x",function(t){return i(t.x+t.dx)-this.getComputedTextLength()-6}).attr("y",function(t){return c(t.y+t.dy)-6}).style("opacity",function(t){return this.getComputedTextLength()<i(t.x+t.dx)-i(t.x)?1:0})},_=function(t){t.attr("x",function(t){return i(t.x)}).attr("y",function(t){return c(t.y)}).attr("width",function(t){return i(t.x+t.dx)-i(t.x)}).attr("height",function(t){return c(t.y+t.dy)-c(t.y)})},C=function t(e){var n=h(e.value);return e.parent?t(e.parent)+" / "+e.name+" ("+n+")":e.name+" ("+n+")"},w=function t(e){return e.originalChildren=e.children,e.originalChildren&&(e.value=e.children.reduce(function(e,n){return e+t(n)},0)),e.value},O=function t(e){e.originalChildren&&(f.nodes({originalChildren:e.originalChildren}),e.originalChildren.forEach(function(n){n.x=e.x+n.x*e.dx,n.y=e.y+n.y*e.dy,n.dx*=e.dx,n.dy*=e.dy,n.parent=e,t(n)}))},j=function t(e){var n=v.append("g").datum(e).attr("class","depth"),r=function(e){if(!u&&e){u=!0;var r=t(e),a=n.transition().duration(750),o=r.transition().duration(750);i.domain([e.x,e.x+e.dx]),c.domain([e.y,e.y+e.dy]),v.style("shape-rendering",null),v.selectAll(".depth").sort(function(t,e){return t.depth-e.depth}),r.selectAll("text").style("fill-opacity",0),a.selectAll(".ptext").call(b).style("fill-opacity",0),a.selectAll(".ctext").call(x).style("fill-opacity",0),o.selectAll(".ptext").call(b).style("fill-opacity",1),o.selectAll(".ctext").call(x).style("fill-opacity",1),a.selectAll("rect").call(_),o.selectAll("rect").call(_),a.remove().each("end",function(){v.style("shape-rendering","crispEdges"),u=!1})}};m.datum(e.parent).on("click",r).select("text").text(C(e));var a=n.selectAll("g").data(e.originalChildren).enter().append("g");a.filter(function(t){return t.originalChildren}).classed("children",!0).on("click",r);var o=a.selectAll(".child").data(function(t){return t.originalChildren||[t]}).enter().append("g");o.append("rect").attr("class","child").call(_).append("title").text(function(t){return t.name+" ("+h(t.value)+")"}),o.append("text").attr("class","ctext").text(function(t){return t.name}).call(x),a.append("rect").attr("class","parent").call(_);var l=a.append("text").attr("class","ptext").attr("dy",".75em");return l.append("tspan").text(function(t){return t.name}),l.append("tspan").attr("dy","1.0em").text(function(t){return h(t.value)}),l.call(b),a.selectAll("rect").style("fill",function(t){return y(t.name)}),a};g(t),w(t),O(t),j(t)}(t,r,v)})}h.displayName="Treemap",h.propTypes=d,e.default=h},3224:function(t,e,n){},3226:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.formData,n=t.payload,r=e.colorScheme,a=e.numberFormat,o=e.treemapRatio;return{data:n.data,colorScheme:r,numberFormat:a,treemapRatio:o}}}}]);
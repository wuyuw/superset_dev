(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1917:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(2652)),a=u(n(3227)),o=u(n(3231));function u(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)(a.default,o.default)},2652:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l;return function(){return function(n,i,l){var s=new u.default(n,i,l);o.default.render(a.default.createElement(t,r({width:n.width(),height:n.height()},e(s))),document.querySelector(n.selector))}}()};var a=i(n(1)),o=i(n(10)),u=i(n(2653));function i(t){return t&&t.__esModule?t:{default:t}}var l=function(){return function(t){return t}}()},2653:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=n(2654),o=(r=a)&&r.__esModule?r:{default:r};var u=function(){return function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.annotationData=e.annotationData,this.datasource=(0,o.default)(e.datasource),this.rawDatasource=e.datasource,this.filters=e.getFilters(),this.formData=(0,o.default)(e.formData),this.onAddFilter=function(){e.addFilter.apply(e,arguments)},this.onError=function(){e.error.apply(e,arguments)},this.payload=n,this.setControlValue=r}}();e.default=u},2654:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(2663)),a=u(n(2664)),o=u(n(2665));function u(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){if(null==t)return t;if((0,r.default)(t))return(0,o.default)(function(t){return(0,a.default)(t)},t);throw new Error("Cannot convert input that is not a plain object: "+t)}},2657:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.default=function(t){var e=function(e){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.setContainerRef=e.setContainerRef.bind(e),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),r(n,[{key:"componentDidMount",value:function(){return function(){this.execute()}}()},{key:"componentDidUpdate",value:function(){return function(){this.execute()}}()},{key:"componentWillUnmount",value:function(){return function(){this.container=null}}()},{key:"setContainerRef",value:function(){return function(t){this.container=t}}()},{key:"execute",value:function(){return function(){this.container&&t(this.container,this.props)}}()},{key:"render",value:function(){return function(){var t=this.props,e=t.id,n=t.className;return u.default.createElement("div",{id:e,className:n,ref:this.setContainerRef})}}()}]),n}(u.default.Component);t.displayName&&(e.displayName=t.displayName);t.propTypes&&(e.propTypes=t.propTypes);t.defaultProps&&(e.defaultProps=t.defaultProps);return e};var a,o=n(1),u=(a=o)&&a.__esModule?a:{default:a}},3227:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(2657)),a=o(n(3228));function o(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)(a.default)},3228:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=u(n(55)),a=u(n(0)),o=n(388);function u(t){return t&&t.__esModule?t:{default:t}}n(3229);var i={data:a.default.arrayOf(a.default.shape({country_id:a.default.string,metric:a.default.number})),width:a.default.number,height:a.default.number,country:a.default.string,linearColorScheme:a.default.string,mapBaseUrl:a.default.string,numberFormat:a.default.string},l={};function s(t,e){var n=e.data,a=e.width,u=e.height,i=e.country,s=e.linearColorScheme,c=e.mapBaseUrl,f=void 0===c?"/static/assets/src/visualizations/CountryMap/countries":c,d=e.numberFormat,p=t,h=r.default.format(d),y=(0,o.colorScalerFactory)(s,n,function(t){return t.metric}),v={};n.forEach(function(t){v[t.country_id]=y(t.metric)});var m=function(){return function(t){return v[t.properties.ISO]||"none"}}(),_=r.default.geo.path(),b=r.default.select(p);b.selectAll("*").remove(),p.style.height=u+"px",p.style.width=a+"px";var g=b.append("svg:svg").attr("width",a).attr("height",u).attr("preserveAspectRatio","xMidYMid meet"),w=g.append("rect").attr("class","background").attr("width",a).attr("height",u),M=g.append("g"),O=M.append("g").classed("map-layer",!0),j=M.append("g").classed("text-layer",!0).attr("transform","translate("+a/2+", 45)"),C=j.append("text").classed("big-text",!0),x=j.append("text").classed("result-text",!0).attr("dy","1em"),P=void 0,k=function(){return function(t){var e=t&&P!==t,n=void 0,r=void 0,o=void 0,i=a/2,l=u/2;if(e){var s=_.centroid(t);n=s[0],r=s[1],o=4,P=t}else n=i,r=l,o=1,P=null;M.transition().duration(750).attr("transform","translate("+i+","+l+")scale("+o+")translate("+-n+","+-r+")"),j.style("opacity",0).attr("transform","translate(0,0)translate("+n+","+(e?r-5:45)+")").transition().duration(750).style("opacity",1),C.transition().duration(750).style("font-size",e?6:16),x.transition().duration(750).style("font-size",e?16:24)}}();w.on("click",k);var E=function(){return function(t){var e="";t&&t.properties&&(e=t.properties.ID_2?t.properties.NAME_2:t.properties.NAME_1),C.text(e)}}(),S=function(){return function(t){t.length>0&&x.text(h(t[0].metric))}}(),D=function(){return function(t){var e=m(t);"none"!==e&&(e=r.default.rgb(e).darker().toString()),r.default.select(this).style("fill",e),E(t);var a=n.filter(function(e){return e.country_id===t.properties.ISO});S(a)}}(),F=function(){return function(){r.default.select(this).style("fill",m),C.text(""),x.text("")}}();function N(t){var e=t.features,n=r.default.geo.centroid(t),o=r.default.geo.mercator().scale(100).center(n).translate([a/2,u/2]);_.projection(o);var i=_.bounds(t),l=100*a/(i[1][0]-i[0][0]),s=100*u/(i[1][1]-i[0][1]),c=l<s?l:s;o.scale(c);var f=_.bounds(t);o.translate([a-(f[0][0]+f[1][0])/2,u-(f[0][1]+f[1][1])/2]),O.selectAll("path").data(e).enter().append("path").attr("d",_).attr("class","region").attr("vector-effect","non-scaling-stroke").style("fill",m).on("mouseenter",D).on("mouseout",F).on("click",k)}var T=i.toLowerCase(),A=l[T];if(A)N(A);else{var R=f+"/"+T+".geojson";r.default.json(R,function(t,e){t||(l[T]=e,N(e))})}}s.displayName="CountryMap",s.propTypes=i,e.default=s},3229:function(t,e,n){},3231:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.formData,n=t.payload,r=e.linearColorScheme,a=e.numberFormat,o=e.selectCountry;return{data:n.data,country:o,linearColorScheme:r,numberFormat:a}}}}]);
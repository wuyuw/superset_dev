(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1904:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(2652)),a=o(n(3020)),l=o(n(3029));function o(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)(a.default,l.default)},2652:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u;return function(){return function(n,i,u){var c=new o.default(n,i,u);l.default.render(a.default.createElement(t,r({width:n.width(),height:n.height()},e(c))),document.querySelector(n.selector))}}()};var a=i(n(1)),l=i(n(10)),o=i(n(2653));function i(t){return t&&t.__esModule?t:{default:t}}var u=function(){return function(t){return t}}()},2653:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,a=n(2654),l=(r=a)&&r.__esModule?r:{default:r};var o=function(){return function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.annotationData=e.annotationData,this.datasource=(0,l.default)(e.datasource),this.rawDatasource=e.datasource,this.filters=e.getFilters(),this.formData=(0,l.default)(e.formData),this.onAddFilter=function(){e.addFilter.apply(e,arguments)},this.onError=function(){e.error.apply(e,arguments)},this.payload=n,this.setControlValue=r}}();e.default=o},2654:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o(n(2663)),a=o(n(2664)),l=o(n(2665));function o(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){if(null==t)return t;if((0,r.default)(t))return(0,l.default)(function(t){return(0,a.default)(t)},t);throw new Error("Cannot convert input that is not a plain object: "+t)}},2657:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();e.default=function(t){var e=function(e){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.setContainerRef=e.setContainerRef.bind(e),e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),r(n,[{key:"componentDidMount",value:function(){return function(){this.execute()}}()},{key:"componentDidUpdate",value:function(){return function(){this.execute()}}()},{key:"componentWillUnmount",value:function(){return function(){this.container=null}}()},{key:"setContainerRef",value:function(){return function(t){this.container=t}}()},{key:"execute",value:function(){return function(){this.container&&t(this.container,this.props)}}()},{key:"render",value:function(){return function(){var t=this.props,e=t.id,n=t.className;return o.default.createElement("div",{id:e,className:n,ref:this.setContainerRef})}}()}]),n}(o.default.Component);t.displayName&&(e.displayName=t.displayName);t.propTypes&&(e.propTypes=t.propTypes);t.defaultProps&&(e.defaultProps=t.defaultProps);return e};var a,l=n(1),o=(a=l)&&a.__esModule?a:{default:a}},2776:function(t,e,n){},2778:function(t,e){t.exports={d3_identity:function(t){return t},d3_mergeLabels:function(t,e){if(0===e.length)return t;t=t||[];for(var n=e.length;n<t.length;n++)e.push(t[n]);return e},d3_linearLegend:function(t,e,n){var r=[];if(e.length>1)r=e;else for(var a=t.domain(),l=(a[a.length-1]-a[0])/(e-1),o=0;o<e;o++)r.push(a[0]+o*l);var i=r.map(n);return{data:r,labels:i,feature:function(e){return t(e)}}},d3_quantLegend:function(t,e,n){var r=t.range().map(function(r){var a=t.invertExtent(r);e(a[0]),e(a[1]);return e(a[0])+" "+n+" "+e(a[1])});return{data:t.range(),labels:r,feature:this.d3_identity}},d3_ordinalLegend:function(t){return{data:t.domain(),labels:t.domain(),feature:function(e){return t(e)}}},d3_drawShapes:function(t,e,n,r,a,l){"rect"===t?e.attr("height",n).attr("width",r):"circle"===t?e.attr("r",a):"line"===t?e.attr("x1",0).attr("x2",r).attr("y1",0).attr("y2",0):"path"===t&&e.attr("d",l)},d3_addText:function(t,e,n,r){e.append("text").attr("class",r+"label"),t.selectAll("g."+r+"cell text."+r+"label").data(n).text(this.d3_identity)},d3_calcType:function(t,e,n,r,a,l){var o=t.ticks?this.d3_linearLegend(t,n,a):t.invertExtent?this.d3_quantLegend(t,a,l):this.d3_ordinalLegend(t);return o.labels=this.d3_mergeLabels(o.labels,r),e&&(o.labels=this.d3_reverse(o.labels),o.data=this.d3_reverse(o.data)),o},d3_reverse:function(t){for(var e=[],n=0,r=t.length;n<r;n++)e[n]=t[r-n-1];return e},d3_placement:function(t,e,n,r,a,l){e.attr("transform",n),r.attr("transform",a),"horizontal"===t&&r.style("text-anchor",l)},d3_addEvents:function(t,e){var n=this;t.on("mouseover.legend",function(t){n.d3_cellOver(e,t,this)}).on("mouseout.legend",function(t){n.d3_cellOut(e,t,this)}).on("click.legend",function(t){n.d3_cellClick(e,t,this)})},d3_cellOver:function(t,e,n){t.cellover.call(n,e)},d3_cellOut:function(t,e,n){t.cellout.call(n,e)},d3_cellClick:function(t,e,n){t.cellclick.call(n,e)},d3_title:function(t,e,n,r){if(""!==n){t.selectAll("text."+r+"legendTitle").data([n]).enter().append("text").attr("class",r+"legendTitle"),t.selectAll("text."+r+"legendTitle").text(n);var a=t.select("."+r+"legendTitle").map(function(t){return t[0].getBBox().height})[0],l=-e.map(function(t){return t[0].getBBox().x})[0];e.attr("transform","translate("+l+","+(a+10)+")")}}}},3020:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=l(n(2657)),a=l(n(3021));function l(t){return t&&t.__esModule?t:{default:t}}e.default=(0,r.default)(a.default)},3021:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=u(n(55)),l=u(n(0));n(3022);var o=u(n(2749)),i=n(388);function u(t){return t&&t.__esModule?t:{default:t}}n(2776),n(3027);var c={data:l.default.shape({records:l.default.arrayOf(l.default.shape({x:l.default.string,y:l.default.string,v:l.default.number,perc:l.default.number,rank:l.default.number})),extents:l.default.arrayOf(l.default.number)}),width:l.default.number,height:l.default.number,bottomMargin:l.default.oneOfType([l.default.string,l.default.number]),colorScheme:l.default.string,columnX:l.default.string,columnY:l.default.string,leftMargin:l.default.oneOfType([l.default.string,l.default.number]),metric:l.default.oneOfType([l.default.string,l.default.object]),normalized:l.default.bool,numberFormat:l.default.string,showLegend:l.default.bool,showPercentage:l.default.bool,showValues:l.default.bool,sortXAxis:l.default.string,sortYAxis:l.default.string,xScaleInterval:l.default.number,yScaleInterval:l.default.number,yAxisBounds:l.default.arrayOf(l.default.number)};function s(t,e){return t>e?1:-1}function d(t,e){var n=e.data,l=e.width,u=e.height,c=e.bottomMargin,d=e.canvasImageRendering,f=e.colorScheme,h=e.columnX,p=e.columnY,g=e.leftMargin,m=e.metric,v=e.normalized,y=e.numberFormat,b=e.showLegend,x=e.showPercentage,_=e.showValues,w=e.sortXAxis,O=e.sortYAxis,M=e.xScaleInterval,k=e.yScaleInterval,A=e.yAxisBounds,S=n.records,P=n.extents,T={top:10,right:10,bottom:35,left:35},j=a.default.format(y);function C(t,e,n){var r={},l={};S.forEach(function(e){r[e[t]]=(r[e[t]]||0)+e.v,l[e[t]]=e[t]});var o=Object.keys(l).map(function(t){return l[t]});return"alpha_asc"===n?r=o.sort(s):"alpha_desc"===n?r=o.sort(s).reverse():"value_desc"===n?r=Object.keys(r).sort(function(t,e){return r[t]>r[e]?-1:1}):"value_asc"===n&&(r=Object.keys(r).sort(function(t,e){return r[e]>r[t]?-1:1})),"y"===t&&e&&r.reverse(),e?a.default.scale.ordinal().domain(r).rangeBands(e):a.default.scale.ordinal().domain(r).range(a.default.range(r.length))}t.innerHTML="";var B={};!function(){for(var t=1,e=1,n=0;n<S.length;n++){var r=S[n];t=Math.max(t,r.x.toString().length||1),e=Math.max(e,r.y.toString().length||1)}T.left="auto"===g?Math.ceil(Math.max(T.left,6*e)):g,b&&(T.right+=40),T.bottom="auto"===c?Math.ceil(Math.max(T.bottom,4.5*t)):c}();var E=l-(T.left+T.right),L=u-(T.bottom+T.top),z=a.default.format(".2%"),I=C("x",null,w),D=C("y",null,O),F=C("x",[0,E],w),R=C("y",[L,0],O),X=[F.domain().length,R.domain().length],Y=A[0]||0,V=A[1]||1,N=(0,i.colorScalerFactory)(f,null,null,[Y,V]),H=[a.default.scale.linear().domain([0,X[0]]).range([0,E]),a.default.scale.linear().domain([0,X[1]]).range([0,L])],W=a.default.select(t),q=W.append("canvas").attr("width",X[0]).attr("height",X[1]).style("width",E+"px").style("height",L+"px").style("image-rendering",d).style("left",T.left+"px").style("top",T.top+"px").style("position","absolute"),U=W.append("svg").attr("width",l).attr("height",u).style("position","relative");_&&U.selectAll("rect").data(S).enter().append("g").attr("transform","translate("+T.left+", "+T.top+")").append("text").attr("transform",function(t){return"translate("+F(t.x)+", "+R(t.y)+")"}).attr("y",R.rangeBand()/2).attr("x",F.rangeBand()/2).attr("text-anchor","middle").attr("dy",".35em").text(function(t){return j(t.v)}).attr("font-size",Math.min(R.rangeBand(),F.rangeBand())/3+"px").attr("fill",function(t){return t.v>=P[1]/2?"white":"black"});if(b){var J=a.default.legend.color().labelFormat(j).scale(N).shapePadding(0).cells(10).shapeWidth(10).shapeHeight(10).labelOffset(3);U.append("g").attr("transform","translate("+(l-40)+", "+T.top+")").call(J)}var G=(0,o.default)().attr("class","d3-tip").offset(function(){var t=a.default.mouse(this),e=t[0]-E/2;return[t[1]-20,e]}).html(function(){var t="",e=a.default.mouse(this),n=Math.floor(H[0].invert(e[0])),l=Math.floor(H[1].invert(e[1])),o="object"===(void 0===m?"undefined":r(m))?m.label:m;if(n in B&&l in B[n]){var i=B[n][l];t+="<div><b>"+h+": </b>"+i.x+"<div>",t+="<div><b>"+p+": </b>"+i.y+"<div>",t+="<div><b>"+o+": </b>"+j(i.v)+"<div>",x&&(t+="<div><b>%: </b>"+z(v?i.rank:i.perc)+"<div>"),G.style("display",null)}else G.style("display","none");return t});U.append("g").attr("transform","translate("+T.left+", "+T.top+")").append("rect").classed("background-rect",!0).on("mousemove",G.show).on("mouseout",G.hide).attr("width",E).attr("height",L).call(G);var K=a.default.svg.axis().scale(F).outerTickSize(0).tickValues(F.domain().filter(function(t,e){return!(e%M)})).orient("bottom"),Q=a.default.svg.axis().scale(R).outerTickSize(0).tickValues(R.domain().filter(function(t,e){return!(e%k)})).orient("left");U.append("g").attr("class","x axis").attr("transform","translate("+T.left+","+(T.top+L)+")").call(K).selectAll("text").attr("x",-4).attr("y",10).attr("dy","0.3em").style("text-anchor","end").attr("transform","rotate(-45)"),U.append("g").attr("class","y axis").attr("transform","translate("+T.left+","+T.top+")").call(Q);var Z=q.node().getContext("2d");Z.imageSmoothingEnabled=!1,function(){var t=new Image,e=Z.createImageData(X[0],X[1]),n={};S.forEach(function(t){var e=a.default.rgb(N(v?t.rank:t.perc)),r=I(t.x),l=D(t.y);n[r+l*I.domain().length]=e,void 0===B[r]&&(B[r]={}),void 0===B[r][l]&&(B[r][l]=t)});for(var r=-1,l=0;l<X[0]*X[1];l++){var o=n[l],i=255;void 0===o&&(o=a.default.rgb("#F00"),i=0),e.data[++r]=o.r,e.data[++r]=o.g,e.data[++r]=o.b,e.data[++r]=i}Z.putImageData(e,0,0),t.src=q.node().toDataURL()}()}d.displayName="Heatmap",d.propTypes=c,e.default=d},3022:function(t,e,n){var r=n(55);r.legend=n(3023),t.exports=r},3023:function(t,e,n){t.exports={color:n(3024),size:n(3025),symbol:n(3026)}},3024:function(t,e,n){var r=n(2778);t.exports=function(){var t,e=d3.scale.linear(),n="rect",a=15,l=15,o=10,i=2,u=[5],c=[],s="",d=!1,f="",h=d3.format(".01f"),p=10,g="middle",m="to",v="vertical",y=!1,b=d3.dispatch("cellover","cellout","cellclick");function x(x){var _=r.d3_calcType(e,y,u,c,h,m),w=x.selectAll("g").data([e]);w.enter().append("g").attr("class",s+"legendCells");var O=w.selectAll("."+s+"cell").data(_.data),M=O.enter().append("g",".cell").attr("class",s+"cell").style("opacity",1e-6),k=(M.append(n).attr("class",s+"swatch"),O.select("g."+s+"cell "+n));r.d3_addEvents(M,b),O.exit().transition().style("opacity",0).remove(),r.d3_drawShapes(n,k,l,a,o,t),r.d3_addText(w,M,_.labels,s);var A=O.select("text"),S=k[0].map(function(t){return t.getBBox()});d?k.attr("class",function(t){return s+"swatch "+_.feature(t)}):"line"==n?k.style("stroke",_.feature):k.style("fill",_.feature);var P,T,j="start"==g?0:"middle"==g?.5:1;"vertical"===v?(P=function(t,e){return"translate(0, "+e*(S[e].height+i)+")"},T=function(t,e){return"translate("+(S[e].width+S[e].x+p)+","+(S[e].y+S[e].height/2+5)+")"}):"horizontal"===v&&(P=function(t,e){return"translate("+e*(S[e].width+i)+",0)"},T=function(t,e){return"translate("+(S[e].width*j+S[e].x)+","+(S[e].height+S[e].y+p+8)+")"}),r.d3_placement(v,O,P,A,T,g),r.d3_title(x,w,f,s),O.transition().style("opacity",1)}return x.scale=function(t){return arguments.length?(e=t,x):e},x.cells=function(t){return arguments.length?((t.length>1||t>=2)&&(u=t),x):u},x.shape=function(e,r){return arguments.length?(("rect"==e||"circle"==e||"line"==e||"path"==e&&"string"==typeof r)&&(n=e,t=r),x):n},x.shapeWidth=function(t){return arguments.length?(a=+t,x):a},x.shapeHeight=function(t){return arguments.length?(l=+t,x):l},x.shapeRadius=function(t){return arguments.length?(o=+t,x):o},x.shapePadding=function(t){return arguments.length?(i=+t,x):i},x.labels=function(t){return arguments.length?(c=t,x):c},x.labelAlign=function(t){return arguments.length?("start"!=t&&"end"!=t&&"middle"!=t||(g=t),x):g},x.labelFormat=function(t){return arguments.length?(h=t,x):h},x.labelOffset=function(t){return arguments.length?(p=+t,x):p},x.labelDelimiter=function(t){return arguments.length?(m=t,x):m},x.useClass=function(t){return arguments.length?(!0!==t&&!1!==t||(d=t),x):d},x.orient=function(t){return arguments.length?("horizontal"!=(t=t.toLowerCase())&&"vertical"!=t||(v=t),x):v},x.ascending=function(t){return arguments.length?(y=!!t,x):y},x.classPrefix=function(t){return arguments.length?(s=t,x):s},x.title=function(t){return arguments.length?(f=t,x):f},d3.rebind(x,b,"on"),x}},3025:function(t,e,n){var r=n(2778);t.exports=function(){var t,e=d3.scale.linear(),n="rect",a=15,l=2,o=[5],i=[],u="",c="",s=d3.format(".01f"),d=10,f="middle",h="to",p="vertical",g=!1,m=d3.dispatch("cellover","cellout","cellclick");function v(v){var y=r.d3_calcType(e,g,o,i,s,h),b=v.selectAll("g").data([e]);b.enter().append("g").attr("class",u+"legendCells");var x=b.selectAll("."+u+"cell").data(y.data),_=x.enter().append("g",".cell").attr("class",u+"cell").style("opacity",1e-6),w=(_.append(n).attr("class",u+"swatch"),x.select("g."+u+"cell "+n));r.d3_addEvents(_,m),x.exit().transition().style("opacity",0).remove(),"line"===n?(r.d3_drawShapes(n,w,0,a),w.attr("stroke-width",y.feature)):r.d3_drawShapes(n,w,y.feature,y.feature,y.feature,t),r.d3_addText(b,_,y.labels,u);var O,M,k=x.select("text"),A=w[0].map(function(t,r){var a=t.getBBox(),l=e(y.data[r]);return"line"===n&&"horizontal"===p?a.height=a.height+l:"line"===n&&"vertical"===p&&(a.width=a.width),a}),S=d3.max(A,function(t){return t.height+t.y}),P=d3.max(A,function(t){return t.width+t.x}),T="start"==f?0:"middle"==f?.5:1;"vertical"===p?(O=function(t,e){return"translate(0, "+(d3.sum(A.slice(0,e+1),function(t){return t.height})+e*l)+")"},M=function(t,e){return"translate("+(P+d)+","+(A[e].y+A[e].height/2+5)+")"}):"horizontal"===p&&(O=function(t,e){return"translate("+(d3.sum(A.slice(0,e+1),function(t){return t.width})+e*l)+",0)"},M=function(t,e){return"translate("+(A[e].width*T+A[e].x)+","+(S+d)+")"}),r.d3_placement(p,x,O,k,M,f),r.d3_title(v,b,c,u),x.transition().style("opacity",1)}return v.scale=function(t){return arguments.length?(e=t,v):e},v.cells=function(t){return arguments.length?((t.length>1||t>=2)&&(o=t),v):o},v.shape=function(e,r){return arguments.length?("rect"!=e&&"circle"!=e&&"line"!=e||(n=e,t=r),v):n},v.shapeWidth=function(t){return arguments.length?(a=+t,v):a},v.shapePadding=function(t){return arguments.length?(l=+t,v):l},v.labels=function(t){return arguments.length?(i=t,v):i},v.labelAlign=function(t){return arguments.length?("start"!=t&&"end"!=t&&"middle"!=t||(f=t),v):f},v.labelFormat=function(t){return arguments.length?(s=t,v):s},v.labelOffset=function(t){return arguments.length?(d=+t,v):d},v.labelDelimiter=function(t){return arguments.length?(h=t,v):h},v.orient=function(t){return arguments.length?("horizontal"!=(t=t.toLowerCase())&&"vertical"!=t||(p=t),v):p},v.ascending=function(t){return arguments.length?(g=!!t,v):g},v.classPrefix=function(t){return arguments.length?(u=t,v):u},v.title=function(t){return arguments.length?(c=t,v):c},d3.rebind(v,m,"on"),v}},3026:function(t,e,n){var r=n(2778);t.exports=function(){var t=d3.scale.linear(),e="path",n=15,a=15,l=10,o=5,i=[5],u=[],c="",s="",d=d3.format(".01f"),f="middle",h=10,p="to",g="vertical",m=!1,v=d3.dispatch("cellover","cellout","cellclick");function y(y){var b=r.d3_calcType(t,m,i,u,d,p),x=y.selectAll("g").data([t]);x.enter().append("g").attr("class",c+"legendCells");var _=x.selectAll("."+c+"cell").data(b.data),w=_.enter().append("g",".cell").attr("class",c+"cell").style("opacity",1e-6),O=(w.append(e).attr("class",c+"swatch"),_.select("g."+c+"cell "+e));r.d3_addEvents(w,v),_.exit().transition().style("opacity",0).remove(),r.d3_drawShapes(e,O,a,n,l,b.feature),r.d3_addText(x,w,b.labels,c);var M,k,A=_.select("text"),S=O[0].map(function(t){return t.getBBox()}),P=d3.max(S,function(t){return t.height}),T=d3.max(S,function(t){return t.width}),j="start"==f?0:"middle"==f?.5:1;"vertical"===g?(M=function(t,e){return"translate(0, "+e*(P+o)+")"},k=function(t,e){return"translate("+(T+h)+","+(S[e].y+S[e].height/2+5)+")"}):"horizontal"===g&&(M=function(t,e){return"translate("+e*(T+o)+",0)"},k=function(t,e){return"translate("+(S[e].width*j+S[e].x)+","+(P+h)+")"}),r.d3_placement(g,_,M,A,k,f),r.d3_title(y,x,s,c),_.transition().style("opacity",1)}return y.scale=function(e){return arguments.length?(t=e,y):t},y.cells=function(t){return arguments.length?((t.length>1||t>=2)&&(i=t),y):i},y.shapePadding=function(t){return arguments.length?(o=+t,y):o},y.labels=function(t){return arguments.length?(u=t,y):u},y.labelAlign=function(t){return arguments.length?("start"!=t&&"end"!=t&&"middle"!=t||(f=t),y):f},y.labelFormat=function(t){return arguments.length?(d=t,y):d},y.labelOffset=function(t){return arguments.length?(h=+t,y):h},y.labelDelimiter=function(t){return arguments.length?(p=t,y):p},y.orient=function(t){return arguments.length?("horizontal"!=(t=t.toLowerCase())&&"vertical"!=t||(g=t),y):g},y.ascending=function(t){return arguments.length?(m=!!t,y):m},y.classPrefix=function(t){return arguments.length?(c=t,y):c},y.title=function(t){return arguments.length?(s=t,y):s},d3.rebind(y,v,"on"),y}},3027:function(t,e,n){},3029:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=t.formData,n=t.payload,r=e.bottomMargin,a=e.canvasImageRendering,l=e.allColumnsX,o=e.allColumnsY,i=e.linearColorScheme,u=e.leftMargin,c=e.metric,s=e.normalized,d=e.showLegend,f=e.showPerc,h=e.showValues,p=e.sortXAxis,g=e.sortYAxis,m=e.xscaleInterval,v=e.yscaleInterval,y=e.yAxisBounds,b=e.yAxisFormat;return{data:n.data,bottomMargin:r,canvasImageRendering:a,colorScheme:i,columnX:l,columnY:o,leftMargin:u,metric:c,normalized:s,numberFormat:b,showLegend:d,showPercentage:f,showValues:h,sortXAxis:p,sortYAxis:g,xScaleInterval:parseInt(m,10),yScaleInterval:parseInt(v,10),yAxisBounds:y}}}}]);
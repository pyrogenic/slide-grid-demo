(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,n){"use strict";n.r(e);var a,i=n(0),o=n.n(i),r=n(35),c=n.n(r),u=(n(44),n(13)),l=n(6),s=n(7),d=n(9),h=n(8),f=n(10),g=n(15),m=n.n(g),v=(n(45),n(36)),p=n.n(v),E=0,y="dragging",k="sliding",b={dragStartDistanceSquared:9,slideDurationMS:100,smearDistanceSquaredMin:20,smearDistanceSquaredMax:500,longPressDurationMS:300,motionOnRails:!1,keepDragInBounds:!1,ignoreDragOutOfBounds:!1},O="scale(1.25)",D=function(t){function e(t){var n;Object(l.a)(this,e),(n=Object(d.a)(this,Object(h.a)(e).call(this,t))).lastInputEvent={},n.uniqueId=void 0,n.tickHandle=void 0,n.graph=void 0,n.canExchange=function(t,e){var a=n.props.canExchange;return void 0===a||a(t,e)},n.done=function(t){var e=n.props.done;if(void 0!==e)return e(t)},n.tap=function(t){var e=n.props.tap;if(void 0!==e)return e(t)},n.smear=function(t){var e=n.props.smear;if(void 0!==e)return e(t)},n.exchange=function(t,e){(0,n.props.exchange)(t,e)},n.tick=function(){},n.getTarget=function(t){for(var e=t.target;e&&!n.keys.includes(e.id);)e=e.parentElement;var a=t.clientX,i=t.clientY;if(e&&n.state.active===e){var o=n.childElements.find(function(t){if(t===e)return!1;var n=t.getBoundingClientRect(),o=n.left,r=n.top,c=n.right,u=n.bottom;return a>o&&a<c&&i>r&&i<u});if(o)return o}return e},n.buildGraph=function(){var t=new p.a;n.keys.forEach(function(e,a,i){var o={};i.forEach(function(t){if(e!==t){var a=n.canExchange(e,t);!1!==a&&(o[t]=!0===a?1:a)}}),t.addNode(e,o)}),n.graph=t},n.onMouseDown=function(t){n.lastInputEvent=Object(u.a)({kind:"down"},t),n.onMouseOrTouchDown(n.lastInputEvent)},n.onMouseMove=function(t){n.lastInputEvent=Object(u.a)({kind:"move"},t),n.onMouseOrTouchMove(n.lastInputEvent)},n.onMouseUp=function(t){n.lastInputEvent=Object(u.a)({kind:"up"},t),n.onMouseOrTouchUp(n.lastInputEvent)},n.onMouseOrTouchDown=function(t){var e=n.getTarget(t);if(e){var a=e.getBoundingClientRect(),i={left:a.left,top:a.top},o=t.clientX,r=t.clientY,c=void 0!==t.touchCount;console.log({touching:c}),n.setState({active:e,emptyLocation:i,location:{timestamp:Date.now(),clientX:o,clientY:r,offsetX:o-a.left,offsetY:r-a.top}}),setTimeout(function(){var t=n.state.active;if(t===e){if(c&&n.props.smear){var a=n.lastInputEvent.clientX,i=n.lastInputEvent.clientY,u=Math.abs(o-a),l=Math.abs(r-i);if(u*u+l*l>n.tuning.smearDistanceSquaredMin)return void console.log("Moved too far with touch \u2014 smearing instead of bulging")}t!==e||e.classList.contains(y)||!1===n.canExchange(e.id)||(e.classList.add(y),e.style.transform=O)}},n.tuning.longPressDurationMS)}},n.onMouseOrTouchMove=function(t){var e=!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])&&n.getTarget(t),a=n.state,i=a.active,o=a.emptyLocation,r=a.location;if(i&&r){console.log({touchCount:t.touchCount,wiggle:n.state.wiggle});var c=void 0===t.touchCount||t.touchCount>1||i.classList.contains(y),u=t.clientX-r.clientX,l=t.clientY-r.clientY;if(c&&n.tuning.ignoreDragOutOfBounds){var s=i.parentElement.getBoundingClientRect(),d=i.getBoundingClientRect();if(d.left+u<s.left||d.top+l<s.top||d.right+u>s.right||d.bottom+l>s.bottom)return}if(c){var h=i.classList.contains(y);if(!h&&u*u+l*l>n.tuning.dragStartDistanceSquared&&!1!==n.canExchange(i.id)&&(i.classList.add(y),h=!0),h){if(n.tuning.motionOnRails&&(Math.abs(u)>Math.abs(l)?l=0:u=0),n.tuning.keepDragInBounds){var f=i.parentElement.getBoundingClientRect(),g=i.getBoundingClientRect();g.left+u<f.left&&(u=f.left-g.left),g.top+l<f.top&&(l=f.top-g.top),g.right+u>f.right&&(u=f.right-g.right),g.bottom+l>f.bottom&&(l=f.bottom-g.bottom)}var m="translate(".concat(u,"px,").concat(l,"px) ").concat(O);if(i.style.transform=m,e){if(e===i)return;var v=n.graph.path(i.id,e.id);if(!v)return;if(v.shift(),v.find(function(t){return document.getElementById(t).classList.contains(k)}))return;for(var p=o,E=function(){var t=document.getElementById(v.shift()),e=t.getBoundingClientRect(),a=p.left,o=p.top,r=a-e.left,c=o-e.top;p=e,t.classList.add(k),t.style.transform="translate(".concat(r,"px,").concat(c,"px)"),t.style.transition="all ".concat(n.tuning.slideDurationMS,"ms ease-in-out");var u=i.id,l=t.id;setTimeout(function(){t.classList.remove(k),t.style.transform=null,t.style.transition="",n.exchange(u,l)},n.tuning.slideDurationMS)};v.length>0;)E()}}}else if(e&&n.props.smear){var b=(e.getBoundingClientRect().left+e.getBoundingClientRect().right)/2,D=(e.getBoundingClientRect().top+e.getBoundingClientRect().bottom)/2,M=Math.abs(t.clientX-b),T=Math.abs(t.clientY-D),I=M*M+T*T;(e===i?I>n.tuning.smearDistanceSquaredMin:I<n.tuning.smearDistanceSquaredMax)&&n.smear(e.id)}}},n.onMouseOrTouchUp=function(t){var e,a,i=n.getTarget(t),o=n.state;if(o.active){if(a=o.active.id,o.active.classList.contains(y))o.active.classList.remove(y);else if(void 0===t.touchCount)e=o.active.id;else if(i===o.active&&o.location){Date.now()-o.location.timestamp<n.tuning.longPressDurationMS&&(e=o.active.id)}o.active.style.transform=null}n.setState({active:void 0,location:void 0,wiggle:!1},function(){e?n.tap(e):n.done(a)})},n.onTouchStart=function(t){n.onMouseOrTouchDown(n.recordTouch("down",t))},n.onTouchMove=function(t){n.onMouseOrTouchMove(n.recordTouch("move",t))},n.onTouchEnd=function(t){n.onMouseOrTouchUp(n.recordTouch("up",t))},n.recordTouch=function(t,e){e.preventDefault();for(var a=e.touches.length,i=0,o=0,r=0;r<a;++r)i+=e.touches[r].clientX,o+=e.touches[r].clientY;return i/=a,o/=a,n.lastInputEvent={kind:t,target:e.target,clientX:i,clientY:o,touchCount:a},n.lastInputEvent};var a=Object(u.a)({},b,t.tuning);return n.state={tuning:a},n.uniqueId="slide-grid-".concat(++E),n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return i.createElement("div",{id:this.uniqueId,className:m()(["slide-grid",this.props.className,this.state.wiggle&&"wiggle"]).join(" "),onMouseDown:this.onMouseDown,onMouseMove:this.onMouseMove,onMouseUp:this.onMouseUp},this.children)}},{key:"componentDidMount",value:function(){var t=this.myDomElement;t?(t.addEventListener("touchstart",this.onTouchStart,{passive:!1}),t.addEventListener("touchmove",this.onTouchMove,{passive:!1}),t.addEventListener("touchend",this.onTouchEnd,{passive:!1}),t.addEventListener("touchcancel",this.onTouchEnd,{passive:!1})):console.warn("Couldn't find myself in the DOM, touch support unavailable. (id: ".concat(this.uniqueId,")")),this.tickHandle=setInterval(this.tick,100),this.buildGraph()}},{key:"componentWillUnmount",value:function(){void 0!==this.tickHandle&&(this.tickHandle=void 0,clearInterval(this.tickHandle))}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.active,a=this.state.location,i=this.state.emptyLocation;if(n&&a&&i&&n.classList.contains(y)){console.log("clear target transform"),n.style.transform=null;var o=n.getBoundingClientRect();if(n.style.transform=O,o.left.toFixed(0)!==i.left.toFixed(0)||o.top.toFixed(0)!==i.top.toFixed(0)){var r={left:o.left,top:o.top},c={emptyLocation:r,location:{timestamp:a.timestamp,clientX:r.left+a.offsetX,clientY:r.top+a.offsetY,offsetX:a.offsetX,offsetY:a.offsetY}};return void this.setState(c)}}this.buildGraph(),"move"===this.lastInputEvent.kind&&this.onMouseOrTouchMove(this.lastInputEvent,!0)}},{key:"myDomElement",get:function(){return document.getElementById(this.uniqueId)}},{key:"children",get:function(){return this.props.children||[]}},{key:"keys",get:function(){return this.children.map(function(t){return t.key})}},{key:"childElements",get:function(){return m()(this.keys.map(function(t){return document.getElementById(t)}))}},{key:"tuning",get:function(){return this.state.tuning}}]),e}(i.Component),M=n(38),T=n.n(M),I=(n(54),n(17)),w=n.n(I),S=n(16),j=n.n(S),x=0,B=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(d.a)(this,Object(h.a)(e).call(this,t))).tap=void 0,n.smear=void 0,n.exchange=function(t,e){n.setState(function(n){var a=n.tiles.findIndex(function(e){return e.id===t}),i=n.tiles.findIndex(function(t){return t.id===e}),o=[];return n.tiles.forEach(function(t,e){e===a?o[i]=t:e===i?o[a]=t:o[e]=t}),{tiles:o}})},n.state=n.getDefaultState(),n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return o.a.createElement(j.a,{className:"demo"},o.a.createElement(w.a,null),o.a.createElement(w.a,{md:"auto"},o.a.createElement("h3",null,this.title),this.renderDemo()),o.a.createElement(w.a,null))}},{key:"getTileById",value:function(t){return this.state.tiles.find(function(e){return e.id===t})}},{key:"getTileIndexById",value:function(t){return this.state.tiles.findIndex(function(e){return e.id===t})}},{key:"getTileByTitle",value:function(t){return this.state.tiles.find(function(e){return e.title===t})}},{key:"getTileIndexByTitle",value:function(t){return this.state.tiles.findIndex(function(e){return e.title===t})}},{key:"renderDemo",value:function(){var t=this,e=this.props.tuning;return o.a.createElement(o.a.Fragment,null,this.renderHeader(),o.a.createElement(D,{tuning:e,exchange:this.exchange,canExchange:this.canExchange,tap:this.tap,smear:this.smear},this.state.tiles.map(function(e){return o.a.createElement("div",{className:"tile",key:e.id,id:e.id},t.renderTileContent(e))})))}},{key:"renderHeader",value:function(){return!1}},{key:"renderTileContent",value:function(t){return o.a.createElement("div",null,t.title)}},{key:"createTile",value:function(t){return{id:"tile-".concat(x++),title:t}}},{key:"newDemo",value:function(){for(var t=[],e=1;e<=16;++e)t.push(this.createTile(e.toString()));return t}}]),e}(o.a.Component),C=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(d.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).title="Basic Demo",n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"getDefaultState",value:function(){return{tiles:this.newDemo()}}},{key:"renderTileContent",value:function(t){return i.createElement("div",null,t.title)}}]),e}(B),L=(n(56),n(1)),R=n.n(L);!function(t){t.lock="Lock",t.costUp="Cost Up",t.costDown="Cost Down"}(a||(a={}));var q=function(t){function e(){var t,n;Object(l.a)(this,e);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(o)))).title="Strict Demo",n.canExchange=function(t,e){if(n.state.locked.includes(t))return!1;if(void 0===e)return!0;if(n.state.locked.includes(e))return!1;var a=n.getTileIndexById(t),i=n.getTileIndexById(e),o=Math.floor(a/4),r=a%4,c=Math.floor(i/4),u=i%4;return!!(o===c&&1===Math.abs(r-u)||r===u&&1===Math.abs(o-c))&&(n.state.costs[e]||!0)},n.tap=function(t){console.log("tap: ".concat(t)),n.setState(function(e){var n=e.mode,i=e.locked,o=e.costs;if(n===a.lock){var r=i.indexOf(t);r>=0?i.splice(r,1):i.push(t)}else{var c=o[t];(c=(c||1)+(n===a.costDown?-1:1))<2?c=5:c>5&&(c=1),o[t]=c}return{costs:o,locked:i}})},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"getDefaultState",value:function(){return{tiles:this.newDemo(),mode:a.lock,locked:[],costs:{}}}},{key:"renderHeader",value:function(){var t=this;return i.createElement(R.a,null,i.createElement(R.a.Group,null,i.createElement(R.a.Label,null,"Click tiles to"),i.createElement(R.a.Control,{as:"select",value:this.state.mode.toString(),onChange:function(e){return t.setState({mode:e.currentTarget.value})}},Object.getOwnPropertyNames(a).map(function(t){return i.createElement("option",{value:t},a[t])}))))}},{key:"renderTileContent",value:function(t){var e=[];if(this.state.locked.includes(t.id))e.push("locked");else{var n=this.state.costs[t.id]||1;e.push("cost-".concat(n))}return i.createElement("div",{className:e.join(" ")},i.createElement("div",null,t.title))}}]),e}(B),X=n(37),Y=n.n(X),N=n(21),G=n.n(N),U=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(d.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(i)))).title="15 Game",n.tap=function(t){var e=n.getTileByTitle("_");n.canExchange(t,e.id)&&n.exchange(t,e.id)},n.canExchange=function(t,e){var a="_"===n.getTileById(t).title;e||(e=n.getTileByTitle("_").id);var i="_"===n.getTileById(e).title;if(!a&&!i)return!1;var o=n.getTileIndexById(t),r=n.getTileIndexById(e),c=Math.floor(o/4),u=o%4,l=Math.floor(r/4),s=r%4;return c===l&&1===Math.abs(u-s)||u===s&&1===Math.abs(c-l)},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"getDefaultState",value:function(){return{tiles:this.newDemo()}}},{key:"newDemo",value:function(){for(var t=[this.createTile("_")],e=1;e<=15;++e)t.push(this.createTile(e.toString()));return t}},{key:"renderDemo",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(j.a,{className:"mb-1"},o.a.createElement(G.a,{onClick:function(){return t.setState({tiles:t.newDemo()})}},"Reset"),"\xa0",o.a.createElement(G.a,{onClick:function(){return t.setState({tiles:Y()(t.state.tiles)})}},"Shuffle")),o.a.createElement(j.a,null,o.a.createElement(D,{exchange:this.exchange,canExchange:this.canExchange,tap:this.tap},this.state.tiles.map(function(t){return o.a.createElement("div",{className:m()(["tile","_"===t.title&&"blank"]).join(" "),key:t.id,id:t.id},o.a.createElement("div",null,t.title))}))))}}]),e}(B),H=function(t){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(h.a)(e).apply(this,arguments))}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=sessionStorage.getItem("SlideGridTuning");t&&this.props.change(JSON.parse(t))}},{key:"componentDidUpdate",value:function(){sessionStorage.setItem("SlideGridTuning",JSON.stringify(this.props.tuning))}},{key:"render",value:function(){var t=this,e=this.props.tuning;return o.a.createElement(R.a,null,o.a.createElement(R.a.Group,null,o.a.createElement(R.a.Label,null,"Drag Start Distance"),o.a.createElement(R.a.Control,{type:"number",value:e.dragStartDistanceSquared.toString(),onChange:function(e){return t.props.change({dragStartDistanceSquared:e.target.value})}})),o.a.createElement(R.a.Group,null,o.a.createElement(R.a.Label,null,"Motion on Rails"),o.a.createElement(R.a.Check,{checked:e.motionOnRails,onChange:function(n){return t.props.change({motionOnRails:!e.motionOnRails})}})),o.a.createElement(R.a.Group,null,o.a.createElement(R.a.Label,null,"keepDragInBounds"),o.a.createElement(R.a.Check,{checked:e.keepDragInBounds,onChange:function(n){return t.props.change({keepDragInBounds:!e.keepDragInBounds})}})),o.a.createElement(R.a.Group,null,o.a.createElement(R.a.Label,null,"ignoreDragOutOfBounds"),o.a.createElement(R.a.Check,{checked:e.ignoreDragOutOfBounds,onChange:function(n){return t.props.change({ignoreDragOutOfBounds:!e.ignoreDragOutOfBounds})}})),o.a.createElement("ul",null,Object.getOwnPropertyNames(e).map(function(t){return o.a.createElement("li",{key:t},t,": ","".concat(e[t]))})))}}]),e}(o.a.Component);function F(){return o.a.createElement("a",{href:"https://github.com/pyrogenic/slide-grid"},o.a.createElement("code",null,"slide-grid"))}var _=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(d.a)(this,Object(h.a)(e).call(this,t))).state={tuning:b},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.state.tuning;return o.a.createElement(T.a,null,o.a.createElement("h1",null,o.a.createElement(F,null)),o.a.createElement("h2",null,"Overview"),o.a.createElement("p",null,o.a.createElement(F,null)," is a hybrid React/DOM component that supports lightweight, touch-aware reordering of children."),o.a.createElement("h2",null,"Tuning"),o.a.createElement(H,{tuning:this.state.tuning,change:function(e){t.setState(function(t){return{tuning:Object(u.a)({},t.tuning,e)}})}}),o.a.createElement("h2",null,"Demos"),o.a.createElement(C,{tuning:e}),o.a.createElement(q,{tuning:e}),o.a.createElement(U,{tuning:e}))}}]),e}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},39:function(t,e,n){t.exports=n(100)},44:function(t,e,n){},45:function(t,e,n){},54:function(t,e,n){},56:function(t,e,n){}},[[39,1,2]]]);
//# sourceMappingURL=main.4992d9fa.chunk.js.map
(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[749],{1616:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r,a,i=n(2007),o=n.n(i),c=n(168),s=n(1109),u=s.Z.div(r||(r=(0,c.Z)(["\n  padding: 40px;\n"]))),p=s.Z.p(a||(a=(0,c.Z)(["\n  text-align: center;\n  color: #a4161a;\n  font-size: 30px;\n  font-weight: 500;\n"]))),l=n(184);function f(e){var t=e.message;return(0,l.jsx)(u,{children:(0,l.jsx)(p,{children:t})})}Error.propTypes={message:o().string.isRequired}},1104:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r,a,i,o,c=n(168),s=n(1109),u=s.Z.ul(r||(r=(0,c.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  grid-gap: 20px;\n  margin: 22px auto;\n  padding: 0;\n  list-style: none;\n"]))),p=n(7689),l=n(1087),f=s.Z.li(a||(a=(0,c.Z)(["\n  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  }\n"]))),d=s.Z.img(i||(i=(0,c.Z)(["\n  display: block;\n  width: 100%;\n  height: 400px;\n  object-fit: cover;\n"]))),v=s.Z.h2(o||(o=(0,c.Z)(["\n  padding: 5px 15px;\n  font-size: 20px;\n  color: #6495ed;\n"]))),g=n(184);function x(e){var t=e.id,n=e.title,r=e.poster,a=(0,p.TH)();return(0,g.jsx)(f,{children:(0,g.jsxs)(l.rU,{to:"/movies/".concat(t),state:{from:a},children:[(0,g.jsx)("div",{children:(0,g.jsx)(d,{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:"{title}"})}),(0,g.jsx)(v,{children:n||"No tittle"})]})})}function h(e){var t=e.movies;return(0,g.jsx)(u,{children:t.map((function(e){var t=e.id,n=e.original_title,r=e.poster_path;return(0,g.jsx)(x,{id:t,title:n,poster:r},t)}))})}},749:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5861),a=n(9439),i=n(4687),o=n.n(i),c=n(2791),s=n(1095),u=n(3479),p=n(1616),l=n(1104),f=n(184),d="idle",v="pending",g="resolved",x="rejected";function h(){var e=(0,c.useState)(d),t=(0,a.Z)(e,2),n=t[0],i=t[1],h=(0,c.useState)([]),m=(0,a.Z)(h,2),w=m[0],y=m[1],Z=(0,c.useState)(null),_=(0,a.Z)(Z,2),b=_[0],k=_[1];return(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(v),e.prev=1,e.next=4,(0,s.wr)();case 4:t=e.sent,y(t),i(g),k(null),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),i(x),k(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("section",{children:[(0,f.jsx)("h1",{children:"\u041covie of the week"}),n===x&&(0,f.jsx)(p.Z,{message:b}),n===v&&(0,f.jsx)(u.Z,{}),n===g&&(0,f.jsx)(l.Z,{movies:w})]})}},1095:function(e,t,n){"use strict";n.d(t,{DG:function(){return p},Hx:function(){return f},Kd:function(){return l},aP:function(){return u},wr:function(){return s}});var r=n(5861),a=n(4687),i=n.n(a),o=n(1243),c="31449444226ba6345698313fe055564a";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var e=(0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("trending/movie/day?api_key=".concat(c,"&language=uk&page=1"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(i().mark((function e(t,n,r){var a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&include_adult=false"),{params:{query:t,page:n,limit:r}});case 2:return a=e.sent,s=a.data,e.abrupt("return",s.results);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,r=n.data,a={originalTitle:r.original_title,title:r.title,genres:r.genres,overview:r.overview,poster:r.poster_path,releaseDate:r.release_date.slice(0,4),voteAverage:r.vote_average},e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n=e.sent,r=n.data,a=r.cast.map((function(e){return{id:e.id,name:e.name,profilePath:e.profile_path}})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n,r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,a=r.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},888:function(e,t,n){"use strict";var r=n(9047);function a(){}function i(){}i.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,i,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:a};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=749.3276f3ad.chunk.js.map
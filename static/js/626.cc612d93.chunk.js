(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[626],{1616:function(n,e,t){"use strict";t.d(e,{Z:function(){return l}});var r,a,i=t(2007),o=t.n(i),c=t(168),u=t(1109),s=u.Z.div(r||(r=(0,c.Z)(["\n  padding: 40px;\n"]))),p=u.Z.p(a||(a=(0,c.Z)(["\n  text-align: center;\n  color: #a4161a;\n  font-size: 30px;\n  font-weight: 500;\n"]))),f=t(184);function l(n){var e=n.message;return(0,f.jsx)(s,{children:(0,f.jsx)(p,{children:e})})}Error.propTypes={message:o().string.isRequired}},7626:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return k}});var r,a,i,o,c,u,s=t(9439),p=t(7689),f=t(1095),l=t(2791),x=t(1616),d=t(168),g=t(1109),h=g.Z.div(r||(r=(0,d.Z)(["\n  padding: 20px;\n"]))),v=g.Z.ul(a||(a=(0,d.Z)(["\n  margin: -30px;\n"]))),m=g.Z.li(i||(i=(0,d.Z)(["\n  position: relative;\n  margin: 30px;\n  padding: 25px;\n\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),b=g.Z.p(o||(o=(0,d.Z)(["\n  line-height: 1.35;\n  color: #42362b;\n  margin-bottom: 8px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))),Z=g.Z.span(c||(c=(0,d.Z)(["\n  position: absolute;\n  top: -10px;\n  left: 10;\n  padding: 4px 10px;\n  font-weight: 700;\n  background-color: #42362b;\n  color: #fff;\n  border-radius: 2px;\n\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),w=g.Z.span(u||(u=(0,d.Z)(["\n  font-weight: 700;\n  color: #f25c54;\n"]))),y=t(184);function _(n){var e=n.reviews;return(0,y.jsx)(h,{children:(0,y.jsx)(v,{children:e.map((function(n){var e=n.id,t=n.author,r=n.content;return(0,y.jsxs)(m,{children:[(0,y.jsx)(Z,{children:t}),(0,y.jsxs)(b,{children:[(0,y.jsx)(w,{children:"Reviews:"}),r]})]},e)}))})})}function k(){var n=(0,p.UO)().movieId,e=(0,l.useState)(),t=(0,s.Z)(e,2),r=t[0],a=t[1],i=(0,l.useState)(null),o=(0,s.Z)(i,2),c=o[0],u=o[1];return(0,l.useEffect)((function(){(0,f.Hx)(n).then((function(n){0!==n.length?a(n):u("There are no reviews")})).catch((function(n){return u(n.message)}))}),[n]),(0,y.jsxs)("div",{children:[c&&(0,y.jsx)(x.Z,{message:c}),r&&(0,y.jsx)(_,{reviews:r})]})}},1095:function(n,e,t){"use strict";t.d(e,{DG:function(){return p},Hx:function(){return l},Kd:function(){return f},aP:function(){return s},wr:function(){return u}});var r=t(5861),a=t(4687),i=t.n(a),o=t(1243),c="31449444226ba6345698313fe055564a";o.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("trending/movie/day?api_key=".concat(c,"&language=uk&page=1"));case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e,t,r){var a,u;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("search/movie?api_key=".concat(c,"&language=en-US&include_adult=false"),{params:{query:e,page:t,limit:r}});case 2:return a=n.sent,u=a.data,n.abrupt("return",u.results);case 5:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,a={originalTitle:r.original_title,title:r.title,genres:r.genres,overview:r.overview,poster:r.poster_path,releaseDate:r.release_date.slice(0,4),voteAverage:r.vote_average},n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return t=n.sent,r=t.data,a=r.cast.map((function(n){return{id:n.id,name:n.name,profilePath:n.profile_path}})),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t,r,a;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=n.sent,r=t.data,a=r.results.map((function(n){return{id:n.id,author:n.author,content:n.content}})),n.abrupt("return",a);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},888:function(n,e,t){"use strict";var r=t(9047);function a(){}function i(){}i.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,i,o){if(o!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=626.cc612d93.chunk.js.map
(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{37:function(n,e,t){},80:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),r=t(13),i=t.n(r),c=(t(37),t(17)),s=t(6),l=t(7),p=t(9),d=t(8),h=t(10),u=(t(38),t(28)),g=t.n(u);var b,x,f,m,j,v,O,y,w,k,C,S,I,L={fetchImages:function(n){var e=n.searchQuery,t=n.page;return g.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("23559462-5fccbea6e5ec1609b81e1decd","&image_type=photo&orientation=horizontal&per_page=12\n        ")).then((function(n){return n.data.hits}))}},z=t(2),F=t(3),M=F.a.header(b||(b=Object(z.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),U=F.a.form(x||(x=Object(z.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),E=F.a.button(f||(f=Object(z.a)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  /*background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');*/\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms\n    cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),T=F.a.span(m||(m=Object(z.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),q=F.a.input(j||(j=Object(z.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),B=t(1),D=function(n){Object(p.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={query:""},n.handleInputChange=function(e){var t=e.currentTarget.value;n.setState({query:t})},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.query.trim()?(n.props.onSubmit(n.state.query),n.resetState()):h.b.info("\u0420lease ENTER CORRECT NAME",{position:"top-center",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})},n.resetState=function(){n.setState({query:""})},n}return Object(l.a)(t,[{key:"render",value:function(){return Object(B.jsx)(M,{children:Object(B.jsxs)(U,{onSubmit:this.handleSubmit,children:[Object(B.jsx)(E,{type:"submit",children:Object(B.jsx)(T,{children:"Search"})}),Object(B.jsx)(q,{value:this.state.query,onChange:this.handleInputChange,placeholder:"Search images",type:"text",autoComplete:"off",autoFocus:!0})]})})}}]),t}(a.Component),Q=F.a.ul(v||(v=Object(z.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(\n    auto-fill,\n    minmax(320px, 1fr)\n  );\n  grid-gap: 30px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 30px 60px;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),R=(F.a.li(O||(O=Object(z.a)(["\n  border-radius: 5px;\n  /*overflow: hidden;*/\n  box-shadow: 0px 1px 3px 0px\n      rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n    0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n  transition: transform 250ms\n      cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 250ms\n      cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n    box-shadow: rgba(0, 0, 0, 0.5) 0 0\n      10px 5px;\n  }\n"]))),F.a.img(y||(y=Object(z.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"])))),A=function(n){var e=n.alt,t=void 0===e?"":e,a=n.webformatURL,o=n.onClick,r=n.id;return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(R,{id:r,src:a,alt:t,onClick:o})})},P=function(n){Object(p.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).handleClick=function(e){n.props.onClose(e)},n}return Object(l.a)(t,[{key:"render",value:function(){var n=this,e=this.props.images;return Object(B.jsx)(Q,{children:e.map((function(e){var t=e.id,a=e.webformatURL,o=e.largeImageURL;return Object(B.jsx)(A,{webformatURL:a,id:t,onClick:function(){return n.handleClick(o)}},t)}))})}}]),t}(a.Component),H=F.a.div(w||(w=Object(z.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 10px 0;\n"]))),K=F.a.button(k||(k=Object(z.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms\n    cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14),\n    0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #303f9f;\n  }\n"]))),N=function(n){var e=n.onClick;return Object(B.jsx)(H,{children:Object(B.jsx)(K,{type:"button",onClick:e,children:"Load more"})})},J=F.a.div(C||(C=Object(z.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),_=F.a.div(S||(S=Object(z.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),W=function(n){Object(p.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).handleKeyDown=function(e){"Escape"===e.code&&n.props.onClose()},n.handleBackdropClick=function(e){e.currentTarget===e.target&&n.props.onClose()},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var n=this.props.largeImageUrl;return Object(B.jsx)(B.Fragment,{children:Object(B.jsx)(J,{onClick:this.handleBackdropClick,children:Object(B.jsx)(_,{children:Object(B.jsx)("img",{src:n,alt:"not available"})})})})}}]),t}(a.Component),G=t(32),V=t.n(G),X=F.a.div(I||(I=Object(z.a)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"]))),Y=function(){return Object(B.jsx)(X,{children:Object(B.jsx)(V.a,{type:"Circles",color:"#00BFFF",height:200,width:200,timeout:1e4})})},Z=function(n){Object(p.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={searchQuery:"",page:1,images:[],largeImageUrl:"",error:null,showModal:!1,isLoading:!1},n.handleSelectImage=function(e){n.setState({selectedImage:e}),n.toggleModal()},n.toggleModal=function(e){n.setState({largeImageUrl:e,showModal:!n.state.showModal})},n.handleSubmit=function(e){n.setState({images:[],searchQuery:e,page:1})},n.fetchImages=function(){var e=n.state,t=e.searchQuery,a=e.page;n.setState({isLoading:!0}),L.fetchImages({searchQuery:t,page:a}).then((function(e){return e.length>0?n.setState((function(n){return{images:[].concat(Object(c.a)(n.images),Object(c.a)(e)),page:n.page+1}})):h.b.warning("Image not found!!!")})).catch((function(n){return console.log(n)})).finally((function(){n.setState({isLoading:!1})}))},n}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(n,e){e.searchQuery!==this.state.searchQuery&&(this.fetchImages(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}))}},{key:"render",value:function(){var n=this.state,e=n.images,t=n.isLoading,a=n.error,o=n.showModal,r=n.largeImageUrl;return Object(B.jsxs)("div",{className:"App",children:[a&&h.b.error("Error!!! Something went wrong."),Object(B.jsx)(D,{onSubmit:this.handleSubmit}),t&&Object(B.jsx)(Y,{}),e.length>0&&Object(B.jsx)(P,{images:e,onClose:this.toggleModal}),e.length>11&&Object(B.jsx)(N,{type:"button",onClick:this.fetchImages}),o&&Object(B.jsx)(W,{onClose:this.toggleModal,largeImageUrl:r}),Object(B.jsx)(h.a,{position:"top-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),t}(a.Component),$=Z,nn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,81)).then((function(e){var t=e.getCLS,a=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),a(n),o(n),r(n),i(n)}))};i.a.render(Object(B.jsx)(o.a.StrictMode,{children:Object(B.jsx)($,{})}),document.getElementById("root")),nn()}},[[80,1,2]]]);
//# sourceMappingURL=main.291043c9.chunk.js.map
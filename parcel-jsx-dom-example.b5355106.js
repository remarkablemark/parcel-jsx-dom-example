const e=Object.keys;function t(e){return"string"==typeof e}function n(e){return"number"==typeof e}function r(e){return"object"==typeof e?null!==e:o(e)}function o(e){return"function"==typeof e}function l(t,n){if(t)for(let r of e(t))n(t[r],r)}const i={animationIterationCount:0,borderImageOutset:0,borderImageSlice:0,borderImageWidth:0,boxFlex:0,boxFlexGroup:0,boxOrdinalGroup:0,columnCount:0,columns:0,flex:0,flexGrow:0,flexPositive:0,flexShrink:0,flexNegative:0,flexOrder:0,gridArea:0,gridRow:0,gridRowEnd:0,gridRowSpan:0,gridRowStart:0,gridColumn:0,gridColumnEnd:0,gridColumnSpan:0,gridColumnStart:0,fontWeight:0,lineClamp:0,lineHeight:0,opacity:0,order:0,orphans:0,tabSize:0,widows:0,zIndex:0,zoom:0,fillOpacity:0,floodOpacity:0,stopOpacity:0,strokeDasharray:0,strokeDashoffset:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0},a=["Webkit","ms","Moz","O"];e(i).forEach(e=>{a.forEach(t=>{i[t+e.charAt(0).toUpperCase()+e.substring(1)]=0})});const s=Symbol.for("jsx-dom:type");var c,f=((c=f||{}).ShadowRoot="ShadowRoot",c);function u(e){return"boolean"!=typeof e&&null!=e}const d={animate:0,circle:0,clipPath:0,defs:0,desc:0,ellipse:0,feBlend:0,feColorMatrix:0,feComponentTransfer:0,feComposite:0,feConvolveMatrix:0,feDiffuseLighting:0,feDisplacementMap:0,feDistantLight:0,feFlood:0,feFuncA:0,feFuncB:0,feFuncG:0,feFuncR:0,feGaussianBlur:0,feImage:0,feMerge:0,feMergeNode:0,feMorphology:0,feOffset:0,fePointLight:0,feSpecularLighting:0,feSpotLight:0,feTile:0,feTurbulence:0,filter:0,foreignObject:0,g:0,image:0,line:0,linearGradient:0,marker:0,mask:0,metadata:0,path:0,pattern:0,polygon:0,polyline:0,radialGradient:0,rect:0,stop:0,svg:0,switch:0,symbol:0,text:0,textPath:0,tspan:0,use:0,view:0},p=/^(a(ll|t|u)|base[FP]|c(al|lipPathU|on)|di|ed|ex|filter[RU]|g(lyphR|r)|ke|l(en|im)|ma(rker[HUW]|s)|n|pat|pr|point[^e]|re[^n]|s[puy]|st[^or]|ta|textL|vi|xC|y|z)/;function m(a,c){let m,{children:b,...k}=c;if(k.namespaceURI||0!==d[a]||(k={...k,namespaceURI:"http://www.w3.org/2000/svg"}),t(a)){if(m=k.namespaceURI?document.createElementNS(k.namespaceURI,a):document.createElement(a),function(a,s){for(let c of e(a))!function(a,s,c){switch(a){case"xlinkActuate":case"xlinkArcrole":case"xlinkHref":case"xlinkRole":case"xlinkShow":case"xlinkTitle":case"xlinkType":x(c,"http://www.w3.org/1999/xlink",y(a,":"),s);return;case"xmlnsXlink":w(c,y(a,":"),s);return;case"xmlBase":case"xmlLang":case"xmlSpace":x(c,"http://www.w3.org/XML/1998/namespace",y(a,":"),s);return}switch(a){case"htmlFor":w(c,"for",s);return;case"dataset":l(s,(e,t)=>{null!=e&&(c.dataset[t]=e)});return;case"innerHTML":case"innerText":case"textContent":u(s)&&(c[a]=s);return;case"dangerouslySetInnerHTML":r(s)&&(c.innerHTML=s.__html);return;case"value":if(null==s||c instanceof window.HTMLSelectElement)return;if(c instanceof window.HTMLTextAreaElement){c.value=s;return}break;case"spellCheck":c.spellcheck=s;return;case"class":case"className":o(s)?s(c):w(c,"class",function t(n){return Array.isArray(n)?n.map(t).filter(Boolean).join(" "):r(n)?Symbol.iterator in n?t(Array.from(n)):e(n).filter(e=>n[e]).join(" "):u(n)?""+n:""}(s));return;case"ref":case"namespaceURI":return;case"style":!function e(o,a){null==a||!1===a||(Array.isArray(a)?a.forEach(t=>e(o,t)):t(a)?o.setAttribute("style",a):r(a)&&l(a,(e,t)=>{0===t.indexOf("-")?o.style.setProperty(t,e):n(e)&&0!==i[t]?o.style[t]=e+"px":o.style[t]=e}))}(c,s);return;case"on":case"onCapture":l(s,(e,t)=>{c.addEventListener(t,e,"onCapture"===a)});return}if(o(s)){if("o"===a[0]&&"n"===a[1]){let e=a.toLowerCase(),t=e.endsWith("capture");if("ondoubleclick"===e?e="ondblclick":t&&"ondoubleclickcapture"===e&&(e="ondblclickcapture"),t||null!==c[e])if(t)c.addEventListener(e.substring(2,e.length-7),s,!0);else{let t;t=e in window?e.substring(2):e[2]+a.slice(3),c.addEventListener(t,s)}else c[e]=s}}else r(s)?c[a]=s:!0===s?w(c,a,""):!1!==s&&null!=s&&(c instanceof SVGElement&&!p.test(a)?w(c,y(a,"-"),s):w(c,a,s))}(c,a[c],s)}(k,m),function e(o,l){if(r(o)&&"number"==typeof o.length&&"number"!=typeof o.nodeType){var i=o,a=l;for(let t of[...i])e(t,a)}else if(t(o)||n(o))g(document.createTextNode(o),l);else if(null===o)g(document.createComment(""),l);else if(o&&"number"==typeof o.nodeType)g(o,l);else if(null!=o&&o[s]===f.ShadowRoot){let t=l.attachShadow(o.attr);e(o.children,t),h(o.ref,t)}}(b,m),m instanceof window.HTMLSelectElement&&null!=k.value)if(!0===k.multiple&&Array.isArray(k.value)){let e=k.value.map(e=>String(e));m.querySelectorAll("option").forEach(t=>t.selected=e.includes(t.value))}else m.value=k.value;h(k.ref,m)}else if(o(a))r(a.defaultProps)&&(k={...a.defaultProps,...k}),m=a&&a.isComponent?function(e,t,n){let r=new e(t={...t,children:n}),o=r.render();return"ref"in t&&h(t.ref,r),o}(a,k,b):a({...k,children:b});else throw TypeError(`Invalid JSX element type: ${a}`);return m}function h(e,t){r(e)&&"current"in e?e.current=t:o(e)&&e(t)}function g(e,t){t instanceof window.HTMLTemplateElement?t.content.appendChild(e):t.appendChild(e)}function y(e,t){return e.replace(/[A-Z]/g,e=>t+e.toLowerCase())}function w(e,t,n){e.setAttribute(t,n)}function x(e,t,n,r){e.setAttributeNS(t,n,r)}document.body.appendChild(m(function(){return m("h2",{children:"Welcome to jsx-dom"})},{}));
//# sourceMappingURL=parcel-jsx-dom-example.b5355106.js.map

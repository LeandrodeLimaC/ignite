var p=Object.defineProperty;var x=(e,r)=>p(e,"name",{value:r,configurable:!0});import{r as f}from"./index-fc80f157.js";var o={},g={get exports(){return o},set exports(e){o=e}},m={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var u=f,y=Symbol.for("react.element"),_=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,d=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,v={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,n){var s,t={},a=null,l=null;n!==void 0&&(a=""+n),r.key!==void 0&&(a=""+r.key),r.ref!==void 0&&(l=r.ref);for(s in r)c.call(r,s)&&!v.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps,r)t[s]===void 0&&(t[s]=r[s]);return{$$typeof:y,type:e,key:a,ref:l,props:t,_owner:d.current}}x(i,"q");m.Fragment=_;m.jsx=i;m.jsxs=i;(function(e){e.exports=m})(g);const b=o.jsx,R=o.jsxs;var h={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},O={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},F={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},k={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},S={regular:"400",medium:"500",bold:"700"},w={default:"Roboto, sans-serif",code:"monospace"},A={shorter:"125%",short:"140%",base:"160%",tall:"180%"};export{R as a,S as b,h as c,w as d,k as f,b as j,A as l,F as r,O as s};
//# sourceMappingURL=index-4e444cbb.js.map

var l=Object.defineProperty;var i=(r,n)=>l(r,"name",{value:n,configurable:!0});import{a as t,j as e}from"./index-4e444cbb.js";function s({tokens:r,hasRemValue:n=!1}){return t("table",{className:"tokens-grid",children:[e("thead",{children:t("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),n&&e("th",{children:"Pixels"})]})}),e("tbody",{children:Object.entries(r).map(([d,a])=>t("tr",{children:[e("td",{children:d}),e("td",{children:a}),n&&t("td",{children:[Number(a.replace("rem",""))*16,"px"]})]},d))})]})}i(s,"TokensGrid");try{s.displayName="TokensGrid",s.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}export{s as T};
//# sourceMappingURL=TokensGrid-5a81cbc8.js.map

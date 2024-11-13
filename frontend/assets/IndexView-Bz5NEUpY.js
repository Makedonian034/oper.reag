var y=Object.defineProperty;var _=(r,e,s)=>e in r?y(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var u=(r,e,s)=>_(r,typeof e!="symbol"?e+"":e,s);import{l as b,e as x,G as C,H as d,J as v,d as I,c as p,a as i,w as f,u as n,t as k,y as B,o as c,I as E,b as P,f as j,j as M,_ as R}from"./index-BXV8zl86.js";import{C as S}from"./ComponentButton-Cvko8na4.js";import{C as U}from"./ComponentCard-ww-yomY1.js";import{s as w,_ as g,e as V}from"./ComponentInput.vue_vue_type_script_setup_true_lang-DhxH_9or.js";import{i as $}from"./index-DRseKvvp.js";class D{constructor(...e){u(this,"fields",{});e.forEach(({fieldName:s,rule:a,errorMessage:t})=>{this.fields[s]=this.fields[s]||[],this.fields[s].push({rule:a,errorMessage:t,fieldName:s})})}getValueByPath(e,s){return s.replace(/\[(\d+)]/g,".$1").split(".").reduce((t,o)=>t==null?void 0:t[o],e)}validate(e){return Object.entries(this.fields).reduce((s,[a,t])=>{const o=this.getValueByPath(e,a),l=t.filter(({rule:m})=>!m(o)).map(({errorMessage:m})=>m);return l.length&&(s[a]=l),s},{})}}function L(r){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)}function h(r,e){return r.length>=e}const N="/v1/users",q=b("user",()=>{const r=x({email:"",password:""});return{element:r,signin:async()=>{try{const a=await $.post([N,"auth"].join("/"),r.value),{access_token:t}=a.data;C("ssoID",t),d.push({name:"home"})}catch(a){w({error:a})}},signout:()=>{v("ssoID"),d.push({name:"user-account"})}}}),O={key:0},G=I({__name:"IndexView",setup(r){const e=q(),s=new D({fieldName:"email",rule:L,errorMessage:"Электронная почта должна быть валидной"},{fieldName:"email",rule:t=>h(t,5),errorMessage:"Электронная почта должна содержать не менее 5 символов"},{fieldName:"password",rule:t=>h(t,5),errorMessage:"Пароль должен содержать не менее 5 символов"}),a=()=>{const t=s.validate(e.element);if(Object.keys(t).length!==0){w(t);return}e.signin()};return(t,o)=>(c(),p("main",null,[i(E),i(U,{tag:"section"},{default:f(()=>[P("form",{onSubmit:o[3]||(o[3]=M(()=>{},["prevent"]))},[i(g,{label:"Электронная почта",type:"email",required:"email",modelValue:n(e).element.email,"onUpdate:modelValue":o[0]||(o[0]=l=>n(e).element.email=l)},null,8,["modelValue"]),i(g,{label:"Пароль",type:"password",required:"password",modelValue:n(e).element.password,"onUpdate:modelValue":o[1]||(o[1]=l=>n(e).element.password=l)},null,8,["modelValue"]),i(S,{disabled:!n(e).element.password||!n(e).element.email,onClick:o[2]||(o[2]=l=>a())},{default:f(()=>o[4]||(o[4]=[j("Войти")])),_:1},8,["disabled"])],32)]),_:1}),n(V).error?(c(),p("span",O,k(n(V).error),1)):B("",!0)]))}}),F=R(G,[["__scopeId","data-v-a0f16e37"]]);export{F as default};

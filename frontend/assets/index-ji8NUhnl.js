import{i as t}from"./index-DRseKvvp.js";import{l as p,m as i,e as c}from"./index-BXV8zl86.js";const s="/v1/sip",f=p("sip",()=>{const o=i(),r=c({name:"",type:"endpoint",transport:"transport-udp",context:"",disallow:"all",allow:"ulaw",auth:{type:"auth",auth_type:"userpass",password:"",username:""},aors:{type:"aor",max_contacts:1}}),a=c([]);return{elements:a,element:r,save:async()=>{try{const e=await t.post(s,r.value);a.value===null&&(a.value=[]),a.value.push(e.data),await t.post("http://192.168.111.254/v2/sip",r.value),o.push({name:"sip"})}catch(e){console.error("Error saving sip:",e)}},update:async()=>{try{await t.put([s,r.value.id].join("/"),r.value),o.push({name:"sip"})}catch(e){console.error("Error updating scheme:",e)}},remove:async()=>{try{await t.delete([s,r.value.id].join("/")),o.push({name:"sip"})}catch(e){console.error("Error deleting sip:",e)}},fetchAll:async()=>{try{const e=await t.get(s);a.value=e.data}catch(e){console.error("Error fetching sip:",e)}},fetchOne:async e=>{try{const n=await t.get([s,e].join("/"));r.value=n.data}catch(n){console.error("Error fetching sip:",n)}}}});export{f as u};

import{i as o}from"./index-DRseKvvp.js";import{l as i,m as u,e as c}from"./index-BXV8zl86.js";const a="/v1/racks",f=i("rack",()=>{const n=u(),r=c({description:"",location:"",name:"",units:0}),t=c([]);return{elements:t,element:r,save:async()=>{try{const e=await o.post(a,r.value);t.value===null&&(t.value=[]),t.value.push(e.data),n.push({name:"rack"})}catch(e){console.error("Error saving category:",e)}},update:async()=>{try{await o.put([a,r.value.id].join("/"),r.value),n.push({name:"rack"})}catch(e){console.error("Error updating equipment-categories:",e)}},remove:async()=>{try{await o.delete([a,r.value.id].join("/")),n.push({name:"rack"})}catch(e){console.error("Error deleting equipment-categories:",e)}},fetchAll:async()=>{try{const e=await o.get(a);t.value=e.data}catch(e){console.error("Error fetching equipment-categories:",e)}},fetchOne:async e=>{try{const s=await o.get([a,e].join("/"));r.value=s.data}catch(s){console.error("Error fetching equipment-categories:",s)}}}});export{f as u};

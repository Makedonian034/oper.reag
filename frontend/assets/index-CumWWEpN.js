import{i as n}from"./index-DRseKvvp.js";import{l as i,m as u,e as c}from"./index-BXV8zl86.js";const o="/v1/equipments",q=i("equipment",()=>{const a=u(),r=c({equipment_categories_id:0,http:"",ip:"",model:"",name:"",racks_id:0,serial_number:"",ssh:"",warranties_id:0,rtsp:""}),t=c([]);return{elements:t,element:r,save:async()=>{try{const e=await n.post(o,r.value);t.value===null&&(t.value=[]),t.value.push(e.data),a.push({name:"equipment"})}catch(e){console.error("Error saving equipment:",e)}},update:async()=>{try{await n.put([o,r.value.id].join("/"),r.value),a.push({name:"equipment"})}catch(e){console.error("Error updating equipment:",e)}},remove:async()=>{try{await n.delete([o,r.value.id].join("/")),a.push({name:"equipment"})}catch(e){console.error("Error deleting equipment:",e)}},fetchAll:async()=>{try{const e=await n.get(o);t.value=e.data}catch(e){console.error("Error fetching equipment:",e)}},fetchOne:async e=>{try{const s=await n.get([o,e].join("/"));r.value=s.data}catch(s){console.error("Error fetching equipment:",s)}}}});export{q as u};

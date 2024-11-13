import{e as y,p as x,B as $,l as g}from"./index-BXV8zl86.js";import{i as h}from"./index-DRseKvvp.js";function q(i={minScale:.8,maxScale:2,zoomSpeed:.1}){const s=y({x:0,y:0,scale:1});let p=!1,d=0,a=0,l=1,e=null;const t=(c,v,_)=>Math.min(Math.max(c,v),_),n=c=>{p=!0,d=c.clientX-s.value.x,a=c.clientY-s.value.y},o=c=>{p&&(s.value.x=c.clientX-d,s.value.y=c.clientY-a)},r=()=>{p=!1},m=c=>{const v=c.deltaY,_=1-Math.sign(v)*i.zoomSpeed;l=t(s.value.scale*_,i.minScale,i.maxScale),e||(e=requestAnimationFrame(u))},u=()=>{const c=l-s.value.scale;Math.abs(c)>.001?(s.value.scale+=c*.15,e=requestAnimationFrame(u)):(s.value.scale=l,e=null)};return x(()=>{e&&cancelAnimationFrame(e)}),{state:$(s),startDrag:n,drag:o,endDrag:r,zoom:m}}const f="/v1/points",A=g("management",()=>{const i=y({equipment_categories_id:0,equipments_id:0,point_positions:{a:90,d:0,l:100,r:10,x:0,y:0},schemes_id:0}),s=y([]);return{element:i,elements:s,save:async()=>{try{const t=await h.post(f,i.value);s.value===null&&(s.value=[]),s.value.push(t.data);const{schemes_id:n,equipment_categories_id:o}=i.value;i.value={equipment_categories_id:o,equipments_id:0,point_positions:{a:90,d:0,l:100,r:10,x:0,y:0},schemes_id:n}}catch(t){console.error("Error saving scheme:",t)}},edit:()=>{},update:async t=>{try{const n=await h.put([f,t].join("/"),i.value),o=s.value.findIndex(r=>r.id===t);o!==-1&&(s.value[o]=n.data)}catch(n){console.error("Error updating schemes:",n)}},remove:async t=>{try{await h.delete([f,t].join("/"));const n=s.value.findIndex(m=>m.id===t);n!==-1&&s.value.splice(n,1);const{schemes_id:o,equipment_categories_id:r}=i.value;i.value={equipment_categories_id:r,equipments_id:0,point_positions:{a:90,d:0,l:100,r:10,x:0,y:0},schemes_id:o}}catch(n){console.error("Error removing scheme:",n)}},fetchAll:async()=>{try{const t=await h.get(f);s.value=t.data}catch(t){console.error("Error fetching schemes:",t)}}}});function w(){const i=a=>{const{d:l,l:e,a:t,r:n,x:o,y:r}=a.point_positions;if(t>=360)return`M ${o},${r} m -${e}, 0 a ${e},${e} 0 1,0 ${e*2},0 a ${e},${e} 0 1,0 -${e*2},0`;{const m=s(o,r,e,-t/2-90),u=s(o,r,e,t/2-90);return`M ${o},${r} L ${m.x},${m.y} A ${e},${e} 0 ${t<=180?"0":"1"},1 ${u.x},${u.y} Z`}},s=(a,l,e,t)=>{const n=t*Math.PI/180;return{x:a+e*Math.cos(n),y:l+e*Math.sin(n)}};return{path:i,polarToCartesian:s,transform:a=>`rotate(${a.point_positions.d*15} ${a.point_positions.x} ${a.point_positions.y})`,wheel:(a,l)=>{l.preventDefault();const{deltaY:e,ctrlKey:t,shiftKey:n}=l,o=Math.sign(e),r=1,m=5,u=5;a.point_positions&&(n?a.point_positions.l=Math.max(10,Math.min(200,(a.point_positions.l||100)-o*u)):t?a.point_positions.a=Math.max(0,Math.min(360,(a.point_positions.a||0)-o*m)):a.point_positions.d=((a.point_positions.d||0)-o*r+24)%24)}}}export{w as a,q as b,A as u};

"use strict";(self.webpackChunkplatform_frontend=self.webpackChunkplatform_frontend||[]).push([[246],{4246:(xt,R,m)=>{m.r(R),m.d(R,{KanbanModule:()=>St});var b=m(1368),et=m(9280),$=m(6716),s=m(4496),nt=m(7048);let k=(()=>{class e{constructor(t){this.http=t}updateTask(t){return this.http.put(`${$.O.apiUrl}/tasks/${t.id}/`,t,{headers:{}})}getTasks(){return this.http.get(`${$.O.apiUrl}/tasks`,{headers:{}})}static#t=this.\u0275fac=function(n){return new(n||e)(s.CoB(nt.KK))};static#e=this.\u0275prov=s.wxM({token:e,factory:e.\u0275fac})}return e})();var B=m(2531),F=m(1528),st=m(3616),it=m(6684),T=m(9212),ot=m(9336),p=m(5084),I=m(2820),at=m(9144),H=m(3480),h=m(4940);let d;const N=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&N.decode();let w=null;function U(){return(null===w||0===w.byteLength)&&(w=new Uint8Array(d.memory.buffer)),w}function W(e,o){return e>>>=0,N.decode(U().subarray(e,e+o))}const g=new Array(128).fill(void 0);g.push(void 0,null,!0,!1);let D=g.length;function Y(e){D===g.length&&g.push(g.length+1);const o=D;return D=g[o],g[o]=e,o}function C(e){return g[e]}let O=0;const L=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},lt="function"==typeof L.encodeInto?function(e,o){return L.encodeInto(e,o)}:function(e,o){const t=L.encode(e);return o.set(t),{read:e.length,written:t.length}};function J(e,o,t){if(void 0===t){const c=L.encode(e),l=o(c.length,1)>>>0;return U().subarray(l,l+c.length).set(c),O=c.length,l}let n=e.length,i=o(n,1)>>>0;const a=U();let r=0;for(;r<n;r++){const c=e.charCodeAt(r);if(c>127)break;a[i+r]=c}if(r!==n){0!==r&&(e=e.slice(r)),i=t(i,n,n=r+3*e.length,1)>>>0;const c=U().subarray(i+r,i+n);r+=lt(e,c).written,i=t(i,n,r,1)>>>0}return O=r,i}let S=null;function j(){return(null===S||0===S.byteLength)&&(S=new Int32Array(d.memory.buffer)),S}function E(){return(E=(0,F.c)(function*(e,o){if("function"==typeof Response&&e instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return yield WebAssembly.instantiateStreaming(e,o)}catch(n){if("application/wasm"==e.headers.get("Content-Type"))throw n;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",n)}const t=yield e.arrayBuffer();return yield WebAssembly.instantiate(t,o)}{const t=yield WebAssembly.instantiate(e,o);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}})).apply(this,arguments)}function Q(){const e={wbg:{}};return e.wbg.__wbindgen_string_new=function(o,t){return Y(W(o,t))},e.wbg.__wbindgen_object_drop_ref=function(o){!function ct(e){const o=C(e);return function rt(e){e<132||(g[e]=D,D=e)}(e),o}(o)},e.wbg.__wbg_log_5bb5f88f245d7762=function(o){console.log(C(o))},e.wbg.__wbg_log_1746d5c75ec89963=function(o,t){console.log(C(o),C(t))},e.wbg.__wbg_getTime_2bc4375165f02d15=function(o){return C(o).getTime()},e.wbg.__wbg_new0_7d84e5b2cd9fdc73=function(){return Y(new Date)},e.wbg.__wbindgen_throw=function(o,t){throw new Error(W(o,t))},e}function X(e){return G.apply(this,arguments)}function G(){return G=(0,F.c)(function*(e){if(void 0!==d)return d;typeof e>"u"&&(e=new URL("assign_kanban_tasks_bg.wasm","file:///Users/michamoll/Desktop/platform/platform-frontend/src/assets/wasm/assign_kanban_tasks.js"));const o=Q();("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:t,module:n}=yield function mt(e,o){return E.apply(this,arguments)}(yield e,o);return function z(e,o){return d=e.exports,X.__wbindgen_wasm_module=o,S=null,w=null,d}(t,n)}),G.apply(this,arguments)}const dt=X;function x(e){const o=new Date(e),t=new Date;return t.setHours(0,0,0,0),o.setHours(0,0,0,0),o.getDate()===t.getDate()&&o.getMonth()===t.getMonth()&&o.getFullYear()===t.getFullYear()}function M(e){const o=new Date(e),t=new Date;return t.setDate(t.getDate()+1),t.setHours(0,0,0,0),o.setHours(0,0,0,0),o.getDate()===t.getDate()&&o.getMonth()===t.getMonth()&&o.getFullYear()===t.getFullYear()}function A(e,o,t){const n=new Date(e),i=new Date(n.getFullYear(),n.getMonth(),n.getDate()),a=new Date,r=new Date(a.getFullYear(),a.getMonth(),a.getDate()),c=new Date(r);c.setDate(r.getDate()+o);const l=new Date(r);return l.setDate(r.getDate()+t),i>=c&&i<=l}function V(e){const o=new Date(e),t=new Date;return o.getTime()>t.getTime()}var u=function(e){return e.Today="today",e.Tomorrow="tomorrow",e.Soon="soon",e.Planned="planned",e.Todo="todo",e.Done="done",e.Cancelled="cancelled",e}(u||{});const Z=[{title:u.Today,tasks:[],events:[],habits:[]},{title:u.Tomorrow,tasks:[],events:[],habits:[]},{title:u.Soon,tasks:[],events:[],habits:[]},{title:u.Planned,tasks:[],events:[],habits:[]},{title:u.Todo,tasks:[],events:[],habits:[]},{title:u.Done,tasks:[],events:[],habits:[]},{title:u.Cancelled,tasks:[],events:[],habits:[]}];var _=m(9768),q=m(1308),tt=m(2940),ft=m(2640),K=m(6844);function ht(e,o){if(1&e){const t=s.KQA();s.I0R(0,"div",2)(1,"xx-column",3),s.qCj("onTaskUpdate",function(i){s.usT(t);const a=s.GaO();return s.CGJ(a.onTaskUpdate(i))})("onHabitUpdate",function(i){s.usT(t);const a=s.GaO();return s.CGJ(a.onHabitUpdate(i))}),s.C$Y()()}if(2&e){const t=o.$implicit;s.yG2(),s.E7m("column",t)}}let pt=(()=>{class e{constructor(t,n,i,a,r,c){this.apiService=t,this.pageTitleService=n,this.habitsApiService=i,this.eventsApiService=a,this.createEntityWidgetService=r,this.notificationsService=c,this.columnList=JSON.parse(JSON.stringify(Z)),this.columnTitles=Object.values(u),this.taskList=[],this.habitList=[],this.eventList=[],this.destroy$=(0,s.uUt)(H.UF)}ngOnInit(){this.pageTitleService.setPageTitle("kanban"),this.fetchData(),this.createEntityWidgetService.entityCreatedTrigger.pipe((0,st.a)(this.destroy$),(0,it.I)(t=>t),(0,T.y)(t=>{this.fetchData()})).subscribe()}fetchData(){this.notificationsService.showLoadingNotification(),(0,ot.y)({tasks:this.apiService.getTasks().pipe((0,p.K)(),(0,I.m)(5e3)),habits:this.habitsApiService.getHabits().pipe((0,p.K)(),(0,I.m)(5e3)),events:this.eventsApiService.getEvents().pipe((0,p.K)(),(0,I.m)(5e3))}).pipe((0,p.K)(),(0,T.y)(({tasks:t,habits:n,events:i})=>{this.notificationsService.closeLoadingNotification(),this.taskList=t,this.habitList=n,this.eventList=i,this.updateColumns()}),(0,at.a)(t=>(this.notificationsService.closeLoadingNotification(),t))).subscribe()}updateColumns(){const t=this.assignTasksToColumns(this.taskList,this.columnTitles),n=this.assignHabitsToColumns(t);this.columnList=this.assignEventsToColumns(n)}updateCollumns(){var t=this;return(0,F.c)(function*(){yield dt("/assets/wasm/assign_kanban_tasks_bg.wasm"),console.log("Before calling assign_tasks_to_columns");const n=t.taskList,i=t.columnTitles;console.log("Tasks:",n),console.log("ColumnTitles:",i);try{const a=JSON.stringify(n),r=JSON.stringify(i);console.log("After stringify");const c=function ut(e,o){let t,n;try{const r=d.__wbindgen_add_to_stack_pointer(-16),c=J(e,d.__wbindgen_malloc,d.__wbindgen_realloc),l=O,f=J(o,d.__wbindgen_malloc,d.__wbindgen_realloc);d.assign_tasks_to_columns(r,c,l,f,O);var i=j()[r/4+0],a=j()[r/4+1];return t=i,n=a,W(i,a)}finally{d.__wbindgen_add_to_stack_pointer(16),d.__wbindgen_free(t,n,1)}}(a,r);console.log("After calling assign_tasks_to_columns"),console.log("Columns:",c);const l=JSON.parse(c);t.columnList=t.assignHabitsToColumns(l)}catch(a){console.error("Error calling assign_tasks_to_columns:",a)}})()}assignHabitsToColumns(t){const n=[...t],i=this.habitList.filter(a=>a.status===h.sD.Active);return[u.Today].forEach(a=>{const r=n.find(c=>c.title===a);r&&(r.habits=i)}),n}assignEventsToColumns(t){const n=[...t];return this.eventList.forEach(i=>{let a=null;if(i.start_time&&x(i.start_time)&&V(i.end_time||i.start_time)?a=u.Today:i.start_time&&M(i.start_time)?a=u.Tomorrow:i.start_time&&A(i.start_time,2,5)?a=u.Soon:i.status===h.sD.Completed||i.status===h.sD.Cancelled?a=null:i.start_time&&!x(i.end_time||i.start_time)&&V(i.end_time||i.start_time)&&(a=u.Planned),a){const r=n.find(c=>c.title===a);r&&(r.events||(r.events=[]),r.events.push(i))}}),n}assignTasksToColumns(t,n){let i=JSON.parse(JSON.stringify(Z));return t.forEach(a=>{let r=null;if(a.due_date&&x(a.due_date)&&(r=u.Today),r||(r={[h.sD.Completed]:u.Done,[h.sD.Cancelled]:u.Cancelled}[a.status]||null),!r&&a.due_date&&(r=this.categorizeDueDate(a.due_date)),r||(r={[h.sD.Active]:u.Todo,[h.sD.Draft]:u.Todo,[h.sD.Described]:u.Todo}[a.status]||null),r){if(r!==u.Today&&r!==u.Tomorrow&&null!==a.challenge)return;const l=i.find(f=>f.title===r);l&&r===u.Today&&a.is_completed?l.tasks.push(a):l&&l.tasks.unshift(a)}}),i}categorizeDueDate(t){return t?x(t)?u.Today:M(t)?u.Tomorrow:A(t,2,5)?u.Soon:u.Planned:null}onTaskUpdate(t){this.fetchData()}onHabitUpdate(t){this.fetchData()}static#t=this.\u0275fac=function(n){return new(n||e)(s.GI1(k),s.GI1(_.M$),s.GI1(q.H),s.GI1(tt.E),s.GI1(ft.s),s.GI1(_.E3))};static#e=this.\u0275cmp=s.In1({type:e,selectors:[["xx-kanban"]],features:[s.M5G([H.UF])],decls:2,vars:1,consts:[[1,"flex","h-full"],["class","mr-3 w-[17.5rem]","aria-label","Column",4,"ngFor","ngForOf"],["aria-label","Column",1,"mr-3","w-[17.5rem]"],[3,"column","onTaskUpdate","onHabitUpdate"]],template:function(n,i){1&n&&(s.I0R(0,"div",0),s.yuY(1,ht,2,1,"div",1),s.C$Y()),2&n&&(s.yG2(),s.E7m("ngForOf",i.columnList))},dependencies:[b.ay,K.O]})}return e})();var P=m(5291);function gt(e,o){if(1&e){const t=s.KQA();s.I0R(0,"div",2)(1,"xx-column",3),s.qCj("onTaskUpdate",function(i){s.usT(t);const a=s.GaO();return s.CGJ(a.onTaskUpdate(i))}),s.C$Y()()}if(2&e){const t=o.$implicit;s.yG2(),s.E7m("sortByPriority",!0)("column",t)}}let yt=(()=>{class e{constructor(t,n){this.apiService=t,this.pageTitleService=n,this.columnList=[],this.taskList=[]}ngOnInit(){this.pageTitleService.setPageTitle("Kanban week"),this.getTasks()}getTasks(){this.apiService.getTasks().pipe((0,p.K)(),(0,T.y)(t=>{this.taskList=t,this.columnList=this.sortTasksForWeek(this.taskList)})).subscribe()}sortTasksForWeek(t){const n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],i=n.map(c=>(0,P.m)(c)),{start:a,end:r}=this.getCurrentWeekRange();return t.forEach(c=>{let l=c.start_date||c.due_date;if(l&&(l=new Date(l),this.isDateWithinWeek(l,a,r))){const f=n[l.getDay()];i.find(y=>y.title===f)?.tasks.push(c)}}),i}getCurrentWeekRange(){const t=new Date,n=t.getDay(),i=new Date(t);i.setDate(t.getDate()-n),i.setHours(0,0,0,0);const a=new Date(i);return a.setDate(i.getDate()+6),a.setHours(23,59,59,999),{start:i,end:a}}isDateWithinWeek(t,n,i){return t>=n&&t<=i}onTaskUpdate(t){this.apiService.updateTask(t).pipe((0,p.K)(),(0,T.y)(n=>{this.getTasks()})).subscribe()}static#t=this.\u0275fac=function(n){return new(n||e)(s.GI1(k),s.GI1(_.M$))};static#e=this.\u0275cmp=s.In1({type:e,selectors:[["xx-kanban-week"]],decls:2,vars:1,consts:[[1,"flex","h-full"],["class","mr-3 w-[17.5rem]","aria-label","Column",4,"ngFor","ngForOf"],["aria-label","Column",1,"mr-3","w-[17.5rem]"],[3,"sortByPriority","column","onTaskUpdate"]],template:function(n,i){1&n&&(s.I0R(0,"div",0),s.yuY(1,gt,2,2,"div",1),s.C$Y()),2&n&&(s.yG2(),s.E7m("ngForOf",i.columnList))},dependencies:[b.ay,K.O]})}return e})();function Tt(e,o){if(1&e){const t=s.KQA();s.I0R(0,"div",2)(1,"xx-column",3),s.qCj("onTaskUpdate",function(i){s.usT(t);const a=s.GaO();return s.CGJ(a.onTaskUpdate(i))}),s.C$Y()()}if(2&e){const t=o.$implicit;s.yG2(),s.E7m("column",t)("sortByPriority",!0)}}let bt=(()=>{class e{constructor(t,n){this.apiService=t,this.pageTitleService=n,this.columnList=[],this.taskList=[]}ngOnInit(){this.pageTitleService.setPageTitle("Kanban week upcoming"),this.getTasks()}getTasks(){this.apiService.getTasks().pipe((0,p.K)(),(0,T.y)(t=>{this.taskList=t,this.columnList=this.sortTasksForUpcomingWeek(this.taskList)})).subscribe()}sortTasksForUpcomingWeek(t){const{start:n,end:i}=this.getUpcomingWeekRange(),r=Array.from({length:7}).map((c,l)=>{const f=new Date(n);return f.setDate(n.getDate()+l),f.toLocaleDateString("en-US",{weekday:"long"})}).map(c=>({title:c,tasks:[],events:[],habits:[]}));return t.forEach(c=>{let l=c.start_date||c.due_date;if(l&&(l=new Date(l),l>=n&&l<=i)){const f=l.toLocaleDateString("en-US",{weekday:"long"});r.find(y=>y.title===f)?.tasks.push(c)}}),r}getUpcomingWeekRange(){const t=new Date;t.setHours(0,0,0,0);const n=new Date(t);return n.setDate(t.getDate()+6),n.setHours(23,59,59,999),{start:t,end:n}}isDateWithinWeek(t,n,i){return t>=n&&t<=i}onTaskUpdate(t){this.apiService.updateTask(t).pipe((0,p.K)(),(0,T.y)(n=>{this.getTasks()})).subscribe()}static#t=this.\u0275fac=function(n){return new(n||e)(s.GI1(k),s.GI1(_.M$))};static#e=this.\u0275cmp=s.In1({type:e,selectors:[["xx-kanban-week-upcoming"]],decls:2,vars:1,consts:[[1,"flex","h-full"],["class","mr-3 w-[17.5rem]","aria-label","Column",4,"ngFor","ngForOf"],["aria-label","Column",1,"mr-3","w-[17.5rem]"],[3,"column","sortByPriority","onTaskUpdate"]],template:function(n,i){1&n&&(s.I0R(0,"div",0),s.yuY(1,Tt,2,2,"div",1),s.C$Y()),2&n&&(s.yG2(),s.E7m("ngForOf",i.columnList))},dependencies:[b.ay,K.O]})}return e})();function kt(e,o){if(1&e){const t=s.KQA();s.I0R(0,"div",2)(1,"xx-column",3),s.qCj("onTaskUpdate",function(i){s.usT(t);const a=s.GaO();return s.CGJ(a.onTaskUpdate(i))}),s.C$Y()()}if(2&e){const t=o.$implicit;s.yG2(),s.E7m("column",t)}}let _t=(()=>{class e{constructor(t,n){this.apiService=t,this.pageTitleService=n,this.columnList=[],this.columnTitles=Object.values(h.WK).reverse(),this.taskList=[]}ngOnInit(){this.getTasks(),this.pageTitleService.setPageTitle("Kanban by Priority")}getTasks(){this.apiService.getTasks().pipe((0,p.K)(),(0,T.y)(t=>{this.taskList=this.filterOutChallengeTasks(t),this.columnList=this.sortTasksByPriorityAndStatus(this.taskList,this.columnTitles)})).subscribe()}filterOutChallengeTasks(t){return t.filter(n=>!n.challenge)}sortTasksByPriorityAndStatus(t,n){const i=n.map(a=>(0,P.m)(a));return t.forEach(a=>{const r=i.find(c=>c.title.toLowerCase()===a.priority);r&&r.tasks.push(a)}),i.forEach(a=>{a.tasks.sort((r,c)=>r.status.localeCompare(c.status))}),i}onTaskUpdate(t){this.getTasks()}static#t=this.\u0275fac=function(n){return new(n||e)(s.GI1(k),s.GI1(_.M$))};static#e=this.\u0275cmp=s.In1({type:e,selectors:[["xx-kanban-by-priority"]],decls:2,vars:1,consts:[[1,"flex","h-full"],["class","mr-3 w-[17.5rem]","aria-label","Column",4,"ngFor","ngForOf"],["aria-label","Column",1,"mr-3","w-[17.5rem]"],[3,"column","onTaskUpdate"]],template:function(n,i){1&n&&(s.I0R(0,"div",0),s.yuY(1,kt,2,1,"div",1),s.C$Y()),2&n&&(s.yG2(),s.E7m("ngForOf",i.columnList))},dependencies:[b.ay,K.O]})}return e})();var vt=m(7570);function wt(e,o){if(1&e){const t=s.KQA();s.I0R(0,"div",2)(1,"xx-column",3),s.qCj("onTaskUpdate",function(i){s.usT(t);const a=s.GaO();return s.CGJ(a.onTaskUpdate(i))}),s.C$Y()()}if(2&e){const t=o.$implicit;s.yG2(),s.E7m("column",t)}}const Dt=[{path:"",component:pt},{path:"week",component:yt},{path:"week-upcoming",component:bt},{path:"by-priority",component:_t},{path:"by-priority-2",component:(()=>{class e{constructor(t,n){this.apiService=t,this.pageTitleService=n,this.columnList=[],this.columnTitles=["First","Next","Soon","Planned","Draft","Done","Cancelled"],this.taskList=[]}ngOnInit(){this.getTasks(),this.pageTitleService.setPageTitle("Kanban by Priority 2")}getTasks(){this.apiService.getTasks().pipe((0,p.K)(),(0,T.y)(t=>{this.taskList=t.filter(n=>!n.challenge),this.columnList=this.sortTasksByPriority(this.taskList,this.columnTitles)})).subscribe()}sortTasksByPriority(t,n){const i=n.map(r=>(0,P.m)(r));return(0,vt.ek)(t,"asc").forEach(r=>{let c=this.mapStatusToColumnKey(r.status);if(c||(c=this.mapDueDateToColumnKey(r.due_date)),c){const l=i.find(f=>f.title===c);l&&l.tasks.push(r)}else{const l=i.find(y=>"First"===y.title),f=i.find(y=>"Next"===y.title),v=i.find(y=>"Soon"===y.title);l&&l.tasks.length<10?l.tasks.push(r):f&&f.tasks.length<10?f.tasks.push(r):v&&v.tasks.push(r)}}),i}mapStatusToColumnKey(t){return{[h.sD.Completed]:"Done",[h.sD.Cancelled]:"Cancelled",[h.sD.Draft]:"Draft"}[t]||null}mapDueDateToColumnKey(t){return t?this.categorizeDueDate(t):null}categorizeDueDate(t){return t?x(t)?"First":M(t)?"Next":A(t,2,5)?"Soon":"Planned":null}onTaskUpdate(t){this.getTasks()}static#t=this.\u0275fac=function(n){return new(n||e)(s.GI1(k),s.GI1(_.M$))};static#e=this.\u0275cmp=s.In1({type:e,selectors:[["xx-kanban-by-priority-2"]],decls:2,vars:1,consts:[[1,"flex","h-full"],["class","mr-3 w-[17.5rem]","aria-label","Column",4,"ngFor","ngForOf"],["aria-label","Column",1,"mr-3","w-[17.5rem]"],[3,"column","onTaskUpdate"]],template:function(n,i){1&n&&(s.I0R(0,"div",0),s.yuY(1,wt,2,1,"div",1),s.C$Y()),2&n&&(s.yG2(),s.E7m("ngForOf",i.columnList))},dependencies:[b.ay,K.O]})}return e})()},{path:"**",redirectTo:"/kanban",pathMatch:"full"}];let Ct=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=s.a4G({type:e});static#n=this.\u0275inj=s.s3X({imports:[B.qQ.forChild(Dt),B.qQ]})}return e})(),St=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=s.a4G({type:e});static#n=this.\u0275inj=s.s3X({providers:[k,q.H,tt.E],imports:[b.MD,Ct,et.k]})}return e})()}}]);
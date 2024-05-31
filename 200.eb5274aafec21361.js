"use strict";(self.webpackChunkplatform_frontend=self.webpackChunkplatform_frontend||[]).push([[200],{4200:(j,b,m)=>{m.r(b),m.d(b,{KanbanModule:()=>R});var g=m(1368),F=m(5132),K=m(6716),e=m(4496),U=m(7048);let T=(()=>{class s{constructor(t){this.http=t}updateTask(t){return this.http.put(`${K.O.apiUrl}/tasks/${t.id}/`,t,{headers:{}})}getTasks(){return this.http.get(`${K.O.apiUrl}/tasks`,{headers:{}})}static#t=this.\u0275fac=function(n){return new(n||s)(e.CoB(U.KK))};static#e=this.\u0275prov=e.wxM({token:s,factory:s.\u0275fac})}return s})();var w=m(2531),f=m(5084),y=m(9212),d=m(4940);function C(s){const l=new Date(s),t=new Date;return t.setHours(0,0,0,0),l.setHours(0,0,0,0),l.getDate()===t.getDate()&&l.getMonth()===t.getMonth()&&l.getFullYear()===t.getFullYear()}function x(s){const l=new Date(s),t=new Date;return t.setDate(t.getDate()+1),t.setHours(0,0,0,0),l.setHours(0,0,0,0),l.getDate()===t.getDate()&&l.getMonth()===t.getMonth()&&l.getFullYear()===t.getFullYear()}function S(s,l,t){const n=new Date(s),a=new Date(n.getFullYear(),n.getMonth(),n.getDate()),o=new Date,i=new Date(o.getFullYear(),o.getMonth(),o.getDate()),c=new Date(i);c.setDate(i.getDate()+l);const r=new Date(i);return r.setDate(i.getDate()+t),a>=c&&a<=r}var k=m(5312),D=m(6844);function _(s,l){if(1&s){const t=e.KQA();e.I0R(0,"div",2)(1,"xx-column",3),e.qCj("onTaskUpdate",function(a){e.usT(t);const o=e.GaO();return e.CGJ(o.onTaskUpdate(a))}),e.C$Y()()}if(2&s){const t=l.$implicit;e.yG2(),e.E7m("column",t)}}var u=function(s){return s.Today="today",s.Tomorrow="tomorrow",s.Soon="soon",s.Planned="planned",s.Todo="todo",s.Done="done",s.Cancelled="cancelled",s}(u||{});let L=(()=>{class s{constructor(t,n){this.apiService=t,this.pageTitleService=n,this.columnList=[],this.columnTitles=Object.values(u),this.taskList=[]}ngOnInit(){this.getTasks(),this.pageTitleService.setPageTitle("kanban")}getTasks(){this.apiService.getTasks().pipe((0,f.K)(),(0,y.y)(t=>{this.taskList=t,this.columnList=this.sortTasksByColumns(this.taskList,this.columnTitles)})).subscribe()}sortTasksByColumns(t,n){const a=n.map(o=>({title:o,events:[],tasks:[]}));return t.forEach(o=>{let i=null;if(o.due_date&&C(o.due_date)&&(i=u.Today),i||(i={[d.sD.Completed]:u.Done,[d.sD.Cancelled]:u.Cancelled}[o.status]||null),!i&&o.due_date&&(i=this.categorizeDueDate(o.due_date)),i||(i={[d.sD.Active]:u.Todo,[d.sD.Draft]:u.Todo,[d.sD.Described]:u.Todo}[o.status]||null),i){if(i!==u.Today&&i!==u.Tomorrow&&null!==o.challenge)return;const r=a.find(p=>p.title===i);r&&i===u.Today&&o.is_completed?r.tasks.push(o):r&&r.tasks.unshift(o)}}),a}categorizeDueDate(t){return t?C(t)?u.Today:x(t)?u.Tomorrow:S(t,2,5)?u.Soon:u.Planned:null}onTaskUpdate(t){this.getTasks()}static#t=this.\u0275fac=function(n){return new(n||s)(e.GI1(T),e.GI1(k.M$))};static#e=this.\u0275cmp=e.In1({type:s,selectors:[["xx-kanban"]],decls:2,vars:1,consts:[[1,"flex","h-full"],["class","mr-3 w-[17.5rem]","aria-label","Column",4,"ngFor","ngForOf"],["aria-label","Column",1,"mr-3","w-[17.5rem]"],[3,"column","onTaskUpdate"]],template:function(n,a){1&n&&(e.I0R(0,"div",0),e.yuY(1,_,2,1,"div",1),e.C$Y()),2&n&&(e.yG2(),e.E7m("ngForOf",a.columnList))},dependencies:[g.ay,D.O]})}return s})();function O(s,l){if(1&s){const t=e.KQA();e.I0R(0,"div",2)(1,"xx-column",3),e.qCj("onTaskUpdate",function(a){e.usT(t);const o=e.GaO();return e.CGJ(o.onTaskUpdate(a))}),e.C$Y()()}if(2&s){const t=l.$implicit;e.yG2(),e.E7m("sortByPriority",!0)("column",t)}}let G=(()=>{class s{constructor(t,n){this.apiService=t,this.pageTitleService=n,this.columnList=[],this.taskList=[]}ngOnInit(){this.pageTitleService.setPageTitle("Kanban week"),this.getTasks()}getTasks(){this.apiService.getTasks().pipe((0,f.K)(),(0,y.y)(t=>{this.taskList=t,this.columnList=this.sortTasksForWeek(this.taskList)})).subscribe()}sortTasksForWeek(t){const n=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],a=n.map(c=>({title:c,tasks:[],events:[]})),{start:o,end:i}=this.getCurrentWeekRange();return t.forEach(c=>{let r=c.start_date||c.due_date;if(r&&(r=new Date(r),this.isDateWithinWeek(r,o,i))){const p=n[r.getDay()];a.find(h=>h.title===p)?.tasks.push(c)}}),a}getCurrentWeekRange(){const t=new Date,n=t.getDay(),a=new Date(t);a.setDate(t.getDate()-n),a.setHours(0,0,0,0);const o=new Date(a);return o.setDate(a.getDate()+6),o.setHours(23,59,59,999),{start:a,end:o}}isDateWithinWeek(t,n,a){return t>=n&&t<=a}onTaskUpdate(t){this.apiService.updateTask(t).pipe((0,f.K)(),(0,y.y)(n=>{this.getTasks()})).subscribe()}static#t=this.\u0275fac=function(n){return new(n||s)(e.GI1(T),e.GI1(k.M$))};static#e=this.\u0275cmp=e.In1({type:s,selectors:[["xx-kanban-week"]],decls:2,vars:1,consts:[[1,"flex","h-full"],["class","mr-3 w-[17.5rem]","aria-label","Column",4,"ngFor","ngForOf"],["aria-label","Column",1,"mr-3","w-[17.5rem]"],[3,"sortByPriority","column","onTaskUpdate"]],template:function(n,a){1&n&&(e.I0R(0,"div",0),e.yuY(1,O,2,2,"div",1),e.C$Y()),2&n&&(e.yG2(),e.E7m("ngForOf",a.columnList))},dependencies:[g.ay,D.O]})}return s})();function I(s,l){if(1&s){const t=e.KQA();e.I0R(0,"div",2)(1,"xx-column",3),e.qCj("onTaskUpdate",function(a){e.usT(t);const o=e.GaO();return e.CGJ(o.onTaskUpdate(a))}),e.C$Y()()}if(2&s){const t=l.$implicit;e.yG2(),e.E7m("column",t)("sortByPriority",!0)}}let P=(()=>{class s{constructor(t,n){this.apiService=t,this.pageTitleService=n,this.columnList=[],this.taskList=[]}ngOnInit(){this.pageTitleService.setPageTitle("Kanban week upcoming"),this.getTasks()}getTasks(){this.apiService.getTasks().pipe((0,f.K)(),(0,y.y)(t=>{this.taskList=t,this.columnList=this.sortTasksForUpcomingWeek(this.taskList)})).subscribe()}sortTasksForUpcomingWeek(t){const{start:n,end:a}=this.getUpcomingWeekRange(),i=Array.from({length:7}).map((c,r)=>{const p=new Date(n);return p.setDate(n.getDate()+r),p.toLocaleDateString("en-US",{weekday:"long"})}).map(c=>({title:c,tasks:[],events:[]}));return t.forEach(c=>{let r=c.start_date||c.due_date;if(r&&(r=new Date(r),r>=n&&r<=a)){const p=r.toLocaleDateString("en-US",{weekday:"long"});i.find(h=>h.title===p)?.tasks.push(c)}}),i}getUpcomingWeekRange(){const t=new Date;t.setHours(0,0,0,0);const n=new Date(t);return n.setDate(t.getDate()+6),n.setHours(23,59,59,999),{start:t,end:n}}isDateWithinWeek(t,n,a){return t>=n&&t<=a}onTaskUpdate(t){this.apiService.updateTask(t).pipe((0,f.K)(),(0,y.y)(n=>{this.getTasks()})).subscribe()}static#t=this.\u0275fac=function(n){return new(n||s)(e.GI1(T),e.GI1(k.M$))};static#e=this.\u0275cmp=e.In1({type:s,selectors:[["xx-kanban-week-upcoming"]],decls:2,vars:1,consts:[[1,"flex","h-full"],["class","mr-3 w-[17.5rem]","aria-label","Column",4,"ngFor","ngForOf"],["aria-label","Column",1,"mr-3","w-[17.5rem]"],[3,"column","sortByPriority","onTaskUpdate"]],template:function(n,a){1&n&&(e.I0R(0,"div",0),e.yuY(1,I,2,2,"div",1),e.C$Y()),2&n&&(e.yG2(),e.E7m("ngForOf",a.columnList))},dependencies:[g.ay,D.O]})}return s})();function W(s,l){if(1&s){const t=e.KQA();e.I0R(0,"div",2)(1,"xx-column",3),e.qCj("onTaskUpdate",function(a){e.usT(t);const o=e.GaO();return e.CGJ(o.onTaskUpdate(a))}),e.C$Y()()}if(2&s){const t=l.$implicit;e.yG2(),e.E7m("column",t)}}let M=(()=>{class s{constructor(t,n){this.apiService=t,this.pageTitleService=n,this.columnList=[],this.columnTitles=Object.values(d.WK).reverse(),this.taskList=[]}ngOnInit(){this.getTasks(),this.pageTitleService.setPageTitle("Kanban by Priority")}getTasks(){this.apiService.getTasks().pipe((0,f.K)(),(0,y.y)(t=>{this.taskList=this.filterOutChallengeTasks(t),this.columnList=this.sortTasksByPriorityAndStatus(this.taskList,this.columnTitles)})).subscribe()}filterOutChallengeTasks(t){return t.filter(n=>!n.challenge)}sortTasksByPriorityAndStatus(t,n){const a=n.map(o=>({title:o,events:[],tasks:[]}));return t.forEach(o=>{const i=a.find(c=>c.title.toLowerCase()===o.priority);i&&i.tasks.push(o)}),a.forEach(o=>{o.tasks.sort((i,c)=>i.status.localeCompare(c.status))}),a}onTaskUpdate(t){this.getTasks()}static#t=this.\u0275fac=function(n){return new(n||s)(e.GI1(T),e.GI1(k.M$))};static#e=this.\u0275cmp=e.In1({type:s,selectors:[["xx-kanban-by-priority"]],decls:2,vars:1,consts:[[1,"flex","h-full"],["class","mr-3 w-[17.5rem]","aria-label","Column",4,"ngFor","ngForOf"],["aria-label","Column",1,"mr-3","w-[17.5rem]"],[3,"column","onTaskUpdate"]],template:function(n,a){1&n&&(e.I0R(0,"div",0),e.yuY(1,W,2,1,"div",1),e.C$Y()),2&n&&(e.yG2(),e.E7m("ngForOf",a.columnList))},dependencies:[g.ay,D.O]})}return s})();var $=m(6724);function Y(s,l){if(1&s){const t=e.KQA();e.I0R(0,"div",2)(1,"xx-column",3),e.qCj("onTaskUpdate",function(a){e.usT(t);const o=e.GaO();return e.CGJ(o.onTaskUpdate(a))}),e.C$Y()()}if(2&s){const t=l.$implicit;e.yG2(),e.E7m("column",t)}}const B=[{path:"",component:L},{path:"week",component:G},{path:"week-upcoming",component:P},{path:"by-priority",component:M},{path:"by-priority-2",component:(()=>{class s{constructor(t,n){this.apiService=t,this.pageTitleService=n,this.columnList=[],this.columnTitles=["First","Next","Soon","Planned","Draft","Done","Cancelled"],this.taskList=[]}ngOnInit(){this.getTasks(),this.pageTitleService.setPageTitle("Kanban by Priority 2")}getTasks(){this.apiService.getTasks().pipe((0,f.K)(),(0,y.y)(t=>{this.taskList=t.filter(n=>!n.challenge),this.columnList=this.sortTasksByPriority(this.taskList,this.columnTitles)})).subscribe()}sortTasksByPriority(t,n){const a=n.map(i=>({title:i,events:[],tasks:[]}));return(0,$.ek)(t,"asc").forEach(i=>{let c=this.mapStatusToColumnKey(i.status);if(c||(c=this.mapDueDateToColumnKey(i.due_date)),c){const r=a.find(p=>p.title===c);r&&r.tasks.push(i)}else{const r=a.find(h=>"First"===h.title),p=a.find(h=>"Next"===h.title),v=a.find(h=>"Soon"===h.title);r&&r.tasks.length<10?r.tasks.push(i):p&&p.tasks.length<10?p.tasks.push(i):v&&v.tasks.push(i)}}),a}mapStatusToColumnKey(t){return{[d.sD.Completed]:"Done",[d.sD.Cancelled]:"Cancelled",[d.sD.Draft]:"Draft"}[t]||null}mapDueDateToColumnKey(t){return t?this.categorizeDueDate(t):null}categorizeDueDate(t){return t?C(t)?"First":x(t)?"Next":S(t,2,5)?"Soon":"Planned":null}onTaskUpdate(t){this.getTasks()}static#t=this.\u0275fac=function(n){return new(n||s)(e.GI1(T),e.GI1(k.M$))};static#e=this.\u0275cmp=e.In1({type:s,selectors:[["xx-kanban-by-priority-2"]],decls:2,vars:1,consts:[[1,"flex","h-full"],["class","mr-3 w-[17.5rem]","aria-label","Column",4,"ngFor","ngForOf"],["aria-label","Column",1,"mr-3","w-[17.5rem]"],[3,"column","onTaskUpdate"]],template:function(n,a){1&n&&(e.I0R(0,"div",0),e.yuY(1,Y,2,1,"div",1),e.C$Y()),2&n&&(e.yG2(),e.E7m("ngForOf",a.columnList))},dependencies:[g.ay,D.O]})}return s})()},{path:"**",redirectTo:"/kanban",pathMatch:"full"}];let E=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275mod=e.a4G({type:s});static#n=this.\u0275inj=e.s3X({imports:[w.qQ.forChild(B),w.qQ]})}return s})(),R=(()=>{class s{static#t=this.\u0275fac=function(n){return new(n||s)};static#e=this.\u0275mod=e.a4G({type:s});static#n=this.\u0275inj=e.s3X({providers:[T],imports:[g.MD,E,F.k]})}return s})()}}]);
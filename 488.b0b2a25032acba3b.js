"use strict";(self.webpackChunkplatform_frontend=self.webpackChunkplatform_frontend||[]).push([[488],{488:(Ht,D,l)=>{l.r(D),l.d(D,{StatsModule:()=>Lt});var u=l(1368),I=l(2531),f=l(1316),M=l(4704),v=l(5084),_=l(9212),N=l(5944),Y=l(8016),p=l(400),z=l(4680),C=l(9392),h=l(4940),O=l(7072),P=l(1308),e=l(4496),y=l(6716),j=l(7048);let S=(()=>{class i{constructor(t){this.http=t}getTasks(){return this.http.get(`${y.O.apiUrl}/tasks`,{headers:{}})}getChallenges(){return this.http.get(`${y.O.apiUrl}/challenges`,{headers:{}})}getGoals(){return this.http.get(`${y.O.apiUrl}/goals`,{headers:{}})}static#t=this.\u0275fac=function(n){return new(n||i)(e.CoB(j.KK))};static#e=this.\u0275prov=e.wxM({token:i,factory:i.\u0275fac})}return i})();var B=l(5312),G=l(396),w=l(8820);const L=["#57d9a3","#4cabce","#03c7e6","#006699","#8777d9","#ff7452","#003366","#2584ff"];var H=l(9104);const V=["chart"];function X(i,a){if(1&i){const t=e.KQA();e.I0R(0,"div",6),e.qCj("mouseover",function(){const r=e.usT(t).$implicit,c=e.GaO();return e.CGJ(c.toggleSeries(r.name))}),e.I0R(1,"div",7),e.wVc(2,"tuiMapper"),e.C$Y(),e.I0R(3,"div",5)(4,"span"),e.OEk(5),e.C$Y(),e.I0R(6,"span"),e.OEk(7),e.C$Y()()()}if(2&i){const t=a.$implicit,n=a.index,o=e.GaO();e.yG2(),e.m4B("background-color",e.g7$(2,4,n,o.getColorByIndex)),e.yG2(4),e.cNF(t.name),e.yG2(2),e.cNF(t.value)}}let U=(()=>{class i{constructor(){this.colors=L}set dataSeries(t){this._dataSeries=t,this.updateChartOptions()}set chartName(t){this._chartName=t}get dataSeries(){return this._dataSeries}get chartName(){return this._chartName}getColorByIndex(t){const n=L;if(t<0||t>=n.length)throw new Error("Index out of range");return n[t]}get totalValue(){return this._dataSeries.reduce((t,n)=>t+n.value,0)}ngAfterViewInit(){this.chartInstance=w.init(this.chartElement.nativeElement)}toggleSeries(t){this._dataSeries.forEach(n=>{n.name!==t&&this.chartInstance.dispatchAction({type:"downplay",name:n.name})}),this.chartInstance.dispatchAction({type:"highlight",name:t})}updateChartOptions(){this.chartInstance&&this._dataSeries&&(this.chartInstance.setOption(this.getChartOptions()),this.chartInstance.dispatchAction({type:"highlight",name:this._dataSeries[0]?.name}))}getChartOptions(){return{legend:{show:!1,orient:"vertical",left:"right"},series:[{color:this.colors,data:this._dataSeries.map(({name:t,value:n})=>({name:t,value:n})),name:this._chartName,type:"pie",radius:["50%","90%"],avoidLabelOverlap:!1,label:{show:!1,position:"center",formatter:"{c}\n{b}",color:"#333",fontSize:15},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold",color:"#9ca3af"}},labelLine:{show:!0}}]}}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=e.In1({type:i,selectors:[["xx-donut-chart"]],viewQuery:function(n,o){if(1&n&&e.CC$(V,5),2&n){let r;e.wto(r=e.Gqi())&&(o.chartElement=r.first)}},inputs:{dataSeries:"dataSeries",chartName:"chartName"},decls:10,vars:2,consts:[[1,"flex","items-center"],[1,"w-1/2",2,"height","300px"],["chart",""],[1,"flex","flex-col","gap-2","w-1/2","px-4","font-bold","text-sm"],["class","flex gap-1 items-center hover:bg-gray-700/50 hover:text-slate-100 px-1 py-0.5 rounded cursor-pointer",3,"mouseover",4,"ngFor","ngForOf"],[1,"flex","grow","justify-between"],[1,"flex","gap-1","items-center","hover:bg-gray-700/50","hover:text-slate-100","px-1","py-0.5","rounded","cursor-pointer",3,"mouseover"],[1,"h-4","w-4","rounded"]],template:function(n,o){1&n&&(e.I0R(0,"div",0),e.wR5(1,"div",1,2),e.I0R(3,"div",3),e.yuY(4,X,8,7,"div",4),e.I0R(5,"div",5)(6,"span"),e.OEk(7,"Total"),e.C$Y(),e.I0R(8,"span"),e.OEk(9),e.C$Y()()()()),2&n&&(e.yG2(4),e.E7m("ngForOf",o.dataSeries),e.yG2(5),e.cNF(o.totalValue))},dependencies:[u.ay,H.M],styles:["[_nghost-%COMP%]{width:100%}"]})}return i})();const Z=["chart"];let Q=(()=>{class i{set dataSeries(t){this._dataSeries=t,this.updateChartOptions()}get chartOptions(){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{left:"0%",right:"0%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:this._dataSeries.map(({name:t})=>t),axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"Tasks",type:"bar",barWidth:"60%",data:this._dataSeries.map(({value:t})=>t)}]}}ngAfterViewInit(){this.initializeChart()}updateChartOptions(){this.chartInstance&&this._dataSeries&&(this.chartInstance.setOption(this.chartOptions),this.chartInstance.resize())}initializeChart(){this.chartInstance=w.init(this.chartContainer.nativeElement),this.chartInstance.setOption(this.chartOptions),this.chartInstance.resize(),window.addEventListener("resize",()=>{this.chartInstance.resize()})}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=e.In1({type:i,selectors:[["xx-bar-chart"]],viewQuery:function(n,o){if(1&n&&e.CC$(Z,5),2&n){let r;e.wto(r=e.Gqi())&&(o.chartContainer=r.first)}},inputs:{dataSeries:"dataSeries"},decls:2,vars:0,consts:[[2,"width","100%","height","300px"],["chart",""]],template:function(n,o){1&n&&e.wR5(0,"div",0,1)},styles:["[_nghost-%COMP%]{display:block;width:100%}"]})}return i})();var k=l(2064);class m{get value(){return this.computeValue(this.range)}get points(){return[[1,4],[2,3],[3,1],[4,0],[5,9]]}constructor(a,t,n,o,r,c,s){this.months$=a,this.isE2E=t,this.apiService=n,this.tasksApiService=o,this.dialogService=r,this.pageTitleService=c,this.habitsApiService=s,this.tasksDone=0,this.tasksTotal=0,this.tasksTodo=0,this.tasksOverdue=0,this.challengesData={total:0,done:0},this.goalsData={total:0,done:0},this.recentTasksData=[],this.taskByTagsData=[],this.recentHabitsData=[],this.chartValue=[],this.viewMode="month",this.range=new p.Se(p.EK.currentLocal().append({day:-7}),p.EK.currentLocal()),this.maxLength={month:12},this.xStringify$=this.months$.pipe((0,M.k)(d=>({month:g,day:b})=>`${d[g]}, ${b}`)),this.yStringify=d=>`${(10*d).toLocaleString("en-US",{maximumFractionDigits:0})} $`}ngOnInit(){this.pageTitleService.setPageTitle("summary"),this.initTasksData(),this.setTasksReportViewMode(this.viewMode),this.initChallengesData(),this.initGoalsData(),this.initHabitsData()}showDialog(){this.dialogService.open("<div>This is a plain string dialog.</div>It supports basic <strong>HTML</strong>",{label:"Heading",size:"s"}).subscribe()}initChallengesData(){this.apiService.getChallenges().pipe((0,v.K)(),(0,_.y)(a=>{this.challengesData.total=a.length,this.challengesData.done=a.filter(t=>t.status===h.sD.Completed).length})).subscribe()}initGoalsData(){this.apiService.getGoals().pipe((0,v.K)(),(0,_.y)(a=>{this.goalsData.total=a.length,this.goalsData.done=a.filter(t=>t.status===h.sD.Completed).length})).subscribe()}initHabitsData(){this.habitsApiService.getHabits().pipe((0,v.K)(),(0,_.y)(a=>{this.recentHabitsData=this.aggregateHabitsByResolvedDate(a)})).subscribe()}initTasksData(){this.tasksApiService.getTasks().pipe((0,v.K)(),(0,_.y)(a=>{this.tasksTotal=a.length,this.tasksDone=a.filter(t=>t.status===h.sD.Completed||t.status===h.sD.Archived).length,this.tasksTodo=a.filter(t=>t.status===h.sD.Described||t.status===h.sD.Active).length,this.tasksOverdue=a.filter(t=>t.due_date&&new Date(t.due_date)<new Date&&t.status===h.sD.Active).length,this.chartValue=[{name:"Done",value:a.filter(t=>t.status===h.sD.Completed).length},{name:"Archived",value:a.filter(t=>t.status===h.sD.Archived).length},{name:"Active",value:a.filter(t=>t.status===h.sD.Active).length},{name:"Described",value:a.filter(t=>t.status===h.sD.Described).length},{name:"Draft",value:a.filter(t=>t.status===h.sD.Draft).length},{name:"Cancelled",value:a.filter(t=>t.status===h.sD.Cancelled).length}]})).subscribe()}setTasksReportViewMode(a){this.viewMode=a;const t="week"===a?7:30,n=p.EK.currentLocal().append({day:-t}).toString("YMD","-"),o=p.EK.currentLocal().toString("YMD","-");this.setRecentTasksData(n,o,t)}setRecentTasksData(a,t,n=7){this.tasksApiService.getTasks({resolvedDateAfter:a,resolvedDateBefore:t}).pipe((0,v.K)(),(0,_.y)(o=>{this.recentTasksData=this.aggregateTasksByResolvedDate(o,n),this.taskByTagsData=this.aggregateTasksByTags(o)})).subscribe()}computeLabels$({from:a,to:t}){return this.months$.pipe((0,M.k)(n=>Array.from({length:p.Ci.lengthBetween(a,t)+1},(o,r)=>n[a.append({month:r}).month])))}computeValue({from:a,to:t}){return new Array(p.EK.lengthBetween(a,t)+1).fill(0).reduce((n,o,r)=>[...n,[a.append({day:r}),this.isE2E?100:(r?n[r-1][1]:100)+10*Math.random()-5]],[])}getWidth({from:a,to:t}){return p.EK.lengthBetween(a,t)}aggregateHabitsByResolvedDate(a){const t={};return a.forEach(o=>{o.weekly_completions.forEach(([r,c])=>{c&&(t[r]||(t[r]=0),t[r]++)})}),Object.keys(t).map(o=>({name:o,value:t[o]}))}aggregateTasksByResolvedDate(a,t){console.log({daysBack:t});const n=new Date,o=Array.from({length:t}).map((c,s)=>new Date(n.getFullYear(),n.getMonth(),n.getDate()-s)).reverse(),r=o.reduce((c,s)=>(c[s.toLocaleDateString("en-US",{month:"short",day:"numeric"})]=0,c),{});return a.filter(c=>c.resolved_date).forEach(c=>{const s=new Date(c.resolved_date),d=s.toLocaleDateString("en-US",{month:"short",day:"numeric"});o.some(g=>g.toLocaleDateString()===s.toLocaleDateString())&&d in r&&r[d]++}),Object.entries(r).map(([c,s])=>({name:c,value:s})).sort((c,s)=>new Date(c.name)>new Date(s.name)?1:-1)}aggregateTasksByTags(a){const t={};return a.forEach(n=>{n.tags.forEach(o=>{o.title in t?t[o.title].count++:t[o.title]={count:1,color:o.color}})}),Object.entries(t).map(([n,o])=>({name:n,value:o.count,color:o.color}))}static#t=this.\u0275fac=function(t){return new(t||m)(e.GI1(N.GU),e.GI1(z.Af),e.GI1(S),e.GI1(O.e),e.GI1(Y._k),e.GI1(B.M$),e.GI1(P.H))};static#e=this.\u0275cmp=e.In1({type:m,selectors:[["xx-stats"]],features:[e.M5G([O.e,P.H])],decls:81,vars:39,consts:[[1,"text-gray-600","dark:text-gray-400"],[1,"flex","justify-between","gap-4"],[1,"flex","grow","w-1/4","gap-3","items-center","bg-white","dark:bg-slate-900","rounded-2xl","p-6"],[1,"flex","justify-center","items-center","h-10","w-10","rounded-full","bg-green-300","text-green-700","dark:bg-green-900","dark:text-green-300"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"w-6","h-6"],["fill-rule","evenodd","d","M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z","clip-rule","evenodd"],[1,"text-xl","font-bold","text-green-700","dark:text-green-300","lowercase"],[1,"text-sm","font-semibold","text-slate-500"],[1,"flex","justify-center","items-center","h-10","w-10","rounded-full","bg-blue-300","text-blue-700","dark:bg-blue-900","dark:text-blue-300"],["fill-rule","evenodd","d","M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z","clip-rule","evenodd"],[1,"text-xl","font-bold","text-blue-700","dark:text-blue-300","lowercase"],[1,"flex","justify-center","items-center","h-10","w-10","rounded-full","bg-purple-300","text-purple-700","dark:bg-purple-900","dark:text-purple-300"],["fill-rule","evenodd","d","M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z","clip-rule","evenodd"],[1,"text-xl","font-bold","text-purple-700","dark:text-purple-300","lowercase"],[1,"flex","justify-center","items-center","h-10","w-10","rounded-full","bg-red-300","text-red-700","dark:bg-red-900","dark:text-red-300"],["d","M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"],["fill-rule","evenodd","d","M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z","clip-rule","evenodd"],[1,"text-xl","font-bold","text-red-700","dark:text-red-300","lowercase"],[1,"my-4"],[1,"flex","flex-col","grow","w-1/2","gap-3","bg-white","dark:bg-slate-900","rounded-2xl","p-6"],[1,"text-md","font-semibold"],[1,"flex","mt-2","justify-center","items-center"],[3,"chartName","dataSeries"],[1,"flex","flex-col","grow","w-1/2","m-w-1/2","gap-3","bg-white","dark:bg-slate-900","rounded-2xl","p-6"],[1,"flex","items-center","space-x-2"],[3,"size","click"],[1,"mt-2"],[3,"dataSeries"]],template:function(t,n){1&t&&(e.I0R(0,"div",0)(1,"div")(2,"div",1)(3,"div",2)(4,"div",3),e.S2Z(),e.I0R(5,"svg",4),e.wR5(6,"path",5),e.C$Y()(),e.gRP(),e.I0R(7,"div")(8,"div",6),e.OEk(9),e.wVc(10,"translate"),e.C$Y(),e.I0R(11,"div",7),e.OEk(12,"all tasks \u{1f389}"),e.C$Y()()(),e.I0R(13,"div",2)(14,"div",8),e.S2Z(),e.I0R(15,"svg",4),e.wR5(16,"path",9),e.C$Y()(),e.gRP(),e.I0R(17,"div")(18,"div",10),e.OEk(19),e.wVc(20,"translate"),e.C$Y(),e.I0R(21,"div",7),e.OEk(22,"all tasks"),e.C$Y()()(),e.I0R(23,"div",2)(24,"div",11),e.S2Z(),e.I0R(25,"svg",4),e.wR5(26,"path",12),e.C$Y()(),e.gRP(),e.I0R(27,"div")(28,"div",13),e.OEk(29),e.wVc(30,"translate"),e.C$Y(),e.I0R(31,"div",7),e.OEk(32," total amount of tasks "),e.C$Y()()(),e.I0R(33,"div",2)(34,"div",14),e.S2Z(),e.I0R(35,"svg",4),e.wR5(36,"path",15)(37,"path",16),e.C$Y()(),e.gRP(),e.I0R(38,"div")(39,"div",17),e.OEk(40),e.wVc(41,"translate"),e.C$Y(),e.I0R(42,"div",7),e.OEk(43,"all tasks"),e.C$Y()()()()(),e.I0R(44,"div",18)(45,"div",1)(46,"div",19)(47,"div")(48,"span",20),e.OEk(49),e.wVc(50,"translate"),e.C$Y()(),e.I0R(51,"div",21),e.wR5(52,"xx-donut-chart",22),e.C$Y()(),e.I0R(53,"div",23)(54,"div")(55,"span",20),e.OEk(56),e.wVc(57,"translate"),e.C$Y()(),e.I0R(58,"div",24)(59,"xx-button",25),e.qCj("click",function(){return n.setTasksReportViewMode("week")}),e.OEk(60,"Week"),e.C$Y(),e.I0R(61,"xx-button",25),e.qCj("click",function(){return n.setTasksReportViewMode("month")}),e.OEk(62,"Month"),e.C$Y()(),e.I0R(63,"div",26),e.wR5(64,"xx-bar-chart",27),e.C$Y()()()(),e.I0R(65,"div",18)(66,"div",1)(67,"div",23)(68,"div")(69,"span",20),e.OEk(70),e.wVc(71,"translate"),e.C$Y()(),e.I0R(72,"div",26),e.wR5(73,"xx-bar-chart",27),e.C$Y()(),e.I0R(74,"div",23)(75,"div")(76,"span",20),e.OEk(77),e.wVc(78,"translate"),e.C$Y()(),e.I0R(79,"div",26),e.wR5(80,"xx-bar-chart",27),e.C$Y()()()()()),2&t&&(e.yG2(9),e.CAO(" ",n.tasksDone," ",e.kDX(10,23,"done")," "),e.yG2(10),e.CAO(" ",n.tasksTodo," ",e.kDX(20,25,"todo")," "),e.yG2(10),e.CAO(" ",n.tasksTotal," ",e.kDX(30,27,"created")," "),e.yG2(11),e.CAO(" ",n.tasksOverdue," ",e.kDX(41,29,"overdue")," "),e.yG2(9),e.cNF(e.kDX(50,31,"status overview")),e.yG2(3),e.E7m("chartName","name")("dataSeries",n.chartValue),e.yG2(4),e.cNF(e.kDX(57,33,"weekly report")),e.yG2(3),e.m_g("week"===n.viewMode?"flat":"glass"),e.E7m("size","sm"),e.yG2(2),e.m_g("month"===n.viewMode?"flat":"glass"),e.E7m("size","sm"),e.yG2(3),e.E7m("dataSeries",n.recentTasksData),e.yG2(6),e.oRS(" ",e.kDX(71,35,"habits report")," "),e.yG2(3),e.E7m("dataSeries",n.recentHabitsData),e.yG2(4),e.oRS(" ",e.kDX(78,37,"tags report")," "),e.yG2(3),e.E7m("dataSeries",n.taskByTagsData))},dependencies:[G.k,U,Q,k.sD],styles:[".legend[_ngcontent-%COMP%]{margin:0 0 0 2rem;--tui-base-01: none;--tui-base-02: none;--tui-text-01: none}.item[_ngcontent-%COMP%]{margin:0 .5rem .75rem 0}.axes[_ngcontent-%COMP%]{height:12rem;width:100%;color:#bc71c9}"]})}(0,f.UN)([C.w7],m.prototype,"computeLabels$",null),(0,f.UN)([C.w7],m.prototype,"computeValue",null),(0,f.UN)([C.w7],m.prototype,"getWidth",null);const W=[{path:"",component:m}];let K=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=e.a4G({type:i});static#i=this.\u0275inj=e.s3X({imports:[I.qQ.forChild(W),I.qQ]})}return i})();var J=l(2604),$=l(4259),E=l(3905),T=l(3496),x=l(1040);let tt=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({imports:[[u.MD,$.U9,E.MZ,x.Ux,T.WY]]}),i})(),et=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({imports:[[u.MD,x.Ux,tt]]}),i})();var it=l(8212);let nt=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({imports:[[u.MD,it.CI]]}),i})(),pt=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({imports:[[u.MD,$.U9]]}),i})();var mt=l(2528),gt=l(168),vt=l(6732);(0,mt.AL)({dots:!1,filled:!1,smoothingFactor:0});let A=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({imports:[[u.MD,x.Ux,T.WY,gt.C,vt.kR]]}),i})(),wt=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({imports:[[u.MD,A,x.Ux,T.WY]]}),i})(),Lt=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=e.a4G({type:i});static#i=this.\u0275inj=e.s3X({providers:[S],imports:[u.MD,K,J.e,et,nt,E.MZ,H.E,pt,A,wt,k.O0]})}return i})()}}]);
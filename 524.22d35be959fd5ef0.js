"use strict";(self.webpackChunkplatform_frontend=self.webpackChunkplatform_frontend||[]).push([[524],{524:(X,x,a)=>{a.r(x),a.d(x,{ProjectsModule:()=>V});var h=a(1368),C=a(5876),I=a(2604),f=a(2531),t=a(4496),u=a(5084),d=a(9212),p=a(9628),v=a(9768),k=a(396),j=a(2560);function E(o,_){if(1&o){const e=t.KQA();t.I0R(0,"div",3),t.qCj("click",function(i){t.usT(e);const r=t.GaO();return t.CGJ(r.toggleEditMode(i))}),t.OEk(1),t.C$Y()}if(2&o){const e=t.GaO();t.yG2(),t.oRS(" Create ",e.entityTitle," + ")}}function $(o,_){if(1&o){const e=t.KQA();t.I0R(0,"div",4)(1,"xx-input",5),t.qCj("keyup.enter",function(i){t.usT(e);const r=t.GaO();return r.toggleEditMode(i),t.CGJ(r.confirmChanges(i))})("valueChange",function(i){t.usT(e);const r=t.GaO();return t.CGJ(r.onValueChange(i))}),t.C$Y(),t.I0R(2,"xx-button",6),t.qCj("click",function(i){t.usT(e);const r=t.GaO();return r.toggleEditMode(i),t.CGJ(r.confirmChanges(i))}),t.C$Y(),t.I0R(3,"xx-button",6),t.qCj("click",function(i){t.usT(e);const r=t.GaO();return t.CGJ(r.toggleEditMode(i))}),t.C$Y()()}2&o&&(t.yG2(),t.E7m("value","")("autofocus",!0)("placeholder","Title"),t.yG2(),t.E7m("icon","check")("size","sm"),t.yG2(),t.E7m("icon","cancel")("size","sm"))}let y=(()=>{class o{constructor(){this.entityTitle="Entity",this.onChange=new t._w7,this.isEditMode=!1}toggleEditMode(e){e.stopPropagation(),this.isEditMode=!this.isEditMode}onValueChange(e){this._title=e}confirmChanges(e){e.stopPropagation(),this.onChange.emit(this._title)}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.In1({type:o,selectors:[["xx-add-entity-button-input"]],inputs:{entityTitle:"entityTitle"},outputs:{onChange:"onChange"},decls:3,vars:2,consts:[[1,"h-12","cursor-pointer","bg-slate-100","hover:bg-slate-50","dark:bg-gray-800","dark:hover:bg-gray-900","dark:active:bg-gray-800","dark:hover:text-gray-200","dark:text-gray-400"],["class","w-full h-full flex justify-center items-center",3,"click",4,"ngIf"],["class","w-full h-full flex justify-center items-center gap-2",4,"ngIf"],[1,"w-full","h-full","flex","justify-center","items-center",3,"click"],[1,"w-full","h-full","flex","justify-center","items-center","gap-2"],[3,"value","autofocus","placeholder","keyup.enter","valueChange"],[3,"icon","size","click"]],template:function(n,i){1&n&&(t.I0R(0,"div",0),t.yuY(1,E,2,1,"div",1)(2,$,4,7,"div",2),t.C$Y()),2&n&&(t.yG2(),t.E7m("ngIf",!i.isEditMode),t.yG2(),t.E7m("ngIf",i.isEditMode))},dependencies:[h.u_,k.k,j.g]})}return o})();var m=a(9144),l=a(8960),g=a(7368),T=a(7072),A=a(5052),R=a(7256),b=a(7568),U=a(1704),Y=a(5216),G=a(7692),S=a(1152),P=a(2684);function O(o,_){if(1&o){const e=t.KQA();t.SAx(0),t.I0R(1,"xx-accordion-wrapper"),t.SAx(2,3),t.I0R(3,"div",16)(4,"div",17)(5,"div",18)(6,"div",19),t.S2Z(),t.I0R(7,"svg",20),t.wR5(8,"path",21),t.C$Y(),t.gRP(),t.I0R(9,"span",22),t.OEk(10),t.C$Y()(),t.I0R(11,"xx-title-input",11),t.qCj("onChange",function(i){const s=t.usT(e).$implicit,c=t.GaO(7);return t.CGJ(c.onUpdateElementTitle(i,s))}),t.C$Y()(),t.I0R(12,"div",23)(13,"xx-context-menu-button",24),t.qCj("onClick",function(i){const s=t.usT(e).$implicit,c=t.GaO(7);return t.CGJ(c.onElementAction(s,i))}),t.C$Y()()()(),t.k70(),t.SAx(14,9),t.I0R(15,"div",10)(16,"xx-item-description",11),t.qCj("onChange",function(i){const s=t.usT(e).$implicit,c=t.GaO(7);return t.CGJ(c.onUpdateElementDescription(i,s))}),t.C$Y()(),t.k70(),t.C$Y(),t.k70()}if(2&o){const e=_.$implicit;t.yG2(10),t.oRS(" -",e.id," "),t.yG2(),t.E7m("value",e.title),t.yG2(5),t.E7m("value",e.description)}}function M(o,_){if(1&o&&(t.SAx(0),t.yuY(1,O,17,3,"ng-container",15),t.k70()),2&o){const e=t.GaO().$implicit;t.yG2(),t.E7m("ngForOf",e.elements)}}function w(o,_){if(1&o){const e=t.KQA();t.SAx(0),t.I0R(1,"xx-accordion-wrapper"),t.SAx(2,3),t.I0R(3,"div",16)(4,"div",17)(5,"div",18)(6,"div",19),t.S2Z(),t.I0R(7,"svg",20),t.wR5(8,"path",21),t.C$Y(),t.gRP(),t.I0R(9,"span",22),t.OEk(10),t.C$Y()(),t.I0R(11,"xx-title-input",11),t.qCj("onChange",function(i){const s=t.usT(e).$implicit,c=t.GaO(5);return t.CGJ(c.onUpdateModuleTitle(i,s))}),t.C$Y()(),t.I0R(12,"div",23)(13,"xx-context-menu-button",24),t.qCj("onClick",function(i){const s=t.usT(e).$implicit,c=t.GaO(5);return t.CGJ(c.onModuleAction(s,i))}),t.C$Y()()()(),t.k70(),t.SAx(14,9),t.I0R(15,"div",10)(16,"xx-item-description",11),t.qCj("onChange",function(i){const s=t.usT(e).$implicit,c=t.GaO(5);return t.CGJ(c.onUpdateModuleDescription(i,s))}),t.C$Y()(),t.I0R(17,"div",12)(18,"xx-add-entity-button-input",13),t.qCj("onChange",function(i){const s=t.usT(e).$implicit,c=t.GaO(5);return t.CGJ(c.createElement(s,i))}),t.C$Y(),t.yuY(19,M,2,1,"ng-container",14),t.C$Y(),t.k70(),t.C$Y(),t.k70()}if(2&o){const e=_.$implicit;t.yG2(10),t.oRS(" -",e.id," "),t.yG2(),t.E7m("value",e.title),t.yG2(5),t.E7m("value",e.description),t.yG2(2),t.E7m("entityTitle","Element"),t.yG2(),t.E7m("ngIf",null==e.elements?null:e.elements.length)}}function J(o,_){if(1&o&&(t.SAx(0),t.yuY(1,w,20,5,"ng-container",15),t.k70()),2&o){const e=t.GaO().$implicit;t.yG2(),t.E7m("ngForOf",e.modules)}}function K(o,_){if(1&o){const e=t.KQA();t.SAx(0),t.I0R(1,"xx-accordion-wrapper"),t.SAx(2,3),t.I0R(3,"div",16)(4,"div",17)(5,"div",18)(6,"div",19),t.S2Z(),t.I0R(7,"svg",20),t.wR5(8,"path",21),t.C$Y(),t.gRP(),t.I0R(9,"span",22),t.OEk(10),t.C$Y()(),t.I0R(11,"xx-title-input",11),t.qCj("onChange",function(i){const s=t.usT(e).$implicit,c=t.GaO(3);return t.CGJ(c.onUpdateStageTitle(i,s))}),t.C$Y()(),t.I0R(12,"div",23)(13,"xx-context-menu-button",24),t.qCj("onClick",function(i){const s=t.usT(e).$implicit,c=t.GaO(3);return t.CGJ(c.onStageAction(s,i))}),t.C$Y()()()(),t.k70(),t.SAx(14,9),t.I0R(15,"div",10)(16,"xx-item-description",11),t.qCj("onChange",function(i){const s=t.usT(e).$implicit,c=t.GaO(3);return t.CGJ(c.onUpdateStageDescription(i,s))}),t.C$Y()(),t.I0R(17,"div",12)(18,"xx-add-entity-button-input",13),t.qCj("onChange",function(i){const s=t.usT(e).$implicit,c=t.GaO(3);return t.CGJ(c.createModule(s,i))}),t.C$Y(),t.yuY(19,J,2,1,"ng-container",14),t.C$Y(),t.k70(),t.C$Y(),t.k70()}if(2&o){const e=_.$implicit;t.yG2(10),t.oRS(" -",e.id," "),t.yG2(),t.E7m("value",e.title),t.yG2(5),t.E7m("value",e.description),t.yG2(2),t.E7m("entityTitle","Module"),t.yG2(),t.E7m("ngIf",null==e.modules?null:e.modules.length)}}function N(o,_){if(1&o&&(t.SAx(0),t.yuY(1,K,20,5,"ng-container",15),t.k70()),2&o){const e=t.GaO(2);t.yG2(),t.E7m("ngForOf",e.item.stages)}}function F(o,_){if(1&o){const e=t.KQA();t.SAx(0),t.I0R(1,"div",16)(2,"div",17)(3,"div",18)(4,"div",19),t.S2Z(),t.I0R(5,"svg",26),t.wR5(6,"path",27),t.C$Y(),t.gRP(),t.I0R(7,"span",28),t.OEk(8),t.C$Y()(),t.I0R(9,"xx-title-input",11),t.qCj("onChange",function(i){const s=t.usT(e).$implicit,c=t.GaO(3);return t.CGJ(c.onUpdateTaskTitle(i,s))}),t.C$Y()(),t.I0R(10,"div",23)(11,"xx-date-picker",29),t.qCj("onChange",function(i){const s=t.usT(e).$implicit,c=t.GaO(3);return t.CGJ(c.onUpdateTaskDueDate(i,s))}),t.C$Y(),t.I0R(12,"xx-priority-select",7),t.qCj("onSelect",function(i){const s=t.usT(e).$implicit,c=t.GaO(3);return t.CGJ(c.onUpdateTaskPriority(i,s))}),t.C$Y(),t.I0R(13,"xx-status-select",30),t.qCj("onSelect",function(i){const s=t.usT(e).$implicit,c=t.GaO(3);return t.CGJ(c.onUpdateTaskStatus(i,s))}),t.C$Y(),t.I0R(14,"xx-context-menu-button",24),t.qCj("onClick",function(i){const s=t.usT(e).$implicit,c=t.GaO(3);return t.CGJ(c.onTaskAction(s,i))}),t.C$Y()()()(),t.k70()}if(2&o){const e=_.$implicit;t.yG2(8),t.oRS(" -",e.id," "),t.yG2(),t.E7m("value",e.title),t.yG2(2),t.E7m("date",e.due_date)("resolved",e.is_completed),t.yG2(),t.E7m("priority",e.priority),t.yG2(),t.E7m("status",e.status)("size","m")}}function D(o,_){if(1&o&&(t.SAx(0),t.I0R(1,"tui-scrollbar")(2,"div",25),t.yuY(3,F,15,7,"ng-container",15),t.C$Y()(),t.k70()),2&o){const e=t.GaO(2);t.yG2(3),t.E7m("ngForOf",e.taskList)}}function B(o,_){if(1&o){const e=t.KQA();t.I0R(0,"tui-loader",1)(1,"div",2)(2,"xx-accordion-wrapper"),t.SAx(3,3),t.I0R(4,"div",4)(5,"div")(6,"xx-title-input",5),t.qCj("onChange",function(i){t.usT(e);const r=t.GaO();return t.CGJ(r.onUpdateProjectTitle(i))}),t.C$Y()(),t.I0R(7,"div",6)(8,"xx-priority-select",7),t.qCj("onSelect",function(i){t.usT(e);const r=t.GaO();return t.CGJ(r.onUpdateProjectPriority(i))}),t.C$Y(),t.I0R(9,"xx-status-select",8),t.qCj("onSelect",function(i){t.usT(e);const r=t.GaO();return t.CGJ(r.onUpdateProjectStatus(i))}),t.C$Y()()(),t.k70(),t.SAx(10,9),t.I0R(11,"div",10)(12,"xx-item-description",11),t.qCj("onChange",function(i){t.usT(e);const r=t.GaO();return t.CGJ(r.onUpdateProjectDescription(i))}),t.C$Y()(),t.I0R(13,"div",12)(14,"xx-add-entity-button-input",13),t.qCj("onChange",function(i){t.usT(e);const r=t.GaO();return t.CGJ(r.createStage(i))}),t.C$Y(),t.yuY(15,N,2,1,"ng-container",14),t.C$Y(),t.I0R(16,"div",12)(17,"xx-add-entity-button-input",13),t.qCj("onChange",function(i){t.usT(e);const r=t.GaO();return t.CGJ(r.createTask(i))}),t.C$Y(),t.yuY(18,D,4,1,"ng-container",14),t.C$Y(),t.k70(),t.C$Y()()()}if(2&o){const e=t.GaO();t.E7m("inheritColor",!1)("overlay",!1)("showLoader",e.loading),t.yG2(6),t.E7m("value",e.item.title)("size","lg"),t.yG2(2),t.E7m("priority",e.item.priority),t.yG2(),t.E7m("status",e.item.status)("size","m"),t.yG2(3),t.E7m("value",e.item.description),t.yG2(2),t.E7m("entityTitle","Stage"),t.yG2(),t.E7m("ngIf",null==e.item.stages?null:e.item.stages.length),t.yG2(2),t.E7m("entityTitle","Task"),t.yG2(),t.E7m("ngIf",null==e.taskList?null:e.taskList.length)}}let z=(()=>{class o{constructor(){this.loading=!1,this.taskList=[],this.apiService=(0,t.uUt)(p.o7),this.stagesApiService=(0,t.uUt)(p.ch),this.tasksApiService=(0,t.uUt)(T.e),this.modulesApiService=(0,t.uUt)(p.GC),this.elementsApiService=(0,t.uUt)(p.iS),this.notificationsService=(0,t.uUt)(v.E3)}ngOnInit(){this.tasksApiService.getTasks({project:this.item.id}).pipe((0,u.K)(),(0,d.y)(e=>{this.taskList=e})).subscribe()}onUpdateProjectTitle(e){this.onUpdateProject({...this.item,title:e})}onUpdateProjectPriority(e){this.onUpdateProject({...this.item,priority:e})}onUpdateProjectStatus(e){this.onUpdateProject({...this.item,status:e})}onUpdateProjectDescription(e){this.onUpdateProject({...this.item,description:e})}onUpdateStageTitle(e,n){this.onUpdateStage({...n,title:e})}onUpdateStageDescription(e,n){this.onUpdateStage({...n,description:e})}onStageAction(e,n){}onUpdateProject(e){this.loading=!0,this.apiService.updateProject(e.id,e).pipe((0,u.K)(),(0,d.y)(n=>{this.item=n,this.loading=!1,this.notificationsService.showNotification("Project successfully updated","success")}),(0,m.a)(n=>(this.loading=!1,this.notificationsService.showNotification("Project not updated. An error occurred","error"),l.k))).subscribe()}onUpdateTaskTitle(e,n){this.onUpdateTask({...n,title:e})}onUpdateTaskPriority(e,n){this.onUpdateTask({...n,priority:e})}onUpdateTaskStatus(e,n){this.onUpdateTask({...n,status:e})}onUpdateTaskDueDate(e,n){this.onUpdateTask({...n,due_date:e})}onTaskAction(e,n){}onUpdateTask(e){this.loading=!0,this.tasksApiService.updateTask(e.id,e).pipe((0,u.K)(),(0,g.G)(()=>this.apiService.getProject(this.item.id)),(0,d.y)(n=>{this.item=n,this.notificationsService.showNotification("Task successfully updated","success"),this.loading=!1}),(0,m.a)(n=>(this.loading=!1,this.notificationsService.showNotification("Task not updated. An error occurred","error"),l.k))).subscribe()}onUpdateStage(e){this.loading=!0,this.stagesApiService.updateStage(e.id,e).pipe((0,u.K)(),(0,g.G)(()=>this.apiService.getProject(this.item.id)),(0,d.y)(n=>{this.item=n,this.loading=!1,this.notificationsService.showNotification("Stage successfully updated","success")}),(0,m.a)(n=>(this.loading=!1,this.notificationsService.showNotification("Stage not updated. An error occurred","error"),l.k))).subscribe()}onUpdateModuleTitle(e,n){this.onUpdateModule({...n,title:e})}onUpdateModuleDescription(e,n){this.onUpdateModule({...n,description:e})}onModuleAction(e,n){}onUpdateModule(e){this.loading=!0,this.modulesApiService.updateModule(e.id,e).pipe((0,u.K)(),(0,g.G)(()=>this.apiService.getProject(this.item.id)),(0,d.y)(n=>{this.item=n,this.loading=!1,this.notificationsService.showNotification("Module successfully updated","success")}),(0,m.a)(n=>(this.loading=!1,this.notificationsService.showNotification("Module not updated. An error occurred","error"),l.k))).subscribe()}onUpdateElementTitle(e,n){this.onUpdateElement({...n,title:e})}onUpdateElementDescription(e,n){this.onUpdateElement({...n,description:e})}onElementAction(e,n){}onUpdateElement(e){this.loading=!0,this.elementsApiService.updateElement(e.id,e).pipe((0,u.K)(),(0,g.G)(()=>this.apiService.getProject(this.item.id)),(0,d.y)(n=>{this.item=n,this.loading=!1,this.notificationsService.showNotification("Element successfully updated","success")}),(0,m.a)(n=>(this.loading=!1,this.notificationsService.showNotification("Element not updated. An error occurred","error"),l.k))).subscribe()}createElement(e,n){this.elementsApiService.createElement({title:n||"test element",project:e.project,stage:e.stage,module:e.id}).pipe((0,u.K)(),(0,g.G)(r=>r?.id&&this.item.id?this.apiService.getProject(this.item.id):l.k),(0,d.y)(r=>{this.item=r,this.notificationsService.showNotification("Element successfully created","success")}),(0,m.a)(r=>(this.loading=!1,this.notificationsService.showNotification("Element not created. An error occurred","error"),l.k))).subscribe()}createModule(e,n){this.modulesApiService.createModule({title:n||"test module",project:e.project,stage:e.id}).pipe((0,u.K)(),(0,g.G)(r=>r?.id&&this.item.id?this.apiService.getProject(this.item.id):l.k),(0,d.y)(r=>{this.item=r,this.notificationsService.showNotification("Module successfully created","success")}),(0,m.a)(r=>(this.loading=!1,this.notificationsService.showNotification("Module not created. An error occurred","error"),l.k))).subscribe()}createStage(e){this.stagesApiService.createStage({title:e||"test stage",project:this.item.id}).pipe((0,u.K)(),(0,g.G)(i=>i?.id&&this.item.id?this.apiService.getProject(this.item.id):l.k),(0,d.y)(i=>{this.item=i,this.notificationsService.showNotification("Stage successfully created","success")}),(0,m.a)(i=>(this.loading=!1,this.notificationsService.showNotification("Stage not created. An error occurred","error"),l.k))).subscribe()}createTask(e){this.tasksApiService.createTask({title:e||"test task",project:this.item.id}).pipe((0,u.K)(),(0,g.G)(i=>i?.id&&this.item.id?this.apiService.getProject(this.item.id):l.k),(0,d.y)(i=>{this.item=i,this.notificationsService.showNotification("Task successfully created","success")}),(0,m.a)(i=>(this.loading=!1,this.notificationsService.showNotification("Task not created. An error occurred","error"),l.k))).subscribe()}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.In1({type:o,selectors:[["xx-item"]],inputs:{item:"item"},decls:1,vars:1,consts:[[3,"inheritColor","overlay","showLoader",4,"ngIf"],[3,"inheritColor","overlay","showLoader"],[1,"border","border-slate-200","bg-slate-200","dark:border-slate-900/25","dark:bg-slate-900/25","backdrop-blur-xl","border-collapse"],["accordion-header",""],[1,"flex","justify-between","items-center","px-4","py-2","bg-white","dark:bg-slate-900"],[3,"value","size","onChange"],[1,"flex","gap-2","items-center"],["size","md",1,"pr-2",3,"priority","onSelect"],[1,"w-20","text-center",3,"status","size","onSelect"],["accordion-content",""],[1,"mx-2.5","my-3"],[3,"value","onChange"],[1,"flex","flex-col","gap-1","mx-2.5","my-3"],[3,"entityTitle","onChange"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"h-12","flex","items-center","bg-slate-50","hover:bg-white","dark:mb-0.5","dark:bg-slate-800","dark:hover:bg-slate-800","dark:border-2","dark:border-slate-800","dark:hover:border-blue-600","px-3","border"],[1,"w-full","flex","justify-between","items-center","group"],[1,"flex","items-center"],[1,"flex","items-center","cursor-pointer","hover:opacity-75"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"flex-shrink-0","text-indigo-500","w-4","h-4"],["d","M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z"],[1,"text-indigo-500","font-bold","mr-2"],[1,"flex","justify-center","items-center","gap-2"],[3,"onClick"],[1,"max-h-72"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 16 16","fill","currentColor",1,"flex-shrink-0","text-cyan-600","w-4","h-4"],["fill-rule","evenodd","d","M9.58 1.077a.75.75 0 0 1 .405.82L9.165 6h4.085a.75.75 0 0 1 .567 1.241l-6.5 7.5a.75.75 0 0 1-1.302-.638L6.835 10H2.75a.75.75 0 0 1-.567-1.241l6.5-7.5a.75.75 0 0 1 .897-.182Z","clip-rule","evenodd"],[1,"text-cyan-600","font-bold","mr-2"],[3,"date","resolved","onChange"],[3,"status","size","onSelect"]],template:function(n,i){1&n&&t.yuY(0,B,19,13,"tui-loader",0),2&n&&t.E7m("ngIf",i.item)},dependencies:[h.ay,h.u_,C.u,A.e,R.M,b.U,U.C,Y.m,G.Cb,S.o7,P.y,y]})}return o})();function L(o,_){1&o&&t.wR5(0,"xx-item",2),2&o&&t.E7m("item",_.$implicit)}const Q=[{path:"",component:(()=>{class o{constructor(){this.projects=[],this.apiService=(0,t.uUt)(p.o7),this.pageTitleService=(0,t.uUt)(v.M$)}ngOnInit(){this.pageTitleService.setPageTitle("Projects"),this.getProject()}getProject(){this.apiService.getProjects().pipe((0,u.K)(),(0,d.y)(e=>{this.projects=e})).subscribe()}createProject(e){this.apiService.createProject({title:e}).pipe((0,u.K)(),(0,d.y)(n=>{this.projects.push(n)})).subscribe()}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.In1({type:o,selectors:[["xx-projects"]],decls:2,vars:2,consts:[[3,"item",4,"ngFor","ngForOf"],[3,"entityTitle","onChange"],[3,"item"]],template:function(n,i){1&n&&(t.yuY(0,L,1,1,"xx-item",0),t.I0R(1,"xx-add-entity-button-input",1),t.qCj("onChange",function(s){return i.createProject(s)}),t.C$Y()),2&n&&(t.E7m("ngForOf",i.projects),t.yG2(),t.E7m("entityTitle","Project"))},dependencies:[h.ay,y,z]})}return o})()}];let Z=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.a4G({type:o});static#n=this.\u0275inj=t.s3X({imports:[f.qQ.forChild(Q),f.qQ]})}return o})();var q=a(7380),H=a(3352);let V=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.a4G({type:o});static#n=this.\u0275inj=t.s3X({providers:[p.o7,p.ch,T.e,p.GC,p.iS],imports:[h.MD,Z,C.u,I.e,q.C,G.Sk,S.M9,H.q]})}return o})()}}]);
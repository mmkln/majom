"use strict";(self.webpackChunkplatform_frontend=self.webpackChunkplatform_frontend||[]).push([[896],{9896:(at,v,t)=>{t.r(v),t.d(v,{TasksModule:()=>it});var e=t(1368),m=t(6504),x=t(7048),O=t(2064),d=t(7692),g=t(1152),E=t(1512),f=t(8212),I=t(5488),A=t(296),G=t(3797),D=t(5188),R=t(968),k=t(6052),N=t(6380),Q=t(740),u=t(9104),U=t(6732),F=t(5e3),K=t(4058),h=t(2531),p=t(5084),y=t(9212),L=t(9144),l=t(4940),c=t(7570),o=t(4496),S=t(7072),T=t(9768),n=t(9080);function P(i,et){1&i&&o.wR5(0,"xx-table")}const Y=[{path:"",component:(()=>{class i{constructor(s,a,r){this.apiService=s,this.notificationsService=a,this.pageTitleService=r,this.taskList=[],this.todoList=[],this.archivedList=[],this.todoListSorted=[],this.archivedListSorted=[],this.viewMode="table",this.sortOrder="none",this.loading=!1,this.open=!0}ngOnInit(){this.pageTitleService.setPageTitle("tasks"),this.getTasks()}toggleSortByPriority(){let s;switch(this.sortOrder){case"none":s="asc";break;case"asc":s="desc";break;default:s="none"}this.sortOrder=s,this.todoListSorted=(0,c.ek)(this.todoList,s),this.archivedListSorted=(0,c.ek)(this.archivedList,s)}isTaskArchived(s){return[l.sD.Archived,l.sD.Completed,l.sD.Cancelled].includes(s.status)}setLists(s){this.todoList=[],this.archivedList=[],s.forEach(a=>{this.isTaskArchived(a)?this.archivedList.push(a):this.todoList.push(a)}),this.todoListSorted=(0,c.ek)(this.todoList,this.sortOrder),this.archivedListSorted=(0,c.ek)(this.archivedList,this.sortOrder)}getTasks(){this.loading=!0,this.apiService.getTasks({is_standalone:!0}).pipe((0,p.K)(),(0,y.y)(s=>{this.taskList=s,this.loading=!1,this.setLists(s)}),(0,L.a)(s=>(this.loading=!1,s))).subscribe()}createTask(s){this.apiService.createTask({title:s||"test task",is_standalone:!0}).pipe((0,p.K)(),(0,y.y)(()=>{this.getTasks(),this.notificationsService.showNotification("Task successfully created","success")}),(0,L.a)(r=>(this.notificationsService.showNotification("Task not created. An error occurred","error"),r))).subscribe()}static#t=this.\u0275fac=function(a){return new(a||i)(o.GI1(S.e),o.GI1(T.E3),o.GI1(T.M$))};static#s=this.\u0275cmp=o.In1({type:i,selectors:[["xx-tasks"]],decls:3,vars:2,consts:[[3,"showLoader"],[1,"w-full","text-gray-600","dark:text-gray-400","bg-white","dark:bg-gray-900","rounded-xl","p-4"],[4,"ngIf"]],template:function(a,r){1&a&&(o.I0R(0,"tui-loader",0)(1,"div",1),o.yuY(2,P,1,0,"xx-table",2),o.C$Y()()),2&a&&(o.E7m("showLoader",r.loading),o.yG2(2),o.E7m("ngIf","table"===r.viewMode))},dependencies:[e.u_,d.Cb,n.oz]})}return i})()}];let j=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#s=this.\u0275mod=o.a4G({type:i});static#o=this.\u0275inj=o.s3X({imports:[h.qQ.forChild(Y),h.qQ]})}return i})();var C=t(2604),z=t(9280),B=t(1696),X=t(5152),$=t(5028),Z=t(5052),H=t(7256),J=t(7568),V=t(212),W=t(1704),b=t(7260),w=t(1988),q=t(2684),_=t(5216),tt=t(2852),st=t(5876);const ot=[d.Sk,g.M9,u.E,K.S,A.sd,E.w,f.CI,U.kR,G.CQ,D.my,R.Y3,I.aS,F.m6,k.q8,N.iO,Q.BZ,f.CI];let it=(()=>{class i{static#t=this.\u0275fac=function(a){return new(a||i)};static#s=this.\u0275mod=o.a4G({type:i});static#o=this.\u0275inj=o.s3X({providers:[S.e,X.o,$.G],imports:[x.SU,e.MD,j,C.e,z.k,B.u,O.O0,m.sl,ot,e.MD,m.sl,C.e]})}return i})();o.AnM(n.Et,[e.ay,e.u_,h.ER,Z.e,H.M,J.U,V.O,W.C,b.m,w.K,q.y,_.m,tt.Q,st.u,d.Cb,g.o7,n.Se],[u.M]),o.AnM(n.yM,[e.ay,e.u_,n.Et],[])}}]);
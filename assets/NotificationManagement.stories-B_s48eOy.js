import{d as ee,r as c,aG as w,aH as ne,N as ae,f,o as u,i as e,h as b,U as A,v as te,w as ie,W as se,F as T,b as q,P as g,V as oe,aJ as re}from"./iframe-Bh-WmPjs.js";import{_ as le}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const de={class:"min-h-screen bg-gray-50 p-6"},ce={class:"max-w-7xl mx-auto"},fe={class:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"},ue={class:"flex h-[calc(100vh-200px)]"},me={class:"w-1/3 border-r border-gray-200 flex flex-col"},pe={class:"px-4 py-3 border-b border-gray-200 bg-gray-50"},he={class:"flex items-center justify-between"},ge={class:"flex items-center space-x-2"},ke=["checked"],ve={class:"flex items-center space-x-2"},Re=["disabled"],Ae={class:"relative"},ye={key:0,class:"absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-10"},Me=["onClick"],xe={class:"flex-1 flex flex-col overflow-hidden"},we={class:"flex-1 overflow-y-auto"},be={key:0,class:"flex flex-col items-center justify-center h-full text-gray-500"},Ne={key:1,class:"divide-y divide-gray-100"},_e=["onClick"],De={class:"flex items-start space-x-3"},Ce=["checked","onClick"],Se={class:"flex-1 min-w-0"},Ee={class:"flex items-center justify-between mb-1"},je={class:"text-xs text-gray-400"},$e={key:0,class:"px-4 py-3 border-t border-gray-200 bg-gray-50"},Be={class:"flex-1 flex flex-col"},Ve={class:"px-4 py-3 border-b border-gray-200 bg-gray-50 flex items-center justify-between"},Ue={class:"flex-1 overflow-y-auto p-6"},Ie={key:0,class:"space-y-6"},Fe={class:"flex items-center justify-between"},Te={class:"text-xl font-semibold text-gray-900"},qe={class:"flex items-center space-x-2 text-sm text-gray-500"},He={class:"pt-4 border-t border-gray-200"},Pe={class:"text-gray-700 leading-relaxed whitespace-pre-wrap"},ze={key:1,class:"flex flex-col items-center justify-center h-full text-gray-500"},H=ee({__name:"NotificationManagement",props:{notifications:{default:()=>[]}},emits:["markAsRead","markAllAsRead","refresh","markSelectedAsRead"],setup(o,{emit:a}){const m=o,p=a,i=c(null),n=c(new Set),r=c(null),d=c(!1),v=c("all"),y=c(!1),B=[{key:"all",label:"全部"},{key:"read",label:"已读"},{key:"unread",label:"未读"}],h=w(()=>{switch(v.value){case"read":return m.notifications.filter(t=>t.isRead);case"unread":return m.notifications.filter(t=>!t.isRead);default:return m.notifications}}),V=w(()=>h.value.length===0?!1:h.value.every(t=>n.value.has(t.id))),P=w(()=>{if(h.value.length===0)return!1;const t=h.value.filter(s=>n.value.has(s.id)).length;return t>0&&t<h.value.length}),U=w(()=>h.value.filter(t=>n.value.has(t.id)&&!t.isRead).length),I=t=>{const x=new Date().getTime()-t.getTime(),l=Math.floor(x/6e4),M=Math.floor(x/36e5),F=Math.floor(x/864e5);return l<1?"刚刚":l<60?`${l}分钟前`:M<24?`${M}小时前`:F<7?`${F}天前`:t.toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})},z=(t,s=30)=>t.length<=s?t:t.substring(0,s)+"...",L=t=>{i.value=t,!t.isRead&&m.notifications&&p("markAsRead",t.id)},X=()=>{i.value=null},O=()=>{y.value=!y.value},K=t=>{v.value=t,y.value=!1},G=()=>{y.value=!1};w(()=>{const t=B.find(s=>s.key===v.value);return t?t.label:"全部"});const J=()=>{V.value?h.value.forEach(t=>{n.value.delete(t.id)}):h.value.forEach(t=>{n.value.add(t.id)})},W=(t,s)=>{s.stopPropagation(),n.value.has(t)?n.value.delete(t):n.value.add(t)},Q=()=>{const t=h.value.filter(s=>n.value.has(s.id)&&!s.isRead).map(s=>s.id);t.length>0&&(p("markSelectedAsRead",t),n.value.clear())},Y=()=>{p("markAllAsRead")},Z=()=>{d.value=!0,p("refresh"),setTimeout(()=>{d.value=!1},1e3)};return ne(P,t=>{re(()=>{r.value&&(r.value.indeterminate=t)})}),(t,s)=>{const x=ae("click-outside");return u(),f("div",de,[e("div",ce,[s[9]||(s[9]=e("div",{class:"mb-6"},[e("h1",{class:"text-2xl font-bold text-gray-900"},"站内通知管理"),e("p",{class:"text-gray-500 mt-1"},"查看和管理您的所有通知")],-1)),e("div",fe,[e("div",ue,[e("div",me,[e("div",pe,[e("div",he,[e("div",ge,[e("input",{ref_key:"selectAllCheckbox",ref:r,type:"checkbox",checked:V.value,onChange:J,class:"h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"},null,40,ke)]),e("div",ve,[e("button",{onClick:Z,class:"p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors",title:"刷新",disabled:d.value},[(u(),f("svg",{xmlns:"http://www.w3.org/2000/svg",class:A(["h-4 w-4",{"animate-spin":d.value}]),fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[...s[0]||(s[0]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1)])],2))],8,Re),e("div",Ae,[e("button",{onClick:O,class:A(["p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors",{"bg-gray-100 text-gray-700":y.value}]),title:"筛选"},[...s[1]||(s[1]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"})],-1)])],2),te(oe,{"enter-active-class":"transition-all duration-200 ease-out","enter-from-class":"opacity-0 scale-95 -translate-y-2","enter-to-class":"opacity-100 scale-100 translate-y-0","leave-active-class":"transition-all duration-150 ease-in","leave-from-class":"opacity-100 scale-100 translate-y-0","leave-to-class":"opacity-0 scale-95 -translate-y-2"},{default:ie(()=>[y.value?se((u(),f("div",ye,[(u(),f(T,null,q(B,l=>e("button",{key:l.key,onClick:M=>K(l.key),class:A(["w-full px-3 py-2 text-left text-sm transition-colors",v.value===l.key?"bg-blue-50 text-blue-700 font-medium":"text-gray-700 hover:bg-gray-50"])},g(l.label),11,Me)),64))])),[[x,G]]):b("",!0)]),_:1})]),o.notifications.some(l=>!l.isRead)?(u(),f("button",{key:0,onClick:Y,class:"text-sm text-blue-600 hover:text-blue-700 transition-colors"}," 全部已读 ")):b("",!0)])])]),e("div",xe,[e("div",we,[h.value.length===0?(u(),f("div",be,[...s[2]||(s[2]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-12 w-12 mb-3 text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"})],-1),e("p",{class:"text-sm"},"暂无通知",-1)])])):(u(),f("div",Ne,[(u(!0),f(T,null,q(h.value,l=>(u(),f("div",{key:l.id,onClick:M=>L(l),class:A(["px-4 py-3 cursor-pointer transition-colors border-l-4",i.value?.id===l.id||n.value.has(l.id)?"bg-blue-50 border-blue-500":(l.isRead,"bg-white border-transparent hover:bg-gray-50")])},[e("div",De,[e("input",{type:"checkbox",checked:n.value.has(l.id),onClick:M=>W(l.id,M),class:"mt-1.5 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer flex-shrink-0"},null,8,Ce),e("div",Se,[e("div",Ee,[e("h4",{class:A(["text-sm font-medium truncate",l.isRead?"text-gray-600":"text-gray-900"])},g(l.title),3)]),e("p",{class:A(["text-sm mb-1",l.isRead?"text-gray-500":"text-gray-700"])},g(z(l.content)),3),e("p",je,g(I(l.timestamp)),1)])])],10,_e))),128))]))]),U.value>0?(u(),f("div",$e,[e("button",{onClick:Q,class:"w-full flex items-center justify-center space-x-2 px-4 py-2 text-sm font-medium text-green-600 bg-green-50 border border-green-200 rounded-md hover:bg-green-100 transition-colors"},[s[3]||(s[3]=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"})],-1)),e("span",null,"设为已读 ("+g(U.value)+")",1)])])):b("",!0)])]),e("div",Be,[e("div",Ve,[s[5]||(s[5]=e("h2",{class:"font-semibold text-gray-900"},"通知详情",-1)),i.value?(u(),f("button",{key:0,onClick:X,class:"p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-md transition-colors",title:"关闭详情"},[...s[4]||(s[4]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)])])):b("",!0)]),e("div",Ue,[i.value?(u(),f("div",Ie,[e("div",Fe,[e("h3",Te,g(i.value.title),1),e("span",{class:A(["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",i.value.isRead?"bg-gray-100 text-gray-800":"bg-blue-100 text-blue-800"])},g(i.value.isRead?"已读":"未读"),3)]),e("div",qe,[s[6]||(s[6]=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"})],-1)),e("span",null,g(I(i.value.timestamp)),1)]),e("div",He,[s[7]||(s[7]=e("h4",{class:"text-sm font-medium text-gray-700 mb-3"}," 通知内容 ",-1)),e("p",Pe,g(i.value.content),1)])])):(u(),f("div",ze,[...s[8]||(s[8]=[e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-16 w-16 mb-4 text-gray-300",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"})],-1),e("p",{class:"text-lg font-medium"},"请选择一条通知查看详情",-1),e("p",{class:"text-sm mt-1"},"点击左侧列表中的通知即可查看完整内容",-1)])]))])])])])])])}}}),k=le(H,[["__scopeId","data-v-cda4a6e9"]]);H.__docgenInfo={exportName:"default",displayName:"NotificationManagement",type:1,props:[{name:"notifications",global:!1,description:"",tags:[],required:!1,type:"Notification[]",declarations:[],schema:{kind:"array",type:"Notification[]"},default:"[]"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[{name:"markAsRead",description:"",tags:[],type:"[id: string]",signature:'(event: "markAsRead", id: string): void',declarations:[],schema:["string"]},{name:"markAllAsRead",description:"",tags:[],type:"[]",signature:'(event: "markAllAsRead"): void',declarations:[],schema:[]},{name:"refresh",description:"",tags:[],type:"[]",signature:'(event: "refresh"): void',declarations:[],schema:[]},{name:"markSelectedAsRead",description:"",tags:[],type:"[ids: string[]]",signature:'(event: "markSelectedAsRead", ids: string[]): void',declarations:[],schema:[{kind:"array",type:"string[]"}]}],slots:[],exposed:[{name:"notifications",type:"Notification[]",description:"",declarations:[],schema:{kind:"array",type:"Notification[]"}}],sourceFiles:"/Users/ling/Documents/working/ui-design-system/src/pages/NotificationManagement.vue"};const Ke={title:"Pages/NotificationManagement",component:k,tags:["autodocs"],parameters:{docs:{description:{component:"站内通知管理页面，左右布局展示通知列表和详情，支持按全部/已读/未读筛选。"}},layout:"fullscreen"},argTypes:{notifications:{control:"object",description:"通知列表数据",table:{category:"Content"}}}},R=[{id:"1",title:"系统更新通知",content:"系统将于今晚22:00进行维护升级，预计耗时2小时。期间系统将暂停服务，请您提前做好相关准备。升级完成后，系统将自动恢复服务。如有任何问题，请联系技术支持。",timestamp:new Date(Date.now()-300*1e3),isRead:!1},{id:"2",title:"新功能上线",content:"全新的通知系统已上线，点击查看详情。本次更新包含以下新功能：1. 支持通知分类管理 2. 新增批量操作功能 3. 优化了通知阅读体验。快来体验吧！",timestamp:new Date(Date.now()-1800*1e3),isRead:!1},{id:"3",title:"任务提醒",content:"您有一个待处理的任务即将到期，请及时处理。任务名称：UI组件库设计评审，截止时间：明天下午5点。请务必在截止时间前完成并提交。",timestamp:new Date(Date.now()-7200*1e3),isRead:!0},{id:"4",title:"欢迎加入",content:"欢迎来到UI Design System，开始您的组件设计之旅。我们提供丰富的组件库和设计规范，帮助您快速构建美观、一致的用户界面。如有任何问题，请随时联系我们的支持团队。",timestamp:new Date(Date.now()-1440*60*1e3),isRead:!0},{id:"5",title:"安全警告",content:"检测到您的账户在异地登录，如非本人操作请立即修改密码。登录时间：2026-01-14 15:30，登录地点：北京市。为了保护您的账户安全，建议您立即修改密码并开启两步验证。",timestamp:new Date(Date.now()-4320*60*1e3),isRead:!1},{id:"6",title:"版本发布",content:"UI Design System v2.0 已发布！本次更新包含50+个新组件，性能提升30%，并修复了已知问题。立即升级体验全新版本！",timestamp:new Date(Date.now()-7200*60*1e3),isRead:!0},{id:"7",title:"会议通知",content:"本周五下午2点将召开产品评审会议，请准时参加。会议地点：3楼会议室A。会议议程：1. 产品需求评审 2. 技术方案讨论 3. 时间规划确认。",timestamp:new Date(Date.now()-10080*60*1e3),isRead:!1}],N={args:{notifications:R},render:o=>({components:{NotificationManagement:k},setup(){const a=c(o.notifications);return{notifications:a,handleMarkAsRead:n=>{const r=a.value.find(d=>d.id===n);r&&(r.isRead=!0)},handleMarkAllAsRead:()=>{a.value.forEach(n=>{n.isRead=!0})},handleMarkSelectedAsRead:n=>{n.forEach(r=>{const d=a.value.find(v=>v.id===r);d&&(d.isRead=!0)})}}},template:`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
        @mark-selected-as-read="handleMarkSelectedAsRead"
      />
    `}),parameters:{docs:{description:{story:"默认状态，显示所有通知，左侧列表，右侧详情。点击列表项可以查看完整详情，未读通知点击后会自动标记为已读。支持多选模式，可以批量标记已读。"}}}},_={args:{notifications:R.map(o=>({...o,isRead:!1}))},render:o=>({components:{NotificationManagement:k},setup(){const a=c(o.notifications);return{notifications:a,handleMarkAsRead:n=>{const r=a.value.find(d=>d.id===n);r&&(r.isRead=!0)},handleMarkAllAsRead:()=>{a.value.forEach(n=>{n.isRead=!0})},handleMarkSelectedAsRead:n=>{n.forEach(r=>{const d=a.value.find(v=>v.id===r);d&&(d.isRead=!0)})}}},template:`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
        @mark-selected-as-read="handleMarkSelectedAsRead"
      />
    `}),parameters:{docs:{description:{story:"所有通知都是未读状态，未读通知在列表中有蓝色圆点标识，点击后会自动标记为已读。支持多选模式批量标记已读。"}}}},D={args:{notifications:R.map(o=>({...o,isRead:!0}))},render:o=>({components:{NotificationManagement:k},setup(){const a=c(o.notifications);return{notifications:a,handleMarkAsRead:i=>{const n=a.value.find(r=>r.id===i);n&&(n.isRead=!0)},handleMarkAllAsRead:()=>{a.value.forEach(i=>{i.isRead=!0})}}},template:`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    `}),parameters:{docs:{description:{story:"所有通知都是已读状态，已读通知在列表中有灰色圆点标识。"}}}},C={args:{notifications:[]},render:o=>({components:{NotificationManagement:k},setup(){const a=c(o.notifications);return{notifications:a,handleMarkAsRead:i=>{const n=a.value.find(r=>r.id===i);n&&(n.isRead=!0)},handleMarkAllAsRead:()=>{a.value.forEach(i=>{i.isRead=!0})}}},template:`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    `}),parameters:{docs:{description:{story:"没有通知时显示空状态提示图标和文字。"}}}},S={args:{notifications:R},render:o=>({components:{NotificationManagement:k},setup(){const a=c(o.notifications);return{notifications:a,handleMarkAsRead:i=>{const n=a.value.find(r=>r.id===i);n&&(n.isRead=!0)},handleMarkAllAsRead:()=>{a.value.forEach(i=>{i.isRead=!0})}}},template:`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    `}),parameters:{docs:{description:{story:"点击右上角的筛选下拉菜单，选择'未读'可以只显示未读通知。同样可以选择'全部'或'已读'来切换筛选条件。"}}}},E={args:{notifications:[{id:"1",title:"超长内容通知测试",content:"这是一条非常长的通知内容，用于测试详情页面的显示效果。在左侧列表中，内容会被截断显示，只显示前30个字符。当点击列表项后，右侧详情页面会显示完整的内容，包括标题、通知内容、通知发生时间等所有信息。这样可以确保用户能够方便地查看通知的完整内容，同时保持列表的简洁性。本组件还支持时间格式化显示，根据时间距离当前时间的远近，显示'刚刚'、'X分钟前'、'X小时前'、'X天前'或具体日期时间。",timestamp:new Date,isRead:!1}]},render:o=>({components:{NotificationManagement:k},setup(){const a=c(o.notifications);return{notifications:a,handleMarkAsRead:i=>{const n=a.value.find(r=>r.id===i);n&&(n.isRead=!0)},handleMarkAllAsRead:()=>{a.value.forEach(i=>{i.isRead=!0})}}},template:`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    `}),parameters:{docs:{description:{story:"测试长内容通知。在左侧列表中，内容会被截断显示，只显示前30个字符。点击后在右侧详情页面可以查看完整内容。"}}}},j={args:{notifications:[...R,...R.map((o,a)=>({...o,id:`${o.id}-${a}`,timestamp:new Date(Date.now()-(a+10)*24*60*60*1e3)})),...R.map((o,a)=>({...o,id:`${o.id}-${a+10}`,timestamp:new Date(Date.now()-(a+20)*24*60*60*1e3)}))]},render:o=>({components:{NotificationManagement:k},setup(){const a=c(o.notifications);return{notifications:a,handleMarkAsRead:i=>{const n=a.value.find(r=>r.id===i);n&&(n.isRead=!0)},handleMarkAllAsRead:()=>{a.value.forEach(i=>{i.isRead=!0})}}},template:`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    `}),parameters:{docs:{description:{story:"当通知数量很多时，左侧列表会显示滚动条。支持滚动浏览所有通知，并可以随时点击查看详情。"}}}},$={args:{notifications:R},render:o=>({components:{NotificationManagement:k},setup(){const a=c(o.notifications);return{notifications:a,handleMarkAsRead:i=>{const n=a.value.find(r=>r.id===i);n&&(n.isRead=!0)},handleMarkAllAsRead:()=>{a.value.forEach(i=>{i.isRead=!0})}}},template:`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    `}),parameters:{docs:{description:{story:"完整的交互示例：可以点击列表项查看详情、筛选通知、点击未读通知自动标记为已读。尝试点击左侧列表中的通知，观察右侧详情页面的变化。"}}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications
  },
  render: args => ({
    components: {
      NotificationManagement
    },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);
      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
        if (notification) {
          notification.isRead = true;
        }
      };
      const handleMarkAllAsRead = () => {
        notifications.value.forEach((n: Notification) => {
          n.isRead = true;
        });
      };
      const handleMarkSelectedAsRead = (ids: string[]) => {
        ids.forEach(id => {
          const notification = notifications.value.find((n: Notification) => n.id === id);
          if (notification) {
            notification.isRead = true;
          }
        });
      };
      return {
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead,
        handleMarkSelectedAsRead
      };
    },
    template: \`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
        @mark-selected-as-read="handleMarkSelectedAsRead"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "默认状态，显示所有通知，左侧列表，右侧详情。点击列表项可以查看完整详情，未读通知点击后会自动标记为已读。支持多选模式，可以批量标记已读。"
      }
    }
  }
}`,...N.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications.map(n => ({
      ...n,
      isRead: false
    }))
  },
  render: args => ({
    components: {
      NotificationManagement
    },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);
      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
        if (notification) {
          notification.isRead = true;
        }
      };
      const handleMarkAllAsRead = () => {
        notifications.value.forEach((n: Notification) => {
          n.isRead = true;
        });
      };
      const handleMarkSelectedAsRead = (ids: string[]) => {
        ids.forEach(id => {
          const notification = notifications.value.find((n: Notification) => n.id === id);
          if (notification) {
            notification.isRead = true;
          }
        });
      };
      return {
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead,
        handleMarkSelectedAsRead
      };
    },
    template: \`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
        @mark-selected-as-read="handleMarkSelectedAsRead"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "所有通知都是未读状态，未读通知在列表中有蓝色圆点标识，点击后会自动标记为已读。支持多选模式批量标记已读。"
      }
    }
  }
}`,..._.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications.map(n => ({
      ...n,
      isRead: true
    }))
  },
  render: args => ({
    components: {
      NotificationManagement
    },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);
      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
        if (notification) {
          notification.isRead = true;
        }
      };
      const handleMarkAllAsRead = () => {
        notifications.value.forEach((n: Notification) => {
          n.isRead = true;
        });
      };
      return {
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead
      };
    },
    template: \`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "所有通知都是已读状态，已读通知在列表中有灰色圆点标识。"
      }
    }
  }
}`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: []
  },
  render: args => ({
    components: {
      NotificationManagement
    },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);
      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
        if (notification) {
          notification.isRead = true;
        }
      };
      const handleMarkAllAsRead = () => {
        notifications.value.forEach((n: Notification) => {
          n.isRead = true;
        });
      };
      return {
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead
      };
    },
    template: \`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "没有通知时显示空状态提示图标和文字。"
      }
    }
  }
}`,...C.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications
  },
  render: args => ({
    components: {
      NotificationManagement
    },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);
      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
        if (notification) {
          notification.isRead = true;
        }
      };
      const handleMarkAllAsRead = () => {
        notifications.value.forEach((n: Notification) => {
          n.isRead = true;
        });
      };
      return {
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead
      };
    },
    template: \`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "点击右上角的筛选下拉菜单，选择'未读'可以只显示未读通知。同样可以选择'全部'或'已读'来切换筛选条件。"
      }
    }
  }
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: [{
      id: "1",
      title: "超长内容通知测试",
      content: "这是一条非常长的通知内容，用于测试详情页面的显示效果。在左侧列表中，内容会被截断显示，只显示前30个字符。当点击列表项后，右侧详情页面会显示完整的内容，包括标题、通知内容、通知发生时间等所有信息。这样可以确保用户能够方便地查看通知的完整内容，同时保持列表的简洁性。本组件还支持时间格式化显示，根据时间距离当前时间的远近，显示'刚刚'、'X分钟前'、'X小时前'、'X天前'或具体日期时间。",
      timestamp: new Date(),
      isRead: false
    }]
  },
  render: args => ({
    components: {
      NotificationManagement
    },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);
      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
        if (notification) {
          notification.isRead = true;
        }
      };
      const handleMarkAllAsRead = () => {
        notifications.value.forEach((n: Notification) => {
          n.isRead = true;
        });
      };
      return {
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead
      };
    },
    template: \`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "测试长内容通知。在左侧列表中，内容会被截断显示，只显示前30个字符。点击后在右侧详情页面可以查看完整内容。"
      }
    }
  }
}`,...E.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: [...sampleNotifications, ...sampleNotifications.map((n, i) => ({
      ...n,
      id: \`\${n.id}-\${i}\`,
      timestamp: new Date(Date.now() - (i + 10) * 24 * 60 * 60 * 1000)
    })), ...sampleNotifications.map((n, i) => ({
      ...n,
      id: \`\${n.id}-\${i + 10}\`,
      timestamp: new Date(Date.now() - (i + 20) * 24 * 60 * 60 * 1000)
    }))]
  },
  render: args => ({
    components: {
      NotificationManagement
    },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);
      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
        if (notification) {
          notification.isRead = true;
        }
      };
      const handleMarkAllAsRead = () => {
        notifications.value.forEach((n: Notification) => {
          n.isRead = true;
        });
      };
      return {
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead
      };
    },
    template: \`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "当通知数量很多时，左侧列表会显示滚动条。支持滚动浏览所有通知，并可以随时点击查看详情。"
      }
    }
  }
}`,...j.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications
  },
  render: args => ({
    components: {
      NotificationManagement
    },
    setup() {
      const notifications = ref<Notification[]>(args.notifications);
      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find((n: Notification) => n.id === id);
        if (notification) {
          notification.isRead = true;
        }
      };
      const handleMarkAllAsRead = () => {
        notifications.value.forEach((n: Notification) => {
          n.isRead = true;
        });
      };
      return {
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead
      };
    },
    template: \`
      <NotificationManagement
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "完整的交互示例：可以点击列表项查看详情、筛选通知、点击未读通知自动标记为已读。尝试点击左侧列表中的通知，观察右侧详情页面的变化。"
      }
    }
  }
}`,...$.parameters?.docs?.source}}};const Ge=["Default","AllUnread","AllRead","Empty","FilterUnread","LongContent","ManyNotifications","Interactive"];export{D as AllRead,_ as AllUnread,N as Default,C as Empty,S as FilterUnread,$ as Interactive,E as LongContent,j as ManyNotifications,Ge as __namedExportsOrder,Ke as default};

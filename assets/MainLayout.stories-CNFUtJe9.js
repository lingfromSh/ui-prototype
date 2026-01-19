import{d as L,r as v,aG as A,f as N,i as e,v as b,e as _,o as D}from"./iframe-Dlxj2Qom.js";import{N as U}from"./NotificationBell-leFWtIK1.js";import{N as S}from"./NotificationPanel-ClhmLHLX.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const I=""+new URL("../vite.svg",import.meta.url).href,$={class:"min-h-screen bg-gray-50"},j={class:"bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-30"},P={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},q={class:"flex items-center justify-between h-16"},B={class:"flex items-center space-x-4"},E={class:"pt-16"},h=L({__name:"MainLayout",props:{notifications:{default:()=>[]}},emits:["markAsRead","markAllAsRead"],setup(n,{emit:i}){const a=n,f=i,t=v(!1),o=v(null),g=A(()=>a.notifications.filter(r=>!r.isRead).length),w=()=>{t.value=!t.value},M=()=>{t.value=!1},k=r=>{f("markAsRead",r)},R=()=>{f("markAllAsRead")};return(r,d)=>(D(),N("div",$,[e("header",j,[e("div",P,[e("div",q,[d[1]||(d[1]=e("div",{class:"flex items-center"},[e("div",{class:"flex-shrink-0"},[e("img",{src:I,alt:"Logo",class:"h-8 w-auto"})]),e("span",{class:"ml-3 text-xl font-bold text-gray-900"}," UI Design System ")],-1)),e("div",B,[e("div",{ref_key:"bellContainerRef",ref:o,class:"relative"},[b(U,{"unread-count":g.value,onClick:w},null,8,["unread-count"])],512),d[0]||(d[0]=e("div",{class:"flex items-center space-x-3"},[e("div",{class:"h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium"}," U ")],-1))])])])]),b(S,{"is-open":t.value,notifications:n.notifications,"on-mark-as-read":k,"on-mark-all-as-read":R,"bell-element":o.value,onClose:M},null,8,["is-open","notifications","bell-element"]),e("main",E,[_(r.$slots,"default",{},void 0,!0)])]))}}),s=C(h,[["__scopeId","data-v-d393847b"]]);h.__docgenInfo={exportName:"default",displayName:"MainLayout",type:1,props:[{name:"notifications",global:!1,description:"",tags:[],required:!1,type:"Notification[]",declarations:[],schema:{kind:"array",type:"Notification[]"},default:"[]"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[{name:"markAsRead",description:"",tags:[],type:"[id: string]",signature:'(event: "markAsRead", id: string): void',declarations:[],schema:["string"]},{name:"markAllAsRead",description:"",tags:[],type:"[]",signature:'(event: "markAllAsRead"): void',declarations:[],schema:[]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"notifications",type:"Notification[]",description:"",declarations:[],schema:{kind:"array",type:"Notification[]"}}],sourceFiles:"/Users/ling/Documents/working/ui-design-system/src/layouts/MainLayout.vue"};const z={title:"Components/Organisms/MainLayout",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"主布局组件，包含固定顶部栏和通知系统。顶部栏包含Logo、铃铛通知按钮和用户头像。"}}},argTypes:{notifications:{control:"object",description:"通知列表数据",table:{category:"Content"}}}},y=[{id:"1",title:"系统更新通知",content:"系统将于今晚22:00进行维护升级，预计耗时2小时。",timestamp:new Date(Date.now()-300*1e3),isRead:!1},{id:"2",title:"新功能上线",content:"全新的通知系统已上线，点击查看详情。",timestamp:new Date(Date.now()-1800*1e3),isRead:!1},{id:"3",title:"任务提醒",content:"您有一个待处理的任务即将到期，请及时处理。",timestamp:new Date(Date.now()-7200*1e3),isRead:!0},{id:"4",title:"欢迎加入",content:"欢迎来到UI Design System，开始您的组件设计之旅。",timestamp:new Date(Date.now()-1440*60*1e3),isRead:!0},{id:"5",title:"安全警告",content:"检测到您的账户在异地登录，如非本人操作请立即修改密码。",timestamp:new Date(Date.now()-4320*60*1e3),isRead:!1}],l={render:()=>({components:{MainLayout:s},setup(){return{sampleNotifications:y}},template:`
      <MainLayout :notifications="sampleNotifications">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              欢迎使用 MainLayout
            </h1>
            <p class="text-gray-600">
              这是主布局组件的默认示例。点击右上角的铃铛图标可以查看通知面板。
            </p>
          </div>
        </div>
      </MainLayout>
    `})},c={render:()=>({components:{MainLayout:s},template:`
      <MainLayout :notifications="[]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              没有通知
            </h1>
            <p class="text-gray-600">
              当没有通知时，铃铛按钮不会显示未读数量徽章。
            </p>
          </div>
        </div>
      </MainLayout>
    `}),parameters:{docs:{description:{story:"没有通知时，铃铛按钮不会显示红色徽章。"}}}},m={render:()=>({components:{MainLayout:s},setup(){return{allUnread:y.map(i=>({...i,isRead:!1}))}},template:`
      <MainLayout :notifications="allUnread">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              全部未读
            </h1>
            <p class="text-gray-600">
              铃铛徽章显示所有未读通知数量。点击铃铛查看通知面板。
            </p>
          </div>
        </div>
      </MainLayout>
    `}),parameters:{docs:{description:{story:"所有通知都是未读状态，铃铛徽章显示总数。"}}}},p={render:()=>({components:{MainLayout:s},setup(){return{manyUnread:Array.from({length:100},(i,a)=>({id:`notification-${a}`,title:`通知 ${a+1}`,content:`这是第 ${a+1} 条通知的内容。`,timestamp:new Date(Date.now()-(a+1)*60*60*1e3),isRead:!1}))}},template:`
      <MainLayout :notifications="manyUnread">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              大量未读通知
            </h1>
            <p class="text-gray-600">
              当未读数量超过99时，铃铛徽章显示"99+"。
            </p>
          </div>
        </div>
      </MainLayout>
    `}),parameters:{docs:{description:{story:"未读数量超过99时，徽章显示'99+'。"}}}},x={render:()=>({components:{MainLayout:s},setup(){return{sampleNotifications:y}},template:`
      <MainLayout :notifications="sampleNotifications">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">仪表板</h1>
            <p class="text-gray-600">欢迎回来，查看您的最新数据。</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div class="text-3xl font-bold text-blue-600 mb-2">1,234</div>
              <div class="text-sm text-gray-600">总访问量</div>
            </div>
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div class="text-3xl font-bold text-green-600 mb-2">567</div>
              <div class="text-sm text-gray-600">新增用户</div>
            </div>
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div class="text-3xl font-bold text-purple-600 mb-2">89</div>
              <div class="text-sm text-gray-600">待处理任务</div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">最近活动</h2>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span class="text-blue-600">U</span>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-900">用户完成了一项任务</div>
                  <div class="text-xs text-gray-500">2分钟前</div>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span class="text-green-600">S</span>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-900">系统更新成功</div>
                  <div class="text-xs text-gray-500">1小时前</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    `}),parameters:{docs:{description:{story:"展示一个完整的仪表板页面布局。"}}}},u={render:()=>({components:{MainLayout:s},setup(){const n=ref(y);return{notifications:n,handleMarkAsRead:t=>{const o=n.value.find(g=>g.id===t);o&&(o.isRead=!0)},handleMarkAllAsRead:()=>{n.value.forEach(t=>{t.isRead=!0})},addNotification:()=>{const t=(n.value.length+1).toString();n.value.unshift({id:t,title:`新通知 ${t}`,content:"这是一条新添加的通知。",timestamp:new Date,isRead:!1})}}},template:`
      <MainLayout
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              交互式示例
            </h1>
            <p class="text-gray-600 mb-6">
              点击右上角的铃铛图标查看通知面板。您可以：
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>点击铃铛打开/关闭通知面板</li>
              <li>点击通知标记为已读</li>
              <li>点击"全部已读"标记所有通知为已读</li>
              <li>使用Tab切换查看全部/已读/未读通知</li>
            </ul>
            <button
              @click="addNotification"
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              添加新通知
            </button>
            <p class="mt-4 text-sm text-gray-500">
              当前未读数量: {{ notifications.filter(n => !n.isRead).length }}
            </p>
          </div>
        </div>
      </MainLayout>
    `}),parameters:{docs:{description:{story:"完整的交互示例，可以添加通知、标记已读等操作。"}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MainLayout
    },
    setup() {
      return {
        sampleNotifications
      };
    },
    template: \`
      <MainLayout :notifications="sampleNotifications">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              欢迎使用 MainLayout
            </h1>
            <p class="text-gray-600">
              这是主布局组件的默认示例。点击右上角的铃铛图标可以查看通知面板。
            </p>
          </div>
        </div>
      </MainLayout>
    \`
  })
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MainLayout
    },
    template: \`
      <MainLayout :notifications="[]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              没有通知
            </h1>
            <p class="text-gray-600">
              当没有通知时，铃铛按钮不会显示未读数量徽章。
            </p>
          </div>
        </div>
      </MainLayout>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "没有通知时，铃铛按钮不会显示红色徽章。"
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MainLayout
    },
    setup() {
      const allUnread = sampleNotifications.map(n => ({
        ...n,
        isRead: false
      }));
      return {
        allUnread
      };
    },
    template: \`
      <MainLayout :notifications="allUnread">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              全部未读
            </h1>
            <p class="text-gray-600">
              铃铛徽章显示所有未读通知数量。点击铃铛查看通知面板。
            </p>
          </div>
        </div>
      </MainLayout>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "所有通知都是未读状态，铃铛徽章显示总数。"
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MainLayout
    },
    setup() {
      const manyUnread = Array.from({
        length: 100
      }, (_, i) => ({
        id: \`notification-\${i}\`,
        title: \`通知 \${i + 1}\`,
        content: \`这是第 \${i + 1} 条通知的内容。\`,
        timestamp: new Date(Date.now() - (i + 1) * 60 * 60 * 1000),
        isRead: false
      }));
      return {
        manyUnread
      };
    },
    template: \`
      <MainLayout :notifications="manyUnread">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              大量未读通知
            </h1>
            <p class="text-gray-600">
              当未读数量超过99时，铃铛徽章显示"99+"。
            </p>
          </div>
        </div>
      </MainLayout>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "未读数量超过99时，徽章显示'99+'。"
      }
    }
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MainLayout
    },
    setup() {
      return {
        sampleNotifications
      };
    },
    template: \`
      <MainLayout :notifications="sampleNotifications">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="mb-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-2">仪表板</h1>
            <p class="text-gray-600">欢迎回来，查看您的最新数据。</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div class="text-3xl font-bold text-blue-600 mb-2">1,234</div>
              <div class="text-sm text-gray-600">总访问量</div>
            </div>
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div class="text-3xl font-bold text-green-600 mb-2">567</div>
              <div class="text-sm text-gray-600">新增用户</div>
            </div>
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div class="text-3xl font-bold text-purple-600 mb-2">89</div>
              <div class="text-sm text-gray-600">待处理任务</div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-4">最近活动</h2>
            <div class="space-y-4">
              <div class="flex items-center space-x-4">
                <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span class="text-blue-600">U</span>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-900">用户完成了一项任务</div>
                  <div class="text-xs text-gray-500">2分钟前</div>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                  <span class="text-green-600">S</span>
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-900">系统更新成功</div>
                  <div class="text-xs text-gray-500">1小时前</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "展示一个完整的仪表板页面布局。"
      }
    }
  }
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      MainLayout
    },
    setup() {
      const notifications = ref<Notification[]>(sampleNotifications);
      const handleMarkAsRead = (id: string) => {
        const notification = notifications.value.find(n => n.id === id);
        if (notification) {
          notification.isRead = true;
        }
      };
      const handleMarkAllAsRead = () => {
        notifications.value.forEach(n => {
          n.isRead = true;
        });
      };
      const addNotification = () => {
        const newId = (notifications.value.length + 1).toString();
        notifications.value.unshift({
          id: newId,
          title: \`新通知 \${newId}\`,
          content: "这是一条新添加的通知。",
          timestamp: new Date(),
          isRead: false
        });
      };
      return {
        notifications,
        handleMarkAsRead,
        handleMarkAllAsRead,
        addNotification
      };
    },
    template: \`
      <MainLayout
        :notifications="notifications"
        @mark-as-read="handleMarkAsRead"
        @mark-all-as-read="handleMarkAllAsRead"
      >
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <h1 class="text-3xl font-bold text-gray-900 mb-4">
              交互式示例
            </h1>
            <p class="text-gray-600 mb-6">
              点击右上角的铃铛图标查看通知面板。您可以：
            </p>
            <ul class="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>点击铃铛打开/关闭通知面板</li>
              <li>点击通知标记为已读</li>
              <li>点击"全部已读"标记所有通知为已读</li>
              <li>使用Tab切换查看全部/已读/未读通知</li>
            </ul>
            <button
              @click="addNotification"
              class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              添加新通知
            </button>
            <p class="mt-4 text-sm text-gray-500">
              当前未读数量: {{ notifications.filter(n => !n.isRead).length }}
            </p>
          </div>
        </div>
      </MainLayout>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "完整的交互示例，可以添加通知、标记已读等操作。"
      }
    }
  }
}`,...u.parameters?.docs?.source}}};const F=["Default","NoNotifications","AllUnread","ManyUnread","WithDashboard","Interactive"];export{m as AllUnread,l as Default,u as Interactive,p as ManyUnread,c as NoNotifications,x as WithDashboard,F as __namedExportsOrder,z as default};

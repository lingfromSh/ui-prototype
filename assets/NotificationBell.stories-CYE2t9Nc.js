import{N as p}from"./NotificationBell-leFWtIK1.js";import"./iframe-Dlxj2Qom.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Components/Atoms/NotificationBell",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"通知铃铛按钮组件，用于显示站内通知的未读数量和触发通知面板。"}}},argTypes:{unreadCount:{control:"number",description:"未读通知数量",table:{category:"Content"}},maxDisplayCount:{control:"number",description:"显示的最大数量，超过此值显示为'maxDisplayCount+'（默认值为99）",table:{category:"Content"}}}},e={args:{unreadCount:0}},a={args:{unreadCount:1}},t={args:{unreadCount:5}},n={args:{unreadCount:99}},s={args:{unreadCount:150},parameters:{docs:{description:{story:"未读数量超过99时显示'99+'"}}}},r={args:{unreadCount:0},render:()=>({components:{NotificationBell:p},template:`
      <div class="flex flex-wrap gap-8 items-center p-8 bg-white rounded-lg">
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="0" />
          <span class="text-sm text-gray-600">无未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="1" />
          <span class="text-sm text-gray-600">1条未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="5" />
          <span class="text-sm text-gray-600">5条未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="50" />
          <span class="text-sm text-gray-600">50条未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="99" />
          <span class="text-sm text-gray-600">99条未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="100" />
          <span class="text-sm text-gray-600">99+</span>
        </div>
      </div>
    `})},o={args:{unreadCount:3},parameters:{docs:{description:{story:"点击铃铛按钮会触发click事件，可用于打开通知面板。"}}}},c={args:{unreadCount:150,maxDisplayCount:99},parameters:{docs:{description:{story:"默认maxDisplayCount为99，超过99显示'99+'"}}}},i={args:{unreadCount:150,maxDisplayCount:999},parameters:{docs:{description:{story:"自定义maxDisplayCount为999，超过999显示'999+'"}}}},l={args:{unreadCount:0},render:()=>({components:{NotificationBell:p},template:`
      <div class="flex flex-wrap gap-8 items-center p-8 bg-white rounded-lg">
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="50" :max-count="99" />
          <span class="text-sm text-gray-600">maxDisplayCount=99, unread=50</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="100" :max-count="99" />
          <span class="text-sm text-gray-600">maxDisplayCount=99, unread=100 (99+)</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="500" :max-count="999" />
          <span class="text-sm text-gray-600">maxDisplayCount=999, unread=500</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="1000" :max-count="999" />
          <span class="text-sm text-gray-600">maxDisplayCount=999, unread=1000 (999+)</span>
        </div>
      </div>
    `}),parameters:{docs:{description:{story:"展示不同maxDisplayCount设置的效果。maxDisplayCount用于控制显示的最大数量，超过此值会显示为'maxDisplayCount+'。"}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    unreadCount: 0
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    unreadCount: 1
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    unreadCount: 5
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    unreadCount: 99
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    unreadCount: 150
  },
  parameters: {
    docs: {
      description: {
        story: "未读数量超过99时显示'99+'"
      }
    }
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    unreadCount: 0
  },
  render: () => ({
    components: {
      NotificationBell
    },
    template: \`
      <div class="flex flex-wrap gap-8 items-center p-8 bg-white rounded-lg">
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="0" />
          <span class="text-sm text-gray-600">无未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="1" />
          <span class="text-sm text-gray-600">1条未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="5" />
          <span class="text-sm text-gray-600">5条未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="50" />
          <span class="text-sm text-gray-600">50条未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="99" />
          <span class="text-sm text-gray-600">99条未读</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="100" />
          <span class="text-sm text-gray-600">99+</span>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    unreadCount: 3
  },
  parameters: {
    docs: {
      description: {
        story: "点击铃铛按钮会触发click事件，可用于打开通知面板。"
      }
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    unreadCount: 150,
    maxDisplayCount: 99
  },
  parameters: {
    docs: {
      description: {
        story: "默认maxDisplayCount为99，超过99显示'99+'"
      }
    }
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    unreadCount: 150,
    maxDisplayCount: 999
  },
  parameters: {
    docs: {
      description: {
        story: "自定义maxDisplayCount为999，超过999显示'999+'"
      }
    }
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    unreadCount: 0
  },
  render: () => ({
    components: {
      NotificationBell
    },
    template: \`
      <div class="flex flex-wrap gap-8 items-center p-8 bg-white rounded-lg">
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="50" :max-count="99" />
          <span class="text-sm text-gray-600">maxDisplayCount=99, unread=50</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="100" :max-count="99" />
          <span class="text-sm text-gray-600">maxDisplayCount=99, unread=100 (99+)</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="500" :max-count="999" />
          <span class="text-sm text-gray-600">maxDisplayCount=999, unread=500</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <NotificationBell :unread-count="1000" :max-count="999" />
          <span class="text-sm text-gray-600">maxDisplayCount=999, unread=1000 (999+)</span>
        </div>
      </div>
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: "展示不同maxDisplayCount设置的效果。maxDisplayCount用于控制显示的最大数量，超过此值会显示为'maxDisplayCount+'。"
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const f=["NoUnread","OneUnread","MultipleUnread","ManyUnread","OverLimit","AllVariants","Interactive","CustommaxDisplayCount99","CustommaxDisplayCount999","CustommaxDisplayCountExamples"];export{r as AllVariants,c as CustommaxDisplayCount99,i as CustommaxDisplayCount999,l as CustommaxDisplayCountExamples,o as Interactive,n as ManyUnread,t as MultipleUnread,e as NoUnread,a as OneUnread,s as OverLimit,f as __namedExportsOrder,g as default};

import{B,f as r,o as a,h as o,i as x,m as t,e as n,d as w,r as T,c as S,a as W,b as j,u as C,w as V,n as q,g as F}from"./iframe-Bh-WmPjs.js";import{s as I,p as H}from"./utils-BUK5b5Bj.js";import"./preload-helper-PPVm8Dsz.js";var M=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,D={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},N=B.extend({name:"card",style:M,classes:D}),R={name:"BaseCard",extends:I,style:N,provide:function(){return{$pcCard:this,$parentInstance:this}}},k={name:"Card",extends:R,inheritAttrs:!1};function U(e,v,h,P,O,y){return a(),r("div",t({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(a(),r("div",t({key:0,class:e.cx("header")},e.ptm("header")),[n(e.$slots,"header")],16)):o("",!0),x("div",t({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(a(),r("div",t({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(a(),r("div",t({key:0,class:e.cx("title")},e.ptm("title")),[n(e.$slots,"title")],16)):o("",!0),e.$slots.subtitle?(a(),r("div",t({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[n(e.$slots,"subtitle")],16)):o("",!0)],16)):o("",!0),x("div",t({class:e.cx("content")},e.ptm("content")),[n(e.$slots,"content")],16),e.$slots.footer?(a(),r("div",t({key:1,class:e.cx("footer")},e.ptm("footer")),[n(e.$slots,"footer")],16)):o("",!0)],16)],16)}k.render=U;const s=w({__name:"Card",setup(e){const v=T({root:`flex flex-col rounded-xl
        bg-surface-0 dark:bg-surface-900 
        text-surface-700 dark:text-surface-0
        shadow-md`,header:"",body:"p-5 flex flex-col gap-2",caption:"flex flex-col gap-2",title:"font-medium text-xl",subtitle:"text-surface-500 dark:text-surface-400",content:"",footer:""});return(h,P)=>(a(),S(C(k),{unstyled:"",pt:v.value,ptOptions:{mergeProps:C(H)}},W({_:2},[j(h.$slots,(O,y)=>({name:y,fn:V($=>[n(h.$slots,y,q(F($??{})))])}))]),1032,["pt","ptOptions"]))}});s.__docgenInfo={exportName:"default",displayName:"Card",type:1,props:[{name:"dt",global:!1,description:"It generates scoped CSS variables using design tokens for the component.",tags:[],required:!1,type:"any",declarations:[],schema:"any"},{name:"pt",global:!1,description:"Used to pass attributes to DOM elements inside the component.",tags:[{name:"type",text:"{CardPassThroughOptions}"}],required:!1,type:"PassThrough<CardPassThroughOptions>",declarations:[],schema:{kind:"enum",type:"PassThrough<CardPassThroughOptions>",schema:["object",{kind:"object",type:"CardPassThroughOptions"}]}},{name:"ptOptions",global:!1,description:"Used to configure passthrough(pt) options of the component.",tags:[{name:"type",text:"{PassThroughOptions}"}],required:!1,type:"PassThroughOptions",declarations:[],schema:{kind:"object",type:"PassThroughOptions"}},{name:"unstyled",global:!1,description:"When enabled, it removes component related styles in the core.",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[],slots:[],exposed:[{name:"dt",type:"any",description:"It generates scoped CSS variables using design tokens for the component.",declarations:[],schema:"any"},{name:"pt",type:"PassThrough<CardPassThroughOptions>",description:"Used to pass attributes to DOM elements inside the component.",declarations:[],schema:{kind:"enum",type:"PassThrough<CardPassThroughOptions>",schema:["object",{kind:"object",type:"CardPassThroughOptions"}]}},{name:"ptOptions",type:"PassThroughOptions",description:"Used to configure passthrough(pt) options of the component.",declarations:[],schema:{kind:"object",type:"PassThroughOptions"}},{name:"unstyled",type:"boolean",description:"When enabled, it removes component related styles in the core.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/Users/ling/Documents/working/ui-design-system/src/volt/Card.vue"};const L={title:"Volt/Molecules/Card",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"卡片组件用于展示内容块，包含标题、副标题、内容和页脚等部分。"}}},argTypes:{header:{control:"text",description:"卡片头部内容",table:{category:"Content"}},title:{control:"text",description:"卡片标题",table:{category:"Content"}},subtitle:{control:"text",description:"卡片副标题",table:{category:"Content"}},footer:{control:"text",description:"卡片底部内容",table:{category:"Content"}}}},l={args:{title:"卡片标题",subtitle:"这是一个副标题"}},d={args:{header:"头部内容",title:"卡片标题",subtitle:"这是一个副标题"}},i={args:{title:"卡片标题",subtitle:"这是一个副标题",footer:"底部内容"}},c={args:{header:"头部内容",title:"卡片标题",subtitle:"这是一个副标题",footer:"底部内容"}},p={args:{title:"自定义内容",subtitle:"支持自定义内容"},render:e=>({components:{Card:s},setup(){return{args:e}},template:`
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #content>
          <div class="p-4">
            <p class="text-surface-700 dark:text-surface-0">
              这是卡片的自定义内容区域。您可以在这里放置任何内容，包括文本、图片、表单等。
            </p>
            <p class="mt-4 text-surface-500 dark:text-surface-400">
              Volt 卡片组件提供了灵活的插槽系统，让您可以完全自定义卡片的各个部分。
            </p>
          </div>
        </template>
      </Card>
    `})},u={args:{title:"操作卡片",subtitle:"包含操作按钮"},render:e=>({components:{Card:s},setup(){return{args:e}},template:`
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #content>
          <div class="p-4">
            <p class="text-surface-700 dark:text-surface-0 mb-4">
              这是一个包含操作按钮的卡片示例。
            </p>
            <div class="flex gap-2">
              <Button label="确认" />
              <Button label="取消" outlined />
            </div>
          </div>
        </template>
      </Card>
    `})},m={args:{title:"图片卡片",subtitle:"包含图片展示"},render:e=>({components:{Card:s},setup(){return{args:e}},template:`
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #content>
          <div>
            <div class="w-full h-48 bg-surface-100 dark:bg-surface-800 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-surface-400 dark:text-surface-500">图片区域</span>
            </div>
            <p class="p-4 text-surface-700 dark:text-surface-0">
              这是一个包含图片展示的卡片示例。您可以在内容区域放置任何类型的媒体内容。
            </p>
          </div>
        </template>
      </Card>
    `})},f={render:()=>({components:{Card:s},template:`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="基础卡片" subtitle="简单的卡片">
          <template #content>
            <div class="p-4 text-surface-700 dark:text-surface-0">
              基础卡片组件，包含标题和副标题。
            </div>
          </template>
        </Card>
        <Card title="内容卡片" subtitle="带有内容">
          <template #content>
            <div class="p-4">
              <p class="text-surface-700 dark:text-surface-0 mb-2">
                这是卡片的主体内容区域。
              </p>
              <p class="text-surface-500 dark:text-surface-400">
                支持多行文本和其他 HTML 内容。
              </p>
            </div>
          </template>
        </Card>
        <Card title="操作卡片" subtitle="带有操作按钮">
          <template #content>
            <div class="p-4">
              <p class="text-surface-700 dark:text-surface-0 mb-4">
                卡片可以包含操作按钮。
              </p>
              <Button label="查看详情" />
            </div>
          </template>
        </Card>
      </div>
    `})},g={args:{title:"自定义头部",subtitle:"自定义头部内容"},render:e=>({components:{Card:s},setup(){return{args:e}},template:`
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #header>
          <div class="flex items-center justify-between p-4 border-b border-surface-200 dark:border-surface-700">
            <div>
              <h3 class="font-medium text-lg">自定义头部</h3>
              <p class="text-surface-500 dark:text-surface-400 text-sm">这是自定义的头部内容</p>
            </div>
            <Button icon="pi pi-ellipsis-h" text />
          </div>
        </template>
        <template #content>
          <div class="p-4 text-surface-700 dark:text-surface-0">
            使用 header 插槽可以完全自定义卡片的头部区域。
          </div>
        </template>
      </Card>
    `})},b={args:{title:"自定义底部",subtitle:"自定义底部内容"},render:e=>({components:{Card:s},setup(){return{args:e}},template:`
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #content>
          <div class="p-4 text-surface-700 dark:text-surface-0">
            使用 footer 插槽可以完全自定义卡片的底部区域。
          </div>
        </template>
        <template #footer>
          <div class="flex items-center justify-between p-4 border-t border-surface-200 dark:border-surface-700">
            <span class="text-surface-500 dark:text-surface-400 text-sm">共 5 个项目</span>
            <div class="flex gap-2">
              <Button label="取消" outlined />
              <Button label="确定" />
            </div>
          </div>
        </template>
      </Card>
    `})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "卡片标题",
    subtitle: "这是一个副标题"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    header: "头部内容",
    title: "卡片标题",
    subtitle: "这是一个副标题"
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "卡片标题",
    subtitle: "这是一个副标题",
    footer: "底部内容"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    header: "头部内容",
    title: "卡片标题",
    subtitle: "这是一个副标题",
    footer: "底部内容"
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "自定义内容",
    subtitle: "支持自定义内容"
  },
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #content>
          <div class="p-4">
            <p class="text-surface-700 dark:text-surface-0">
              这是卡片的自定义内容区域。您可以在这里放置任何内容，包括文本、图片、表单等。
            </p>
            <p class="mt-4 text-surface-500 dark:text-surface-400">
              Volt 卡片组件提供了灵活的插槽系统，让您可以完全自定义卡片的各个部分。
            </p>
          </div>
        </template>
      </Card>
    \`
  })
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "操作卡片",
    subtitle: "包含操作按钮"
  },
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #content>
          <div class="p-4">
            <p class="text-surface-700 dark:text-surface-0 mb-4">
              这是一个包含操作按钮的卡片示例。
            </p>
            <div class="flex gap-2">
              <Button label="确认" />
              <Button label="取消" outlined />
            </div>
          </div>
        </template>
      </Card>
    \`
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "图片卡片",
    subtitle: "包含图片展示"
  },
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #content>
          <div>
            <div class="w-full h-48 bg-surface-100 dark:bg-surface-800 rounded-lg mb-4 flex items-center justify-center">
              <span class="text-surface-400 dark:text-surface-500">图片区域</span>
            </div>
            <p class="p-4 text-surface-700 dark:text-surface-0">
              这是一个包含图片展示的卡片示例。您可以在内容区域放置任何类型的媒体内容。
            </p>
          </div>
        </template>
      </Card>
    \`
  })
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Card
    },
    template: \`
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="基础卡片" subtitle="简单的卡片">
          <template #content>
            <div class="p-4 text-surface-700 dark:text-surface-0">
              基础卡片组件，包含标题和副标题。
            </div>
          </template>
        </Card>
        <Card title="内容卡片" subtitle="带有内容">
          <template #content>
            <div class="p-4">
              <p class="text-surface-700 dark:text-surface-0 mb-2">
                这是卡片的主体内容区域。
              </p>
              <p class="text-surface-500 dark:text-surface-400">
                支持多行文本和其他 HTML 内容。
              </p>
            </div>
          </template>
        </Card>
        <Card title="操作卡片" subtitle="带有操作按钮">
          <template #content>
            <div class="p-4">
              <p class="text-surface-700 dark:text-surface-0 mb-4">
                卡片可以包含操作按钮。
              </p>
              <Button label="查看详情" />
            </div>
          </template>
        </Card>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: "自定义头部",
    subtitle: "自定义头部内容"
  },
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #header>
          <div class="flex items-center justify-between p-4 border-b border-surface-200 dark:border-surface-700">
            <div>
              <h3 class="font-medium text-lg">自定义头部</h3>
              <p class="text-surface-500 dark:text-surface-400 text-sm">这是自定义的头部内容</p>
            </div>
            <Button icon="pi pi-ellipsis-h" text />
          </div>
        </template>
        <template #content>
          <div class="p-4 text-surface-700 dark:text-surface-0">
            使用 header 插槽可以完全自定义卡片的头部区域。
          </div>
        </template>
      </Card>
    \`
  })
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: "自定义底部",
    subtitle: "自定义底部内容"
  },
  render: args => ({
    components: {
      Card
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <Card :title="args.title" :subtitle="args.subtitle">
        <template #content>
          <div class="p-4 text-surface-700 dark:text-surface-0">
            使用 footer 插槽可以完全自定义卡片的底部区域。
          </div>
        </template>
        <template #footer>
          <div class="flex items-center justify-between p-4 border-t border-surface-200 dark:border-surface-700">
            <span class="text-surface-500 dark:text-surface-400 text-sm">共 5 个项目</span>
            <div class="flex gap-2">
              <Button label="取消" outlined />
              <Button label="确定" />
            </div>
          </div>
        </template>
      </Card>
    \`
  })
}`,...b.parameters?.docs?.source}}};const K=["Default","WithHeader","WithFooter","FullFeatured","WithCustomContent","WithActions","WithImage","CardVariants","WithCustomHeader","WithCustomFooter"];export{f as CardVariants,l as Default,c as FullFeatured,u as WithActions,p as WithCustomContent,b as WithCustomFooter,g as WithCustomHeader,i as WithFooter,d as WithHeader,m as WithImage,K as __namedExportsOrder,L as default};

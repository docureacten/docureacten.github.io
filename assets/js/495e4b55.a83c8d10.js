"use strict";(self.webpackChunkdocubook=self.webpackChunkdocubook||[]).push([[9524],{1376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var s=t(4848),r=t(8453);const i={},o="When and When Not to Use Fragments",a={id:"Component/5-3-When and When Not to Use Fragments",title:"When and When Not to Use Fragments",description:"React Fragments (` or the shorthand `) are a simple yet powerful tool in the React ecosystem that help manage and structure the rendering of elements. In this section, we will explore the specific scenarios where using Fragments is advantageous, as well as cases where they might not be necessary or beneficial.",source:"@site/docs/5-Component/5-3-When and When Not to Use Fragments.md",sourceDirName:"5-Component",slug:"/Component/5-3-When and When Not to Use Fragments",permalink:"/Component/5-3-When and When Not to Use Fragments",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to Use Self-Closing Tags",permalink:"/Component/5-2-How to Use Self-Closing Tags"},next:{title:"Returning JSX from Component Functions",permalink:"/Component/5-4-Returning JSX from Component Functions"}},l={},c=[{value:"What Are React Fragments?",id:"what-are-react-fragments",level:2},{value:"Example: Using Fragments",id:"example-using-fragments",level:3},{value:"When to Use Fragments",id:"when-to-use-fragments",level:3},{value:"When Not to Use Fragments",id:"when-not-to-use-fragments",level:3},{value:"Further Reading",id:"further-reading",level:2},{value:"Summary",id:"summary",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"when-and-when-not-to-use-fragments",children:"When and When Not to Use Fragments"}),"\n",(0,s.jsxs)(n.p,{children:["React Fragments (",(0,s.jsx)(n.code,{children:"<React.Fragment>"})," or the shorthand ",(0,s.jsx)(n.code,{children:"<></>"}),") are a simple yet powerful tool in the React ecosystem that help manage and structure the rendering of elements. In this section, we will explore the specific scenarios where using Fragments is advantageous, as well as cases where they might not be necessary or beneficial."]}),"\n",(0,s.jsx)(n.h2,{id:"what-are-react-fragments",children:"What Are React Fragments?"}),"\n",(0,s.jsxs)(n.p,{children:["In React, a Fragment allows you to group a list of children elements without adding extra nodes to the DOM. This can be especially useful when you need to return multiple elements from a component, but don't want to wrap them in an unnecessary ",(0,s.jsx)(n.code,{children:"<div>"})," or other container elements."]}),"\n",(0,s.jsx)(n.h3,{id:"example-using-fragments",children:"Example: Using Fragments"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React from 'react';\n\nfunction ListItems() {\n  return (\n    <>\n      {/* No unnecessary div wrapping around these items */}\n      <li>Item 1</li>\n      <li>Item 2</li>\n      <li>Item 3</li>\n    </>\n  );\n}\n\nexport default ListItems;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the example above, the ",(0,s.jsx)(n.code,{children:"ListItems"})," component returns multiple ",(0,s.jsx)(n.code,{children:"<li>"})," elements. Without a Fragment, these items would need to be wrapped in an additional ",(0,s.jsx)(n.code,{children:"<div>"})," or another container, which could clutter the DOM unnecessarily."]}),"\n",(0,s.jsx)(n.h3,{id:"when-to-use-fragments",children:"When to Use Fragments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Grouping Child Elements"}),": The most common use case for Fragments is when you need to return multiple sibling elements from a component. By using Fragments, you avoid adding extra elements to the DOM, which could otherwise interfere with styling or layout."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function UserInfo() {\n  return (\n    <>\n      <h1>John Doe</h1>\n      <p>Software Engineer</p>\n    </>\n  );\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Table Rows"}),": Another key scenario is when working with ",(0,s.jsx)(n.code,{children:"<table>"})," elements. Since the ",(0,s.jsx)(n.code,{children:"<table>"})," structure is strict (e.g., ",(0,s.jsx)(n.code,{children:"<tr>"})," should only contain ",(0,s.jsx)(n.code,{children:"<td>"})," or ",(0,s.jsx)(n.code,{children:"<th>"})," elements), Fragments allow you to return multiple rows from a component without violating HTML syntax."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function TableRows() {\n  return (\n    <>\n      <tr>\n        <td>John</td>\n        <td>Doe</td>\n      </tr>\n      <tr>\n        <td>Jane</td>\n        <td>Smith</td>\n      </tr>\n    </>\n  );\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Conditional Rendering"}),": Fragments can also be useful in conditional rendering scenarios where you may need to return multiple elements based on certain conditions."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function UserProfile({ isLoggedIn }) {\n  return (\n    <>\n      {isLoggedIn ? (\n        <>\n          <h2>Welcome back!</h2>\n          <button>Logout</button>\n        </>\n      ) : (\n        <button>Login</button>\n      )}\n    </>\n  );\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"when-not-to-use-fragments",children:"When Not to Use Fragments"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Single Element Return"}),": If your component only needs to return a single element, there\u2019s no need to use a Fragment. Simply return the element directly."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function SingleElement() {\n  return <h1>Hello, World!</h1>; // No Fragment needed here\n}\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Wrapper Requirements"}),": Sometimes, you may need to wrap your components in specific elements for styling or layout purposes, such as ",(0,s.jsx)(n.code,{children:"<div>"}),", ",(0,s.jsx)(n.code,{children:"<section>"}),", or other semantic HTML tags. In such cases, a Fragment would not be appropriate, as the wrapper element is necessary."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'function ProfileCard() {\n  return (\n    <div className="profile-card">\n      <h2>John Doe</h2>\n      <p>Frontend Developer</p>\n    </div>\n  );\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Keyed Children"}),": When rendering a list of elements where each item needs a unique ",(0,s.jsx)(n.code,{children:"key"})," prop (for example, when using the ",(0,s.jsx)(n.code,{children:".map()"})," method), you might be tempted to wrap them in a Fragment. While this is fine, it's essential to remember that only the long-form ",(0,s.jsx)(n.code,{children:"<React.Fragment>"})," can accept ",(0,s.jsx)(n.code,{children:"key"})," attributes. The shorthand (",(0,s.jsx)(n.code,{children:"<> </>"}),") cannot be used in this scenario."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"function ItemList({ items }) {\n  return (\n    <React.Fragment>\n      {items.map(item => (\n        <li key={item.id}>{item.name}</li>\n      ))}\n    </React.Fragment>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you need to use the ",(0,s.jsx)(n.code,{children:"key"})," attribute, you must use the full ",(0,s.jsx)(n.code,{children:"React.Fragment"})," syntax instead of the shorthand."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"React Fragments"}),": Learn more about how Fragments work and their use cases in the official React documentation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Conditional Rendering in React"}),": Explore various techniques for rendering elements conditionally in React."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Keys in React"}),": Understand the importance of keys when rendering lists in React."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsxs)(n.p,{children:["Fragments in React are a lightweight way to group multiple child elements without adding unnecessary DOM nodes. They are particularly useful when returning multiple sibling elements, maintaining strict HTML structure (like in tables), and handling conditional rendering. However, they are not necessary when returning a single element or when a wrapper element is required for styling or layout purposes. Remember that only the full ",(0,s.jsx)(n.code,{children:"React.Fragment"})," syntax can handle ",(0,s.jsx)(n.code,{children:"key"})," attributes, making it essential in scenarios where each child needs a unique key."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var s=t(6540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
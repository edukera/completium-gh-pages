(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),o=(a(0),a(91)),l={id:"doc1",title:"FA 1.2",sidebar_label:"Implementation",slug:"/"},c={unversionedId:"doc1",id:"doc1",isDocsHomePage:!1,title:"FA 1.2",description:"FA 1.2 is the fungible token specification for Tezos.",source:"@site/docs/doc1.md",slug:"/",permalink:"/completium/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc1.md",version:"current",sidebar_label:"Implementation",sidebar:"someSidebar",next:{title:"Formal specification",permalink:"/completium/docs/doc2"}},d=[{value:"<code>totalsupply</code>",id:"totalsupply",children:[]},{value:"<code>ledger</code>",id:"ledger",children:[]},{value:"<code>allowance</code>",id:"allowance",children:[]},{value:"<code>transfer</code>",id:"transfer",children:[]},{value:"<code>approve</code>",id:"approve",children:[]},{value:"<code>getAllowance</code>",id:"getallowance",children:[]},{value:"<code>getBalance</code>",id:"getbalance",children:[]},{value:"<code>getTotalSupply</code>",id:"gettotalsupply",children:[]}],i={rightToc:d};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"FA 1.2 is the fungible ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://gitlab.com/tzip/tzip/blob/master/proposals/tzip-7/tzip-7.md"}),"token specification")," for Tezos."),Object(o.b)("h3",{id:"totalsupply"},Object(o.b)("inlineCode",{parentName:"h3"},"totalsupply")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype"}),"constant totalsupply : nat = 10_000_000\n")),Object(o.b)("h3",{id:"ledger"},Object(o.b)("inlineCode",{parentName:"h3"},"ledger")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ledger")," asset is the cap table: it holds the number of tokens for each token holder. ",Object(o.b)("inlineCode",{parentName:"p"},"totalsupply")," is the initial number of tokens held by the originator of the contract."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype",metastring:"{1}","{1}":!0}),"asset ledger identified by holder to big_map {\n  holder     : address;\n  tokens     : nat = 0;\n} initialized by {\n  { holder = caller; tokens = totalsupply }\n}\n")),Object(o.b)("h3",{id:"allowance"},Object(o.b)("inlineCode",{parentName:"h3"},"allowance")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"allowance")," asset stores the amount of tokens that can be spent by ",Object(o.b)("inlineCode",{parentName:"p"},"addr_spender")," on the behalf of addr_owner."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype",metastring:"{1}","{1}":!0}),"asset allowance identified by addr_owner addr_spender to big_map {\n  addr_owner       : address;\n  addr_spender     : address;\n  amount           : nat;\n}\n")),Object(o.b)("h3",{id:"transfer"},Object(o.b)("inlineCode",{parentName:"h3"},"transfer")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype",metastring:"{1}","{1}":!0}),'entry %transfer (%from : address, %to : address, value : nat) {\n  require {\n    r1 otherwise "NotEnoughBalance" : ledger[%from].tokens >= value;\n  }\n  effect {\n    if caller <> %from then begin\n      var current = allowance[(%from, caller)].amount;\n      dofailif(current < value, ("NotEnoughAllowance", ((value, current))));\n      allowance.update((%from, caller), { amount -=  value });\n    end;\n    ledger.update(%from, { tokens -= value });\n    ledger.addupdate(%to, { tokens += value });\n  }\n}\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Note that this entry may be used to reset (to 0) the allowance value: if the declared ",Object(o.b)("inlineCode",{parentName:"p"},"spender")," calls the entry to transfer a number of tokens equal to the  allowed amount from the approver address (",Object(o.b)("inlineCode",{parentName:"p"},"%from"),") to itself (",Object(o.b)("inlineCode",{parentName:"p"},"%to"),")."))),Object(o.b)("h3",{id:"approve"},Object(o.b)("inlineCode",{parentName:"h3"},"approve")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype",metastring:"{1}","{1}":!0}),'entry approve(spender : address, value : nat) {\n  var k = (caller, spender);\n  if allowance.contains(k) then begin\n    var previous = allowance[k].amount;\n    dofailif(previous > 0 and value > 0, (("UnsafeAllowanceChange", previous)));\n  end;\n  allowance.addupdate( k, { amount = value });\n}\n')),Object(o.b)("h3",{id:"getallowance"},Object(o.b)("inlineCode",{parentName:"h3"},"getAllowance")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype",metastring:"{1}","{1}":!0}),"getter getAllowance (owner : address, spender : address) : nat {\n  return (allowance[(owner, spender)].amount)\n}\n")),Object(o.b)("h3",{id:"getbalance"},Object(o.b)("inlineCode",{parentName:"h3"},"getBalance")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype",metastring:"{1}","{1}":!0}),"getter getBalance (owner : address) : nat {\n  return (ledger[owner].tokens)\n}\n")),Object(o.b)("h3",{id:"gettotalsupply"},Object(o.b)("inlineCode",{parentName:"h3"},"getTotalSupply")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-archetype",metastring:"{1}","{1}":!0}),"getter getTotalSupply () : nat {\n  return totalsupply\n}\n")))}s.isMDXComponent=!0}}]);
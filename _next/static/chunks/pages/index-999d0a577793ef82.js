(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7925)}])},8938:function(e,s,a){"use strict";a.r(s);var o=a(5893);a(7294),s.default=()=>(0,o.jsx)("div",{className:"inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]",role:"status",children:(0,o.jsx)("span",{className:"!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]",children:"Loading..."})})},7925:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return Home}});var o=a(5893),t=a(214),n=a.n(t),r=a(7294),l=a(5675),c=a.n(l),i=a(9008),d=a.n(i),x=a(2920);a(7967);var p=a(8938),m=a(1163);function Home(){var e,s,a,t,l,i;(0,m.useRouter)();let[u,h]=(0,r.useState)(null),[f,g]=(0,r.useState)(!1),[j,b]=(0,r.useState)("55"),[v,w]=(0,r.useState)(""),[N,y]=(0,r.useState)(!0),[D,k]=(0,r.useState)(!1),whatsappMask=e=>{e.startsWith("+55")&&(e=e.replace("+55",""));let s=e.replace(/\D/g,"");return 11===s.length?s.replace(/(\d{2})(\d{1})(\d{4})(\d{4})/,"($1) $2$3-$4"):10===s.length?s.replace(/(\d{2})(\d{4})(\d{4})/,"($1) $2-$3"):e.replace(/\D/g,"").replace(/(\d{2})(\d)/,"($1) $2").replace(/(\d{5})(\d)/,"$1-$2").replace(/(-\d{4})\d+?$/,"$1")},handleSearch=async()=>{if(!N){x.Am.error("Voc\xea precisa aceitar os termos de uso!");return}let e=v.replace(/\D/g,"");if(e.length<10){x.Am.error("Voc\xea precisa informar um n\xfamero de telefone v\xe1lido!");return}g(!0);let s="".concat(j).concat(e);try{let e=await fetch("/api/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:s})}),a=await e.json();if(a.error){alert(a.error);return}console.log(a),h(a)}catch(e){console.log(e)}finally{g(!1)}};return(0,o.jsxs)("main",{className:"relative flex flex-col px-5 text-white bg-[#0E2D19] min-h-screen".concat(n().className," min-h-screen"),children:[(0,o.jsxs)(d(),{children:[(0,o.jsx)("title",{children:"Descubra quem \xe9 o dono de um n\xfamero de Whatsapp - Dono do Zap"}),(0,o.jsx)("meta",{name:"title",content:"Descubra quem \xe9 o dono de um n\xfamero de Whatsapp - Dono do Zap"}),(0,o.jsx)("meta",{name:"description",content:"Descubra quem \xe9 o dono de um n\xfamero de Whatsapp!"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:url",content:"https://donodozap.com.br/"}),(0,o.jsx)("meta",{property:"og:title",content:"Descubra quem \xe9 o dono de um n\xfamero de Whatsapp - Dono do Zap"}),(0,o.jsx)("meta",{property:"og:description",content:"Descubra quem \xe9 o dono de um n\xfamero de Whatsapp!"})]}),(0,o.jsxs)("div",{className:"flex-1 flex flex-col justify-center gap-[32px] pt-8",children:[(0,o.jsx)("div",{className:"text-center flex flex-col items-center gap-4",children:(0,o.jsx)("div",{children:(0,o.jsx)(c(),{src:"/logo.svg",width:230,height:165,alt:""})})}),u?(0,o.jsx)("div",{children:u&&(0,o.jsxs)("div",{className:"flex flex-col items-center gap-6",children:[u.whatsapp&&(null===(e=u.whatsapp)||void 0===e?void 0:e.profilePictureUrl)&&(0,o.jsx)("div",{className:"rounded-full overflow-hidden",children:(0,o.jsx)(c(),{src:null===(s=u.whatsapp)||void 0===s?void 0:s.profilePictureUrl,width:100,height:100,alt:""})}),(0,o.jsxs)("div",{className:"flex flex-col gap-[10px] text-center",children:[u.whatsapp&&(null===(a=u.whatsapp)||void 0===a?void 0:a.exists)&&(0,o.jsxs)("span",{children:["✅ O n\xfamero informado ",(0,o.jsx)("strong",{children:"possu\xed"})," uma conta no WhatsApp."]}),u.whatsapp&&(null===(t=u.whatsapp)||void 0===t?void 0:t.isBusiness)&&(0,o.jsxs)("span",{children:["✅ A conta de WhatsApp deste n\xfamero ",(0,o.jsx)("strong",{children:"\xe9"})," empresarial (Business)."]})]}),(0,o.jsxs)("div",{className:"flex gap-4 flex-col items-center max-w-[600px]",children:[u.accounts&&(null===(l=u.accounts)||void 0===l?void 0:l.length)>=1?(0,o.jsxs)("span",{className:"text-[#FFFFFFB2] text-center h-[20px]",children:["  Nomes associados ao n\xfamero ",whatsappMask(v),":"]}):(0,o.jsxs)("span",{className:"text-[#FFFFFFB2] text-center h-[20px] mb-4",children:["   ❌ N\xe3o encontramos nomes associados ao n\xfamero ",whatsappMask(v)]}),(0,o.jsx)("div",{className:"flex flex-col gap-2 justify-center",children:u.accounts&&(null===(i=u.accounts)||void 0===i?void 0:i.map((e,s)=>{console.log(e);let a=e.DDD;return"".concat(a).concat(e.TELEFONE),(0,o.jsx)("div",{className:"p-2 rounded-lg border border-[#44B76D5E] bg-[#44B76D1A] w-full",children:e.NOME},s)}))}),(0,o.jsxs)("span",{className:"text-[10px] opacity-70 max-w-[400px] text-center uppercase",children:["*Os dados retornados n\xe3o passaram por um processo de valida\xe7\xe3o. Pode haver imprecis\xf5es, erros ou informa\xe7\xf5es desatualizadas. Leia nossos ",(0,o.jsx)("u",{className:"cursor-pointer",onClick:e=>{e.preventDefault(),k(!0)},children:"termos de uso"}),"."]}),(0,o.jsx)("button",{onClick:()=>h(null),className:"py-2 px-4 rounded-[64px] w-full md:w-[220px] bg-white  transition-all text-[#0E2D19] font-bold text-[12px] hover:bg-slate-100 uppercase tracking-[2px]",children:"Fazer outra busca"})]})]})}):(0,o.jsxs)("div",{className:"relative flex flex-col items-center gap-4",children:[(0,o.jsxs)("div",{className:"w-full max-w-[574px] h-[78px] flex rounded-[75px] overflow-hidden bg-white relative",children:[(0,o.jsx)("input",{value:whatsappMask(v),placeholder:"00 00000-0000",onChange:e=>{w(e.target.value)},type:"text",className:"w-full text-[14px] md:text-[18px] font-normal outline-none text-[#111111a9] px-[64px] md:px-[78px] max-w-[330px]",onKeyDown:e=>{"Enter"===e.key&&handleSearch()}}),(0,o.jsx)("button",{disabled:f,onClick:handleSearch,className:"absolute py-4 px-6 rounded-[64px] top-0 bottom-0 my-2 mr-3 right-0 w-[145px] bg-green-500 hover:bg-green-600 transition-all text-white font-bold text-[14px]",children:f?(0,o.jsx)(p.default,{}):"DESCOBRIR!"}),(0,o.jsx)("div",{className:"absolute top-0 bottom-0 flex items-center left-8",children:(0,o.jsx)("span",{className:"text-black text-[14px] md:text-[18px]",children:"+55"})})]}),(0,o.jsxs)("label",{className:"text-[#FFFFFFB2] text-centerc",children:[(0,o.jsx)("input",{type:"checkbox",className:"accent-green-500",checked:N,onChange:e=>y(e.target.checked)}),'\xa0 Ao clicar em "Descobrir!" voc\xea concorda com nossos ',(0,o.jsx)("u",{className:"cursor-pointer",onClick:e=>{e.preventDefault(),k(!0)},children:"termos de uso"}),"."]})]})]}),(0,o.jsxs)("div",{className:"flex p-4 mt-8 md:px-8 md:py-6 rounded-lg border items-center md:mx-auto border-[#44B76D5E] bg-[#44B76D1A] gap-4 md:gap-12 flex-col md:flex-row",children:[(0,o.jsxs)("div",{className:"grid grid-cols-[40px_1fr] gap-3",children:[(0,o.jsx)("div",{children:(0,o.jsx)(c(),{src:"/idea.svg",width:40,height:58,alt:""})}),(0,o.jsxs)("p",{className:"max-w-[400px] text-sm",children:["Estamos pensando em criar uma ferramenta completa de investiga\xe7\xe3o. ",(0,o.jsx)("strong",{children:"Acha uma boa ideia?"})]})]}),(0,o.jsx)("button",{disabled:f,onClick:()=>{window.open("https://swiy.co/donodozap","_blank")},className:"py-4 px-6 rounded-[64px] top-0 bottom-0 my-2 right-0 w-full md:w-[180px] bg-white  transition-all text-[#0E2D19] font-bold text-[12px] hover:bg-slate-100 tracking-[2px]",children:"SIM, EU QUERO"})]}),(0,o.jsx)("div",{className:"flex flex-col  items-center text-center opacity-70 text-[12px] my-8",children:(0,o.jsx)("span",{children:"\xa9 2023 Dono Do Zap"})}),(0,o.jsx)(x.Ix,{}),D&&(0,o.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50",children:(0,o.jsxs)("div",{className:"bg-white text-black p-4 py-6 rounded flex gap-6 flex-col w-full max-w-[420px]",children:[(0,o.jsx)("div",{children:(0,o.jsx)("h1",{className:"font-bold text-lg text-center uppercase",children:"Termos de uso"})}),(0,o.jsxs)("div",{className:"text-[14px] flex flex-col gap-4",children:[(0,o.jsx)("p",{children:"Ao utilizar nosso mecanismo de busca, por favor, esteja ciente e concorde com o seguinte:"}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Dados N\xe3o Validados:"})," As informa\xe7\xf5es retornadas por este aplicativo n\xe3o passaram por um processo de valida\xe7\xe3o. Pode haver imprecis\xf5es, erros ou informa\xe7\xf5es desatualizadas."]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Uso por Sua Conta e Risco:"})," Qualquer decis\xe3o ou a\xe7\xe3o tomada com base nas informa\xe7\xf5es fornecidas pelo nosso aplicativo \xe9 de sua inteira responsabilidade."]}),(0,o.jsxs)("p",{children:[(0,o.jsx)("strong",{children:"Isen\xe7\xe3o de Responsabilidade:"})," N\xe3o nos responsabilizamos por quaisquer consequ\xeancias, danos ou preju\xedzos, diretos ou indiretos, resultantes do uso das informa\xe7\xf5es fornecidas."]}),(0,o.jsx)("button",{disabled:f,onClick:()=>{k(!1),y(!0)},className:"py-4 px-6 rounded-[64px] bg-green-500 hover:bg-green-600 transition-all text-black font-bold text-[14px]",children:"Estou ciente, e concordo com os Termos de Uso!"})]})]})})]})}}},function(e){e.O(0,[363,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);
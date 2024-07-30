"use strict";(self.webpackChunksp_portfolio_app=self.webpackChunksp_portfolio_app||[]).push([[185],{8185:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var r=n(5043),s=n(3519),a=n(1072),c=n(8602),i=n(4282),o=n(8628),l=n(1456);const d=function(e,t){const n=(0,r.useRef)(!0);(0,r.useEffect)((()=>{if(!n.current)return e();n.current=!1}),t)};var u=n(8232),m=n(6723),f=n(9109);const h=2**31-1;function p(e,t,n){const r=n-Date.now();e.current=r<=h?setTimeout(t,r):setTimeout((()=>p(e,t,n)),h)}function x(){const e=(0,m.A)(),t=(0,r.useRef)();return(0,f.A)((()=>clearTimeout(t.current))),(0,r.useMemo)((()=>{const n=()=>clearTimeout(t.current);return{set:function(r){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e()&&(n(),s<=h?t.current=setTimeout(r,s):p(t,r,Date.now()+s))},clear:n,handleRef:t}}),[])}var j=n(8976),v=n(8139),N=n.n(v),g=n(1969),b=n(7852),A=n(579);const y=r.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:s="div",...a}=e;return r=(0,b.oU)(r,"carousel-caption"),(0,A.jsx)(s,{ref:t,className:N()(n,r),...a})}));y.displayName="CarouselCaption";const C=y,w=r.forwardRef(((e,t)=>{let{as:n="div",bsPrefix:r,className:s,...a}=e;const c=N()(s,(0,b.oU)(r,"carousel-item"));return(0,A.jsx)(n,{ref:t,...a,className:c})}));w.displayName="CarouselItem";const k=w;var I=n(2663),T=n(9841),S=n(2643),R=n(865);const P=r.forwardRef(((e,t)=>{let{defaultActiveIndex:n=0,...s}=e;const{as:a="div",bsPrefix:c,slide:i=!0,fade:o=!1,controls:m=!0,indicators:f=!0,indicatorLabels:h=[],activeIndex:p,onSelect:v,onSlide:y,onSlid:C,interval:w=5e3,keyboard:k=!0,onKeyDown:P,pause:E="hover",onMouseOver:D,onMouseOut:U,wrap:M=!0,touch:L=!0,onTouchStart:O,onTouchMove:B,onTouchEnd:_,prevIcon:H=(0,A.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:z="Previous",nextIcon:F=(0,A.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:G="Next",variant:V,className:W,children:J,...q}=(0,g.Zw)({defaultActiveIndex:n,...s},{activeIndex:"onSelect"}),K=(0,b.oU)(c,"carousel"),X=(0,b.Wz)(),Q=(0,r.useRef)(null),[Z,Y]=(0,r.useState)("next"),[$,ee]=(0,r.useState)(!1),[te,ne]=(0,r.useState)(!1),[re,se]=(0,r.useState)(p||0);(0,r.useEffect)((()=>{te||p===re||(Q.current?Y(Q.current):Y((p||0)>re?"next":"prev"),i&&ne(!0),se(p||0))}),[p,te,re,i]),(0,r.useEffect)((()=>{Q.current&&(Q.current=null)}));let ae,ce=0;(0,I.jJ)(J,((e,t)=>{++ce,t===p&&(ae=e.props.interval)}));const ie=(0,u.A)(ae),oe=(0,r.useCallback)((e=>{if(te)return;let t=re-1;if(t<0){if(!M)return;t=ce-1}Q.current="prev",null==v||v(t,e)}),[te,re,v,M,ce]),le=(0,l.A)((e=>{if(te)return;let t=re+1;if(t>=ce){if(!M)return;t=0}Q.current="next",null==v||v(t,e)})),de=(0,r.useRef)();(0,r.useImperativeHandle)(t,(()=>({element:de.current,prev:oe,next:le})));const ue=(0,l.A)((()=>{!document.hidden&&function(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(de.current)&&(X?oe():le())})),me="next"===Z?"start":"end";d((()=>{i||(null==y||y(re,me),null==C||C(re,me))}),[re]);const fe="".concat(K,"-item-").concat(Z),he="".concat(K,"-item-").concat(me),pe=(0,r.useCallback)((e=>{(0,S.A)(e),null==y||y(re,me)}),[y,re,me]),xe=(0,r.useCallback)((()=>{ne(!1),null==C||C(re,me)}),[C,re,me]),je=(0,r.useCallback)((e=>{if(k&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(X?le(e):oe(e));case"ArrowRight":return e.preventDefault(),void(X?oe(e):le(e))}null==P||P(e)}),[k,P,oe,le,X]),ve=(0,r.useCallback)((e=>{"hover"===E&&ee(!0),null==D||D(e)}),[E,D]),Ne=(0,r.useCallback)((e=>{ee(!1),null==U||U(e)}),[U]),ge=(0,r.useRef)(0),be=(0,r.useRef)(0),Ae=x(),ye=(0,r.useCallback)((e=>{ge.current=e.touches[0].clientX,be.current=0,"hover"===E&&ee(!0),null==O||O(e)}),[E,O]),Ce=(0,r.useCallback)((e=>{e.touches&&e.touches.length>1?be.current=0:be.current=e.touches[0].clientX-ge.current,null==B||B(e)}),[B]),we=(0,r.useCallback)((e=>{if(L){const t=be.current;Math.abs(t)>40&&(t>0?oe(e):le(e))}"hover"===E&&Ae.set((()=>{ee(!1)}),w||void 0),null==_||_(e)}),[L,E,oe,le,Ae,w,_]),ke=null!=w&&!$&&!te,Ie=(0,r.useRef)();(0,r.useEffect)((()=>{var e,t;if(!ke)return;const n=X?oe:le;return Ie.current=window.setInterval(document.visibilityState?ue:n,null!=(e=null!=(t=ie.current)?t:w)?e:void 0),()=>{null!==Ie.current&&clearInterval(Ie.current)}}),[ke,oe,le,ie,w,ue,X]);const Te=(0,r.useMemo)((()=>f&&Array.from({length:ce},((e,t)=>e=>{null==v||v(t,e)}))),[f,ce,v]);return(0,A.jsxs)(a,{ref:de,...q,onKeyDown:je,onMouseOver:ve,onMouseOut:Ne,onTouchStart:ye,onTouchMove:Ce,onTouchEnd:we,className:N()(W,K,i&&"slide",o&&"".concat(K,"-fade"),V&&"".concat(K,"-").concat(V)),children:[f&&(0,A.jsx)("div",{className:"".concat(K,"-indicators"),children:(0,I.Tj)(J,((e,t)=>(0,A.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=h&&h.length?h[t]:"Slide ".concat(t+1),className:t===re?"active":void 0,onClick:Te?Te[t]:void 0,"aria-current":t===re},t)))}),(0,A.jsx)("div",{className:"".concat(K,"-inner"),children:(0,I.Tj)(J,((e,t)=>{const n=t===re;return i?(0,A.jsx)(R.A,{in:n,onEnter:n?pe:void 0,onEntered:n?xe:void 0,addEndListener:T.A,children:(t,s)=>r.cloneElement(e,{...s,className:N()(e.props.className,n&&"entered"!==t&&fe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&he)})}):r.cloneElement(e,{className:N()(e.props.className,n&&"active")})}))}),m&&(0,A.jsxs)(A.Fragment,{children:[(M||0!==p)&&(0,A.jsxs)(j.A,{className:"".concat(K,"-control-prev"),onClick:oe,children:[H,z&&(0,A.jsx)("span",{className:"visually-hidden",children:z})]}),(M||p!==ce-1)&&(0,A.jsxs)(j.A,{className:"".concat(K,"-control-next"),onClick:le,children:[F,G&&(0,A.jsx)("span",{className:"visually-hidden",children:G})]})]})]})}));P.displayName="Carousel";const E=Object.assign(P,{Caption:C,Item:k});var D=n(5475),U=n(2456);const M=e=>{const[t,n]=(0,r.useState)(0);return(0,r.useEffect)((()=>{document.title="Shashwat | Home"}),[]),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("div",{className:"hero-section",children:(0,A.jsx)(s.A,{children:(0,A.jsx)(a.A,{className:"text-center align-items-center justify-content-center",children:(0,A.jsxs)(c.A,{md:8,children:[(0,A.jsx)("h1",{children:"Innovative Web Development and Conversational AI Solutions"}),(0,A.jsx)("p",{children:"Empowering businesses with cutting-edge web solutions and AI-driven Customer Engagement."}),(0,A.jsx)(D.N_,{to:"about",children:(0,A.jsx)(i.A,{variant:"primary",className:"m-2",children:"Learn More"})}),(0,A.jsx)(D.N_,{to:"contact",children:(0,A.jsx)(i.A,{variant:"secondary",className:"m-2",children:"Get in Touch"})})]})})})}),(0,A.jsxs)(s.A,{className:"featured-skills",children:[(0,A.jsx)("h2",{className:"text-center",children:"Featured Skills and Services"}),(0,A.jsx)(a.A,{children:[{title:"Web Development",description:"Creating responsive, user-friendly websites using ReactJs and Angular.",icon:"\ud83c\udf10"},{title:"Backend Solutions",description:"Building robust and scalable backend systems with .NET, C#, Python, and databases like SQL and MongoDB.",icon:"\ud83d\udd27"},{title:"Conversational AI",description:"Developing intelligent Chatbots using Amazon Lex and other AI tools.",icon:"\ud83e\udd16"},{title:"Contact Center Solutions",description:"Integrating chatbots and AI solutions into contact center platforms like Amazon Connect to enhance customer support and engagement.",icon:"\ud83d\udcde"},{title:"Generative AI Integrations",description:"Implementing Generative AI technologies to create more interactive and personalized user experiences.",icon:"\ud83d\udca1"},{title:"Cloud Services",description:"Leveraging AWS for scalable and secure cloud solutions, including deployment, management, and optimization.",icon:"\u2601\ufe0f"}].map(((e,t)=>(0,A.jsx)(c.A,{md:4,className:"mb-4",children:(0,A.jsx)(o.A,{className:"text-center h-100",children:(0,A.jsxs)(o.A.Body,{children:[(0,A.jsxs)(o.A.Title,{children:[e.icon," ",e.title]}),(0,A.jsx)(o.A.Text,{children:e.description})]})})},t)))})]}),(0,A.jsxs)(s.A,{className:"portfolio-highlights",children:[(0,A.jsx)("h2",{className:"text-center",children:"Portfolio Highlights"}),(0,A.jsx)(a.A,{children:[{title:"Project One",description:"Description for project one.",image:"project1.jpg",link:"/portfolio/project-one"},{title:"Project Two",description:"Description for project two.",image:"project2.jpg",link:"/portfolio/project-two"},{title:"Project Three",description:"Description for project three.",image:"project3.jpg",link:"/portfolio/project-three"}].map(((e,t)=>(0,A.jsx)(c.A,{md:4,className:"mb-4",children:(0,A.jsxs)(o.A,{children:[(0,A.jsx)(o.A.Img,{variant:"top",src:U}),(0,A.jsxs)(o.A.Body,{children:[(0,A.jsx)(o.A.Title,{children:e.title}),(0,A.jsx)(o.A.Text,{children:e.description}),(0,A.jsx)(i.A,{variant:"primary",href:e.link,children:"View Details"})]})]})},t)))})]}),(0,A.jsxs)(s.A,{className:"testimonials",children:[(0,A.jsx)("h2",{className:"text-center",children:"Testimonials"}),(0,A.jsx)(E,{children:[{name:"Client One",feedback:"Great work on the project!",image:"client1.jpg"},{name:"Client Two",feedback:"Excellent support and communication.",image:"client2.jpg"},{name:"Client Three",feedback:"Highly recommend for AI solutions.",image:"client3.jpg"}].map(((e,t)=>(0,A.jsx)(E.Item,{interval:3e3,children:(0,A.jsx)(a.A,{className:"justify-content-center",children:(0,A.jsx)(c.A,{md:4,className:"mb-2",children:(0,A.jsxs)(o.A,{className:"text-center h-100",children:[(0,A.jsx)(o.A.Img,{variant:"top",src:U,className:"rounded-circle mx-auto mt-3",style:{width:"150px",height:"150px"}}),(0,A.jsxs)(o.A.Body,{children:[(0,A.jsx)(o.A.Title,{children:e.name}),(0,A.jsx)("blockquote",{className:"blockquote",children:(0,A.jsx)("p",{children:e.feedback})})]})]})})})},t)))})]})]})}},8628:(e,t,n)=>{n.d(t,{A:()=>P});var r=n(8139),s=n.n(r),a=n(5043),c=n(7852),i=n(579);const o=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:a="div",...o}=e;return r=(0,c.oU)(r,"card-body"),(0,i.jsx)(a,{ref:t,className:s()(n,r),...o})}));o.displayName="CardBody";const l=o,d=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:a="div",...o}=e;return r=(0,c.oU)(r,"card-footer"),(0,i.jsx)(a,{ref:t,className:s()(n,r),...o})}));d.displayName="CardFooter";const u=d;var m=n(1778);const f=a.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,as:o="div",...l}=e;const d=(0,c.oU)(n,"card-header"),u=(0,a.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,i.jsx)(m.A.Provider,{value:u,children:(0,i.jsx)(o,{ref:t,...l,className:s()(r,d)})})}));f.displayName="CardHeader";const h=f,p=a.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,variant:a,as:o="img",...l}=e;const d=(0,c.oU)(n,"card-img");return(0,i.jsx)(o,{ref:t,className:s()(a?"".concat(d,"-").concat(a):d,r),...l})}));p.displayName="CardImg";const x=p,j=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:a="div",...o}=e;return r=(0,c.oU)(r,"card-img-overlay"),(0,i.jsx)(a,{ref:t,className:s()(n,r),...o})}));j.displayName="CardImgOverlay";const v=j,N=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:a="a",...o}=e;return r=(0,c.oU)(r,"card-link"),(0,i.jsx)(a,{ref:t,className:s()(n,r),...o})}));N.displayName="CardLink";const g=N;var b=n(4488);const A=(0,b.A)("h6"),y=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:a=A,...o}=e;return r=(0,c.oU)(r,"card-subtitle"),(0,i.jsx)(a,{ref:t,className:s()(n,r),...o})}));y.displayName="CardSubtitle";const C=y,w=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:a="p",...o}=e;return r=(0,c.oU)(r,"card-text"),(0,i.jsx)(a,{ref:t,className:s()(n,r),...o})}));w.displayName="CardText";const k=w,I=(0,b.A)("h5"),T=a.forwardRef(((e,t)=>{let{className:n,bsPrefix:r,as:a=I,...o}=e;return r=(0,c.oU)(r,"card-title"),(0,i.jsx)(a,{ref:t,className:s()(n,r),...o})}));T.displayName="CardTitle";const S=T,R=a.forwardRef(((e,t)=>{let{bsPrefix:n,className:r,bg:a,text:o,border:d,body:u=!1,children:m,as:f="div",...h}=e;const p=(0,c.oU)(n,"card");return(0,i.jsx)(f,{ref:t,...h,className:s()(r,p,a&&"bg-".concat(a),o&&"text-".concat(o),d&&"border-".concat(d)),children:u?(0,i.jsx)(l,{children:m}):m})}));R.displayName="Card";const P=Object.assign(R,{Img:x,Title:S,Subtitle:C,Body:l,Link:g,Text:k,Header:h,Footer:u,ImgOverlay:v})},2663:(e,t,n)=>{n.d(t,{Tj:()=>s,jJ:()=>a,mf:()=>c});var r=n(5043);function s(e,t){let n=0;return r.Children.map(e,(e=>r.isValidElement(e)?t(e,n++):e))}function a(e,t){let n=0;r.Children.forEach(e,(e=>{r.isValidElement(e)&&t(e,n++)}))}function c(e,t){return r.Children.toArray(e).some((e=>r.isValidElement(e)&&e.type===t))}},2456:(e,t,n)=>{e.exports=n.p+"static/media/hero_section_bg.6a5713d701448e17a01a.jpg"}}]);
//# sourceMappingURL=185.2279508e.chunk.js.map
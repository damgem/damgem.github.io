(this["webpackJsonpportfolio-rewrite"]=this["webpackJsonpportfolio-rewrite"]||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),s=t.n(i),r=t(14),a=t.n(r),l=(t(37),t(38),t(55)),o=t(57),d=t(56);function j(e){var n={transform:"skew(-30deg)",marginLeft:e.base?"-20px":"-1px",marginRight:"-1px",marginTop:"-1px",paddingLeft:e.base?"33px":"14px",paddingRight:"14px"};return Object(c.jsx)(o.a.Link,{href:e.href,style:n,children:Object(c.jsx)("p",{style:{transform:"skew(30deg)"},className:"mb-0 secondary-font",children:e.children})})}var h=function(){return Object(c.jsx)("div",{className:"slanted-outer",style:{zIndex:10,position:"fixed",top:0,left:0,minWidth:"800px"},children:Object(c.jsx)(d.a,{expand:"sm",className:"p-0",children:Object(c.jsxs)(d.a.Collapse,{children:[Object(c.jsx)(j,{href:"#start",base:!0,children:"Damian Gleumes"}),Object(c.jsxs)(o.a,{children:[Object(c.jsx)(j,{href:"#projects",children:"Projects"}),Object(c.jsx)(j,{href:"#softskills",children:"Soft Skills"}),Object(c.jsx)(j,{href:"#hardskills",children:"Hard Skills"}),Object(c.jsx)(j,{href:"#contact",children:"Contact"})]})]})})})},b=t(50),x=t(51);var m=function(){return Object(c.jsxs)(b.a,{id:"start",style:{height:"100vh"},children:[Object(c.jsx)(x.a,{xs:12,className:"text-center main-font mx-auto mt-auto mb-4",children:Object(c.jsxs)("h1",{children:["Hi, ich bin ",Object(c.jsx)("strong",{children:"Damian Gleumes"})]})}),Object(c.jsx)(x.a,{lg:8,md:11,sm:10,xs:12,className:"text-center secondary-font mx-auto mb-auto pb-5",children:Object(c.jsxs)("p",{style:{fontSize:"1.75rem"},children:["Ich studiere Informatik an der Uni Bonn.",Object(c.jsx)("br",{}),"Mich pr\xe4gt eine gro\xdfe Leidenschaft f\xfcrs Coden und ich habe viel Spa\xdf am gemeinsamen Gestalten und Umsetzen von realit\xe4tsnahen Projekten."]})})]})},u=t(28),O=t(31),f=t(19),g=t(20),p=t(23),y=t(21),k=function(e){Object(p.a)(t,e);var n=Object(y.a)(t);function t(){return Object(f.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){var e=this.props,n=e.id,t=Object(O.a)(e,["id"]);return Object(c.jsxs)(b.a,{id:n,className:"py-5 d-flex flex-column align-items-center",children:[Object(c.jsx)(x.a,{xs:12,className:"mb-5 mt-4",children:Object(c.jsx)("h1",{className:"main-font text-center",children:this.props.heading})}),Object(c.jsx)(x.a,Object(u.a)(Object(u.a)({},t),{},{className:"",children:this.props.children}))]})}}]),t}(s.a.Component),v=t(4),C=t.n(v),S=t(58),T=t(13),N=t(9),w={HTML5:"#82e0aa",JS:"#f4d03f",JSX:"#f4d03f",React:"#d8e39d",CSS3:"#76d7c4",Bootstrap:"#7dcea0","C++11":"#5dade2","C++":"#5dade2",R:"#95a5a6",MongoDB:"#abcdd4",Python3:"#f1948a",Flask:"#edbb99",Numpy:"#f5b7b1",Pandas:"#f5b7b1",Matplotlib:"#d2b4de",Bokeh:"#d2b4de"},P=function(e){Object(p.a)(t,e);var n=Object(y.a)(t);function t(){return Object(f.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){var e=s.a.Children.toArray(this.props.children),n=e.filter((function(e){return!e.props.__CARD_FOOTER})),t=e.filter((function(e){return e.props.__CARD_FOOTER}));return Object(c.jsxs)(S.a,{style:{backgroundColor:"#fefbfb",marginTop:"15px",marginBottom:"15px"},children:[Object(c.jsx)(S.a.Body,{className:"d-flex flex-column pb-2",children:n}),Object(c.jsx)(S.a.Footer,{className:"py-3",children:t})]})}}],[{key:"Title",value:function(e){return Object(c.jsx)(S.a.Title,{className:"main-font",children:Object(c.jsx)("h3",{children:e.children})})}},{key:"Description",value:function(e){return Object(c.jsx)(S.a.Text,{className:"secondary-font",children:e.children})}},{key:"Company",value:function(e){return Object(c.jsxs)("small",{className:"d-flex align-items-center mt-auto font-weight-bold",style:{color:"#575757",letterSpacing:"-1px"},children:[Object(c.jsx)(T.a,{icon:N.e,className:"mr-1"}),Object(c.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",style:{color:"#575757",letterSpacing:"-1px"},children:e.children})]})}},{key:"TagList",value:function(e){var n=e.langs.map((function(e){var n=e in w?w[e]:"#E3E0E0";return Object(c.jsx)(x.a,{className:"col-auto m-1 badge secondary-font",style:{backgroundColor:n,lineHeight:1.25},children:e},e)}));return Object(c.jsx)(b.a,{className:"m-n1",children:n})}}]),t}(s.a.Component);P.Company.propTypes={children:C.a.node,__TYPE:C.a.string},P.Company.defaultProps={__CARD_FOOTER:!1},P.TagList.propTypes={langs:C.a.arrayOf(C.a.string),__TYPE:C.a.string},P.TagList.defaultProps={__CARD_FOOTER:!0};var L=P;var R=function(e){var n=function(e){var n=["xs","sm","md","lg","xl"],t=n.findIndex((function(n){return n===e})),i=-1===t||t===n.length?"":n[t+1];return Object(c.jsx)("div",{className:"w-100 d-none d-"+e+"-block"+(i?" d-"+i+"-none":"")},e)};return e.on?e.on instanceof Array?e.on.map((function(e){return n(e)})):n(e.on):Object(c.jsx)("div",{className:"w-100"})},B=t(52);var z=function(){return Object(c.jsx)(k,{id:"projects",heading:"Projects",children:Object(c.jsxs)(B.a,{style:{marginTop:"-15px",marginBottom:"-15px"},children:[Object(c.jsxs)(L,{children:[Object(c.jsx)(L.Title,{children:"Excel Web-Add-In"}),Object(c.jsx)(L.Description,{children:"Eine Add-In, das eine Portfolio-Verwaltung direkt in Excel via runter- und hochladbarer Tabellen erm\xf6glicht. Umgesetzt als Website mit Flask Backend."}),Object(c.jsx)(L.Company,{href:"http://www.quanvest.de",children:"QUANVEST GmbH"}),Object(c.jsx)(L.TagList,{langs:["Python3","Flask","Bootstrap","CSS3","HTML5","JS","RESTful API"]})]}),Object(c.jsx)(R,{on:["sm","xs"]}),Object(c.jsxs)(L,{children:[Object(c.jsx)(L.Title,{children:"Tweetsentiment Analyse"}),Object(c.jsx)(L.Description,{children:"Analyse des Zusammenhangs zwischen positiv und negativ gepr\xe4gten Wortfeldern auf Twitter und dem historischem Markttrend. Interaktive Visualisierung im Browser."}),Object(c.jsx)(L.Company,{href:"http://www.quanvest.de",children:"QUANVEST GmbH"}),Object(c.jsx)(L.TagList,{langs:["Python3","Bokeh","Matplotlib","Pandas","Bootstrap","CSS3","JS","MongoDB"]})]}),Object(c.jsx)(R,{on:["lg","md","sm","xs"]}),Object(c.jsxs)(L,{children:[Object(c.jsx)(L.Title,{children:"React Portfolio-Website"}),Object(c.jsx)(L.Description,{children:"Entwicklung dieser Website als pers\xf6nliches Lernprojekt f\xfcr React und React-Bootstrap."}),Object(c.jsx)(L.TagList,{langs:["JSX","React","Bootstrap","CSS3","HTML5","Github-pages"]})]}),Object(c.jsx)(R,{on:["xl","sm","xs"]}),Object(c.jsxs)(L,{children:[Object(c.jsx)(L.Title,{children:"Rcpp Filter"}),Object(c.jsx)(L.Description,{children:"C++ Implementierung eines zeitkritischen Filters f\xfcr Datens\xe4tze in einem in R geschriebenen Backend."}),Object(c.jsx)(L.Company,{href:"http://www.quanvest.de",children:"QUANVEST GmbH"}),Object(c.jsx)(L.TagList,{langs:["C++","R","Rcpp"]})]}),Object(c.jsx)(R,{on:["lg","md","sm","xs"]}),Object(c.jsxs)(L,{children:[Object(c.jsx)(L.Title,{children:"C++ Workshops"}),Object(c.jsx)(L.Description,{children:"Leitung von Anf\xe4nger- und Fortgeschrittene-Programmierkurse f\xfcr Kinder im Alter von 13 bis 16 Jahren."}),Object(c.jsx)(L.Company,{href:"http://www.sk-jugend.de",children:"SK-Stiftung, Sparkasse K\xf6lnBonn"}),Object(c.jsx)(L.TagList,{langs:["C++"]})]}),Object(c.jsx)(R,{on:["sm","xs"]}),Object(c.jsxs)(L,{children:[Object(c.jsx)(L.Title,{children:"Python Workshop"}),Object(c.jsx)(L.Description,{children:"Spielerische Heranf\xfchrung von Kindern zwischen 11 und 13 an das Programmieren via einer Python-Minecraft-Schnittstelle."}),Object(c.jsx)(L.Company,{href:"http://www.sk-jugend.de",children:"SK-Stiftung, Sparkasse K\xf6lnBonn"}),Object(c.jsx)(L.TagList,{langs:["Python3","RaspberryJuice"]})]})]})})};function D(e){return Object(c.jsx)(T.a,{icon:e.icon,style:{color:e.color},className:"fa-fw fa-3x"})}function A(e){return Object(c.jsx)(x.a,{md:6,xs:12,children:Object(c.jsx)("div",{className:"mx-lg-5 mx-4 mb-lg-5 mb-4",children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(x.a,{xs:"auto ml-lg-3 ml-md-1 ml-3",className:"pl-0",children:Object(c.jsx)(D,{icon:e.icon,color:e.iconColor})}),Object(c.jsx)(x.a,{xs:"auto",className:"px-0 pl-lg-2 text-center",children:Object(c.jsx)("h2",{className:"main-font",children:e.title})}),Object(c.jsx)(x.a,{xs:12,className:"mt-lg-3 mt-2 mt-md-2 secondary-font",style:{fontSize:"1.05em"},children:e.children})]})})})}var E=function(){return Object(c.jsx)(k,{id:"softskills",heading:"Soft Skills",children:Object(c.jsxs)(b.a,{className:"mb-n5",children:[Object(c.jsx)(A,{title:"Kreativ",icon:N.f,iconColor:"orange",children:"Ich zeichne, singe gerne und spiele Klarinette und Ukulele. Kniffelige Aufgaben begeistern mich und ich denke gerne \xfcber den Tellerrand hinaus."}),Object(c.jsx)(A,{title:"Autodidaktisch",icon:N.a,iconColor:"forestgreen",children:"Mich zeichnet eine hohe Wissbegierigkeit aus und die F\xe4higkeit mich schnell in Sachverh\xe4ltnisse einarbeiten zu k\xf6nnen."}),Object(c.jsx)(A,{title:"Mitdenkend",icon:N.b,iconColor:"darkred",children:"Ich bin kein Roboter! Ich versuche stets meinen eigenen hinterfragenden Geist in das Projekt miteinflie\xdfen zu lassen, um das Endresultat so wertig wie m\xf6glich zu gestalten."}),Object(c.jsx)(A,{title:"Kommunikativ",icon:N.c,iconColor:"royalblue",children:"Als Mathe-Nachhilfelehrer und Programmier-Workshop-Leiter, bin ich ge\xfcbt komplexe Gedanken und Ideen zu kommunizieren und vermitteln."})]})})},F=t(53);function M(e){var n=e.active?"orange":"grey";return Object(c.jsx)("div",{style:{display:"inline-block",height:"100%",width:"20%"},children:Object(c.jsx)("i",{style:{display:"inline-block",height:"100%",width:"80%",backgroundColor:n,transform:"skew(-35deg)"}})})}function I(e){var n=Array.from({length:5},(function(n,t){return Object(c.jsx)(M,{active:t<e.confidence},t)}));return Object(c.jsxs)(b.a,{noGutters:!0,className:"my-3 align-items-center",children:[Object(c.jsx)(x.a,{xl:6,lg:5,md:6,xs:5,className:"main-font mb-0",style:{fontSize:"1.75em",lineHeight:1,zIndex:1},children:e.children}),Object(c.jsx)(x.a,{xl:6,lg:7,md:6,xs:7,style:{height:"1.75em"},children:n})]})}function _(e){return Object(c.jsx)("div",{style:{paddingTop:"2em"},children:Object(c.jsxs)(S.a,{xs:12,lg:6,style:{border:"None",display:"inline-block"},children:[Object(c.jsx)("label",{className:"main-font",style:{position:"absolute",top:"-1.2em",left:"1.75em",margin:0,color:"grey",fontSize:"1.25em"},children:e.heading}),Object(c.jsx)("div",{style:{border:"1px solid grey",borderRadius:"1.5em",padding:"1.5em"},children:Object(c.jsx)("div",{className:"my-n3",children:e.children})})]})})}var G=function(){return Object(c.jsx)(k,{id:"hardskills",heading:"Hardskills",children:Object(c.jsxs)(F.a,{style:{columnGap:"2.75rem",marginTop:"-15px",marginBottom:"-15px"},children:[Object(c.jsxs)(_,{heading:"Coding Languages",children:[Object(c.jsx)(I,{confidence:5,children:"Python"}),Object(c.jsx)(I,{confidence:4,children:"C / C++"}),Object(c.jsx)(I,{confidence:4,children:"Java"}),Object(c.jsx)(I,{confidence:2,children:"R"})]}),Object(c.jsxs)(_,{heading:"Basic Web Development",children:[Object(c.jsx)(I,{confidence:5,children:"HTML"}),Object(c.jsx)(I,{confidence:4,children:"CSS"}),Object(c.jsx)(I,{confidence:3,children:"Java Script"})]}),Object(c.jsxs)(_,{heading:"Web Development Frameworks",children:[Object(c.jsx)(I,{confidence:5,children:"Boots\xadtrap"}),Object(c.jsx)(I,{confidence:4,children:"React"}),Object(c.jsx)(I,{confidence:2,children:"Flask"})]}),Object(c.jsxs)(_,{heading:"Data Base",children:[Object(c.jsx)(I,{confidence:5,children:"Mongo DB"}),Object(c.jsx)(I,{confidence:2,children:"SQL"})]}),Object(c.jsxs)(_,{heading:"Linux",children:[Object(c.jsx)(I,{confidence:3,children:"Ubuntu"}),Object(c.jsx)(I,{confidence:4,children:"Docker"})]}),Object(c.jsxs)(_,{heading:"SVC",children:[Object(c.jsx)(I,{confidence:4,children:"Git"}),Object(c.jsx)(I,{confidence:3,children:"GitHub/Lab"})]}),Object(c.jsxs)(_,{heading:"Programms",children:[Object(c.jsx)(I,{confidence:3,children:"GIMP"}),Object(c.jsx)(I,{confidence:2,children:"Figma"})]})]})})},H=t(54);var W=function(e){return Object(c.jsx)(k,{id:"contact",heading:"Contact",children:Object(c.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(c.jsx)("p",{className:"secondary-font text-center",style:{fontSize:"1.5em"},children:"Schreibe mir eine Mail!"}),Object(c.jsxs)(H.a,{style:{backgroundColor:"darkred",borderColor:"darkred",outlineColor:"darkred",margin:"auto"},href:"mailto:damgem@zoho.com",children:[Object(c.jsx)(T.a,{icon:N.d,className:"mr-2"}),"damgem@zoho.com"]})]})})};var J=function(){return Object(c.jsxs)(l.a,{className:"App mb-5",children:[Object(c.jsx)(h,{}),Object(c.jsx)(m,{}),Object(c.jsx)(z,{}),Object(c.jsx)(E,{}),Object(c.jsx)(G,{}),Object(c.jsx)(W,{})]})},K=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,59)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),s(e),r(e)}))};t(47);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(J,{})}),document.getElementById("root")),K()}},[[48,1,2]]]);
//# sourceMappingURL=main.c3bfe1cc.chunk.js.map
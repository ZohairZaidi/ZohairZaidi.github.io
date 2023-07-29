(this["webpackJsonpgazi-jarin"]=this["webpackJsonpgazi-jarin"]||[]).push([[0],{164:function(e,t,a){e.exports=a(308)},169:function(e,t,a){},170:function(e,t,a){},296:function(e,t,a){},298:function(e,t,a){},299:function(e,t,a){},300:function(e,t,a){},302:function(e,t,a){},303:function(e,t,a){},304:function(e,t,a){},308:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),c=a.n(r),l=(a(169),a(2)),o=a(6),s=a(14),d=a(4),m=a(5),u=a(332),h=a(70),p=a.n(h),g=a(151),b=a.n(g),v=a(48),f=a.n(v),E=(a(170),a(108),a(37));function y(e){var t=i.a.useState(!1),a=Object(E.a)(t,2),n=a[0],r=a[1],c=i.a.useRef();return i.a.useEffect((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&r(e.isIntersecting)}))}));return e.observe(c.current),function(){return e.unobserve(c.current)}}),[]),i.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),style:{transitionDelay:"".concat(e.delay)},ref:c},e.children)}var j=window.innerWidth<600,k=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=this.state.expanded,t=[i.a.createElement("a",{href:"#intro"},"Home"),i.a.createElement("a",{href:"#about"},"About"),i.a.createElement("a",{href:"#Experience"},"Experience"),i.a.createElement("a",{href:"#projects"},"Projects")];return i.a.createElement("div",{className:"sidebar-nav"},!j&&i.a.createElement(u.a,{expanded:e,defaultOpenKeys:["3","4"],activeKey:this.state.activeKey,onSelect:this.handleSelect,appearance:"subtle"},i.a.createElement(u.a.Body,null,i.a.createElement("div",{className:"sidebar-links"},t.map((function(e,t){return i.a.createElement(y,{delay:"".concat(t+1,"00ms")},i.a.createElement("div",null,e))}))))),i.a.createElement("div",{className:"sidebar-logos",href:"/"},i.a.createElement("a",{href:"mailto:zohair.zaidi@mail.utoronto.ca"},i.a.createElement(p.a,{style:{fontSize:20}})),i.a.createElement("a",{href:"https://github.com/ZohairZaidi"},i.a.createElement(f.a,{style:{fontSize:19}})),i.a.createElement("a",{href:"https://www.linkedin.com/in/zohair-zaidii/"},i.a.createElement(b.a,{style:{fontSize:21}}))))}}]),a}(i.a.Component),S=(a(296),a(152)),w=a.n(S),O=a(7),N=a(153),A=(n.Component,function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1",visible:!0},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function()
{return i.a.createElement("div",{id:"intro"},i.a.createElement(w.a,{avgTypingDelay:120},i.a.createElement("span",{className:"intro-title"},"Hello, I am ",i.a.createElement("span",{className:"intro-name"},"Zohair Zaidi"),".")),i.a.createElement(y,null,i.a.createElement("div",{className:"intro-subtitle"},"I like to code programs."),i.a.createElement("div",{className:"intro-desc"},"I'm a software engineer based in Toronto. I have great interest in machine learning, artificial intelligence, and game development. This website is a glimpse into my journey, where I share my experiences and projects in these captivating fields"),i.a.createElement("a",{href:"mailto:syedzohairhyderzaidi@gmail.com",className:"intro-contact"},i.a.createElement(p.a,null)," contact")))}}]),a}(i.a.Component)),z=a(157),T=a(330),x=a(334),I=a(331),C=a(329),D=a(333),L=window.innerWidth<600;function M(e){var t=e.children,a=e.value,n=e.index,r=Object(z.a)(e,["children","value","index"]);return L?i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"full-width-tabpanel-".concat(n),"aria-labelledby":"full-width-tab-".concat(n)},r),a===n&&i.a.createElement(D.a,{p:3},i.a.createElement(C.a,null,t))):i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"vertical-tabpanel"},r),a===n&&i.a.createElement(D.a,{p:3},i.a.createElement(C.a,null,t)))}var P=Object(T.a)((function(e){return{root:{flexGrow:1,backgroundColor:"theme.palette.background.paper",display:"flex",height:300},tabs:{borderRight:"1px solid ".concat(e.palette.divider)}}})),K=function()

{var e = P();
    var t = i.a.useState(0);
    var a = Object(E.a)(t, 2);
    var n = a[0];
    var r = a[1];
    
    var c = {
      "University of Toronto": {
        jobTitle: "Machine Learning Researcher @",
        duration: "MAY 2022 - SEP 2022",
        desc: [
          "Led a project analyzing direct pose estimation using brain machine interfaces to track motor performance of patients suffering from neurological injuries.",
          "Developed a machine learning model using TensorFlow achieving 97% accuracy in coordinate prediction of subject and streamlined existing Python code architectures to expedite the training process, reducing training time by 20%.",
          "Optimized Convolutional Neural Networks architecture for precise pose estimation of test subjects, achieving precise tracking accuracy through experimentation on a dataset of over 100,000 frames."
        ]
      },
      "Workplace Safety Insurance Board": {
        jobTitle: "Data Engineering Intern @",
        duration: "MAY 2023 - SEP 2023",
        desc: [
          "Built a comprehensive dashboard using Power BI, incorporating various data sources and visualizations to provide actionable insights to stakeholders.",
          "Implemented SQL queries to extract and aggregate data from relational databases, enabling real-time data updates in the dashboard and providing up-to-date information for stakeholders.",
          "Set and met 100% of project deadlines and coordinated with engineering manager, stakeholders and client to improve the project while ensuring team was properly resourced."
        ]
      }
    };
    

return i.a.createElement("div",{className:e.root},i.a.createElement(x.a,{orientation:L?null:"vertical",variant:L?"fullWidth":"scrollable",value:n,onChange:function(e,t){r(t)},className:e.tabs},Object.keys(c).map((function(e,t){return i.a.createElement(I.a,Object.assign({label:L?"0".concat(t,"."):e},(a=t,L?{id:"full-width-tab-".concat(a),"aria-controls":"full-width-tabpanel-".concat(a)}:{id:"vertical-tab-".concat(a)})));var a}))),Object.keys(c).map((function(e,t){return i.a.createElement(M,{value:n,index:t},i.a.createElement("span",{className:"joblist-job-title"},c[e].jobTitle+" "),i.a.createElement("span",{className:"joblist-job-company"},e),i.a.createElement("div",{className:"joblist-duration"},c[e].duration),i.a.createElement("ul",{className:"job-description"},c[e].desc.map((function(e,t){return i.a.createElement(y,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",{key:t},e))}))))})))},J=(a(298),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement("div",{id:"experience"},i.a.createElement(y,null,i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"}," Experience")),i.a.createElement(K,null)))}}]),a}(i.a.Component)),R=(a(299),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){var e=i.a.createElement("p",null,"I am a motivated individual majoring in Electrical & Computer Engineering and minoring in artificial intelligence at the "," ",i.a.createElement("a",{href:"https://www.utoronto.ca/about-u-of-t"}," ","University of Toronto"),". I am extremely passionate about software development, with ambitions to learn and develop reliable software systems to serve people’s needs efficiently."," ",),t=i.a.createElement("p",null,"Outside of work, I'm interested in the sport of boxing and film photography."),a=["Javascript","Python","React.js","C/C++","Node.js","HTML & CSS"];a.map((function(e){return i.a.createElement("li",null,e)}));return i.a.createElement("div",{id:"about"},i.a.createElement(y,null,i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"About me")),i.a.createElement("div",{className:"about-content"},i.a.createElement("div",{className:"about-description"},[e],"Here are some technologies I have been working with:",i.a.createElement("ul",{className:"tech-stack"},a.map((function(e,t){return i.a.createElement(y,{delay:"".concat(t+1,"00ms")},i.a.createElement("li",null,e))}))),[t]),i.a.createElement("div",{className:"about-image"},i.a.createElement("img",{src:"/assets/me2.jpg"})))))}}]),a}(i.a.Component)),B=(a(300),a(154)),G=a.n(B),H=(a(301),a(76)),U=a(100),W=a.n(U),V=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement("span",{className:"external-links"},i.a.createElement("a",{className:"github-icon",href:this.props.githubLink},i.a.createElement(f.a,{style:{fontSize:20,color:"var(--lightest-slate)"}})),this.props.openLink&&i.a.createElement("a",{className:"open-icon",href:this.props.openLink},i.a.createElement(W.a,{style:{fontSize:25,color:"var(--lightest-slate)"}})))}}]),a}(i.a.Component),q=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},

{
    key: "render",
    value: function () {
      var e = {
        "Visonary Dialog": {
          title: "VisionaryDialog",
          desc: "An innovative web application developed to facilitate engaging conversations about images through an interactive chatbot interface.",
          techStack: "Python, Streamlit, LangChain, OpenAI",
          link: "https://github.com/ZohairZaidi/VisionaryDialog",
          image: "/assets/nomansland.png"
        }
      };
      var t = {
        "Sorting Algorithm Visualizer": {
          desc: "Visualize and understand how various sorting algorithms work!",
          techStack: "Python, Mathplotlib, Numpy",
          link: "https://github.com/ZohairZaidi/SortingAlgorithmsVisualizer"
        },
        "CURRVERT": {
          desc: "A react app for currency exchange rates",
          techStack: "React.js, Javascript, Node.js, CSS, Forex API",
          link: "https://github.com/ZohairZaidi/CURRVERT",
          open: "https://zohairzaidi.github.io/CURRVERT/"
        },
        "COLOUREX": {
          desc: "A chrome extension to retrieve HEX Colour Codes.",
          techStack: "Javascript, HTML, CSS",
          link: "https://github.com/ZohairZaidi/COLOUREX-ChromeExtension"
        },
        "WordSearchSolve": {
          desc: "Solve any word search puzzle.",
          techStack: "C Programming",
          link: "https://github.com/ZohairZaidi/WordSearchSolve",
          open: ""
        },
        "Reversi Artificial Intelligence Bot": {
          desc: "Two-player, reversi game with a strategic artificial intelligence bot.",
          techStack: "C Programming",
          link: "https://github.com/ZohairZaidi/Reversi-Artificial-Intelligence-Bot",
          open: ""
        },
        "Detectit": {
          title: "Detectit",
          desc: "A program for depth analysis of an image utilizing Microsoft Azure Cognitive Services.",
          techStack: "Python, Azure Cognitive Services",
          link: "https://github.com/ZohairZaidi/Detectit",
          image: "/assets/nomansland.png"
        }
      };
 
 return i.a.createElement("div",{id:"projects"},i.a.createElement("div",{className:"section-header "},i.a.createElement("span",{className:"section-title"},"Projects")),i.a.createElement(H.a,null,Object.keys(e).map((function(t,a){return i.a.createElement(H.a.Item,null,i.a.createElement("img",{className:"d-block w-100",src:e[t].image,alt:t}),i.a.createElement("div",{className:"caption-bg"},i.a.createElement(H.a.Caption,null,i.a.createElement("h3",null,e[t].title),i.a.createElement("p",null,e[t].desc,i.a.createElement("p",{className:"techStack"},e[t].techStack)),i.a.createElement(V,{githubLink:e[t].link,openLink:e[t].open}))))}))),i.a.createElement("div",{className:"project-container"},i.a.createElement("ul",{className:"projects-grid"},Object.keys(t).map((function(e,a){return i.a.createElement(y,{delay:"".concat(a+1,"00ms")},i.a.createElement("li",{className:"projects-card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("div",{className:"folder-icon"},i.a.createElement(G.a,{style:{fontSize:35}})),i.a.createElement(V,{githubLink:t[e].link,openLink:t[e].open})),i.a.createElement("div",{className:"card-title"},e),i.a.createElement("div",{className:"card-desc"},t[e].desc),i.a.createElement("div",{className:"card-tech"},t[e].techStack)))})))))}}]),a}(i.a.Component),F=(a(302),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={expanded:!0,activeKey:"1"},e.handleSelect=e.handleSelect.bind(Object(s.a)(e)),e}return Object(o.a)(a,[{key:"handleSelect",value:function(e){this.setState({activeKey:e})}},{key:"render",value:function(){return i.a.createElement(y,null,i.a.createElement("div",{id:"credits"},i.a.createElement("div",{className:"ending-credits"},i.a.createElement("div",null," "),i.a.createElement("div",null,""))))}}]),a}(i.a.Component));a(303),a(304),a(305);var Y=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{id:"content"},i.a.createElement(A,null),i.a.createElement(R,null),i.a.createElement(J,null),i.a.createElement(q,null),i.a.createElement(F,null)),i.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(306);var Q=a(156);c.a.render(i.a.createElement(Q.a,null,i.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[164,1,2]]]);
//# sourceMappingURL=main.49c705be.chunk.js.map
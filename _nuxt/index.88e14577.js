import{o as a,a as u,b as n,t as d,c as N,w as H,e as E,f as y,h as T,F as D,r as F,u as t,i as p,j as P,k as ne,l as R,v as W,m as U,p as le,q as ce,s as x,T as X,x as oe,y as ue}from"./entry.80f58a94.js";import{_ as se}from"./nuxt-link.ccea0c3d.js";const de={class:"header"},me={class:"header__wrapper"},_e={class:"header__headline"},fe=n("span",null,"и",-1),ge={class:"header__quote"},ve={class:"header__date"},he={__name:"Header",props:{headerData:{type:Object,default:()=>{}}},setup(e){return(s,o)=>(a(),u("header",de,[n("div",me,[n("div",_e,[n("p",null,d(e.headerData.bride),1),fe,n("p",null,d(e.headerData.groom),1)]),n("p",ge,d(e.headerData.quote),1),n("div",ve,d(e.headerData.date),1)])]))}},be=["title"],pe={__name:"SocialNetworkCard",props:{socialNetworkData:{type:Object,default:()=>{}}},setup(e){return(s,o)=>{const r=se;return a(),N(r,{to:e.socialNetworkData.url,target:"_blank",class:"social-network-card"},{default:H(()=>[n("i",{class:E(e.socialNetworkData.icon),title:e.socialNetworkData.name},null,10,be)]),_:1},8,["to"])}}},ye={class:"timeline-card"},$e={class:"timeline-card__time"},we=["innerHTML"],Te=["innerHTML"],ke={class:"timeline-card__social-networks"},xe={__name:"TimelineCard",props:{timeline:{type:Object,default:()=>{}}},setup(e){return(s,o)=>{const r=se;return a(),u("section",ye,[n("p",$e,d(e.timeline.time),1),n("p",{innerHTML:e.timeline.event,class:"timeline-card__event"},null,8,we),n("i",{class:E([e.timeline.icon,"timeline-card__event-icon"])},null,2),n("p",{innerHTML:e.timeline.location,class:"timeline-card__location"},null,8,Te),e.timeline.locationUrl?(a(),N(r,{key:0,to:e.timeline.locationUrl,target:"_blank",class:"timeline-card__map-button"},{default:H(()=>[y(" Видите на мапи ")]),_:1},8,["to"])):T("",!0),n("div",ke,[(a(!0),u(D,null,F(e.timeline.socialNetworks,l=>(a(),N(t(pe),{"social-network-data":l},null,8,["social-network-data"]))),256))])])}}},De={class:"timeline"},je={class:"timeline__wrapper"},Se={__name:"Timeline",props:{timelineData:{type:Array,default:()=>[]}},setup(e){return(s,o)=>(a(),u("section",De,[n("div",je,[(a(!0),u(D,null,F(e.timelineData,r=>(a(),N(t(xe),{timeline:r},null,8,["timeline"]))),256))])]))}},Ee=""+new URL("hug.126f23ef.png",import.meta.url).href,Ne={class:"story"},Oe={class:"story__wrapper"},Me=n("div",{class:"story__image"},[n("img",{src:Ee,alt:"~/assets/img/hug.png"})],-1),Le=["innerHTML"],Ie={__name:"Story",props:{storyData:{type:Object,default:()=>{}}},setup(e){return(s,o)=>(a(),u("section",Ne,[n("div",Oe,[Me,n("div",{innerHTML:e.storyData.text,class:"story__text"},null,8,Le)])]))}},Fe=""+new URL("loader.603cfaef.gif",import.meta.url).href,qe={class:"radio-button"},Be=["name","value","checked"],Ce=n("span",{class:"checkmark"},null,-1),Re={__name:"RadioButton",props:{value:{type:String,default:""},formEntry:{type:String,default:""},checked:{type:String,default:""}},setup(e){return(s,o)=>(a(),u("label",qe,[y(d(e.value)+" ",1),n("input",{type:"radio",name:e.formEntry,onClick:o[0]||(o[0]=r=>s.$emit("radio-button-clicked",e.value)),value:e.value,checked:e.value===e.checked},null,8,Be),Ce]))}},Ue={class:"guest-name"},Ge={class:"guest-name__number"},He={class:"guest-name__text"},Ae=n("i",{class:"icon-user-delete"},null,-1),Ve=[Ae],Pe={__name:"GuestName",props:{guestName:{type:String,default:""},index:{type:Number,default:0}},setup(e){return(s,o)=>(a(),u("div",Ue,[n("p",Ge,d(e.index+1)+".",1),n("p",He,d(e.guestName),1),n("button",{onClick:o[0]||(o[0]=r=>s.$emit("remove-guest",e.index)),type:"button",class:"guest-name__remove-guest-button"},Ve)]))}},We={class:"form"},Ke={class:"form__wrapper"},Qe=["action"],Xe={class:"form__heading"},Ye={class:"form__element form__name"},ze={class:"form__text"},Je=n("span",{class:"form__required"},"*",-1),Ze={class:"form__input"},et=["name"],tt={key:0,class:"form__validation-message"},nt={class:"form__element form__coming"},ot={class:"form__text"},st=n("span",{class:"form__required"},"*",-1),at={class:"form__input"},rt={key:0,class:"form__validation-message"},it={key:0,class:"form__additional-questions"},lt={class:"form__element form__guests-number"},ct={class:"form__text"},ut={class:"form__description"},dt={class:"form__select"},mt=["name"],_t=["value"],ft=n("i",{class:"icon-dropdown"},null,-1),gt={key:0,class:"form__element form__guests-names"},vt={class:"form__text"},ht=n("span",{class:"form__required"},"*",-1),bt=["innerHTML"],pt={class:"form__flex-container"},yt=["onKeyup","disabled"],$t=["disabled"],wt=n("i",{class:"icon-user-add"},null,-1),Tt=[wt],kt={key:0},xt={key:1},Dt={key:1,class:"form__validation-message"},jt=["name","value"],St={class:"form__element"},Et={class:"form__text"},Nt={class:"form__description"},Ot=["name"],Mt=["disabled"],Lt={key:0,src:Fe,alt:"~/assets/img/loader.gif"},It=n("iframe",{id:"google-form-response-iframe",name:"google-form-response-iframe"},null,-1),Ft={key:0,class:"form__successful-message"},qt={class:"form__successful-message-wrapper"},Bt=["innerHTML"],Ct=n("i",{class:"icon-close"},null,-1),Rt=[Ct],Ut={class:"form__info"},Gt={__name:"Form",props:{formData:{type:Object,default:()=>{}},countdownData:{type:Object,default:()=>{}}},setup(e){const o="https://docs.google.com/forms/u/0/d/e/1FAIpQLScflw1DmNIo5jTST1cpX-HBBAJA3osntembDZu7f7P2DGNEAg/formResponse",r="formEntry",l=p(""),_=p(""),c=p(1),i=p([]),$={1:"једног госта",2:"два госта",3:"три госта",4:"четири госта",5:"пет гостију",6:"шест гостију",7:"седам гостију",8:"осам гостију",9:"девет гостију"},v=p(""),w=p(""),h=p(!1),k=p(!1),j=p(!1),A=P(()=>c.value-1===i.value.length||c.value-1<i.value.length),V=P(()=>!v.value||c.value-1===i.value.length||c.value-1<i.value.length),q=P(()=>_.value==="ДА");function S(){v.value&&(i.value=[...i.value,v.value],C())}function B(g){i.value.splice(g,1)}function C(){v.value&&(v.value="")}function O(g){g.scrollIntoView({behavior:"smooth"})}function M(){if(h.value||(h.value=!0),!l.value){const m=document.querySelector(".form__name");return O(m),!1}if(!_.value){const m=document.querySelector(".form__coming");return O(m),!1}if(_.value==="ДА"&&c.value-1!==i.value.length){const m=document.querySelector(".form__guests-names");return O(m),!1}document.getElementById("google-form").target="google-form-response-iframe";const g=document.getElementById("google-form-response-iframe");k.value=!0,g&&(g.onload=()=>{g.innerHTML="true",k.value=!1,j.value=!0})}function f(){l.value=_.value=w.value="",c.value=1,i.value=[],h.value=k.value=j.value=!1}return ne(()=>{document.getElementById("google-form").addEventListener("keypress",m=>{if(m.key==="Enter")return m.preventDefault(),!1})}),(g,m)=>(a(),u("section",We,[n("div",Ke,[n("form",{id:"google-form",target:"google-form-response-iframe",action:t(o),method:"POST",onsubmit:M},[n("p",Xe,d(e.formData.heading),1),n("div",Ye,[n("p",ze,[y(d(e.formData.name.question)+" ",1),Je]),n("div",Ze,[R(n("input",{type:"text",name:e.formData.name[t(r)],"onUpdate:modelValue":m[0]||(m[0]=b=>U(l)?l.value=b:null),class:E([{"form__input-field--is-error":t(h)&&!t(l)},"form__input-field"])},null,10,et),[[W,t(l)]]),t(h)&&!t(l)?(a(),u("p",tt,d(e.formData.name.validationMessage),1)):T("",!0)])]),n("div",nt,[n("p",ot,[y(d(e.formData.coming.question)+" ",1),st]),n("div",at,[(a(!0),u(D,null,F(e.formData.coming.values,b=>(a(),N(t(Re),{value:b,checked:t(_),"form-entry":e.formData.coming[t(r)],class:E({"radio-button--is-error":t(h)&&!t(_)}),onRadioButtonClicked:m[1]||(m[1]=L=>_.value=L)},null,8,["value","checked","form-entry","class"]))),256)),t(h)&&!t(_)?(a(),u("p",rt,d(e.formData.coming.validationMessage),1)):T("",!0)])]),t(q)?(a(),u("div",it,[n("div",lt,[n("p",ct,[y(d(e.formData.guestsNumber.question)+" ",1),n("span",ut,d(e.formData.guestsNumber.description),1)]),n("div",dt,[R(n("select",{name:e.formData.guestsNumber[t(r)],"onUpdate:modelValue":m[2]||(m[2]=b=>U(c)?c.value=b:null),class:"form__input-field"},[(a(!0),u(D,null,F(e.formData.guestsNumber.options,(b,L)=>(a(),u("option",{value:b+1},[L?(a(),u(D,{key:1},[y("+"+d(b),1)],64)):(a(),u(D,{key:0},[y("Само ја")],64))],8,_t))),256))],8,mt),[[le,t(c)]]),ft])]),t(c)>1?(a(),u("div",gt,[n("p",vt,[y(d(e.formData.guestsNames.question)+" ",1),ht,n("span",{innerHTML:e.formData.guestsNames.description,class:"form__description"},null,8,bt)]),n("div",pt,[R(n("input",{type:"text",onKeyup:ce(S,["enter"]),"onUpdate:modelValue":m[3]||(m[3]=b=>U(v)?v.value=b:null),class:"form__input-field",disabled:t(A)},null,40,yt),[[W,t(v)]]),x(X,null,{default:H(()=>[t(v)?(a(),u("i",{key:0,class:"icon-close",onClick:C})):T("",!0)]),_:1}),n("button",{type:"button",onClick:S,class:"form__add-guest-button",disabled:t(V)},Tt,8,$t)]),n("div",{class:E([{"form__guests-names-list--is-error":t(h)&&t(i).length!==t(c)-1},"form__guests-names-list"])},[(a(!0),u(D,null,F(t(i),(b,L)=>(a(),N(t(Pe),{"guest-name":b,index:L,onRemoveGuest:B},null,8,["guest-name","index"]))),256)),t(i).length!==t(c)-1?(a(),u("p",{key:0,class:E([{"form__guests-number-info--is-error":t(h)&&t(i).length!==t(c)-1},"form__guests-number-info"])},[t(i).length<t(c)-1?(a(),u("span",kt," Додајте "+d($[t(c)-1-t(i).length]),1)):(a(),u("span",xt," Oдузмите "+d($[t(i).length+1-t(c)]),1))],2)):T("",!0),t(h)&&t(i).length!==t(c)-1?(a(),u("p",Dt,d(e.formData.guestsNames.validationMessage),1)):T("",!0)],2),n("input",{type:"text",name:e.formData.guestsNames[t(r)],value:t(i).join(", "),class:"is-hidden"},null,8,jt)])):T("",!0),n("div",St,[n("p",Et,[y(d(e.formData.note.question)+" ",1),n("span",Nt,d(e.formData.note.description),1)]),R(n("textarea",{name:e.formData.note[t(r)],"onUpdate:modelValue":m[4]||(m[4]=b=>U(w)?w.value=b:null),rows:"4",class:"form__input-field form__text-area"},null,8,Ot),[[W,t(w)]])])])):T("",!0),n("button",{class:"form__submit-button",disabled:t(k)},[n("span",null,[y(d(e.formData.submitButton)+" ",1),t(k)?(a(),u("img",Lt)):T("",!0)])],8,Mt),It],8,Qe),x(X,null,{default:H(()=>[t(j)?(a(),u("div",Ft,[n("div",qt,[n("p",{innerHTML:e.formData.successfulMessage},null,8,Bt),n("button",{onClick:f,type:"button",class:"form__close-form-button"},Rt)])])):T("",!0)]),_:1})]),n("p",Ut,d(e.formData.info),1)]))}},Ht={class:"countdown"},At={class:"countdown__info"},Vt={class:"countdown__wrapper"},Pt={class:"countdown__text"},Wt=n("span",null,"Дани",-1),Kt={class:"countdown__text"},Qt=n("span",null,"Сати",-1),Xt={class:"countdown__text"},Yt=n("span",null,"Минути",-1),zt={class:"countdown__text"},Jt=n("span",null,"Секунде",-1),Zt={__name:"Countdown",props:{countdownData:{type:Object,default:()=>{}}},setup(e){const s="May 20, 2023 14:45:00";let o=p(0),r=p(0),l=p(0),_=p(0),c=p(0);const i=new Date(s).getTime(),$=setInterval(v,1e3);function v(){const w=new Date().getTime();o.value=i-w,r.value=Math.floor(o.value/(1e3*60*60*24)),l.value=Math.floor(o.value%(1e3*60*60*24)/(1e3*60*60)),_.value=Math.floor(o.value%(1e3*60*60)/(1e3*60)),c.value=Math.floor(o.value%(1e3*60)/1e3),o.value<0&&clearInterval($)}return oe(()=>clearInterval($)),(w,h)=>(a(),u("section",Ht,[n("p",At,d(e.countdownData.text),1),n("div",Vt,[n("div",Pt,[y(d(t(r)<10?`0${t(r)}`:t(r))+" ",1),Wt]),n("div",Kt,[y(d(t(l)<10?`0${t(l)}`:t(l))+" ",1),Qt]),n("div",Xt,[y(d(t(_)<10?`0${t(_)}`:t(_))+" ",1),Yt]),n("div",zt,[y(d(t(c)<10?`0${t(c)}`:t(c))+" ",1),Jt])])]))}},en={class:"footer"},tn={__name:"Footer",props:{formData:{type:Object,default:()=>{}},countdownData:{type:Object,default:()=>{}}},setup(e){return(s,o)=>(a(),u("footer",en,[x(t(Gt),{"form-data":e.formData},null,8,["form-data"]),x(t(Zt),{"countdown-data":e.countdownData},null,8,["countdown-data"])]))}};var G=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nn(e){var s=typeof e;return e!=null&&(s=="object"||s=="function")}var Q=nn,on=typeof G=="object"&&G&&G.Object===Object&&G,sn=on,an=sn,rn=typeof self=="object"&&self&&self.Object===Object&&self,ln=an||rn||Function("return this")(),ae=ln,cn=ae,un=function(){return cn.Date.now()},dn=un,mn=/\s/;function _n(e){for(var s=e.length;s--&&mn.test(e.charAt(s)););return s}var fn=_n,gn=fn,vn=/^\s+/;function hn(e){return e&&e.slice(0,gn(e)+1).replace(vn,"")}var bn=hn,pn=ae,yn=pn.Symbol,re=yn,Y=re,ie=Object.prototype,$n=ie.hasOwnProperty,wn=ie.toString,I=Y?Y.toStringTag:void 0;function Tn(e){var s=$n.call(e,I),o=e[I];try{e[I]=void 0;var r=!0}catch{}var l=wn.call(e);return r&&(s?e[I]=o:delete e[I]),l}var kn=Tn,xn=Object.prototype,Dn=xn.toString;function jn(e){return Dn.call(e)}var Sn=jn,z=re,En=kn,Nn=Sn,On="[object Null]",Mn="[object Undefined]",J=z?z.toStringTag:void 0;function Ln(e){return e==null?e===void 0?Mn:On:J&&J in Object(e)?En(e):Nn(e)}var In=Ln;function Fn(e){return e!=null&&typeof e=="object"}var qn=Fn,Bn=In,Cn=qn,Rn="[object Symbol]";function Un(e){return typeof e=="symbol"||Cn(e)&&Bn(e)==Rn}var Gn=Un,Hn=bn,Z=Q,An=Gn,ee=0/0,Vn=/^[-+]0x[0-9a-f]+$/i,Pn=/^0b[01]+$/i,Wn=/^0o[0-7]+$/i,Kn=parseInt;function Qn(e){if(typeof e=="number")return e;if(An(e))return ee;if(Z(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=Z(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=Hn(e);var o=Pn.test(e);return o||Wn.test(e)?Kn(e.slice(2),o?2:8):Vn.test(e)?ee:+e}var Xn=Qn,Yn=Q,K=dn,te=Xn,zn="Expected a function",Jn=Math.max,Zn=Math.min;function eo(e,s,o){var r,l,_,c,i,$,v=0,w=!1,h=!1,k=!0;if(typeof e!="function")throw new TypeError(zn);s=te(s)||0,Yn(o)&&(w=!!o.leading,h="maxWait"in o,_=h?Jn(te(o.maxWait)||0,s):_,k="trailing"in o?!!o.trailing:k);function j(f){var g=r,m=l;return r=l=void 0,v=f,c=e.apply(m,g),c}function A(f){return v=f,i=setTimeout(S,s),w?j(f):c}function V(f){var g=f-$,m=f-v,b=s-g;return h?Zn(b,_-m):b}function q(f){var g=f-$,m=f-v;return $===void 0||g>=s||g<0||h&&m>=_}function S(){var f=K();if(q(f))return B(f);i=setTimeout(S,V(f))}function B(f){return i=void 0,k&&r?j(f):(r=l=void 0,c)}function C(){i!==void 0&&clearTimeout(i),v=0,r=$=l=i=void 0}function O(){return i===void 0?c:B(K())}function M(){var f=K(),g=q(f);if(r=arguments,l=this,$=f,g){if(i===void 0)return A($);if(h)return clearTimeout(i),i=setTimeout(S,s),j($)}return i===void 0&&(i=setTimeout(S,s)),c}return M.cancel=C,M.flush=O,M}var to=eo,no=to,oo=Q,so="Expected a function";function ao(e,s,o){var r=!0,l=!0;if(typeof e!="function")throw new TypeError(so);return oo(o)&&(r="leading"in o?!!o.leading:r,l="trailing"in o?!!o.trailing:l),no(e,s,{leading:r,maxWait:s,trailing:l})}var ro=ao;const io=n("i",{class:"icon-back-to-top"},null,-1),lo=[io],co={__name:"BackToTop",setup(e){let s=p(!1);function o(){window.scrollTo({top:0,behavior:"smooth"})}const r=ro(()=>{const l=document.documentElement.scrollTop||document.body.scrollTop;s.value=l>=600},500);return ne(()=>window.addEventListener("scroll",r)),oe(()=>window.removeEventListener("scroll",r)),(l,_)=>(a(),u("div",{class:E(["back-to-top",{"back-to-top--is-visible":t(s)}]),onClick:o},lo,2))}},uo={bride:"Ана Цветковић",groom:"Иван Јовковић",quote:"Драги наши, са радошћу вас позивамо да заједно прославимо нашу љубав!",date:"20. мaj 2023."},mo=[{time:"14:45ч",event:"Црквено<br/>венчање",icon:"icon-church",location:"<strong>Храм Светог Димитрија</strong>,<br/>Омладинских бригада 3А,<br/>Београд",locationUrl:"https://goo.gl/maps/AnECGrEJYzjvpUUE6"},{time:"16:30ч",event:"Долазак у<br/>ресторан",icon:"icon-altar",location:"<strong>Ресторан Ђурђевдан</strong>,<br/>Зрењанински пут 106Б,<br/>Београд",locationUrl:"https://goo.gl/maps/Y3jwn77DZ9vq9PMQ7"},{time:"17:30ч",event:"Церемонијално</br>венчање",icon:"icon-rings",location:"<strong>Ресторан Ђурђевдан</strong>,<br/>Зрењанински пут 106Б,<br/>Београд"},{time:"18:00ч",event:"Почетак<br/>журке",icon:"icon-love-fireworks",location:"<strong>Ресторан Ђурђевдан</strong>,<br/>Зрењанински пут 106Б,<br/>Београд",socialNetworks:[{name:"Instagram",url:"https://www.instagram.com/vencanja_open_concept/?hl=en",icon:"icon-instagram"},{name:"Facebook",url:"https://www.facebook.com/DjurdjevdanOpenConcept/?locale=sr_RS",icon:"icon-facebook"}]}],_o={text:"Озбиљан корак правимо,<br/>и велику љубав славимо!<br/>Журка века се спрема,<br/>зато немој да те нема.<br/>Ка Ђурђевдану пођи,<br/>и на наше весеље дођи.<br/>Ципеле удобне понеси,<br/>па плесни подијум разнеси.<br/>Своје најбоље покрете покажи,<br/>јер опуштеност<br/>и добро расположење<br/>је оно што се тражи!"},fo={heading:"Потврда доласка",name:{question:"Име и презиме",formEntry:"entry.1117261963",devFormEntry:"entry.1700203536",validationMessage:"Упишите Ваше име и презиме"},coming:{question:"Потврђујем долазак",values:["ДА","НЕ"],formEntry:"entry.1716217797",devFormEntry:"entry.2094815888",validationMessage:"Потврдите долазак"},guestsNumber:{question:"Број гостију који долази са мном...",description:"Изаберите у падајућем менију одговарајући број.",options:[0,1,2,3,4,5,6,7,8,9],formEntry:"entry.1556588741",devFormEntry:"entry.1931387819"},guestsNames:{question:"Имена и презимена гостију који долазе са мном",description:"Додајте име и презиме једно по једног госта.<br/>Децу млађу од две године није потребно додавати.",addGuestButton:"Додајте госта",formEntry:"entry.572556099",devFormEntry:"entry.388527298",validationMessage:"Број гостију није идентичан као број гостију који сте одабрали из падајућег менија"},note:{question:"Напомена",description:"Уколико имате било какву напомену у вези са режимом исхране или Вашим временом доласка, оставите је овде.",formEntry:"entry.1101559294",devFormEntry:"entry.730590923"},submitButton:"Пошаљите",info:"Молимо Вас да нам потврдите долазак до 01.05.2023. године",successfulMessage:"Хвала Вам на одговору &#x1F60A;"},go={text:"Ситно одбројавамо до дана када ћемо изговорити судбоносно ДА!"},vo={header:uo,timeline:mo,story:_o,form:fo,countdown:go},ho={__name:"App",setup(e){const{header:s,timeline:o,story:r,form:l,countdown:_}=vo;return(c,i)=>(a(),u(D,null,[x(t(he),{"header-data":t(s)},null,8,["header-data"]),x(t(Se),{"timeline-data":t(o)},null,8,["timeline-data"]),x(t(Ie),{"story-data":t(r)},null,8,["story-data"]),x(t(tn),{"form-data":t(l),"countdown-data":t(_)},null,8,["form-data","countdown-data"]),x(t(co))],64))}},bo={};function po(e,s){const o=ho;return a(),N(o)}const wo=ue(bo,[["render",po]]);export{wo as default};

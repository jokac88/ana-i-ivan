import{o as a,a as u,b as n,t as d,c as N,w as P,e as S,f as p,h as k,F as j,r as B,u as t,i as h,j as G,k as se,l as A,v as Q,m as H,p as ue,q as de,s as D,T as z,x as ae,y as me}from"./entry.dad61925.js";import{_ as re}from"./nuxt-link.2ec58f4a.js";const _e={class:"header"},fe={class:"header__wrapper"},ge={class:"header__headline"},ve=n("span",null,"и",-1),he={class:"header__quote"},be={class:"header__date"},pe={__name:"Header",props:{headerData:{type:Object,default:()=>{}}},setup(e){return(s,o)=>(a(),u("header",_e,[n("div",fe,[n("div",ge,[n("p",null,d(e.headerData.bride),1),ve,n("p",null,d(e.headerData.groom),1)]),n("p",he,d(e.headerData.quote),1),n("div",be,d(e.headerData.date),1)])]))}},ye=["title"],$e={__name:"SocialNetworkCard",props:{socialNetworkData:{type:Object,default:()=>{}}},setup(e){return(s,o)=>{const r=re;return a(),N(r,{to:e.socialNetworkData.url,target:"_blank",class:"social-network-card"},{default:P(()=>[n("i",{class:S(e.socialNetworkData.icon),title:e.socialNetworkData.name},null,10,ye)]),_:1},8,["to"])}}},we={class:"timeline-card"},Te={class:"timeline-card__time"},ke=["innerHTML"],xe=["innerHTML"],De={class:"timeline-card__social-networks"},je={__name:"TimelineCard",props:{timeline:{type:Object,default:()=>{}}},setup(e){return(s,o)=>{const r=re;return a(),u("section",we,[n("p",Te,d(e.timeline.time),1),n("p",{innerHTML:e.timeline.event,class:"timeline-card__event"},null,8,ke),n("i",{class:S([e.timeline.icon,"timeline-card__event-icon"])},null,2),n("p",{innerHTML:e.timeline.location,class:"timeline-card__location"},null,8,xe),e.timeline.locationUrl?(a(),N(r,{key:0,to:e.timeline.locationUrl,target:"_blank",class:"timeline-card__map-button"},{default:P(()=>[p(" Видите на мапи ")]),_:1},8,["to"])):k("",!0),n("div",De,[(a(!0),u(j,null,B(e.timeline.socialNetworks,l=>(a(),N(t($e),{"social-network-data":l},null,8,["social-network-data"]))),256))])])}}},Ee={class:"timeline"},Se={class:"timeline__wrapper"},Ne={__name:"Timeline",props:{timelineData:{type:Array,default:()=>[]}},setup(e){return(s,o)=>(a(),u("section",Ee,[n("div",Se,[(a(!0),u(j,null,B(e.timelineData,r=>(a(),N(t(je),{timeline:r},null,8,["timeline"]))),256))])]))}},Oe=""+new URL("loader.603cfaef.gif",import.meta.url).href,Me={class:"radio-button"},Ie=["name","value","checked"],Le=n("span",{class:"checkmark"},null,-1),qe={__name:"RadioButton",props:{value:{type:String,default:""},formEntry:{type:String,default:""},checked:{type:Boolean,default:""}},setup(e){return(s,o)=>(a(),u("label",Me,[p(d(e.value)+" ",1),n("input",{type:"radio",name:e.checked&&e.formEntry,onClick:o[0]||(o[0]=r=>s.$emit("radio-button-clicked",e.value)),value:e.value,checked:e.checked},null,8,Ie),Le]))}},Fe={class:"guest-name"},Be={class:"guest-name__number"},Ce={class:"guest-name__text"},Re=n("i",{class:"icon-user-delete"},null,-1),Ue=[Re],Ge={__name:"GuestName",props:{guestName:{type:String,default:""},index:{type:Number,default:0}},setup(e){return(s,o)=>(a(),u("div",Fe,[n("p",Be,d(e.index)+".",1),n("p",Ce,d(e.guestName),1),n("button",{onClick:o[0]||(o[0]=r=>s.$emit("remove-guest",e.index)),type:"button",class:"guest-name__remove-guest-button"},Ue)]))}},Ae={class:"form"},He={class:"form__wrapper"},Ve=["action"],Pe={class:"form__heading"},We={class:"form__element form__name"},Ke={class:"form__text"},Qe=n("span",{class:"form__required"},"*",-1),Xe={class:"form__input"},Ye=["name"],ze={key:0,class:"form__validation-message"},Je={class:"form__element form__coming"},Ze={class:"form__text"},et=n("span",{class:"form__required"},"*",-1),tt={class:"form__input"},nt={key:0,class:"form__validation-message"},ot={key:0,class:"form__additional-questions"},st={class:"form__element form__guests-number"},at={class:"form__text"},rt={class:"form__description"},it={class:"form__select"},lt=["name"],ct=["value"],ut=n("i",{class:"icon-dropdown"},null,-1),dt={key:0,class:"form__element form__guests-names"},mt={class:"form__text"},_t=n("span",{class:"form__required"},"*",-1),ft=["innerHTML"],gt={class:"form__flex-container"},vt=["onKeyup","disabled"],ht=["disabled"],bt=n("i",{class:"icon-user-add"},null,-1),pt=[bt],yt={key:0},$t={key:1},wt={key:1,class:"form__validation-message"},Tt=["name","value"],kt={class:"form__element"},xt={class:"form__text"},Dt={class:"form__description"},jt=["name"],Et={class:"form__submit"},St=["disabled"],Nt={key:0,src:Oe,alt:"@/assets/img/loader.gif"},Ot=n("iframe",{id:"google-form-response-iframe",name:"google-form-response-iframe"},null,-1),Mt={key:0,class:"form__successful-message"},It={class:"form__successful-message-wrapper"},Lt=["innerHTML"],qt=n("i",{class:"icon-close"},null,-1),Ft=[qt],Bt={class:"form__info"},Ct={__name:"Form",props:{formData:{type:Object,default:()=>{}}},setup(e){const o="https://docs.google.com/forms/u/0/d/e/1FAIpQLScflw1DmNIo5jTST1cpX-HBBAJA3osntembDZu7f7P2DGNEAg/formResponse",r="formEntry",l=h(""),_=h(""),c=h(1),i=h([]),y={1:"једног госта",2:"два госта",3:"три госта",4:"четири госта",5:"пет гостију",6:"шест гостију",7:"седам гостију",8:"осам гостију",9:"девет гостију"},g=h(""),w=h(""),v=h(!1),x=h(!1),I=h(!1),L=h(!1),W=G(()=>c.value-1===i.value.length||c.value-1<i.value.length),C=G(()=>!g.value||c.value-1===i.value.length||c.value-1<i.value.length),O=G(()=>_.value==="ДА"),R=G(()=>[...i.value].reverse());function U(){g.value&&(i.value=[...i.value,g.value],M())}function K($){i.value.splice($-1,1)}function M(){g.value&&(document.querySelector(".form__guests-names input.form__input-field").focus(),g.value="")}function m($){$.scrollIntoView({behavior:"smooth"})}function T(){if(v.value||(v.value=!0),!l.value){const f=document.querySelector(".form__name");return m(f),!1}if(!_.value){const f=document.querySelector(".form__coming");return m(f),!1}if(_.value==="ДА"&&c.value-1!==i.value.length){const f=document.querySelector(".form__guests-names");return m(f),!1}document.getElementById("google-form").target="google-form-response-iframe";const $=document.getElementById("google-form-response-iframe");x.value=!0,$&&($.onload=()=>{x.value=!1,L.value=!0})}function E(){l.value=_.value=w.value="",c.value=1,i.value=[],v.value=x.value=I.value=L.value=!1}return se(()=>{document.getElementById("google-form").addEventListener("keypress",f=>{if(f.key==="Enter")return f.preventDefault(),!1})}),($,f)=>(a(),u("section",Ae,[n("div",He,[n("form",{id:"google-form",target:"google-form-response-iframe",action:t(o),method:"POST",onsubmit:T},[n("p",Pe,d(e.formData.heading),1),n("div",We,[n("p",Ke,[p(d(e.formData.name.question)+" ",1),Qe]),n("div",Xe,[A(n("input",{type:"text",name:e.formData.name[t(r)],"onUpdate:modelValue":f[0]||(f[0]=b=>H(l)?l.value=b:null),class:S([{"form__input-field--is-error":t(v)&&!t(l)},"form__input-field"])},null,10,Ye),[[Q,t(l)]]),t(v)&&!t(l)?(a(),u("p",ze,d(e.formData.name.validationMessage),1)):k("",!0)])]),n("div",Je,[n("p",Ze,[p(d(e.formData.coming.question)+" ",1),et]),n("div",tt,[(a(!0),u(j,null,B(e.formData.coming.values,b=>(a(),N(t(qe),{value:b,"form-entry":e.formData.coming[t(r)],class:S({"radio-button--is-error":t(v)&&!t(_)}),checked:t(_)===b,onRadioButtonClicked:f[1]||(f[1]=q=>_.value=q)},null,8,["value","form-entry","class","checked"]))),256)),t(v)&&!t(_)?(a(),u("p",nt,d(e.formData.coming.validationMessage),1)):k("",!0)])]),t(O)?(a(),u("div",ot,[n("div",st,[n("p",at,[p(d(e.formData.guestsNumber.question)+" ",1),n("span",rt,d(e.formData.guestsNumber.description),1)]),n("div",it,[A(n("select",{name:e.formData.guestsNumber[t(r)],"onUpdate:modelValue":f[2]||(f[2]=b=>H(c)?c.value=b:null),class:"form__input-field"},[(a(!0),u(j,null,B(e.formData.guestsNumber.options,(b,q)=>(a(),u("option",{value:b+1},[q?(a(),u(j,{key:1},[p("+"+d(b),1)],64)):(a(),u(j,{key:0},[p("Само ја")],64))],8,ct))),256))],8,lt),[[ue,t(c)]]),ut])]),t(c)>1?(a(),u("div",dt,[n("p",mt,[p(d(e.formData.guestsNames.question)+" ",1),_t,n("span",{innerHTML:e.formData.guestsNames.description,class:"form__description"},null,8,ft)]),n("div",gt,[A(n("input",{type:"text",onKeyup:de(U,["enter"]),"onUpdate:modelValue":f[3]||(f[3]=b=>H(g)?g.value=b:null),class:"form__input-field",disabled:t(W)},null,40,vt),[[Q,t(g)]]),D(z,null,{default:P(()=>[t(g)?(a(),u("i",{key:0,class:"icon-close",onClick:M})):k("",!0)]),_:1}),n("button",{type:"button",onClick:U,class:"form__add-guest-button",disabled:t(C)},pt,8,ht)]),n("div",{class:S([{"form__guests-names-list--is-error":t(v)&&t(i).length!==t(c)-1},"form__guests-names-list"])},[t(i).length!==t(c)-1?(a(),u("p",{key:0,class:S([{"form__guests-number-info--is-error":t(v)&&t(i).length!==t(c)-1},"form__guests-number-info"])},[t(i).length<t(c)-1?(a(),u("span",yt," Додајте "+d(t(i).length?"још":"")+" "+d(y[t(c)-1-t(i).length]),1)):(a(),u("span",$t," Oдузмите joш "+d(y[t(i).length+1-t(c)]),1))],2)):k("",!0),(a(!0),u(j,null,B(t(R),(b,q)=>(a(),N(t(Ge),{"guest-name":b,index:t(i).length-q,onRemoveGuest:K},null,8,["guest-name","index"]))),256)),t(v)&&t(i).length!==t(c)-1?(a(),u("p",wt,d(e.formData.guestsNames.validationMessage),1)):k("",!0)],2),n("input",{type:"text",name:e.formData.guestsNames[t(r)],value:t(i).join(", "),class:"is-hidden"},null,8,Tt)])):k("",!0),n("div",kt,[n("p",xt,[p(d(e.formData.note.question)+" ",1),n("span",Dt,d(e.formData.note.description),1)]),A(n("textarea",{name:e.formData.note[t(r)],"onUpdate:modelValue":f[4]||(f[4]=b=>H(w)?w.value=b:null),rows:"4",class:"form__input-field form__text-area",tabindex:"-1"},null,8,jt),[[Q,t(w)]])])])):k("",!0),n("div",Et,[n("button",{class:"form__submit-button",disabled:t(x)},[n("span",null,[p(d(e.formData.submitButton)+" ",1),t(x)?(a(),u("img",Nt)):k("",!0)])],8,St),Ot])],8,Ve),D(z,null,{default:P(()=>[t(L)?(a(),u("div",Mt,[n("div",It,[n("p",{innerHTML:e.formData.successfulMessage},null,8,Lt),n("button",{type:"button",onClick:E,class:"form__close-form-button"},Ft)])])):k("",!0)]),_:1})]),n("p",Bt,d(e.formData.info),1)]))}},Rt={class:"countdown"},Ut={class:"countdown__info"},Gt={class:"countdown__wrapper"},At={class:"countdown__text"},Ht=n("span",null,"Дани",-1),Vt={class:"countdown__text"},Pt=n("span",null,"Сати",-1),Wt={class:"countdown__text"},Kt=n("span",null,"Минути",-1),Qt={class:"countdown__text"},Xt=n("span",null,"Секунде",-1),Yt={__name:"Countdown",props:{countdownData:{type:Object,default:()=>{}}},setup(e){const s="May 20, 2023 14:45:00";let o=h(0),r=h(0),l=h(0),_=h(0),c=h(0);const i=new Date(s).getTime(),y=setInterval(g,1e3);function g(){const w=new Date().getTime();o.value=i-w,r.value=Math.floor(o.value/(1e3*60*60*24)),l.value=Math.floor(o.value%(1e3*60*60*24)/(1e3*60*60)),_.value=Math.floor(o.value%(1e3*60*60)/(1e3*60)),c.value=Math.floor(o.value%(1e3*60)/1e3),o.value<0&&clearInterval(y)}return ae(()=>clearInterval(y)),(w,v)=>(a(),u("section",Rt,[n("p",Ut,d(e.countdownData.text),1),n("div",Gt,[n("div",At,[p(d(t(r)<10?`0${t(r)}`:t(r))+" ",1),Ht]),n("div",Vt,[p(d(t(l)<10?`0${t(l)}`:t(l))+" ",1),Pt]),n("div",Wt,[p(d(t(_)<10?`0${t(_)}`:t(_))+" ",1),Kt]),n("div",Qt,[p(d(t(c)<10?`0${t(c)}`:t(c))+" ",1),Xt])])]))}},zt=""+new URL("hug.126f23ef.png",import.meta.url).href,Jt={class:"story"},Zt={class:"story__wrapper"},en=n("div",{class:"story__image"},[n("img",{src:zt,alt:"@/assets/img/hug.png"})],-1),tn=["innerHTML"],nn={__name:"Story",props:{storyData:{type:Object,default:()=>{}}},setup(e){return(s,o)=>(a(),u("section",Jt,[n("div",Zt,[en,n("div",{innerHTML:e.storyData.text,class:"story__text"},null,8,tn)])]))}},on={class:"footer"},sn={__name:"Footer",props:{formData:{type:Object,default:()=>{}},countdownData:{type:Object,default:()=>{}},storyData:{type:Object,default:()=>{}}},setup(e){return(s,o)=>(a(),u("footer",on,[D(t(nn),{"story-data":e.storyData},null,8,["story-data"]),D(t(Ct),{"form-data":e.formData},null,8,["form-data"]),D(t(Yt),{"countdown-data":e.countdownData},null,8,["countdown-data"])]))}};var V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function an(e){var s=typeof e;return e!=null&&(s=="object"||s=="function")}var Y=an,rn=typeof V=="object"&&V&&V.Object===Object&&V,ln=rn,cn=ln,un=typeof self=="object"&&self&&self.Object===Object&&self,dn=cn||un||Function("return this")(),ie=dn,mn=ie,_n=function(){return mn.Date.now()},fn=_n,gn=/\s/;function vn(e){for(var s=e.length;s--&&gn.test(e.charAt(s)););return s}var hn=vn,bn=hn,pn=/^\s+/;function yn(e){return e&&e.slice(0,bn(e)+1).replace(pn,"")}var $n=yn,wn=ie,Tn=wn.Symbol,le=Tn,J=le,ce=Object.prototype,kn=ce.hasOwnProperty,xn=ce.toString,F=J?J.toStringTag:void 0;function Dn(e){var s=kn.call(e,F),o=e[F];try{e[F]=void 0;var r=!0}catch{}var l=xn.call(e);return r&&(s?e[F]=o:delete e[F]),l}var jn=Dn,En=Object.prototype,Sn=En.toString;function Nn(e){return Sn.call(e)}var On=Nn,Z=le,Mn=jn,In=On,Ln="[object Null]",qn="[object Undefined]",ee=Z?Z.toStringTag:void 0;function Fn(e){return e==null?e===void 0?qn:Ln:ee&&ee in Object(e)?Mn(e):In(e)}var Bn=Fn;function Cn(e){return e!=null&&typeof e=="object"}var Rn=Cn,Un=Bn,Gn=Rn,An="[object Symbol]";function Hn(e){return typeof e=="symbol"||Gn(e)&&Un(e)==An}var Vn=Hn,Pn=$n,te=Y,Wn=Vn,ne=0/0,Kn=/^[-+]0x[0-9a-f]+$/i,Qn=/^0b[01]+$/i,Xn=/^0o[0-7]+$/i,Yn=parseInt;function zn(e){if(typeof e=="number")return e;if(Wn(e))return ne;if(te(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=te(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=Pn(e);var o=Qn.test(e);return o||Xn.test(e)?Yn(e.slice(2),o?2:8):Kn.test(e)?ne:+e}var Jn=zn,Zn=Y,X=fn,oe=Jn,eo="Expected a function",to=Math.max,no=Math.min;function oo(e,s,o){var r,l,_,c,i,y,g=0,w=!1,v=!1,x=!0;if(typeof e!="function")throw new TypeError(eo);s=oe(s)||0,Zn(o)&&(w=!!o.leading,v="maxWait"in o,_=v?to(oe(o.maxWait)||0,s):_,x="trailing"in o?!!o.trailing:x);function I(m){var T=r,E=l;return r=l=void 0,g=m,c=e.apply(E,T),c}function L(m){return g=m,i=setTimeout(O,s),w?I(m):c}function W(m){var T=m-y,E=m-g,$=s-T;return v?no($,_-E):$}function C(m){var T=m-y,E=m-g;return y===void 0||T>=s||T<0||v&&E>=_}function O(){var m=X();if(C(m))return R(m);i=setTimeout(O,W(m))}function R(m){return i=void 0,x&&r?I(m):(r=l=void 0,c)}function U(){i!==void 0&&clearTimeout(i),g=0,r=y=l=i=void 0}function K(){return i===void 0?c:R(X())}function M(){var m=X(),T=C(m);if(r=arguments,l=this,y=m,T){if(i===void 0)return L(y);if(v)return clearTimeout(i),i=setTimeout(O,s),I(y)}return i===void 0&&(i=setTimeout(O,s)),c}return M.cancel=U,M.flush=K,M}var so=oo,ao=so,ro=Y,io="Expected a function";function lo(e,s,o){var r=!0,l=!0;if(typeof e!="function")throw new TypeError(io);return ro(o)&&(r="leading"in o?!!o.leading:r,l="trailing"in o?!!o.trailing:l),ao(e,s,{leading:r,maxWait:s,trailing:l})}var co=lo;const uo=n("i",{class:"icon-back-to-top"},null,-1),mo=[uo],_o={__name:"BackToTop",setup(e){let s=h(!1);function o(){window.scrollTo({top:0,behavior:"smooth"})}const r=co(()=>{const l=document.documentElement.scrollTop||document.body.scrollTop;s.value=l>=600},500);return se(()=>window.addEventListener("scroll",r)),ae(()=>window.removeEventListener("scroll",r)),(l,_)=>(a(),u("div",{class:S(["back-to-top",{"back-to-top--is-visible":t(s)}]),onClick:o},mo,2))}},fo={bride:"Ана Цветковић",groom:"Иван Јовковић",quote:"Драги наши, са радошћу вас позивамо да заједно прославимо нашу љубав!",date:"20. мaj 2023."},go=[{time:"14:45ч",event:"Црквено<br/>венчање",icon:"icon-church",location:"<strong>Храм Светог Димитрија</strong>,<br/>Омладинских бригада 3А,<br/>Београд",locationUrl:"https://goo.gl/maps/AnECGrEJYzjvpUUE6"},{time:"16:30ч",event:"Долазак у<br/>ресторан",icon:"icon-altar",location:"<strong>Ресторан Ђурђевдан</strong>,<br/>Зрењанински пут 106Б,<br/>Београд",locationUrl:"https://goo.gl/maps/Y3jwn77DZ9vq9PMQ7"},{time:"17:30ч",event:"Церемонијално</br>венчање",icon:"icon-rings",location:"<strong>Ресторан Ђурђевдан</strong>,<br/>Зрењанински пут 106Б,<br/>Београд"},{time:"18:00ч",event:"Почетак<br/>журке",icon:"icon-love-fireworks",location:"<strong>Ресторан Ђурђевдан</strong>,<br/>Зрењанински пут 106Б,<br/>Београд",socialNetworks:[{name:"Instagram",url:"https://www.instagram.com/vencanja_open_concept/?hl=en",icon:"icon-instagram"},{name:"Facebook",url:"https://www.facebook.com/DjurdjevdanOpenConcept/?locale=sr_RS",icon:"icon-facebook"}]}],vo={text:"Озбиљан корак правимо,<br/>и велику љубав славимо!<br/>Журка века се спрема,<br/>зато немој да те нема.<br/>Ка Ђурђевдану пођи,<br/>и на наше весеље дођи.<br/>Ципеле удобне понеси,<br/>па плесни подијум разнеси.<br/>Своје најбоље покрете покажи,<br/>јер опуштеност<br/>и добро расположење<br/>је оно што се тражи!"},ho={heading:"Потврда доласка",name:{question:"Име и презиме",formEntry:"entry.1117261963",devFormEntry:"entry.1700203536",validationMessage:"Упишите Ваше име и презиме"},coming:{question:"Потврђујем долазак",values:["ДА","НЕ"],formEntry:"entry.1716217797",devFormEntry:"entry.2094815888",validationMessage:"Потврдите долазак"},guestsNumber:{question:"Број гостију који долази са мном...",description:"Изаберите у падајућем менију одговарајући број.",options:[0,1,2,3,4,5,6,7,8,9],formEntry:"entry.1556588741",devFormEntry:"entry.1931387819"},guestsNames:{question:"Имена и презимена гостију који долазе са мном",description:"Додајте име и презиме једно по једног госта.<br/>Децу млађу од две године није потребно додавати.",addGuestButton:"Додајте госта",formEntry:"entry.572556099",devFormEntry:"entry.388527298",validationMessage:"Број гостију није идентичан као број гостију који сте одабрали из падајућег менија"},note:{question:"Напомена",description:"Уколико имате било какву напомену у вези са режимом исхране или Вашим временом доласка, оставите је овде.",formEntry:"entry.1101559294",devFormEntry:"entry.730590923"},submitButton:"Пошаљите",info:"Молимо Вас да нам потврдите долазак до 01.05.2023. године",successfulMessage:"Хвала Вам на одговору &#x1F60A;",formSubmitError:"Дошло је до грешке у комуникацији са сервером, покушајте поново."},bo={text:"Ситно одбројавамо до дана када ћемо изговорити судбоносно ДА!"},po={header:fo,timeline:go,story:vo,form:ho,countdown:bo},yo={__name:"App",setup(e){const{header:s,timeline:o,story:r,form:l,countdown:_}=po;return(c,i)=>(a(),u(j,null,[D(t(pe),{"header-data":t(s)},null,8,["header-data"]),D(t(Ne),{"timeline-data":t(o)},null,8,["timeline-data"]),D(t(sn),{"story-data":t(r),"form-data":t(l),"countdown-data":t(_)},null,8,["story-data","form-data","countdown-data"]),D(t(_o))],64))}},$o={};function wo(e,s){const o=yo;return a(),N(o)}const xo=me($o,[["render",wo]]);export{xo as default};

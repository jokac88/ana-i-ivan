import{o as a,a as c,b as n,t as d,c as M,w as G,e as O,f as y,h as x,F as E,r as A,u as t,i as v,j as B,k as re,l as C,v as P,m as R,p as _e,q as Y,s as D,T as z,x as ie,y as fe}from"./entry.aca49968.js";import{_ as le}from"./nuxt-link.cd1b5b11.js";const ge={class:"header"},ve={class:"header__wrapper"},he={class:"header__headline"},be=n("span",null,"и",-1),pe={class:"header__quote"},ye={class:"header__date"},$e={__name:"Header",props:{headerData:{type:Object,default:()=>{}}},setup(e){return(s,o)=>(a(),c("header",ge,[n("div",ve,[n("div",he,[n("p",null,d(e.headerData.bride),1),be,n("p",null,d(e.headerData.groom),1)]),n("p",pe,d(e.headerData.quote),1),n("div",ye,d(e.headerData.date),1)])]))}},we=["title"],ke={__name:"SocialNetworkCard",props:{socialNetworkData:{type:Object,default:()=>{}}},setup(e){return(s,o)=>{const r=le;return a(),M(r,{to:e.socialNetworkData.url,target:"_blank",class:"social-network-card"},{default:G(()=>[n("i",{class:O(e.socialNetworkData.icon),title:e.socialNetworkData.name},null,10,we)]),_:1},8,["to"])}}},Te={class:"timeline-card"},xe={class:"timeline-card__time"},De=["innerHTML"],Ne=["innerHTML"],je={class:"timeline-card__social-networks"},Se={__name:"TimelineCard",props:{timeline:{type:Object,default:()=>{}}},setup(e){return(s,o)=>{const r=le;return a(),c("section",Te,[n("p",xe,d(e.timeline.time),1),n("p",{innerHTML:e.timeline.event,class:"timeline-card__event"},null,8,De),n("i",{class:O([e.timeline.icon,"timeline-card__event-icon"])},null,2),n("p",{innerHTML:e.timeline.location,class:"timeline-card__location"},null,8,Ne),e.timeline.locationUrl?(a(),M(r,{key:0,to:e.timeline.locationUrl,target:"_blank",class:"timeline-card__map-button"},{default:G(()=>[y(" Видите на мапи ")]),_:1},8,["to"])):x("",!0),n("div",je,[(a(!0),c(E,null,A(e.timeline.socialNetworks,l=>(a(),M(t(ke),{"social-network-data":l},null,8,["social-network-data"]))),256))])])}}},Ee={class:"timeline"},Fe={class:"timeline__wrapper"},Oe={__name:"Timeline",props:{timelineData:{type:Array,default:()=>[]}},setup(e){return(s,o)=>(a(),c("section",Ee,[n("div",Fe,[(a(!0),c(E,null,A(e.timelineData,r=>(a(),M(t(Se),{timeline:r},null,8,["timeline"]))),256))])]))}},Me=""+new URL("loader.603cfaef.gif",import.meta.url).href,Le={class:"radio-button"},Ie=["name","value","checked"],qe=n("span",{class:"checkmark"},null,-1),Be={__name:"RadioButton",props:{value:{type:String,default:""},formEntry:{type:String,default:""},checked:{type:Boolean,default:""}},setup(e){return(s,o)=>(a(),c("label",Le,[y(d(e.value)+" ",1),n("input",{type:"radio",name:e.checked&&e.formEntry,onClick:o[0]||(o[0]=r=>s.$emit("radio-button-clicked",e.value)),value:e.value,checked:e.checked},null,8,Ie),qe]))}},Ce={class:"guest-name"},Re={class:"guest-name__number"},Ue={class:"guest-name__text"},Ge=n("i",{class:"icon-user-delete"},null,-1),Ae=[Ge],He={__name:"GuestFullName",props:{guestFullName:{type:String,default:""},index:{type:Number,default:0}},setup(e){return(s,o)=>(a(),c("div",Ce,[n("p",Re,d(e.index)+".",1),n("p",Ue,d(e.guestFullName),1),n("button",{onClick:o[0]||(o[0]=r=>s.$emit("remove-guest",e.index)),type:"button",class:"guest-name__remove-guest-button"},Ae)]))}},Ve={class:"form"},Pe={class:"form__wrapper"},Ke=["action"],We={class:"form__heading"},Qe={class:"form__element form__fullName"},Xe={class:"form__text"},Ye=n("span",{class:"form__required"},"*",-1),ze={class:"form__input"},Je=["name"],Ze={key:0,class:"form__validation-message"},et={class:"form__element form__coming"},tt={class:"form__text"},nt=n("span",{class:"form__required"},"*",-1),ot={class:"form__input"},st={key:0,class:"form__validation-message"},at={key:0,class:"form__additional-questions"},rt={class:"form__element form__guests-number"},it={class:"form__text"},lt={class:"form__description"},ct={class:"form__select"},ut=["name"],dt=["value"],mt=n("i",{class:"icon-dropdown"},null,-1),_t={key:0,class:"form__element form__guests-names"},ft={class:"form__text"},gt=n("span",{class:"form__required"},"*",-1),vt=["innerHTML"],ht={class:"form__flex-container"},bt={class:"form__guestFirstName"},pt=["onKeyup","disabled"],yt={class:"form__guestLastName"},$t=["onKeyup","disabled"],wt=["onKeyup","disabled"],kt=n("i",{class:"icon-user-add"},null,-1),Tt=[kt],xt={key:0},Dt={key:1},Nt={key:1,class:"form__validation-message"},jt=["name","value"],St={class:"form__element"},Et={class:"form__text"},Ft={class:"form__description"},Ot=["name"],Mt={class:"form__submit"},Lt=["disabled"],It={key:0,src:Me,alt:"@/assets/img/loader.gif"},qt=n("iframe",{id:"google-form-response-iframe",name:"google-form-response-iframe"},null,-1),Bt={key:0,class:"form__successful-message"},Ct={class:"form__successful-message-wrapper"},Rt=["innerHTML"],Ut=n("i",{class:"icon-close"},null,-1),Gt=[Ut],At={class:"form__info"},Ht={__name:"Form",props:{formData:{type:Object,default:()=>{}}},setup(e){const o="https://docs.google.com/forms/u/0/d/e/1FAIpQLScflw1DmNIo5jTST1cpX-HBBAJA3osntembDZu7f7P2DGNEAg/formResponse",r="formEntry",l=v(""),_=v(""),u=v(1),i=v([]),$={1:"једног госта",2:"два госта",3:"три госта",4:"четири госта",5:"пет гостију",6:"шест гостију",7:"седам гостију",8:"осам гостију",9:"девет гостију"},h=v(""),b=v(""),k=v(""),p=v(!1),N=v(!1),W=v(!1),L=v(!1),I=B(()=>`${h.value} ${b.value}`),F=B(()=>u.value-1===i.value.length||u.value-1<i.value.length),H=B(()=>!h.value||!b.value||u.value-1===i.value.length||u.value-1<i.value.length),Q=B(()=>_.value==="ДА"),X=B(()=>[...i.value].reverse());function S(){h.value&&b.value&&(i.value=[...i.value,I.value],h.value=b.value=I.value="",document.querySelector(".form__guestFirstName input.form__input-field").focus())}function f(w){i.value.splice(w-1,1)}function T(w){document.querySelector(`.form__${w} input.form__input-field`).focus(),this[w]=""}function j(w){w.scrollIntoView({behavior:"smooth"})}function V(){if(p.value||(p.value=!0),!l.value){const m=document.querySelector(".form__fullName");return j(m),!1}if(!_.value){const m=document.querySelector(".form__coming");return j(m),!1}if(_.value==="ДА"&&u.value-1!==i.value.length){const m=document.querySelector(".form__guests-names");return j(m),!1}document.getElementById("google-form").target="google-form-response-iframe";const w=document.getElementById("google-form-response-iframe");N.value=!0,w&&(w.onload=()=>{N.value=!1,L.value=!0})}function me(){l.value=_.value=k.value="",u.value=1,i.value=[],p.value=N.value=W.value=L.value=!1}return re(()=>{document.getElementById("google-form").addEventListener("keypress",m=>{if(m.key==="Enter")return m.preventDefault(),!1})}),(w,m)=>(a(),c("section",Ve,[n("div",Pe,[n("form",{id:"google-form",target:"google-form-response-iframe",action:t(o),method:"POST",onsubmit:V},[n("p",We,d(e.formData.heading),1),n("div",Qe,[n("p",Xe,[y(d(e.formData.fullName.question)+" ",1),Ye]),n("div",ze,[C(n("input",{type:"text",name:e.formData.fullName[t(r)],"onUpdate:modelValue":m[0]||(m[0]=g=>R(l)?l.value=g:null),class:O([{"form__input-field--is-error":t(p)&&!t(l)},"form__input-field"])},null,10,Je),[[P,t(l)]]),t(p)&&!t(l)?(a(),c("p",Ze,d(e.formData.fullName.validationMessage),1)):x("",!0)])]),n("div",et,[n("p",tt,[y(d(e.formData.coming.question)+" ",1),nt]),n("div",ot,[(a(!0),c(E,null,A(e.formData.coming.values,g=>(a(),M(t(Be),{value:g,"form-entry":e.formData.coming[t(r)],class:O({"radio-button--is-error":t(p)&&!t(_)}),checked:t(_)===g,onRadioButtonClicked:m[1]||(m[1]=q=>_.value=q)},null,8,["value","form-entry","class","checked"]))),256)),t(p)&&!t(_)?(a(),c("p",st,d(e.formData.coming.validationMessage),1)):x("",!0)])]),t(Q)?(a(),c("div",at,[n("div",rt,[n("p",it,[y(d(e.formData.guestsNumber.question)+" ",1),n("span",lt,d(e.formData.guestsNumber.description),1)]),n("div",ct,[C(n("select",{name:e.formData.guestsNumber[t(r)],"onUpdate:modelValue":m[2]||(m[2]=g=>R(u)?u.value=g:null),class:"form__input-field"},[(a(!0),c(E,null,A(e.formData.guestsNumber.options,(g,q)=>(a(),c("option",{value:g+1},[q?(a(),c(E,{key:1},[y("+"+d(g),1)],64)):(a(),c(E,{key:0},[y("Само ја")],64))],8,dt))),256))],8,ut),[[_e,t(u)]]),mt])]),t(u)>1?(a(),c("div",_t,[n("p",ft,[y(d(e.formData.guestsFullNames.question)+" ",1),gt,n("span",{innerHTML:e.formData.guestsFullNames.description,class:"form__description"},null,8,vt)]),n("div",ht,[n("div",bt,[C(n("input",{type:"text","onUpdate:modelValue":m[3]||(m[3]=g=>R(h)?h.value=g:null),onKeyup:Y(S,["enter"]),class:"form__input-field",placeholder:"Име",disabled:t(F)},null,40,pt),[[P,t(h)]]),D(z,null,{default:G(()=>[t(h)?(a(),c("i",{key:0,class:"icon-close",onClick:m[4]||(m[4]=g=>T("guestFirstName"))})):x("",!0)]),_:1})]),n("div",yt,[C(n("input",{type:"text","onUpdate:modelValue":m[5]||(m[5]=g=>R(b)?b.value=g:null),onKeyup:Y(S,["enter"]),class:"form__input-field",placeholder:"Презиме",disabled:t(F)},null,40,$t),[[P,t(b)]]),D(z,null,{default:G(()=>[t(b)?(a(),c("i",{key:0,class:"icon-close",onClick:m[6]||(m[6]=g=>T("guestLastName"))})):x("",!0)]),_:1})]),n("button",{type:"button",onClick:S,onKeyup:Y(S,["enter"]),class:"form__add-guest-button",disabled:t(H)},Tt,40,wt)]),n("div",{class:O([{"form__guests-names-list--is-error":t(p)&&t(i).length!==t(u)-1},"form__guests-names-list"])},[t(i).length!==t(u)-1?(a(),c("p",{key:0,class:O([{"form__guests-number-info--is-error":t(p)&&t(i).length!==t(u)-1},"form__guests-number-info"])},[t(i).length<t(u)-1?(a(),c("span",xt," Додајте "+d(t(i).length?"још":"")+" "+d($[t(u)-1-t(i).length]),1)):(a(),c("span",Dt," Oдузмите joш "+d($[t(i).length+1-t(u)]),1))],2)):x("",!0),(a(!0),c(E,null,A(t(X),(g,q)=>(a(),M(t(He),{"guest-fullName":g,index:t(i).length-q,onRemoveGuest:f},null,8,["guest-fullName","index"]))),256)),t(p)&&t(i).length!==t(u)-1?(a(),c("p",Nt,d(e.formData.guestsFullNames.validationMessage),1)):x("",!0)],2),n("input",{type:"text",name:e.formData.guestsFullNames[t(r)],value:t(i).join(", "),class:"form__input-field--is-hidden",readonly:""},null,8,jt)])):x("",!0),n("div",St,[n("p",Et,[y(d(e.formData.note.question)+" ",1),n("span",Ft,d(e.formData.note.description),1)]),C(n("textarea",{name:e.formData.note[t(r)],"onUpdate:modelValue":m[7]||(m[7]=g=>R(k)?k.value=g:null),rows:"4",class:"form__input-field form__text-area",tabindex:"-1"},null,8,Ot),[[P,t(k)]])])])):x("",!0),n("div",Mt,[n("button",{class:"form__submit-button",disabled:t(N)},[n("span",null,[y(d(e.formData.submitButton)+" ",1),t(N)?(a(),c("img",It)):x("",!0)])],8,Lt),qt])],8,Ke),D(z,null,{default:G(()=>[t(L)?(a(),c("div",Bt,[n("div",Ct,[n("p",{innerHTML:e.formData.successfulMessage},null,8,Rt),n("button",{type:"button",onClick:me,class:"form__close-form-button"},Gt)])])):x("",!0)]),_:1})]),n("p",At,d(e.formData.info),1)]))}},Vt={class:"countdown"},Pt={class:"countdown__info"},Kt={class:"countdown__wrapper"},Wt={class:"countdown__text"},Qt=n("span",null,"Дани",-1),Xt={class:"countdown__text"},Yt=n("span",null,"Сати",-1),zt={class:"countdown__text"},Jt=n("span",null,"Минути",-1),Zt={class:"countdown__text"},en=n("span",null,"Секунде",-1),tn={__name:"Countdown",props:{countdownData:{type:Object,default:()=>{}}},setup(e){const s="May 20, 2023 14:45:00";let o=v(0),r=v(0),l=v(0),_=v(0),u=v(0);const i=new Date(s).getTime(),$=setInterval(h,1e3);function h(){const b=new Date().getTime();o.value=i-b,r.value=Math.floor(o.value/(1e3*60*60*24)),l.value=Math.floor(o.value%(1e3*60*60*24)/(1e3*60*60)),_.value=Math.floor(o.value%(1e3*60*60)/(1e3*60)),u.value=Math.floor(o.value%(1e3*60)/1e3),o.value<0&&clearInterval($)}return ie(()=>clearInterval($)),(b,k)=>(a(),c("section",Vt,[n("p",Pt,d(e.countdownData.text),1),n("div",Kt,[n("div",Wt,[y(d(t(r)<10?`0${t(r)}`:t(r))+" ",1),Qt]),n("div",Xt,[y(d(t(l)<10?`0${t(l)}`:t(l))+" ",1),Yt]),n("div",zt,[y(d(t(_)<10?`0${t(_)}`:t(_))+" ",1),Jt]),n("div",Zt,[y(d(t(u)<10?`0${t(u)}`:t(u))+" ",1),en])])]))}},nn=""+new URL("hug.126f23ef.png",import.meta.url).href,on={class:"story"},sn={class:"story__wrapper"},an=n("div",{class:"story__image"},[n("img",{src:nn,alt:"@/assets/img/hug.png"})],-1),rn=["innerHTML"],ln={__name:"Story",props:{storyData:{type:Object,default:()=>{}}},setup(e){return(s,o)=>(a(),c("section",on,[n("div",sn,[an,n("div",{innerHTML:e.storyData.text,class:"story__text"},null,8,rn)])]))}},cn={class:"footer"},un={__name:"Footer",props:{formData:{type:Object,default:()=>{}},countdownData:{type:Object,default:()=>{}},storyData:{type:Object,default:()=>{}}},setup(e){return(s,o)=>(a(),c("footer",cn,[D(t(ln),{"story-data":e.storyData},null,8,["story-data"]),D(t(Ht),{"form-data":e.formData},null,8,["form-data"]),D(t(tn),{"countdown-data":e.countdownData},null,8,["countdown-data"])]))}};var K=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function dn(e){var s=typeof e;return e!=null&&(s=="object"||s=="function")}var Z=dn,mn=typeof K=="object"&&K&&K.Object===Object&&K,_n=mn,fn=_n,gn=typeof self=="object"&&self&&self.Object===Object&&self,vn=fn||gn||Function("return this")(),ce=vn,hn=ce,bn=function(){return hn.Date.now()},pn=bn,yn=/\s/;function $n(e){for(var s=e.length;s--&&yn.test(e.charAt(s)););return s}var wn=$n,kn=wn,Tn=/^\s+/;function xn(e){return e&&e.slice(0,kn(e)+1).replace(Tn,"")}var Dn=xn,Nn=ce,jn=Nn.Symbol,ue=jn,ee=ue,de=Object.prototype,Sn=de.hasOwnProperty,En=de.toString,U=ee?ee.toStringTag:void 0;function Fn(e){var s=Sn.call(e,U),o=e[U];try{e[U]=void 0;var r=!0}catch{}var l=En.call(e);return r&&(s?e[U]=o:delete e[U]),l}var On=Fn,Mn=Object.prototype,Ln=Mn.toString;function In(e){return Ln.call(e)}var qn=In,te=ue,Bn=On,Cn=qn,Rn="[object Null]",Un="[object Undefined]",ne=te?te.toStringTag:void 0;function Gn(e){return e==null?e===void 0?Un:Rn:ne&&ne in Object(e)?Bn(e):Cn(e)}var An=Gn;function Hn(e){return e!=null&&typeof e=="object"}var Vn=Hn,Pn=An,Kn=Vn,Wn="[object Symbol]";function Qn(e){return typeof e=="symbol"||Kn(e)&&Pn(e)==Wn}var Xn=Qn,Yn=Dn,oe=Z,zn=Xn,se=0/0,Jn=/^[-+]0x[0-9a-f]+$/i,Zn=/^0b[01]+$/i,eo=/^0o[0-7]+$/i,to=parseInt;function no(e){if(typeof e=="number")return e;if(zn(e))return se;if(oe(e)){var s=typeof e.valueOf=="function"?e.valueOf():e;e=oe(s)?s+"":s}if(typeof e!="string")return e===0?e:+e;e=Yn(e);var o=Zn.test(e);return o||eo.test(e)?to(e.slice(2),o?2:8):Jn.test(e)?se:+e}var oo=no,so=Z,J=pn,ae=oo,ao="Expected a function",ro=Math.max,io=Math.min;function lo(e,s,o){var r,l,_,u,i,$,h=0,b=!1,k=!1,p=!0;if(typeof e!="function")throw new TypeError(ao);s=ae(s)||0,so(o)&&(b=!!o.leading,k="maxWait"in o,_=k?ro(ae(o.maxWait)||0,s):_,p="trailing"in o?!!o.trailing:p);function N(f){var T=r,j=l;return r=l=void 0,h=f,u=e.apply(j,T),u}function W(f){return h=f,i=setTimeout(F,s),b?N(f):u}function L(f){var T=f-$,j=f-h,V=s-T;return k?io(V,_-j):V}function I(f){var T=f-$,j=f-h;return $===void 0||T>=s||T<0||k&&j>=_}function F(){var f=J();if(I(f))return H(f);i=setTimeout(F,L(f))}function H(f){return i=void 0,p&&r?N(f):(r=l=void 0,u)}function Q(){i!==void 0&&clearTimeout(i),h=0,r=$=l=i=void 0}function X(){return i===void 0?u:H(J())}function S(){var f=J(),T=I(f);if(r=arguments,l=this,$=f,T){if(i===void 0)return W($);if(k)return clearTimeout(i),i=setTimeout(F,s),N($)}return i===void 0&&(i=setTimeout(F,s)),u}return S.cancel=Q,S.flush=X,S}var co=lo,uo=co,mo=Z,_o="Expected a function";function fo(e,s,o){var r=!0,l=!0;if(typeof e!="function")throw new TypeError(_o);return mo(o)&&(r="leading"in o?!!o.leading:r,l="trailing"in o?!!o.trailing:l),uo(e,s,{leading:r,maxWait:s,trailing:l})}var go=fo;const vo=n("i",{class:"icon-back-to-top"},null,-1),ho=[vo],bo={__name:"BackToTop",setup(e){let s=v(!1);function o(){window.scrollTo({top:0,behavior:"smooth"})}const r=go(()=>{const l=document.documentElement.scrollTop||document.body.scrollTop;s.value=l>=600},500);return re(()=>window.addEventListener("scroll",r)),ie(()=>window.removeEventListener("scroll",r)),(l,_)=>(a(),c("div",{class:O(["back-to-top",{"back-to-top--is-visible":t(s)}]),onClick:o},ho,2))}},po={bride:"Ана Цветковић",groom:"Иван Јовковић",quote:"Драги наши, са радошћу вас позивамо да заједно прославимо нашу љубав!",date:"20. мaj 2023."},yo=[{time:"14:45ч",event:"Црквено<br/>венчање",icon:"icon-church",location:"<strong>Храм Светог Димитрија</strong>,<br/>Омладинских бригада 3А,<br/>Београд",locationUrl:"https://goo.gl/maps/AnECGrEJYzjvpUUE6"},{time:"16:30ч",event:"Долазак у<br/>ресторан",icon:"icon-altar",location:"<strong>Ресторан Ђурђевдан</strong>,<br/>Зрењанински пут 106Б,<br/>Београд",locationUrl:"https://goo.gl/maps/Y3jwn77DZ9vq9PMQ7"},{time:"17:30ч",event:"Церемонијално</br>венчање",icon:"icon-rings",location:"<strong>Ресторан Ђурђевдан</strong>,<br/>Зрењанински пут 106Б,<br/>Београд"},{time:"18:00ч",event:"Почетак<br/>журке",icon:"icon-love-fireworks",location:"<strong>Ресторан Ђурђевдан</strong>,<br/>Зрењанински пут 106Б,<br/>Београд",socialNetworks:[{name:"Instagram",url:"https://www.instagram.com/vencanja_open_concept/?hl=en",icon:"icon-instagram"},{name:"Facebook",url:"https://www.facebook.com/DjurdjevdanOpenConcept/?locale=sr_RS",icon:"icon-facebook"}]}],$o={text:"Озбиљан корак правимо,<br/>и велику љубав славимо!<br/>Журка века се спрема,<br/>зато немој да те нема.<br/>Ка Ђурђевдану пођи,<br/>и на наше весеље дођи.<br/>Ципеле удобне понеси,<br/>па плесни подијум разнеси.<br/>Своје најбоље покрете покажи,<br/>јер опуштеност<br/>и добро расположење<br/>је оно што се тражи!"},wo={heading:"Потврда доласка",fullName:{question:"Име и презиме",formEntry:"entry.1117261963",devFormEntry:"entry.1700203536",validationMessage:"Упишите Ваше име и презиме"},coming:{question:"Потврђујем долазак",values:["ДА","НЕ"],formEntry:"entry.1716217797",devFormEntry:"entry.2094815888",validationMessage:"Потврдите долазак"},guestsNumber:{question:"Број гостију који долази са мном...",description:"Изаберите у падајућем менију одговарајући број.",options:[0,1,2,3,4,5,6,7,8,9],formEntry:"entry.1556588741",devFormEntry:"entry.1931387819"},guestsFullNames:{question:"Имена и презимена гостију који долазе са мном",description:"Додајте име и презиме једно по једног госта.<br/>Децу млађу од две године није потребно додавати.",addGuestButton:"Додајте госта",formEntry:"entry.572556099",devFormEntry:"entry.388527298",validationMessage:"Број гостију није идентичан броју који сте изабрали у падајућем менију"},note:{question:"Напомена",description:"Уколико имате било какву напомену у вези са режимом исхране или Вашим временом доласка, оставите је овде.",formEntry:"entry.1101559294",devFormEntry:"entry.730590923"},submitButton:"Пошаљите",info:"Молимо Вас да нам потврдите долазак до 01.05.2023. године",successfulMessage:"Хвала Вам на одговору &#x1F60A;",formSubmitError:"Дошло је до грешке у комуникацији са сервером, покушајте поново."},ko={text:"Ситно одбројавамо до дана када ћемо изговорити судбоносно ДА!"},To={header:po,timeline:yo,story:$o,form:wo,countdown:ko},xo={__name:"App",setup(e){const{header:s,timeline:o,story:r,form:l,countdown:_}=To;return(u,i)=>(a(),c(E,null,[D(t($e),{"header-data":t(s)},null,8,["header-data"]),D(t(Oe),{"timeline-data":t(o)},null,8,["timeline-data"]),D(t(un),{"story-data":t(r),"form-data":t(l),"countdown-data":t(_)},null,8,["story-data","form-data","countdown-data"]),D(t(bo))],64))}},Do={};function No(e,s){const o=xo;return a(),M(o)}const Eo=fe(Do,[["render",No]]);export{Eo as default};

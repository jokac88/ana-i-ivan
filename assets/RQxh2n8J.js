import{o as a,c as r,a as s,t as c,n as S,w as L,q as D,d as b,s as h,F,u as I,v as n,x as se,y as M,z as X,A as O,B,C as oe,D as P,b as v,T as R,r as j,h as J,_ as ae}from"./C9DjbRTo.js";import{_ as Z}from"./C0JmXqtc.js";const ie={class:"header"},re={class:"header__wrapper"},le={class:"header__headline"},ce=s("span",null,"и",-1),ue={class:"header__quote"},me={class:"header__date"},de={__name:"Header",props:{headerData:{type:Object,default:()=>{}}},setup(t){return(e,o)=>(a(),r("header",ie,[s("div",re,[s("div",le,[s("p",null,c(t.headerData.bride),1),ce,s("p",null,c(t.headerData.groom),1)]),s("p",ue,c(t.headerData.quote),1),s("div",me,c(t.headerData.date),1)])]))}},fe=["title"],_e={__name:"SocialNetworkCard",props:{socialNetworkData:{type:Object,default:()=>{}}},setup(t){return(e,o)=>{const i=Z;return a(),S(i,{to:t.socialNetworkData.url,target:"_blank",class:"social-network-card"},{default:L(()=>[s("i",{class:D(t.socialNetworkData.icon),title:t.socialNetworkData.name},null,10,fe)]),_:1},8,["to"])}}},ge={class:"timeline-card"},be={class:"timeline-card__time"},pe=["innerHTML"],he=["innerHTML"],ye={class:"timeline-card__social-networks"},ve={__name:"TimelineCard",props:{timeline:{type:Object,default:()=>{}}},setup(t){return(e,o)=>{const i=Z;return a(),r("section",ge,[s("p",be,c(t.timeline.time),1),s("p",{innerHTML:t.timeline.event,class:"timeline-card__event"},null,8,pe),s("i",{class:D([t.timeline.icon,"timeline-card__event-icon"])},null,2),s("p",{innerHTML:t.timeline.location,class:"timeline-card__location"},null,8,he),t.timeline.locationUrl?(a(),S(i,{key:0,to:t.timeline.locationUrl,target:"_blank",class:"timeline-card__map-button"},{default:L(()=>[b(" Видите на мапи ")]),_:1},8,["to"])):h("",!0),s("div",ye,[(a(!0),r(F,null,I(t.timeline.socialNetworks,u=>(a(),S(n(_e),{"social-network-data":u},null,8,["social-network-data"]))),256))])])}}},Ne={class:"timeline"},Te={class:"timeline__wrapper"},ke={__name:"Timeline",props:{timelineData:{type:Array,default:()=>[]}},setup(t){return(e,o)=>(a(),r("section",Ne,[s("div",Te,[(a(!0),r(F,null,I(t.timelineData,i=>(a(),S(n(ve),{timeline:i},null,8,["timeline"]))),256))])]))}},xe=""+new URL("qr-code.D3dks9F6.svg",import.meta.url).href,we="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20style='margin:%20auto;%20background:%20none;%20display:%20block;%20shape-rendering:%20auto;'%20width='200px'%20height='200px'%20viewBox='0%200%20100%20100'%20preserveAspectRatio='xMidYMid'%3e%3cg%20transform='translate(80,50)'%3e%3cg%20transform='rotate(0)'%3e%3ccircle%20cx='0'%20cy='0'%20r='6'%20fill='%23ffffff'%20fill-opacity='1'%3e%3canimateTransform%20attributeName='transform'%20type='scale'%20begin='-0.875s'%20values='1.5%201.5;1%201'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%3e%3c/animateTransform%3e%3canimate%20attributeName='fill-opacity'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%20values='1;0'%20begin='-0.875s'%3e%3c/animate%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3cg%20transform='translate(71.21320343559643,71.21320343559643)'%3e%3cg%20transform='rotate(45)'%3e%3ccircle%20cx='0'%20cy='0'%20r='6'%20fill='%23ffffff'%20fill-opacity='0.875'%3e%3canimateTransform%20attributeName='transform'%20type='scale'%20begin='-0.75s'%20values='1.5%201.5;1%201'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%3e%3c/animateTransform%3e%3canimate%20attributeName='fill-opacity'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%20values='1;0'%20begin='-0.75s'%3e%3c/animate%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3cg%20transform='translate(50,80)'%3e%3cg%20transform='rotate(90)'%3e%3ccircle%20cx='0'%20cy='0'%20r='6'%20fill='%23ffffff'%20fill-opacity='0.75'%3e%3canimateTransform%20attributeName='transform'%20type='scale'%20begin='-0.625s'%20values='1.5%201.5;1%201'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%3e%3c/animateTransform%3e%3canimate%20attributeName='fill-opacity'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%20values='1;0'%20begin='-0.625s'%3e%3c/animate%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3cg%20transform='translate(28.786796564403577,71.21320343559643)'%3e%3cg%20transform='rotate(135)'%3e%3ccircle%20cx='0'%20cy='0'%20r='6'%20fill='%23ffffff'%20fill-opacity='0.625'%3e%3canimateTransform%20attributeName='transform'%20type='scale'%20begin='-0.5s'%20values='1.5%201.5;1%201'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%3e%3c/animateTransform%3e%3canimate%20attributeName='fill-opacity'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%20values='1;0'%20begin='-0.5s'%3e%3c/animate%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3cg%20transform='translate(20,50.00000000000001)'%3e%3cg%20transform='rotate(180)'%3e%3ccircle%20cx='0'%20cy='0'%20r='6'%20fill='%23ffffff'%20fill-opacity='0.5'%3e%3canimateTransform%20attributeName='transform'%20type='scale'%20begin='-0.375s'%20values='1.5%201.5;1%201'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%3e%3c/animateTransform%3e%3canimate%20attributeName='fill-opacity'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%20values='1;0'%20begin='-0.375s'%3e%3c/animate%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3cg%20transform='translate(28.78679656440357,28.786796564403577)'%3e%3cg%20transform='rotate(225)'%3e%3ccircle%20cx='0'%20cy='0'%20r='6'%20fill='%23ffffff'%20fill-opacity='0.375'%3e%3canimateTransform%20attributeName='transform'%20type='scale'%20begin='-0.25s'%20values='1.5%201.5;1%201'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%3e%3c/animateTransform%3e%3canimate%20attributeName='fill-opacity'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%20values='1;0'%20begin='-0.25s'%3e%3c/animate%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3cg%20transform='translate(49.99999999999999,20)'%3e%3cg%20transform='rotate(270)'%3e%3ccircle%20cx='0'%20cy='0'%20r='6'%20fill='%23ffffff'%20fill-opacity='0.25'%3e%3canimateTransform%20attributeName='transform'%20type='scale'%20begin='-0.125s'%20values='1.5%201.5;1%201'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%3e%3c/animateTransform%3e%3canimate%20attributeName='fill-opacity'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%20values='1;0'%20begin='-0.125s'%3e%3c/animate%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3cg%20transform='translate(71.21320343559643,28.78679656440357)'%3e%3cg%20transform='rotate(315)'%3e%3ccircle%20cx='0'%20cy='0'%20r='6'%20fill='%23ffffff'%20fill-opacity='0.125'%3e%3canimateTransform%20attributeName='transform'%20type='scale'%20begin='0s'%20values='1.5%201.5;1%201'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%3e%3c/animateTransform%3e%3canimate%20attributeName='fill-opacity'%20keyTimes='0;1'%20dur='1s'%20repeatCount='indefinite'%20values='1;0'%20begin='0s'%3e%3c/animate%3e%3c/circle%3e%3c/g%3e%3c/g%3e%3c!--%20[ldio]%20generated%20by%20https://loading.io/%20--%3e%3c/svg%3e",$e={class:"radio-button"},Fe=["name","value","checked"],De=s("span",{class:"checkmark"},null,-1),Se={__name:"RadioButton",props:{value:{type:String,default:""},formEntry:{type:String,default:""},checked:{type:Boolean,default:""}},setup(t){return(e,o)=>(a(),r("label",$e,[b(c(t.value)+" ",1),s("input",{type:"radio",name:t.checked&&t.formEntry,onClick:o[0]||(o[0]=i=>e.$emit("radio-button-clicked",t.value)),value:t.value,checked:t.checked},null,8,Fe),De]))}},Ee={class:"guest-name"},je={class:"guest-name__number"},Le={class:"guest-name__text"},Ce=s("i",{class:"icon-user-delete"},null,-1),Me=[Ce],Oe={__name:"GuestFullName",props:{guestFullName:{type:String,default:""},index:{type:Number,default:0}},setup(t){return(e,o)=>(a(),r("div",Ee,[s("p",je,c(t.index)+".",1),s("p",Le,c(t.guestFullName),1),s("button",{onClick:o[0]||(o[0]=i=>e.$emit("remove-guest",t.index)),type:"button",class:"guest-name__remove-guest-button"},Me)]))}},qe={class:"form"},Ie={class:"form__wrapper"},Be={class:"form__heading"},Re=["action"],Ue={class:"form__element form__fullName"},Ae={class:"form__text"},He=s("span",{class:"form__required"},"*",-1),Ge={class:"form__input"},Ve=["name"],Pe={key:0,class:"form__validation-message"},We={class:"form__element form__coming"},Ye={class:"form__text"},Ke=s("span",{class:"form__required"},"*",-1),ze={class:"form__input"},Qe={key:0,class:"form__validation-message"},Xe={key:0,class:"form__additional-questions"},Je={class:"form__element form__guests-number"},Ze={class:"form__text"},et={class:"form__description"},tt={class:"form__select"},nt=["name"],st=["value"],ot=s("i",{class:"icon-dropdown"},null,-1),at={key:0,class:"form__element form__guests-names"},it={class:"form__text"},rt=s("span",{class:"form__required"},"*",-1),lt=["innerHTML"],ct={class:"form__flex-container"},ut={class:"form__guestFirstName"},mt=["disabled"],dt={class:"form__guestLastName"},ft=["disabled"],_t=["disabled"],gt=s("i",{class:"icon-user-add"},null,-1),bt=[gt],pt={key:0},ht={key:1},yt={key:1,class:"form__validation-message"},vt=["name","value"],Nt={class:"form__element"},Tt={class:"form__text"},kt={class:"form__description"},xt=["name"],wt={class:"form__submit"},$t={class:"form__submit-button"},Ft={key:0,src:we,alt:"@/assets/img/loader.svg"},Dt=s("iframe",{id:"google-form-response-iframe",name:"google-form-response-iframe"},null,-1),St={key:0,class:"form__overlay"},Et={key:0,class:"form__successful-message"},jt={class:"form__successful-message-wrapper"},Lt=["innerHTML"],Ct=s("i",{class:"icon-close"},null,-1),Mt=[Ct],Ot={class:"form__info"},qt="https://docs.google.com/forms/u/0/d/e/1FAIpQLScflw1DmNIo5jTST1cpX-HBBAJA3osntembDZu7f7P2DGNEAg/formResponse",It={__name:"Form",props:{formData:{type:Object,default:()=>{}}},setup(t){const e=se({fullName:"",coming:"",guestsNumber:1,guestsFullNames:[],guestFirstName:"",guestLastName:"",note:"",isSubmitted:!1,isLoading:!1,submitError:!1,isSuccessful:!1}),o=qt,i="formEntry",u={1:"једног госта",2:"два госта",3:"три госта",4:"четири госта",5:"пет гостију",6:"шест гостију",7:"седам гостију",8:"осам гостију",9:"девет гостију"},_=M(()=>`${e.guestFirstName} ${e.guestLastName}`),p=M(()=>e.guestsNumber-1===e.guestsFullNames.length||e.guestsNumber-1<e.guestsFullNames.length),f=M(()=>!e.guestFirstName||!e.guestLastName||e.guestsNumber-1===e.guestsFullNames.length||e.guestsNumber-1<e.guestsFullNames.length),y=M(()=>e.coming==="ДА"),N=M(()=>[...e.guestsFullNames].reverse());function T(){e.guestFirstName&&e.guestLastName&&(e.guestsFullNames=[...e.guestsFullNames,_.value],e.guestFirstName=e.guestLastName="",document.querySelector(".form__guestFirstName input.form__input-field").focus())}function x(g){e.guestsFullNames.splice(g-1,1)}function E(g){document.querySelector(`.form__${g} input.form__input-field`).focus(),e[g]=""}function w(g){g.scrollIntoView({behavior:"smooth"})}function H(){if(e.isSubmitted||(e.isSubmitted=!0),!e.fullName){const l=document.querySelector(".form__fullName");return w(l),!1}if(!e.coming){const l=document.querySelector(".form__coming");return w(l),!1}if(e.coming==="ДА"&&e.guestsNumber-1!==e.guestsFullNames.length){const l=document.querySelector(".form__guests-names");return w(l),!1}document.getElementById("google-form").target="google-form-response-iframe";const g=document.getElementById("google-form-response-iframe");e.isLoading=!0,g&&(g.onload=()=>{e.isLoading=!1,e.isSuccessful=!0})}function G(){e.fullName=e.coming=e.note="",e.guestsNumber=1,e.guestsFullNames=[],e.isSubmitted=e.isLoading=e.submitError=e.isSuccessful=!1}return X(()=>{document.getElementById("google-form").addEventListener("keypress",l=>{if(l.key==="Enter")return l.preventDefault(),!1})}),(g,l)=>(a(),r("section",qe,[s("div",Ie,[s("p",Be,c(t.formData.heading),1),s("form",{id:"google-form",target:"google-form-response-iframe",action:n(o),method:"POST",onsubmit:H},[s("div",Ue,[s("p",Ae,[b(c(t.formData.fullName.question)+" ",1),He]),s("div",Ge,[O(s("input",{type:"text",name:t.formData.fullName[n(i)],"onUpdate:modelValue":l[0]||(l[0]=m=>n(e).fullName=m),class:D([{"form__input-field--is-error":n(e).isSubmitted&&!n(e).fullName},"form__input-field"])},null,10,Ve),[[B,n(e).fullName]]),n(e).isSubmitted&&!n(e).fullName?(a(),r("p",Pe,c(t.formData.fullName.validationMessage),1)):h("",!0)])]),s("div",We,[s("p",Ye,[b(c(t.formData.coming.question)+" ",1),Ke]),s("div",ze,[(a(!0),r(F,null,I(t.formData.coming.values,m=>(a(),S(n(Se),{value:m,"form-entry":t.formData.coming[n(i)],class:D({"radio-button--is-error":n(e).isSubmitted&&!n(e).coming}),checked:n(e).coming===m,onRadioButtonClicked:l[1]||(l[1]=$=>n(e).coming=$)},null,8,["value","form-entry","class","checked"]))),256)),n(e).isSubmitted&&!n(e).coming?(a(),r("p",Qe,c(t.formData.coming.validationMessage),1)):h("",!0)])]),n(y)?(a(),r("div",Xe,[s("div",Je,[s("p",Ze,[b(c(t.formData.guestsNumber.question)+" ",1),s("span",et,c(t.formData.guestsNumber.description),1)]),s("div",tt,[O(s("select",{name:t.formData.guestsNumber[n(i)],"onUpdate:modelValue":l[2]||(l[2]=m=>n(e).guestsNumber=m),class:"form__input-field"},[(a(!0),r(F,null,I(t.formData.guestsNumber.options,(m,$)=>(a(),r("option",{value:m+1},[$?(a(),r(F,{key:1},[b("+"+c(m),1)],64)):(a(),r(F,{key:0},[b("Само ја")],64))],8,st))),256))],8,nt),[[oe,n(e).guestsNumber]]),ot])]),n(e).guestsNumber>1?(a(),r("div",at,[s("p",it,[b(c(t.formData.guestsFullNames.question)+" ",1),rt,s("span",{innerHTML:t.formData.guestsFullNames.description,class:"form__description"},null,8,lt)]),s("div",ct,[s("div",ut,[O(s("input",{type:"text","onUpdate:modelValue":l[3]||(l[3]=m=>n(e).guestFirstName=m),onKeyup:P(T,["enter"]),class:"form__input-field",placeholder:"Име",disabled:n(p)},null,40,mt),[[B,n(e).guestFirstName]]),v(R,null,{default:L(()=>[n(e).guestFirstName?(a(),r("i",{key:0,class:"icon-close",onClick:l[4]||(l[4]=m=>E("guestFirstName"))})):h("",!0)]),_:1})]),s("div",dt,[O(s("input",{type:"text","onUpdate:modelValue":l[5]||(l[5]=m=>n(e).guestLastName=m),onKeyup:P(T,["enter"]),class:"form__input-field",placeholder:"Презиме",disabled:n(p)},null,40,ft),[[B,n(e).guestLastName]]),v(R,null,{default:L(()=>[n(e).guestLastName?(a(),r("i",{key:0,class:"icon-close",onClick:l[6]||(l[6]=m=>E("guestLastName"))})):h("",!0)]),_:1})]),s("button",{type:"button",onClick:T,onKeyup:P(T,["enter"]),class:"form__add-guest-button",disabled:n(f)},bt,40,_t)]),s("div",{class:D([{"form__guests-names-list--is-error":n(e).isSubmitted&&n(e).guestsFullNames.length!==n(e).guestsNumber-1},"form__guests-names-list"])},[n(e).guestsFullNames.length!==n(e).guestsNumber-1?(a(),r("p",{key:0,class:D([{"form__guests-number-info--is-error":n(e).isSubmitted&&n(e).guestsFullNames.length!==n(e).guestsNumber-1},"form__guests-number-info"])},[n(e).guestsFullNames.length<n(e).guestsNumber-1?(a(),r("span",pt," Додајте "+c(n(e).guestsFullNames.length?"још":"")+" "+c(u[n(e).guestsNumber-1-n(e).guestsFullNames.length]),1)):(a(),r("span",ht," Oдузмите joш "+c(u[n(e).guestsFullNames.length+1-n(e).guestsNumber]),1))],2)):h("",!0),(a(!0),r(F,null,I(n(N),(m,$)=>(a(),S(n(Oe),{"guest-fullName":m,index:n(e).guestsFullNames.length-$,onRemoveGuest:x},null,8,["guest-fullName","index"]))),256)),n(e).isSubmitted&&n(e).guestsFullNames.length!==n(e).guestsNumber-1?(a(),r("p",yt,c(t.formData.guestsFullNames.validationMessage),1)):h("",!0)],2),s("input",{type:"text",name:t.formData.guestsFullNames[n(i)],value:n(e).guestsFullNames.join(", "),class:"form__input-field--is-hidden",readonly:""},null,8,vt)])):h("",!0),s("div",Nt,[s("p",Tt,[b(c(t.formData.note.question)+" ",1),s("span",kt,c(t.formData.note.description),1)]),O(s("textarea",{name:t.formData.note[n(i)],"onUpdate:modelValue":l[7]||(l[7]=m=>n(e).note=m),rows:"4",class:"form__input-field form__text-area",tabindex:"-1"},null,8,xt),[[B,n(e).note]])])])):h("",!0),s("div",wt,[s("button",$t,[s("span",null,[b(c(t.formData.submitButton)+" ",1),n(e).isLoading?(a(),r("img",Ft)):h("",!0)])])]),Dt,v(R,null,{default:L(()=>[n(e).isLoading?(a(),r("div",St)):h("",!0)]),_:1})],8,Re),v(R,null,{default:L(()=>[n(e).isSuccessful?(a(),r("div",Et,[s("div",jt,[s("p",{innerHTML:t.formData.successfulMessage},null,8,Lt),s("button",{type:"button",onClick:G,class:"form__close-form-button"},Mt)])])):h("",!0)]),_:1})]),s("p",Ot,c(t.formData.info),1)]))}},Bt=window.setInterval,Rt={class:"countdown"},Ut={class:"countdown__info"},At={class:"countdown__wrapper"},Ht={class:"countdown__text"},Gt=s("span",null,"Дани",-1),Vt={class:"countdown__text"},Pt=s("span",null,"Сати",-1),Wt={class:"countdown__text"},Yt=s("span",null,"Минути",-1),Kt={class:"countdown__text"},zt=s("span",null,"Секунде",-1),Qt="May 20, 2024 14:45:00",Xt={__name:"Countdown",props:{countdownData:{type:Object,default:()=>{}}},setup(t){let e=j(0),o=j(0),i=j(0),u=j(0),_=j(0);const p=new Date(Qt).getTime(),f=Bt(y,1e3);function y(){const N=new Date().getTime();e.value=p-N,o.value=Math.floor(e.value/(1e3*60*60*24)),i.value=Math.floor(e.value%(1e3*60*60*24)/(1e3*60*60)),u.value=Math.floor(e.value%(1e3*60*60)/(1e3*60)),_.value=Math.floor(e.value%(1e3*60)/1e3),e.value<0&&clearInterval(f)}return J(()=>clearInterval(f)),(N,T)=>(a(),r("section",Rt,[s("p",Ut,c(t.countdownData.text),1),s("div",At,[s("div",Ht,[b(c(n(o)<10?`0${n(o)}`:n(o))+" ",1),Gt]),s("div",Vt,[b(c(n(i)<10?`0${n(i)}`:n(i))+" ",1),Pt]),s("div",Wt,[b(c(n(u)<10?`0${n(u)}`:n(u))+" ",1),Yt]),s("div",Kt,[b(c(n(_)<10?`0${n(_)}`:n(_))+" ",1),zt])])]))}},Jt=""+new URL("hug.BiB1YLNI.png",import.meta.url).href,Zt={class:"story"},en={class:"story__wrapper"},tn=s("div",{class:"story__image"},[s("img",{src:Jt,alt:"@/assets/img/hug.png"})],-1),nn=["innerHTML"],sn={__name:"Story",props:{storyData:{type:Object,default:()=>{}}},setup(t){return(e,o)=>(a(),r("section",Zt,[s("div",en,[tn,s("div",{innerHTML:t.storyData.text,class:"story__text"},null,8,nn)])]))}},on={class:"footer"},an=s("div",{class:"footer__qr-code"},[s("img",{src:xe,alt:"@/assets/img/qr-code",title:"Скенирајте"})],-1),rn={__name:"Footer",props:{formData:{type:Object,default:()=>{}},countdownData:{type:Object,default:()=>{}},storyData:{type:Object,default:()=>{}}},setup(t){return(e,o)=>(a(),r("footer",on,[v(n(sn),{"story-data":t.storyData},null,8,["story-data"]),v(n(It),{"form-data":t.formData},null,8,["form-data"]),v(n(Xt),{"countdown-data":t.countdownData},null,8,["countdown-data"]),an]))}};var ln=typeof global=="object"&&global&&global.Object===Object&&global,cn=typeof self=="object"&&self&&self.Object===Object&&self,ee=ln||cn||Function("return this")(),U=ee.Symbol,te=Object.prototype,un=te.hasOwnProperty,mn=te.toString,q=U?U.toStringTag:void 0;function dn(t){var e=un.call(t,q),o=t[q];try{t[q]=void 0;var i=!0}catch{}var u=mn.call(t);return i&&(e?t[q]=o:delete t[q]),u}var fn=Object.prototype,_n=fn.toString;function gn(t){return _n.call(t)}var bn="[object Null]",pn="[object Undefined]",K=U?U.toStringTag:void 0;function hn(t){return t==null?t===void 0?pn:bn:K&&K in Object(t)?dn(t):gn(t)}function yn(t){return t!=null&&typeof t=="object"}var vn="[object Symbol]";function Nn(t){return typeof t=="symbol"||yn(t)&&hn(t)==vn}var Tn=/\s/;function kn(t){for(var e=t.length;e--&&Tn.test(t.charAt(e)););return e}var xn=/^\s+/;function wn(t){return t&&t.slice(0,kn(t)+1).replace(xn,"")}function A(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var z=0/0,$n=/^[-+]0x[0-9a-f]+$/i,Fn=/^0b[01]+$/i,Dn=/^0o[0-7]+$/i,Sn=parseInt;function Q(t){if(typeof t=="number")return t;if(Nn(t))return z;if(A(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=A(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=wn(t);var o=Fn.test(t);return o||Dn.test(t)?Sn(t.slice(2),o?2:8):$n.test(t)?z:+t}var W=function(){return ee.Date.now()},En="Expected a function",jn=Math.max,Ln=Math.min;function Cn(t,e,o){var i,u,_,p,f,y,N=0,T=!1,x=!1,E=!0;if(typeof t!="function")throw new TypeError(En);e=Q(e)||0,A(o)&&(T=!!o.leading,x="maxWait"in o,_=x?jn(Q(o.maxWait)||0,e):_,E="trailing"in o?!!o.trailing:E);function w(d){var k=i,C=u;return i=u=void 0,N=d,p=t.apply(C,k),p}function H(d){return N=d,f=setTimeout(l,e),T?w(d):p}function G(d){var k=d-y,C=d-N,Y=e-k;return x?Ln(Y,_-C):Y}function g(d){var k=d-y,C=d-N;return y===void 0||k>=e||k<0||x&&C>=_}function l(){var d=W();if(g(d))return m(d);f=setTimeout(l,G(d))}function m(d){return f=void 0,E&&i?w(d):(i=u=void 0,p)}function $(){f!==void 0&&clearTimeout(f),N=0,i=y=u=f=void 0}function ne(){return f===void 0?p:m(W())}function V(){var d=W(),k=g(d);if(i=arguments,u=this,y=d,k){if(f===void 0)return H(y);if(x)return clearTimeout(f),f=setTimeout(l,e),w(y)}return f===void 0&&(f=setTimeout(l,e)),p}return V.cancel=$,V.flush=ne,V}var Mn="Expected a function";function On(t,e,o){var i=!0,u=!0;if(typeof t!="function")throw new TypeError(Mn);return A(o)&&(i="leading"in o?!!o.leading:i,u="trailing"in o?!!o.trailing:u),Cn(t,e,{leading:i,maxWait:e,trailing:u})}const qn=s("i",{class:"icon-back-to-top"},null,-1),In=[qn],Bn={__name:"BackToTop",setup(t){let e=j(!1);function o(){window.scrollTo({top:0,behavior:"smooth"})}const i=On(()=>{const u=document.documentElement.scrollTop||document.body.scrollTop;e.value=u>=600},500);return X(()=>window.addEventListener("scroll",i)),J(()=>window.removeEventListener("scroll",i)),(u,_)=>(a(),r("div",{class:D(["back-to-top",{"back-to-top--is-visible":n(e)}]),onClick:o},In,2))}},Rn={bride:"Ана Цветковић",groom:"Иван Јовковић",quote:"Драги наши, са радошћу вас позивамо да заједно прославимо нашу љубав!",date:"20. мaj 2023."},Un=[{time:"14:45ч",event:"Црквено<br/>венчање",icon:"icon-church",location:"<strong>Храм Светог Димитрија</strong>,<br/>Омладинских бригада 3А,<br/>Београд",locationUrl:"https://goo.gl/maps/AnECGrEJYzjvpUUE6"},{time:"16:30ч",event:"Долазак у<br/>ресторан",icon:"icon-altar",location:"<strong>Ресторан Ђурђевдан</strong>,<br/>Зрењанински пут 106Б,<br/>Београд",locationUrl:"https://goo.gl/maps/Y3jwn77DZ9vq9PMQ7"},{time:"17:30ч",event:"Церемонијално</br>венчање",icon:"icon-rings",location:"<strong>Ресторан Ђурђевдан</strong>,<br/>Зрењанински пут 106Б,<br/>Београд"},{time:"18:00ч",event:"Почетак<br/>журке",icon:"icon-love-fireworks",location:"<strong>Ресторан Ђурђевдан</strong>,<br/>Зрењанински пут 106Б,<br/>Београд",socialNetworks:[{name:"Instagram",url:"https://www.instagram.com/vencanja_open_concept/?hl=en",icon:"icon-instagram"},{name:"Facebook",url:"https://www.facebook.com/DjurdjevdanOpenConcept/?locale=sr_RS",icon:"icon-facebook"}]}],An={text:"Озбиљан корак правимо,<br/>и велику љубав славимо!<br/>Журка века се спрема,<br/>зато немој да те нема.<br/>Ка Ђурђевдану пођи,<br/>и на наше весеље дођи.<br/>Ципеле удобне понеси,<br/>па плесни подијум разнеси.<br/>Своје најбоље покрете покажи,<br/>јер опуштеност<br/>и добро расположење<br/>је оно што се тражи!"},Hn={heading:"Потврда доласка",fullName:{question:"Име и презиме",formEntry:"entry.1117261963",devFormEntry:"entry.1700203536",validationMessage:"Упишите Ваше име и презиме"},coming:{question:"Потврђујем долазак",values:["ДА","НЕ"],formEntry:"entry.1716217797",devFormEntry:"entry.2094815888",validationMessage:"Потврдите долазак"},guestsNumber:{question:"Број гостију који долази са мном...",description:"Изаберите у падајућем менију одговарајући број.",options:[0,1,2,3,4,5,6,7,8,9],formEntry:"entry.1556588741",devFormEntry:"entry.1931387819"},guestsFullNames:{question:"Имена и презимена гостију који долазе са мном",description:"Додајте име и презиме једно по једног госта.<br/>Децу млађу од две године није потребно додавати.",addGuestButton:"Додајте госта",formEntry:"entry.572556099",devFormEntry:"entry.388527298",validationMessage:"Број гостију није идентичан броју који сте изабрали у падајућем менију"},note:{question:"Напомена",description:"Уколико имате било какву напомену у вези са режимом исхране или Вашим временом доласка, оставите је овде.",formEntry:"entry.1101559294",devFormEntry:"entry.730590923"},submitButton:"Пошаљите",info:"Молимо Вас да нам потврдите долазак до 01.05.2023. године",successfulMessage:"Хвала Вам на одговору &#x1F60A;",formSubmitError:"Дошло је до грешке у комуникацији са сервером, покушајте поново."},Gn={text:"Ситно одбројавамо до дана када ћемо изговорити судбоносно ДА!"},Vn={header:Rn,timeline:Un,story:An,form:Hn,countdown:Gn},Pn={class:"flex-container"},Wn={__name:"App",setup(t){const{header:e,timeline:o,story:i,form:u,countdown:_}=Vn;return(p,f)=>(a(),r("div",Pn,[v(n(de),{"header-data":n(e)},null,8,["header-data"]),v(n(ke),{"timeline-data":n(o)},null,8,["timeline-data"]),v(n(rn),{"story-data":n(i),"form-data":n(u),"countdown-data":n(_)},null,8,["story-data","form-data","countdown-data"]),v(n(Bn))]))}},Yn={};function Kn(t,e){const o=Wn;return a(),S(o)}const Xn=ae(Yn,[["render",Kn]]);export{Xn as default};
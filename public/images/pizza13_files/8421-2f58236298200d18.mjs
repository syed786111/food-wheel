(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[8421],{163745:(e,t,i)=>{i.d(t,{Z:()=>x,e:()=>_});var n=i(667294),o=i(240684),l=i(497529),s=i(898781),r=i(46584),a=i(131108),c=i(599997),d=i(883119),u=i(785893);const p=(0,o.ZP)({resolved:{},chunkName:()=>"www-unified-components-video-VideoWrapper",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!i.m[t]},importAsync:()=>Promise.resolve().then(i.bind(i,288273)),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((e=>(this.resolved[t]=!0,e)))},requireSync(e){const t=this.resolve(e);return i(t)},resolve(){return 288273}}),_=Object.freeze({white:"inverse",black:"default"}),m={defaultOverlay:{backgroundColor:"rgba(0, 0, 0, 0.4)"},hoverOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)"}};function h({titleText:e,videoPin:t,videoPlaceholderImage:i}){const n=(0,s.ZP)();return(0,u.jsx)(p,{fallback:(0,u.jsx)(d.Ee,{alt:e||"",color:"rgb(111, 91, 77)",naturalHeight:3,naturalWidth:2,src:i||t.metadata.thumbnail,fit:"cover"}),accessibilityMaximizeLabel:n._('Maximize', 'Maximize button on video', 'Maximize button on video'),accessibilityMinimizeLabel:n._('Minimize', 'Minimize button on video', 'Minimize button on video'),accessibilityMuteLabel:n._('Mute', 'Mute button on video', 'Mute button on video'),accessibilityPauseLabel:n._('Pause', 'Pause button on video', 'Pause button on video'),accessibilityPlayLabel:n._('Play', 'Play button on video', 'Play button on video'),accessibilityProgressBarLabel:n._('Progress bar', 'FeedCard.accessibilityProgressBarLabel', 'Video progress bar accessibility label'),accessibilityUnmuteLabel:n._('Unmute', 'Unmute button on video', 'Unmute button on video'),aspectRatio:c.q4,captions:"",controls:!1,loop:!0,isAutoPlay:!0,onPlay:()=>{},onPlayError:()=>{},playing:!0,playsInline:!0,poster:i||t.metadata.thumbnail,src:t.url,volume:0})}function x({buttonAction:e,buttonCustomization:t,buttonText:i,experience:o,hideCompleteButton:s,imageAlt:p,imageUrl:_,openNewTab:x,storyType:y,titleColor:g,titleText:v,titleTextCustomization:f,videoPin:b,videoPlaceholderImage:j}){const[T,I]=(0,n.useState)(!1),{experience_id:w,placement_id:P}=o||{},z=(0,l.Z)(P),A=(0,r.Z)({onVisibilityChanged:e=>{e&&o&&"viewed"!==o.status&&(o.status="viewed",z.viewExperience(P,w,!1,!0))}}),S=()=>{o&&z.completeExperience(P,w,!1,!0)},C=()=>{I(!0)},k=()=>{I(!1)},L="feed_card_video"===y?354:315,M=(0,c.zn)(y),E=M?a.f8:a.hm,Z=M?a.sH:a.HI,D=!M,{color:B,fontSize:U,fontStyle:H,fontWeight:N,horizontalAlignment:O}=(0,c.Mf)(f||{},"web"),{button_background_color:R,button_text_color:W}=t||{};return(0,u.jsxs)(d.xu,{position:"relative",ref:A,children:[(0,u.jsx)(d.xu,{onMouseEnter:C,onMouseLeave:k,children:(0,u.jsxs)(d.rU,{accessibilityLabel:v,href:e,onClick:S,onFocus:C,onBlur:k,target:x?"blank":null,underline:"none",children:[(0,u.jsxs)(d.xu,{position:"relative",dangerouslySetInlineStyle:{__style:{WebkitMaskImage:"-webkit-radial-gradient(white, black)"}},overflow:"hidden",rounding:4,children:[(0,u.jsx)(d.xu,{height:L,width:236,rounding:4,children:"feed_card_video"===y&&b?(0,u.jsx)(h,{titleText:v,videoPin:b,videoPlaceholderImage:j}):_&&(0,u.jsx)(d.Ee,{alt:p||"",color:"rgb(111, 91, 77)",naturalHeight:4,naturalWidth:3,src:_,fit:"cover"})}),D&&(0,u.jsx)(d.xu,{height:L,width:236,dangerouslySetInlineStyle:{__style:T?m.hoverOverlay:m.defaultOverlay},position:"absolute",top:!0,left:!0}),(0,u.jsx)(E,{children:(0,u.jsx)(d.xv,{align:O,color:g,italic:"italics"===H,weight:N,children:(0,u.jsx)(d.xu,{dangerouslySetInlineStyle:{__style:{color:null!=B?B:void 0,fontSize:U}},children:v})})})]}),!s&&M&&(0,u.jsx)(Z,{children:(0,u.jsx)(d.xu,{display:"flex",rounding:"pill",color:"default",dangerouslySetInlineStyle:{__style:{backgroundColor:R}},justifyContent:"center",alignItems:"center",paddingX:2,height:48,children:(0,u.jsx)(d.xv,{weight:"bold",children:(0,u.jsx)(d.xu,{dangerouslySetInlineStyle:{__style:{color:W}},children:i})})})})]})}),!M&&(0,u.jsx)(Z,{children:(0,u.jsx)(d.zx,{role:"link",accessibilityLabel:i,color:"gray",fullWidth:!0,href:e,onClick:S,size:"lg",text:i})})]})}},869091:(e,t,i)=>{i.d(t,{Z:()=>I});var n=i(249647),o=i(557115),l=i(883119),s=i(366428),r=i(785893);function a({slotIndex:e,story:t}){var i;const n=(0,s.Z)({componentType:14268,contextLogData:t.aux_fields,impressionType:"Story",loggingId:t.id,slotIndex:e,viewParameter:92,viewType:1});return(0,r.jsx)(l.xu,{ref:n,children:(0,r.jsx)(o.Z,{isInViewOrNext:!0,item:null===(i=t.objects)||void 0===i?void 0:i[0],slotIndex:e,story:t})})}function c({slotIndex:e,story:t}){var i,n;const a=(0,s.Z)({componentType:14269,contextLogData:t.aux_fields,impressionType:"Story",loggingId:t.id,slotIndex:e,viewParameter:92,viewType:1});return(0,r.jsxs)(l.xu,{ref:a,marginBottom:6,children:[(0,r.jsx)(l.xv,{size:"500",weight:"bold",align:"center",children:null===(i=t.title)||void 0===i?void 0:i.format}),null===(n=t.objects)||void 0===n?void 0:n.map(((e,i)=>(0,r.jsx)(l.xu,{marginTop:4,children:(0,r.jsx)(o.Z,{component:14269,isInViewOrNext:!0,item:e,slotIndex:i,story:t,view:1,viewParameter:null})},i)))]})}var d=i(667294),u=i(702664),p=i(407043),_=i(276775),m=i(332611);function h({experienceId:e,copy:{buttonText:t,subtitleText:i,titleText:n},path:o,pins:s,placementId:a}){const{logContextEvent:c}=(0,p.v)(),h=(0,u.useDispatch)(),x=(0,_.useHistory)();(0,d.useEffect)((()=>{c({event_type:13,view_type:1,view_parameter:92,component:200,element:10551}),h((0,m.UT)(a,e,!1,!0))}),[]);return(0,r.jsxs)(l.kC,{alignItems:"stretch",direction:"column",flex:"grow",justifyContent:"start",children:[(0,r.jsx)(l.xu,{paddingY:1,children:(0,r.jsx)(l.X6,{align:"center",size:"400",children:n})}),(0,r.jsx)(l.xu,{paddingY:1,children:(0,r.jsx)(l.xv,{align:"center",children:i})}),(0,r.jsx)(l.xu,{alignItems:"center",display:"flex",justifyContent:"center",marginTop:1,paddingY:2,children:s&&s.map(((e,t)=>((e,t)=>{const{height:i,url:n,width:o}=e.images.orig,s=0===t?0:2;return(0,r.jsx)(l.xu,{marginStart:s,children:(0,r.jsx)(l.zd,{height:72,rounding:2,width:48,children:(0,r.jsx)(l.Ee,{alt:"",color:"",fit:"cover",naturalHeight:i,naturalWidth:o,src:n})})},e.id)})(e,t)))}),(0,r.jsx)(l.xu,{alignSelf:"center",paddingY:2,children:(0,r.jsx)(l.zx,{fullWidth:!0,onClick:()=>{h((0,m.CK)(a,e,!1,!0)),c({event_type:101,view_type:1,view_parameter:92,component:200,element:10551}),x.push(o)},size:"lg",text:t})})]})}var x=i(70061),y=i(543972),g=i(934523),v=i(773285);const f=424,b=236;function j({buttonAction:e,buttonText:t,imageAlt:i,imageHeight:n,imageWidth:o,imageUrl:a,slotIndex:c,storyAuxData:u,storyId:_,subtitle:m,titleText:h}){const[x,j]=(0,d.useState)(!1),{checkExperiment:T}=(0,v.F)(),{logContextEvent:I}=(0,p.v)(),w=(0,s.Z)({componentType:14103,contextLogData:u,impressionType:"Story",loggingId:_,slotIndex:c,viewParameter:92,viewType:1}),{group:P}=T("hfp_homefeed_web_topic_module",{dangerouslySkipActivation:!0}),z=P.includes("pill"),A=P.includes("zoom"),S=(0,d.useRef)(null),C=(0,d.useRef)(null);(0,d.useEffect)((()=>{const e=()=>{if(x&&C.current&&S.current){const e=window.innerHeight-g.cI-f,t=(e-(C.current.getBoundingClientRect().top-80))/e,i=.3,n=Math.min(t*i+1,1.3);S.current.style.transform=`scale(${n})`}};if(A)return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[x,A]);const k=e=>{I({event_type:101,view_type:1,view_parameter:92,component:14103,element:e,aux_data:u})},L=({event:e})=>{e.stopPropagation(),k(179)},M=()=>k();return(0,r.jsx)(y.Z,{options:{threshold:[1]},onVisibilityChange:e=>{if(e&&e.length>0){const{intersectionRatio:t}=e[0];j(t>=1)}},children:s=>(0,r.jsx)(l.xu,{ref:w,dangerouslySetInlineStyle:{__style:{paddingBottom:"16px"}},children:(0,r.jsx)(l.iP,{href:e,onTap:M,role:"link",children:(0,r.jsx)(l.xu,{height:f,ref:s,width:b,children:a&&(0,r.jsxs)(l.xu,{position:"relative",children:[(0,r.jsx)(l.xu,{height:f,width:b,ref:C,overflow:"hidden",dangerouslySetInlineStyle:{__style:{borderRadius:z?"200px":"16px"}},children:(0,r.jsx)(l.xu,{height:f,width:b,ref:S,dangerouslySetInlineStyle:{__style:{transition:"transform ease-in-out .1s"}},children:(0,r.jsx)(l.Ee,{alt:i||"",fit:"cover",naturalHeight:n||f,naturalWidth:o||b,src:a})})}),(0,r.jsx)(l.xu,{position:"absolute",right:!0,left:!0,top:!0,bottom:!0,color:"inverse",rounding:4,opacity:.5,dangerouslySetInlineStyle:{__style:{borderRadius:z?"200px":"16px"}}}),(0,r.jsxs)(l.xu,{display:"flex",direction:"column",alignItems:"center",justifyContent:"end",position:"absolute",right:!0,left:!0,top:!0,bottom:!0,paddingY:z?10:8,paddingX:4,children:[(0,r.jsx)(l.X6,{align:"center",color:"inverse",size:"500",children:h}),(0,r.jsx)(l.xu,{marginTop:z?2:1,children:(0,r.jsx)(l.xv,{align:"center",color:"inverse",size:"200",children:m})}),(0,r.jsx)(l.xu,{marginTop:z?4:6,children:(0,r.jsx)(l.zx,{color:"white",href:e,size:"lg",onClick:L,role:"link",text:t})})]})]})})})})})}var T=i(163745);function I(e){const{itemIdx:t,story:i}=e;if("blended_modules_topic_pin_grid_article"===i.story_type){const e=i,{action:n,custom_properties:o,subtitle:l,title:s}=e;return(0,r.jsx)("div",{className:"Module",children:(0,r.jsx)(j,{buttonAction:n.url,buttonText:n.text,imageAlt:o.image_alt,imageUrl:o.image,imageHeight:o.height,imageWidth:o.width,slotIndex:t,storyAuxData:e.aux_fields,storyId:e.id,subtitle:l.format,titleText:s.format})})}switch(i.container_type){case 41:const e=i,{copy:o,custom_properties:l,experience:s,objects:d}=e;return(0,r.jsx)("div",{className:"Module",children:(0,r.jsx)(h,{copy:(0,n.Z)(x.Z)(o),experienceId:s.experience_id,path:l.path,pins:d,placementId:s.placement_id})});case 66:const u=i,{action:p,custom_properties:_,display_options:m,experience:y,story_type:g,title:v}=u;return(0,r.jsx)("div",{className:"Module",children:(0,r.jsx)(T.Z,{buttonAction:p.url,buttonCustomization:_.button_customization,buttonText:p.text,experience:y,hideCompleteButton:_.hide_complete_button,imageAlt:_.image_alt,imageUrl:_.image,openNewTab:_.open_new_tab,storyType:g,titleColor:T.e[m.title_text_color],titleText:v.format,titleTextCustomization:_.title_text_customization,videoPin:_.video_pin,videoPlaceholderImage:_.video_placeholder_image})});case 135:return(0,r.jsx)("div",{className:"Module",children:(0,r.jsx)(c,{slotIndex:t,story:i})});case 136:return(0,r.jsx)("div",{className:"Module",children:(0,r.jsx)(a,{slotIndex:t,story:i})});default:return null}}},375151:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(121151),o=i(898781),l=i(883119),s=i(785893);function r(e){const t=(0,o.ZP)(),{handleComplete:i,handleDismiss:r}=e,a=(0,s.jsxs)(l.xu,{flex:"grow",position:"relative",display:"flex",direction:"column",width:"100%",children:[(0,s.jsx)(l.xu,{marginBottom:-12,children:(0,s.jsx)(l.Ee,{alt:t._('Stylized Pin grid image', 'helpUpsellModal.headerImage.altText', 'Alt text for Pin grid image in help upsell modal'),naturalHeight:232,naturalWidth:804,src:"https://s.pinimg.com/help_upsell_modal_header.png"})}),(0,s.jsxs)(l.xu,{marginTop:-12,children:[(0,s.jsx)(l.kC,{alignItems:"stretch",justifyContent:"center",children:(0,s.jsx)(l.JO,{accessibilityLabel:t._('Pinterest logo icon', 'helpUpsellModal.pinterestIcon', 'Accessibility label for Pinterest logo icon'),color:"brandPrimary",icon:"pinterest",size:48})}),(0,s.jsx)(l.kC,{alignItems:"stretch",justifyContent:"center",children:(0,s.jsxs)(l.xu,{maxWidth:522,children:[(0,s.jsx)(l.xu,{display:"flex",justifyContent:"center",paddingX:12,paddingY:4,children:(0,s.jsx)(l.X6,{align:"center",size:"600",children:t._('Learn how to make Pinterest work for you', 'helpUpsellModal.heading', 'Heading for modal to upsell help guides (subheading is "Check out our guide to the basics of saving Pins, sharing ideas and customizing your home feed.")')})}),(0,s.jsx)(l.xu,{paddingX:12,children:(0,s.jsx)(l.X6,{align:"center",size:"400",children:t._('Check out our guide to the basics of saving Pins, sharing ideas and customizing your home feed.', 'helpUpsellModal.subHeading', 'Subheading for modal to upsell help guides (heading is "Learn how to make Pinterest work for you")')})}),(0,s.jsxs)(l.xu,{display:"flex",direction:"row",justifyContent:"center",marginBottom:4,paddingY:12,children:[(0,s.jsx)(l.xu,{display:"flex",direction:"row",paddingX:1,children:(0,s.jsx)(l.zx,{accessibilityLabel:t._('Dismiss modal', 'helpUpsellModal.dismissButton.accessibilityLabel', 'Accessibility label for help upsell modal dismiss button'),onClick:r,size:"lg",text:t._('Maybe later', 'helpUpsellModal.dismissButton.buttonText', 'Accessibility label for help upsell modal confirm button')})}),(0,s.jsx)(l.xu,{display:"flex",direction:"row",paddingX:1,children:(0,s.jsx)(l.zx,{role:"link",href:"/welcome/",accessibilityLabel:t._('Continue to new user welcome guides', 'helpUpsellModal.confirmButton.accessibilityLabel', 'Accessibility label for help upsell modal confirm button'),color:"red",onClick:i,size:"lg",text:t._('Let\'s go', 'helpUpsellModal.confirmButton.buttonText', 'Confirm button for Chrome PWA upsell modal')})})]})]})})]})]});return(0,s.jsx)(n.ZP,{accessibilityModalLabel:t._('Learn how to make Pinterest work for you', 'helpUpsellModal.accessibilityModalLabel', 'Accessible label for help upsell modal'),heading:a,onDismiss:r,size:"lg"})}},81636:(e,t,i)=>{i.d(t,{Q:()=>c,Z:()=>d});var n=i(667294),o=i(682492),l=i.n(o),s=i(112690),r=i(780280),a=i(385740);function c(e,t){const{setViewContextData:i}=(0,a.sV)(),{requestIdentifier:o}=(0,r.B)(),c=(0,s.Z)(),{viewData:d}=(0,a.SU)();(0,n.useEffect)((()=>{var t;e&&(i({viewType:null!==(t=e.view_type)&&void 0!==t?t:1,viewParameter:e.view_parameter,viewData:e.view_data?l()(d,e.view_data):l()({},d),component:e.component,element:e.element,objectIdStr:e.object_id_str,auxData:e.aux_data,clientTrackingParams:e.clientTrackingParams}),c({...e,event_type:13,request_identifier:o}))}),[t])}function d(e){const{children:t,log:i}=e;return c(i),t||null}},131108:(e,t,i)=>{i.d(t,{HI:()=>s,f8:()=>a,hm:()=>r,sH:()=>l});var n=i(883119),o=i(785893);const l=({children:e})=>(0,o.jsx)(n.xu,{padding:4,position:"absolute",bottom:!0,left:!0,right:!0,children:e}),s=({children:e})=>(0,o.jsx)(n.xu,{padding:2,children:e}),r=({children:e})=>(0,o.jsx)(n.xu,{display:"flex",position:"absolute",top:!0,height:"100%",width:"100%",alignItems:"center",justifyContent:"center",children:e}),a=({children:e})=>(0,o.jsx)(n.xu,{padding:4,position:"absolute",top:!0,left:!0,right:!0,children:e})},599997:(e,t,i)=>{i.d(t,{Mf:()=>c,q4:()=>o,zn:()=>n});const n=e=>["feed_card_default","feed_card_video"].includes(e),o=2/3,l={0:"start",1:"center",2:"end"},s={web:{0:"16",1:"20",2:"24"},mweb:{0:"12",1:"16",2:"18"}},r={1:"italics",0:"normal"},a={1:"bold",0:"normal"},c=({color:e,font_style:t,font_weight:i,horizontal_alignment:n,size:o},c)=>({color:e,fontStyle:r[null!=t?t:0],fontWeight:a[null!=i?i:1],horizontalAlignment:l[null!=n?n:0],fontSize:s[c][null!=o?o:0]+"px"})},366428:(e,t,i)=>{i.d(t,{F:()=>u,Z:()=>d});var n=i(667294),o=i(983722),l=i(834911),s=i(124580),r=i(407043),a=i(802201);const c={ActivationCard:{impressionType:"activationCardImpressions",idType:"experienceIdStr",eventType:8547},Article:{impressionType:"articleImpressions",idType:"articleIdStr",eventType:3829},Banner:{impressionType:"bannerImpressions",idType:"userIdStr",eventType:9061},Board:{impressionType:"boardImpressions",idType:"boardIdStr",eventType:3700},Comment:{impressionType:"commentImpressions",idType:"commentIdStr",eventType:9127},Guide:{impressionType:"guideImpressions",idType:"term",eventType:7573},Interest:{impressionType:"topicImpressions",idType:"topicIdStr",eventType:3703},News:{impressionType:"newsHubData",idType:"newsIdStr",eventType:4110},OneBar:{impressionType:"oneBarImpressions",idType:"onebarIdStr",eventType:9993},Pin:{impressionType:"pinImpressions",idType:"pinIdStr",eventType:18},Search:{impressionType:"searchImpressions",idType:"term",eventType:3803},Story:{impressionType:"storyImpressions",idType:"storyIdStr",eventType:170},TodayArticle:{impressionType:"todayArticleImpressions",idType:"todayArticleIdStr",eventType:8569},User:{impressionType:"userImpressions",idType:"userIdStr",eventType:3704}};function d({closeupImpressionType:e,closeupNavigationType:t,componentType:i,contextLogData:d,clientTrackingParams:u,elementType:p,impressionAuxFields:_,inImpressionExp:m,impressionType:h,impressionsFramework:x,isPaused:y,loggingId:g,objectIdStr:v,slotIndex:f,trackCarousel:b,viewData:j,viewParameter:T,viewType:I}){const{logContextEvent:w}=(0,r.v)(),P=(0,a.AF)(),z=g?P[g]:{},A=z&&(0,l.Z)({carouselData:z.carousel_data,images:z.images,richMetadata:z.rich_metadata,richSummary:z.rich_summary}),S=x||s.Z,C=(0,n.useRef)(null),k=n=>{const l=c[h],s=l.idType,r={endTime:n.endTime,[s]:g,slotIndex:f,time:n.startTime,renderDuration:n.endTime-n.startTime,type:e,..._,forcedExit:"removed"===n.forcedExit?0:void 0},a={component:i,object_id_str:v,view_type:I,view_data:j||{},view_parameter:T},m=(0,o.Z)(),{checkExperiment:x}=(m||{}).experimentsClient||{},y="function"==typeof x&&x("web_mweb_story_impression_fix").anyEnabled;if(y&&(c.Story={impressionType:"storyImpression",idType:"idStr",eventType:170}),b){if(A){var P,z,S;w({event_type:7352,event_data:{pinCarouselSlotImpressions:[{...r,carouselDataId:Number(A.id),carouselSlotId:(null===(P=A.carousel_slots)||void 0===P?void 0:P[null!==(z=A.index)&&void 0!==z?z:0])&&Number(A.carousel_slots[null!==(S=A.index)&&void 0!==S?S:0].id),slotIndex:A.index}]},...a,aux_data:{...d}})}}else w({clientTrackingParams:u,event_type:l.eventType,...a,element:p,event_data:{[l.impressionType]:"Story"===h&&y?r:[r]},aux_data:{closeup_navigation_type:t,...d}})},L=(0,n.useCallback)((()=>{try{C.current instanceof HTMLElement&&S.start(C.current).onExitViewport(k).setDebugId(g||"unknown")}catch(e){window.console.error('Can only track impressions for type "HTMLElement"')}}),[C.current]);(0,n.useEffect)((()=>(m&&!S.inExperiment&&S.setExperimentStatus(!0),y||L(),()=>{C.current instanceof HTMLElement&&S.stop(C.current)})),[L]);const M=(0,n.useRef)(y);return(0,n.useEffect)((()=>{M.current&&!y&&L(),M.current=y}),[y,L]),C}const u=({children:e,...t})=>e({impressionTrackerRef:d(t)})},80816:(e,t,i)=>{i.d(t,{i:()=>n});const n={REGISTRATION:"registration",SETTINGS:"settings",GOOGLE_PEOPLE_API:"google_people_api",HOLISTIC_PROFILE_PROMPT:"holistic_profile_prompt",IN_APP_BIRTHDAY_PROMPT:"in_app_birthday_prompt",FIX_EMAIL_PROMPT:"fix_email_prompt",NUX:"nux",UNKNOWN:"unknown"}},6663:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(667294),o=i(701500),l=i(391254),s=i(898781),r=i(883119),a=i(785893);function c({color:e,completeButtonText:t,completeUrl:i,dismissButtonText:c,experienceId:d,external:u,message:p,onComplete:_,onDismiss:m}){const h=(0,s.ZP)(),x=(0,n.useRef)(null),y=({event:e})=>{_&&_(e)},g=({event:e})=>{m&&m(e)},v=p&&!t,f=500735===d,b=t&&(!i||f)&&(0,a.jsx)(r.zx,{color:"white",onClick:y,text:t}),j=t&&i&&(0,a.jsx)(o.Z,{anchor:".HomeButton2",anchorElementRef:x.current,containerBoxConfig:{display:"flex",height:"100%"},children:(0,a.jsx)(r.zx,{accessibilityLabel:t,ref:x,role:"link",href:i,onClick:({event:e})=>y({event:e}),rel:u?"nofollow":"none",size:"md",color:"white",text:t},"naglink")}),T=c&&m&&(0,a.jsx)(r.xu,{mdPaddingX:2,children:(0,a.jsx)(r.zx,{color:e&&"default"!==e?"white":"gray",onClick:g,text:c})}),I=v&&!f&&m&&!c&&(0,a.jsx)(r.hU,{accessibilityLabel:h._('Close', 'accessibility close label', 'accessibility close label'),bgColor:"lightGray",onClick:g,icon:"cancel",iconColor:"gray",size:"md"});return(0,a.jsxs)(r.xu,{display:"flex",direction:"column",smDirection:"row",color:null!=e?e:"dark",paddingY:3,paddingX:6,alignItems:"center",justifyContent:"between",children:[(0,a.jsx)(r.xu,{column:12,smColumn:v?11:8,children:(0,a.jsxs)(r.xv,{color:"inverse",weight:f?"normal":"bold",children:[(0,a.jsx)(l.Z,{unsafeCSS:".Banner--message a { color: #fff; text-decoration: underline; }"}),(0,a.jsx)("div",{className:"Banner--message",children:(0,a.jsx)("span",{dangerouslySetInnerHTML:{__html:p}})})]})}),(0,a.jsxs)(r.kC,{alignItems:"center",justifyContent:"end",children:[T,b||j,I]})]})}},477802:(e,t,i)=>{i.d(t,{W:()=>s,Z:()=>l});var n=i(883119),o=i(785893);function l({data:e}){return(0,o.jsx)(n.xu,{overflow:"auto",dangerouslySetInlineStyle:{__style:{border:"2px solid red"}},"data-test-id":"debug-info",children:(0,o.jsx)("pre",{children:JSON.stringify(e,null,2).replace(/\\n/g,"\n")})})}const s=e=>(0,o.jsx)(n.xu,{width:236,dangerouslySetInlineStyle:{__style:{marginTop:10}},children:(0,o.jsx)(l,{...e})})},52395:(e,t,i)=>{i.d(t,{Z:()=>l});var n=i(883119),o=i(785893);function l({text:e}){return(0,o.jsx)(n.xu,{display:"visuallyHidden",children:(0,o.jsx)(n.X6,{accessibilityLevel:1,children:e})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/8421-2f58236298200d18.mjs.map
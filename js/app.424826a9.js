(function(){"use strict";var e={6019:function(e,a,l){var t=l(5130),n=l(1387),o=l(6768),i=l(4232);const s={class:"container"},d={class:"d-flex justify-center mb-7"},r={key:0,class:"d-flex justify-center mt-10",style:{gap:"10px"}},m={key:1,class:"d-flex justify-center mt-10",style:{gap:"10px"}},u={key:2,class:"d-flex justify-center text-h2"},p={key:3,class:"d-flex justify-center mt-10",style:{gap:"10px"}},c={key:4,class:"d-flex justify-center text-h2"};function v(e,a,l,t,n,v){const g=(0,o.g2)("v-btn"),y=(0,o.g2)("Player"),b=(0,o.g2)("Group"),f=(0,o.g2)("Knockout"),h=(0,o.g2)("Results");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",s,[(0,o.Lk)("div",d,[(0,o.bF)(g,{color:"primary",size:"large",onClick:v.roll},{default:(0,o.k6)((()=>a[0]||(a[0]=[(0,o.eW)(" Roll ")]))),_:1},8,["onClick"])]),(0,o.Lk)("div",{class:(0,i.C4)(e.$vuetify.display.mobile?"d-flex flex-column justify-center align-center mt-10":"d-flex justify-center align-center")},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.players,(e=>((0,o.uX)(),(0,o.Wv)(y,{player:e,key:e.name},null,8,["player"])))),128))],2),((0,o.uX)(),(0,o.Wv)(y,{player:n.lastTeam,key:n.lastTeam.name,lastTeam:!0},null,8,["player"]))]),v.allTeams.length>0?((0,o.uX)(),(0,o.CE)("div",r,[(0,o.bF)(b,{teams:v.allTeams,groupName:"A",addGoalsScored:v.addGoalsScored},null,8,["teams","addGoalsScored"]),(0,o.bF)(b,{teams:v.allTeams,groupName:"B",addGoalsScored:v.addGoalsScored},null,8,["teams","addGoalsScored"])])):(0,o.Q3)("",!0),v.allTeams.length>0?((0,o.uX)(),(0,o.CE)("div",m,[(0,o.bF)(b,{teams:v.allTeams,groupName:"C",addGoalsScored:v.addGoalsScored},null,8,["teams","addGoalsScored"]),(0,o.bF)(b,{teams:v.allTeams,groupName:"D",addGoalsScored:v.addGoalsScored},null,8,["teams","addGoalsScored"])])):(0,o.Q3)("",!0),v.allTeams.length>0?((0,o.uX)(),(0,o.CE)("div",u," PUCHAR ")):(0,o.Q3)("",!0),v.allTeams.length>0?((0,o.uX)(),(0,o.CE)("div",p,[(0,o.bF)(f,{teams:v.allTeams,addGoalsScored:v.addGoalsScored},null,8,["teams","addGoalsScored"])])):(0,o.Q3)("",!0),v.allTeams.length>0?((0,o.uX)(),(0,o.CE)("div",c,[(0,o.bF)(h,{players:n.players,lastTeam:n.lastTeam},null,8,["players","lastTeam"])])):(0,o.Q3)("",!0)],64)}l(4114),l(8992),l(2577),l(3949),l(1454),l(8872);const g={class:"d-flex flex-column justify-center align-center mt-3 mb-3"};function y(e,a,l,t,n,s){const d=(0,o.g2)("v-card-title"),r=(0,o.g2)("flag"),m=(0,o.g2)("v-rating"),u=(0,o.g2)("v-list-item-title"),p=(0,o.g2)("v-list-item"),c=(0,o.g2)("v-list"),v=(0,o.g2)("v-card-text"),y=(0,o.g2)("v-card"),b=(0,o.g2)("v-btn");return(0,o.uX)(),(0,o.CE)("div",g,[(0,o.bF)(y,{width:"300",class:"ma-2"},{default:(0,o.k6)((()=>[(0,o.bF)(d,null,{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(l.player.name),1)])),_:1}),(0,o.bF)(v,null,{default:(0,o.k6)((()=>[(0,o.bF)(c,null,{default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(l.player.teams,((e,a)=>((0,o.uX)(),(0,o.Wv)(p,{key:e.name},{default:(0,o.k6)((()=>[(0,o.Lk)("div",{style:(0,i.Tr)(n.displayed[a]?"opacity: 1":"opacity: 0"),class:"list-item"},[(0,o.bF)(u,{class:"font-weight-bold d-flex justify-space-between align-center"},{default:(0,o.k6)((()=>[(0,o.bF)(r,{iso:e.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.name)+" ",1),(0,o.bF)(m,{modelValue:e.rating,"onUpdate:modelValue":a=>e.rating=a,"half-increments":"",readonly:"",color:"amber",size:"21"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)],4)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1}),(0,o.bF)(b,{disabled:l.player.teams.length<n.displayTurn,color:"primary",onClick:s.next,width:"300"},{default:(0,o.k6)((()=>a[0]||(a[0]=[(0,o.eW)(" Next ")]))),_:1},8,["disabled","onClick"])])}var b={props:{player:{type:Object,required:!0,lastTeam:{type:Boolean,default:!1,required:!1}}},data(){return{displayed:{1:!1,2:!1,3:!1,4:!1,5:!1},displayTurn:0}},methods:{next(){this.displayTurn>5||(this.displayed[this.displayTurn]=!0,this.displayTurn++)}},watch:{player:{handler(){this.displayed={1:!1,2:!1,3:!1,4:!1,5:!1},this.displayTurn=0},deep:!0}}},f=l(1241);const h=(0,f.A)(b,[["render",y]]);var x=h;const k={class:"d-flex flex-column align-center",style:{gap:"10px",width:"800px",height:"600px"}},F={class:"text-h4"},_={class:"d-flex align-center",style:{gap:"10px",width:"800px",height:"100px"}},w={class:"d-flex align-center",style:{gap:"10px"}},G={key:0,class:"d-flex flex-column align-center",style:{gap:"10px",width:"600px"}};function S(e,a,l,t,n,s){const d=(0,o.g2)("flag"),r=(0,o.g2)("v-list-item"),m=(0,o.g2)("v-select"),u=(0,o.g2)("Match");return(0,o.uX)(),(0,o.CE)("div",k,[(0,o.Lk)("div",null,[(0,o.Lk)("h1",F,"GRUPA "+(0,i.v_)(l.groupName),1)]),(0,o.Lk)("div",_,[((0,o.uX)(),(0,o.CE)(o.FK,null,(0,o.pI)([1,2,3,4],(e=>(0,o.bF)(m,{key:e,label:`Drużyna ${e}`,items:l.teams,variant:"outlined","return-object":"","onUpdate:modelValue":a=>s.changeTeam(a,e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",w,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)({ref_for:!0},a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:2},1032,["label","items","onUpdate:modelValue"]))),64))]),n.team1&&n.team2&&n.team3&&n.team4?((0,o.uX)(),(0,o.CE)("div",G,[(0,o.bF)(u,{team1:n.team1,team2:n.team2,addGoalsScored:l.addGoalsScored},null,8,["team1","team2","addGoalsScored"]),(0,o.bF)(u,{team1:n.team1,team2:n.team3,addGoalsScored:l.addGoalsScored},null,8,["team1","team2","addGoalsScored"]),(0,o.bF)(u,{team1:n.team1,team2:n.team4,addGoalsScored:l.addGoalsScored},null,8,["team1","team2","addGoalsScored"]),(0,o.bF)(u,{team1:n.team2,team2:n.team3,addGoalsScored:l.addGoalsScored},null,8,["team1","team2","addGoalsScored"]),(0,o.bF)(u,{team1:n.team2,team2:n.team4,addGoalsScored:l.addGoalsScored},null,8,["team1","team2","addGoalsScored"]),(0,o.bF)(u,{team1:n.team3,team2:n.team4,addGoalsScored:l.addGoalsScored},null,8,["team1","team2","addGoalsScored"])])):(0,o.Q3)("",!0)])}const V={class:"d-flex align-center",style:{gap:"10px",width:"600px"}},W={style:{width:"90px"}},L={style:{width:"90px",display:"flex","justify-content":"end"}};function j(e,a,l,t,n,s){const d=(0,o.g2)("flag"),r=(0,o.g2)("v-text-field");return(0,o.uX)(),(0,o.CE)("div",V,[(0,o.bF)(d,{iso:l.team1.icon},null,8,["iso"]),(0,o.Lk)("span",W,(0,i.v_)(l.team1.name),1),(0,o.bF)(r,{label:"Gole",variant:"outlined","hide-details":"",style:{width:"1px"},type:"number","onUpdate:modelValue":a[0]||(a[0]=e=>l.addGoalsScored(e,l.team1.name))}),a[2]||(a[2]=(0,o.Lk)("span",{class:"text-h3"},(0,i.v_)(":"),-1)),(0,o.bF)(r,{label:"Gole",variant:"outlined","hide-details":"",style:{width:"1px"},type:"number","onUpdate:modelValue":a[1]||(a[1]=e=>l.addGoalsScored(e,l.team2.name))}),(0,o.Lk)("span",L,(0,i.v_)(l.team2.name),1),(0,o.bF)(d,{iso:l.team2.icon},null,8,["iso"])])}var T={name:"Match",props:{team1:{type:Object,required:!0},team2:{type:Object,required:!0},addGoalsScored:{type:Function,required:!0}}};const U=(0,f.A)(T,[["render",j]]);var X=U,C={name:"Group",components:{Match:X},data(){return{team1:null,team2:null,team3:null,team4:null}},props:{teams:{type:Array,required:!0},groupName:{type:String},addGoalsScored:{type:Function,required:!0}},methods:{changeTeam(e,a){console.log(e,a),1===a?this.team1=e:2===a?this.team2=e:3===a?this.team3=e:4===a&&(this.team4=e)}}};const E=(0,f.A)(C,[["render",S]]);var P=E;const A={class:"d-flex align-center",style:{gap:"10px","margin-bottom":"200px"}},O={class:"d-flex flex-column align-center",style:{gap:"10px",width:"270px",margin:"0 20px"}},D={class:"d-flex align-center",style:{gap:"10px"}},I={class:"d-flex align-center",style:{gap:"10px"}},M={class:"d-flex align-center",style:{gap:"10px"}},N={class:"d-flex align-center",style:{gap:"10px"}},q={class:"d-flex align-center",style:{gap:"10px"}},z={class:"d-flex align-center",style:{gap:"10px"}},K={class:"d-flex align-center",style:{gap:"10px"}},R={class:"d-flex align-center",style:{gap:"10px"}},Q={class:"d-flex flex-column align-center",style:{gap:"80px",width:"270px",margin:"0 20px"}},H={class:"d-flex align-center",style:{gap:"10px"}},$={class:"d-flex align-center",style:{gap:"10px"}},B={class:"d-flex align-center",style:{gap:"10px"}},Z={class:"d-flex align-center",style:{gap:"10px"}},J={class:"d-flex align-center",style:{gap:"10px"}},Y={class:"d-flex align-center",style:{gap:"10px"}},ee={class:"d-flex align-center",style:{gap:"10px"}},ae={class:"d-flex align-center",style:{gap:"10px"}},le={class:"d-flex flex-column align-center",style:{gap:"80px",width:"270px",margin:"0 20px"}},te={class:"d-flex align-center",style:{gap:"10px"}},ne={class:"d-flex align-center",style:{gap:"10px"}},oe={class:"d-flex align-center",style:{gap:"10px"}},ie={class:"d-flex align-center",style:{gap:"10px"}},se={class:"d-flex flex-column align-center",style:{gap:"10px",width:"270px",margin:"0 20px"}},de={class:"d-flex align-center",style:{gap:"10px"}},re={class:"d-flex align-center",style:{gap:"10px"}},me={class:"d-flex align-center",style:{gap:"10px"}},ue={class:"d-flex align-center",style:{gap:"10px"}},pe={class:"d-flex align-center",style:{gap:"10px"}},ce={class:"d-flex align-center",style:{gap:"10px"}},ve={class:"d-flex align-center",style:{gap:"10px"}},ge={class:"d-flex align-center",style:{gap:"10px"}};function ye(e,a,l,t,n,s){const d=(0,o.g2)("flag"),r=(0,o.g2)("v-list-item"),m=(0,o.g2)("v-select"),u=(0,o.g2)("v-text-field");return(0,o.uX)(),(0,o.CE)("div",A,[(0,o.Lk)("div",O,[(0,o.Lk)("div",D,[(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team1,"onUpdate:modelValue":a[0]||(a[0]=e=>n.team1=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",I,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"]),(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[1]||(a[1]=e=>l.addGoalsScored(e,n.team1.name))})]),(0,o.Lk)("div",M,[(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team2,"onUpdate:modelValue":a[2]||(a[2]=e=>n.team2=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",N,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"]),(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[3]||(a[3]=e=>l.addGoalsScored(e,n.team2.name))})]),(0,o.Lk)("div",q,[(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team3,"onUpdate:modelValue":a[4]||(a[4]=e=>n.team3=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",z,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"]),(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[5]||(a[5]=e=>l.addGoalsScored(e,n.team3.name))})]),(0,o.Lk)("div",K,[(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team4,"onUpdate:modelValue":a[6]||(a[6]=e=>n.team4=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",R,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"]),(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[7]||(a[7]=e=>l.addGoalsScored(e,n.team4.name))})])]),(0,o.Lk)("div",Q,[(0,o.Lk)("div",H,[(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team5,"onUpdate:modelValue":a[8]||(a[8]=e=>n.team5=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",$,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"]),(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[9]||(a[9]=e=>l.addGoalsScored(e,n.team5.name))})]),(0,o.Lk)("div",B,[(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team6,"onUpdate:modelValue":a[10]||(a[10]=e=>n.team6=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",Z,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"]),(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[11]||(a[11]=e=>l.addGoalsScored(e,n.team6.name))})])]),(0,o.Lk)("div",null,[(0,o.Lk)("div",J,[(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team7,"onUpdate:modelValue":a[12]||(a[12]=e=>n.team7=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",Y,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"]),(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[13]||(a[13]=e=>l.addGoalsScored(e,n.team7.name))})])]),(0,o.Lk)("div",null,[(0,o.Lk)("div",ee,[(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[14]||(a[14]=e=>l.addGoalsScored(e,n.team8.name))}),(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team8,"onUpdate:modelValue":a[15]||(a[15]=e=>n.team8=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",ae,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"])])]),(0,o.Lk)("div",le,[(0,o.Lk)("div",te,[(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[16]||(a[16]=e=>l.addGoalsScored(e,n.team9.name))}),(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team9,"onUpdate:modelValue":a[17]||(a[17]=e=>n.team9=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",ne,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"])]),(0,o.Lk)("div",oe,[(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[18]||(a[18]=e=>l.addGoalsScored(e,n.team10.name))}),(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team10,"onUpdate:modelValue":a[19]||(a[19]=e=>n.team10=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",ie,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"])])]),(0,o.Lk)("div",se,[(0,o.Lk)("div",de,[(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[20]||(a[20]=e=>l.addGoalsScored(e,n.team11.name))}),(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team11,"onUpdate:modelValue":a[21]||(a[21]=e=>n.team11=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",re,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"])]),(0,o.Lk)("div",me,[(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[22]||(a[22]=e=>l.addGoalsScored(e,n.team12.name))}),(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team12,"onUpdate:modelValue":a[23]||(a[23]=e=>n.team12=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",ue,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"])]),(0,o.Lk)("div",pe,[(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[24]||(a[24]=e=>l.addGoalsScored(e,n.team13.name))}),(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team13,"onUpdate:modelValue":a[25]||(a[25]=e=>n.team13=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",ce,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"])]),(0,o.Lk)("div",ve,[(0,o.bF)(u,{label:"Gole",variant:"outlined","hide-details":"",type:"number",style:{width:"70px"},"onUpdate:modelValue":a[26]||(a[26]=e=>l.addGoalsScored(e,n.team14.name))}),(0,o.bF)(m,{label:"Drużyna",items:l.teams,variant:"outlined","return-object":"",modelValue:n.team14,"onUpdate:modelValue":a[27]||(a[27]=e=>n.team14=e),"hide-details":"",width:"200"},{selection:(0,o.k6)((({item:e})=>[(0,o.Lk)("div",ge,[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])])),item:(0,o.k6)((({item:e,props:a})=>[((0,o.uX)(),(0,o.Wv)(r,(0,o.v6)(a,{title:"",key:e.props.value.name}),{default:(0,o.k6)((()=>[(0,o.bF)(d,{iso:e.props.value.icon},null,8,["iso"]),(0,o.eW)(" "+(0,i.v_)(e.props.value.name),1)])),_:2},1040))])),_:1},8,["items","modelValue"])])])])}var be={name:"Knockout",data(){return{team1:null,team2:null,team3:null,team4:null,team5:null,team6:null,team7:null,team8:null,team9:null,team10:null,team11:null,team12:null,team13:null,team14:null}},props:{teams:{type:Array,required:!0},addGoalsScored:{type:Function,required:!0}}};const fe=(0,f.A)(be,[["render",ye]]);var he=fe;const xe={class:"d-flex flex-column align-center",style:{gap:"10px",width:"600px"}},ke={class:"mx-3"};function Fe(e,a,l,t,n,s){return(0,o.uX)(),(0,o.CE)("div",xe,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)([...l.players,l.lastTeam],(e=>((0,o.uX)(),(0,o.CE)("div",{key:e.name,class:"d-flex mt-10"},[(0,o.Lk)("div",ke,(0,i.v_)(e.name)+" - "+(0,i.v_)(e.goalsScored),1)])))),128))])}var _e={name:"Results",props:{players:{type:Array,required:!0},lastTeam:{type:Object,required:!0}}};const we=(0,f.A)(_e,[["render",Fe]]);var Ge=we,Se={name:"HomePage",components:{Player:x,Group:P,Knockout:he,Results:Ge},data(){return{players:[{name:"Mieszko",teams:[],goalsScored:0},{name:"Wiktor",teams:[],goalsScored:0},{name:"Maciek",teams:[],goalsScored:0}],lastTeam:{name:"Ostatnia drużyna",teams:[],goalsScored:0}}},computed:{allTeams(){return this.players.reduce(((e,a)=>(e.push(...a.teams),e)),[...this.lastTeam.teams])}},methods:{roll(){this.players.forEach((e=>{e.teams=[]})),this.lastTeam.teams=[];const e=[{name:"Argentina",rating:5,icon:"ar"},{name:"Croatia",rating:4,icon:"hr"},{name:"Czechia",rating:4,icon:"cz"},{name:"Denmark",rating:4,icon:"dk"},{name:"England",rating:5,icon:"gb-eng"},{name:"Finland",rating:3.5,icon:"fi"},{name:"France",rating:5,icon:"fr"},{name:"Germany",rating:5,icon:"de"},{name:"Ghana",rating:4,icon:"gh"},{name:"Hungary",rating:3.5,icon:"hu"},{name:"Iceland",rating:3.5,icon:"is"},{name:"Ireland",rating:3.5,icon:"ie"},{name:"Italy",rating:4.5,icon:"it"},{name:"Mexico",rating:4,icon:"mx"},{name:"Morocco",rating:4,icon:"ma"},{name:"Netherlands",rating:5,icon:"nl"},{name:"New Zealand",rating:2.5,icon:"nz"},{name:"Northern Ireland",rating:3,icon:"gb-nir"},{name:"Norway",rating:4,icon:"no"},{name:"Poland",rating:4,icon:"pl"},{name:"Portugal",rating:5,icon:"pt"},{name:"Qatar",rating:3,icon:"qa"},{name:"Romania",rating:3.5,icon:"ro"},{name:"Scotland",rating:4,icon:"gb-sct"},{name:"Spain",rating:5,icon:"es"},{name:"Sweden",rating:4,icon:"se"},{name:"Ukraine",rating:4,icon:"ua"},{name:"United States",rating:4,icon:"us"},{name:"Wales",rating:3.5,icon:"gb-wls"}];this.players.forEach((a=>{for(let l=0;l<5;l++){const l=Math.floor(Math.random()*e.length);a.teams.push(e[l]),e.splice(l,1)}}));const a=Math.floor(Math.random()*e.length);this.lastTeam.teams.push(e[a]),e.splice(a,1)},addGoalsScored(e,a){const l=this.players.find((e=>e.teams.map((e=>e.name)).includes(a)));l&&(l.goalsScored+=parseInt(e))}},watch:{players:{handler(){console.log(this.allTeams)},deep:!0}}};const Ve=(0,f.A)(Se,[["render",v]]);var We=Ve;const Le={class:"d-flex justify-center align-center h-100 w-100"},je={class:"d-flex justify-center"};function Te(e,a,l,t,n,s){const d=(0,o.g2)("v-img"),r=(0,o.g2)("v-text-field"),m=(0,o.g2)("v-icon"),u=(0,o.g2)("v-btn"),p=(0,o.g2)("v-card-text"),c=(0,o.g2)("v-card");return(0,o.uX)(),(0,o.CE)("div",Le,[(0,o.bF)(c,{width:"350"},{default:(0,o.k6)((()=>[(0,o.bF)(p,null,{default:(0,o.k6)((()=>[(0,o.Lk)("span",je,[(0,o.Lk)("span",null,[(0,o.bF)(d,{src:n.TrophyPhoto,width:"200",class:"mb-6"},null,8,["src"])])]),(0,o.bF)(r,{label:"Username",variant:"outlined",modelValue:n.username,"onUpdate:modelValue":a[0]||(a[0]=e=>n.username=e)},null,8,["modelValue"]),(0,o.bF)(r,{label:"Password",variant:"outlined",type:n.showPassword?"text":"password",modelValue:n.password,"onUpdate:modelValue":a[2]||(a[2]=e=>n.password=e)},{"append-inner":(0,o.k6)((()=>[(0,o.bF)(m,{onClick:a[1]||(a[1]=e=>n.showPassword=!n.showPassword)},{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(n.showPassword?"mdi-eye-off":"mdi-eye"),1)])),_:1})])),_:1},8,["type","modelValue"]),(0,o.bF)(u,{color:"primary",onClick:s.login,loading:n.loading,width:"100%"},{default:(0,o.k6)((()=>a[3]||(a[3]=[(0,o.eW)(" Login ")]))),_:1},8,["onClick","loading"])])),_:1})])),_:1})])}var Ue=l.p+"img/trophy.4ef49de8.png",Xe=l(4084),Ce={name:"LoginPage",data(){return{TrophyPhoto:Ue,username:"",password:"",showPassword:!1,loading:!1}},methods:{login(){this.loading=!0,"3zjby"===this.username&&"karolToGej"===this.password?(localStorage.setItem("user",this.username),setTimeout((()=>{this.$router.push({name:"Home"})}),2e3)):(0,Xe.oR)("Invalid username or password",{type:"error"})}}};const Ee=(0,f.A)(Ce,[["render",Te]]);var Pe=Ee;const Ae=[{name:"Home",path:"/",component:We},{name:"Login",path:"/login",component:Pe}],Oe=(0,n.aE)({history:(0,n.LA)(),routes:Ae});Oe.beforeEach(((e,a,l)=>{console.log(localStorage.getItem("user"),!localStorage.getItem("user")),"Login"===e.name||localStorage.getItem("user")?l():l({name:"Login"})}));var De=Oe,Ie=(l(5524),l(7768)),Me=l(8221),Ne=l(1920),qe=l(5741);function ze(e,a,l,t,n,i){const s=(0,o.g2)("router-view"),d=(0,o.g2)("v-app");return(0,o.uX)(),(0,o.Wv)(d,{class:"page"},{default:(0,o.k6)((()=>[(0,o.bF)(s)])),_:1})}var Ke={name:"App",data:()=>({pageWithoutNav:["Login"]})};const Re=(0,f.A)(Ke,[["render",ze]]);var Qe=Re,He=l(6485);const $e=(0,Ie.$N)({components:Ne,directives:qe,icons:{defaultSet:"mdi",aliases:Me.z,sets:{mdi:Me.r}},theme:{themes:{light:{dark:!1,colors:{primary:"#369653"}}}}});(0,t.Ef)(Qe).use(De).use($e).use(He.A).mount("#app")}},a={};function l(t){var n=a[t];if(void 0!==n)return n.exports;var o=a[t]={exports:{}};return e[t].call(o.exports,o,o.exports,l),o.exports}l.m=e,function(){var e=[];l.O=function(a,t,n,o){if(!t){var i=1/0;for(m=0;m<e.length;m++){t=e[m][0],n=e[m][1],o=e[m][2];for(var s=!0,d=0;d<t.length;d++)(!1&o||i>=o)&&Object.keys(l.O).every((function(e){return l.O[e](t[d])}))?t.splice(d--,1):(s=!1,o<i&&(i=o));if(s){e.splice(m--,1);var r=n();void 0!==r&&(a=r)}}return a}o=o||0;for(var m=e.length;m>0&&e[m-1][2]>o;m--)e[m]=e[m-1];e[m]=[t,n,o]}}(),function(){l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,{a:a}),a}}(),function(){l.d=function(e,a){for(var t in a)l.o(a,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){l.p="/"}(),function(){var e={524:0};l.O.j=function(a){return 0===e[a]};var a=function(a,t){var n,o,i=t[0],s=t[1],d=t[2],r=0;if(i.some((function(a){return 0!==e[a]}))){for(n in s)l.o(s,n)&&(l.m[n]=s[n]);if(d)var m=d(l)}for(a&&a(t);r<i.length;r++)o=i[r],l.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return l.O(m)},t=self["webpackChunkproject"]=self["webpackChunkproject"]||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}();var t=l.O(void 0,[504],(function(){return l(6019)}));t=l.O(t)})();
//# sourceMappingURL=app.424826a9.js.map
(this.webpackJsonpgot_battle=this.webpackJsonpgot_battle||[]).push([[0],{180:function(e,t,a){},181:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),s=(a(92),a(93),a(25)),i=a(26),o=a(33),d=a(34),m=a(14),u=a(44),h=a.n(u),E={baseUrl:"https://battle-got-service.herokuapp.com"},g=a(23),v=a(9),f=a(182),_=function(e){var t=e.details[0];return console.log(t),l.a.createElement("div",{className:"site-card-wrapper"},l.a.createElement(g.a,{gutter:16},l.a.createElement(v.a,{span:12},l.a.createElement(f.a,{title:t.name,bordered:!0},l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",null,"Attacker King :"),l.a.createElement("div",null,t.attacker_king)),l.a.createElement("div",{className:"container"},l.a.createElement("div",null,"Attacker Commander : "),l.a.createElement("div",null,t.attacker_commander)),l.a.createElement("div",{className:"container"},l.a.createElement("div",null,"The Attackers were :"),t.attacker_1.length?l.a.createElement("div",null,t.attacker_1):"",t.attacker_2.length?l.a.createElement("div",null,t.attacker_2):"",t.attacker_3.length?l.a.createElement("div",null,t.attacker_3):"",t.attacker_4.length?l.a.createElement("div",null,t.attacker_4):""),l.a.createElement("div",{className:"container"},l.a.createElement("div",null,"The Attackers size :"),l.a.createElement("div",null,t.attacker_size))))),l.a.createElement(v.a,{span:12},l.a.createElement(f.a,{title:t.name,bordered:!1},l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",null,"Defender King : "),l.a.createElement("div",null,t.defender_king," ")),l.a.createElement("div",{className:"container"},l.a.createElement("div",null,"Defender Commander : "),l.a.createElement("div",null,t.defender_commander)),l.a.createElement("div",{className:"container"},l.a.createElement("div",null,"The Defenders were :"),t.defender_1.length?l.a.createElement("div",null,t.defender_1):"",t.defender_2.length?l.a.createElement("div",null,t.defender_2):"",t.defender_3.length?l.a.createElement("div",null,t.defender_3):"",t.defender_4.length?l.a.createElement("div",null,t.defender_4):""),l.a.createElement("div",{className:"container"},l.a.createElement("div",null,"The Defenders size :"),l.a.createElement("div",null,t.defender_size)))))))},b=a(185),k=a(184),p=b.a.Header,w=b.a.Content,j=b.a.Footer,y=k.a.Option,O=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={search:"",suggestions:[],showSuggestion:!1,data:[],showData:!1},e.showDetails=function(t){h.a.get("".concat(E.baseUrl,"/details/?name=").concat(t)).then((function(t){t.data&&e.setState(Object(m.a)(Object(m.a)({},e.state),{},{data:t.data.data,showData:!0}))})).catch((function(e){return console.log(e)}))},e.onChange=function(t){console.log(t.length),t.length>1&&(console.log("1st if"),e.setState(Object(m.a)(Object(m.a)({},e.state),{},{search:t}))),t.length<1&&(console.log("2st if"),e.setState(Object(m.a)(Object(m.a)({},e.state),{},{search:"",data:[],showSuggestion:!1}))),e.state.search.length>2&&h.a.get("".concat(E.baseUrl,"/search/?name=").concat(e.state.search)).then((function(t){console.log(t.data.data),e.setState(Object(m.a)(Object(m.a)({},e.state),{},{suggestions:t.data.data,showSuggestion:!0}))})).catch((function(e){return console.log(e)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return console.log(this.state.suggestions),l.a.createElement(n.Fragment,null,l.a.createElement(b.a,null,l.a.createElement(p,null,l.a.createElement(k.a,{style:{width:"100%"},onSelect:this.showDetails,onChange:this.onChange,placeholder:"Search Battles here..."},this.state.showSuggestion&&this.state.suggestions.map((function(e){return l.a.createElement(y,{key:e.id,value:e.name},e.name)}))))),this.state.showData&&l.a.createElement("div",null,l.a.createElement(b.a,null,l.a.createElement(w,{style:{height:"100%"}},l.a.createElement(_,{details:this.state.data}))),l.a.createElement(b.a,null,l.a.createElement(j,null,l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("div",null,"The Battle was won by ",this.state.data[0].attacker_outcome&&"win"===this.state.data[0].attacker_outcome?this.state.data[0].attacker_king:this.state.data[0].defender_king),l.a.createElement("div",null,"The Battle was held at  ",this.state.data[0].location," in year ",this.state.data[0].year),l.a.createElement("div",null,"The Battle region was  ",this.state.data[0].region),l.a.createElement("div",null,"The Battle type was ",this.state.data[0].battle_type))))))}}]),a}(n.Component),S=(a(180),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(O,null))}}]),a}(n.Component));c.a.render(l.a.createElement(S,null),document.getElementById("root"))},87:function(e,t,a){e.exports=a(181)},92:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.c2f90737.chunk.js.map
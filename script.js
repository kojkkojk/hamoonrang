var list = document.querySelector("#lists");
function showing(arr) {
   let tag = `<div class="imgBoxs">`;
   for (let i = 0; i < arr.length; i++) {
      tag = tag + `
      <div class="imgBox">
         <img src="https://kojkkojk.github.io/hamoonrang/dccon/images/${arr[i].name}" width="100px" height="100px"/>
         <span>${arr[i].keywords}</span>
      </div>`
   }
   tag = tag + `</div>`;
   return tag
};
function acc() { list.innerHTML = showing(dcConsData) };
















var dcConsData = [
	{ name: "화랑몰루.jpg", keywords: ["화랑몰루"], tags: ["몰?루"] },
	{ name: "주톱호랑이2.gif", keywords: ["댄스호랑2"], tags: ["댄스"] },
	{ name: "개구리갑분싸.gif", keywords: ["페페실망"], tags: ["페페"] },
	{ name: "개구리빵야1.png", keywords: ["페페권총"], tags: ["페페"] },
	{ name: "개구리빵야2.png", keywords: ["페페권총2"], tags: ["페페"] },
	{ name: "더블앵무.gif", keywords: ["더블앵무"], tags: ["앵무"] },
	{ name: "흠.png", keywords: ["흠"], tags: ["흠"] },
	{ name: "흠회전3.gif", keywords: ["회전흠"], tags: ["흠"] },
	{ name: "제리감사.gif", keywords: ["제리감사"], tags: ["제리"] },
	{ name: "1등급.jpg", keywords: ["1등급"], tags: ["아잇"] },
	{ name: "로치.jpg", keywords: ["외않됨?"], tags: ["유희왕"] },
	{ name: "무효아님.jpg", keywords: ["싸이크론"], tags: ["유희왕"] },
	{ name: "자일리통.jpg", keywords: ["300원"], tags: ["철권"] },
	{ name: "콩콩2.jpg", keywords: ["콩콩이"], tags: ["롤"] },
	{ name: "꿀벌1.jpg", keywords: ["꿀벌1"], tags: ["야꿀벌"] },
	{ name: "꿀벌2.jpg", keywords: ["꿀벌2"], tags: ["야꿀벌"] },
	{ name: "꿀벌3.jpg", keywords: ["꿀벌3"], tags: ["야꿀벌"] },
	{ name: "볼트공중제비.gif", keywords: ["공중제비", "볼트공중제비"], tags: ["볼트보이콘"] },
	{ name: "볼트넷여친.png", keywords: ["볼트넷여친"], tags: ["볼트보이콘"] },
	{ name: "볼트넷친구.png", keywords: ["볼트넷친구"], tags: ["볼트보이콘"] },
	{ name: "볼트동정.png", keywords: ["볼트동정"], tags: ["볼트보이콘"] },
	{ name: "볼트가정사.png", keywords: ["볼트가정사"], tags: ["볼트보이콘"] },
	{ name: "볼트등골.png", keywords: ["볼트등골"], tags: ["볼트보이콘"] },
	{ name: "볼트병신.png", keywords: ["볼트병신"], tags: ["볼트보이콘"] },
	{ name: "볼트나무.png", keywords: ["볼트나무"], tags: ["볼트보이콘"] },
	{ name: "볼트대머리.png", keywords: ["볼트대머리", "볼트머머리", "볼트대대리", "볼트머대리"], tags: ["볼트보이콘"] },
	{ name: "볼트침대.png", keywords: ["볼트침대"], tags: ["볼트보이콘"] },
	{ name: "볼트활활.png", keywords: ["볼트활활"], tags: ["볼트보이콘"] },
	{ name: "볼트댕댕.png", keywords: ["볼트댕댕"], tags: ["볼트보이콘"] },
	{ name: "볼트기계.png", keywords: ["볼트기계"], tags: ["볼트보이콘"] },
	{ name: "볼트결혼.png", keywords: ["볼트결혼"], tags: ["볼트보이콘"] },
	{ name: "볼트비밀친구.png", keywords: ["볼트비밀친구"], tags: ["볼트보이콘"] },
	{ name: "볼트군인.png", keywords: ["볼트군인"], tags: ["볼트보이콘"] },
	{ name: "볼트닌자.png", keywords: ["볼트닌자", "볼트대게"], tags: ["볼트보이콘"] },
	{ name: "볼트인육.png", keywords: ["볼트인육"], tags: ["볼트보이콘"] },
	{ name: "볼트핫산.png", keywords: ["볼트핫산"], tags: ["볼트보이콘"] },
	{ name: "볼트주사.png", keywords: ["볼트주사"], tags: ["볼트보이콘"] },
	{ name: "볼트빼액.png", keywords: ["볼트빼액"], tags: ["볼트보이콘"] },
	{ name: "볼트꺼져.png", keywords: ["볼트꺼져"], tags: ["볼트보이콘"] },
	{ name: "볼트닥쳐.png", keywords: ["볼트닥쳐"], tags: ["볼트보이콘"] },
	{ name: "볼트안마.png", keywords: ["볼트안마"], tags: ["볼트보이콘"] },
	{ name: "볼트망치.png", keywords: ["볼트망치"], tags: ["볼트보이콘"] },
	{ name: "볼트빠따.png", keywords: ["볼트빠따"], tags: ["볼트보이콘"] },
	{ name: "볼트수류탄.png", keywords: ["볼트수류탄"], tags: ["볼트보이콘"] },
	{ name: "볼트전기톱.png", keywords: ["볼트전기톱"], tags: ["볼트보이콘"] },
	{ name: "볼트장전.png", keywords: ["볼트장전"], tags: ["볼트보이콘"] },
	{ name: "볼트저격.png", keywords: ["볼트저격"], tags: ["볼트보이콘"] },
	{ name: "볼트라이플.png", keywords: ["볼트라이플"], tags: ["볼트보이콘"] },
	{ name: "볼트화염병.png", keywords: ["볼트화염병"], tags: ["볼트보이콘"] },
	{ name: "볼트주먹.png", keywords: ["볼트주먹"], tags: ["볼트보이콘"] },
	{ name: "볼트컴온.png", keywords: ["볼트컴온"], tags: ["볼트보이콘"] },
	{ name: "볼트투창.png", keywords: ["볼트투창"], tags: ["볼트보이콘"] },
	{ name: "볼트아킴보.png", keywords: ["볼트아킴보"], tags: ["볼트보이콘"] },
	{ name: "볼트고인.png", keywords: ["볼트고인"], tags: ["볼트보이콘"] },
	{ name: "볼트부활.png", keywords: ["볼트부활"], tags: ["볼트보이콘"] },
	{ name: "볼트띠용.png", keywords: ["볼트띠용"], tags: ["볼트보이콘"] },
	{ name: "볼트신문.png", keywords: ["볼트신문"], tags: ["볼트보이콘"] },
	{ name: "볼트눈물.png", keywords: ["볼트눈물"], tags: ["볼트보이콘"] },
	{ name: "볼트투시.png", keywords: ["볼트투시"], tags: ["볼트보이콘"] },
	{ name: "볼트토끼.png", keywords: ["볼트토끼"], tags: ["볼트보이콘"] },
	{ name: "볼트포기.png", keywords: ["볼트포기"], tags: ["볼트보이콘"] },
	{ name: "볼트자살.png", keywords: ["볼트자살"], tags: ["볼트보이콘"] },
	{ name: "볼트에쎔.png", keywords: ["볼트에쎔"], tags: ["볼트보이콘"] },
	{ name: "볼트딸딸.png", keywords: ["볼트딸딸"], tags: ["볼트보이콘"] },
	{ name: "볼트음주.png", keywords: ["볼트음주"], tags: ["볼트보이콘"] },
	{ name: "볼트수면.png", keywords: ["볼트수면"], tags: ["볼트보이콘"] },
	{ name: "볼트우승.png", keywords: ["볼트우승"], tags: ["볼트보이콘"] },
	{ name: "볼트루저.png", keywords: ["볼트루저"], tags: ["볼트보이콘"] },
	{ name: "볼트구토.png", keywords: ["볼트구토"], tags: ["볼트보이콘"] },
	{ name: "볼트예수.png", keywords: ["볼트예수"], tags: ["볼트보이콘"] },
	{ name: "볼트심리.png", keywords: ["볼트심리"], tags: ["볼트보이콘"] },
	{ name: "볼트연설.png", keywords: ["볼트연설"], tags: ["볼트보이콘"] },
	{ name: "볼트공중.png", keywords: ["볼트공중"], tags: ["볼트보이콘"] },
	{ name: "볼트엄격.png", keywords: ["볼트엄격"], tags: ["볼트보이콘"] },
	{ name: "볼트진지.png", keywords: ["볼트진지"], tags: ["볼트보이콘"] },
	{ name: "볼트근엄.png", keywords: ["볼트근엄"], tags: ["볼트보이콘"] },
	{ name: "볼트펄럭.png", keywords: ["볼트펄럭"], tags: ["볼트보이콘"] },
	{ name: "볼트답답.png", keywords: ["볼트답답"], tags: ["볼트보이콘"] },
	{ name: "볼트절망.png", keywords: ["볼트절망"], tags: ["볼트보이콘"] },
	{ name: "볼트관전.png", keywords: ["볼트관전"], tags: ["볼트보이콘"] },
	{ name: "볼트통수.png", keywords: ["볼트통수"], tags: ["볼트보이콘"] },
	{ name: "볼트연주.png", keywords: ["볼트연주"], tags: ["볼트보이콘"] },
	{ name: "볼트파오후.png", keywords: ["볼트파오후"], tags: ["볼트보이콘"] },
	{ name: "볼트딴딴.png", keywords: ["볼트딴딴"], tags: ["볼트보이콘"] },
	{ name: "볼트처형.png", keywords: ["볼트처형"], tags: ["볼트보이콘"] },
	{ name: "볼트명상.png", keywords: ["볼트명상"], tags: ["볼트보이콘"] },
	{ name: "볼트마약.png", keywords: ["볼트마약"], tags: ["볼트보이콘"] },
	{ name: "볼트떠남.png", keywords: ["볼트떠남"], tags: ["볼트보이콘"] },
	{ name: "볼트근육.png", keywords: ["볼트근육"], tags: ["볼트보이콘"] },
	{ name: "볼트자본.png", keywords: ["볼트자본"], tags: ["볼트보이콘"] }
];





acc();
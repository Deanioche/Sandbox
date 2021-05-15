<!-- //////////////////////////////////////////////////////////////
//*****************************************************************
//  Web Site: http://www.CginJs.Com
//  CGI 와 JavaScript가 만났을 때 = C.n.J ☞ http://www.CginJs.Com
//  CGI 와 JavaScript가 만났을 때 = C.n.J ☞ webmaster@CginJs.Com
//  C.n.J 자바스크립트 자동 생성 마법사 ☞ http://www.CginJs.Com
//  C.n.J 자바스크립트(JavaScript) 가이드 ☞ http://www.CginJs.Com
//  C.n.J CSS(Cascading Style Sheet) 가이드 ☞ http://www.CginJs.Com
//  Editer : Web Site: http://www.CginJs.Com
//*****************************************************************
/////////////////////////////////////////////////////////////// -->
var dayarray=new Array("일요일","월요일","화요일","수요일","목요일","금요일","토요일")
var montharray=new Array("1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월")

function getthedate(){
var cnj_date=new Date()
var year=cnj_date.getYear()
if (year < 1000)
year+=1900
var day=cnj_date.getDay()
var month=cnj_date.getMonth()
var daym=cnj_date.getDate()
if (daym<10)
daym="0"+daym
var hours=cnj_date.getHours()
var minutes=cnj_date.getMinutes()
var seconds=cnj_date.getSeconds()
var dn="AM"
if (hours>=12)
dn="PM"
if (hours>12){
hours=hours-12
}
if (hours==0)
hours=12
if (minutes<=9)
minutes="0"+minutes
if (seconds<=9)
seconds="0"+seconds
// 출력 되는 부분
var cdate="<font size=2 color=lime>총사모 시계 : "+year+"년 "+montharray[month]+" "+daym+"일 "+dayarray[day]+" "+hours+":"+minutes+":"+seconds+" "+dn
+"</font>"
if (document.all)
document.all.clock.innerHTML=cdate
else if (document.getElementById)
document.getElementById("clock").innerHTML=cdate
else
document.write(cdate)
}
if (!document.all&&!document.getElementById)
getthedate()
function goforit(){
if (document.all||document.getElementById)
setInterval("getthedate()",1000)
}

function csm_cal() {
	var bbmass=document.fps_calc.bbmass.value
	var fps=document.fps_calc.fps.value;	
	var velocity_ms = (fps * 0.304);
	var mass_kg= (bbmass / 1000);
	var energy_joule = ( 0.5 * ((mass_kg) * (velocity_ms*velocity_ms)) )
	velocity_ms = Math.round(velocity_ms*100)/100;
	energy_joule = Math.round(energy_joule*100)/100;
	document.fps_calc.joule.value=(energy_joule);
	document.fps_calc.velocity_ms.value=(velocity_ms);
	csm_con();
	}

function csm_con() {
	energy_joule = document.fps_calc.joule.value;
	var footpounds = ( 0.735 * energy_joule )
	footpounds = Math.round(footpounds*100)/100;
	document.fps_calc.footpounds.value=(footpounds);
	}

function csm_cal2() {
	var bbmass = document.effective_range.bbmass.value
	var energy_joule = document.effective_range.bbenergy.value
	var mass_kg= (bbmass / 1000);
	var bbvelocity_fps = (Math.sqrt ((2*energy_joule)/mass_kg ))*3.28 ;
	var bbvelocity_ms = (bbvelocity_fps * 0.304);
	var effectiverange_ms = 0.45152364 * bbvelocity_ms;
	var effectiverange_fps = 0.45152364 * bbvelocity_fps;
	bbvelocity_fps = Math.round(bbvelocity_fps*100)/100;
	bbvelocity_ms = Math.round(bbvelocity_ms*100)/100;
	effectiverange_ms = Math.round(effectiverange_ms*100)/100;
	effectiverange_fps = Math.round(effectiverange_fps*100)/100;
	document.effective_range.bbvelocity_fps.value=bbvelocity_fps;
	document.effective_range.bbvelocity_ms.value=bbvelocity_ms;
	document.effective_range.effectiverange_ms.value=effectiverange_ms;
	document.effective_range.effectiverange_fps.value=effectiverange_fps;
	}


function csm_cals() {
	var bbmass=document.fps_calc.bbmass.value
	var fps=document.fps_calc.fps.value;	
	var velocity_ms = (fps * 0.304);
	var mass_kg= (bbmass / 1000);
	var energy_joule = ( 0.5 * ((mass_kg) * (velocity_ms*velocity_ms)) )
	velocity_ms = Math.round(velocity_ms*100)/100;
	energy_joule = Math.round(energy_joule*100)/100;
	document.fps_calc.joule.value=(energy_joule);
	document.fps_calc.velocity_ms.value=(velocity_ms);
	}

function csm_cons() {
	energy_joule = document.fps_calc.joule.value;
	var footpounds = ( 0.735 * energy_joule )
	footpounds = Math.round(footpounds*100)/100;
	document.fps_calc.footpounds.value=(footpounds);
	}

function csm_cals2() {
	var bbmass = document.effective_range.bbmass.value
	var energy_joule = document.effective_range.bbenergy.value
	var mass_kg= (bbmass / 1000);
	var bbvelocity_fps = (Math.sqrt ((2*energy_joule)/mass_kg ))*3.28 ;
	var bbvelocity_ms = (bbvelocity_fps * 0.304);
	var effectiverange_ms = 0.45152364 * bbvelocity_ms;
	var effectiverange_fps = 0.45152364 * bbvelocity_fps;
	bbvelocity_fps = Math.round(bbvelocity_fps*100)/100;
	bbvelocity_ms = Math.round(bbvelocity_ms*100)/100;
	effectiverange_ms = Math.round(effectiverange_ms*100)/100;
	effectiverange_fps = Math.round(effectiverange_fps*100)/100;
	document.effective_range.bbvelocity_fps.value=bbvelocity_fps;
	document.effective_range.bbvelocity_ms.value=bbvelocity_ms;
	document.effective_range.effectiverange_ms.value=effectiverange_ms;
	document.effective_range.effectiverange_fps.value=effectiverange_fps;
	}

	function csmUrl(str) {
	 parent.location.href = str+'.html'; 
    }

// By Dynamic Drive (www.dynamicdrive.com)
<!-- //////////////////////////////////////////////////////////////
//*****************************************************************
//  Web Site: http://www.CginJs.Com
//  CGI 와 JavaScript가 만났을 때 = C.n.J ☞ http://www.CginJs.Com
//  CGI 와 JavaScript가 만났을 때 = C.n.J ☞ webmaster@CginJs.Com
//  C.n.J 자바스크립트 자동 생성 마법사 ☞ http://www.CginJs.Com
//  Editer : Web Site: http://www.CginJs.Com
//*****************************************************************
/////////////////////////////////////////////////////////////// -->


function regenerate(){
window.location.reload()
}
function regenerate2(){
setTimeout("window.onresize=regenerate",400)
}
if ((document.all&&!window.print)||document.layers)
//if the user is using IE 4 or NS 4, both NOT IE 5+
window.onload=regenerate2

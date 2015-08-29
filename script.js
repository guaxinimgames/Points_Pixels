var ativo =false;

document.getElementById('TabPT').onclick = function(){
	document.getElementById('TabPT').className="Tab selected";
	document.getElementById('TabPX').className="Tab";
	document.getElementById('pttopx').style.display="block";
	document.getElementById('pxtopt').style.display="none";
	document.getElementById('T1').innerHTML="Points";
	document.getElementById('T2').innerHTML="<div id='T3'>To</div>Pixels";
	document.title = "Pt->Px"
}

document.getElementById('TabPX').onclick = function(){
	document.getElementById('TabPT').className="Tab";
	document.getElementById('TabPX').className="Tab selected";
	document.getElementById('pttopx').style.display="none";
	document.getElementById('pxtopt').style.display="block";
	document.getElementById('T2').innerHTML="<div id='T3'>To</div>Points";
	document.getElementById('T1').innerHTML="Pixels";
	document.title = "Px->Pt"
}

document.getElementById('FormulaActive').onclick = function(){

	if(ativo)
	{
		document.getElementById('FormulaContent').style.height="0px";
		document.getElementById('FormulaContent').style.padding="0px";
		document.getElementById('FormulaContent').style.borderWidth="0px";
		ativo = false;
	} else {
		document.getElementById('FormulaContent').style.height="100px";
		document.getElementById('FormulaContent').style.padding="20px";
		document.getElementById('FormulaContent').style.borderWidth="1px";
		ativo = true;
	}
}

function PtPx()
{
	var resultado = document.getElementById('Pt2Px_Pt').value * 96 / 72;
	document.getElementById('ResultadoPx').innerHTML = resultado+" Pixels";
}

function PxPt()
{
	var resultado = document.getElementById('Px2Pt_Px').value * 72 / 96;
	document.getElementById('ResultadoPt').innerHTML = resultado+" Points";
}


window.onload=function() {
    lengthObj = document.getElementById('txtLength');
    heightObj = document.getElementById('txtHeight');
    widthObj = document.getElementById('txWidth');
	costObj = document.getElementById('tdCost');
    document.getElementById('btnReset').onclick = <input type="reset">;
    document.getElementById('btnCalc').onclick = calcwidth;
}

function resetInputs() {
    lengthObj.value = '';
    heightObj.value = '';
    widthObj. value = '';
	costObj.innerHTML = ''; 
}

function calcWeight() {
    var length = new Number(lengthObj.value);
    var height = new Number(heightObj.value);
	var width = new number (widthObj.value);
    costObj.innerHTML = '';
    if(isNaN(length) || isNaN(height) || isNaN(width) {
        alert('Invalid length or height or width');
        return;
    }
	costObj.innerHTML = length*Math.pow(height,2)/800;
}

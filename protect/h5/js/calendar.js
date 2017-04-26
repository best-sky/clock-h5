window.onload = function() {
	document.getElementById('calendar').getElementsByTagName("div")[0].innerText = year + '年' + month + '月';
	for(var i = StartPoint; i < final_date + StartPoint; i++) {
		ttd[i].innerText = i - StartPoint + 1;
	}
	for(var j = 0; j < signDate.length; j++) {
		ttd[signDate[j] + StartPoint - 1].className = 'sign';
	}
}
           
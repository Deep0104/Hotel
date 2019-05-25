
//Slider
function slide(container) {
	var img = container.getElementsByTagName('img');
	var count = 0;
	(function() {
		if (count < img.length) {
			index = count;
		}
		else index = count % img.length;

		img[index].style.zIndex = '1';
		img[index].style.opacity = '1';
		for (var i = 0; i < img.length; i++) {
			if (i == index) continue;
			img[i].style.zIndex = '0';
			img[i].style.opacity = '0';
		}
		count++;
	})();
	setInterval(function() {
		if (count < img.length) {
			index = count;
		}
		else index = count % img.length;

		img[index].style.zIndex = '1';
		img[index].style.opacity = '1';
		for (var i = 0; i < img.length; i++) {
			if (i == index) continue;
			img[i].style.zIndex = '0';
			img[i].style.opacity = '0';
		}
		count++;
	}, 3500)
}
var slider = document.getElementById('slider');
slide(slider);

//Search
// function Search(){
// 	var text = document.getElementById('search').value
// 	var search = new RegExp(text, "ig");
// 	var body = document.getElementsByTagName('body')[0];
// 	for (var i = 0; i < body.childNodes.length; i++) {
// 		var content = body.childNodes;
// 		var textt = content.innerHTML;
// 		if (textt.search(search) != -1) {
//     		content[i].setAttribute('style', 'background-color:yellow');
//     		}
// 	}
// }
function searchTextOnPage(inputId) { 
  var obj = window.document.getElementById(inputId); 
  var textToFind; 
  if (obj) { 
    textToFind = obj.value; 
  } else { 
    alert("Немогу найти текст = " + inputId); 
    return; 
  } 
  if (textToFind == "") { 
    alert("Вы ничего не ввели"); 
    return; 
  } 
  document.body.innerHTML = document.body.innerHTML.replace(eval("/"+textToFind+"/g","<b style='color:red'>"+textToFind+"</b>")); 
  var obj = window.document.getElementById(inputId); 
  obj.value = textToFind; 
} 
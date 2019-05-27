
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


// Search
function searchTextOnPage(inputId){
	var content = document.getElementById('content');
	var span = content.getElementsByTagName('span');
	for (var i = 0; i < span.length; i++) {
		span[i].removeAttribute('style');
	}
	var text = document.getElementById(inputId).value
	var replace = new RegExp(text, "ig");
	console.log(replace);
		if (content.innerHTML.search(replace) != -1) {
    		content.innerHTML = content.innerHTML.replace(replace, '<span style="background-color:yellow">' + text + '</span>')
    		}
}


var getUrlParameter = function getUrlParameter(sParam) {

	var sPageURL = window.location.search.substring(1),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
		}
	}
};

// SPA
$(function() {

	let pageName = getUrlParameter('page') === undefined ? 'main' : getUrlParameter('page');

	$.ajax({
		url: pageName + ".html",
		dataType : "html",
		success: function (data)
		{
			document.getElementById("content").innerHTML = data;

			var slider = document.getElementById('slider');

			if (slider)
				slide(slider);
		},
		error: function () {
			document.getElementById("content").innerHTML = '404. Page is not found(';
		}
	});
});
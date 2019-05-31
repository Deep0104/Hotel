
// Slider
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


// // Search
// function searchTextOnPage(inputId){
// 	var content = document.getElementById('content');
// 	var span = content.getElementsByTagName('span');
// 	for (var i = 0; i < span.length; i++) {
// 		span[i].removeAttribute('style');
// 	}
// 	var text = document.getElementById(inputId).value
// 	var replace = new RegExp(text, "ig");
// 	console.log(replace);
// 		if (content.innerHTML.search(replace) != -1) {
//     		content.innerHTML = content.innerHTML.replace(replace, '<span style="background-color:yellow">' + text + '</span>')
//     		}
// }

createRoomsArr();
var rooms = [];


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

			var gallery = document.getElementById('gallery-section');
			if (gallery) {
				setVar();
				pagination();
			}
			var roomsPage = document.getElementById('rooms');
			if (roomsPage) {
				createRoomsTable(rooms);
			}
		},
		error: function () {
			document.getElementById("content").innerHTML = '404. Page is not found(';
		}
	});
});

// Pagination
var images, imgContainer, current, start, end;
function setVar() {
	images = ["img/2.jpg", "img/3.jpg", "img/4.jpg", "img/room3.jpg", "img/castelmezzano-1979546_1920.jpg", 
	"img/mountains-1645078_1920.jpg", "img/norway-772991_1920.jpg", "img/room1.jpg", "img/room2.jpg", "img/room3.jpg", 
	"img/rough-horn-2146181_1920.jpg", "img/mountains-1645078_1920.jpg", "img/norway-772991_1920.jpg", "img/room2.jpg", 
	"img/rough-horn-2146181_1920.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", 
	"img/castelmezzano-1979546_1920.jpg", "img/mountains-1645078_1920.jpg", "img/norway-772991_1920.jpg", "img/room1.jpg", 
	"img/room2.jpg", "img/room3.jpg", "img/rough-horn-2146181_1920.jpg", "img/mountains-1645078_1920.jpg", "img/norway-772991_1920.jpg", 
	"img/room2.jpg", "img/room3.jpg", "img/rough-horn-2146181_1920.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/2.jpg", 
	"img/3.jpg", "img/4.jpg", "img/castelmezzano-1979546_1920.jpg", "img/mountains-1645078_1920.jpg", "img/norway-772991_1920.jpg", 
	"img/room1.jpg", "img/room2.jpg", "img/room3.jpg", "img/rough-horn-2146181_1920.jpg", "img/mountains-1645078_1920.jpg", 
	"img/norway-772991_1920.jpg", "img/room2.jpg", "img/room3.jpg", "img/rough-horn-2146181_1920.jpg", "img/2.jpg", "img/3.jpg", 
	"img/4.jpg","img/2.jpg", "img/3.jpg", "img/4.jpg", "img/castelmezzano-1979546_1920.jpg", "img/mountains-1645078_1920.jpg",
	"img/norway-772991_1920.jpg", "img/room1.jpg", "img/room2.jpg", "img/room3.jpg", "img/rough-horn-2146181_1920.jpg", 
	"img/mountains-1645078_1920.jpg", "img/norway-772991_1920.jpg", "img/room2.jpg", "img/room3.jpg", "img/rough-horn-2146181_1920.jpg", 
	"img/2.jpg", "img/3.jpg", "img/4.jpg", "img/4.jpg", "img/castelmezzano-1979546_1920.jpg", "img/mountains-1645078_1920.jpg"];
	imgContainer = document.getElementsByClassName('gallery-img');
	current = document.getElementById('current-number');
	start = (current.innerHTML - 1) * imgContainer.length;
	if (images.length - start >= imgContainer.length) {
		end = start + imgContainer.length;
	}
	else end += images.length - start;
}	

function pagination() {
	var next = document.getElementById('next');
	var previous = document.getElementById('previous');
	
	function fillGalery() {
		for (var i = 0; i < imgContainer.length; i++) {
			imgContainer[i].innerHTML = '';
		}
		for (var i = 0, j = start; i < end - start, j < end; i++, j++) {
			imgContainer[i].innerHTML = '<img src=' + images[j] + '>'; 
		}
	}
	if (+current.innerHTML === 1) {
		previous.style.visibility = 'hidden';
	}
	else if (+current.innerHTML > 1) {
		previous.style.visibility = 'visible';
	}
	var maxNumber = Math.ceil(images.length / imgContainer.length);
	if (+current.innerHTML === maxNumber) {
		next.style.visibility = 'hidden';
	}
	else if (+current.innerHTML < maxNumber) {
		next.style.visibility = 'visible';
	}
	fillGalery();
}

function next() {
	document.getElementById('current-number').innerHTML = +current.innerHTML + 1;
	setVar();
	pagination();
}

function prev() {
	document.getElementById('current-number').innerHTML = +current.innerHTML - 1;
	setVar();
	pagination();
}

// Rooms

function createRoomsArr() {
	$.ajax({
		url: 'rooms.json',
		dataType: 'json',
		success: function (data) {
			rooms = data;

		}
	});
}

function createRoomsTable(arr) {
	var body = document.getElementById('rooms-data'); 
	var table = document.createElement('table');
	table.setAttribute('id', 'table')
	table.innerHTML = `<thead id="thead">
				<tr>
					<th>№</th>
					<th>Type</th>
					<th>Adults</th>
					<th>Children</th>
					<th>Beds</th>
					<th>Servises</th>
					<th>Area, m<sup>2</sup></th>
					<th>Bathroom</th>
					<th>Price, USD/night</th>
				</tr>
			</thead>`;
	var tbody = document.createElement('tbody');
	var a;
	for (i = 0; i < arr.length; i++) {
		if (arr[i].type == "Standard double room") {
			a = "?page=room1";
		}
		else if (arr[i].type == "Econom single room") {
			a = "?page=room2";
		}
		else a = "?page=room3";
		var num = i + 1;
		var trow = document.createElement('tr');
		trow.innerHTML = '<td id="room-num">' + num + '</td>' +
						 '<td id="type' + i + '\"><a href=' + a + '>' +arr[i].type + '</a></td>' +
			             '<td id="adults' + i + '">' +arr[i].adults + '</td>' +
			             '<td id="children' + i + '">' +arr[i].children + '</td>' +
			             '<td id="beds' + i + '">' +arr[i].beds + '</td>' +
			             '<td id="servises' + i + '">' +arr[i].servises + '</td>' +
			             '<td id="area' + i + '">' + arr[i].area + '</td>' +
			             '<td id="bathroom' + i + '">' +arr[i].bathroom + '</td>' +
			             '<td id="price' + i + '">' +arr[i].price + '</td>';
		tbody.appendChild(trow);

			              
	}
	table.appendChild(tbody);
	body.appendChild(table);
}

function setDisplay(element) {
	var body = document.getElementById(element);
	var display = body.style.display;
	body.style.display = display == 'none' ? 'block' : 'none';
}

function sortTable(index) {
	var sort = document.getElementsByName('sort');
	var sort_value;
	var table = document.getElementById('table');
	var tbody = table.querySelector('tbody');
	var tbodyArray = [].slice.call(tbody.rows);
	
	for(var i = 0; i < sort.length; i++){
    	if(sort[i].checked) {
        	sort_value = sort[i].value;
    	}
	}
	switch (sort_value) {
    case 'lowToHigh':
      compare = function(a, b) {
        if (a.cells[index].innerHTML > b.cells[index].innerHTML) return 1;
        else return -1;
      };
      break;
    case 'highToLow':
      compare = function(a, b) {
        if (a.cells[index].innerHTML < b.cells[index].innerHTML) return 1;
        else return -1;
      };
      break;
     case undefined:
       compare = function() {
       	return false;
       }
	}
	tbodyArray.sort(compare);

	for (var i = 0; i < tbodyArray.length; i++) {
    	tbody.appendChild(tbodyArray[i]);
	}

	table.appendChild(tbody);
}

function filterTable() {
	var values = [];
	var checkbox = document.getElementsByClassName('checkbox');
	var filterPrice = document.getElementsByClassName('filterPrice');
	var lowestPrice, highestPrice;
	var table = document.getElementById('table');
	var tbody = table.querySelector('tbody');
	for (var i = 0; i < tbody.rows.length; i++) {
		tbody.rows[i].style.display = 'table-row';
		if (checkbox[0].checked && checkbox[0].value != tbody.rows[i].cells[2].innerHTML) {
			tbody.rows[i].style.display = 'none';
		}
		if (checkbox[1].checked && checkbox[1].value != tbody.rows[i].cells[2].innerHTML) {
			tbody.rows[i].style.display = 'none';
		}
		if (checkbox[1].checked && checkbox[0].checked) {
			tbody.rows[i].style.display = 'table-row';
		}
		if (checkbox[2].checked && checkbox[2].value != tbody.rows[i].cells[3].innerHTML) {
			tbody.rows[i].style.display = 'none';
		}
		if (checkbox[3].checked && checkbox[3].value != tbody.rows[i].cells[7].innerHTML) {
			tbody.rows[i].style.display = 'none';
		}
		lowestPrice = filterPrice[0].value != '' ? filterPrice[0].value : 0;
		highestPrice = filterPrice[1].value != '' ? filterPrice[1].value : Infinity;
		if (tbody.rows[i].style.display == 'none') {
			continue
		} else if (tbody.rows[i].cells[8].innerHTML >= lowestPrice && tbody.rows[i].cells[8].innerHTML <= highestPrice) {
			tbody.rows[i].style.display = 'table-row';
		} else tbody.rows[i].style.display = 'none';
	}
}

function sortFilter() {
	sortTable(8);
	filterTable();
}

// Booking
var roomsAvailable = [];
function availableRooms() {
	roomsAvailable.length = 0;
	var checkIn = new Date(document.getElementsByName('chek-in')[0].valueAsDate);
	var checkOut = new Date(document.getElementsByName('chek-out')[0].valueAsDate);
	checkInMs = checkIn.getTime() - 10800000;
	checkOutMs = checkOut.getTime() - 10800000;
	var numOfAdults = document.getElementsByName('adults')[0].value;
	var numOfChildren = document.getElementsByName('children')[0].value;
	function notBelongsToInterval(element, index, array) {
			if (element < checkInMs || element > checkOutMs) {
				return element;
			}
		}
	for (var i = 0; i < rooms.length; i++) {
		rooms[i].number = i + 1;
		for (var j = 0; j < rooms[i].booked.length; j++) {
			var date = new Date(rooms[i].booked[j]);
			rooms[i].booked[j] = date.getTime();
		}
		if (rooms[i].booked.every(notBelongsToInterval) && rooms[i].adults >= numOfAdults && rooms[i].children >= numOfChildren) {
		roomsAvailable.push(rooms[i]);
		}
	}
}

function displayAvRooms() {
	availableRooms();
	var container = document.createElement('div');
	container.id = 'available-rooms-container';
	container.innerHTML = '<button id="close">X<div>';
	if (roomsAvailable.length == 0) {
		var p = document.createElement('p');
		p.innerHTML = 'There are no free rooms. Please try another dates.';
		container.appendChild(p);
	} else {
		var table = document.createElement('table');
		for (var i = 0; i < roomsAvailable.length; i++) {
		var trow = document.createElement('tr');
		trow.innerHTML = '<td>№ ' + roomsAvailable[i].number + '</td><td>' + roomsAvailable[i].type + '</td><td>' + 
		roomsAvailable[i].price + ' $</td><td class="bookingTable"><form onsubmit="return false" method="post" action="#"><input type="text" placeholder="Name & Phone Number" required><input type="submit" class="button" value="Book"></form></td>'
		table.appendChild(trow);
		}
		container.appendChild(table);
	}
	document.body.appendChild(container);
	document.getElementById("close").addEventListener('click', function() {close();})
}
function close() {
	document.body.removeChild(document.getElementById('available-rooms-container'));	
}
var rooms = new Array;
function Room(type, adults, children, beds, servises, area, bathroom, price, booked) {
	this.type = type;
	this.adults = adults;
	this.children = children;
	this.beds = beds;
	this.servises = servises;
	this.area = area;
	this.bathroom = bathroom;
	this.price = price;
	this.booked = booked;
}

rooms[0] = new Room('Standard double room', '2', '0', '1 queen size bed', 'carpeted, heating, wi-fi', '18', 'in the room', '260', 
	[new Date(2019, 5, 14), new Date(2019, 5, 15), new Date(2019, 5, 16), new Date(2019, 5, 17), new Date(2019, 7, 3), new Date(2019, 7, 4)]);
rooms[1] = new Room('Standard double room', '2', '0', '1 queen size bed', 'carpeted, heating, wi-fi', '18', 'communal', '220',
	[new Date(2019, 6, 14), new Date(2019, 6, 15), new Date(2019, 5, 16), new Date(2019, 7, 15), new Date(2019, 7, 16), new Date(2019, 7, 17)]);
rooms[2] = new Room('Econom single room', '1', '0', '1 single bed', ' breakfast, heating, wi-fi', '14', 'communal', '110', 
	[new Date(2019, 5, 10), new Date(2019, 5, 18), new Date(2019, 6, 1), new Date(2019, 6, 2), new Date(2019, 6, 3), new Date(2019, 6, 4)]);
rooms[3] = new Room('Two-Bedroom Apartment', '2', '2', '2 queen size beds', 'air-conditioning, breakfast, wi-fi', '36', 'in the room', '500', 
	[new Date(2019, 8, 10), new Date(2019, 8, 11), new Date(2019, 8, 12), new Date(2019, 8, 13), new Date(2019, 8, 14), new Date(2019, 8, 15)]);
rooms[4] = new Room('Two-Bedroom Apartment', '2', '2', '2 queen size beds', 'air-conditioning, breakfast, wi-fi', '36', 'communal', '440',
	[new Date(2019, 5, 14), new Date(2019, 5, 15), new Date(2019, 5, 16), new Date(2019, 5, 17), new Date(2019, 7, 3), new Date(2019, 7, 4)]);
rooms[5] = new Room('Standard double room', '2', '0', '1 queen size bed', 'carpeted, heating, wi-fi', '18', 'communal', '220',
	[new Date(2019, 6, 14), new Date(2019, 6, 15), new Date(2019, 5, 16), new Date(2019, 7, 15), new Date(2019, 7, 16), new Date(2019, 7, 17)]);
rooms[6] = new Room('Standard double room', '2', '0', '1 queen size bed', 'carpeted, heating, wi-fi', '18', 'in the room', '260',
	[new Date(2019, 5, 10), new Date(2019, 5, 18), new Date(2019, 6, 1), new Date(2019, 6, 2), new Date(2019, 6, 3), new Date(2019, 6, 4)]);
rooms[7] = new Room('Two-Bedroom Apartment', '2', '2', '2 queen size beds', 'air-conditioning, breakfast, wi-fi', '36', 'in the room', '500',
	[new Date(2019, 5, 14), new Date(2019, 5, 15), new Date(2019, 5, 16), new Date(2019, 5, 17), new Date(2019, 7, 3), new Date(2019, 7, 4)]);
rooms[8] = new Room('Econom single room', '1', '0', '1 single bed', ' breakfast, heating, wi-fi', '14', 'communal', '110',
	[new Date(2019, 8, 10), new Date(2019, '8', '11'), new Date(2019, 8, 12), new Date(2019, 8, 13), new Date(2019, 8, 14), new Date(2019, 8, 15)]);
rooms[9] = new Room('Standard double room', '2', '0', '1 queen size bed', 'carpeted, heating, wi-fi', '18', 'communal', '220',
	[new Date(2019, 5, 10), new Date(2019, 5, 18), new Date(2019, 6, 1), new Date(2019, 6, 2), new Date(2019, 6, 3), new Date(2019, 6, 4)]);
rooms[10] = new Room('Econom single room', '1', '0', '1 single bed', ' breakfast, heating, wi-fi', '14', 'communal', '110',
	[new Date(2019, 8, 10), new Date(2019, 8, 11), new Date(2019, 8, 12), new Date(2019, 8, 13), new Date(2019, 8, 14), new Date(2019, 8, 15)]);
rooms[11] = new Room('Two-Bedroom Apartment', '2', '2', '2 queen size beds', 'air-conditioning, breakfast, wi-fi', '36', 'in the room', '500',
	[new Date(2019, 6, 14), new Date(2019, 6, 15), new Date(2019, 5, 16), new Date(2019, 7, 15), new Date(2019, 7, 16), new Date(2019, 7, 17)]);
rooms[12] = new Room('Two-Bedroom Apartment', '2', '2', '2 queen size beds', 'air-conditioning, breakfast, wi-fi', '36', 'communal', '440',
	[new Date(2019, 8, 10), new Date(2019, 8, 11), new Date(2019, 8, 12), new Date(2019, 8, 13), new Date(2019, 8, 14), new Date(2019, 8, 15)]);
rooms[13] = new Room('Econom single room', '1', '0', '1 single bed', ' breakfast, heating, wi-fi', '14', 'communal', '110',
	[new Date(2019, 5, 10), new Date(2019, 5, 18), new Date(2019, 6, 1), new Date(2019, 6, 2), new Date(2019, 6, 3), new Date(2019, 6, 4)]);
rooms[14] = new Room('Econom single room', '1', '0', '1 single bed', ' breakfast, heating, wi-fi', '14', 'communal', '110',
	[new Date(2019, 5, 14), new Date(2019, 5, 15), new Date(2019, 5, 16), new Date(2019, 5, 17), new Date(2019, 7, 3), new Date(2019, 7, 4)]);
rooms[15] = new Room('Standard double room', '2', '0', '1 queen size bed', 'carpeted, heating, wi-fi', '18', 'in the room', '260',
	[new Date(2019, 6, 14), new Date(2019, 6, 15), new Date(2019, 5, 16), new Date(2019, 7, 15), new Date(2019, 7, 16), new Date(2019, 7, 17)]);
console.log(rooms);
console.log( JSON.stringify(rooms));

function download(content, fileName) {
	content = JSON.stringify(content)
    var a = document.createElement("a");
    var file = new Blob([content], {type: 'text/json'});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
for (var i = 0; i < rooms.length; i++) {
	download(rooms[i], 'rooms'+i+'.json');
}

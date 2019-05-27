// function urlArgs() {
//     var args = {};                             // Start with an empty object
//     var query = location.search.substring(1);  // Get query string, minus '?'
//     var pairs = query.split("&");              // Split at ampersands
//     for(var i = 0; i < pairs.length; i++) {    // For each fragment
//         var pos = pairs[i].indexOf('=');       // Look for "name=value"
//         if (pos == -1) continue;               // If not found, skip it
//         var name = pairs[i].substring(0,pos);  // Extract the name
//         var value = pairs[i].substring(pos+1); // Extract the value
//         value = decodeURIComponent(value);     // Decode the value
//         args[name] = value;                    // Store as a property
//     }
//     return args;                               // Return the parsed arguments
// }
// console.log(urlArgs());


$(document).ready(function() {
 
    // Check for hash value in URL
    var hash = window.location.hash.substr(1);
    var href = $('#nav li a').each(function(){
        var href = $(this).attr('href');
        if(hash==href.substr(0,href.length-5)){
            var toLoad = hash+'.html #content';
            $('#content').load(toLoad)
        } 
    });
    
    $('#nav li a').click(function(){
    
    var toLoad = $(this).attr('href')+' #content';
    $('#content').hide('fast',loadContent);
    window.location.hash = $(this).attr('href').substr(0,$(this).attr('href').length-5);
    function loadContent() {
     $('#content').load(toLoad,'',showNewContent())
    }
    function showNewContent() {
     $('#content').show('normal',hideLoader());
    }
    function hideLoader() {
     $('#load').fadeOut('normal');
    }
    return false;
    
    });
});
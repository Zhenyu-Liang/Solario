// All planets
const planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

// Planets Highlight
for (let planet of planets) {
  $(`#${planet}-link`).hover(function() {
	$(`#${planet}-orbit`).css({ border: 'solid 3px rgba(137, 196, 244, 0.4)'});
  }, function() {
	$(`#${planet}-orbit`).css({ border: 'solid 3px rgba(137, 196, 244, 0.1)'});
  })
}

// Sun Highlight
$('#sun-link').hover(function() {
  $('#sun').css({ 'box-shadow': '0px 0px 10px 10px rgba(242, 120, 75, 0.4)'})
}, function() {
  $('#sun').css({ 'box-shadow': '0px 0px 8px 8px rgba(242, 120, 75, 0.2)'})
})

// Back to planets page
$("#back").click(function() {
	window.location.href = window.location.protocol + "//" + window.location.host + "/planets";
})
var shapes = new Array(
		  {'title':'Square', 'image':'shape5.png'},
          {'title':'Circle', 'image':'shape2.png'},
          {'title':'Heptagon', 'image':'shape3.png'},
          {'title':'Hexagon', 'image':'shape4.png'},
          {'title':'Triangle', 'image':'shape6.png'},
          {'title':'Pentagon', 'image':'shape1.png'}
		);


var optionsID = "radioContainer";
var imgID = "shapeImage";

function populateFct() {
	var optionsContainer = document.getElementById(optionsID);
	var choice, radio, rLabel;

	for (s in shapes) {
		choice = document.createElement('div');
		radio = document.createElement('input');
		radio.id = shapes[s].title;
		radio.class='text-left';
		radio.type = 'radio';
		radio.value = shapes[s].title;
		radio.name = "choices";
		radio.onclick = validationFct;

		rLabel = document.createElement('label');
		rLabel.for = shapes[s].title;
		rLabel.innerHTML = shapes[s].title;

		choice.appendChild(radio);
		choice.appendChild(rLabel);

		optionsContainer.appendChild(choice);
	}

	setImg();
}

function setImg(){
	var shapeImg = document.getElementById(imgID);
	var shapeNum = Math.floor(Math.random() * shapes.length);

	shapeImg.src = './img/' + shapes[shapeNum].image;
	shapeImg.alt = shapes[shapeNum].title;
		$('#possitiveFeedback').hide();
	$('#negativeFeedback').hide();
	$('input[name=choices]:checked').uncheck();

}


function validationFct() {
	var shapeImg = document.getElementById(imgID);
	if ($('input[name=choices]:checked').val() == shapeImg.alt){
		//Success!
		$('#possitiveFeedback').show();
	}
	else{
		$('#negativeFeedback').show();
	}

}


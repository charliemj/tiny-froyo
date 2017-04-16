
	  var chosenIntgredient;
	
	  //when user clicks on tofu 
	  $(document).ready(function(){
		$(".tofu").click(function(){
			$('#default').html('');
			//check if list exists
			if($('#replacementList')){
				$('#replacementList').remove();
				$('#resetButton').remove();
			}
			var list = '<div id="replacementList"><li class="replacement" id="azuki1">azuki beans</li><li class="replacement" id="chickpea1">chickpea and rice paste</li></div>';
			var replaceButton = '<button id="resetButton" type="button" class="btn btn-primary btn-lg" onclick="resetReplacements()" style="">Reset replacements</button>';
	
			$('#firstColumn').append(list+replaceButton);
			$('#azuki1').append('<br>- a Japanese dessert, "sekihan"');
			$('#azuki1').append('<br>- high in fiber');
			$('#azuki1').append('<br><span id="azuki-more">more...</span>');
			$('#chickpea1').append('<br>-greek comfort food');
			$('#chickpea1').append('<br><span id="chickpea-more">more...</span>');
			
			$('#header').html('Tofu');
			
			addListener(this);

		});
		
		$(".soy_sauce").click(function(){
			$('#default').html('');
			//check if list exists
			if($('#replacementList')){
				$('#replacementList').remove();
				$('#resetButton').remove();
			}
			var list = '<div id="replacementList"><li class="replacement" id="coconut1">coconut aminos</li><li class="replacement" id="canola1">canola oil</li></div>';
			var replaceButton = '<button id="resetButton" type="button" class="btn btn-primary btn-lg" onclick="resetReplacements()" style="">Reset replacements</button>';
			$('#firstColumn').append(list+replaceButton);	
			$('#coconut1').append('<br>- from the nutrient rich sap of the coconut trees');
			$('#coconut1').append('<br>- contains 17 amino acids');
			$('#coconut1').append('<br><span id="coconut-more">more...</span>');	
			$('#canola1').append('<br>-low in saturate fat, high in unsaturated fat');
			$('#canola1').append('<br><span id="canola-more">more...</span>');
			$('#header').html('Soy sauce');
		
			addListener(this);
			
			
		});
	   });
	   
	function addListener(allergen){
	  $('.replacement').on('click', function() {
			var replacementName = this.innerHTML.split('<br>')[0];
			var allergenClass = $('.'+allergen.className.split(" ")[1]);
			allergenClass.html(replacementName);
			allergenClass.css('background-color', "white");
			allergenClass.css('color', "green");
			allergenClass.css('font-weight', "bold");
			chosenIntgredient = this;
	  });
	}
	
	function printRecipe(){
		recipeCSS = new String ('<link href="../stylesheets/styles-master.css" rel="stylesheet">');
		mainCSS = new String('<link href="../stylesheets/recipe_style.css" rel="stylesheet">');
		window.frames["print_frame"].document.body.innerHTML= recipeCSS + mainCSS + document.getElementById('mainColumnExceptPrintButton').innerHTML;
        window.frames["print_frame"].window.focus();
        window.frames["print_frame"].window.print();		
	}
	
	function resetReplacements(){
		
		$(".tofu").html('tofu');
		$(".soy_sauce").html('soy sauce');
		$(".allergen").css('background-color', "#ed6363");
		$(".allergen").css('color', "black");
		$(".allergen").css('font-weight', "normal");
	}


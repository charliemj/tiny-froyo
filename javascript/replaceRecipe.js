
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
			var list = '<div id="replacementList"><ul><li class="replacement" id="azuki1">azuki beans</li><li class="replacement" id="chickpea1">chickpea and rice paste</li></ul></div>';
			var replaceButton = '<button id="resetButton" type="button" class="btn btn-success btn-lg" onclick="resetReplacements()" style="">Reset replacements for tofu</button>';
	
			$('#firstColumn').append(list+replaceButton);
			$('#azuki1').append('<ul><li>a Japanese dessert, "sekihan"</li><li> high in fiber</li><li>more...</li></ul>');
			$('#chickpea1').append('<br><ul><li>-greek comfort food</li><li id="chickpea-more">more...</li></ul>');

			$('#header').html('Replacing: Tofu');
			
			addListener(this);

		});
		
		$(".soy_sauce").click(function(){
			$('#default').html('');
			//check if list exists
			if($('#replacementList')){
				$('#replacementList').remove();
				$('#resetButton').remove();
			}
			var list = '<div id="replacementList"><ul><li class="replacement" id="coconut1">coconut aminos</li><li class="replacement" id="canola1">canola oil</li></ul></div>';
			var replaceButton = '<button id="resetButton" type="button" class="btn btn-success btn-lg" onclick="resetReplacements()" style="">Reset replacements for soy sauce</button>';
			$('#firstColumn').append(list+replaceButton);	
			$('#coconut1').append('<ul><li>from the nutrient rich sap of the coconut trees</li><li>contains 17 amino acids</li><li>more...</li></ul>');	
			$('#canola1').append('<ul><li>low in saturate fat, high in unsaturated fat</li><li>more...</li>');
			$('#header').html('Replacing: Soy sauce');
		
			addListener(this);
			
			
		});
	   });
	   
	function addListener(allergen){
	  $('.replacement').on('click', function() {
			var replacementName = this.innerHTML.split('<ul>')[0];
			var allergenClass = $('.'+allergen.className.split(" ")[1]);
			allergenClass.html(replacementName);	
			allergenClass.css('background-color', "lightgreen");
			allergenClass.css('color', "black");
    		setTimeout(complete1, 300);
    		function complete1() {
    			allergenClass.css('background-color', "white");
				allergenClass.css('color', "green");
    			setTimeout(complete2, 300);
    		}
    		function complete2() {
    			allergenClass.css('background-color', "lightgreen");
				allergenClass.css('color', "black");
    			setTimeout(complete3, 300);
    		}
			function complete1() {
    			allergenClass.css('background-color', "white");
				allergenClass.css('color', "green");
    			setTimeout(complete2, 300);
    		}
    		function complete3() {
    			allergenClass.css('background-color', "lightgreen");
				allergenClass.css('color', "black");
    		}			
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
		$(".allergen").css("color", "white");
		$(".allergen").css('font-weight', "normal");
	}


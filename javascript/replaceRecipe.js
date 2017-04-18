
	  var currentAllergen;
	
	  //when user clicks on tofu 
	  $(document).ready(function(){
		$(".tofu").click(function(){
			$('#default').html('');
			//check if list exists
			if($('#replacementList')){
				$('#replacementList').remove();
				$('#resetButton').remove();
			}
			var list = '<div id="replacementList"><ul><li class="replacement" id="azuki1"><div class="rep-title">azuki beans</div></li><li class="replacement" id="chickpea1"><div class="rep-title">chickpea and rice paste</div></li></ul></div>';
			var replaceButton = '<button id="resetButton" type="button" class="btn btn-success btn-lg" onclick="resetChosenReplacement()" style="">Reset replacements for tofu</button>';
	
			$('#firstColumn').append(list+replaceButton);
			$('#azuki1').append('<ul> <div class="rep-description"><li>a Japanese dessert, "sekihan"</li><li> high in fiber</li></div><li class="more" >more...</li></ul>');
			$('#chickpea1').append('<ul><div class="rep-description"><li>-greek comfort food</li></div><li class="more">more...</li></ul>');

			$('#header').html('Replacing: Tofu');
			
			addListener(this);
			
			currentAllergen = "tofu";

		});
		
		$(".soy_sauce").click(function(){
			$('#default').html('');
			//check if list exists
			if($('#replacementList')){
				$('#replacementList').remove();
				$('#resetButton').remove();
			}
			var list = '<div id="replacementList"><ul><li class="replacement" id="coconut1"><div class="rep-title">coconut aminos</div></li><li class="replacement" id="canola1"><div class="rep-title">canola oil</div></li></ul></div>';
			var replaceButton = '<button id="resetButton" type="button" class="btn btn-success btn-lg" onclick="resetChosenReplacement()" style="">Reset replacements for soy sauce</button>';
			$('#firstColumn').append(list+replaceButton);	
			$('#coconut1').append('<ul> <div class="rep-description"><li>from the nutrient rich sap of the coconut trees</li><li>contains 17 amino acids</li></div><li class="more" >more...</li></ul>');	
			$('#canola1').append('<ul> <div class="rep-description"><li>low in saturate fat, high in unsaturated fat</li></div><li class="more">more...</li>');
			$('#header').html('Replacing: Soy sauce');
		
			addListener(this);
			
			currentAllergen = "soy sauce";
			
		});
	   });
	   
	function addListener(allergen){
	  $('.replacement').on('click', function() {
			var replacementName = this.innerHTML.split('<ul>')[0];
			var allergenClass = $('.'+allergen.className.split(" ")[1]);
			allergenClass.html(replacementName);	
			allergenClass.css('background-color', "lightgreen");
			allergenClass.css('color', "black");
    		setTimeout(complete1, 100);
    		function complete1() {
    			allergenClass.css('background-color', "white");
				allergenClass.css('color', "green");
    			setTimeout(complete2, 100);
    		}
    		function complete2() {
    			allergenClass.css('background-color', "lightgreen");
				allergenClass.css('color', "black");
    			setTimeout(complete3, 100);
    		}
			function complete1() {
    			allergenClass.css('background-color', "white");
				allergenClass.css('color', "green");
    			setTimeout(complete2, 100);
    		}
    		function complete3() {
    			allergenClass.css('background-color', "lightgreen");
				allergenClass.css('color', "black");
    		}	

    		// remove "selected" from all replacements
    		$(".rep-title").each( function() {
    			$(this).removeClass("selected");
    		});

    		// add class "selected"	to this replacement
    		$(this).find(".rep-title").addClass("selected");

	  });
	}
	
	function printRecipe(){
		recipeCSS = new String ('<link href="../stylesheets/styles-master.css" rel="stylesheet">');
		mainCSS = new String('<link href="../stylesheets/recipe_style.css" rel="stylesheet">');
		window.frames["print_frame"].document.body.innerHTML= recipeCSS + mainCSS + document.getElementById('mainColumnExceptPrintButton').innerHTML;
        window.frames["print_frame"].window.focus();
        window.frames["print_frame"].window.print();		
	}
	
	function resetChosenReplacement(){

		// remove "selected" from all replacements
		$(".rep-title").each( function() {
    			$(this).removeClass("selected");
    		});
		var allergenToReset;
		if(currentAllergen == "tofu"){
			allergenToReset = $('.tofu');
			allergenToReset.html('tofu');
		}else if(currentAllergen == "soy sauce"){
			allergenToReset = $('.soy_sauce');
			allergenToReset.html('soy sauce');
		}
		allergenToReset.css('background-color', "#ed6363");
		allergenToReset.css("color", "white");
		allergenToReset.css('font-weight', "normal");

	}


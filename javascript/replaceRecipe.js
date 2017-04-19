
	  var currentAllergen;
	  var tofuSelected = null; // THIS IS A STUPID BANDAID SOLUTION
	  var soySelected = null;
	
	  //when user clicks on tofu 
	  $(document).ready(function(){
		$(".tofu").click(function(){
			$('#default').html('');
			//check if list exists
			if($('#replacementList')){
				$('#replacementList').remove();
				$('#buttonSpace').remove();
			}
			var list = '<div id="replacementList"><ul><li class="replacement" id="azuki1"><div class="rep-title">azuki beans</div></li><li class="replacement" id="chickpea1"><div class="rep-title">chickpea and rice paste</div></li></ul></div>';
			var replaceButton = '<div id="buttonSpace"><br><button id="resetButton" type="button" class="btn btn-success btn-lg" onclick="resetChosenReplacement()" style="">Reset replacements for tofu</button></div>';
	
			$('#firstColumn').append(list+replaceButton);
			$('#azuki1').append('<ul><div class="rep-description"><li>- source of plentiful protein</li><li>- high in fiber</li></div>'
						+'<li class="more"><div class="tooltipDiv" >more.. '
						+'<span class="tooltiptext">helps to manage diabetes'
						+'<br>increases antioxidant intake'
						+'</span></div></li></ul>');
			
			$('#chickpea1').append('<ul><div class="rep-description"><li>- package of protein and vitamins</li><li>- keeps blood sugar levels stable</li></div>'
						+'<li class="more"><div class="tooltipDiv" >more.. '
						+'<span class="tooltiptext">aids in digestion'
						+'<br>increases the feeling of fullness</span></div></li></ul>');
			
			$('#header').html('Replacing: Tofu');
			
			addReplacementListener(this);
			addTooltipListener();
			currentAllergen = "tofu";

			if (tofuSelected != null) {
				console.log(".rep-title:contains('"+tofuSelected+"'')");
				var selectdiv = $(".rep-title:contains('"+tofuSelected+"')");
				console.log("div" + selectdiv);
				$(selectdiv).addClass("selected");
			}

		});

		
		$(".soy_sauce").click(function(){
			$('#default').html('');
			//check if list exists
			if($('#replacementList')){
				$('#replacementList').remove();
				$('#buttonSpace').remove();
			}
			var list = '<div id="replacementList"><ul><li class="replacement" id="coconut1"><div class="rep-title">coconut aminos</div></li><li class="replacement" id="canola1"><div class="rep-title">canola oil</div></li></ul></div>';
			var replaceButton = '<div id="buttonSpace"><br><button id="resetButton" type="button" class="btn btn-success btn-lg" onclick="resetChosenReplacement()" style="">Reset replacements for soy sauce</button></div>';
			$('#firstColumn').append(list+replaceButton);	
			$('#coconut1').append('<ul> <div class="rep-description"><li>- comes from the sap of coconut trees</li><li>- contains 17 amino acids</li></div>'
				+'<li class="more"><div class="tooltipDiv" >more.. '
				+'<span class="tooltiptext" id="d">reduces the risk of diabetes'
				+'<br>regulates cholesterol level'
				+'</li></ul>');
			
			$('#canola1').append('<ul> <div class="rep-description"><li>- low in saturate fat, high in unsaturated fat</li><li>- contains Omega-3 fatty acids</li></div>'
				+'<li class="more"><div class="tooltipDiv" >more..'
				+'<span class="tooltiptext">good for heart health'
				+'<br>lowers cholesterol level'
				+'</div></li></ul>');
			$('#header').html('Replacing: Soy sauce');
		
			addReplacementListener(this);
			addTooltipListener();
			currentAllergen = "soy sauce";


			if (soySelected != null) {
				console.log(".rep-title:contains('"+soySelected+"'')");
				var selectdiv = $(".rep-title:contains('"+soySelected+"')");
				console.log("div" + selectdiv);
				$(selectdiv).addClass("selected");
			}
			
		});
	   });

	function addTooltipListener(){
$		('.tooltiptext').click(function(e){
			e.stopPropagation();
		});
		
	}	
	   
	function addReplacementListener(allergen){
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
    		function complete3() {
    			allergenClass.css('background-color', "white");
				allergenClass.css('color', "green");
    		}	
    		// remove "selected" from all replacements
    		$(".rep-title").each( function() {
    			$(this).removeClass("selected");
    		});

    		// add class "selected"	to this replacement
    		$(this).find(".rep-title").addClass("selected");

			if ($("#header:contains('Tofu')").length > 0 ) {
    			tofuSelected = $(this).find(".rep-title").text();	
    		}	
    		else {
    			soySelected = $(this).find(".rep-title").text();
    		}
    		console.log("tofu select" + tofuSelected);
    		console.log("soy select" + soySelected);
	  });
	}
	
	function printRecipe(){
		var x = $('.tofu')[0];
		var y = $('.soy_sauce')[0];
		if (x.innerHTML==='tofu' || y.innerHTML==='soy sauce'){
			alert("You haven't replaced all allergens yet!");
			/*  
			// The confirm dialog only has 'ok' and 'cancel' buttons - the 'ok' button might be confusing.
			if (confirm("You haven't replaced all allergens. Are you sure you would like to print?")){
				actuallyPrint();
			} 
			*/
		} else {
			actuallyPrint();
        }	
	}

	function actuallyPrint(){
		var recipeCSS = new String ('<link href="https://kar-moore.github.io/tiny-froyo/stylesheets/styles-master.css" rel="stylesheet" type="text/css" >');
		var mainCSS = new String('<link href="https://kar-moore.github.io/tiny-froyo/stylesheets/recipe_style.css" rel="stylesheet" type="text/css" >');
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
			tofuSelected = null;
		}else if(currentAllergen == "soy sauce"){
			allergenToReset = $('.soy_sauce');
			allergenToReset.html('soy sauce');
			soySelected = null;
		}
		allergenToReset.css('background-color', "#ed6363");
		allergenToReset.css("color", "white");
		allergenToReset.css('font-weight', "normal");
	}



	//when user clicks on tofu 
	  $(document).ready(function(){
		$(".tofu").click(function(){
			$('#default').html('');
			//check if list exists
			if($('#replacementList')){
				$('#replacementList').remove();
			}
			var list = '<div id="replacementList"><li class="replacement" >azuki beans</li><li class="replacement" >chickpea and rice paste</li></div>';
			$('#firstColumn').append(list);
			$('#header').html('Tofu');
			
			addListener(this);
		
			
		});
		
		$(".soy_sauce").click(function(){
			$('#default').html('');
			//check if list exists
			if($('#replacementList')){
				$('#replacementList').remove();
			}
			var list = '<div id="replacementList"><li class="replacement">coconut aminos</li><li class="replacement">canola oil</li></div>';
			$('#firstColumn').append(list);		
			$('#header').html('Soy sauce');

			addListener(this);
			
			
		});
	   });
	   
	function addListener(allergen){
	  $('.replacement').on('click', function() {
			var replacementName = this.innerHTML;
			var allergenClass = $('.'+allergen.className.split(" ")[1]);
			allergenClass.html(replacementName);
			allergenClass.css('background-color', "lightgreen");
	  });
	}
	
	function printRecipe(){
		recipeCSS = new String ('<link href="../stylesheets/styles-master.css" rel="stylesheet">');
		mainCSS = new String('<link href="../stylesheets/recipe_style.css" rel="stylesheet">');
		window.frames["print_frame"].document.body.innerHTML= recipeCSS + mainCSS + document.getElementById('mainColumn').innerHTML;
        window.frames["print_frame"].window.focus();
        window.frames["print_frame"].window.print();
		
	}
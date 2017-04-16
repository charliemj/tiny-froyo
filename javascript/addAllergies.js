
$(document).ready(function(){
    var allergiesList = [];

    // Save data to sessionStorage
    // sessionStorage.setItem('allergies', JSON.stringify(allergiesList));

    // Get saved data from sessionStorage
    var data = JSON.parse(sessionStorage.getItem('allergies'));
    if(data){
        allergiesList = data;
    }

    var updateAllergies = function(){
        $("#myAllergies").empty();//so we don't add repeats
        
        for(allergy of allergiesList){
            $("#myAllergies").append('<div class="allergyRow" id="'+allergy+'"Row"><p class="allergyName">'+allergy+'</p><button class="deleteButton" id="'+allergy+'"'+'type="button">Delete</button></div>');
        }
        sessionStorage.setItem('allergies', JSON.stringify(allergiesList));
    };

    if (data){
        updateAllergies(); //need this to load any existing allergies
    }
    //deletes allergy when delete button is clicked
    $("body").on("click", ".deleteButton",function(){//http://stackoverflow.com/questions/1359018/in-jquery-how-to-attach-events-to-dynamic-html-elements
        //remove that allergy from the list
        allergiesList.splice(allergiesList.indexOf(this.id),1); //https://bytearcher.com/articles/how-to-delete-value-from-array/
        updateAllergies();
    });



    //add allergies from common allergy list
    $("body").on("click", "#common",function(){
         var checked = $("#addCommon").children().children("input:checked").map(function() {
            return this.id;
        }).get(); //gets all the values of the checked boxes
        
        for(allergy of checked){
            if (!allergiesList.includes(allergy)){ //don't add repeats
                allergiesList.push(allergy); 
            }
        }

        $("#addCommon").children().children("input:checked").prop("checked", false); //unchecks all boxes

        updateAllergies();
    });


    //Add allergies by pressing enter button
    $('body').on("keydown", function(e){ //http://stackoverflow.com/questions/16011312/execute-function-on-enter-key
        if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
            var newAllergy = $("#newAllergy").val();
            $("#newAllergy").val("");
            if(newAllergy !== ""){
                console.log(newAllergy);
                if (!allergiesList.includes(newAllergy)){ //don't add repeats
                    //add new allergy
                    allergiesList.push(newAllergy);
                    updateAllergies();
                }
            }
        }
    });


    //Add allergies by pressing add button
    $('body').on("click","#submitNewAllergy", function(){
        var newAllergy = $("#newAllergy").val();
        $("#newAllergy").val("");
        if(newAllergy !== ""){
            if (!allergiesList.includes(newAllergy)){ //don't add repeats
                //add new allergy
                allergiesList.push(newAllergy);
                updateAllergies();
            }
        }
    });
    
});//keep at bottom of the file
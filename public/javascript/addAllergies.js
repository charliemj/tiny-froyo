//Strategy
//make a model for the allergy list
//make a div where allergies will be displayed
//each allegry will have an edit and delete button next to it
//be able to add a new allergy.
//  - have a text input and add button
//  - adding will update the model and we go through the model and append with jquery a new allergy object



$(document).ready(function(){
    var allergiesList = ["eggs"];
    for(allergy of allergiesList){
        $("#myAllergies").append("<p>"+allergy+"</p>");
    }
    
    $("#submitButton").click(function(){
        var newAllergy = $("#newAllergy").val();
        allergiesList.push(newAllergy);
        $("#myAllergies").empty();//so we don't add repeats
        for(allergy of allergiesList){
            console.log(allergy);
            $("#myAllergies").append("<p>"+allergy+"</p>");
        }
        return false;//so that page doesn't refresh and clear the page
    });


});//keep at bottom of the file
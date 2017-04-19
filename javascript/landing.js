$(document).ready(function(){
    //Add allergies by pressing enter button
    $(document).on("keydown", function(e){ //http://stackoverflow.com/questions/16011312/execute-function-on-enter-key
        if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
            window.location.href = "index.html";
        }
    });
});
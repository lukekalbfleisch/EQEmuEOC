function RaceSearch(Data) {
    u = "Races";
    $("#" + u).html("<i class='fa fa-spinner fa-spin' style='font-size:80px'></i>");
    $.ajax({
        url: "ajax.php?M=race_viewer&do_race_search=" + Data,
        context: document.body
    }).done(function(e) {
        $("#" + u).html(e);
    });
}

$(function() {
    $("img.lazy").lazyload();
}); 

$(document).ready(function() { 
    $("input").change(function() {
        $(this).css("border-color", "rgba(82, 168, 236, 0.8)");
    });
    $("select").change(function() {
        $(this).css("border-color", "rgba(82, 168, 236, 0.8)");
    });
    $("select").each(function() {
        $(this).addClass("form-control input-circle");
    });
    $("input").each(function() {
        $(this).addClass("form-control input-circle");
    }); 
});

function DoRaceFileGen(ID){
	if(document.getElementById("tracker_" + ID)){
		if(document.getElementById("char_string_data_" + ID).value == ","){
			$.notific8("No data exists for Race ID " + ID + " or it is already globally loaded...", {  heading: "Race Viewer",  theme: "ruby", life: 3000 });
		}
		else{
			if(document.getElementById("tracker_" + ID).value == 0){
				//alert("hi");
				document.getElementById(ID).className = "btn btn-default GenData";
				document.getElementById(ID).setAttribute("style","opacity:0.5;");
				document.getElementById("tracker_" + ID).value = 1;
			}
			else if(document.getElementById("tracker_" + ID).value == 1){
				//alert("hi2");
				document.getElementById(ID).className = "btn btn-default ";
				document.getElementById(ID).setAttribute("style","opacity:1;");
				document.getElementById("tracker_" + ID).value = 0;
			}
			var elements = document.getElementsByClassName("GenData");
			var names = "";
			var intn = 0;
			for(var i=0; i<elements.length; i++) {
				names = names + document.getElementById("char_string_data_" + elements[i].id).value + "\n";
				intn++;
			}
			document.getElementById("genracefiledata").value = intn + "\n" + names;
		}
	}
}
$(document).ready(function () {
    $('#register').click( function() {
        var formData = $(this).serialize();
        $.get('../json/drink-sport.json', formData, processData);
        function processData(data) {
            console.log(data);
        }//end process data
        
});  //end click

// $('#register').click( function() {
//     $.ajax({
//         url: 'http://www.nashvillecoder.me/joeshep/bats-beer-brats.json',
//         type: 'post',
//         dataType: 'json',
//         data: $('#signup_form').serialize(),
//         success: function(data) {
//                   alert("yay");
//                  }
//     });
// });
}); // end ready


// The league 
// 0-team name, 1-Manager, 2-Manager Last, 3-Phone, 4-Email, 5-Zip, 6-Sponsor, 7-Wins, 8-Losses, 9-Percent
var league2d = [
["Ardvarks", "Christopher", "Fryman", "9016045976", "farfromguam@gmail.com", "37210", "Fryman and Assoiciates", "W", "L", "%"],
["Boss Hoggs", "Joe", "Shepherd", "6154840875", "shepright@comcast.net", "37205", "Brewhouse West", "W", "L", "%"]
]

// add team to league
function addTeam() {
    league2d.push(
        [
        $("#inputTeamName").val(),
        $("#inputMgrFirst").val(),
        $("#inputMgrLast").val(),
        $("#inputMgrPhone").val(),
        $("#inputMgrEmail").val(),
        $("#inputSponsor").val(),
        "W",
        "L",
        "%",
        ]
    );
    alert("Thank you, " + $("#inputMgrFirst").val() + ', For registering your team "' + $("#inputTeamName").val() + '"');
    
    clearForm();
    
}; // end add team



function clearForm() {
    $(".teamImput").each(function () {
        $(this).val("");
    });
};  

function manage() {
    console.log("You are now logged in");
    $(".manage").css("display", "inline");
}

function startSeason() {
    $(".playing").css("display", "none");
    $(".standings").css("display", "inline");
}

// // reusable sort functions, and sort by any field
// // http://stackoverflow.com/questions/979256/how-to-sort-an-array-of-javascript-objects
// var sort_by = function (field, reverse, primer) {
//     var key = primer ? function (x) {
//             return primer(x[field]);
//         } : function (x) {
//             return x[field];
//         }
//     return function (a, b) {
//         var A = key(a),
//             B = key(b);
//         return (A < B ? -1 : (A > B ? 1 : 0)) * [1, -1][+ !! reverse];
//     }
// }

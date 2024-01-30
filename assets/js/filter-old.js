const rakyat = "rakyat", perniagaan = "perniagaan", komuniti = "komuniti";

// function mapping_profile_rakyat(x, input_profile) {
//     if (input_profile == "") {
//         return true
//     }
//     else if ("B40 M40 T20".indexOf(input_profile) >= 0) {
//         var curResult;
//         if (x.personalEarning == "NA") {
//             switch (input_profile) {
//                 case "B40":
//                     curResult = x.householdEarning.indexOf("I8LO1") >= 0 || x.householdEarning.indexOf("I8LO2") >= 0 || x.householdEarning.indexOf("I8LO3") >= 0 || x.householdEarning.indexOf("I8LO4") >= 0
//                     break;
//                 case "M40":
//                     curResult = x.householdEarning.indexOf("I8MID1") >= 0 || x.householdEarning.indexOf("I8MID2") >= 0
//                     break;
//                 case "T20":
//                     curResult = x.householdEarning.indexOf("I8HI") >= 0
//                     break;
//             }
//             return curResult || x.householdEarning == "NA" || x.householdEarning == ""
//         }
//         else {
//             switch (input_profile) {
//                 case "B40":
//                     curResult = x.personalEarning.indexOf("I7LO1") >= 0 || x.personalEarning.indexOf("I7LO2") >= 0 || x.personalEarning.indexOf("I7LO3") >= 0 || x.personalEarning.indexOf("I7LO4") >= 0
//                     break;
//                 case "M40":
//                     curResult = x.personalEarning.indexOf("I7MID1") >= 0 || x.personalEarning.indexOf("I7MID2") >= 0
//                     break;
//                 case "T20":
//                     curResult = x.personalEarning.indexOf("I7HI") >= 0
//                     break;
//             }
//             return curResult || x.personalEarning == "NA" || x.personalEarning == ""
//         }
//     }
//     else if (input_profile == "I1FML") { return x.gender.indexOf(input_profile) >= 0 || x.gender == "NA" }

//     else if (input_profile == "I3OKU") { return x.disability.indexOf(input_profile) >= 0 || x.disability == "NA" }

//     else if ("I6UNE I6STD I6RTR I6CIV".indexOf(input_profile) >= 0) {
//         return x.employment.indexOf(input_profile) >= 0 || x.employment == "NA"
//     }

// }

// function mapping_profile_perniagaan(x, input_profile) {
//     if (input_profile == "") {
//         return true
//     }
//     else if ("B2ENT B2MIC B2SME B2LAR".indexOf(input_profile) >= 0) {
//         return x.size.indexOf(input_profile) >= 0 || x.size == "NA"
//     }
//     else if ("B3BUM B3NBUM".indexOf(input_profile) >= 0) {
//         return x.type.indexOf(input_profile) >= 0 || x.type == "NA"
//     }
//     else if ("B1AGRI".indexOf(input_profile) >= 0) {
//         return x.industry.indexOf(input_profile) >= 0 || x.industry == "NA"
//     }

// }

function reset_selectOpt(){
    var selectOpts = document.getElementsByClassName("dropbtn");
	for (i = 0; i < selectOpts.length; i++) {
        selectOpts[i].value = "";
	}
}

function filtering_rakyat(json_data, input_need, input_profile) {
    if (input_need == ""){
        return json_data.individual.filter( x => x.profile.indexOf(input_profile) >= 0)
    }
    return json_data.individual.filter(x => (x.profile.indexOf(input_profile) >= 0) && (x.needs.indexOf(input_need) >= 0));
}

// function filtering_rakyat(json_data, input_need) {
//     return json_data.individual.filter(x => x.needs.indexOf(input_need) >= 0);
// }

// function filtering_perniagaan(json_data, input_need) {
//     return json_data.business.filter(x => x.needs.indexOf(input_need) >= 0);
// }

function filtering_perniagaan(json_data, input_need, input_profile) {
    if (input_need == ""){
        return json_data.business.filter(x => x.profile.indexOf(input_profile) >= 0)
    }
    return json_data.business.filter(x => (x.profile.indexOf(input_profile) >= 0) && (x.needs.indexOf(input_need) >= 0));
}

function filtering_komuniti(json_data, input_need) {
    return json_data.community.filter(x => x.category.indexOf(input_need) >= 0);
}

window.onload = function () {
    var url = document.location.href.split('?'),
        params, result
    if (url.length > 1) {
        params = url[1].split("&")
        switch (params[0]) {
            case rakyat:
                document.getElementById("rakyatBtn").click();
                document.getElementById("keperluanRakyatOpt").value = params[1];
                // result = filtering_rakyat(jData, params[1]);
                result = filtering_rakyat(jData, params[1], "");
                show_result(result, is_english)
                break;
            case perniagaan:
                document.getElementById("perniagaanBtn").click();
                document.getElementById("keperluanPerniaOpt").value = params[1];
                result = filtering_perniagaan(jData, params[1], "");
                // result = filtering_perniagaan(jData, params[1]);
                show_result(result, is_english)
                break;
            case komuniti:
                document.getElementById("komunitiBtn").click();
                document.getElementById("keperluanKomOpt").value = params[1];
                result = filtering_komuniti(jData, params[1]);
                show_result(result, is_english)
                break;
        }
    }
    else {
        document.getElementById("rakyatBtn").click()
    }
}

// jquery
$(function () {
    var input_profile, input_need, result;
    
    $("#profilRakyatOpt, #keperluanRakyatOpt").change(function () {
    // $("#keperluanRakyatOpt").change(function () {
        switch (this.id) {
            case "profilRakyatOpt":
                input_profile = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                break;
            case "keperluanRakyatOpt":
                input_profile = $("#profilRakyatOpt option:selected").val()
                input_need = $(this).val();
                break;
        }
        result = filtering_rakyat(jData, input_need, input_profile);
        // result = filtering_rakyat(jData, input_need);
        show_result(result, is_english);
    });

    $("#profilPerniaOpt, #keperluanPerniaOpt").change(function () {
    // $("#keperluanPerniaOpt").change(function () {
        switch (this.id) {
            case "profilPerniaOpt":
                input_profile = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                break;
            case "keperluanPerniaOpt":
                input_profile = $("#profilPerniaOpt option:selected").val()
                input_need = $(this).val();
                break;
        }
        result = filtering_perniagaan(jData, input_need, input_profile);
        // result = filtering_perniagaan(jData, input_need);
        show_result(result, is_english);
    });

    $("#keperluanKomOpt").change(function () {
        input_need = $("#keperluanKomOpt option:selected").val();
        result = filtering_komuniti(jData, input_need);
        show_result(result, is_english);
    })
});

function show_result(result, is_english) {

    if (result.length == 0) {
        // is_english = "Perniagaan".indexOf(document.getElementById("perniagaanBtn").innerText) < 0
        var to_display = "Hasil Tidak Dijumpai"
        if (is_english) to_display = "No Results Found"

        $("#displayList").html('\
        <div class="tablinks container-b-outer container-b-button-outer">\
            <div  style="text-align: center;" class="container-b-content">'+to_display+'</div>\
        </div>')
    }
    else{
        // result is an array of obj
        $("#displayList").html(result.map(x => {
            return '<div class="tablinks container-b-outer container-b-button-outer">\
                        <div class="container-b-title" style="margin-top:-15px;">\
                            <h3>'+ x.title +'</h3>\
                        </div>\
                        <div  class="container-b-content">'
                        + x.description + 
                        '</div>\
                    </div>\
                    <div class="tablinks container-b-button-inner container-b-content" >\
                        <div class="container-b-content container-b-inner" style="padding-top: -10px margin-bottom: auto color: #ffffff;">'+
                x.hashtag +
                '</div>\
                    </div>';
        }).join(''));
    }
}
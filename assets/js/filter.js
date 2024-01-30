const rakyat = "rakyat", perniagaan = "perniagaan", komuniti = "komuniti";

function reset_selectOpt() {
    var selectOpts = document.getElementsByClassName("dropbtn");
    for (i = 0; i < selectOpts.length; i++) {
        selectOpts[i].value = "";
    }
}

function filtering_rakyat(json_data, input_need, input_profile, initiative_status) {
    if (input_need == "" && initiative_status == "") {
        return json_data.individual.filter(x => x.profile.indexOf(input_profile) >= 0)
    }
    // console.log("all 3 have something " + initiative_status + " " + input_profile )
    return json_data.individual.filter(x => (x.profile.indexOf(input_profile) >= 0) && (x.needs.indexOf(input_need) >= 0) && (x.status.indexOf(initiative_status) >= 0));
}

function filtering_perniagaan(json_data, input_need, input_profile, initiative_status) {
    if (input_need == "" && initiative_status == "") {
        return json_data.business.filter(x => x.profile.indexOf(input_profile) >= 0)
    }
    // console.log("all 3 have something " + initiative_status + " " + input_profile )
    return json_data.business.filter(x => (x.profile.indexOf(input_profile) >= 0) && (x.needs.indexOf(input_need) >= 0) && (x.status.indexOf(initiative_status) >= 0));
}

function filtering_komuniti(json_data, input_need, input_profile, initiative_status) {
    // if(json_data.community.needs){
        // return json_data.community.filter(x => x.needs.indexOf(input_need) >= 0);

        if(input_need == "" && initiative_status == ""){
        return json_data.community.filter(x => x.profile.indexOf(input_profile) >= 0);
        }

        return json_data.community.filter(x =>(x.profile.indexOf(input_profile) >= 0)&& x.needs.indexOf(input_need) >= 0 && (x.status.indexOf(initiative_status) >= 0));

    
    // else {return json_data.community}
}

function update_banner_rakyat(is_english) {
    var en = "Upcoming Rakyat Assistance",
        bm = "Bantuan Rakyat Yang Akan Datang"
    if (!rakyat_flag) {
        if (is_english) {
            $("#banner-title").html('\
        <div class="col-md-12">\
            <div class="block text-center">\
            <span class="text-white"></span>\
            <h1 class="text-capitalize mb-4" style="color: #100052;">'+ en + '</h1>\
            </div>\
        </div>\
        ')
        }
        else {
            $("#banner-title").html('\
        <div class="col-md-12">\
            <div class="block text-center">\
              <span class="text-white"></span>\
              <h1 class="text-capitalize mb-4" style="color: #100052;">'+ bm + '</h1>\
            </div>\
        </div>\
        ')
        }
    }
    else {
        rakyat_flag = false
    }
}

function update_banner_perniagaan(is_english) {
    var en = "Upcoming Business Assistance",
        bm = "Bantuan Perniagaan Yang Akan Datang"
    if (!biz_flag) {
        if (is_english) {
            $("#banner-title").html('\
            <div class="col-md-12">\
                <div class="block text-center">\
                <span class="text-white"></span>\
                <h1 class="text-capitalize mb-4" style="color: #100052;">'+ en + '</h1>\
                </div>\
            </div>\
            ')
        }
        else {
            $("#banner-title").html('\
            <div class="col-md-12">\
                <div class="block text-center">\
                <span class="text-white"></span>\
                <h1 class="text-capitalize mb-4" style="color: #100052;">'+ bm + '</h1>\
                </div>\
            </div>\
            ')
        }
    }
    else{
        biz_flag=false
    }
}

function update_banner_komuniti(is_english) {
    var en = "Upcoming Community Assistance",
        bm = "Bantuan Komuniti Yang Akan Datang"
    if (is_english) {
        $("#banner-title").html('\
        <div class="col-md-12">\
            <div class="block text-center">\
              <span class="text-white"></span>\
              <h1 class="text-capitalize mb-4" style="color: #100052;">'+ en + '</h1>\
            </div>\
        </div>\
        ')
    }
    else {
        $("#banner-title").html('\
        <div class="col-md-12">\
            <div class="block text-center">\
              <span class="text-white"></span>\
              <h1 class="text-capitalize mb-4" style="color: #100052;">'+ bm + '</h1>\
            </div>\
        </div>\
        ')
    }
}

window.onload = function () {
    var url = document.location.href.split('?'),
        result
    // var result
    if (url.length > 1) {
        params = url[1].split("&")
        document.getElementById("komunitiBtn").click();
        document.getElementById("keperluanKomOpt").value = params[1];
        // result = filtering_komuniti(jData, params[1]);
        // show_result(result, is_english)
    }
    else{
        if (params) {
            // params = url[1].split("&")
            switch (params[0,1]) {
                case rakyat:
                    document.getElementById("rakyatBtn").click();
                    document.getElementById("keperluanRakyatOpt").value = params[1];
                    // result = filtering_rakyat(jData, params[1]);
                    result = filtering_rakyat(jData, params[1], "","");
                    show_result(result, is_english)
                    break;
                case rakyat,"I-FIN":
                    document.getElementById("rakyatBtn-fin").click();
                    document.getElementById("keperluanRakyatOpt").value = params[1];
                    // result = filtering_rakyat(jData, params[1]);
                    result = filtering_rakyat(jData, params[1], "","");
                    show_result(result, is_english)
                    break;

                case rakyat ,"I-EDU":
                    document.getElementById("rakyatBtn-edu").click();
                    document.getElementById("keperluanRakyatOpt").value = params[1];
                    // result = filtering_rakyat(jData, params[1]);
                    result = filtering_rakyat(jData, params[1], "", "");
                    show_result(result, is_english)
                    break;

                case rakyat, "I-HEA":
                    document.getElementById("rakyatBtn-hea").click();
                    document.getElementById("keperluanRakyatOpt").value = params[1];
                    // result = filtering_rakyat(jData, params[1]);
                    result = filtering_rakyat(jData, params[1], "", "");
                    show_result(result, is_english)
                    break;

                case rakyat, "I-EMP":
                    document.getElementById("rakyatBtn-emp").click();
                    document.getElementById("keperluanRakyatOpt").value = params[1];
                    // result = filtering_rakyat(jData, params[1]);
                    result = filtering_rakyat(jData, params[1], "", "");
                    show_result(result, is_english)
                    break;

                case rakyat, "I-SOC":
                    document.getElementById("rakyatBtn-soc").click();
                    document.getElementById("keperluanRakyatOpt").value = params[1];
                    // result = filtering_rakyat(jData, params[1]);
                    result = filtering_rakyat(jData, params[1], "", "");
                    show_result(result, is_english)
                    break;

                case rakyat, "I-VUL":
                    document.getElementById("rakyatBtn-vul").click();
                    document.getElementById("keperluanRakyatOpt").value = params[1];
                    // result = filtering_rakyat(jData, params[1]);
                    result = filtering_rakyat(jData, params[1], "", "");
                    show_result(result, is_english)
                    break;

                case rakyat, "I-TAX":
                    document.getElementById("rakyatBtn-tax").click();
                    document.getElementById("keperluanRakyatOpt").value = params[1];
                    // result = filtering_rakyat(jData, params[1]);
                    result = filtering_rakyat(jData, params[1], "", "");
                    show_result(result, is_english)
                    break;
                    
                case perniagaan:
                    document.getElementById("perniagaanBtn").click();
                    document.getElementById("keperluanPerniaOpt").value = params[1];
                    result = filtering_perniagaan(jData, params[1], "","");
                    // result = filtering_perniagaan(jData, params[1]);
                    show_result(result, is_english)
                    break;

                case perniagaan, "B-AGR":
                    document.getElementById("perniagaanBtn-agr").click();
                    document.getElementById("keperluanPerniaOpt").value = params[1];
                    result = filtering_perniagaan(jData, params[1], "","");
                    // result = filtering_perniagaan(jData, params[1]);
                    show_result(result, is_english)
                    break;

                case perniagaan, "B-CRT":
                    document.getElementById("perniagaanBtn-crt").click();
                    document.getElementById("keperluanPerniaOpt").value = params[1];
                    result = filtering_perniagaan(jData, params[1], "","");
                    // result = filtering_perniagaan(jData, params[1]);
                    show_result(result, is_english)
                    break;

                case perniagaan, "B-EDU":
                    document.getElementById("perniagaanBtn-edu").click();
                    document.getElementById("keperluanPerniaOpt").value = params[1];
                    result = filtering_perniagaan(jData, params[1], "","");
                    // result = filtering_perniagaan(jData, params[1]);
                    show_result(result, is_english)
                    break;

                case perniagaan, "B-FAC":
                    document.getElementById("perniagaanBtn-fac").click();
                    document.getElementById("keperluanPerniaOpt").value = params[1];
                    result = filtering_perniagaan(jData, params[1], "","");
                    // result = filtering_perniagaan(jData, params[1]);
                    show_result(result, is_english)
                    break;

                case perniagaan, "B-FIN":
                    document.getElementById("perniagaanBtn-fin").click();
                    document.getElementById("keperluanPerniaOpt").value = params[1];
                    result = filtering_perniagaan(jData, params[1], "","");
                    // result = filtering_perniagaan(jData, params[1]);
                    show_result(result, is_english)
                    break;

                case perniagaan, "B-INV":
                    document.getElementById("perniagaanBtn-inv").click();
                    document.getElementById("keperluanPerniaOpt").value = params[1];
                    result = filtering_perniagaan(jData, params[1], "","");
                    // result = filtering_perniagaan(jData, params[1]);
                    show_result(result, is_english)
                    break;

                case perniagaan, "B-MKT":
                    document.getElementById("perniagaanBtn-inv").click();
                    document.getElementById("keperluanPerniaOpt").value = params[1];
                    result = filtering_perniagaan(jData, params[1], "","");
                    // result = filtering_perniagaan(jData, params[1]);
                    show_result(result, is_english)
                    break;

                case perniagaan, "B-EMP":
                    document.getElementById("perniagaanBtn-emp").click();
                    document.getElementById("keperluanPerniaOpt").value = params[1];
                    result = filtering_perniagaan(jData, params[1], "","");
                    // result = filtering_perniagaan(jData, params[1]);
                    show_result(result, is_english)
                    break;

                case perniagaan, "B-TAX":
                    document.getElementById("perniagaanBtn-tax").click();
                    document.getElementById("keperluanPerniaOpt").value = params[1];
                    result = filtering_perniagaan(jData, params[1], "","");
                    // result = filtering_perniagaan(jData, params[1]);
                    show_result(result, is_english)
                    break;

                case perniagaan, "B-TOU":
                    document.getElementById("perniagaanBtn-tou").click();
                    document.getElementById("keperluanPerniaOpt").value = params[1];
                    result = filtering_perniagaan(jData, params[1], "","");
                    // result = filtering_perniagaan(jData, params[1]);
                    show_result(result, is_english)
                    break;
                // 
                case komuniti, "ESG":
                    document.getElementById("komunitiBtn-esg").click();
                    document.getElementById("keperluanKomOpt").value = params[1];
                    result = filtering_komuniti(jData, params[1], "","");
                    show_result(result, is_english)
                    break;
                case komuniti, "INF":
                    document.getElementById("komunitiBtn-inf").click();
                    document.getElementById("keperluanKomOpt").value = params[1];
                    result = filtering_komuniti(jData, params[1], "","");
                    show_result(result, is_english)
                    break;
                case komuniti, "NGO":
                    document.getElementById("komunitiBtn-ngo").click();
                    document.getElementById("keperluanKomOpt").value = params[1];
                    result = filtering_komuniti(jData, params[1], "","");
                    show_result(result, is_english)
                    break;
                case komuniti, "OA":
                    document.getElementById("komunitiBtn-oa").click();
                    document.getElementById("keperluanKomOpt").value = params[1];
                    result = filtering_komuniti(jData, params[1], "","");
                    show_result(result, is_english)
                    break;
                case komuniti, "SS":
                    document.getElementById("komunitiBtn-ss").click();
                    document.getElementById("keperluanKomOpt").value = params[1];
                    result = filtering_komuniti(jData, params[1], "","");
                    show_result(result, is_english)
                    break;
                case komuniti, "SI":
                    document.getElementById("komunitiBtn-si").click();
                    document.getElementById("keperluanKomOpt").value = params[1];
                    result = filtering_komuniti(jData, params[1], "","");
                    show_result(result, is_english)
                    break;
                case komuniti, "BEL":
                    document.getElementById("komunitiBtn-bel").click();
                    document.getElementById("keperluanKomOpt").value = params[1];
                    result = filtering_komuniti(jData, params[1], "","");
                    show_result(result, is_english)
                    break;
                case komuniti, "DEV":
                    document.getElementById("komunitiBtn-dev").click();
                    document.getElementById("keperluanKomOpt").value = params[1];
                    result = filtering_komuniti(jData, params[1], "","");
                    show_result(result, is_english)
                    break;
            }
        }
        else {
            document.getElementById("rakyatBtn").click()
        }
    }
}

// jquery
$(function () {
    var input_profile, input_need, result, initiative_status;
    // rakyat filtering function by user input
    $("#profilRakyatOpt, #profilRakyatOpt-fin, #profilRakyatOpt-edu, #profilRakyatOpt-hea, #profilRakyatOpt-emp, #profilRakyatOpt-soc, #profilRakyatOpt-vul, #profilRakyatOpt-tax, #keperluanRakyatOpt, #ini-status-rakyat, #ini-status-rakyat-fin, #ini-status-rakyat-edu, #ini-status-rakyat-hea, #ini-status-rakyat-emp, #ini-status-rakyat-soc, #ini-status-rakyat-vul, #ini-status-rakyat-tax").change(function () {
        // $("#keperluanRakyatOpt").change(function () {
        switch (this.id) {
            
            // case "profilRakyatOpt":
            //     input_profile = $(this).val()
            //     input_need = $("#keperluanRakyatOpt option:selected").val();
            //     initiative_status = $("#ini-status-rakyat option:selected").val();
            //     break;
            
            // add category need to add new filter here
            case "profilRakyatOpt-fin":
                input_profile = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                initiative_status = $("#ini-status-rakyat-fin option:selected").val();
                break;
            case "profilRakyatOpt-edu":
                input_profile = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                initiative_status = $("#ini-status-rakyat-edu option:selected").val();
                break;
            case "profilRakyatOpt-hea":
                input_profile = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                initiative_status = $("#ini-status-rakyat-hea option:selected").val();
                break;
            case "profilRakyatOpt-emp":
                input_profile = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                initiative_status = $("#ini-status-rakyat-emp option:selected").val();
                break;
            case "profilRakyatOpt-soc":
                input_profile = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                initiative_status = $("#ini-status-rakyat-soc option:selected").val();
                break;
            case "profilRakyatOpt-vul":
                input_profile = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                initiative_status = $("#ini-status-rakyat-vul option:selected").val();
                break;
             case "profilRakyatOpt-tax":
                input_profile = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                initiative_status = $("#ini-status-rakyat-tax option:selected").val();
                break;

            case "ini-status-rakyat-fin":
                initiative_status = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                input_profile = $("#profilRakyatOpt-fin option:selected").val();
                break;

            case "ini-status-rakyat-edu":
                initiative_status = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                input_profile = $("#profilRakyatOpt-edu option:selected").val();
                break;

            case "ini-status-rakyat-hea":
                initiative_status = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                input_profile = $("#profilRakyatOpt-hea option:selected").val();
                break;

            case "ini-status-rakyat-emp":
                initiative_status = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                input_profile = $("#profilRakyatOpt-emp option:selected").val();
                break;

            case "ini-status-rakyat-soc":
                initiative_status = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                input_profile = $("#profilRakyatOpt-soc option:selected").val();
                break;
            
            case "ini-status-rakyat-vul":
                initiative_status = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                input_profile = $("#profilRakyatOpt-vul option:selected").val();
                break;

            case "ini-status-rakyat-tax":
                initiative_status = $(this).val()
                input_need = $("#keperluanRakyatOpt option:selected").val();
                input_profile = $("#profilRakyatOpt-tax option:selected").val();
                break;

            // case "ini-status-rakyat":
            //     initiative_status = $(this).val()
            //     input_need = $("#keperluanRakyatOpt option:selected").val();
            //     input_profile = $("#profilRakyatOpt option:selected").val();
            //     break;
            case "keperluanRakyatOpt":
                input_profile = $("#profilRakyatOpt option:selected").val()
                input_need = $(this).val();
                switch ($("#keperluanRakyatOpt option:selected").val()) {
                    case "I-FIN":
                        // window.location.replace("./rakyat.html");
                        window.location.href = "./rakyat-kewangan.html"
                        break;
                    case "I-HEA":
                        // window.location.replace("./rakyat.html");
                        window.location.href = "./rakyat-health.html"
                        break;
                    case "I-EMP":
                        // window.location.replace("./rakyat.html");
                        window.location.href = "./rakyat-employment.html"
                        break;
                    case "I-EDU":
                        // window.location.replace("./rakyat.html");
                        window.location.href = "./rakyat-education.html"
                        break;
                    case "I-VUL":
                        // window.location.replace("./rakyat.html");
                        window.location.href = "./rakyat-vulnerables.html"
                        break;
                    case "I-SOC":
                        // window.location.replace("./rakyat.html");
                        window.location.href = "./rakyat-social.html"
                        break;
                    case "I-TAX":
                        // window.location.replace("./rakyat.html");
                        window.location.href = "./rakyat-tax.html"
                        break;
                }
                break;
        }
        result = filtering_rakyat(jData, input_need, input_profile, initiative_status);
        // result = filtering_rakyat(jData, input_need);
        show_result(result, is_english);
    });
    // perniagaan filter by user input
    $("#profilPerniaOpt, #profilPerniaOpt-agr, #profilPerniaOpt-crt, #profilPerniaOpt-edu, #profilPerniaOpt-fac, #profilPerniaOpt-fin, #profilPerniaOpt-inv, #profilPerniaOpt-mkt, #profilPerniaOpt-emp, #profilPerniaOpt-tax, #profilPerniaOpt-tou, #keperluanPerniaOpt, #ini-status-perniagaan, #ini-status-perniagaan-agr,#ini-status-perniagaan-crt, #ini-status-perniagaan-edu, #ini-status-perniagaan-fac, #ini-status-perniagaan-fin, #ini-status-perniagaan-inv, #ini-status-perniagaan-mkt, #ini-status-perniagaan-emp, #ini-status-perniagaan-tax, #ini-status-perniagaan-tou").change(function () {
        // $("#keperluanPerniaOpt").change(function () {
        switch (this.id) {
            case "profilPerniaOpt":
                input_profile = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                initiative_status = $("#ini-status-perniagaan option:selected").val();
                break;

            case "profilPerniaOpt-agr":
                input_profile = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                initiative_status = $("#ini-status-perniagaan-agr option:selected").val();
                break;

            case "profilPerniaOpt-crt":
                input_profile = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                initiative_status = $("#ini-status-perniagaan-crt option:selected").val();
                break;

            case "profilPerniaOpt-edu":
                input_profile = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                initiative_status = $("#ini-status-perniagaan-edu option:selected").val();
                break;
            
            case "profilPerniaOpt-fac":
                input_profile = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                initiative_status = $("#ini-status-perniagaan-fac option:selected").val();
                break;

            case "profilPerniaOpt-fin":
                input_profile = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                initiative_status = $("#ini-status-perniagaan-fin option:selected").val();
                break;
            
            case "profilPerniaOpt-inv":
                input_profile = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                initiative_status = $("#ini-status-perniagaan-inv option:selected").val();
                break;

            case "profilPerniaOpt-mkt":
                input_profile = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                initiative_status = $("#ini-status-perniagaan-mkt option:selected").val();
                break;

            case "profilPerniaOpt-emp":
                input_profile = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                initiative_status = $("#ini-status-perniagaan-emp option:selected").val();
                break;

            case "profilPerniaOpt-tax":
                input_profile = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                initiative_status = $("#ini-status-perniagaan-tax option:selected").val();
                break;

            case "profilPerniaOpt-tou":
                input_profile = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                initiative_status = $("#ini-status-perniagaan-tou option:selected").val();
                break;
            case "ini-status-perniagaan":
                initiative_status = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                input_profile = $("#profilPerniaOpt option:selected").val();
                break;

             case "ini-status-perniagaan-agr":
                initiative_status = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                input_profile = $("#profilPerniaOpt-agr option:selected").val();
                break;

             case "ini-status-perniagaan-crt":
                initiative_status = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                input_profile = $("#profilPerniaOpt-crt option:selected").val();
                break;
            
             case "ini-status-perniagaan-edu":
                initiative_status = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                input_profile = $("#profilPerniaOpt-edu option:selected").val();
                break;

            case "ini-status-perniagaan-fac":
                initiative_status = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                input_profile = $("#profilPerniaOpt-fac option:selected").val();
                break;

            case "ini-status-perniagaan-fin":
                initiative_status = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                input_profile = $("#profilPerniaOpt-fin option:selected").val();
                break;

            case "ini-status-perniagaan-inv":
                initiative_status = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                input_profile = $("#profilPerniaOpt-inv option:selected").val();
                break;

            case "ini-status-perniagaan-mkt":
                initiative_status = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                input_profile = $("#profilPerniaOpt-mkt option:selected").val();
                break;

            case "ini-status-perniagaan-emp":
                initiative_status = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                input_profile = $("#profilPerniaOpt-emp option:selected").val();
                break;

            case "ini-status-perniagaan-tax":
                initiative_status = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                input_profile = $("#profilPerniaOpt-tax option:selected").val();
                break;

            case "ini-status-perniagaan-tou":
                initiative_status = $(this).val()
                input_need = $("#keperluanPerniaOpt option:selected").val();
                input_profile = $("#profilPerniaOpt-tou option:selected").val();
                break;
            case "keperluanPerniaOpt":
                input_profile = $("#profilPerniaOpt option:selected").val()
                input_need = $(this).val();
                switch ($("#keperluanPerniaOpt option:selected").val()) {
                    case "B-MKT":
                        // window.location.replace("./business.html");
                        window.location.href = "./business-market.html"
                        break;
                    case "B-CRT":
                        // window.location.replace("./business.html");
                        window.location.href = "./business-creative.html"
                        break;
                    case "B-TOU":
                        // window.location.replace("./business.html");
                        window.location.href = "./business-tourism.html"
                        break;
                    case "B-FIN":
                        // window.location.replace("./business.html");
                        window.location.href = "./business-financial.html"
                        break;
                    case "B-EMP":
                        // window.location.replace("./business.html");
                        window.location.href = "./business-recruitment.html"
                        break;
                    case "B-TAX":
                        // window.location.replace("./business.html");
                        window.location.href = "./business-tax.html"
                        break;
                }
                break;
        }
        result = filtering_perniagaan(jData, input_need, input_profile, initiative_status);
        // result = filtering_perniagaan(jData, input_need);
        show_result(result, is_english);
    });
    // komuniti filtering by user input
    $("#keperluanKomOpt, #ini-status-komuniti-esg, #ini-status-komuniti-inf, #ini-status-komuniti-ngo, #ini-status-komuniti-oa, #ini-status-komuniti-ss, #ini-status-komuniti-si, #ini-status-komuniti-bel, #ini-status-komuniti-dev, #profilKomunitiOpt-esg, #profilKomunitiOpt-inf, #profilKomunitiOpt-ngo, #profilKomunitiOpt-oa, #profilKomunitiOpt-ss, #profilKomunitiOpt-si, #profilKomunitiOpt-bel, #profilKomunitiOpt-dev").change(function () {
        // input_need = $("#keperluanKomOpt option:selected").val();
        // input_profile = $("#profilKomunitiOpt option:selected").val();
        // initiative_status = $("#ini-status-komuniti option:selected").val();
        // input_profile = $("#profilKomunitiOpt option:selected").val();

        switch (this.id) {
            case "profilKomunitiOpt-esg":
                input_profile = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                initiative_status = $("#ini-status-komuniti-esg option:selected").val();
                break;

            case "profilKomunitiOpt-inf":
                input_profile = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                initiative_status = $("#ini-status-komuniti-inf option:selected").val();
                break;

            case "profilKomunitiOpt-ngo":
                input_profile = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                initiative_status = $("#ini-status-komuniti-ngo option:selected").val();
                break;

            case "profilKomunitiOpt-oa":
                input_profile = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                initiative_status = $("#ini-status-komuniti-oa option:selected").val();
                break;

            case "profilKomunitiOpt-ss":
                input_profile = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                initiative_status = $("#ini-status-komuniti-ss option:selected").val();
                break;

            case "profilKomunitiOpt-si":
                input_profile = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                initiative_status = $("#ini-status-komuniti-si option:selected").val();
                break;

            case "profilKomunitiOpt-bel":
                input_profile = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                initiative_status = $("#ini-status-komuniti-bel option:selected").val();
                break;

            case "profilKomunitiOpt-dev":
                input_profile = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                initiative_status = $("#ini-status-komuniti-dev option:selected").val();
                break;

            case "ini-status-komuniti-esg":
                initiative_status = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                input_profile = $("#profilKomunitiOpt-esg option:selected").val();
                break;

            case "ini-status-komuniti-inf":
                initiative_status = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                input_profile = $("#profilKomunitiOpt-inf option:selected").val();
                break;

            case "ini-status-komuniti-ngo":
                initiative_status = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                input_profile = $("#profilKomunitiOpt-ngo option:selected").val();
                break;

            case "ini-status-komuniti-oa":
                initiative_status = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                input_profile = $("#profilKomunitiOpt-oa option:selected").val();
                break;

            case "ini-status-komuniti-ss":
                initiative_status = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                input_profile = $("#profilKomunitiOpt-ss option:selected").val();
                break;

            case "ini-status-komuniti-si":
                initiative_status = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                input_profile = $("#profilKomunitiOpt-si option:selected").val();
                break;

            case "ini-status-komuniti-bel":
                initiative_status = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                input_profile = $("#profilKomunitiOpt-bel option:selected").val();
                break;

            case "ini-status-komuniti-dev":
                initiative_status = $(this).val()
                input_need = $("#keperluanKomOpt option:selected").val();
                input_profile = $("#profilKomunitiOpt-dev option:selected").val();
                break;
        }
        result = filtering_komuniti(jData, input_need, input_profile, initiative_status);
        show_result(result, is_english);
    })
});

function show_result(result, is_english) {
    var jenis, div_style;
    jenis = document.getElementsByClassName("tablinks active")[0].id
    div_style = ''

    if (result.length == 0) {
        // is_english = "Perniagaan".indexOf(document.getElementById("perniagaanBtn").innerText) < 0
        var to_display = "0 Skim Bantuan Belanjawan 2023 Berkaitan"
        if (is_english) to_display = "0 Related Assistances"

        $("#displayList").html('\
        <div class="tablinks container-b-outer container-b-button-outer" style="'+ div_style + '">\
            <div  style="text-align: center;" class="container-b-content">'+ to_display + '</div>\
        </div>')
        // $("#ini-parent-div").css("display","none")
        $("#initiativeNumber").html(0)
        $("#seeMore").css("display","none")

    }
    else {
        // let linkResult = [], withoutLinkResult =[]
        // result.forEach((x)=>{
        //     if (x.link){
        //         linkResult.push(x)
        //     }
        //     else withoutLinkResult.push(x)
        // })
        // result = linkResult.concat(withoutLinkResult)

        let op23result = [], op22result =[], up23result =[] , other_result =[]
        result.forEach((x)=>{
            if (x.status === "OP23"){
                op23result.push(x)
            }
            else if (x.status === "UP23"){
                up23result.push(x)
            }
            else if (x.status === "OP22"){
                op22result.push(x)
            }
            else other_result.push(x)
        })
        result = op23result.concat(up23result,op22result,other_result)

        // result is an array of obj
        let res = []
        // $("#displayList").html
        let a =(result.map(x => {
            div_style = ''
            // if (jenis == "rakyatBtn" && x.link) { div_style = "background: linear-gradient(180deg, #FAF7F4 0%, rgba(185, 214, 244, 0.51) 100%);" }
            // else if (jenis == "perniagaanBtn" && x.link) { div_style = "background: linear-gradient(180deg, #FAF7F4 0%, rgba(238, 150, 86, 0.51) 100%);" }
            // else if (jenis == "komunitiBtn" && x.link) { div_style = "background: linear-gradient(180deg, #FAF7F4 0%, rgba(255, 213, 65, 0.51) 100%);" }
            if (jenis == "rakyatBtn" && x.link) { div_style = "background: #fff" }
            else if (jenis == "perniagaanBtn" && x.link) { div_style = "background: #fff" }
            else if (jenis == "komunitiBtn" && x.link) { div_style = "background: #fff" }
            
            let purple_icon_html = ''
            if (!is_english && x.gamification) purple_icon_html = '   <img class=img-fluid" style="max-width: 28px;" src="./assets/images/purple-icon.svg" alt="purple icon"></img>'
            else if (is_english && x.gamification) purple_icon_html = '   <img class="img-fluid" style="max-width: 28px;" src="../assets/images/purple-icon.svg" alt="purple icon"></img>'

            let initiative_status = ''
            if (!is_english && x.status === "OP22") initiative_status = ' <p class="card-status-laksana" ><i><img src="./assets/images/infopage/icon-pelaksanaan.svg" alt=""></i> &nbsp;Permohonan Dibuka</p>'
            else if (!is_english && x.status === "OP23") initiative_status = ' <p class="card-status-laksana" ><i><img src="./assets/images/infopage/icon-pelaksanaan.svg" alt=""></i> &nbsp;Permohonan Dibuka</p>'
            else if (!is_english && x.status === "END") initiative_status = ' <p class="card-status-tamat" ><i><img src="./assets/images/infopage/icon-tamat.svg" alt=""></i> &nbsp;Permohonan Telah Ditutup</p>'
            else if (!is_english && x.status === "UP23") initiative_status = '  <p class="card-status-akan-datang" ><i><img src="./assets/images/infopage/icon-akan-datang.svg" alt=""></i> &nbsp;Akan Datang</p>'
            else if (!is_english && x.status === "RAY") initiative_status = '  <p class="card-status-rayuan"><i><img src="./assets/images/infopage/icon-rayuan.svg" alt=""></i> &nbsp;Rayuan Dibuka</p>'
            else if (!is_english && x.status === "NON") initiative_status = '  <p class="card-status-auto-apply"><i><img src="./assets/images/infopage/icon-auto-apply.svg" alt=""></i> &nbsp;Tiada Permohonan Diperlukan</p>'
            
            // english ver.
            else if (is_english && x.status === "OP22") initiative_status = ' <p class="card-status-laksana" ><i><img src="../assets/images/infopage/icon-pelaksanaan.svg" alt=""></i> &nbsp;Open for Application</p>'
            else if (is_english && x.status === "OP23") initiative_status = ' <p class="card-status-laksana" ><i><img src="../assets/images/infopage/icon-pelaksanaan.svg" alt=""></i> &nbsp;Open for Application</p>'
            else if (is_english && x.status === "END") initiative_status = ' <p class="card-status-tamat" ><i><img src="../assets/images/infopage/icon-tamat.svg" alt=""></i> &nbsp;Application Closed</p>'
            else if (is_english && x.status === "UP23") initiative_status = '  <p class="card-status-akan-datang" ><i><img src="../assets/images/infopage/icon-akan-datang.svg" alt=""></i> &nbsp;Coming Soon</p>'
            else if (is_english && x.status === "RAY") initiative_status = '  <p class="card-status-rayuan"><i><img src="../assets/images/infopage/icon-rayuan.svg" alt=""></i> &nbsp;Open for Appeals</p>'
            else if (is_english && x.status === "NON") initiative_status = '  <p class="card-status-auto-apply"><i><img src="../assets/images/infopage/icon-auto-apply.svg" alt=""></i> &nbsp;No Application Required</p>'

            
            let btnlink = ''
            if (x.link !== "NA" && !is_english) {
                // html = '<a href=' + x.link + '>' + html + '</a>'
                btnlink = '<a href=' + x.link + '>\
                <button type="button" class="btn btn-custom-needs">Maklumat Lanjut</button>\
                </a>'
            }
            else if (x.link !== "NA" && is_english) {
                btnlink = '<a href=' + x.link + '>\
                <button type="button" class="btn btn-custom-needs">More Information</button>\
                </a>'
            }
            else if (x.link === "NA" && !is_english){
                btnlink = '<p class="my-2 theme-colour" ><b>Maklumat lanjut akan dikemaskini</b> </p>'
            }
            else if (x.link === "NA" && is_english){
                btnlink = '<p class="my-2 theme-colour" ><b>More information soon</b> </p>'
            }

            let html = '\
            <div class="col-md-6 my-3">\
                <div class="tablinks card needs-card text-left" style="' + div_style + '">\
                    <div>' + initiative_status + '</div>\
                    <h3 class="needs-card-title">'+ x.title + purple_icon_html + '</h3>\
                    <div class="card-text desc-colour">'
                        + x.description +
                    '</div>\
                    <div class="card-footer needs-card-footer border-0 px-0 pb-0">\
                    ' + btnlink +
                    '</div>\
                </div>\
            </div>\
                ';

            
            res.push(html)
            
            return html;
        }).join(''));
        let card_increment = 100
        let maxperpage = 9999
        $("#seeMore").click(function(){
            maxperpage = maxperpage + card_increment
            if(maxperpage > res.length){
                maxperpage = res.length
                $("#seeMore").css("display","none")
                // $("#seeless").css("display","block")
            }
            else{$("#seeMore").css("display","block")}
            // console.log(card_increment + " " + maxperpage)
            $("#displayList").html(res.slice(0,maxperpage).join(''))
          });
        if(res.length <= maxperpage){
            $("#seeMore").css("display","none")
        }
        // $("#seeMore").html(res.slice(0,4).join(''))
        $("#displayList").html(res.slice(0,9999).join(''))
        $("#initiativeNumber").html(res.length)
        if(res.length > 9999){
            $("#seeMore").css("display","block")
        }
        // console.log(res.length)
    }
}
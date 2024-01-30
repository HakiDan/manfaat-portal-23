function filterFunc(input_package, input_progress) {
    var progress_boolean, curProg;
    return Object.keys(jData).map(key => jData[key].filter(x => {
        curProg = parseInt(x.progress)
        switch (input_progress) {
            case "green":
                progress_boolean = (curProg >= 80 && curProg <= 100);
                break;
            case "orange":
                progress_boolean = (curProg >= 50 && curProg <= 79);
                break;
            case "red":
                progress_boolean = (curProg >= 1 && curProg <= 49);
                break;
            case "grey":
                progress_boolean = (curProg == 0);
                break;
        }
        return x.package == input_package && progress_boolean
    })).flat()
};

function show_result(input_result) {
    if (input_result.length == 0){
        $("#resultList").html('<p class="text-center mb-4 mt-4">Hasil tidak dijumpai</p>')
    }
    
    else{
        input_result.sort(function(a, b){return parseInt(b.progress) - parseInt(a.progress)})
    var curProg, colour;
    $("#resultList").html(input_result.map((x) => {
        curProg = parseInt(x.progress)
        switch (true) {
            case (curProg >= 80 && curProg <= 100):
                colour = "box-tracker-custom-green";
                break;
            case (curProg >= 50 && curProg <= 79):
                colour = "box-tracker-custom-orange";
                break;
            case (curProg >= 1 && curProg <= 49):
                colour = "box-tracker-custom-red";
                break;
            case (curProg == 0):
                colour = "box-tracker-custom-grey";
                break;
        }
        return '<div class="content-center container-content-filter init-content">\
            <div class="clearfix">\
                <div class='+ colour + '>\
                    <div class="contentleft">\
                        <p class="word-wrap: break-word;" style="font-size: 1.25rem; font-weight: 600;">'+ x.progress +'%</p>\
                    </div>\
                </div>\
                <div class="box-tracker style="padding: 20px 0px 0px 20px;">\
                    <div class="contentright">\
                        <a href="">\
                            <h5 class="card-title word-wrap: break-word" style="font-weight: 400px;">Initiative name goes here</h5>\
                        </a>\
                        <p style="padding-bottom: 10px;">Agensi implementasi</p>\
                    </div>\
                </div>\
            </div>\
        </div>'
    }).join(''))
    }
}


$(function () {
    var input_package,input_progress;
    show_result(jData["individual"].concat(jData["business"], jData["community"]))

    $("#packageOpt, #progressOpt").change(function () {
        switch (this.id) {
            case "packageOpt":
                input_package = $(this).val()
                input_progress = $("#progressOpt option:selected").val();
                break;
            case "progressOpt":
                input_package = $("#packageOpt option:selected").val(),
                input_progress = $(this).val();
                break;
        }
        show_result(filterFunc(input_package, input_progress));
    });
})
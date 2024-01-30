function filterFunc(user_input) {
    var linkResult = [], withoutLinkResult=[];
    user_input = user_input.split(' ')
    for (let i = 0; i<user_input.length; i++){
        if(user_input[i] !=''){
            for (let x in jData) {
                for (let y in jData[x]) {
                  let searchString =
                    jData[x][y].title.toLowerCase().replace(/\s/g, "")
                     +
                    jData[x][y].hashtag
                      .toLowerCase()
                      .replace(/\s/g, "")
                      .replace(/#/g, "");
                  searchString.indexOf(user_input[i]) >= 0 &&
                  linkResult.filter(function (e) {
                    return e.title === jData[x][y].title;
                  }).length <= 0 &&
                  withoutLinkResult.filter(function (e) {
                    return e.title === jData[x][y].title;
                  }).length <= 0
                    ? jData[x][y].link
                      ? linkResult.push(jData[x][y])
                      : withoutLinkResult.push(jData[x][y])
                    : {};
                }
            }
        }
    }
    
    return linkResult.concat(withoutLinkResult)
}


function show_result(result) {
    // var jenis,div_style;

    // jenis = document.getElementsByClassName("tablinks active")[0].id
    
    // if (jenis=="rakyatBtn"){div_style = "background: linear-gradient(180deg, #FAF7F4 0%, rgba(185, 214, 244, 0.51) 100%);"}
    // else if (jenis=="perniagaanBtn"){div_style = "background: linear-gradient(180deg, #FAF7F4 0%, rgba(238, 150, 86, 0.51) 100%);"}
    // else {div_style = "background: linear-gradient(180deg, #FAF7F4 0%, rgba(255, 213, 65, 0.51) 100%);"}

    // if (result.length == 0) {
    //     $("#noticeText").css("display","none")
    //     var to_display = "Maaf, tiada inisiatif yang sepadan dengan istilah carian anda. Sila cuba lagi dengan kata kunci yang lain.​"
    //     if (is_english) to_display = "Sorry, but nothing matched your search terms. Please try again with some different keywords."
    //     $("#resultList").html('\
    //     <div class="tablinks container-b-outer container-b-button-outer">\
    //         <div  style="text-align: center;" class="container-b-content">' + to_display + '</div>\
    //     </div>')
    // }
    // else{
    //     $("#noticeText").css("display","block")
    //     // result is an array of obj
    //     $("#resultList").html(result.map(x => {
    //         let html = '\
    //         <div class="tablinks container-b-outer container-b-button-outer"' + (x.link ? 'style="background: linear-gradient(180deg, #FAF7F4 0%, rgba(185, 214, 244, 0.51) 100%);"' : '') + '>\
    //             <div class="container-b-title" style="margin-top:-15px;">\
    //                 <h3>'+ x.title + '</h3>\
    //             </div>\
    //             <div  class="container-b-content">'
    //             + x.description +
    //             '</div>\
    //         </div>\
    //         <div class="tablinks container-b-button-inner container-b-content" >\
    //             <div class="container-b-content container-b-inner" style="padding-top: -10px margin-bottom: auto color: #ffffff;">'+
    //             x.hashtag +
    //             '</div>\
    //         </div>'

    //         if (x.link) {
    //             html = '<a href=' + x.link + '>' + html + '</a>'
    //         }

    //         return html;
    //     }).join(''));
    // }
    if (result.length == 0) {
        // is_english = "Perniagaan".indexOf(document.getElementById("perniagaanBtn").innerText) < 0
        $("#noticeText").css("display","none")
        var to_display = "Maaf, tiada inisiatif yang sepadan dengan istilah carian anda. Sila cuba lagi dengan kata kunci yang lain.​"
        if (is_english) to_display = "Sorry, but nothing matched your search terms. Please try again with some different keywords."
        $("#resultList").html('\
        <div class="tablinks container-b-outer container-b-button-outer m-4">\
            <div  style="text-align: center;" class="container-b-content">' + to_display + '</div>\
        </div>')
        $("#initiativeNumber").html(0)
        $("#seeMore").css("display","none")

    }
    else {
        $("#noticeText").css("display","block")
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
            
            let purple_icon_html = ''
            if (!is_english && x.gamification) purple_icon_html = '   <img class=img-fluid" style="max-width: 28px;" src="./assets/images/purple-icon.svg" alt="purple icon"></img>'
            else if (is_english && x.gamification) purple_icon_html = '   <img class="img-fluid" style="max-width: 28px;" src="../assets/images/purple-icon.svg" alt="purple icon"></img>'

            let initiative_status = ''
            if (!is_english && x.status === "OP22") initiative_status = ' <p class="card-status-laksana" ><i><img src="./assets/images/infopage/icon-pelaksanaan.svg" alt=""></i>&nbsp; Permohonan Dibuka</p>'
            else if (!is_english && x.status === "OP23") initiative_status = ' <p class="card-status-laksana" ><i><img src="./assets/images/infopage/icon-pelaksanaan.svg" alt=""></i>&nbsp; Permohonan Dibuka</p>'
            else if (!is_english && x.status === "END") initiative_status = ' <p class="card-status-tamat" ><i><img src="./assets/images/infopage/icon-tamat.svg" alt=""></i>&nbsp; Permohonan Telah Ditutup</p>'
            else if (!is_english && x.status === "UP23") initiative_status = '  <p class="card-status-akan-datang" ><i><img src="./assets/images/infopage/icon-akan-datang.svg" alt=""></i>&nbsp; Akan Datang</p>'
            else if (!is_english && x.status === "RAY") initiative_status = '  <p class="card-status-rayuan"><i><img src="./assets/images/infopage/icon-rayuan.svg" alt=""></i>&nbsp; Rayuan Dibuka</p>'
            else if (!is_english && x.status === "NON") initiative_status = '  <p class="card-status-auto-apply"><i><img src="./assets/images/infopage/icon-auto-apply.svg" alt=""></i>&nbsp; Tiada Permohonan Diperlukan</p>'
            
            // english ver.
            else if (is_english && x.status === "OP22") initiative_status = ' <p class="card-status-laksana" ><i><img src="../assets/images/infopage/icon-pelaksanaan.svg" alt=""></i>&nbsp; Open for Application</p>'
            else if (is_english && x.status === "OP23") initiative_status = ' <p class="card-status-laksana" ><i><img src="../assets/images/infopage/icon-pelaksanaan.svg" alt=""></i>&nbsp; Open for Application</p>'
            else if (is_english && x.status === "END") initiative_status = ' <p class="card-status-tamat" ><i><img src="../assets/images/infopage/icon-tamat.svg" alt=""></i>&nbsp; Application Closed</p>'
            else if (is_english && x.status === "UP23") initiative_status = '  <p class="card-status-akan-datang" ><i><img src="../assets/images/infopage/icon-akan-datang.svg" alt=""></i>&nbsp; Upcoming</p>'
            else if (is_english && x.status === "RAY") initiative_status = '  <p class="card-status-rayuan"><i><img src="../assets/images/infopage/icon-rayuan.svg" alt=""></i>&nbsp; Open for Appeals</p>'
            else if (is_english && x.status === "NON") initiative_status = '  <p class="card-status-auto-apply"><i><img src="../assets/images/infopage/icon-auto-apply.svg" alt=""></i>&nbsp; No Applications Required</p>'
            
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
                    <h3>'+ x.title + purple_icon_html + '</h3>\
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
        let card_increment = 99
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
            $("#resultList").html(res.slice(0,maxperpage).join(''))
          });
        if(res.length <= maxperpage){
            $("#seeMore").css("display","none")
        }
        if(res.length > maxperpage){
            $("#seeMore").css("display","block")
        }
        // $("#seeMore").html(res.slice(0,4).join(''))
        $("#resultList").html(res.slice(0,9999).join(''))
        $("#initiativeNumber").html(res.length)
        console.log(res.length)
    }
}

function search_result() {
    let input = $("#input").val().toLowerCase();

    if(input !=''){
        let result = filterFunc(input);
        show_result(result)
    }
    else {
        var to_display = "Sila taip inisiatif yang ingin anda cari di atas"
        if (is_english) to_display = "Please type the initiative you want to search above"
        $("#resultList").html('\
        <div class="tablinks container-b-outer container-b-button-outer">\
            <div style="text-align: center;" class="container-b-content">'+to_display+'</div>\
        </div>')
    }
}

window.onload = function () {
    var url = document.location.href.split('?'),
        result
    if (url.length > 1 && url[1]!='') {
        url[1]=url[1].replace(/%20/g,' ');
        result = filterFunc(url[1]);
        show_result(result)
    }
}

$(function () {
    $('#input').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            search_result()
        }
    });

    $('#search').click(function(){
        search_result()
    });

});
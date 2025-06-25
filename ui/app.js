Dropzone.autoDiscover = false;

function init() {
    let dz = new Dropzone("#dropzone", {
        url: "/",
        maxFiles: 1,
        addRemoveLinks: true,
        dictDefaultMessage: "Drop or click to upload an image",
        autoProcessQueue: false
    });

    dz.on("addedfile", function () {
        if (dz.files[1] != null) {
            dz.removeFile(dz.files[0]);
        }
    });

    dz.on("complete", function (file) {
        let imageData = file.dataURL;
        var url = "http://127.0.0.1:5000/classify_image";

        $.post(url, {
            image_data: imageData
        }, function (data, status) {
            if (!data || data.length == 0) {
                $("#resultHolder").addClass("d-none");
                $("#divClassTable").addClass("d-none");
                $("#error").removeClass("d-none");
                return;
            }

            let players = ["lionel_messi", "maria_sharapova", "roger_federer", "serena_williams", "virat_kohli"];
            let match = null;
            let bestScore = -1;

            for (let i = 0; i < data.length; ++i) {
                let maxScoreForThisClass = Math.max(...data[i].class_probability);
                if (maxScoreForThisClass > bestScore) {
                    match = data[i];
                    bestScore = maxScoreForThisClass;
                }
            }

            if (match) {
                $("#error").addClass("d-none");
                $("#resultHolder").removeClass("d-none");
                $("#divClassTable").removeClass("d-none");

                $("#resultHolder").html($(`[data-player="${match.class}"]`).html());

                let classDictionary = match.class_dictionary;
                for (let personName in classDictionary) {
                    let index = classDictionary[personName];
                    let probabilityScore = match.class_probability[index].toFixed(2) + " %";
                    let elementName = "#score_" + personName;
                    $(elementName).html(probabilityScore);
                }
            }
        });
    });

    $("#submitBtn").on('click', function () {
        dz.processQueue();
    });
}

$(document).ready(function () {
    $("#error").addClass("d-none");
    $("#resultHolder").addClass("d-none");
    $("#divClassTable").addClass("d-none");

    init();
});

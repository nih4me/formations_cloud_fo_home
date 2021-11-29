function display_trainings() {
    var training_box = $('#training-box');
    $.getJSON("data.json", function(json) {
        trainings = json['training']
        for (var i = 0; i < trainings.length; i++) {
            training = trainings[i];
            temp = 
                '<article class="col-12 col-md-6 tm-post">' +
                '    <hr class="tm-hr-primary">' +
                '    <a href="post.html" class="effect-lily tm-post-link tm-pt-60">' +
                '        <div class="tm-post-link-inner">' +
                '            <img src="' + training['img'] + '" alt="Image" class="img-fluid">' +                         
                '        </div>' +
                '        <span class="position-absolute tm-new-badge">Nouveau</span>' +
                '        <h2 class="tm-pt-30 tm-color-primary tm-post-title">' + training['title'] + '</h2>' +
                '    </a>' +
                '    <p class="tm-pt-30 summary">' +
                '        ' + training['summary'] + '' +
                '    </p>' +
                '    <div class="d-flex justify-content-between tm-pt-45">' +
                '        <span class="tm-color-primary">' + training['category'] + '</span>' +
                '        <span class="tm-color-primary">' + training['added_at'] + '</span>' +
                '    </div>' +
                '    <hr>' +
                '</article>';
            training_box.append(temp);
        }
    });
}
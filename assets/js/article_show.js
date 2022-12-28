import '../css/article_show.scss';
import $ from 'jquery';
//import 'bootstrap'; // Los módulos no se comparten entre entires (cada .addEntry en webpack.config.js ). Aunque haya un import de Bootstrap
                    // en jquery que extiende las funcionalidades de jQuery, este entry no lo tiene, por lo que se debe volver a importar.
// Si en webpack.config.js se activa .enableSingleRuntimeChunk() esto no es así sino que los módulos se comparten entre los entrypoints
$(document).ready(function() {
    $('.js-like-article').tooltip();

    $('.js-like-article').on('click', function(e) {
        e.preventDefault();

        var $link = $(e.currentTarget);
        $link.toggleClass('fa-heart-o').toggleClass('fa-heart');

        $.ajax({
            method: 'POST',
            url: $link.attr('href')
        }).done(function(data) {
            $('.js-like-article-count').html(data.hearts);
        })
    });
});

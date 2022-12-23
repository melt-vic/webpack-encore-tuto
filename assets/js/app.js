/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../styles/app.css';
import getNiceMessage from './get_nice_message';
import $ from 'jquery';     // Si no se usa ./ Webpack lo busca dentro de ./node_modules
//global.$ = $;  global es específico de Webpack. Hace la variable global, sólo útil para legacy code
import 'bootstrap';     // Bootstrap es un plugin de jquery. Los plugins de jQuery no retornan un valor sino que modifican jQuery añadiéndolo funciones. En consecuencia, no hace fatal import x from 'bootstrap'
// start the Stimulus application
import '../bootstrap';

console.log(getNiceMessage(6));

$('.dropdown-toggle').dropdown();
$('.custom-file-input').on('change', function(event) {
    var inputFile = event.currentTarget;
    $(inputFile).parent()
        .find('.custom-file-label')
        .html(inputFile.files[0].name);
});
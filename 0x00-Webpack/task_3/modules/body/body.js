import $ from 'jquery';
import _ from 'lodash';
import '../css/body.css';

$('body').append('<button id="start-button">Click here to get started</button>');
$('body').append("<p id='count'></p>");

let count = 0;
function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

const debouncedUpdateCounter = _.debounce(updateCounter, 300);
$('#start-button').on('click', debouncedUpdateCounter);


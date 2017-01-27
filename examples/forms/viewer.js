/*
 * Attach event handler to 'input' elements
 */
function showDataInRealTime() {
    var input = $('input');
    input.mousedown(function() {
        showData(this);
    });
    input.mouseup(function() {
        showData(this);
    });
}

/*
 * Show data of element in 'div#info'
 */
function showData(element) {
    var data = {};
    data[element.id] = element.value;
    FormsDemo.dumpDataToDiv('info', data);
}

$(document).ready(function() {
    // Remove link for "Show me all the data!"
    $(':not(#pager) > a').remove();
});

/*
 * Attach event handler to 'input' elements
 */
function showDataInRealTime() {
    var input = $('input');
    var string = '';
    input.mousedown(function() {
        string = '' + this.id;
        dumpStringToDivInfo(string);
    });
    input.mouseup(function() {
        string = '' + this.id;
        dumpStringToDivInfo(string);
    });
}

/*
 * Dump string to 'div#info'
 */
function dumpStringToDivInfo(string) {
    var data = {};
    data[string] = '';
    FormsDemo.dumpDataToDiv('info', data);
}

$(document).ready(function() {
    // Remove link for "Show me all the data!"
    $(':not(#pager) > a').remove();
});

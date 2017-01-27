/*
 * Attach event handler to form field elements
 */
function showDataInRealTime() {
    var input = $('input, select, textarea');
    var string = '';
    input.mousedown(function() {
        string = '' + this.id;
        dumpStringToDivInfo(string);
    });
    input.mouseup(function() {
        var current = this.id;
        if (current != string) {
            string += ' -> ' + current;
        }
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

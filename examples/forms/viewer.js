/*
 * Show updated data in 'div#info' on input
 */
function showDataInRealTime() {
    $('input').on('input', function() {
        var data = {};
		data[this.id] = this.value;
        FormsDemo.dumpDataToDiv('info',data);
    });
}

$(document).ready(function() {
    // Remove link for "Show me all the data!"
    $(':not(#pager) > a').remove();
});

/*
 * Trims field names to actual names on AcroForm
 */
function trimFieldNames(data) {
    dict = {};
    for (var id in data) {
      keys = id.split('.');
      key = keys[keys.length - 1];
      dict[key] = data[id];
    }
    return dict
}

/*
 * Removes link for "Show me all the data!"
 * Show updated data in 'div#info' on input
 */
function showDataInRealTime() {
    $(':not(#pager) > a').remove();

    $('input').on('input', function() {
        var data = FormsDemo.getPdfData();
        data = trimFieldNames(data);
        FormsDemo.dumpDataToDiv('info',data);
    });
}

$(document).ready(function() {
    showDataInRealTime();
});

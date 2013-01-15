jquery-form-plugin
==================

form serialize into json &amp; restore

@example
var data = $('#form').serializeJSON();
/* result: {input[1][name]: value1, input[2][name]: value2 ...} */

$('#form').clear();	/* or modify */

$('#form').restoreJSON(data);

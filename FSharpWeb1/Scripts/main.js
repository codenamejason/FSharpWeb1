//
//
//
//
//
//
//
//
//
$(function () {
    var uri = 'api/cars';

    $.getJSON(uri)
        .done(function (data) {
            $.each(data, function (key, item) {
                $('<tr><td>' + (key + 1) + '</td><td>' + item.make + '</td><td>' + item.model + '</td><td>' + item.miles + '</td><td>' + item.year + '</td><td>' + item.price + '</td></tr>')
                    .appendTo($('#cars tbody'));
            });
        });
});

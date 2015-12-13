
/* Author: Jason Romero - codenamejason
 *  Copyright (c) 2015 Romero Agency
 */
//


$(function () {
    var uri = 'api/cars';

    $.getJSON(uri)
        .done(function (data) {
            $.each(data, function (key, item) {
                $('<tr><td>' + (key + 1) + '</td><td>' + item.make + '</td><td>' + item.model + '</td><td>' + item.miles
                    + '</td><td>' + item.year + '</td><td>' + item.price + '</td></tr>')
                    .appendTo($('#cars tbody'));
            });
        });
});

$(function () {
    var uri = 'api/shoes';

    $.getJSON(uri)
        .done(function (data1) {
            $.each(data1, function (key1, item1) {
                $('<tr><td>' + (key1 + 1) + '</td><td>' + item1.brand + '</td><td>' + item1.style + '</td><td>' + item1.color
                    + '</td><td>' + item1.price + '</td><td>' + item1.quality + '</td><td>' + item1.popularity + '</td><td>'
                    + item1.wantitmeter + '</td></tr>')
                    .appendTo($('#shoes tbody'));
            });
        });
});

/* Author: Jason Romero - codenamejason
 *  Copyright (c) 2015 duPont REGISTRY
 */
$(document).ready(function () {
    $(window).on('resize', function () {
        // Create resize event        
        $windowWidth = $(this).width();
        // Log the new width in the console
        console.log("Jason, Resize event occured, Window width is now: ", $windowWidth);
    })
    //  $(window).resize($.resizeNotif); This is the line you want!

    $(function () {
        var counter_1 = 0,
        counter = 0
        last_time_1 = +new Date(),
        last_time = +new Date();

        // This function is not throttled, but instead bound directly to the event.
        function resize_1() {
            var now = +new Date(),
              html = 'resize handler executed: ' + counter_1++ + ' times'
              + ' (' + (now - last_time_1) + 'ms since previous execution)'
                + '<br/>window dimensions: ' + $(window).width() + 'x' + $(window).height();
            last_time_1 = now;
            $('#text-resize-1').html(html);
        };

        // This function is throttled, and the new, throttled, function is bound to
        // the event. Note that in jQuery 1.4+ a reference to either the original or
        // throttled function can be passed to .unbind to unbind the function.
        function resize() {
            var now = +new Date();
            html = 'Throttled resize handler executed: ' + counter_2++ + ' times'
              + ' (' + (now - last_time_2) + 'ms since previous execution)'
              + '<br/>window dimensions: ' + $(window).width() + 'x' + $(window).height();

            console.log("Throttled resize handler executed: " + counter++ + ' times'
            + ' (' + (now - last_time) + 'ms since previous execution)'
            + 'window dimensions are: ' + $(window).width() + 'x' + $(window).height());
            last_time = now;

            $('#text-resize-2').html(html);
        };

        // Bind the not-at-all throttled handler to the resize event.
        $(window).resize(resize_1);

        // Bind the throttled handler to the resize event. 
        // Set your time here to delay function.
        $(window).resize($.throttle(1000, resize)); // This is the line you want!

    });
});

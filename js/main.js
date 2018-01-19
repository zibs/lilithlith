$(document).ready(function() {
    controlFlyerOne();
    function controlFlyerOne() {
        function isTouchable() {
            return 'ontouchstart' in window || 'onmsgesturechange' in window; // works on most browsers // works on ie10
        }
        if (!isTouchable() && $(window).width() > 768) {
            var IN_FLYER = false;
            var IN_IMAGE = false;
            var TOGGLED = false;
            $('#flyer-1')
                .mouseenter(function(e) {
                    IN_FLYER = true;
                })
                .mouseleave(function(e) {
                    setTimeout(() => {
                        IN_FLYER = false;
                        if (!IN_FLYER && !IN_IMAGE) {
                            TOGGLED = true;
                            $('#flyer-1').css('visibility', 'hidden');
                        }
                    }, 100);
                });

            $('.flyer-one-img')
                .mouseenter(function(e) {
                    IN_IMAGE = true;
                    if (!IN_FLYER) {
                        if (!TOGGLED) {
                            $('#flyer-1').toggle();
                        } else {
                            $('#flyer-1').css('visibility', 'visible');
                        }
                    }
                })
                .mouseleave(function(e) {
                    if (IN_FLYER) {
                        return;
                    }
                    IN_IMAGE = false;
                    setTimeout(() => {
                        if (!IN_FLYER && !IN_IMAGE) {
                            if (!TOGGLED) {
                                $('#flyer-1').toggle();
                            } else {
                                $('#flyer-1').css('visibility', 'hidden');
                            }
                        }
                    }, 100);
                });
        }
    }
    $(window).resize(function() {
        controlFlyerOne();
    });
});

(function($) {

    function init() {
        console.log('init');
        eventHandlers();
    }

    function eventHandlers() {
        console.log('eventHandlers');
        $('.hamburger-navigation-button').on('click', toggleNavigation);
    }

    function toggleNavigation() {
        console.log('toggleNavigation');
        $('.navigation-list').toggleClass('show-navigation-list ');
    }

    init();

})(jQuery);

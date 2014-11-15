(function($) {

    function init() {
        console.log('init');
        eventHandlers();
    }

    function eventHandlers() {
        $('.hamburger-navigation-button').on('click', toggleNavigation);
    }

    function toggleNavigation() {
        $('.navigation-list').toggleClass('show-navigation-list');
    }

    init();

})(jQuery);

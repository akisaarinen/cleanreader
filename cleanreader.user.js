function addButton() {
    $("#lhn-add-subscription-section").append('<span id="toggle-search-button" role="button" class="goog-inline-block jfk-button jfk-button-action" tabindex="1" style="-webkit-user-select: none; " title="Search"><img src="//ssl.gstatic.com/ui/v1/button/search-white.png" style="width: 21px; height: 21px; " class="jfk-button-img"></span>');
    $("#toggle-search-button").click(function() {
      $("#gb").toggle();
      // Show the top-bar for old layout only
      if (!document.getElementById("logo-section")) {
        $("#top-bar").toggle();
      }
    });
}
function addStyles() {
    var styles =
        "#top-bar, #gb, #logo-section { display: none; } " +
        "#viewer-header, #lhn-add-subscription-section, #sections-header { height: 35px; } " +
        "#home-section { padding: 0; } " + 
        ".lhn-section-primary { line-height: 21px; } " +
        "#reading-list-unread-count { margin-top: 0; } " + 
        "#viewer-entries-container { height: 100%; } " + 
        "#scrollable-sections { height: 100%; } ";

    // Fix for new layout
    if (document.getElementById("logo-section")) {
        styles += "#lhn-add-subscription { margin-top: -31px; } ";
    }

    $("head").append('<style type="text/css">' + 
            styles + 
            '</style>');
}
addButton();
addStyles();

// Need to do it this way or Reader will override
$("#lhn-add-subscription-section").css("height", "35px");

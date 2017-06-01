var onTweet = function() {
    // Get from URL
        // Call Proper Tweet fucntion
    // Read from tweetbox
        // Validation
    // read from Bobdown
    // Send info to background html
};

// TODO: Write authentication
// TODO: Load JSON data

$(function() {
    $('.rob-dropdown > button').click(function() {
        toggleState('.rob-dropdown-content', 'closed', 'open');
    });


    // Character Counter
    $('#tbTweet').keyup(updateCount);
    $('#tbTweet').keydown(updateCount);

    function updateCount() {
        var cs = 140 - $(this).val().length;
        $('.js-tweet-counter').text(cs);
    }

    $('btn-tweet').click(function tweet() {
        if ($('#tbTweet').val().length > 140) return;

        // TODO: Tweet function
        // TODO: Redirect and close
    });
})

var toggleState = function (elem, stateOne, stateTwo) {
    var elem = document.querySelector(elem);
    elem.setAttribute('data-state', elem.getAttribute('data-state') === stateOne ? stateTwo : stateOne);
};
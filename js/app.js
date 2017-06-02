var onTweet = function() {
    // TODO: chrome tabs
    let currentTab = chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {return tabs[0];});

    // Get from URL
        // Call Proper Tweet fucntion
    // Read from tweetbox
        // Validation
    // read from Bobdown

    // Redirect to new tweet
    let newUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    chrome.tabs.update(currentTab.id, {url: newUrl});
};

// TODO: Write authentication
// TODO: Load JSON data

$(function() {
    $('.rob-dropdown > button').click(function() {
        toggleState('.rob-dropdown-content', 'closed', 'open');
    });

    $('.rob-dropdown-content > li').click(function() {
        let bob = this.getAttribute('data-value');
        
        // Set the selected bob
        let selected = document.querySelector('.rob-selected');
        selected.setAttribute('data-selected', bob);
        
        // Set the selected's image
        let selectedImg = document.querySelector('.rob-selected-img');
        selectedImg.setAttribute('src', "img/" + bob + ".jpg");

        // UX
        document.querySelector('.rob-dropdown-content').setAttribute('data-state', 'closed');
    });


    // Character Counter
    $('#tbTweet').keyup(updateCount);
    $('#tbTweet').keydown(updateCount);

    function updateCount() {
        var cs = 140 - $(this).val().length;
        $('.js-tweet-counter').text(cs);
    }

    // Tweet!
    $('.btn-tweet').click(function() {
        if ($('#tbTweet').val().length > 140) return;
        // TODO: Throw invalid tweet error.

        let bob = $('.rob-selected').attr('data-selected');
        let tweet = $('#tbTweet').val();
        console.log('Bob (' + bob + ') tweeted: ' + tweet);
        // TODO: Tweet function
        // TODO: Redirect and close
    });
})

var toggleState = function (elem, stateOne, stateTwo) {
    var elem = document.querySelector(elem);
    elem.setAttribute('data-state', elem.getAttribute('data-state') === stateOne ? stateTwo : stateOne);
};
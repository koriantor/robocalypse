var onTweet = function() {
    // TODO: chrome tabs
    let currentTab = chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {return tabs[0];});

    // Get from URL
        // Call Proper Tweet fucntion
    // Read from tweetbox
        // Validation
    // read from Bobdown

    // Redirect to new tweet
    
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
        
        var color = "black";
        if (cs <= 20)
             color = "#5c0002";
        if (cs <= 10)
             color = "#d40d12";
        
        $('.js-tweet-counter').text(cs).css("color", color);
    }

    // Tweet!
    $('.btn-tweet').click(function() {
        if ($('#tbTweet').val().length > 140) {
            $('.js-error').text("Tweet too long.");
            return;
        }

        // Grab data
        let bob = $('.rob-selected').attr('data-selected');
        let tweet = $('#tbTweet').val();
        let tweetRespondingTo = null;

        // Check if we're responding to a tweet
        chrome.tabs.query({'active': true, 'currentWindow': true}, function(tabs) { 
            let currentTab = tabs[0];

            // Parse tweet
            let parser = document.createElement('a');
            parser.href = currentTab.url;
            if (parser.hostname == "twitter.com") {
                let path = parser.pathname.split("/");
                console.log(path);
                if (path.length > 1) {
                    // Twitter path will look like /<user>/status/<tweetId>
                    //                           0 /  1   /   2  /   3
                    tweetRespondingTo = path[3];
                }
            }
        });
        displayError(tweetRespondingTo); // DOesn't work because callback ^
        
        // TODO: tweet.  Good time to learn promises
            
            // Redirect and close
            //let newUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            //chrome.tabs.update(currentTab.id, {url: newUrl});
            //window.close();
        
        
    });
})

var displayError = function (err) {
    var elem = document.getElementById('js-error');
    elem.innerHTML = err;
}

var toggleState = function (elem, stateOne, stateTwo) {
    var elem = document.querySelector(elem);
    elem.setAttribute('data-state', elem.getAttribute('data-state') === stateOne ? stateTwo : stateOne);
};
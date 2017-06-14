var tweeter = require('./twitterFunctions');

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

        GetTweetData()
            .then( tweeter.tweet )
            .then( redirect )
            .catch( displayError );
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

var GetTweetData = () => {
    return new Promise( (resolve, reject) => {
        // Grab data
        let rob = $('.rob-selected').attr('data-selected');
        let tweet = $('#tbTweet').val();
        let tweetData = { "rob": rob, "tweetContent": tweet };

        // ASYNC
        chrome.tabs.query({'active': true, 'currentWindow': true}, (tabs) => { 
            let currentTab = tabs[0];

            // Parse tweet
            let parser = document.createElement('a');
            parser.href = currentTab.url;
            if (parser.hostname == "twitter.com") {
                let path = parser.pathname.split("/");
                console.log(path);
                if (path.length > 1) {
                    // Twitter path will look like /<user>/status/<tweetId>
                    //                         [ 0 /  1   /   2  /   3    ]
                    tweetData.RobRespondingTo = path[1];
                    tweetData.TweetRespondingTo = path[3];
                }
            }
            resolve(tweetData);
        });
    });
};

var redirect = function(newTweet) {
    //let newUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    let newUrl = "https://twitter.com/" + newTweet.user.screen_name + "/status/" + newTweet.id_str;
    chrome.tabs.query({'active': true, 'currentWindow': true}, (tabs) => { 
        let currentTab = tabs[0];
        chrome.tabs.update(currentTab.id, {url: newUrl});
        window.close();
    });
};
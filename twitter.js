$(function() {
    // Inject Bobby Selection on top level tweetbox
    var topTweetBox = $('.timeline-tweet-box');
    var injectionHook = '<div class="robInject"></div>';
    var injectionContentURL = chrome.runtime.getURL('selectRobDropDown.html');
    topTweetBox.find('.tweet-button').before(injectionHook);
    $('.robInject').load(injectionContentURL);

    // Set up Modal Observer
    var target = $('.PermalinkOverlay-modal');
    var observer = new MutationObserver( mutations =>
        mutations.forEach( function(mutation) {
            // Inject HTML if we haven't done so yet
            var robExt = target.find('.robInject');
            if (robExt.length == 0) {
                target.find('.tweet-button').before(injectionHook);
                target.find('.robInject').load(injectionContentURL);
            }
        })
    );

    var config = {
        attributes: true,
        subtree: true
    };

    observer.observe(target.get(0), config); // target.get(0) grabs the dom node object from jquery
})

function onModalTweet() {
    // Read from URL
    // Read from tweetbox
    // Read from Bobby dropdown
    // GOGOGO
}

function onTweet(parent) {
    // Read from URL
    // if tweetIdExists
    //  
    // Read from tweetbox
    // read from Bobdown
    // GOGOGO
}
// INFO: tweet ID is in URL on modal click
var Twitter = require('twitter');
var accounts = require('./accountInfo')

// Tweet function.  See https://dev.twitter.com/rest/reference/post/statuses/update for REST api details
// Resolves: JSON with tweet data.
module.exports.tweet = function (tweetData) {
    let rob = tweetData.rob;
    let accountInfo = accounts.accountInfo;
    return new Promise( (resolve, reject) => {
        let client = new Twitter({
            consumer_key: accountInfo[rob].consumerKey,
            consumer_secret: accountInfo[rob].consumerSecret,
            access_token_key: accountInfo[rob].accessToken,
            access_token_secret: accountInfo[rob].accessTokenSecret 
        });
        
        let tweetContent = tweetData.tweetContent;
        let tweetAPIdata = {
            status: tweetContent,
            auto_populate_reply_metadata: true,
            in_reply_to_status_id: tweetData.TweetRespondingTo
        }
        resolve( client.post('statuses/update', tweetAPIdata) );
    });
};

// TODO: Add fav/like
//      https://dev.twitter.com/rest/reference/post/favorites/create
function likeTweet(tweetData) {

};

// TODO: Add Media
//      https://dev.twitter.com/rest/reference/post/media/upload
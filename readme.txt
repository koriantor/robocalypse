TWITTER TODOS:
	FRONT END:
		-Inject html into page through content script
		-Synchronize selected bobby, maintain state across all dropdowns.
		-Hijack Tweet button to TweetAs(bobby)
			-Event Listener on identifying button attribute?
			-Read value from DDL (doesn't matter which if all synced)
		-Styles
	
	BACKEND:
		-TweetAs(bobby, tweetContent)
		-TweetAs(bobby, tweetContent, tweetRespondingTo)
			-Redirect to new tweet
			-use promises?
		-Authentication
		
	FUTURE:
		-Basic Extension Icon Interface
			-Consider implementing this first so team can use functionality
		-Options interface for advanced features
			-"You're tweeting as X.  Are you sure?"
		-Auto refresh
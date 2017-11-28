export class SubredditPost {
    /**
     * Creates an instance of SubredditPost.
     * @param {string} _id 
     * @param {String} user_name 
     * @param {String} title 
     * @param {String} text 
     * @param {Number} total_votes 
     * @param {String} subreddit_cat 
     * @memberof SubredditPost
     */
    constructor(
        public _id: string,
        public user_name: String,
        public title: String,
        public text : String,
        public total_votes: Number,
        public subreddit_cat: String
    ){} 

    static CreateDefault(): SubredditPost {
        return new SubredditPost('','', '', '',0,'');
    }
}
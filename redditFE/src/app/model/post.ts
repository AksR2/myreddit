export class Post {
    /**
     * Creates an instance of Post.
     * @param {string} _id 
     * @param {String} title 
     * @param {String} text 
     * @param {String} subreddit 
     * @param {String} imageurl 
     * @param {Number} votes
     * @param {String} comments 
     * @memberof Post
     */
    constructor(
        public _id: string,
        public title: String,
        public text : String,
        public subreddit: String,
        public imageurl : String,
        public votes: Number,
        public comments: String
    ){} 

    static CreateDefault(): Post {
        return new Post('','', '', '','',0,'');
    }
}
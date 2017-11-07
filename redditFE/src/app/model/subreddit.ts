export class SubredditPost {
    
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
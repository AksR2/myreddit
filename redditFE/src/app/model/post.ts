export class Post {
    
    constructor(
        public _id: string,
        public title: String,
        public text : String,
        public subreddit: String,
    ){} 

    static CreateDefault(): Post {
        return new Post('','', '', '');
    }
}
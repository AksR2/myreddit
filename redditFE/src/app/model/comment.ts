export class Comment {
    
    constructor(
        public _id: string,
        public postid: String,
        public user_name:String,
        public comment: String
    ){} 

    static CreateDefault(): Comment {
        return new Comment('','', '','');
    }
}
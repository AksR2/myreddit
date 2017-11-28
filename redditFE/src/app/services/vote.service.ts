import { Injectable } from '@angular/core';

@Injectable()
export class VoteService {
    constructor() {}

    upvote(subreddit){
        subreddit.total_votes += subreddit.total_votes;
        return subreddit.total_votes;
    }
    downvote(subreddit){
        subreddit.total_votes -= subreddit.total_votes;
        return subreddit.total_votes;
    }

}

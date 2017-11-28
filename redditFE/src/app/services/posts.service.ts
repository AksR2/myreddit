import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Post } from '../model/post';
import { Comment } from '../model/comment';
import { SubredditPost } from '../model/subreddit'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/**
 * 
 * g
 * @export
 * @class PostService
 */
@Injectable()
export class PostService {
    /**
     * Creates an instance of PostService.
     * @param {Http} http 
     * @memberof PostService
     */
    constructor(private http: Http) { 
    }
/**
 * 
 * get the post based on a search criteria
 * @param {*} searchCriteria 
 * @returns {Observable<Post[]>} 
 * @memberof PostService
 */
getPosts(searchCriteria:any) : Observable<Post[]>{
        let params: URLSearchParams = new URLSearchParams();
        params.set('title', searchCriteria);

        return this.http.get("http://localhost:3000/getPosts", { search: params })
                .map((res:any) => {
                    return res.json();
                })
                .catch((error:any) => {
                    return Observable.throw(error.json ? error.json().error : error || 'Server error')
                }); 
    }
/**
 * get subreddit posts based on categories
 * 
 * @param {*} searchCriteria 
 * @returns {Observable<SubredditPost[]>} 
 * @memberof PostService
 */
getPostssub(searchCriteria:any) : Observable<SubredditPost[]>{
        let params: URLSearchParams = new URLSearchParams();
        params.set('subreddit_cat', searchCriteria);

        return this.http.get("http://localhost:3000/getPostssub", { search: params })
                .map((res:any) => {
                    console.log(res.json);
                    return res.json();
                })
                .catch((error:any) => {
                    console.log(error);
                    return Observable.throw(error.json ? error.json().error : error || 'Server error')
                }); 
    }
/**
 * inserting new posts based on user inputs
 * 
 * @param {Post} post 
 * @returns {Observable<any>} 
 * @memberof PostService
 */
insertNewPost(post:Post): Observable<any>{
        return this.http.post("http://localhost:3000/insertPost", post)
            .map((res:any) => {
                return res.json();
            })
            .catch((error:any) => {
                return Observable.throw(error.json ? error.json().error : error || 'Server error')
            }); 
    }
/**
 * update the posts as per users
 * 
 * @param {Post} post 
 * @returns {Observable<any>} 
 * @memberof PostService
 */
updatePost(post:Post): Observable<any>{
        return this.http.post("http://localhost:3000/updatePost", post)
            .map((res:any) => {
                return res.json();
            })
            .catch((error:any) => {
                return Observable.throw(error.json ? error.json().error : error || 'Server error')
            }); 
    }
/**
 * delete any particular post based on postId
 * 
 * @param {Post} post 
 * @returns {Observable<any>} 
 * @memberof PostService
 */
deletePost(post:Post): Observable<any>{
        return this.http.post("http://localhost:3000/deletePost", { id: post._id })
        .map((res:any) => {
            return res.json();
        })
        .catch((error:any) => {
            return Observable.throw(error.json ? error.json().error : error || 'Server error')
        });
    }

    upVote(post:Post): Observable<any>{
        return this.http.post("http://localhost:3000/upVote", post)
            .map((res:any) => {
                return res.json();
            })
            .catch((error:any) => {
                return Observable.throw(error.json ? error.json().error : error || 'Server error')
            }); 
    }

    downVote(post:Post): Observable<any>{
        return this.http.post("http://localhost:3000/downVote", post)
            .map((res:any) => {
                return res.json();
            })
            .catch((error:any) => {
                return Observable.throw(error.json ? error.json().error : error || 'Server error')
            }); 
    }

    getCommentsForPost(searchCriteria:any) : Observable<Comment[]>{
        let params: URLSearchParams = new URLSearchParams();
        params.set('postid', searchCriteria);

        return this.http.get("http://localhost:3000/getComments", { search: params })
                .map((res:any) => {
                    console.log(res.json);
                    return res.json();
                })
                .catch((error:any) => {
                    console.log(error);
                    return Observable.throw(error.json ? error.json().error : error || 'Server error')
                }); 
    }

    insertNewComment(comment:Comment): Observable<any>{
        return this.http.post("http://localhost:3000/insertComment", comment)
            .map((res:any) => {
                return res.json();
            })
            .catch((error:any) => {
                return Observable.throw(error.json ? error.json().error : error || 'Server error')
            }); 
    }

    getPostByID(searchCriteria:any) : Observable<Post[]>{
        let params: URLSearchParams = new URLSearchParams();
        params.set('_id', searchCriteria);

        return this.http.get("http://localhost:3000/getPostByID", { search: params })
                .map((res:any) => {
                    return res.json();
                })
                .catch((error:any) => {
                    return Observable.throw(error.json ? error.json().error : error || 'Server error')
                }); 
    }
}
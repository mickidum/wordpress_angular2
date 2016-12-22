import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Post } from './post';

@Injectable()
export class PostsService {

private postsUrl = "http://localhost/foundation_press/wp-json/wp/v2/";

constructor(private http: Http) { }

getPosts(page: any = 1): Observable<Post[]> {

    return this.http
      .get(this.postsUrl + `posts?per_page=3&page=${page}&_embed`)
      .map((res: Response) => res.json());

}

getPost(slug): Observable<Post> {

      return this.http
        .get(this.postsUrl + `posts?filter[name]=${slug}&_embed`)
        .map((res: Response) => res.json());

}

getPage(slug): Observable<Post> {

      return this.http
        .get(this.postsUrl + `pages?filter[name]=${slug}&_embed`)
        .map((res: Response) => res.json());

}

}

import { 
  Component, 
  OnChanges, 
  OnInit, 
  SimpleChanges, 
  signal, 
  effect, 
  computed
} from "@angular/core";
import { AsyncPipe, NgForOf } from "@angular/common";
import { toObservable } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { injectSelector, injectDispatch } from "@reduxjs/angular-redux";
import { RootState } from "./store";
import { decrement, increment, reset, fetchPosts } from "./store/counter-slice";

@Component({
  selector: "counter-component",
  imports: [AsyncPipe, NgForOf],
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit, OnChanges {
  
  count = injectSelector((state: RootState) => state.counter.value);
  posts = injectSelector((state: RootState) => state.counter.posts);

  // signal to observable
  count$ = toObservable(this.count);
  posts$ = toObservable(this.posts);

  postTitles$ = this.posts$.pipe(map(posts => posts.map((val) => ({ ...val, title: val.title.toUpperCase()}) )))

  constructor() {
    this.count$.subscribe(value => console.log(`The count is ${value}`));
    this.postTitles$.subscribe(postTitles => console.log('postTitales are', postTitles));
    // example using effect
    // effect(() => console.log(`Display the count ${this.count()} from effect fn`))
  }

  dispatch = injectDispatch();

  increment = increment;
  decrement = decrement;
  getPosts = fetchPosts;
  reset = reset;

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log('ngOnChanges')
  }
}

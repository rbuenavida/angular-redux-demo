import { 
  Component, 
  OnChanges, 
  OnInit, 
  SimpleChanges, 
  signal, 
  effect, 
  computed
} from "@angular/core";
import { toObservable } from '@angular/core/rxjs-interop';
import { injectSelector, injectDispatch } from "@reduxjs/angular-redux";
import { RootState } from "./store";
import { decrement, increment, reset, fetchPosts } from "./store/counter-slice";

@Component({
  selector: "counter-component",
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent implements OnInit, OnChanges {
  
  count = injectSelector((state: RootState) => {
    return state.counter.value
  });

  // signal to observable
  count$ = toObservable(this.count);

  constructor() {
    this.count$.subscribe(value => console.log(`The count is ${value}`));

    // example using effect
    // effect(() => console.log(`Display the count ${this.count()} from effect fn`))
  }

  postTitles = injectSelector((state: RootState) => {
    const titles = Object.entries(state.counter.posts).map((post, index) => state.counter.posts[index].title)
    return titles;
  });

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

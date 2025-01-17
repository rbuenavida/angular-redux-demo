import { Component } from "@angular/core";
import { injectSelector, injectDispatch } from "@reduxjs/angular-redux";
import { RootState } from "./store";
import { decrement, increment, reset, fetchPosts } from "./store/counter-slice";

@Component({
  selector: "counter-component",
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent {

  count = injectSelector((state: RootState) => state.counter.value);

  postTitles = injectSelector((state: RootState) => {
    console.log("In postTitles injectSelector")
    const titles = Object.entries(state.counter.posts).map((post, index) => state.counter.posts[index].title)
    return titles;
  });

  /*
  REACT
  const mainBtnItems = useSelector((state) => selectCurrentFormBlockParameter(state, "mainBtn", "items"));
  if (!mainBtnItems || !dataSource) {
    return <div>Loading...</div>;
  }
  
  // let's say we wanted to do something like this
  // whenever the state changes, some postTitles variable would contain the latest values from the state
  // Angular template would have the changes reflected in the dom but how can we have it in the component logic?
  // would like to use the postTitles inside the component logic with updated redux values

  ANGULAR
  postTitles = injectSelector((state: RootState) => {
    const titles = Object.entries(state.counter.posts).map((post, index) => state.counter.posts[index].title)
    return titles;
  });

  // for instace how to acheive this ?
  if (!postTitles) {
    console.log('no post titles yet..')
  } else {
    console.log('post title exist now', postTitles)
  }
  */

  /*
  REACT HOOK example
  export function useCanvaItems(canva) {
    const blocks = useSelector((state) => selectAllCurrentFormBlocks(state));
    const currentRecord = useSelector((state) => selectCurrentRecord(state));

    const propToCheck = currentRecord !== 0 ? "update_allowed" : "insert_allowed";

    const gridItems = useMemo(() => {
    })
  }
  */

  dispatch = injectDispatch();

  increment = increment;
  decrement = decrement;
  getPosts = fetchPosts;
  reset = reset;
}

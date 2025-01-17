import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  posts: Array<any>
  postsLoadingState: string
}

const initialState: CounterState = {
  value: 0,
  posts: [],
  postsLoadingState: ""
}

export const fetchPosts:any = createAsyncThunk('counter/fetchPosts', async () => {
  console.log('in fetchPosts thunk')
  const response: any = await fetch('https://jsonplaceholder.typicode.com/users/1/posts')
  const posts = await response.json();
  return posts
})

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
      state.postsLoadingState = ""
      state.posts = []
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        console.log(action)
        state.postsLoadingState = "Loading..."
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        const posts: Array<{}> = []
        console.log(action)
        state.postsLoadingState = "Loaded"
        action.payload.map((post: any) => {
          posts.push(post)
        })
        state.posts = posts
      })
  }
})

export const { increment, decrement, reset, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer

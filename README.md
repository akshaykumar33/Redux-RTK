# Redux-RTK
# Store:
->A store is a central place where the state of our application is stored and it can be created using the configureStore function,and it holds the entire state tree of our application.

# Slice
->A slice is a piece of store state and the coresssponding reducer  logic to update that slice.Slices are a way to organize our Redux store by breaking it down into smaller,more manageable parts.
=>Slice Analogy:
Imagine you have a big cake,and you want to cut it into 
smaller,more manageable pieces.Each smaller piece is like a "slice" of the cake.In the context redux toolkit a "slice" is like a smaller part of your application's overall state and instructions on how to change or update the specific part.

# Reducers
->They are like the instructions on what to do with each slice of cake. 
->They defined how the information in a particular slice can be changed or updated.

# Actions
->They are like the requests or commands you give to change a specific slice of cake.
->For eg.you might have an action called "Eat a Bite" that instructs how to take a bite froma a slice.

# useSelector() Hook
->It allows us to read data from the redux store.

# useDispatch() Hook
->The dispatch function is used to send actions to the store,triggering updates to the application state.
->In simpler terms,it lets you change the state in your 
Redux store from within your React components.

# RTK Query
->It is specifically designed to simplify data fetching,caching and state management for ApI calls in a React and Redux application.


export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote)

    case "REMOVE_QUOTE":
      return state.filter(state => state.id !== action.quoteId)

    case "UPVOTE_QUOTE":
      return (state.map(stateIn => {
        if (stateIn.id === action.quoteId) {
          return (
            { ...stateIn, votes: stateIn.votes + 1 }
          )
        }
        else {
          return stateIn
        }
      }
      ))

    case "DOWNVOTE_QUOTE":
      return (state.map(stateIn => {
        if ((stateIn.id === action.quoteId) && (stateIn.votes > 0)) {
          return (
            { ...stateIn, votes: stateIn.votes - 1 }
          )
        }
        else {
          return stateIn
        }
      }
      ))

    default:
      return state
  }
}

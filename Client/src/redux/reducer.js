const initialState = {
  myFavorites: [],
  allCharacters: [],
  darkMode: false
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload
      }
    case "REMOVE_FAV":
      return {
        ...state,
        myFavorites: action.payload
      }
    case "FILTER":
      const allCharactersFiltered = state.allCharacters.filter((char) => char.gender === action.payload)
      return {
        ...state,
        myFavorites: allCharactersFiltered
      }
    case "ORDER":
      const allCharactersCopy = [...state.allCharacters]
      return{
        ...state,
        myFavorites:
        action.payload === "A"
        ? allCharactersCopy.sort((a, b) => a.id - b.id)
        : allCharactersCopy.sort((a, b) => b.id - a.id)
      };
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode
      }
    default:
      return {...state}
  }
}

export default reducer;
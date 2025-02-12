import authors from "../data";
const initialState = {
  authors: authors
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR": {
      const newAuthor = {
        id: state.authors.length + 1,
        first_name: "Author",
        last_name: "McAuthorFace",
        imageUrl:
          "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
        books: [
          {
            title: "Anonymous book",
            color: "mysterious color"
          }
        ]
      };
      const newAuthors = state.authors.concat(newAuthor);
      return {
        ...state,
        authors: newAuthors
      };
    }
    case "DELETE_AUTHOR": {
      const newAuthors = state.authors.filter(author => {
        return author.id != action.payload.id;
      });
      return {
        ...state,
        authors: newAuthors
      };
    }
    default:
      return state;
  }
};

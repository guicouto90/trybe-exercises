import { SELECT_MOVIE } from "./actionTypes";

const actionsSelectMovie = (movie,category) => ({
    type: SELECT_MOVIE,
    movie,
    category,
});

export default actionsSelectMovie;

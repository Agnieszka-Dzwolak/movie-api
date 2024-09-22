import findMovie from '../utils/findMovie.js';

let movies = [
    {
        id: '1',
        title: '101 Dalmatians',
        year: 1961
    },
    {
        id: '2',
        title: 'Bambi',
        year: 1942
    },
    {
        id: '3',
        title: 'Toy Story',
        year: 1995
    },
    {
        id: '4',
        title: 'Beauty and the Beast',
        year: 1991
    },
    {
        id: '5',
        title: 'The Lion King',
        year: 1994
    }
];

const movieControllers = {
    getMovies: (req, res) => {
        res.status(200).json(movies);
    },
    getMovie: (req, res) => {
        const { id } = req.params;
        const movieExist = findMovie(movies, id);
        if (movieExist) {
            res.status(200).json(movieExist);
        } else {
            res.status(404).json({
                message: `Movie with id ${id} doesn't exist`
            });
        }
    },
    addMovie: (req, res) => {
        const { title, year } = req.body;

        if (!title || !year) {
            res.status(400).json({
                message: `You have to provide title and year`
            });
        } else {
            const newMovie = { id: String(movies.length + 1), title, year };

            movies.push(newMovie);
            res.status(201).json(newMovie);
        }
    },
    updateMovie: (req, res) => {
        const { id } = req.params;
        const { title, year } = req.body;

        const movieExist = findMovie(movies, id);
        if (movieExist) {
            if (!title || !year) {
                res.status(400).json({
                    message: `You have to provide title and year`
                });
            } else {
                movieExist.title = title;
                movieExist.year = year;

                res.status(200).json(movieExist);
            }
        } else {
            res.status(404).json({
                message: `Movie with id ${id} doesn't exist`
            });
        }
    },
    deleteMovie: (req, res) => {
        const { id } = req.params;
        const movieExist = findMovie(movies, id);
        if (movieExist) {
            movies = movies.filter((movie) => movie.id !== id);
            res.status(200).json({
                message: `Movie with id ${id} deleted successfully`
            });
        } else {
            res.status(404).json({
                message: `Movie with id ${id} doesn't exist`
            });
        }
    }
};

export default movieControllers;

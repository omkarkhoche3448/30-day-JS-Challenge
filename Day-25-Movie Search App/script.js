document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    fetchMovies(query);
});

function fetchMovies(query) {
    const apiKey = '1c1054c69f9dfb1c303d8b5cdd221f19';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results.length > 0) {
                displayMovies(data.results);
            } else {
                alert('No results found.');
            }
        })
        .catch(error => console.error('Error fetching movie data:', error));
}

function displayMovies(movies) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        const posterPath = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'placeholder.jpg'; // Provide a placeholder image if poster_path is null
        movieDiv.innerHTML = `
            <img src="${posterPath}" alt="${movie.title}">
            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
            <button class="more-info-btn" onclick="fetchMovieDetails(${movie.id})">More Info</button>
        `;
        resultsContainer.appendChild(movieDiv);
    });
}

function fetchMovieDetails(movieId) {
    const apiKey = '1c1054c69f9dfb1c303d8b5cdd221f19';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&append_to_response=credits`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMovieDetails(data);
        })
        .catch(error => console.error('Error fetching movie details:', error));
}

function displayMovieDetails(movie) {
    const modal = document.getElementById('modal');
    const modalDetails = document.getElementById('modalDetails');

    modalDetails.innerHTML = `
        <h2>${movie.title}</h2>
        <img width="200px" height="200px" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <p><strong>Release Date:</strong> ${movie.release_date}</p>
        <p><strong>Director:</strong> ${getDirectors(movie.credits.crew)}</p>
        <p><strong>Actors:</strong> ${getActors(movie.credits.cast)}</p>
        <p><strong>Overview:</strong> ${movie.overview}</p>
    `;

    modal.style.display = "block";

    document.getElementsByClassName('close')[0].onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function getDirectors(crew) {
    return crew.filter(member => member.job === 'Director').map(director => director.name).join(', ');
}

function getActors(cast) {
    return cast.slice(0, 5).map(actor => actor.name).join(', ');
}

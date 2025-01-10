const startAddMovieBtn = document.querySelector("header button");
const movieModel = document.querySelector("#add-modal");
const addMovieBtn = document.querySelector(".btn--success");
const cancelBtn = document.querySelector(".btn--passive");
const backdrop = document.getElementById("backdrop");
const userInputs = document.querySelectorAll("input");
const entryTextArea = document.querySelector("#entry-text")
const movieList = document.getElementById("movie-list")

const movies = []

function updateUi(){
    if(movies.length >= 1){
        entryTextArea.style.display = "none"
    }else{
        entryTextArea.style.display = "block"
    }
}

function toggleAddMovieModel() {
  movieModel.classList.toggle("visible");
  backdrop.classList.toggle("visible");
}

function clearMovieInputs(){
    for(const userInput of userInputs){
        userInput.value = ""
    }
}

function renderNewMovie(title, img, rating){
    const newMovieElement = document.createElement("li");
    newMovieElement.className = "movie-element"
    newMovieElement.innerHTML = `
    <div class="movie-element__image"> 
        <img src="${img}" >
    </div>
    <div>
        <h2> ${title} </h2>
        <p> ${rating} </p>
    </div>
    `;
    movieList.append(newMovieElement);

}

startAddMovieBtn.addEventListener("click", toggleAddMovieModel);
addMovieBtn.addEventListener("click", () => {
  const movieTitle = userInputs[0].value;
  const imgUrl = userInputs[1].value;
  const movieRating = userInputs[2].value;
  if (
    movieTitle.trim() === "" ||
    imgUrl.trim() === "" ||
    movieRating.trim() === "" ||
    movieRating > 5 ||
    movieRating < 1
  ) {
    alert("please enter valid inputs");
    return;
  }
  const newMovie = {
    title: movieTitle,
    img: imgUrl,
    rating : movieRating
  }

  movies.push(newMovie);
  clearMovieInputs()
  toggleAddMovieModel();
  renderNewMovie(movieTitle, imgUrl, movieRating)
  updateUi();
});
backdrop.addEventListener("click", toggleAddMovieModel);
cancelBtn.addEventListener("click", toggleAddMovieModel);

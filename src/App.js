import React, { useState } from "react";
import "./styles.css";

const movieDictionary = {
  oldBollywoodClassics: [
    {
      name: "Don",
      rating: "7.2/10",
      releaseYear: "1978",
      about:
        "Don featuring  Amitabh Bachchan in a double role, that of a mafioso and a simpleton - went on to become a blockbuster with its racy music, iconic dialogues and pulsating action.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Don_1978_poster.jpg/220px-Don_1978_poster.jpg"
    },
    {
      name: "Shahenshah",
      rating: "8.3/10",
      releaseYear: "1988",
      about:
        "Shahenshah is a 1988 Indian Hindi-language vigilante action film starring Amitabh Bachchan in the title role, along with Meenakshi Sheshadri. The film was produced and directed by Tinnu Anand..",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Shahenshah_%281988%29.jpg/220px-Shahenshah_%281988%29.jpg"
    },
    {
      name: "Awaara",
      rating: "8.9/10",
      releaseYear: "1951",
      about:
        "Awaara, also written Awāra and known overseas as The Vagabond, is a 1951 Indian crime drama film, produced and directed by Raj Kapoor, and written by Khwaja Ahmad Abbas.The film expresses socialist themes,[2][5] and blends social and reformist themes with the crime, romantic comedy and musical melodrama genres.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Awaara_poster.jpg/220px-Awaara_poster.jpg"
    }
  ],
  scifiHollywood: [
    {
      Title: "Inception",
      rating: "8.8/10",
      releaseYear: "2010",
      about:
        "Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg"
    },
    {
      name: "Interstellar",
      rating: "8.4/10",
      releaseYear: "2014",
      about:
        " Interstellar is a 2014 American-British epic science fiction film directed and produced by Christopher Nolan.A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
    },
    {
      name: "Arrival",
      rating: "7.5/10",
      releaseYear: "2016",
      about:
        "For his final assignment, a top temporal agent must pursue the one criminal that has eluded him throughout time. The chase turns into a unique, surprising and mind-bending exploration of love, fate, identity and time travel taboos.",
      image:
        "https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_UX182_CR0,0,182,268_AL__QL50.jpg"
    }
  ],
  comedyHindiMovies: [
    {
      name: "Bhool Bhulaiyaa",
      releaseYear: "2007",
      rating: "6.3/10",
      about:
        "Bhool Bhulaiyaa (transl. Maze) is a 2007 Indian Hindi-language comedy horror film directed by Priyadarshan. It is an official remake of the 1993 Malayalam film, Manichitrathazhu. The film stars Akshay Kumar, Shiney Ahuja, Vidya Balan, Ameesha Patel, Paresh Rawal, Manoj Joshi, Asrani, Rajpal Yadav and Vikram Gokhale.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Bhool_bhulaiyaa.jpg/220px-Bhool_bhulaiyaa.jpg"
    },
    {
      name: "De Dana Dan",
      rating: "4.9/10",
      releaseYear: "2009",
      about:
        "De Dana Dan (transl. Hit left and right) is a 2009 Indian Hindi-language comedy film directed by Priyadarshan. The story is a partial adaptation of Hollywood film Screwed and some scenes from Priyadarshan's own Malayalam film Vettam. It stars Katrina Kaif, Akshay Kumar, Sunil Shetty, Paresh Rawal, Sameera Reddy and Neha Dhupia.",
      image: "https://upload.wikimedia.org/wikipedia/en/2/2b/Dedanadan.jpg"
    },
    {
      name: "Housefull 2",
      releaseYear: "2012",
      rating: "6.6/10",
      about:
        "Housefull 2 (also known as Housefull 2: The Dirty Dozen) is an 2012 Indian Hindi-language action comedy film directed by Sajid Khan and produced by Sajid Nadiadwala under the banner of Nadiadwala Grandson Entertainment.",
      image: "https://upload.wikimedia.org/wikipedia/en/f/fa/Housefull_2.jpg"
    }
  ],
  indianPatriotic: [
    {
      name: " The Legend of Bhagat Singh",
      releaseYear: "2002",
      rating: "9.0/10",
      about:
        "The Legend of Bhagat Singh is a 2002 Indian Hindi-language biographical period film directed by Rajkumar Santoshi. The film is about Bhagat Singh, a socialist revolutionary who fought for Indian independence along with fellow members of the Hindustan Republic Association. It features Ajay Devgn as the titular character along with Sushant Singh, D. Santosh and Akhilendra Mishra as the other lead characters. Raj Babbar, Farida Jalal and Amrita Rao play supporting roles.",
      image:
        "https://upload.wikimedia.org/wikipedia/en/c/c5/The_Legend_of_Bhagat_Singh.jpg"
    },
    {
      name: "Parmanu: The Story of Pokhran",
      releaseYear: "2018",
      rating: "7.1/10",
      about:
        "Parmanu: The Story of Pokhran  is a 2018 Indian Hindi-language historical action drama film[3][4] directed by Abhishek Sharma and jointly written by Saiwyn Quadras, Sanyuktha Chawla Sheikh and Sharma.It is built around the narrative of Pokhran Nuclear Test done in 1998",
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/da/Parmanu_film_poster.jpeg"
    },
    {
      name: "Airlift",
      releaseYear: "2016",
      rating: "6.9/10",
      about:
        "The film follows Ranjit Katyal (Akshay Kumar), a Kuwait-based businessman, as he carries out the evacuation of Indians based in Kuwait during the Invasion of Kuwait by Saddam Hussein's Iraq.[5][6] The story of film is adapted from real life story of a Kuwait based Malayali businessman named Mathunny Mathews",
      image: "https://upload.wikimedia.org/wikipedia/en/3/35/Airlift_poster.jpg"
    }
  ]
};

export default function App() {
  const [meaning, setMeaning] = useState("oldBollywoodClassics");

  function genreClickHandler(genre) {
    setMeaning(genre);
  }
  return (
    <div className="App">
      <h1>MovieCatalogue</h1>
      <p>Lookout for the movies according to your choice.</p>
      <div className="genreButton">
        {Object.keys(movieDictionary).map((genre) => (
          <button key={genre} onClick={() => genreClickHandler(genre)}>
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <ul>
        {movieDictionary[meaning].map(function (movie) {
          return (
            <div className="output-div" key={movie.name}>
              <section className="movieoutput">
                <div className="left-img">
                  <img className="img" src={movie.image} alt="City" />
                </div>
                <div className="right-text">
                  <div className="text-movie">Name: {movie.name}</div>
                  <div className="medium-text">Rating: {movie.rating}</div>
                  <div className="medium-text">
                    YearOfRelease: {movie.releaseYear}
                  </div>
                  <div className="desc-text">
                    <strong>Description: </strong>
                    {movie.about}
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

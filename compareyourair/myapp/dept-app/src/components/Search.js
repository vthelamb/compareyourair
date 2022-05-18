import React from "react";
import { useState } from "react";
import axios from "axios";
import '../pages/index.css';

function Search(props) {
  const { cities, setCards } = props;
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const url = `https://u50g7n0cbj.execute-api.us-east-1.amazonaws.com/v2/measurements?date_from=2000-01-01T00%3A00%3A00%2B00%3A00&date_to=2022-05-15T20%3A21%3A00%2B00%3A00&limit=100&page=1&offset=0&sort=desc&radius=1000&country_id=gb&city=${text}&order_by=datetime`;
    const response = await axios.get(url);
    console.log(response.data);
    const data = response.data.results;
    const cardArray = data.map((place) => {
      const theDateThatIneedIntheCard = {
        location: place.location,
        city: place.city,
        parameter: place.parameter,
        value: place.value,
        date: place.date,
      };
      return theDateThatIneedIntheCard;
    });
    setCards(cardArray);
  };
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = cities.filter((city) => {
        //In here I am creating a regular expression object
        const regex = new RegExp(`${text}`, "gi");
        //const pattern = /[]/
        return city.match(regex);
      });
    }
    setSuggestions(matches);
    setText(text);
  };

  function onClickHandler(suggestion) {
    setText(suggestion);
    setSuggestions([]);
  }
  return (
    <div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <label>Type the city here: </label>
        <input
          type="text"
          value={text}
          onChange={(e) => onChangeHandler(e.target.value)}
        ></input>
        <input type="submit" value="Submit" />
        <div>
        <ul>
          {suggestions.map((suggestion) => (
            <li onClick={(e) => onClickHandler(suggestion)}>{suggestion}</li>
          ))}
        </ul>
        </div>
      </form>
    </div>
  );
}

export default Search;

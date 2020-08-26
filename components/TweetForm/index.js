import { useState } from "react";
import { visualizar, getTweetByUrl } from "../../services/visualizador";
import {getTweet} from "../../services/twitter"
export default function TweetForm({setTweet}) {

  const [url, setUrl] = useState("");

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getTweet({url})
    .then(
      (response)=>{
        console.log(response)
        setTweet(response.text)
      }
    )
    //setTweet(getTweetByUrl({ url }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="f6 b db mb2">
          URL
        </label>
        <input
          id="name"
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
          onChange={handleChange}
        />
        <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-blue">
          Buscar Tweet
        </button>
      </div>
    </form>
  );
}

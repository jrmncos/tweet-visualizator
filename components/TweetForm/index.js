import { useState } from "react";
import { visualizar, getTweetByUrl } from "../../services/visualizador";

export default function TweetForm() {
  const [url, setUrl] = useState("");
  const [tweet, setTweet] = useState("");

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTweet(getTweetByUrl({ url }));
  };

  const tweetText = (
    <>
      {" "}
      <label for="comment" class="f6 b db mb2">
        Tweet
      </label>
      <textarea
        id="comment"
        name="comment"
        class="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
        aria-describedby="comment-desc"
        disabled
        draggable="false"
        value={tweet}
      ></textarea>
      <small id="comment-desc" class="f6 black-60">
        Si este no es el tweet que esperabas, ingresa aca{" "}
        <a href="#" class="link underline black-80 hover-blue">
          Problemas con el tweet?
        </a>
      </small>
    </>
  );

  return (
    <form class="pa4 black-80" onSubmit={handleSubmit}>
      <div>
        <label for="name" class="f6 b db mb2">
          URL
        </label>
        <input
          id="name"
          class="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
          onChange={handleChange}
        />
        <button class="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-light-blue">
          Visualizar
        </button>
        {tweet && tweetText}
      </div>
    </form>
  );
}

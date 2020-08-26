export default function Tweet({tweetText}){
    return(
        <>
          <label htmlFor="comment">
            Tweet
          </label>
          <textarea
            id="comment"
            name="comment"
            className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
            aria-describedby="comment-desc"
            disabled
            draggable="false"
            value={tweetText}
          ></textarea>
          <small id="comment-desc" className="f6 black-60">
            Si este no es el tweet que esperabas, ingresa aca{" "}
            <a href="#" className="link underline black-80 hover-blue">
              Problemas con el tweet?
            </a>
          </small>
        </>
      );
}
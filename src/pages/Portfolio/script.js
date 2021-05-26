<div className="col-md-12 mb-4">
<button
  onClick={(e) => setImg("movie")}
  type="button"
  className="nes-btn"
>
  Movie-Search
</button>
<button
  onClick={(e) => setImg("face")}
  type="button"
  className="nes-btn is-warning"
>
  Face-Detect
</button>
<button
  onClick={(e) => setImg("ts")}
  type="button"
  className="nes-btn is-error"
>
  TrippySamples
</button>
<button
  onClick={(e) => setImg("all")}
  type="button"
  className="nes-btn is-success"
>
  All
</button>
{img === "movie" ? (
              <a href="https://trippyy28.github.io/Movie-Search/">
                <img src={Safe} className="img-responsive" alt="" />
                <p>Small app for searching movie using React Hooks and Api</p>
              </a>
            ) : null}
            {img === "face" ? (
              <a href="https://trippyy28.github.io/face-detection/">
                <img src={Circus} className="img-responsive" alt="" />
                <p>Nice Small React App for Face Detection!</p>
              </a>
            ) : null}
            {img === "ts" ? (
              <a href="https://trippyy28.github.io/trippyysamplesdemo/">
                <img src={Game} className="img-responsive" alt="" />
                <p>
                  My Personal Sample Pack E-commerce website (Still in
                  progress!)
                </p>
              </a>
            ) : null}
            {img === "all" ? (
              <div>
                <a href="https://trippyy28.github.io/face-detection/">
                  <img src={Circus} className="img-responsive" alt="" />
                  <p>Face-Detection</p>
                </a>
                <a href="https://trippyy28.github.io/trippyysamplesdemo/">
                  <img src={Game} className="img-responsive" alt="" />
                  <p>Trippy Samples</p>
                </a>
                <a href="https://trippyy28.github.io/Movie-Search/">
                  <img src={Safe} className="img-responsive" alt="" />
                  <p>Movie-Search</p>
                </a>
              </div>
            ) : null}
            <p>Just Click The Picture!</p>
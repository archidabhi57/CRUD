import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Match() {
  const [matchies, setMatchies] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    fetch("https://6310390036e6a2a04ee856d8.mockapi.io/Match")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setMatchies(res);
      });
  }, []);

  const formatedMatch = matchies.map((mac) => {
    return (
      <>
        <div
          class="col-md-3 "
          onClick={() => {
            navigator("../Match/" + mac.id);
          }}
        >
          <div class="card size">
            <div class="row">
              <div class="col-6 ">
                <img
                  src={mac.Team1Image}
                  class="card-img-top divsize1"
                  alt="..."
                />
              </div>
              <div class="col-6">
                <img
                  src={mac.Team2Image}
                  class="card-img-top divsize2"
                  alt="..."
                />
              </div>
            </div>
            <div class="card-body">
              <h2 class="card-title name ">
                {mac.Team1Name} v/s {mac.Team2Name}
              </h2>
              <div class="text-center">
                <a href=" " class="btn btn-outline-warning">
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div class="row">{formatedMatch}</div>
    </>
  );
}

export default Match;

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MatchDetail() {
  let params = useParams();
  const navigate = useNavigate();
  const apiURL = "https://6310390036e6a2a04ee856d8.mockapi.io/Match";

  useEffect(() => {
    fetch(apiURL + "/" + params.id, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((res) => setMatch(res));
  }, []);
  const [match, setMatch] = useState({});

  return (
    <>
      <div class="row text-center backimg">
        <div class="col-3">
          <div class="card dSize1">
            <img src={match.Team1Image} class="card-img-top img1" alt="..." />
            <div class="card-body dName1">
              <h5 class="card-title ">{match.Team1Name}</h5>
            </div>
          </div>
        </div>

        <div class="col-3">
          <div class="card dSize2">
            <img src={match.Team2Image} class="card-img-top img2" alt="..." />
            <div class="card-body dName2">
              <h5 class="card-title ">{match.Team2Name}</h5>
            </div>
          </div>
        </div>

        <div class="text-center text1 ">
          <h4>Match Date : {match.MatchDate}</h4>
        </div>

        <div class="text-center text2 ">
          <h4>Winner : {match.WinnerTeam}</h4>
        </div>
      </div>
      <div className="d-grid gap-2 col-6 mx-auto">
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={() => {
            fetch(
              "https://6310390036e6a2a04ee856d8.mockapi.io/Match/" + params.id,
              {
                method: "DELETE"
              }
            ).then((res) => {
              navigate("/matchies");
            });
          }}
        >
          Delete
        </button>

        <button
          type="button"
          class="btn btn-outline-warning"
          onClick={() => {
            navigate("/matchies/edit/" + params.id);
          }}
        >
          Edit
        </button>

        <button
          type="button"
          class="btn btn-outline-success"
          onClick={() => {
            navigate("/Matchies");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
}
export default MatchDetail;

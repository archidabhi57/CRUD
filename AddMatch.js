import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddMatchs() {
  const param = useParams();
  const navigate = useNavigate();
  const apiUrl = "https://6310390036e6a2a04ee856d8.mockapi.io/Match";

  useEffect(() => {
    fetch(apiUrl + "/" + param.id, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const [data, setData] = useState({});
  return (
    <>
      <div className="container d-grid gap-3 rounded-5 shadow-sm p-3 mb-5 bg-body rounded my-3">
        <div class="input-group">
          <span class="input-group-text">Match Id</span>
          <input
            value={data.id}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setData({ ...data, id: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">Team1 Name</span>
          <input
            value={data.Team1Name}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setData({ ...data, Team1Name: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">Team2 Name</span>
          <input
            value={data.Team2Name}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setData({
                ...data,
                Team2Name: e.target.value
              });
            }}
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">Winner Name</span>
          <input
            value={data.WinnerName}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setData({ ...data, WinnerName: e.target.value });
            }}
          />
        </div>
        <div class="input-group">
          <span class="input-group-text">Match Date</span>
          <input
            value={data.MatchDate}
            type="text"
            aria-label="First name"
            class="form-control"
            onChange={(e) => {
              setData({ ...data, MatchDate: e.target.value });
            }}
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            Team1 Image
          </span>
          <input
            value={data.Team1Image}
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={(e) => {
              setData({ ...data, Team1Image: e.target.value });
            }}
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="basic-addon3">
            Team2 Image
          </span>
          <input
            value={data.Team2Image}
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
            onChange={(e) => {
              setData({ ...data, Team2Image: e.target.value });
            }}
          />
        </div>
        <button
          type="button"
          class="btn btn-outline-primary btn2"
          onClick={() => {
            fetch(apiUrl, {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json"
              }
            }).then((res) => {
              navigate("/");
            });
          }}
        >
          Add Match
        </button>

        <button
          type="button"
          class="btn btn-outline-success btn2"
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

export default AddMatchs;

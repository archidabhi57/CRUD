import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditMatchs() {
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
      <div class="container">
        <table align="center">
          <tr>
            <td class="detail">Team 1 Name</td>
            <td>:</td>
            <td>
              <input
                type="text"
                value={data.Team1Name}
                onChange={(e) => {
                  setData({ ...data, Team1Name: e.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td class="detail">Team 2 Name</td>
            <td>:</td>
            <td>
              <input
                type="text"
                value={data.Team2Name}
                onChange={(e) => {
                  setData({ ...data, Team2Name: e.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td class="detail">Match date</td>
            <td>:</td>
            <td>
              <input
                type="text"
                value={data.MatchDate}
                onChange={(e) => {
                  setData({ ...data, MatchDate: e.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td class="detail">Winner Team</td>
            <td>:</td>
            <td>
              <input
                type="text"
                value={data.WinnerTeam}
                onChange={(e) => {
                  setData({ ...data, WinnerTeam: e.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td class="detail">Team 1 Image</td>
            <td>:</td>
            <td>
              <input
                type="text"
                value={data.Team1Image}
                onChange={(e) => {
                  setData({ ...data, Team1Image: e.target.value });
                }}
              />
            </td>
          </tr>
          <tr>
            <td class="detail">Team 2 Image</td>
            <td>:</td>
            <td>
              <input
                type="text"
                value={data.Team2Image}
                onChange={(e) => {
                  setData({ ...data, Team2Image: e.target.value });
                }}
              />
            </td>
          </tr>
        </table>
        <button
          type="button"
          class="btn btn-outline-primary btn2"
          onClick={() => {
            fetch(apiUrl + "/" + param.id, {
              method: "PUT",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json"
              }
            }).then((res) => {
              //console.log(res);
              navigate("/Matchies");
            });
          }}
        >
          Edit Match
        </button>
        <div>
          <button
            type="button"
            class="btn btn-outline-success btn1"
            onClick={() => {
              navigate("/Matchies");
            }}
          >
            Back
          </button>
        </div>
      </div>
    </>
  );
}

export default EditMatchs;

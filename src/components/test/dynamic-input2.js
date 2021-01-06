import React, { Component } from "react";
import ReactDOM from "react-dom";

export default class InputTest2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      SocialData: [],
      socialArray: [
        {
          id: 1,
          name: "Website",
          regex: "(https|http):\\/\\/(www\\.)*",
        },
        {
          id: 4,
          name: "Last.fm",
          regex:
            "(https|http):\\/\\/www\\.(lastfm\\.com|last\\.fm\\/|lastfm\\.ch).*",
        },
        {
          id: 5,
          name: "Facebook",
          regex: "https:\\/\\/www\\.facebook\\.com\\/.*",
        },
        {
          id: 6,
          name: "Twitter",
          regex: "(https|http):\\/\\/(twitter\\.com).*",
        },
        {
          id: 8,
          name: "Instagram",
          regex: "https:\\/\\/(instagr\\.am\\/.*|instagram\\.com\\/.*)",
        },
        {
          id: 9,
          name: "YouTube Channel",
          regex:
            "((http|https):\\/\\/|)(www\\.)?youtube\\.com\\/(channel\\/|user\\/)[a-zA-Z0-9]{1,}",
        },
        {
          id: 11,
          name: "YouTube Video",
          regex:
            "^.*(youtu.be\\/|v\\/|e\\/|u\\/\\w+\\/|embed\\/|v=)([^#\\&\\?]*).*",
        },
        {
          id: 12,
          name: "Spotify",
          regex: "spotify\\:+",
        },
      ],
    };
    this.handleAddSocial = this.handleAddSocial.bind(this);
    this.handleInputVlaueChange = this.handleInputVlaueChange.bind(this);
    this.handleRemoveSocial = this.handleRemoveSocial.bind(this);
    this.handleSocialNameChange = this.handleSocialNameChange.bind(this);
    // this.selectHandler = this.selectHandler.bind(this);
  }

  handleAddSocial() {
    let array = this.state.SocialData;
    array.push({ id: array.length + 1, socialname: "" });
    this.setState({ SocialData: array });
  }

  handleInputVlaueChange(e, idx) {
    let nextSocialData = this.state.SocialData.slice();
    nextSocialData[idx].name = e.target.value;
    this.setState({ SocialData: nextSocialData });
  }

  handleSocialNameChange(socialName, idx) {
    let nextSocialData = this.state.SocialData.slice();
    nextSocialData[idx].socialname = socialName;
    this.setState({ SocialData: nextSocialData });
  }

  handleRemoveSocial(idx) {
    let someArray = this.state.SocialData;
    someArray.splice(idx, 1);
    this.setState({ SocialData: someArray });
  }

  render() {
    return (
      <div>
        <button
          className="newFlyerButton btn mb-4"
          type="button"
          onClick={this.handleAddSocial}
        >
          <span>
            <span className="buttonText">ADD NEW</span>
          </span>
        </button>

        <table className="table mt-3 bordered table-hover  white-table addNewSocial">
          <tbody>
            {this.state.SocialData.map((Social, idx) => (
              <tr key={idx} className="row Social">
                <td className="col-6 socialInput">
                  <input
                    type="text"
                    placeholder={`Add New # ${idx + 1}`}
                    value={Social.name}
                    onChange={(e) => this.handleInputVlaueChange(e, idx)}
                  />
                </td>
                <td className="col-4 socialSelector">
                  <select
                    onChange={(e) => {
                      this.handleSocialNameChange(e.target.value, idx);
                    }}
                    value={Social.socialname || "SelectOption"}
                  >
                    <option value="SelectOption" disabled>
                      Select your option
                    </option>
                    {this.state.socialArray.map((socidata) => (
                      <option
                        value={socidata.name}
                        data={socidata}
                        key={socidata.id}
                      >
                        {socidata.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="col-2 closingLink">
                  <div
                    className="fas fa-fw fa-times"
                    onClick={() => this.handleRemoveSocial(idx)}
                  >
                    remove
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<InputTest2 />, rootElement);

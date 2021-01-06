import React, { Component, useState } from "react";
import data from "./data/data.json";

const lookup = {
  int: [
    { id: "1", text: "1" },
    { id: "2", text: "2" },
    { id: "3", text: "3" },
    { id: "4", text: "4" },
    { id: "5", text: "5" },
  ],
  abc: [
    { id: "a", text: "a" },
    { id: "b", text: "b" },
    { id: "c", text: "c" },
    { id: "d", text: "d" },
    { id: "e", text: "e" },
  ],
  ALevel: [
    { id: "56", text: "A*" },
    { id: "48", text: "A" },
    { id: "40", text: "B" },
    { id: "32", text: "C" },
    { id: "24", text: "D" },
    { id: "16", text: "E" },
  ],
  BTEC: [
    { id: "56", text: "D*" },
    { id: "48", text: "D" },
    { id: "32", text: "M" },
    { id: "16", text: "P" },
  ],
};

const newdata = data.map((data) => {
  return (
    <option key={data.id} value="ALevel">
      {data.course}
    </option>
  );
});

/* const mycoursedata = () => {
    return(
        <>
        <option value="ALevel">A Levels</option>
        <option value="abc">BTEC</option>
        </>
    );
}; */

export default class DynamicSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataValue: "int",
      value: "",
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
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  onChange = ({ target: { value } }) => {
    this.setState({ dataValue: value });
  };

  render() {
    const { dataValue } = this.state;
    const options = lookup[dataValue];
    return (
      <div>
        <h1>UCAS Calculator</h1>
        <button type="button" onClick={this.handleAddSocial}>
          <span>Add a Qualification</span>
        </button>
        <br />
        {this.state.SocialData.map((Social, idx) => (
          <div key={idx}>
            {/*                   <select
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
                  </select> */}
            <h2>Qualification</h2>
            <select onChange={this.onChange}>
              <option value="abc">Please Select a Qualfication</option>
              <option value="ALevel">A Level</option>
              <option value="BTEC">BTEC</option>
            </select>
            <h2>Grades</h2>
            <select onChange={this.handleChange}>
              {options.map((o) => (
                <option key={o.id} value={o.id}>
                  {o.text}
                </option>
              ))}
            </select>
            <button onClick={() => this.handleRemoveSocial(idx)}>remove</button>
          </div>
        ))}
        <hr />
        <span>Your UCAS Points Total:</span> <strong>{this.state.value}</strong>
      </div>
    );
  }
}

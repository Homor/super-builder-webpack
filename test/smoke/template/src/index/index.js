"use strict";

import React from "react";
import ReactDom from "react-dom";

import girl from "./image/girl.jpeg";
import "./css.css";
import "./less.less";

class Search extends React.Component {
    constructor() {
        super(...arguments);

        this.state = {
            Text: null,
        };
    }

    // 加载组件
    loadComponent() {
        // 动态加载后，是一个promise对象
        import("./text.js").then((Text) => {
            this.setState({ Text: Text.default });
        });
    }

    render() {
        const { Text } = this.state;

        // debugger;
        return (
          <div className="react-demo-text">
            react demo text
            <span>李春燕是个燕子</span>
            <img alt="" src={girl} onKeyDown={() => {}} onClick={this.loadComponent.bind(this)} />
            <p className="react-demo-img" />
            {Text ? <Text /> : ""}
          </div>
);
    }
}

ReactDom.render(
  <Search />,
  document.getElementById("root"),
);

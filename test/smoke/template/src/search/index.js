// eslint-disable-next-line import/extensions
import { a } from "./tree-shaking.js";
import "./search-less.less";

const env = "search";

const c = "ai";
// debugger;
console.log(env);
console.log(c);
console.log(a("a function !"));

if (false) {
    console.log("这段代码永远不会执行");
}

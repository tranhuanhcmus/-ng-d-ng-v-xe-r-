import renderHeader from "../../components/header.js";

var headerElement = document.querySelector("header");
// headerElement.innerHTML = `this is a header `;
headerElement.appendChild(renderHeader());

// console.log(renderHeader());
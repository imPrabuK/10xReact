const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "This is first child"),
    React.createElement("h2", {}, "This is 2nd child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "This 3rd child"),
    React.createElement("h1", {}, "This 4th child"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

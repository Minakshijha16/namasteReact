//const heading = React.createElement("h1", {id : "heading"}, "hello world from react!"); //heading = javascript object
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);  //this render fn take the object and get the element h1 and put that inside div 

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "i am h1 tag"),
        React.createElement("h2", {}, "i am h2 tag")
        ]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);




/*agar koi tag phle se hoga root me to root.render() jo pass karenge wo usko replace kr dega.
root div k upar ki tag hoga usme kch likha hoga ya root div k neeche kch tag hoga usme kch likha hoga everything will be as it is. */
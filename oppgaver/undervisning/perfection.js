function perfectPage(){
    let user = model.app.loggedInUser;
    console.table(user);
    app.innerHTML = /*HTML*/`
    <div>
       <h1>Check out my perfect page</h1>
       <h2>It's ${user.username}<h2>
       <img src="img/Perfection.jpg">

    </div>
    `;
}
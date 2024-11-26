const app = document.getElementById('app');

let model = {
    app: {
        loggedInUser: null,
        darkMode: true,

    },
    input: {
        logginView: {
            username: "",
            password: "",
        },
        signupView: {
            username: "",
            password: "",
            rptPassword: "",
            email: "",

        },
    },
    data: {
        users: [
            {
            id: 0,
            username: "tamo",
            password: "err",
            email: "no Email",
            },
            {
            id: 1,
            username: "Perfect",
            password: "Cell",
            email: "perfect.cell@gmail.com",
            },
        ],
    },
}
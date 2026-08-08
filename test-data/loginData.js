module.exports = [
    {
        testName: "Valid Login",
        username: "standard_user",
        password: "secret_sauce",
        expected: "success"
    },
    {
        testName: "Invalid Password",
        username: "standard_user",
        password: "wrong123",
        expected: "error"
    },
    {
        testName: "Invalid Username",
        username: "wrong_user",
        password: "secret_sauce",
        expected: "error"
    },
    {
        testName: "Empty Username",
        username: "",
        password: "secret_sauce",
        expected: "error"
    },
    {
        testName: "Empty Password",
        username: "standard_user",
        password: "",
        expected: "error"
    }
];
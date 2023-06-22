// Sign up
module.exports.validateRegisterInput = (
    username,
    email,
    password,
    // confirmPassword
) => {
    const errors = {};
    if (username.trim() === "") {
        errors.username = "Invalid";
    }
    if (email.trim() === "") {
        errors.email = "Invalid - No email added";
    }
    else {
        const regEx =
            /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
            // /.+@.+\..+/;
        if (!email.match(regEx)) {
            errors.email = "Invalid - bad email address";
        }
    }
    if (password === "") {
        errors.password = "Invalid - Please type a password";
    // } else if (password !== confirmPassword) {
    //     errors.confirmPassword = "Invalid";
    } else if (password.length < 4) {
        errors.password = "Invalid - Password length needs to be more than 4 characters";
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1,
    };
};

// Login
module.exports.validateLoginInput = (
    username,
    password
) => {
    const errors = {};
    if(username.trim() === "") {
        errors.username = "Username not entered"
    }
    if(password.trim() === "") {
        errors.password = "Password not entered"
    }
    return {
        errors,
        valid: Object.keys(errors).length < 1,
    }
}
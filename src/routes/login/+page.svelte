<main>
    <h3>Welcome back!</h3>
    <form id="login-wrapper" method="post">
        <div class="input-wrapper" id="email-input-wrapper">
            <label for="email-input">Email or username:</label>
            <input id="email-input">
        </div>
        <div class="input-wrapper" id="password-input-wrapper">
            <label for="password-input">Password:</label>
            <input type="password" id="password-input">
        </div>
        <button type="submit" class="btn-primary" id="login-button">Login</button>
    </form>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;
    }

    #login-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid white;
        border-radius: 30px;
        margin-top: 15px;
        padding: 50px;
    }

    .input-wrapper {
        display: flex;
        flex-direction: column;
    }

    #password-input-wrapper {
        margin-top: 10px;
    }

    input {
        width: 300px;
        border: 1px solid white;
        border-radius: 8px;
        color: black;
        padding: 3px;
    }

    #login-button {
        margin-top: 20px;
        padding: 6px 30px;
    }

    #login-button:active {
        opacity: .8;
    }
</style>
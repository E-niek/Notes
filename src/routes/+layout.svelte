<script>
    import { page } from "$app/stores";
</script>

<header>
    <ul class="navigation">
        <li><a href="/" class="nav-item" class:nav-item-hover={$page.url.pathname === "/"}>Create note</a></li>
        <li><a href="/about" class="nav-item" class:nav-item-hover={$page.url.pathname === "/about"}>About</a></li>
    </ul>
    <a href="/login" class:login-hover={$page.url.pathname === "/login"} id="login-link">Login</a>
</header>
<hr>
<main>
    <slot/>
</main>
<footer>
    <hr>
    <div id="footer-logo-wrapper">
        Source code:
        <a href="https://github.com/E-niek/Notes" target="_blank"><img src="/media/github.svg" alt="Link to github project" id="github-logo"></a>
    </div>
</footer>


<style>
    :global {
        @import url('https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&display=swap');

        * {
            padding: 0;
            margin: 0;
            color: white;
            accent-color: #0082A1;
            font-family: "Parkinsans";
        }

        body {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #003329;
        }

        a {
            text-decoration: none;
        }

        .btn-primary {
            border: 1px solid white;
            border-radius: 8px;
            background-color: #0082A1;
        }
    }

    header {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }

    .navigation {
        display: flex;
        margin: 16px 0px;
        list-style: none;
    }

    .nav-item {
        margin: 0px 10px;
        font-size: 17px;
    }

    .nav-item:hover, .nav-item-hover {
        border-bottom: 2px solid #0082A1;
    }

    #login-link {
        position: absolute;
        right: 0;
        margin: 8px;
        padding: 7px 10px;
        border: 1px solid #0082A1;
        border-radius: 10px;
    }

    #login-link:hover, #login-link.login-hover {
        border-width: 2px;
        margin-right: 7px;
    }

    main {
        display: flex;
        flex: 1;
    }

    #footer-logo-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #github-logo {
        display: block;
        width: 30px;
        margin: 10px 10px;
    }

</style>
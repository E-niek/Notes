<script lang="ts">
    import { page } from "$app/state";
    import { Hamburger } from "svelte-hamburgers";
    import { slide } from "svelte/transition";

    let {children} = $props();

    let open = $state(false);

    export const noteUrl = `${page.url}n/`;
</script>

<header>
    <div id="header-desktop">
        <ul id="navigation-desktop">
            <li><a href="/allnotes" class="nav-item-desktop" class:nav-item-hover={page.url.pathname === "/allnotes"}>All notes</a></li>
            <li><a href="/" class="nav-item-desktop" class:nav-item-hover={page.url.pathname === "/"}>Create note</a></li>
            <li><a href="/mynotes" class="nav-item-desktop" class:nav-item-hover={page.url.pathname === "/mynotes"}>My notes</a></li>
        </ul>
        <a href="/login" class:login-desktop-hover={page.url.pathname === "/login"} id="login-desktop">Login</a>
    </div>
    <div id="header-mobile">
        <Hamburger type="squeeze" --color="white" bind:open/>
        {#if open}
            <div id="navigation-wrapper-mobile" in:slide="{{duration: 1000}}" out:slide="{{duration: 1000}}">
                <ul id="navigation-mobile">
                    <li><a href="/allnotes" class="nav-item-mobile" class:nav-item-hover={page.url.pathname === "/allnotes"}>All notes</a></li>
                    <li><a href="/" class="nav-item-mobile" class:nav-item-hover={page.url.pathname === "/"}>Create note</a></li>
                    <li><a href="/mynotes" class="nav-item-mobile" class:nav-item-hover={page.url.pathname === "/mynotes"}>My notes</a></li>
                </ul>
                <a href="/login" class:login-mobile-hover={page.url.pathname === "/login"} id="login-mobile">Login</a>
            </div>
        {/if}
    </div>
</header>
<hr>
<main>
    {@render children()}
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

    #header-desktop {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: transparent;
    }

    #header-mobile {
        display: none;
    }

    #navigation-desktop {
        display: flex;
        margin: 16px 0px;
        list-style: none;
    }

    .nav-item-desktop {
        margin: 0px 10px;
        font-size: 17px;
    }

    .nav-item-desktop:hover, .nav-item-hover {
        border-bottom: 2px solid #0082A1;
    }

    @media (max-width: 500px) {
        #header-desktop {
            display: none;
        }

        #header-mobile {
            display: flex;
            flex-direction: column;
            align-items: end;
        }

        #navigation-wrapper-mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }

        #navigation-mobile {
            list-style: none;
            text-align: center;
        }

        #navigation-mobile li {
            margin-bottom: 5px;
        }

        .nav-item-mobile {
            margin-bottom: 100px;
        }

        #login-mobile {
            width: 70px;
            text-align: center;
            margin-top: 5px;
            margin-bottom: 10px;
            padding: 7px 10px;
            border: 1px solid #0082A1;
            border-radius: 10px;
        }

        #login-mobile:hover, #login-mobile.login-mobile-hover {
            border-width: 2px;
            margin-top: 4px;
            margin-bottom: 9px;
        }
    }

    #login-desktop {
        position: absolute;
        right: 0;
        margin: 8px;
        padding: 7px 10px;
        border: 1px solid #0082A1;
        border-radius: 10px;
    }

    #login-desktop:hover, #login-desktop.login-desktop-hover {
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
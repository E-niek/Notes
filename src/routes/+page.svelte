<script lang="ts">
    import { page } from "$app/state";
    import DOMPurify from "isomorphic-dompurify";

    let noteTitle = "";
    let noteText = "";
    // let language = "";
    let preview = false;
    let save = false;

    let id: number = 0;
    const noteUrl = `${page.url.origin}/n/`;

    async function SaveNote() {
        if(noteText !== "") {
            noteTitle = noteTitle === "" ? "{No title}" : noteTitle;
            noteTitle = noteTitle.replace('"', "'");
            noteText = noteText.replace(/["]/g, "'");

            const response = await fetch("/api/saveNote", {
                method: "POST",
                body: JSON.stringify({
                    noteTitle: `${DOMPurify.sanitize(noteTitle)}`,
                    noteText: `${DOMPurify.sanitize(noteText)}`
                })
            });

            id = (await response.json())[0].id;
            save = true;
            copyUrl();
        }
    }

    function copyUrl() {
        navigator.clipboard.writeText(noteUrl + id);
    }
</script>

<title>Home</title>
<main>
    <h4 id="label">Enter your note:</h4>
    <div id="input-wrapper">
        <div id="options-wrapper">
            <div>
                <label for="preview-toggle">Preview:</label>
                <input type="checkbox" id="preview-toggle" bind:checked={preview}>
            </div>
        </div>
        <input placeholder="Title..." maxlength=100 id="noteTitle" bind:value={noteTitle}>
        {#if preview}
            <div id="noteText">{@html DOMPurify.sanitize(noteText)}</div>
        {:else}
            <textarea placeholder="Your note..." id="noteText" bind:value={noteText}></textarea>
        {/if}
    </div>

    {#if !save}
        <button class="btn-primary" id="button-save" on:click={SaveNote}>Save note</button>
    {:else}
        <button class="btn-primary" id="button-copy" on:click={copyUrl}>{noteUrl + id}<img src="/media/copy.svg" alt="copy"></button>
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }

    #label {
        margin-top: 10px;
    }

    #input-wrapper {
        display: flex;
        flex-direction: column;
        align-items: start;
        height: 100%;
        margin-top: 10px;
    }

    #options-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    #preview-toggle {
        border: 1px solid #0082A1;
    }

    #noteTitle {
        width: 710px;
        height: 30px;
        border: 0;
        border-radius: 5px;
        margin-top: 10px;
        padding: 0px 5px;
        color: black;
    }

    #noteText {
        height: 100%;
        width: 700px;
        border: 0;
        border-radius: 20px;
        margin-top: 10px;
        padding: 10px;
        color: black;
        background-color: white;
        resize: none;
        white-space: pre-wrap;
    }

    :global {
        #noteText * {
            color: black;
        }

        #noteText li{
            margin-left: 15px;
        }
    }

    #button-save {
        width: 200px;
        margin: 20px 0px;
        padding: 10px;
        transition: transform 400ms;
        transform: scale(1);
    }

    #button-copy {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0px;
        padding: 10px;
        transition: transform 400ms;
        scale: (1);
    }

    #button-copy img {
        display: block;
        width: 20px;
        margin-left: 10px;
    }

    #button-save:active, #button-copy:active {
        transition-duration: 50ms;
        transform: scale(.9);
    }
</style>

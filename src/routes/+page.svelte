<script lang="ts">
    import { page } from "$app/state";
    import DOMPurify from "isomorphic-dompurify";

    const noteUrl = `${page.url.origin}/n/`;

    // Note options
    let noteTitle = "";
    let noteText = "";

    // Page options
    let preview = false;
    let save = false;
    let id: string;

    function purify() {
        noteTitle = noteTitle.replace(/["]/g, "\\\"");
        noteTitle = noteTitle.replace(/[']/g, "\\\'")
        noteText = noteText.replace(/["]/g, "\\\"");
        noteText = noteText.replace(/[']/g, "\\\'");
    }

    function contaminate() {
        noteTitle = noteTitle.replace(/\\\"/g, '\"');
        noteTitle = noteTitle.replace(/\\\'/g, "\'")
        noteText = noteText.replace(/\\\"/g, "\"");
        noteText = noteText.replace(/\\\'/g, "\'");
    }

    async function SaveNote() {
        if(noteText.trim().length !== 0) {
            noteTitle = DOMPurify.sanitize(noteTitle);
            noteText = DOMPurify.sanitize(noteText);
            purify();

            const response = await fetch("/api/saveNote", {
                method: "POST",
                body: JSON.stringify({
                    noteTitle: `${noteTitle}`,
                    noteText: `${noteText}`
                })
            });
            
            contaminate();
            ({id} = await response.json());
            save = true;
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
        {#if preview || save}
            <div placeholder="Title..." id="noteTitle">{DOMPurify.sanitize(noteTitle)}</div>
            <div id="noteText">{@html DOMPurify.sanitize(noteText)}</div>
        {:else}
            <input placeholder="Title..." maxlength=30 id="noteTitle" bind:value={noteTitle}>
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
        align-items: center;
        height: 100%;
        margin-top: 10px;
        width: 700px;
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
        display: flex;
        align-items: center;
        width: 100%;
        height: 30px;
        border: 0;
        border-radius: 5px;
        margin-top: 10px;
        padding: 0px 5px;
        font-size: 15px;
        color: black;
        background-color: white;
    }

    #noteText {
        height: 100%;
        width: 100%;
        border: 0;
        border-radius: 20px;
        margin-top: 10px;
        padding: 10px;
        font-size: 17px;
        color: black;
        background-color: white;
        resize: none;
        white-space: pre-wrap;
    }

    @media (max-width: 800px) {
        #input-wrapper {
            width: 90%;
            max-width: 700px;
        }
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

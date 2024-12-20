<script lang="ts">
    import DOMPurify from 'isomorphic-dompurify';

    export let data;
</script>

<title>Note</title>
<main>
    {#if data.note === undefined}
        <h2>Woah, couldn't find a note with this id...</h2>
    {:else}
        <div id="note-wrapper">
            <h3 id="noteTitle">{data.note.title}</h3>
            <div id="noteText">{@html DOMPurify.sanitize(data.note.text)}</div>
        </div>
    {/if}
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }

    #note-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        margin-top: 10px;
    }

    #noteText {
        height: 100%;
        width: 700px;
        border: 0;
        border-radius: 20px;
        margin-top: 10px;
        margin-bottom: 20px;
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
</style>

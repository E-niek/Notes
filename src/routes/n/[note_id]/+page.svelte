<script lang="ts">
    import { Render } from "svelte-purify";
    export let data: {data: {user_id: number, data: string}[]};
</script>

<title>Note</title>
<main>
    <div id="input-wrapper">
        {#if data.data === null}
            <h1>Woah, couldn't find a note with this id...</h1>
        {:else}
            {#each data.data as note}
                <div id="note" style="line-height: 20px;"><Render html={note.data}/></div>
            {/each}
        {/if}
    </div>

    <button class="btn-primary" id="button-save">Copy url</button>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }

    #input-wrapper {
        display: flex;
        flex-direction: column;
        align-items: start;
        height: 100%;
        margin-top: 10px;
    }

    #note {
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
        #note * {
            color: black;
        }

        #note li{
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

    #button-save:active {
        transition-duration: 150ms;
        transform: scale(.9);
    }
</style>

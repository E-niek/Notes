<script>
    import { page } from '$app/state';

    const noteUrl = `${page.url.origin}/n/`;

    export let data;
</script>

<main>
    <div id="notes-wrapper">
        {#each data.notes as note}
            <a class="note" href={noteUrl + note.id}>{note.title}</a>
        {/each}
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }

    #notes-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
    }

    .note {
        font-size: 20px;
        margin: 5px 0px;
    }
</style>
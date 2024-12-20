<script>
    import { page } from '$app/state';

    const noteUrl = `${page.url.origin}/n/`;

    export let data;
</script>

<title>Notes</title>
<main>
    <div id="notes-wrapper">
        {#each data.notes as note}
            <a class="note" href={noteUrl + note.id}>
                <h2>{note.title}</h2>
                <h5>{note.created}</h5>
            </a>
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
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 20px;
        margin: 5px 0px;
        font-size: 15px;
    }

    .note h5 {
        font-style: italic;
    }
</style>
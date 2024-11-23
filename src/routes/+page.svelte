<main>
    <h4 id="label">Enter your note:</h4>
    <div id="input-wrapper">
        <div>
            <label for="preview-toggle">Preview: </label>
            <input type="checkbox" id="preview-toggle">
        </div>
        <textarea id="note"></textarea>
    </div>

    <button id="button-url">Generate URL</button>
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

    #preview-toggle:checked {
        accent-color: #0082A1;
    }

    #note {
        height: 100%;
        width: 700px;
        border: 1px solid white;
        border-radius: 20px;
        margin-top: 5px;
        padding: 10px;
        color: black;
        resize: none;
    }

    #button-url {
        width: 200px;
        border: 1px solid white;
        border-radius: 8px;
        background-color: #0082A1;
        margin: 20px 0px;
        padding: 10px;
    }

    #button-url:active {
        scale: .95;
    }
</style>

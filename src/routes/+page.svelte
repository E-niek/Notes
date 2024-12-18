<script lang="ts">
    import { page } from "$app/state";
    import type { Note } from "$lib/server/database";

    let noteData = ``;
    let preview = false;

    async function SaveNote() {
        console.log("skjhfs");
        const response = await fetch("/api/saveNote", {
            method: "POST",
            body: JSON.stringify({
                noteData: `${noteData}`
            })
        });

        const id = (await response.json())[0].id;
        alert(document.URL + "n/" + id);
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
            <select id="language-select">
                <option disabled selected>Choose a language</option>
                <option value="none">No language</option>
                <option value="abap">ABAP</option>
                <option value="ada">Ada</option>
                <option value="apex">Apex</option>
                <option value="assembly">Assembly</option>
                <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="csharp">C#</option>
                <option value="clojure">Clojure</option>
                <option value="cobol">COBOL</option>
                <option value="css">CSS</option>
                <option value="d">D</option>
                <option value="dart">Dart</option>
                <option value="elixir">Elixir</option>
                <option value="erlang">Erlang</option>
                <option value="f-sharp">F#</option>
                <option value="fortran">Fortran</option>
                <option value="go">Go</option>
                <option value="groovy">Groovy</option>
                <option value="haskell">Haskell</option>
                <option value="html">HTML</option>
                <option value="java">Java</option>
                <option value="javascript">JavaScript</option>
                <option value="json">JSON</option>
                <option value="julia">Julia</option>
                <option value="kotlin">Kotlin</option>
                <option value="labview">LabVIEW</option>
                <option value="latex">LaTeX</option>
                <option value="lisp">Lisp</option>
                <option value="lua">Lua</option>
                <option value="markdown">Markdown</option>
                <option value="matlab">MATLAB</option>
                <option value="objective-c">Objective-C</option>
                <option value="ocaml">OCaml</option>
                <option value="pascal">Pascal</option>
                <option value="perl">Perl</option>
                <option value="php">PHP</option>
                <option value="plsql">PL/SQL</option>
                <option value="powershell">PowerShell</option>
                <option value="prolog">Prolog</option>
                <option value="python">Python</option>
                <option value="r">R</option>
                <option value="ruby">Ruby</option>
                <option value="rust">Rust</option>
                <option value="sas">SAS</option>
                <option value="scala">Scala</option>
                <option value="scheme">Scheme</option>
                <option value="shell">Shell/Bash</option>
                <option value="solidity">Solidity</option>
                <option value="sql">SQL</option>
                <option value="swift">Swift</option>
                <option value="tsql">T-SQL</option>
                <option value="typescript">TypeScript</option>
                <option value="vba">VBA</option>
                <option value="verilog">Verilog</option>
                <option value="vhdl">VHDL</option>
                <option value="webassembly">WebAssembly</option>
                <option value="xml">XML</option>
                <option value="yaml">YAML</option>
            </select>
        </div>
        {#if preview}
            <div id="note" style="line-height: 20px;">{@html noteData}</div>
        {:else}
            <textarea id="note" bind:value={noteData}></textarea>
        {/if}
    </div>

    <button class="btn-primary" id="button-save" on:click={SaveNote}>Save note</button>
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

    #language-select {
        font-size: 12px;
        border: 1px solid white;
        border-radius: 5px;
        background-color: #0082A1;
        padding: 6px 10px;
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

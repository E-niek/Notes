export async function load({params, fetch}) {
    const response = await fetch("/api/getNote", {
        method: "POST",
        body: JSON.stringify({
            id: `${params.note_id}`
        })
    });

    const note = (await response.json())[0];

    return {note};
}
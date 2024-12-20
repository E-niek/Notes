export async function load({params, fetch}) {
    const response = await fetch(`/api/getNote/${params.note_id}`, {
        method: "GET"
    });

    const note = (await response.json())[0];

    return {note};
}
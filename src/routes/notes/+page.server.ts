export async function load({params, fetch}) {
    const response = await fetch("/api/getNotes", {
        method: "GET"
    });

    const notes = await response.json();

    return {notes};
}
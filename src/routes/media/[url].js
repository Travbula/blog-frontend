
export async function GET({ params }) {
    console.log("params!")
    console.log(params)

    const query = await fetch(`http://localhost:1337/${params.url}`);

    const res = await query.data;

    return {
        body: res
    };
}
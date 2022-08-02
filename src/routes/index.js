export async function GET() {
    const query = await fetch(
        "https://travbula.herokuapp.com/api/posts?populate=*&sort=id:desc"
    );

    const res = await query.json();

    return {
        body: {
            data: res.data,
            meta: res.meta,
        },
    };
}

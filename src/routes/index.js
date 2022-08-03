export async function GET() {
    const query = await fetch(
        `${process.env.API_URL}/posts?populate=*&sort=id:desc`
    );

    const res = await query.json();

    return {
        body: {
            data: res.data,
            meta: res.meta,
        },
    };
}

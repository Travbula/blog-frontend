
export async function GET({ params }) {
    const query = await fetch(`http://localhost:1337/api/posts/${params.id}?populate=*&sort=id:desc`);

    const res = await query.json();

    return {
        body: {
            data: res.data,
            meta: res.meta
        }
    };
}
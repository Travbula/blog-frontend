export async function GET({ params }) {
    const query = await fetch(
        `http://travbula.herokuapp.com/api/posts/${params.id}?populate=*&sort=id:desc`
    );

    const res = await query.json();

    return {
        body: {
            data: res.data,
            meta: res.meta,
        },
    };
}

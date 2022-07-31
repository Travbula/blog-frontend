
export async function GET() {
    const query = await fetch('http://localhost:1337/api/posts?populate=*&sort=id:desc');
    //const query = await fetch('http://localhost:1337/api/posts?populate=*');

    const res = await query.json();

    return {
        body: {
            data: res.data,
            meta: res.meta
        }
    };
}
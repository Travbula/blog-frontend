import { PUBLIC_API_URL } from '$env/static/public';

export async function GET() {
    const query = await fetch(
        `${PUBLIC_API_URL}/posts?populate=*&sort=id:desc`
    );

    const res = await query.json();

    return {
        body: {
            data: res.data,
            meta: res.meta,
        },
    };
}

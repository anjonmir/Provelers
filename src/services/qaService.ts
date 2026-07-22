const API = `${import.meta.env.VITE_API_URL}/api/posts`;
export async function getFeedPosts(){

    const response=await fetch(API);

    return response.json();

}
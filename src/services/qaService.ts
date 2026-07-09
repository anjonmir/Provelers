const API="http://localhost:8000/api/posts";

export async function getFeedPosts(){

    const response=await fetch(API);

    return response.json();

}
export async function createUser(
  userData: any
) {
  const response =
    await fetch(
      "http://localhost:8000/api/users",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(
          userData
        ),
      }
    );

  return response.json();
}
const API = `${import.meta.env.VITE_API_URL}/api/users`;

export async function createUser(userData: any) {
  const response = await fetch(API, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Failed to save user.");
  }

  return response.json();
}

export async function getProfile(
  firebaseUid: string
) {

  const response = await fetch(
    `${API}/${firebaseUid}/profile`
  );

  if (!response.ok) {

    throw new Error("Failed");

  }

  return response.json();

}

export async function getUser(firebaseUid: string) {
  const response = await fetch(`${API}/${firebaseUid}`);

  if (!response.ok) {
    throw new Error("User not found");
  }

  return response.json();
}

export async function updateUser(
  firebaseUid: string,
  userData: any
) {
  const response = await fetch(
    `${API}/${firebaseUid}`,
    {
      method: "PUT",

      headers: {
        "Content-Type":
          "application/json",
      },

      body: JSON.stringify(userData),
    }
  );

  if (!response.ok) {
    throw new Error("Update failed");
  }

  return response.json();
}
export async function savePlace(
  firebaseUid: string,
  place: any
) {

  const response = await fetch(

    `${API}/${firebaseUid}/save-place`,

    {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(place),

    }

  );

  if (!response.ok) {

    throw new Error("Failed to save place");

  }

  return response.json();

}
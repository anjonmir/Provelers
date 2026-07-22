const API = `${import.meta.env.VITE_API_URL}/api/trips`;
// ========================
// CREATE TRIP
// =======================
export async function createTrip(trip: any) {
  const response = await fetch(API, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(trip),
  });

  if (!response.ok) {
    throw new Error("Failed to create trip");
  }

  return response.json();
}

// ========================
// GET USER TRIPS
// ========================

export async function getTrips(
  ownerUid: string
) {
  const response =
    await fetch(
      `${API}/user/${ownerUid}`
    );

  if (!response.ok) {
    throw new Error("Failed to load trips");
  }

  return response.json();
}

// ========================
// GET SINGLE TRIP
// ========================

export async function getTrip(
  tripId: string
) {
  const response =
    await fetch(
      `${API}/${tripId}`
    );

  if (!response.ok) {
    throw new Error("Trip not found");
  }

  return response.json();
}

// ========================
// UPDATE TRIP
// ========================

export async function updateTrip(
  tripId: string,
  trip: any
) {
  const response =
    await fetch(
      `${API}/${tripId}`,
      {
        method: "PUT",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify(trip),
      }
    );

  if (!response.ok) {
    throw new Error("Update failed");
  }

  return response.json();
}

// ========================
// PUBLISH TRIP
// ========================

export async function publishTrip(
  tripId: string
) {
  const response =
    await fetch(
      `${API}/${tripId}/publish`,
      {
        method: "PUT",
      }
    );

  if (!response.ok) {
    throw new Error("Publish failed");
  }

  return response.json();
}

// ========================
// DELETE TRIP
// ========================

export async function deleteTrip(
  tripId: string
) {
  const response =
    await fetch(
      `${API}/${tripId}`,
      {
        method: "DELETE",
      }
    );

  if (!response.ok) {
    throw new Error("Delete failed");
  }

  return response.json();
}
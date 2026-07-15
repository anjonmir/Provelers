import { useContext, useRef } from "react";

import { UserContext } from "../../context/UserContext";

import { uploadProfileImage } from "../../services/uploadProfileImage";
import { updateUser } from "../../services/userService";

import "./profile.css";

function ProfileCover() {

  const {
    profile,
    setProfile,
    isOwner,
  } = useContext(UserContext);

  const user = profile?.user;

  const coverInputRef =
    useRef<HTMLInputElement>(null);


  const handleCoverUpload = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file = e.target.files?.[0];

    if (!file || !user) return;

    try {

      const imageUrl =
        await uploadProfileImage(file);

      await updateUser(
        user.firebaseUid,
        {
          coverPhoto: imageUrl,
        }
      );

      setProfile({
        ...profile,
        user: {
          ...user,
          coverPhoto: imageUrl,
        },
      });

    } catch (err) {

      console.error(err);

    }

  };

  return (

    <div className="profile-cover">

      <img
        src={
          user?.coverPhoto ||
          "/images/map-preview.jpg"
        }
        alt=""
        className="cover-image"
      />

      <input
        hidden
        ref={coverInputRef}
        type="file"
        accept="image/*"
        onChange={handleCoverUpload}
      />

      {isOwner && (

        <button
          className="change-cover-btn"
          onClick={() =>
            coverInputRef.current?.click()
          }
        >
          📷 Change Cover
        </button>

      )}

      <div className="cover-overlay">

        <div className="profile-avatar">

          {user?.photoURL ? (

            <img
              src={user.photoURL}
              alt=""
              className="profile-avatar-image"
            />

          ) : (

            user?.fullName?.charAt(0)

          )}

        </div>

      </div>

    </div>

  );

}

export default ProfileCover;
import { useContext, useRef } from "react";

import { UserContext } from "../../context/UserContext";

import { uploadProfileImage } from "../../services/uploadProfileImage";
import { updateUser } from "../../services/userService";

import "./profile.css";

function ProfileCover() {

  const {
    profile,
    setProfile,
  } = useContext(UserContext);

  const coverInputRef =
    useRef<HTMLInputElement>(null);

  const handleCoverUpload =
    async (
      e: React.ChangeEvent<HTMLInputElement>
    ) => {

      const file =
        e.target.files?.[0];

      if (!file) return;

      try {

        const imageUrl =
          await uploadProfileImage(file);

        await updateUser(
          profile.firebaseUid,
          {
            coverPhoto: imageUrl,
          }
        );

        setProfile({
          ...profile,
          coverPhoto: imageUrl,
        });

      } catch (err) {

        console.error(err);

      }

    };

  return (

    <div className="profile-cover">

      <img
        src={
          profile?.coverPhoto ||
          "/images/map-preview.jpg"
        }
        alt="cover"
        className="cover-image"
      />

      <input
        ref={coverInputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleCoverUpload}
      />

      <button
        className="change-cover-btn"
        onClick={() =>
          coverInputRef.current?.click()
        }
      >
        📷 Change Cover
      </button>

      <div className="cover-overlay">

        <div className="profile-avatar">

          {profile?.photoURL ? (

            <img
              src={profile.photoURL}
              alt=""
              className="profile-avatar-image"
            />

          ) : (

            profile?.fullName
              ?.charAt(0)

          )}

        </div>

      </div>

    </div>

  );

}

export default ProfileCover;
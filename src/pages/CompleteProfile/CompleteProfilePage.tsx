import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  createUser
} from "../../services/userService";

import "./completeProfile.css";

import useAuth from "../../hooks/useAuth";

import { uploadProfileImage }
  from "../../services/uploadProfileImage";


function CompleteProfilePage() {
  const dobRef =
    useRef<HTMLInputElement>(null);

  const { user } = useAuth();

  const navigate = useNavigate();

  const [step, setStep] =
    useState(1);
  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    division: "",
    district: "",
  });



  const [profileData, setProfileData] =
    useState({
      fullName: "",
      username: "",
      photoURL: "",
      bio: "",

      bloodGroup: "",
      dateOfBirth: "",

      email: "",
      phoneNumber: "",
      emergencyContact: "",

      division: "",
      district: "",
      homeTown: "",

      occupation: "",
      university: "",

      travelerType: "",

      nidNumber: "",

      travelInterests: [] as string[],
    });

  useEffect(() => {

    if (!user) return;

    const generatedUsername =
      (
        user.displayName || "traveler"
      )
        .toLowerCase()
        .replace(/\s+/g, "") +
      Date.now().toString().slice(-4);

    setProfileData(
      (prev) => ({
        ...prev,

        fullName:
          user.displayName || "",

        email:
          user.email || "",

        photoURL:
          user.photoURL || "",

        username:
          generatedUsername || "",
      })
    );

  }, [user]);

  const divisions = [
    "Dhaka",
    "Chattogram",
    "Rajshahi",
    "Khulna",
    "Barishal",
    "Sylhet",
    "Rangpur",
    "Mymensingh",
  ];

  const districts: Record<
    string,
    string[]
  > = {
    Dhaka: [
      "Dhaka",
      "Gazipur",
      "Narsingdi",
      "Tangail",
      "Faridpur",
      "Kishoreganj",
    ],

    Rajshahi: [
      "Rajshahi",
      "Natore",
      "Naogaon",
      "Chapainawabganj",
      "Pabna",
      "Sirajganj",
    ],

    Chattogram: [
      "Chattogram",
      "Cox's Bazar",
      "Rangamati",
      "Bandarban",
      "Khagrachari",
      "Feni",
    ],

    Khulna: [
      "Khulna",
      "Jessore",
      "Satkhira",
      "Bagerhat",
    ],

    Barishal: [
      "Barishal",
      "Patuakhali",
      "Bhola",
    ],

    Sylhet: [
      "Sylhet",
      "Moulvibazar",
      "Habiganj",
      "Sunamganj",
    ],

    Rangpur: [
      "Rangpur",
      "Dinajpur",
      "Nilphamari",
    ],

    Mymensingh: [
      "Mymensingh",
      "Jamalpur",
      "Sherpur",
    ],
  };
  const [isSaving, setIsSaving] = useState(false);

  const handleCompleteProfile = async () => {
    if (!user) return;
    if (isSaving) return;

    setIsSaving(true);

    try {

      const userObject = {
        ...profileData,
        firebaseUid: user.uid,
        explorerPoints: 0,
        badges:
          profileData.nidNumber.trim() !== ""
            ? ["Authentic"]
            : [],
      };

      await createUser(userObject);

      navigate("/feed");

    } catch (error) {

      console.error("SAVE ERROR:", error);
      alert("Failed to save profile.");

    } finally {

      setIsSaving(false);

    }
  };

  const completedFields = [

    profileData.fullName,
    profileData.photoURL,
    profileData.bio,
    profileData.bloodGroup,
    profileData.dateOfBirth,

    profileData.phoneNumber,

    profileData.division,
    profileData.district,

    profileData.occupation,
    profileData.university,

    profileData.travelerType,

  ].filter(Boolean).length;

  const completionPercentage =
    Math.round(
      (completedFields / 11) * 100
    );

  const validateCurrentStep = () => {
    const newErrors = {
      fullName: "",
      phoneNumber: "",
      division: "",
      district: "",
    };

    let valid = true;

    if (step === 1 && !profileData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
      valid = false;
    }

    if (step === 2 && !profileData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required.";
      valid = false;
    }

    if (step === 3) {
      if (!profileData.division) {
        newErrors.division = "Division is required.";
        valid = false;
      }

      if (!profileData.district) {
        newErrors.district = "District is required.";
        valid = false;
      }
    }

    setErrors(newErrors);

    return valid;
  };
  const nextStep = () => {

    if (!validateCurrentStep()) {
      return;
    }

    setStep((prev) => prev + 1);

  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const interests = [
    "Mountains",
    "Sea Beach",
    "Food",
    "Photography",
    "Adventure",
    "Camping",
    "Historical Places",
    "Religious Tourism",
  ];

  return (
    <div className="complete-profile-page">
      <div className="profile-container">

        <div className="profile-header">
          <h1>Complete Your Profile</h1>

          <p>
            Help travelers know more about you.
          </p>
        </div>
        <div className="completion-box">

          <h3>Profile Completion</h3>

          <div className="completion-bar">
            <div
              className="completion-fill"
              style={{
                width:
                  `${completionPercentage}%`,
              }}
            />
          </div>
          <p className="step-counter">
            Step {step} of 8
          </p>

          <p>
            {completionPercentage}% Complete
          </p>

        </div>



        {/* STEP 1 */}

        {step === 1 && (
          <div className="step-card">

            <h2>Personal Information</h2>

            <div className="photo-upload">

              <label
                htmlFor="profilePhoto"
                className="photo-preview"
              >
                {profileData.photoURL ? (
                  <img
                    src={profileData.photoURL}
                    alt="Profile"
                    className="profile-image"
                  />
                ) : (
                  <span>Upload Photo</span>
                )}
              </label>

              <input
                id="profilePhoto"
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                onChange={async (e) => {
                  const file =
                    e.target.files?.[0];

                  if (!file) return;

                  try {
                    const imageUrl =
                      await uploadProfileImage(file);

                    setProfileData((prev) => ({
                      ...prev,
                      photoURL: imageUrl,
                    }));

                  } catch (error) {
                    console.error(error);
                  }
                }}
              />
              <label
                htmlFor="profilePhoto"
                className="change-photo-btn"
              >
                Change Photo
              </label>

            </div>
            <label className="form-label">
              Full Name
              <span className="required">*</span>
            </label>
            <input
              type="text"

              value={profileData.fullName}



              onChange={(e) => {

                setProfileData({
                  ...profileData,
                  fullName: e.target.value,
                });

                if (errors.fullName) {
                  setErrors({
                    ...errors,
                    fullName: "",
                  });
                }

              }}
            />
            {
              errors.fullName && (
                <p className="error">
                  {errors.fullName}
                </p>
              )
            }


            <p className="generated-username">
              @{profileData.username}
            </p>

            <label>
              Biography
            </label>
            <textarea
              placeholder="Tell travelers about yourself..."

              value={
                profileData.bio
              }

              onChange={(e) =>
                setProfileData({
                  ...profileData,

                  bio:
                    e.target.value,
                })
              }
            />
            <label>
              Date of Birth
            </label>

            <input
              ref={dobRef}
              type="date"
              max={new Date().toISOString().split("T")[0]}
              value={profileData.dateOfBirth}
              onClick={() =>
                dobRef.current?.showPicker?.()
              }
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  dateOfBirth:
                    e.target.value,
                })
              }
            />


            <select
              value={profileData.bloodGroup}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  bloodGroup: e.target.value,
                })
              }
            >
              <option value="">
                Blood Group
              </option>

              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>

          </div>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <div className="step-card">

            <h2>Contact Information</h2>

            <input
              type="email"
              value={profileData.email}
              readOnly
            />
            <label>
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              inputMode="numeric"
              placeholder="+880xxxxxxxxxx"

              value={profileData.phoneNumber}

              onChange={(e) => {
                const value = e.target.value.replace(/\D/g, "");

                setProfileData({
                  ...profileData,
                  phoneNumber: value,
                });

                if (errors.phoneNumber) {
                  setErrors({
                    ...errors,
                    phoneNumber: "",
                  });
                }
              }}
            />


          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="step-card">

            <h2>Location</h2>
            <label>
              Division <span className="required">*</span>
            </label>
            <select
              value={profileData.division}
              onChange={(e) => {

                setProfileData({
                  ...profileData,
                  division: e.target.value,
                  district: "",
                });

                if (errors.division) {
                  setErrors({
                    ...errors,
                    division: "",
                  });
                }

              }}
            >
              <option value="">
                Select Division
              </option>

              {divisions.map((division) => (
                <option
                  key={division}
                  value={division}
                >
                  {division}
                </option>
              ))}
            </select>
            {
              errors.division && (
                <p className="error">
                  {errors.division}
                </p>
              )
            }
            <label>
              District <span className="required">*</span>
            </label>
            <select
              value={profileData.district}
              disabled={!profileData.division}
              onChange={(e) => {

                setProfileData({
                  ...profileData,
                  district: e.target.value,
                });

                if (errors.district) {
                  setErrors({
                    ...errors,
                    district: "",
                  });
                }

              }}
            >
              <option value="">
                Select District
              </option>

              {profileData.division &&
                districts[
                  profileData.division
                ]?.map((district) => (
                  <option
                    key={district}
                    value={district}
                  >
                    {district}
                  </option>
                ))}
            </select>
            {
              errors.district && (
                <p className="error">
                  {errors.district}
                </p>
              )
            }

            <input
              type="text"
              placeholder="Villege / Upazila"

              value={profileData.homeTown}

              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  homeTown: e.target.value,
                })
              }
            />

          </div>
        )}


        {/* STEP 4 */}

        {step === 4 && (
          <div className="step-card">

            <h2>Professional Information</h2>

            <input
              placeholder="Occupation"

              value={
                profileData.occupation
              }

              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  occupation:
                    e.target.value,
                })
              }
            />

            <input
              placeholder="Institute"

              value={
                profileData.university
              }

              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  university:
                    e.target.value,
                })
              }
            />




          </div>
        )}

        {/* STEP 5 */}

        {step === 5 && (
          <div className="step-card">
            <h2>Traveler Information</h2>

            <select
              value={profileData.travelerType}
              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  travelerType: e.target.value,
                })
              }
            >
              <option value="">
                Traveler Type
              </option>

              <option>
                Backpacker
              </option>

              <option>
                Food Explorer
              </option>

              <option>
                Photographer
              </option>

              <option>
                Adventurer
              </option>

              <option>
                Family Traveler
              </option>
            </select>

            <div className="interest-grid">
              {interests.map((interest) => (
                <button
                  key={interest}
                  type="button"
                  className={
                    profileData.travelInterests.includes(
                      interest
                    )
                      ? "interest-chip active"
                      : "interest-chip"
                  }
                  onClick={() => {

                    const exists =
                      profileData.travelInterests.includes(
                        interest
                      );

                    setProfileData({
                      ...profileData,

                      travelInterests:
                        exists
                          ? profileData.travelInterests.filter(
                            (item) =>
                              item !== interest
                          )
                          : [
                            ...profileData.travelInterests,
                            interest,
                          ],
                    });
                  }}
                >
                  {interest}
                </button>
              ))}
            </div>


          </div>
        )}

        {/* STEP 6 */}

        {step === 6 && (
          <div className="step-card">

            <h2>Emergency Contact</h2>

            <input
              placeholder="Name"
            />

            <input
              placeholder="Phone"

              value={
                profileData.emergencyContact
              }

              onChange={(e) =>
                setProfileData({
                  ...profileData,
                  emergencyContact:
                    e.target.value,
                })
              }
            />

            <input
              placeholder="Relationship"
            />

          </div>
        )}
        {/* STEP 7 */}

        {step === 7 && (
          <div className="step-card">

            <h2>Verification</h2>

            <p>
              Verified travelers receive
              the Authentic badge.
            </p>

            <input
              placeholder="NID Number"

              value={
                profileData.nidNumber
              }

              onChange={(e) => {

                const value = e.target.value.replace(/\D/g, "");

                setProfileData({
                  ...profileData,
                  nidNumber: value,
                });

              }}
            />
          </div>
        )}
        {step === 8 && (
          <div className="step-card">
            <h2>Ready to Finish?</h2>

            <p>
              Your profile is ready. Click{" "}
              <strong>Complete Profile</strong> to continue.
            </p>

            <div className="step-actions">
              <button
                className="secondary-btn"
                onClick={prevStep}
              >
                Back
              </button>

              <button
                className="submit-btn"
                onClick={handleCompleteProfile}
                disabled={isSaving}
              >
                {isSaving ? "Saving..." : "Complete Profile"}
              </button>
            </div>
          </div>
        )}


        {step < 8 && (
          <div className="step-actions">
            {step > 1 && (
              <button
                className="secondary-btn"
                onClick={prevStep}
              >
                Back
              </button>
            )}

            <button
              className="primary-btn"
              onClick={nextStep}
            >
              Next
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

export default CompleteProfilePage
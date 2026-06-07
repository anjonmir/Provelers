import { useState } from "react";

import "./completeProfile.css";

function CompleteProfilePage() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="complete-profile-page">
      <div className="profile-container">

        <div className="profile-header">
          <h1>Complete Your Profile</h1>

          <p>
            Help travelers know more about you.
          </p>
        </div>

        <div className="step-progress">
          {[1,2,3,4,5,6,7,8].map((item) => (
            <div
              key={item}
              className={
                item <= step
                  ? "step-dot active"
                  : "step-dot"
              }
            />
          ))}
        </div>

        {/* STEP 1 */}

        {step === 1 && (
          <div className="step-card">

            <h2>Personal Information</h2>

            <div className="photo-upload">
              <div className="photo-preview">
                Upload Photo
              </div>

              <input
                type="file"
                accept="image/*"
              />
            </div>

            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="text"
              placeholder="Username"
            />

            <input
              type="date"
            />

            <select>
              <option>
                Select Gender
              </option>

              <option>
                Male
              </option>

              <option>
                Female
              </option>

              <option>
                Other
              </option>
            </select>

            <select>
              <option>
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
              placeholder="Email"
              disabled
            />

            <input
              type="text"
              placeholder="+8801712345678"
            />

            <input
              type="text"
              placeholder="Alternative Phone"
            />

          </div>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <div className="step-card">

            <h2>Present Address</h2>

            <select>
              <option>
                Division
              </option>
            </select>

            <select>
              <option>
                District
              </option>
            </select>

            <select>
              <option>
                Upazila
              </option>
            </select>

            <textarea
              placeholder="Present Address"
            />

          </div>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <div className="step-card">

            <h2>Permanent Address</h2>

            <label className="checkbox-row">
              <input
                type="checkbox"
              />

              Same as Present Address
            </label>

            <textarea
              placeholder="Permanent Address"
            />

          </div>
        )}

        {/* STEP 5 */}

        {step === 5 && (
          <div className="step-card">

            <h2>Professional Information</h2>

            <input
              placeholder="Occupation"
            />

            <input
              placeholder="Workplace"
            />

            <input
              placeholder="University / College"
            />

            <input
              placeholder="Website"
            />

            <input
              placeholder="LinkedIn"
            />

          </div>
        )}

        {/* STEP 6 */}

        {step === 6 && (
          <div className="step-card">

            <h2>Traveler Information</h2>

            <select>
              <option>
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

            <input
              placeholder="Favorite Destination"
            />

          </div>
        )}

        {/* STEP 7 */}

        {step === 7 && (
          <div className="step-card">

            <h2>Emergency Contact</h2>

            <input
              placeholder="Name"
            />

            <input
              placeholder="Phone"
            />

            <input
              placeholder="Relationship"
            />

          </div>
        )}

        {/* STEP 8 */}

        {step === 8 && (
          <div className="step-card">

            <h2>Review Profile</h2>

            <p>
              Review your information
              before submitting.
            </p>

            <button
              className="submit-btn"
            >
              Complete Profile
            </button>

          </div>
        )}

        <div className="step-actions">

          {step > 1 && (
            <button
              className="secondary-btn"
              onClick={prevStep}
            >
              Back
            </button>
          )}

          {step < 8 && (
            <button
              className="primary-btn"
              onClick={nextStep}
            >
              Next
            </button>
          )}

        </div>

      </div>
    </div>
  );
}

export default CompleteProfilePage;
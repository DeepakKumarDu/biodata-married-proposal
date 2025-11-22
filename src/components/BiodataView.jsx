import React from 'react'
import './BiodataView.css'

const BiodataView = ({ biodata, onBack, onEdit, onDelete, currentUser, showBackButton = true }) => {
  if (!biodata) {
    return (
      <div className="empty-state">
        <p>Biodata not found</p>
        <button className="btn btn-primary" onClick={onBack}>Go Back</button>
      </div>
    )
  }

  const { personalInfo, familyInfo, education, profession, lifestyle, partnerPreference, additionalInfo } = biodata

  return (
    <div className="biodata-view">
      <div className="view-header">
        {showBackButton && (
          <button className="btn btn-secondary" onClick={onBack}>
            ← Back to List
          </button>
        )}
        {!showBackButton && <div></div>}
        {currentUser && (
          <div className="view-actions">
            <button className="btn btn-success" onClick={onEdit}>
              ✏️ Edit
            </button>
            <button className="btn btn-danger" onClick={onDelete}>
              🗑️ Delete
            </button>
          </div>
        )}
        {!currentUser && (
          <div className="view-actions">
            <p className="guest-edit-hint">💡 Login to edit or manage biodata</p>
          </div>
        )}
      </div>

      <div className="cv-container">
        <div className="cv-header">
          {additionalInfo?.photo && (
            <img 
              src={additionalInfo.photo} 
              alt={personalInfo?.fullName || 'Profile'}
              className="cv-photo"
              onError={(e) => {
                e.target.style.display = 'none'
              }}
            />
          )}
          <div className="cv-title">
            <h1>{personalInfo?.fullName || 'N/A'}</h1>
            <p className="cv-subtitle">
              {profession?.occupation && `${profession.occupation}`}
              {profession?.designation && ` - ${profession.designation}`}
            </p>
          </div>
        </div>

        <div className="cv-content">
          {/* Personal Information */}
          <section className="cv-section">
            <h2 className="section-title">Personal Information</h2>
            <div className="cv-grid">
              <div className="cv-item">
                <span className="cv-label">Date of Birth:</span>
                <span className="cv-value">{personalInfo?.dateOfBirth || 'N/A'}</span>
              </div>
              <div className="cv-item">
                <span className="cv-label">Age:</span>
                <span className="cv-value">{personalInfo?.age || 'N/A'} years</span>
              </div>
              <div className="cv-item">
                <span className="cv-label">Gender:</span>
                <span className="cv-value">{personalInfo?.gender || 'N/A'}</span>
              </div>
              <div className="cv-item">
                <span className="cv-label">Height:</span>
                <span className="cv-value">{personalInfo?.height || 'N/A'}</span>
              </div>
              <div className="cv-item">
                <span className="cv-label">Weight:</span>
                <span className="cv-value">{personalInfo?.weight || 'N/A'}</span>
              </div>
              <div className="cv-item">
                <span className="cv-label">Religion:</span>
                <span className="cv-value">{personalInfo?.religion || 'N/A'}</span>
              </div>
              <div className="cv-item">
                <span className="cv-label">Caste:</span>
                <span className="cv-value">{personalInfo?.caste || 'N/A'}</span>
              </div>
              <div className="cv-item">
                <span className="cv-label">Mother Tongue:</span>
                <span className="cv-value">{personalInfo?.motherTongue || 'N/A'}</span>
              </div>
              <div className="cv-item">
                <span className="cv-label">Current Location:</span>
                <span className="cv-value">{personalInfo?.currentLocation || 'N/A'}</span>
              </div>
              <div className="cv-item">
                <span className="cv-label">Native Place:</span>
                <span className="cv-value">{personalInfo?.nativePlace || 'N/A'}</span>
              </div>
              <div className="cv-item">
                <span className="cv-label">Marital Status:</span>
                <span className="cv-value">{personalInfo?.maritalStatus || 'N/A'}</span>
              </div>
              <div className="cv-item">
                <span className="cv-label">Phone:</span>
                <span className="cv-value">{personalInfo?.phone || 'N/A'}</span>
              </div>
              <div className="cv-item">
                <span className="cv-label">Email:</span>
                <span className="cv-value">{personalInfo?.email || 'N/A'}</span>
              </div>
              {personalInfo?.address && (
                <div className="cv-item full-width">
                  <span className="cv-label">Address:</span>
                  <span className="cv-value">{personalInfo.address}</span>
                </div>
              )}
            </div>
          </section>

          {/* Family Information */}
          {(familyInfo?.fatherName || familyInfo?.motherName) && (
            <section className="cv-section">
              <h2 className="section-title">Family Information</h2>
              <div className="cv-grid">
                {familyInfo?.fatherName && (
                  <div className="cv-item">
                    <span className="cv-label">Father's Name:</span>
                    <span className="cv-value">{familyInfo.fatherName}</span>
                  </div>
                )}
                {familyInfo?.fatherOccupation && (
                  <div className="cv-item">
                    <span className="cv-label">Father's Occupation:</span>
                    <span className="cv-value">{familyInfo.fatherOccupation}</span>
                  </div>
                )}
                {familyInfo?.motherName && (
                  <div className="cv-item">
                    <span className="cv-label">Mother's Name:</span>
                    <span className="cv-value">{familyInfo.motherName}</span>
                  </div>
                )}
                {familyInfo?.motherOccupation && (
                  <div className="cv-item">
                    <span className="cv-label">Mother's Occupation:</span>
                    <span className="cv-value">{familyInfo.motherOccupation}</span>
                  </div>
                )}
                {familyInfo?.siblings && (
                  <div className="cv-item">
                    <span className="cv-label">Siblings:</span>
                    <span className="cv-value">{familyInfo.siblings}</span>
                  </div>
                )}
                {familyInfo?.familyType && (
                  <div className="cv-item">
                    <span className="cv-label">Family Type:</span>
                    <span className="cv-value">{familyInfo.familyType}</span>
                  </div>
                )}
                {familyInfo?.familyStatus && (
                  <div className="cv-item">
                    <span className="cv-label">Family Status:</span>
                    <span className="cv-value">{familyInfo.familyStatus}</span>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Education */}
          {education?.qualification && (
            <section className="cv-section">
              <h2 className="section-title">Education</h2>
              <div className="cv-grid">
                <div className="cv-item">
                  <span className="cv-label">Qualification:</span>
                  <span className="cv-value">{education.qualification}</span>
                </div>
                {education?.institution && (
                  <div className="cv-item">
                    <span className="cv-label">Institution:</span>
                    <span className="cv-value">{education.institution}</span>
                  </div>
                )}
                {education?.fieldOfStudy && (
                  <div className="cv-item">
                    <span className="cv-label">Field of Study:</span>
                    <span className="cv-value">{education.fieldOfStudy}</span>
                  </div>
                )}
                {education?.yearOfPassing && (
                  <div className="cv-item">
                    <span className="cv-label">Year of Passing:</span>
                    <span className="cv-value">{education.yearOfPassing}</span>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Profession */}
          {profession?.occupation && (
            <section className="cv-section">
              <h2 className="section-title">Profession</h2>
              <div className="cv-grid">
                <div className="cv-item">
                  <span className="cv-label">Occupation:</span>
                  <span className="cv-value">{profession.occupation}</span>
                </div>
                {profession?.companyName && (
                  <div className="cv-item">
                    <span className="cv-label">Company Name:</span>
                    <span className="cv-value">{profession.companyName}</span>
                  </div>
                )}
                {profession?.designation && (
                  <div className="cv-item">
                    <span className="cv-label">Designation:</span>
                    <span className="cv-value">{profession.designation}</span>
                  </div>
                )}
                {profession?.workLocation && (
                  <div className="cv-item">
                    <span className="cv-label">Work Location:</span>
                    <span className="cv-value">{profession.workLocation}</span>
                  </div>
                )}
                {profession?.annualIncome && (
                  <div className="cv-item">
                    <span className="cv-label">Annual Income:</span>
                    <span className="cv-value">{profession.annualIncome}</span>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Lifestyle */}
          {(lifestyle?.diet || lifestyle?.hobbies) && (
            <section className="cv-section">
              <h2 className="section-title">Lifestyle</h2>
              <div className="cv-grid">
                {lifestyle?.diet && (
                  <div className="cv-item">
                    <span className="cv-label">Diet:</span>
                    <span className="cv-value">{lifestyle.diet}</span>
                  </div>
                )}
                {lifestyle?.smoking && (
                  <div className="cv-item">
                    <span className="cv-label">Smoking:</span>
                    <span className="cv-value">{lifestyle.smoking}</span>
                  </div>
                )}
                {lifestyle?.drinking && (
                  <div className="cv-item">
                    <span className="cv-label">Drinking:</span>
                    <span className="cv-value">{lifestyle.drinking}</span>
                  </div>
                )}
                {lifestyle?.hobbies && (
                  <div className="cv-item full-width">
                    <span className="cv-label">Hobbies:</span>
                    <span className="cv-value">{lifestyle.hobbies}</span>
                  </div>
                )}
                {lifestyle?.languages && (
                  <div className="cv-item full-width">
                    <span className="cv-label">Languages Known:</span>
                    <span className="cv-value">{lifestyle.languages}</span>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Partner Preference */}
          {(partnerPreference?.ageRange || partnerPreference?.otherPreferences) && (
            <section className="cv-section">
              <h2 className="section-title">Partner Preference</h2>
              <div className="cv-grid">
                {partnerPreference?.ageRange && (
                  <div className="cv-item">
                    <span className="cv-label">Age Range:</span>
                    <span className="cv-value">{partnerPreference.ageRange}</span>
                  </div>
                )}
                {partnerPreference?.heightRange && (
                  <div className="cv-item">
                    <span className="cv-label">Height Range:</span>
                    <span className="cv-value">{partnerPreference.heightRange}</span>
                  </div>
                )}
                {partnerPreference?.education && (
                  <div className="cv-item">
                    <span className="cv-label">Education:</span>
                    <span className="cv-value">{partnerPreference.education}</span>
                  </div>
                )}
                {partnerPreference?.profession && (
                  <div className="cv-item">
                    <span className="cv-label">Profession:</span>
                    <span className="cv-value">{partnerPreference.profession}</span>
                  </div>
                )}
                {partnerPreference?.location && (
                  <div className="cv-item">
                    <span className="cv-label">Location:</span>
                    <span className="cv-value">{partnerPreference.location}</span>
                  </div>
                )}
                {partnerPreference?.otherPreferences && (
                  <div className="cv-item full-width">
                    <span className="cv-label">Other Preferences:</span>
                    <span className="cv-value">{partnerPreference.otherPreferences}</span>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* About Me */}
          {additionalInfo?.aboutMe && (
            <section className="cv-section">
              <h2 className="section-title">About Me</h2>
              <p className="cv-paragraph">{additionalInfo.aboutMe}</p>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default BiodataView


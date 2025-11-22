import React, { useState, useEffect, useRef } from 'react'
import './BiodataForm.css'

const BiodataForm = ({ biodata, onSubmit, onCancel }) => {
  const fileInputRef = useRef(null)
  const [photoPreview, setPhotoPreview] = useState(null)
  
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      dateOfBirth: '',
      age: '',
      gender: '',
      height: '',
      weight: '',
      religion: '',
      caste: '',
      motherTongue: '',
      currentLocation: '',
      nativePlace: '',
      maritalStatus: '',
      phone: '',
      email: '',
      address: ''
    },
    familyInfo: {
      fatherName: '',
      fatherOccupation: '',
      motherName: '',
      motherOccupation: '',
      siblings: '',
      familyType: '',
      familyStatus: ''
    },
    education: {
      qualification: '',
      institution: '',
      fieldOfStudy: '',
      yearOfPassing: ''
    },
    profession: {
      occupation: '',
      companyName: '',
      designation: '',
      workLocation: '',
      annualIncome: ''
    },
    lifestyle: {
      diet: '',
      smoking: '',
      drinking: '',
      hobbies: '',
      languages: ''
    },
    partnerPreference: {
      ageRange: '',
      heightRange: '',
      education: '',
      profession: '',
      location: '',
      otherPreferences: ''
    },
    additionalInfo: {
      aboutMe: '',
      photo: ''
    }
  })

  useEffect(() => {
    if (biodata) {
      setFormData(biodata)
      if (biodata.additionalInfo?.photo) {
        setPhotoPreview(biodata.additionalInfo.photo)
      }
    }
  }, [biodata])

  const handleChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file')
        return
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        const base64String = reader.result
        setPhotoPreview(base64String)
        handleChange('additionalInfo', 'photo', base64String)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemovePhoto = () => {
    setPhotoPreview(null)
    handleChange('additionalInfo', 'photo', '')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="biodata-form-container">
      <h2>{biodata ? 'Edit Biodata' : 'Create New Biodata'}</h2>
      <form onSubmit={handleSubmit} className="biodata-form">
        {/* Personal Information */}
        <section className="form-section">
          <h3>Personal Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name *</label>
              <input
                type="text"
                value={formData.personalInfo.fullName}
                onChange={(e) => handleChange('personalInfo', 'fullName', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Date of Birth *</label>
              <input
                type="date"
                value={formData.personalInfo.dateOfBirth}
                onChange={(e) => handleChange('personalInfo', 'dateOfBirth', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Age *</label>
              <input
                type="number"
                value={formData.personalInfo.age}
                onChange={(e) => handleChange('personalInfo', 'age', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender *</label>
              <select
                value={formData.personalInfo.gender}
                onChange={(e) => handleChange('personalInfo', 'gender', e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Height (cm)</label>
              <input
                type="text"
                value={formData.personalInfo.height}
                onChange={(e) => handleChange('personalInfo', 'height', e.target.value)}
                placeholder="e.g., 170 cm"
              />
            </div>
            <div className="form-group">
              <label>Weight (kg)</label>
              <input
                type="text"
                value={formData.personalInfo.weight}
                onChange={(e) => handleChange('personalInfo', 'weight', e.target.value)}
                placeholder="e.g., 65 kg"
              />
            </div>
            <div className="form-group">
              <label>Religion *</label>
              <input
                type="text"
                value={formData.personalInfo.religion}
                onChange={(e) => handleChange('personalInfo', 'religion', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Caste</label>
              <input
                type="text"
                value={formData.personalInfo.caste}
                onChange={(e) => handleChange('personalInfo', 'caste', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mother Tongue *</label>
              <input
                type="text"
                value={formData.personalInfo.motherTongue}
                onChange={(e) => handleChange('personalInfo', 'motherTongue', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Current Location *</label>
              <input
                type="text"
                value={formData.personalInfo.currentLocation}
                onChange={(e) => handleChange('personalInfo', 'currentLocation', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Native Place</label>
              <input
                type="text"
                value={formData.personalInfo.nativePlace}
                onChange={(e) => handleChange('personalInfo', 'nativePlace', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Marital Status *</label>
              <select
                value={formData.personalInfo.maritalStatus}
                onChange={(e) => handleChange('personalInfo', 'maritalStatus', e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="Never Married">Never Married</option>
                <option value="Divorced">Divorced</option>
                <option value="Widowed">Widowed</option>
              </select>
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                value={formData.personalInfo.phone}
                onChange={(e) => handleChange('personalInfo', 'phone', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                value={formData.personalInfo.email}
                onChange={(e) => handleChange('personalInfo', 'email', e.target.value)}
                required
              />
            </div>
            <div className="form-group full-width">
              <label>Address</label>
              <textarea
                value={formData.personalInfo.address}
                onChange={(e) => handleChange('personalInfo', 'address', e.target.value)}
                rows="3"
              />
            </div>
          </div>
        </section>

        {/* Family Information */}
        <section className="form-section">
          <h3>Family Information</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Father's Name</label>
              <input
                type="text"
                value={formData.familyInfo.fatherName}
                onChange={(e) => handleChange('familyInfo', 'fatherName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Father's Occupation</label>
              <input
                type="text"
                value={formData.familyInfo.fatherOccupation}
                onChange={(e) => handleChange('familyInfo', 'fatherOccupation', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mother's Name</label>
              <input
                type="text"
                value={formData.familyInfo.motherName}
                onChange={(e) => handleChange('familyInfo', 'motherName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Mother's Occupation</label>
              <input
                type="text"
                value={formData.familyInfo.motherOccupation}
                onChange={(e) => handleChange('familyInfo', 'motherOccupation', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Siblings</label>
              <input
                type="text"
                value={formData.familyInfo.siblings}
                onChange={(e) => handleChange('familyInfo', 'siblings', e.target.value)}
                placeholder="e.g., 1 Brother, 1 Sister"
              />
            </div>
            <div className="form-group">
              <label>Family Type</label>
              <select
                value={formData.familyInfo.familyType}
                onChange={(e) => handleChange('familyInfo', 'familyType', e.target.value)}
              >
                <option value="">Select</option>
                <option value="Nuclear">Nuclear</option>
                <option value="Joint">Joint</option>
              </select>
            </div>
            <div className="form-group">
              <label>Family Status</label>
              <select
                value={formData.familyInfo.familyStatus}
                onChange={(e) => handleChange('familyInfo', 'familyStatus', e.target.value)}
              >
                <option value="">Select</option>
                <option value="Middle Class">Middle Class</option>
                <option value="Upper Middle Class">Upper Middle Class</option>
                <option value="Rich">Rich</option>
              </select>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="form-section">
          <h3>Education</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Qualification *</label>
              <input
                type="text"
                value={formData.education.qualification}
                onChange={(e) => handleChange('education', 'qualification', e.target.value)}
                placeholder="e.g., B.Tech, MBA, M.Sc"
                required
              />
            </div>
            <div className="form-group">
              <label>Institution</label>
              <input
                type="text"
                value={formData.education.institution}
                onChange={(e) => handleChange('education', 'institution', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Field of Study</label>
              <input
                type="text"
                value={formData.education.fieldOfStudy}
                onChange={(e) => handleChange('education', 'fieldOfStudy', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Year of Passing</label>
              <input
                type="text"
                value={formData.education.yearOfPassing}
                onChange={(e) => handleChange('education', 'yearOfPassing', e.target.value)}
              />
            </div>
          </div>
        </section>

        {/* Profession */}
        <section className="form-section">
          <h3>Profession</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Occupation *</label>
              <input
                type="text"
                value={formData.profession.occupation}
                onChange={(e) => handleChange('profession', 'occupation', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input
                type="text"
                value={formData.profession.companyName}
                onChange={(e) => handleChange('profession', 'companyName', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Designation</label>
              <input
                type="text"
                value={formData.profession.designation}
                onChange={(e) => handleChange('profession', 'designation', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Work Location</label>
              <input
                type="text"
                value={formData.profession.workLocation}
                onChange={(e) => handleChange('profession', 'workLocation', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Annual Income</label>
              <input
                type="text"
                value={formData.profession.annualIncome}
                onChange={(e) => handleChange('profession', 'annualIncome', e.target.value)}
                placeholder="e.g., 5 LPA"
              />
            </div>
          </div>
        </section>

        {/* Lifestyle */}
        <section className="form-section">
          <h3>Lifestyle</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Diet</label>
              <select
                value={formData.lifestyle.diet}
                onChange={(e) => handleChange('lifestyle', 'diet', e.target.value)}
              >
                <option value="">Select</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Non-Vegetarian">Non-Vegetarian</option>
                <option value="Vegan">Vegan</option>
              </select>
            </div>
            <div className="form-group">
              <label>Smoking</label>
              <select
                value={formData.lifestyle.smoking}
                onChange={(e) => handleChange('lifestyle', 'smoking', e.target.value)}
              >
                <option value="">Select</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="Occasionally">Occasionally</option>
              </select>
            </div>
            <div className="form-group">
              <label>Drinking</label>
              <select
                value={formData.lifestyle.drinking}
                onChange={(e) => handleChange('lifestyle', 'drinking', e.target.value)}
              >
                <option value="">Select</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
                <option value="Occasionally">Occasionally</option>
              </select>
            </div>
            <div className="form-group full-width">
              <label>Hobbies</label>
              <textarea
                value={formData.lifestyle.hobbies}
                onChange={(e) => handleChange('lifestyle', 'hobbies', e.target.value)}
                rows="2"
                placeholder="e.g., Reading, Traveling, Music"
              />
            </div>
            <div className="form-group full-width">
              <label>Languages Known</label>
              <input
                type="text"
                value={formData.lifestyle.languages}
                onChange={(e) => handleChange('lifestyle', 'languages', e.target.value)}
                placeholder="e.g., English, Hindi, Telugu"
              />
            </div>
          </div>
        </section>

        {/* Partner Preference */}
        <section className="form-section">
          <h3>Partner Preference</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>Age Range</label>
              <input
                type="text"
                value={formData.partnerPreference.ageRange}
                onChange={(e) => handleChange('partnerPreference', 'ageRange', e.target.value)}
                placeholder="e.g., 25-30"
              />
            </div>
            <div className="form-group">
              <label>Height Range</label>
              <input
                type="text"
                value={formData.partnerPreference.heightRange}
                onChange={(e) => handleChange('partnerPreference', 'heightRange', e.target.value)}
                placeholder="e.g., 160-180 cm"
              />
            </div>
            <div className="form-group">
              <label>Education</label>
              <input
                type="text"
                value={formData.partnerPreference.education}
                onChange={(e) => handleChange('partnerPreference', 'education', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Profession</label>
              <input
                type="text"
                value={formData.partnerPreference.profession}
                onChange={(e) => handleChange('partnerPreference', 'profession', e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={formData.partnerPreference.location}
                onChange={(e) => handleChange('partnerPreference', 'location', e.target.value)}
              />
            </div>
            <div className="form-group full-width">
              <label>Other Preferences</label>
              <textarea
                value={formData.partnerPreference.otherPreferences}
                onChange={(e) => handleChange('partnerPreference', 'otherPreferences', e.target.value)}
                rows="3"
              />
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="form-section">
          <h3>Additional Information</h3>
          <div className="form-grid">
            <div className="form-group full-width">
              <label>About Me</label>
              <textarea
                value={formData.additionalInfo.aboutMe}
                onChange={(e) => handleChange('additionalInfo', 'aboutMe', e.target.value)}
                rows="5"
                placeholder="Tell us about yourself..."
              />
            </div>
            
            {/* Photo Upload Section */}
            <div className="form-group full-width">
              <label>Profile Photo</label>
              <div className="photo-upload-container">
                {photoPreview ? (
                  <div className="photo-preview-wrapper">
                    <img src={photoPreview} alt="Preview" className="photo-preview" />
                    <button 
                      type="button" 
                      className="remove-photo-btn"
                      onClick={handleRemovePhoto}
                      title="Remove photo"
                    >
                      ✕
                    </button>
                  </div>
                ) : (
                  <div className="photo-upload-area">
                    <div className="upload-icon">📷</div>
                    <p className="upload-text">Click to upload or drag and drop</p>
                    <p className="upload-hint">PNG, JPG, GIF up to 5MB</p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="photo-input"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload" className="upload-label">
                  {photoPreview ? 'Change Photo' : 'Choose Photo'}
                </label>
              </div>
              
              {/* Alternative: Photo URL */}
              <div className="photo-url-alternative">
                <p className="divider-text">OR</p>
                <input
                  type="url"
                  value={formData.additionalInfo.photo && !formData.additionalInfo.photo.startsWith('data:') ? formData.additionalInfo.photo : ''}
                  onChange={(e) => {
                    handleChange('additionalInfo', 'photo', e.target.value)
                    setPhotoPreview(e.target.value)
                  }}
                  placeholder="Enter photo URL (optional)"
                  className="photo-url-input"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="form-actions">
          <button type="button" className="btn btn-secondary" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            {biodata ? 'Update Biodata' : 'Create Biodata'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default BiodataForm


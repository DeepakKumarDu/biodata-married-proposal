import React from 'react'
import './BiodataList.css'

const BiodataList = ({ biodatas, onEdit, onDelete, onView }) => {
  if (biodatas.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon">📄</div>
        <h2>No Biodatas Found</h2>
        <p>Create your first biodata to get started!</p>
      </div>
    )
  }

  return (
    <div className="biodata-list">
      <h2 className="list-header">My Biodatas ({biodatas.length})</h2>
      <div className="biodata-grid">
        {biodatas.map((biodata) => (
          <div key={biodata.id} className="biodata-card">
            <div className="card-header">
              {biodata.additionalInfo?.photo && (
                <img 
                  src={biodata.additionalInfo.photo} 
                  alt={biodata.personalInfo?.fullName || 'Profile'}
                  className="profile-photo"
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              )}
              <div className="card-title">
                <h3>{biodata.personalInfo?.fullName || 'Unnamed'}</h3>
                <p className="card-subtitle">
                  {biodata.personalInfo?.age && `${biodata.personalInfo.age} years`}
                  {biodata.personalInfo?.gender && ` • ${biodata.personalInfo.gender}`}
                </p>
              </div>
            </div>
            
            <div className="card-body">
              <div className="info-row">
                <span className="info-label">📍 Location:</span>
                <span>{biodata.personalInfo?.currentLocation || 'N/A'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">🎓 Education:</span>
                <span>{biodata.education?.qualification || 'N/A'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">💼 Profession:</span>
                <span>{biodata.profession?.occupation || 'N/A'}</span>
              </div>
              <div className="info-row">
                <span className="info-label">🕌 Religion:</span>
                <span>{biodata.personalInfo?.religion || 'N/A'}</span>
              </div>
            </div>

            <div className="card-actions">
              <button 
                className="btn btn-info btn-sm" 
                onClick={() => onView(biodata.id)}
              >
                👁️ View
              </button>
              <button 
                className="btn btn-success btn-sm" 
                onClick={() => onEdit(biodata.id)}
              >
                ✏️ Edit
              </button>
              <button 
                className="btn btn-danger btn-sm" 
                onClick={() => onDelete(biodata.id)}
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BiodataList


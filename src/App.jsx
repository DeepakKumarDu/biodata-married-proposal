import React, { useState, useEffect } from 'react'
import BiodataForm from './components/BiodataForm'
import BiodataList from './components/BiodataList'
import BiodataView from './components/BiodataView'
import Login from './components/Login'
import Register from './components/Register'
import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [showRegister, setShowRegister] = useState(false)
  const [biodatas, setBiodatas] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [viewingId, setViewingId] = useState(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem('currentUser')
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser))
    }
    loadBiodatas()
  }, [])

  useEffect(() => {
    // Auto-show full view if only 1 biodata exists and not viewing/editing
    if (biodatas.length === 1 && !viewingId && !showForm && !editingId) {
      setViewingId(biodatas[0].id)
    }
  }, [biodatas.length, viewingId, showForm, editingId])

  const loadBiodatas = () => {
    const stored = localStorage.getItem('biodatas')
    if (stored) {
      const parsed = JSON.parse(stored)
      // Ensure default biodata always exists
      const hasDefault = parsed.some(b => b.id === 'default-pritu-dubey')
      if (!hasDefault) {
        // Add default biodata if not present
        const defaultBiodata = {
          id: 'default-pritu-dubey',
          userId: 'default-user',
          personalInfo: {
            fullName: 'Pritu Dubey',
            dateOfBirth: '2005-03-06',
            age: '21',
            gender: 'Female',
            height: '155',
            weight: '46',
            religion: 'Hindu',
            caste: 'Brahman',
            motherTongue: 'Hindi',
            currentLocation: 'Hatheda, Haliya, Lalganj, Mirzapur, UP',
            nativePlace: 'Hatheda, Mirzapur',
            maritalStatus: 'Never Married',
            phone: '8127448663',
            email: 'pritud26@gmail.com',
            address: 'Hatheda, Haliya, Lalganj, Mirzapur, UP (231211)'
          },
          familyInfo: {
            fatherName: 'VidyaKant Dubey',
            fatherOccupation: 'Farmer',
            motherName: 'Nirmala Devi',
            motherOccupation: 'HouseWife',
            siblings: "2 Brothers, I'm the only sister",
            familyType: 'Joint',
            familyStatus: 'Middle Class'
          },
          education: {
            qualification: 'BA',
            institution: 'panchsheel degree college',
            fieldOfStudy: 'Geography and Political Science',
            yearOfPassing: '2026'
          },
          profession: {
            occupation: 'Student',
            companyName: 'N/A',
            designation: 'N/A',
            workLocation: 'N/A',
            annualIncome: 'N/A'
          },
          lifestyle: {
            diet: 'Vegetarian',
            smoking: 'No',
            drinking: 'No',
            hobbies: 'I love trying new dishes, cooking, stitching (silai), and embroidery (kadhai). I enjoy learning creative household skills and contributing to my family.',
            languages: 'Hindi, English'
          },
          partnerPreference: {
            ageRange: '23-27',
            heightRange: 'N/A',
            education: 'Educated',
            profession: 'I prefer a partner who is professionally stable and engaged in some form of meaningful work or occupation. He should be responsible, hardworking, and capable of managing his personal and family responsibilities. A person who values growth, financial stability, and has a positive approach towards his career.',
            location: 'Anywhere in India',
            otherPreferences: 'I am looking for a respectful, understanding, and responsible life partner. Someone who values family, traditions, and maintains a positive outlook towards life. He should treat my parents with the same respect and love as he gives to his own parents. I believe marriage is built on trust, understanding, and mutual support, so I want a partner who communicates openly and stands by me in every phase of life. I prefer someone who is calm-natured, caring, and believes in simple living with strong moral values. A person who understands responsibilities, supports growth, and values relationships.'
          },
          additionalInfo: {
            aboutMe: 'I am a simple, family-oriented girl who believes in respect, honesty, and cultural values. I am currently completing my BA final year and preparing to support my family in the future. I enjoy maintaining a peaceful and positive environment around me. I love trying new dishes, cooking, stitching (silai), and embroidery (kadhai). I enjoy learning creative household skills and contributing to my family. A responsible, understanding, and family-respecting partner who values simplicity, culture, and mutual respect.',
            photo: ''
          },
          createdAt: '2024-01-01T00:00:00.000Z'
        }
        parsed.unshift(defaultBiodata)
        localStorage.setItem('biodatas', JSON.stringify(parsed))
        setBiodatas(parsed)
      } else {
        setBiodatas(parsed)
      }
    } else {
      // First time - initialize with default biodata
      const defaultBiodata = {
        id: 'default-pritu-dubey',
        userId: 'default-user',
        personalInfo: {
          fullName: 'Pritu Dubey',
          dateOfBirth: '2005-03-06',
          age: '21',
          gender: 'Female',
          height: '155',
          weight: '46',
          religion: 'Hindu',
          caste: 'Brahman',
          motherTongue: 'Hindi',
          currentLocation: 'Hatheda, Haliya, Lalganj, Mirzapur, UP',
          nativePlace: 'Hatheda, Mirzapur',
          maritalStatus: 'Never Married',
          phone: '8127448663',
          email: 'pritud26@gmail.com',
          address: 'Hatheda, Haliya, Lalganj, Mirzapur, UP (231211)'
        },
        familyInfo: {
          fatherName: 'VidyaKant Dubey',
          fatherOccupation: 'Farmer',
          motherName: 'Nirmala Devi',
          motherOccupation: 'HouseWife',
          siblings: "2 Brothers, I'm the only sister",
          familyType: 'Joint',
          familyStatus: 'Middle Class'
        },
        education: {
          qualification: 'BA',
          institution: 'panchsheel degree college',
          fieldOfStudy: 'Geography and Political Science',
          yearOfPassing: '2026'
        },
        profession: {
          occupation: 'Student',
          companyName: 'N/A',
          designation: 'N/A',
          workLocation: 'N/A',
          annualIncome: 'N/A'
        },
        lifestyle: {
          diet: 'Vegetarian',
          smoking: 'No',
          drinking: 'No',
          hobbies: 'I love trying new dishes, cooking, stitching (silai), and embroidery (kadhai). I enjoy learning creative household skills and contributing to my family.',
          languages: 'Hindi, English'
        },
        partnerPreference: {
          ageRange: '23-27',
          heightRange: 'N/A',
          education: 'Educated',
          profession: 'I prefer a partner who is professionally stable and engaged in some form of meaningful work or occupation. He should be responsible, hardworking, and capable of managing his personal and family responsibilities. A person who values growth, financial stability, and has a positive approach towards his career.',
          location: 'Anywhere in India',
          otherPreferences: 'I am looking for a respectful, understanding, and responsible life partner. Someone who values family, traditions, and maintains a positive outlook towards life. He should treat my parents with the same respect and love as he gives to his own parents. I believe marriage is built on trust, understanding, and mutual support, so I want a partner who communicates openly and stands by me in every phase of life. I prefer someone who is calm-natured, caring, and believes in simple living with strong moral values. A person who understands responsibilities, supports growth, and values relationships.'
        },
        additionalInfo: {
          aboutMe: 'I am a simple, family-oriented girl who believes in respect, honesty, and cultural values. I am currently completing my BA final year and preparing to support my family in the future. I enjoy maintaining a peaceful and positive environment around me. I love trying new dishes, cooking, stitching (silai), and embroidery (kadhai). I enjoy learning creative household skills and contributing to my family. A responsible, understanding, and family-respecting partner who values simplicity, culture, and mutual respect.',
          photo: ''
        },
        createdAt: '2024-01-01T00:00:00.000Z'
      }
      const initialBiodatas = [defaultBiodata]
      localStorage.setItem('biodatas', JSON.stringify(initialBiodatas))
      setBiodatas(initialBiodatas)
    }
  }

  const saveBiodatas = (newBiodatas) => {
    // Ensure default biodata is always preserved
    const hasDefault = newBiodatas.some(b => b.id === 'default-pritu-dubey')
    if (!hasDefault) {
      // Re-add default biodata if it was removed
      const defaultBiodata = {
        id: 'default-pritu-dubey',
        userId: 'default-user',
        personalInfo: {
          fullName: 'Pritu Dubey',
          dateOfBirth: '2005-03-06',
          age: '21',
          gender: 'Female',
          height: '155',
          weight: '46',
          religion: 'Hindu',
          caste: 'Brahman',
          motherTongue: 'Hindi',
          currentLocation: 'Hatheda, Haliya, Lalganj, Mirzapur, UP',
          nativePlace: 'Hatheda, Mirzapur',
          maritalStatus: 'Never Married',
          phone: '8127448663',
          email: 'pritud26@gmail.com',
          address: 'Hatheda, Haliya, Lalganj, Mirzapur, UP (231211)'
        },
        familyInfo: {
          fatherName: 'VidyaKant Dubey',
          fatherOccupation: 'Farmer',
          motherName: 'Nirmala Devi',
          motherOccupation: 'HouseWife',
          siblings: "2 Brothers, I'm the only sister",
          familyType: 'Joint',
          familyStatus: 'Middle Class'
        },
        education: {
          qualification: 'BA',
          institution: 'panchsheel degree college',
          fieldOfStudy: 'Geography and Political Science',
          yearOfPassing: '2026'
        },
        profession: {
          occupation: 'Student',
          companyName: 'N/A',
          designation: 'N/A',
          workLocation: 'N/A',
          annualIncome: 'N/A'
        },
        lifestyle: {
          diet: 'Vegetarian',
          smoking: 'No',
          drinking: 'No',
          hobbies: 'I love trying new dishes, cooking, stitching (silai), and embroidery (kadhai). I enjoy learning creative household skills and contributing to my family.',
          languages: 'Hindi, English'
        },
        partnerPreference: {
          ageRange: '23-27',
          heightRange: 'N/A',
          education: 'Educated',
          profession: 'I prefer a partner who is professionally stable and engaged in some form of meaningful work or occupation. He should be responsible, hardworking, and capable of managing his personal and family responsibilities. A person who values growth, financial stability, and has a positive approach towards his career.',
          location: 'Anywhere in India',
          otherPreferences: 'I am looking for a respectful, understanding, and responsible life partner. Someone who values family, traditions, and maintains a positive outlook towards life. He should treat my parents with the same respect and love as he gives to his own parents. I believe marriage is built on trust, understanding, and mutual support, so I want a partner who communicates openly and stands by me in every phase of life. I prefer someone who is calm-natured, caring, and believes in simple living with strong moral values. A person who understands responsibilities, supports growth, and values relationships.'
        },
        additionalInfo: {
          aboutMe: 'I am a simple, family-oriented girl who believes in respect, honesty, and cultural values. I am currently completing my BA final year and preparing to support my family in the future. I enjoy maintaining a peaceful and positive environment around me. I love trying new dishes, cooking, stitching (silai), and embroidery (kadhai). I enjoy learning creative household skills and contributing to my family. A responsible, understanding, and family-respecting partner who values simplicity, culture, and mutual respect.',
          photo: ''
        },
        createdAt: '2024-01-01T00:00:00.000Z'
      }
      newBiodatas.unshift(defaultBiodata)
    }
    localStorage.setItem('biodatas', JSON.stringify(newBiodatas))
    setBiodatas(newBiodatas)
  }

  const handleCreate = (biodata) => {
    const newBiodata = {
      ...biodata,
      id: Date.now().toString(),
      userId: currentUser.id,
      createdAt: new Date().toISOString()
    }
    const updated = [...biodatas, newBiodata]
    saveBiodatas(updated)
    setShowForm(false)
    setEditingId(null)
  }

  const handleUpdate = (id, updatedBiodata) => {
    const biodata = biodatas.find(b => b.id === id)
    if (biodata && biodata.userId !== currentUser.id) {
      alert('You can only edit your own biodata!')
      return
    }
    const updated = biodatas.map(b => 
      b.id === id ? { ...updatedBiodata, id, userId: currentUser.id, updatedAt: new Date().toISOString() } : b
    )
    saveBiodatas(updated)
    setEditingId(null)
    setShowForm(false)
  }

  const handleDelete = (id) => {
    if (!currentUser) {
      setShowRegister(true)
      return
    }
    const biodata = biodatas.find(b => b.id === id)
    // Prevent deletion of default biodata
    if (id === 'default-pritu-dubey') {
      alert('This is a default biodata and cannot be deleted!')
      return
    }
    if (biodata && biodata.userId !== currentUser.id) {
      alert('You can only delete your own biodata!')
      return
    }
    if (window.confirm('Are you sure you want to delete this biodata?')) {
      const updated = biodatas.filter(b => b.id !== id)
      saveBiodatas(updated)
      if (viewingId === id) setViewingId(null)
    }
  }

  const handleEdit = (id) => {
    if (!currentUser) {
      setShowRegister(true)
      return
    }
    const biodata = biodatas.find(b => b.id === id)
    // Prevent editing of default biodata by non-owners
    if (id === 'default-pritu-dubey' && (!biodata || biodata.userId !== currentUser.id)) {
      alert('This is a default biodata. Please create your own biodata to edit!')
      return
    }
    if (biodata && biodata.userId !== currentUser.id) {
      alert('You can only edit your own biodata!')
      return
    }
    setEditingId(id)
    setShowForm(true)
    setViewingId(null)
  }

  const handleView = (id) => {
    setViewingId(id)
    setShowForm(false)
    setEditingId(null)
  }

  const handleNew = () => {
    if (!currentUser) {
      setShowRegister(true)
      return
    }
    setShowForm(true)
    setEditingId(null)
    setViewingId(null)
  }

  const handleCancel = () => {
    setShowForm(false)
    setEditingId(null)
  }

  const handleLogin = (user) => {
    setCurrentUser(user)
    setShowRegister(false)
  }

  const handleRegister = (user) => {
    setCurrentUser(user)
    setShowRegister(false)
  }

  const handleLogout = () => {
    localStorage.removeItem('currentUser')
    setCurrentUser(null)
    setShowForm(false)
    setViewingId(null)
    setEditingId(null)
  }

  // Show login/register modal only when needed (for create/edit/delete)
  const showLoginModal = showRegister || (currentUser === null && (showForm || editingId))

  // Get biodatas to display - all for guests, user-specific for logged in users
  const displayBiodatas = currentUser ? biodatas.filter(b => b.userId === currentUser.id) : biodatas

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1>💍 Married Biodata Management</h1>
            <p>
              {currentUser 
                ? `Welcome, ${currentUser.name}! Create and manage your biodata profile`
                : 'Browse biodata profiles for marriage proposals'
              }
            </p>
          </div>
          <div className="header-actions">
            {currentUser ? (
              <button className="btn btn-secondary logout-btn" onClick={handleLogout}>
                🚪 Logout
              </button>
            ) : (
              <button 
                className="btn btn-primary login-btn" 
                onClick={() => setShowRegister(true)}
              >
                🔐 Login / Register
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="app-content">
        {/* Login/Register Modal */}
        {showLoginModal && (
          <div className="modal-overlay" onClick={() => setShowRegister(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              {showRegister ? (
                <Register 
                  onRegister={(user) => {
                    handleRegister(user)
                    setShowRegister(false)
                  }} 
                  onSwitchToLogin={() => setShowRegister(false)} 
                />
              ) : (
                <Login 
                  onLogin={(user) => {
                    handleLogin(user)
                    setShowRegister(false)
                  }} 
                  onSwitchToRegister={() => setShowRegister(true)} 
                />
              )}
              <button 
                className="modal-close" 
                onClick={() => setShowRegister(false)}
                title="Close"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {!showForm && !viewingId && (
          <div className="action-bar">
            {currentUser ? (
              <button className="btn btn-primary" onClick={handleNew}>
                + Create New Biodata
              </button>
            ) : (
              <div className="guest-message">
                <p>💡 Want to create or manage biodata? <span className="link" onClick={() => setShowRegister(true)}>Login or Register</span></p>
              </div>
            )}
          </div>
        )}

        {showForm && currentUser && (
          <BiodataForm
            biodata={editingId ? displayBiodatas.find(b => b.id === editingId) : null}
            onSubmit={editingId ? (data) => handleUpdate(editingId, data) : handleCreate}
            onCancel={handleCancel}
          />
        )}

        {!showForm && !viewingId && (
          <BiodataList
            biodatas={displayBiodatas}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
            currentUser={currentUser}
          />
        )}

        {viewingId && (
          <BiodataView
            biodata={displayBiodatas.find(b => b.id === viewingId)}
            onBack={() => setViewingId(null)}
            onEdit={() => handleEdit(viewingId)}
            onDelete={() => handleDelete(viewingId)}
            currentUser={currentUser}
            showBackButton={displayBiodatas.length > 1}
          />
        )}
      </div>
    </div>
  )
}

export default App


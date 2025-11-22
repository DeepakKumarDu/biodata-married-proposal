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

  const loadBiodatas = () => {
    const stored = localStorage.getItem('biodatas')
    if (stored) {
      setBiodatas(JSON.parse(stored))
    }
  }

  const saveBiodatas = (newBiodatas) => {
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
    const biodata = biodatas.find(b => b.id === id)
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
    const biodata = biodatas.find(b => b.id === id)
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

  // Show login/register if not authenticated
  if (!currentUser) {
    return (
      <div className="app">
        <header className="app-header">
          <h1>💍 Married Biodata Management</h1>
          <p>Create and manage biodata profiles for marriage proposals</p>
        </header>
        <div className="app-content">
          {showRegister ? (
            <Register onRegister={handleRegister} onSwitchToLogin={() => setShowRegister(false)} />
          ) : (
            <Login onLogin={handleLogin} onSwitchToRegister={() => setShowRegister(true)} />
          )}
        </div>
      </div>
    )
  }

  // Filter biodatas to show only current user's biodatas
  const userBiodatas = biodatas.filter(b => b.userId === currentUser.id)

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div>
            <h1>💍 Married Biodata Management</h1>
            <p>Welcome, {currentUser.name}! Create and manage your biodata profile</p>
          </div>
          <button className="btn btn-secondary logout-btn" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </header>

      <div className="app-content">
        {!showForm && !viewingId && (
          <div className="action-bar">
            <button className="btn btn-primary" onClick={handleNew}>
              + Create New Biodata
            </button>
          </div>
        )}

        {showForm && (
          <BiodataForm
            biodata={editingId ? userBiodatas.find(b => b.id === editingId) : null}
            onSubmit={editingId ? (data) => handleUpdate(editingId, data) : handleCreate}
            onCancel={handleCancel}
          />
        )}

        {!showForm && !viewingId && (
          <BiodataList
            biodatas={userBiodatas}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
            currentUser={currentUser}
          />
        )}

        {viewingId && (
          <BiodataView
            biodata={userBiodatas.find(b => b.id === viewingId)}
            onBack={() => setViewingId(null)}
            onEdit={() => handleEdit(viewingId)}
            onDelete={() => handleDelete(viewingId)}
            currentUser={currentUser}
          />
        )}
      </div>
    </div>
  )
}

export default App


// src/components/UserForm.tsx
import React, { useState, useEffect } from 'react';

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '', phone: '' });
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    window.onbeforeunload = () => {
      if (unsavedChanges) return 'You have unsaved changes!';
    };

    return () => {
      window.onbeforeunload = null;
    };
  }, [unsavedChanges]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setUnsavedChanges(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userId = Math.random().toString(36).substr(2, 9); // Autogenerate user ID
    localStorage.setItem(userId, JSON.stringify(formData));
    setUnsavedChanges(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;

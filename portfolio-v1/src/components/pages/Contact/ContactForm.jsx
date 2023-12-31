import {useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        message:'',
    });
    const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);

    // Return true if there are no errors, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:5173/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    }
  };

    return (
        <div className="Form-Box">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name='name' onChange={handleChange} />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name='email' onChange={handleChange} />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <div className='form-field'>
                    <label htmlFor="message">Message:</label>
                    <textarea rows="10" cols="50" name='message' onChange={handleChange} />
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>
                <div className='btn-submit'>
                    <input type="submit" value="Submit" />
                </div>
                
            </form>
        </div>
    )
}

export default ContactForm
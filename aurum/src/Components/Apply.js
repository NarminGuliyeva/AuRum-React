import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'

function Apply() {
    const location = useLocation()
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleInputChange = (e) => {
        const inputText = e.target.value;
        setPhoneNumber(inputText.includes('994') ? inputText.replace('994', '') : inputText);
    };

    const formattedPhoneNumber = `994${phoneNumber}`;

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: ''
    })

    const [formErrors, setFormErrors] = useState({
        name: '',
        surname: '',
        email: ''
    })

    const InputChange = (e) => {

        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        setFormErrors({
            ...formErrors,
            [name]: value.trim() ? '' : `${name} daxil edilməlidir.`,
        });
    };

        const handleSubmit = (e) => {
            e.preventDefault();
            const newFormErrors = { ...formErrors };
 

    if (!formData.name.trim()) {
      newFormErrors.name = 'Ad daxil edilməlidir.';
    } else {
      newFormErrors.name = '';
    }

    if (!formData.surname.trim()) {
      newFormErrors.surname = 'Soyad daxil edilməlidir.';
    } else {
      newFormErrors.surname = '';
    }

    if (!formData.email.trim()) {
      newFormErrors.email = 'E-mail daxil edilməlidir.';
    } else {
      newFormErrors.email = '';
    }
    setFormErrors(newFormErrors);
    if (!Object.values(newFormErrors).some((error) => error !== '')) {
        Swal.fire({
            // title: 'Error!',
            // text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Müraciət göndərildi'
          })
    }
};

return (
    <div className='apply-section'>
        <div className='contain'>
            <div className='apply-title'>
                <h2 className='heading2'>Müraciət üçün ərizə</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Ad*</label>
                    <input type='text' className='inp' placeholder='Adınız' name='name' value={formData.name} onChange={InputChange}></input>
                    {formErrors.name && <div className="error-message">{formErrors.name}</div>}
                </div>
                <div>
                    <label htmlFor="surname">Soyad*</label>
                    <input type='text' className='inp' placeholder='Soyadınız' name='surname' value={formData.surname} onChange={InputChange}></input>
                    {formErrors.surname && <div className="error-message">{formErrors.surname}</div>}
                </div>
                <div>
                    <label>Nömrə*</label>
                    <input type='tel' className='inp' value={formattedPhoneNumber} name='phone' onChange={handleInputChange} maxLength='12'></input>
                    
                </div>
                <div>
                    <label>E-mail*</label>
                    <input type='email' className='inp' placeholder='E-mail ünvanınızı daxil edin' name='email' value={formData.email} onChange={InputChange}></input>
                    {formErrors.email && <div className="error-message">{formErrors.email}</div>}
                </div>
                {
                    location.pathname === '/career' ?
                        <div className='file'>
                            <label>CV</label>
                            <input type='file' className='inp' placeholder={`${<i class="fa-solid fa-cloud-arrow-up"></i>}`}></input>
                        </div>
                        :
                        <div className='file'>
                            <label>Müraciətiniz</label>
                            <textarea className='inp' placeholder='Mesajınız...'></textarea>
                        </div>
                }
                <button className='btn-apply'>Göndər</button>
            </form>
        </div>
    </div>
)
}

export default Apply
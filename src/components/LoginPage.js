import React, { useState } from 'react';

export default function LoginPage() {
    const [Pass, setPass] = useState('password');
    const passwordVisibility = () => {
        if (Pass === 'password') {
            setPass('text');
        }
        else {
            setPass('password');
        }

    }
    return (
        <>
            <div className="container" style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '1rem', color: '#545775' }}>
                <h2>HOSTEL AND MESS MANEGEMENT</h2>
                <h3>College Name</h3>
            </div>
            <div className="container" style={{ maxWidth: '20rem', backgroundColor: '#BFC8AD', padding: '2rem', borderRadius: '1rem', boxShadow: ' 0.5rem 0.5rem 1.3rem black', border: '1px solid #90B494' }}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Enter Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" style={{ backgroundColor: '#DBCFB0', border: '1px solid #545775' }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Enter Password</label>
                        <input type={`${Pass}`} className="form-control" id="exampleInputPassword1" style={{ backgroundColor: '#DBCFB0', border: '1px solid #545775' }} />
                        <input type="checkbox" onClick={passwordVisibility} style={{ marginTop: '0.4rem' }} /> <span className='mx-1'>Show Password</span>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="LoginType" id="admin" value="Admin" style={{ cursor: 'pointer' }} />
                        <label className="form-check-label" htmlFor="admin">Admin</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="LoginType" id="student" value="Student" defaultChecked style={{ cursor: 'pointer' }} />
                        <label className="form-check-label" htmlFor="student">Student</label>
                    </div>
                    <div className="my-3 form-label">
                        <a href="/">Reset Password</a>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <button type="submit" className="btn" style={{ backgroundColor: '#90B494', boxShadow: '0 0 0.3rem black', color: 'black', borderRadius: '1rem', minWidth: '10rem' }}>Login</button>
                    </div>
                </form>
            </div>
        </>
    )
}


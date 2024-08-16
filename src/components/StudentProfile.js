import React from 'react';
import '../CssFile/StudentProfile.css';
import './sampleImage.jpg';

export default function StudentProfile() {
    
    return (
        <>
            <div className="parentbox">
                <div className="image">
        <img src='./sampleImage.jpg' alt="Not Avaliable" />
                </div>
                <div className="box">
                    <div className="Data">
                        <div className="StudentData">
                            <p>Student Name</p>
                        </div>
                        <div className="StudentData">
                            <p>Student Roll No </p>
                        </div>
                        <div className="StudentData">
                            <p>Course</p>
                        </div>
                        <div className="StudentData">
                            <p>Branch</p>
                        </div>
                        <div className="StudentData">
                            <p>Section</p>
                        </div>
                        <div className="StudentData">
                            <p>Semester,Year</p>
                        </div>
                        <div className="StudentData">
                            <p>Mobile No</p>
                        </div>
                        <div className="StudentData">
                            <p>Room no</p>
                        </div>
                        <div className="StudentData">
                            <p>Hostel Name</p>
                        </div>
                        <div className="StudentData">
                            <p>Email</p>
                        </div>
                    </div>
                    <div className="Data">
                        <div className="StudentData">
                            <p>Father's Name</p>
                        </div>
                        <div className="StudentData">
                            <p>Mother's Name</p>
                        </div>
                        <div className="StudentData">
                            <p>Gender</p>
                        </div>
                        <div className="StudentData">
                            <p>Date of Birth</p>
                        </div>
                        <div className="StudentData">
                            <p>Aadhar No</p>
                        </div>
                        <div className="StudentData">
                            <p>Father's Mobile No</p>
                        </div>
                        <div className="StudentData">
                            <p>Mother's Mobile No</p>
                        </div>
                        <div className="StudentData">
                            <p>Address</p>
                        </div>
                        <div className="StudentData">
                            <p>Category</p>
                        </div>
                        <div className="StudentData">
                            <p>Religion</p>
                        </div>
                    </div>
                </div>
                <div className="logout">
                    <a href="/">Log Out</a>
                </div>
            </div>
        </>
    )
}

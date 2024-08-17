import React from 'react'
import '../../CssFile/AdminHome.css'
export default function AdminHome() {
  return (
    <>
        <div className="studentPresent">
            <div className="student">
                <p><strong>Total Students</strong></p>
                <p>34</p>
            </div>
            <div className="student">
            <p><strong>Student Present</strong></p>
            <p>34</p>
            </div>
            <div className="student">
            <p><strong>Student on Leave</strong></p>
            <p>34</p>
            </div>
            <div className="student">
            <p><strong>Absent Student</strong></p>
            <p>34</p>
            </div>
        </div>
    </>
  )
}

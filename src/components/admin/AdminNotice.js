import React from 'react'
import Notice from '../Notice'

export default function AdminNotice() {
    return (
        <>
            <div className='container' style={{ maxWidth: '20rem', backgroundColor: '#BFC8AD', padding: '2rem', borderRadius: '1rem', boxShadow: ' 0.5rem 0.5rem 1.3rem black', border: '1px solid #90B494',marginTop:'3rem' }}>
                <div class="mb-3" >
                    <label htmlFor="exampleFormControlInput1" class="form-label">Notice Title</label>
                    <input type="text" class="form-control" style={{ backgroundColor: '#DBCFB0', border: '1px solid #545775' }} id="exampleFormControlInput1" placeholder="Title" />
                </div>
                <div class="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" class="form-label">Notice Content</label>
                    <textarea style={{ backgroundColor: '#DBCFB0', border: '1px solid #545775' }} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className='mb-3'>
                <input type="file" id="myFile" name="filename"/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type="submit" className="btn" style={{ backgroundColor: '#90B494', boxShadow: '0 0 0.3rem black', color: 'black', borderRadius: '1rem', minWidth: '10rem' }}>Send</button>
                </div>
            </div>
            <Notice/>

        </>
    )
}

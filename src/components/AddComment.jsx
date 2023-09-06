import React from 'react'

const AddComment = () => {
  return (
    <div className='comment-container'>
        <p>Add comment:</p>
        <form>
            <label className="input-comment" htmlFor="">
            <span>Item name:</span>
            <textarea className="comment" rows={4} id="input-comment" name="input-comment"></textarea>
            </label>
            <div><button>Submit</button><button type='reset'>Submit</button></div>
            
        </form>
    </div>
  )
}

export default AddComment
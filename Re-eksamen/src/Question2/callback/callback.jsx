import './callback.css';

const ProfileForm = ({ userProfile, updateProfile }) => {

    const handleSubmit = (event) => {
        event.preventDefault(); 
        alert(JSON.stringify(userProfile)); 

    return (
      <div className='form-container'>
        <h2>Profile Form</h2>
        <p>Demonstration callback function upon input</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name: </label>
            <input type="text" name="name" value={userProfile.name} onChange={updateProfile} />
          </div>
          <div className="input-group">
            <label>Age: </label>
            <input type="number" name="age" value={userProfile.age} onChange={updateProfile} />
          </div>
          <div className="input-group">
            <label>Email: </label>
            <input type="email" name="email" value={userProfile.email} onChange={updateProfile} />
          </div>
          <div className="input-group">
            <label>Bio: </label>
            <textarea name="bio" value={userProfile.bio} onChange={updateProfile} />
          </div>
          <div className="input-group">
            <label>Married: </label>
            <input type="checkbox" name="married" checked={userProfile.married} onChange={updateProfile} />
          </div>
          <div className='button-container'>
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>
    );
};

export default ProfileForm;

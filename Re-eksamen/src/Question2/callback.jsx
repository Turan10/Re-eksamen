import './callback.css';

const ProfileForm = ({ userProfile, updateProfile }) => {
    return (
      <div className='form-container'>
        <h2>Profile Form</h2>
        <form>
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
        </form>
        <div className='button-container'>
        <button className = "btn" onClick={() => alert(JSON.stringify(userProfile))}>Submit</button>
        </div>
      </div>
    );
  };
  
  export default ProfileForm;
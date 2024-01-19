import React, { useState } from 'react';
import './promise.css';

function PhotoFetcher() {
    const [photoUrl, setPhotoUrl] = useState(null);

    const fetchRandomPhoto = async () => {
       
        const randomId = Math.floor(Math.random() * 1000); 
        try {
            
            const response = await fetch(`https://picsum.photos/id/${randomId}/200/300`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            setPhotoUrl(response.url);
        } catch (error) {
            console.error('Error fetching photo: ', error);
        }
    };

    return (
        <div className="photo-fetcher">
            <button onClick={fetchRandomPhoto}>Fetch Random Photo</button>
            {photoUrl && <img src={photoUrl} alt="Random" />}
        </div>
    );
}

export default PhotoFetcher;

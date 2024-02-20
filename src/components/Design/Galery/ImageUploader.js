import React, { useState } from 'react';
import styled from "@emotion/styled";
import { colors } from "../../../styles/colors";
import { PiUpload } from "react-icons/pi";
import { UploadButton } from './styles';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
     <label htmlFor='upload-input'
       style={{ cursor: 'pointer',
                backgroundColor: colors.cell,
                color: 'black',
                height: 50,
                width: 180,
                borderRadius: 30,
                border: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 10,
                
    }}>
            <PiUpload size={30}/>
            <input 
                id="upload-input" 
                type="file" 
                accept='image/*'
                style={{ display: 'none', }}
                onChange={handleImageChange}/>
        Subir imagen        
     </label>

      {image && (
        <div>
         
          <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;

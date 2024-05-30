import { ChangeEvent } from "react"

interface IImageUpload {
  setImage: Function  
}

export const ImageUpload = ({setImage} : IImageUpload) => {
  const ImageUploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImage(reader.result);
    }
  };

  return (
    <div className="imageUpload">
      <label className="configLabel">
        Image Upload:
        <input 
          type="file" 
          accept="image/*" 
          className="fileInput"
          onChange={ImageUploadHandler}
        />
      </label>      
    </div>
  )
}

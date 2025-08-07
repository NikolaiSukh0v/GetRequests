import './UploaderStyles/index.scss'
import { useRef } from 'react';
export default function Uploader({ onChangeValue, error, fileName }) {
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onChangeValue(file);
        }
    };

    return (
        <div className="inputUploaderContainer">
            <div
                className="inputUploader"
                onClick={handleUploadClick}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>
            <div className="fileName">
                {fileName}
            </div>
            {error && <div className="InputErrorMessage">{error}</div>}
        </div>
    );
}
import React, { useState, ChangeEvent, FormEvent } from 'react';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface FormData {
  timestamp: string;
  header: string;
  content: string;
}

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    timestamp: new Date().toISOString(),
    header: '',
    content: '',
  });

  const handleHeaderChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      header: event.target.value,
    });
  };

  const handleContentChange = (value: string) => {
    setFormData({
      ...formData,
      content: value,
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="header">Header:</label>
        <input
          type="text"
          id="header"
          value={formData.header}
          onChange={handleHeaderChange}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        {typeof window !== 'undefined' && <ReactQuill
          value={formData.content}
          onChange={handleContentChange}
        />}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MyForm;

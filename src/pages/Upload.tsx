import React, { useCallback, useState } from 'react';
import { Container, Typography, Box, Paper, Button, Alert } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png'],
      'video/*': ['.mp4', '.mov', '.avi']
    },
    multiple: true
  });

  const handleUpload = async () => {
    try {
      // Here you would implement the actual file upload logic
      // For now, we'll just simulate a successful upload
      await new Promise(resolve => setTimeout(resolve, 1000));
      setUploadStatus('success');
      setFiles([]);
    } catch (error) {
      setUploadStatus('error');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Upload Walkthrough
      </Typography>
      
      <Paper
        {...getRootProps()}
        sx={{
          p: 3,
          mt: 2,
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: isDragActive ? 'action.hover' : 'background.paper',
          border: '2px dashed',
          borderColor: isDragActive ? 'primary.main' : 'divider'
        }}
      >
        <input {...getInputProps()} />
        <CloudUploadIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
        <Typography variant="h6" gutterBottom>
          {isDragActive
            ? 'Drop the files here'
            : 'Drag and drop files here, or click to select files'}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Supported formats: JPG, PNG, MP4, MOV, AVI
        </Typography>
      </Paper>

      {files.length > 0 && (
        <Box sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Selected Files:
          </Typography>
          {files.map((file, index) => (
            <Typography key={index} variant="body2">
              {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
            </Typography>
          ))}
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
            sx={{ mt: 2 }}
          >
            Upload Files
          </Button>
        </Box>
      )}

      {uploadStatus === 'success' && (
        <Alert severity="success" sx={{ mt: 2 }}>
          Files uploaded successfully!
        </Alert>
      )}

      {uploadStatus === 'error' && (
        <Alert severity="error" sx={{ mt: 2 }}>
          Error uploading files. Please try again.
        </Alert>
      )}
    </Container>
  );
};

export default Upload; 
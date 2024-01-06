
document.addEventListener('DOMContentLoaded', function () {

  const fileDropArea = document.getElementById('fileDropArea');
  fileDropArea.addEventListener('drop', handleDrop);
  fileDropArea.addEventListener('dragover', handleDragOver);
  fileDropArea.addEventListener('click', openFileExplorer);
});



function handleDrop(event) {
    event.preventDefault();
    const files = event.dataTransfer.files;

    if (files.length > 0) {
      handleFiles(files);
    }
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleFiles(files) {
    const fileDropArea = document.getElementById('fileDropArea');
    const filenameDisplay = document.getElementById('filename');

    // Assuming you want to handle only the first file if multiple files are dropped
    const file = files[0];

    // Display the filename
    filenameDisplay.textContent = `${file.name}`;

    // You can use the 'file' variable to upload the file or perform other operations
    // For example, you can use the Fetch API to upload the file to a server:
    // fetch('/upload', { method: 'POST', body: file });
  }

  function openFileExplorer() {
    // Create an input element
    const input = document.createElement('input');
    input.type = 'file';
    input.style.display = 'none';

    // Append the input element to the body
    document.body.appendChild(input);

    // Trigger a click event on the input element
    input.click();

    // Remove the input element from the DOM
    document.body.removeChild(input);

    // Attach an event listener to handle the selected files
    input.addEventListener('change', function() {
      handleFiles(this.files);
    });
  }


  
  let isFileInfoVisible = true;

  function toggleFileVisibility() {
    const filenameDisplay = document.getElementById('filename');
    const button = document.querySelector('.button');
  
    // Toggle visibility
    isFileInfoVisible = !isFileInfoVisible;
  
    if (isFileInfoVisible) {
      // Display the filename
      fileDetailsDisplay.textContent = `File Name: ${file.name}, Size: ${formatFileSize(file.size)}`;
    } else {
      // Hide the filename
      filenameDisplay.textContent = '';
    }
  
    function formatFileSize(bytes) {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      if (bytes === 0) return '0 Byte';
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
      return Math.round(100 * (bytes / Math.pow(1024, i))) / 100 + ' ' + sizes[i];
    }
  }

  function getFileName() {
    // Implement your logic to get the file name here
    // For now, returning a placeholder string
    return 'ExampleFile.txt';
  }
  

  

let currentFile = null; // To keep track of the current file

document.addEventListener('DOMContentLoaded', function () {
  const fileDropArea = document.getElementById('fileDropArea');
  fileDropArea.addEventListener('drop', handleDrop);
  fileDropArea.addEventListener('dragover', handleDragOver);
  fileDropArea.addEventListener('click', openFileExplorer);

  // Add event listeners for buttons
  document.querySelector('.change_file').addEventListener('click', openFileExplorer);
  document.querySelector('.delete_file').addEventListener('click', deleteCurrentFile);
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
  const file = files[0];

  // Display the filename
  const filenameDisplay = document.getElementById('filename');
  filenameDisplay.textContent = ` ${file.name}, ${formatFileSize(file.size)}`;

  // Hide the file drop area
  const fileDropArea = document.getElementById('fileDropArea');
  fileDropArea.style.display = 'none';

  // Store the current file
  currentFile = file;

  // Display the image in the canvas
  displayImage(file);
}

function openFileExplorer() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*'; // Accept only image files
  input.style.display = 'none';

  document.body.appendChild(input);

  input.click();

  document.body.removeChild(input);

  input.addEventListener('change', function() {
    handleFiles(this.files);
  });
}

function displayImage(file) {
  const canvas = document.getElementById('canvasImage');
  const ctx = canvas.getContext('2d');

  const reader = new FileReader();

  reader.onload = function (e) {
    const img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0, img.width, img.height);
    };
    img.src = e.target.result;
  };

  reader.readAsDataURL(file);
}

function formatFileSize(bytes) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(100 * (bytes / Math.pow(1024, i))) / 100 + ' ' + sizes[i];
}

function deleteCurrentFile() {
  // Clear the current file
  currentFile = null;

  // Show the file drop area
  const fileDropArea = document.getElementById('fileDropArea');
  fileDropArea.style.display = 'block';

  // Clear the filename display
  const filenameDisplay = document.getElementById('filename');
  filenameDisplay.textContent = '';

  // Clear the canvas
  const canvas = document.getElementById('canvasImage');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

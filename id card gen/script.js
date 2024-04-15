function generateCard() {
    var photoPreview = document.getElementById('photo-preview');
    var namePreview = document.getElementById('name-preview');
    var collegeNamePreview = document.getElementById('college-name-preview');
    var locationPreview = document.getElementById('location-id-preview');
  
    var name = document.getElementById('name').value;
    var collegeName = document.getElementById('college-name').value;
    var location = document.getElementById('location-id').value;
    var photo = document.getElementById('photo').files[0];
  
    if (name && collegeName && location && photo) {
      photoPreview.src = URL.createObjectURL(photo);
      namePreview.textContent = `Name: ${name}`;
      collegeNamePreview.textContent = `College: ${collegeName}`;
      locationPreview.textContent = `Location: ${location}`;
    } else {
      alert('Please fill in all the fields.');
    }
  }
  
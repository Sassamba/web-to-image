document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('captureBtn').addEventListener('click', function() {

      var body = document.body;
      var canvas = document.createElement('canvas');
  
      canvas.width = body.scrollWidth;
      canvas.height = body.scrollHeight;
      
      var context = canvas.getContext('2d');
      var img = new Image();
      
      img.src = 'data:image/svg+xml;base64,' + btoa(new XMLSerializer().serializeToString(body));
      console.log("#1")
        
      img.onload = function() {
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
  
        var imageData = canvas.toDataURL('image/png');
  
        var downloadLink = document.createElement('a');
        downloadLink.href = imageData;
        downloadLink.download = 'captured_image.png';
  
        document.body.appendChild(downloadLink);
        downloadLink.click();
        
        document.body.removeChild(downloadLink);
          console.log("#2")

      };
      img.onload();
      console.log("#3")
    });
  });
  

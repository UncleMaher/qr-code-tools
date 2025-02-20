document.addEventListener("DOMContentLoaded", function() {
    const uploadArea = document.getElementById('uploadArea');
    const fileInput = document.getElementById('fileInput');
    const decodeButton = document.getElementById('decodeButton');
    const clearButton = document.getElementById('clearButton');
    const copyButton = document.getElementById('copyButton');
    const resultDiv = document.getElementById('result');
    const qrCodeLabel = document.getElementById('qrCodeLabel');
    const tooltip = document.getElementById('tooltip');
    const uploadMessage = '<p> <i class="fa-solid fa-qrcode fa-flip"></i> Select a file, <br> drag & drop <br> or paste (Ctrl+V) <br>to decode</p>';

    let selectedImage = null;
    let qrResult = '';
    tooltip.style.opacity = '0';
    tooltip.style.visibility = 'hidden';
    decodeButton.disabled = true;
    clearButton.disabled = true;
    uploadArea.innerHTML = uploadMessage;
    copyButton.textContent = "Copy";

    // Attach event listeners
    document.addEventListener('paste', handlePaste);
    uploadArea.addEventListener('dragover', handleDragOver);
    uploadArea.addEventListener('drop', handleDrop);
    uploadArea.addEventListener('click', triggerFileInput);
    fileInput.addEventListener('change', handleFileUpload);
    decodeButton.addEventListener('click', handleUpload);
    decodeButton.addEventListener('mouseenter', () => showTooltip(decodeButton));
    decodeButton.addEventListener('mouseleave', hideTooltip);
    clearButton.addEventListener('click', clearUpload);

    // Event Handlers
    function triggerFileInput() {
        fileInput.click();
    }

    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            processFile(file);
        }
    }

    function handlePaste(event) {
        const clipboardData = event.clipboardData.items;
        for (let i = 0; i < clipboardData.length; i++) {
            const item = clipboardData[i];
            if (item.type.startsWith('image')) {
                const file = item.getAsFile();
                processFile(file);
                break;
            }
        }
    }

    function handleDragOver(event) {
        event.preventDefault();
    }

    function handleDrop(event) {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file) {
            processFile(file);
        }
    }

    function processFile(file) {
        qrCodeLabel.style.display = 'none';
        resultDiv.style.display = 'none';
        copyButton.style.display = 'none';
        resultDiv.textContent = '';

        const reader = new FileReader();
        reader.onload = function(e) {
            selectedImage = new Image();
            selectedImage.src = e.target.result;
            displayImagePreview(selectedImage);
            decodeButton.disabled = false;
            clearButton.disabled = false;
            tooltip.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }

    function displayImagePreview(img) {
        uploadArea.innerHTML = `<img src="${img.src}" alt="Selected Image" />`;
    }

    function handleUpload() {
        if (selectedImage) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = selectedImage.width;
            canvas.height = selectedImage.height;
            ctx.drawImage(selectedImage, 0, 0, canvas.width, canvas.height);
    
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const qrCodeData = jsQR(imageData.data, canvas.width, canvas.height);
    
            // Define URL regex to test if qrResult is a URL
            const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
    
            if (qrCodeData) {
                qrResult = qrCodeData.data;
                qrCodeLabel.style.display = 'block';
                resultDiv.style.display = 'block';
                resultDiv.innerHTML = urlRegex.test(qrResult) ? `<a href="${qrResult}" target="_blank">${qrResult}</a>` : qrResult;
                copyButton.style.display = 'inline-block';
            } else {
                resultDiv.textContent = 'No QR code detected.';
                copyButton.style.display = 'none';
                qrCodeLabel.style.display = 'none';
                resultDiv.style.display = 'none';
            }
        }
    }

    function clearUpload() {
        fileInput.value = '';
        uploadArea.innerHTML = uploadMessage;
        resultDiv.style.display = 'none';
        qrCodeLabel.style.display = 'none';
        resultDiv.textContent = '';
        copyButton.style.display = 'none';
        copyButton.textContent = 'Copy';
        selectedImage = null;
        qrResult = '';
        tooltip.style.display = 'none';
        decodeButton.disabled = true;
        clearButton.disabled = true;
    }

    copyButton.addEventListener('click', function() {
        if (qrResult) {
            navigator.clipboard.writeText(qrResult).then(function() {
                copyButton.textContent = 'Copied!';
                setTimeout(function() {
                    copyButton.textContent = 'Copy';
                }, 1000);

                resultDiv.classList.add('copied-effect');
                setTimeout(function() {
                    resultDiv.classList.remove('copied-effect');
                }, 1000);
            }).catch(function(err) {
                console.error("Error copying text: ", err);
            });
        }
    });

    function showTooltip() {
        if (decodeButton.disabled) {
            tooltip.style.opacity = '1';
            tooltip.style.visibility = 'visible';
        }
    }
    
    function hideTooltip() {
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
    }
});

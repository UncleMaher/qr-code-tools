# QR Code tools

  

  
This project aims to provide easy-to-use tools for handling QR codes with privacy in mind. The first page, *Decoder*, allows you to upload or drag-and-drop an image containing a QR code, and it will decode the data directly in your browser. No data is uploaded to any server! This is just the beginning, with more pages and solutions to come.
  

  

## Features

  

  

- **Simple QR Code Decoding**: Upload an image containing a QR code, and the application will decode it and display the content (URL or text).

  

- **Drag & Drop or File Upload**: You can easily upload a QR code image via drag-and-drop or by selecting a file.

  

- **Copy Functionality**: Once decoded, you can copy the result directly from the page.

  

- **Privacy First**: All scanning is done locally in the browser—nothing gets sent to a server. The image is processed directly on your device, ensuring your data stays private.

  

  

## How to Use It

  

  

You have three options to use this QR Code Decoder tool:

  

  

1. **Live Demo**:  

  

   You can check out the live demo by visiting the GitHub Pages of this repository:  

  

   [Live Demo](https://unclemaher.github.io/qr-code-tools/)

  

  

2. **Download and Run Locally**:  

  

   If you'd like to run it locally and use it offline, you can follow these steps:

  

   - Download the repository as a ZIP file from the [GitHub repo](https://github.com/unclemaher/qr-code-tools).

  

   - Unzip the file to a folder on your computer.

  

   - Open `index.html` with your browser of choice.

  

3. **Use it offline completly**

  

  

    -   To make sure everything works offline, you’ll need to download the required assets in a new directory call/assets:

  

  

        - **Fonts:**

  

            - Download the font from [Google Fonts - Sriracha](https://fonts.google.com/specimen/Sriracha) & [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto) and save the files in the `/fonts` directory.

  

  

        - **JavaScript:**

  

            - Download `jsQR.js` from [jsQR GitHub](https://github.com/cozmo/jsQR) and save it in the `/js` directory.

  

  

        - **Modify the script tag in *index.html* to load the file locally instead of from the internet by replacing the following:

  

```
<script src="https://cdn.jsdelivr.net/gh/cozmo/jsQR@master/dist/jsQR.js"></script>
```

  

        by:

```
<script src="js/jsQR.js"></script>
```

    After placing the files in their respective folders and modifying the *index.html*, you can use the tool offline without needing an internet connection.

   

## 📝 Task List

  

  

###  QR Code Decoder page

  

  

- [x] Set up basic HTML structure.

  

- [x] Create a clean and simple design using CSS.

  

- [x] Create main.js file

  

- [x] Implement QR code scanning functionality using **jsQR.js**.

  

- [x] Handle user interactions: file upload, drag-and-drop, and paste events.

  

- [x] Display decoded QR data with an option to copy it.

  

- [x] Ensure everything runs **entirely in the browser** — no data is uploaded anywhere!

  

- [x] Fav icon

  

- [x] Add more styling and improve user experience.

  

- [ ] Test for mobile responsiveness.

  

- [ ] Final cleanup and testing for edge cases.

  

- [x] Guide to use it Offline

  

  

###  QR Code scanner page

  

- [ ] TBD

  

  

###  QR Code generator page

  

- [ ] TBD

  

  

---

  

  

## 💡 Privacy Notice

  

  

The **QR Code tools repo** was designed with privacy in mind. **All QR code scanning and decoding is done locally in your browser**. This means **no data or images are sent to a server** at any point during the process. The entire process happens on your device, ensuring your privacy is respected.

  

  

## 📄 License

  

  

This project is licensed under the GPL 3.0 License.

  

  

## Credits

  

  

- **jsQR.js**: The QR decoding library used in this project. Huge thanks to the contributors behind it! (Check it out on GitHub: [jsQR.js](https://github.com/cozmo/jsQR))

  

  

Feel free to contribute, report bugs, or open issues if you have any suggestions for improvements!
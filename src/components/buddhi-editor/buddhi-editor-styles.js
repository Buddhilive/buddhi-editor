const $_styleContainer = document.createElement('style');

$_styleContainer.innerHTML = `

body {
    font-family: sans-serif;
    margin: 0;
}
  
  buddhi-editor button {
      background: #ccc;
      border: none;
      padding: 0.2rem;
      border-radius: 5px;
      cursor: pointer;
  }

  buddhi-editor button:hover {
    background: #039be5;
  }

  buddhi-editor .tool--on {
    background: #039be5;
  }

  .material-icons {
      font-size: 18px;
  }

  .buddhi--editor {
    border: 1px solid #039be5;
    margin-top: 13px;
    border-radius: 5px;
    padding: 12px;
    height: 70vh;
    overflow-y: scroll;
    overflow-x: hidden;
    overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}

.buddhi--editor:focus {
    outline: none;
}

.buddhi--editor img {
    display: block;
    margin: auto;
    width: 50%;
    height: auto;
}

.buddhi--editor-tools {
    padding: 5px 5px 5px 5px;
    border: 2px solid #dfdfdf;
    border-radius: 5px;
    background: #dfdfdf;
}

.buddhi--toolbar-seperator {
    border-right: 1px solid #444;
    margin-right: 4px;
    margin-left: 4px;
    padding-top: 1rem;
    display: inline-flex;
}

.buddhi--toolbar-label {
    background: #dfdfdf;
}

.buddhi--toolbar-label:hover {
    background: #dfdfdf;
}

.buddhi--post-title-input {
    border: 3px solid #dfdfdf;
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 12px;
    width: 98.5%;
    height: 1rem;
}

.buddhi--post-title-input:focus {
    outline:none;
}

.buddhi--image-uploader-overlay{
    cursor:pointer;
    display:none;
    height:100%;
    position:fixed;
    text-align:center;
    top:0;
    width:100%;
    z-index:10000;
}

.buddhi--image-uploader-popup {
    background: #e5e5e5;
    width: 60%;
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    padding: 1rem;
    border-radius: 10px;
}

.buddhi--image-uploader-preview {
    display: block;
    margin: 12px auto;
}

.buddhi--upload-file {
    display: block;
    margin: 10px auto;
}

#buddhi--cancel-btn a {
    background: #dfdfdf;
    color: #000;
}

vaadin-button {
    cursor: pointer;
}

`;

document.head.appendChild($_styleContainer);
import { LitElement, html, css } from "lit-element";
import { buddhiDummyImage } from "./buddhi-dummy-image";
import '@vaadin/vaadin-button';

class buddhiEditor extends LitElement {

    static get properties() {
        return {
            buddhidummyImg: String
        }
    }

    /* static get styles() {
        return bleditor_style;
    } */

    constructor() {
        super();

        this.buddhidummyImg = buddhiDummyImage;

    }

    render() {
        return html `
        <div class="buddhi--post-title">
            <input type="text" class="buddhi--post-title-input" placeholder="Post Title">
        <div>
        <div class="buddhi--editor-tools">
        <button class="material-icons buddhi--bold-button" @click="${this.formatBold}">format_bold</button>
        <button class="material-icons buddhi--italic-button" @click="${this.formatItalic}">format_italic</button>
        <button class="material-icons buddhi--underline-button" @click="${this.formatUnderline}">format_underline</button>
        <button class="material-icons buddhi--strikethrough-button" @click="${this.formatStrikethrough}">strikethrough_s</button>
        <button class="material-icons buddhi--align-left-button" @click="${this.formatAlignLeft}">format_align_left</button>
        <button class="material-icons buddhi--align-right-button" @click="${this.formatAlignRight}">format_align_right</button>
        <button class="material-icons buddhi--align-center-button" @click="${this.formatAlignCenter}">format_align_center</button>
        <button class="material-icons buddhi--align-justify-button" @click="${this.formatAlignJustify}">format_align_justify</button>
        <button class="material-icons buddhi--list-bullet-button" @click="${this.formatListBullet}">format_list_bulleted</button>
        <button class="material-icons buddhi--list-number-button" @click="${this.formatListNumber}">format_list_numbered</button>
        <span class="buddhi--toolbar-seperator"></span>
        <button class="material-icons buddhi--toolbar-label">title</button>
        <button class="material-icons buddhi--title-button" @click="${(e) => this.formatTitle(1)}">filter_1</button>
        <button class="material-icons buddhi--title-button" @click="${(e) => this.formatTitle(2)}">filter_2</button>
        <button class="material-icons buddhi--title-button" @click="${(e) => this.formatTitle(3)}">filter_3</button>
        <button class="material-icons buddhi--title-button" @click="${(e) => this.formatTitle(4)}">filter_4</button>
        <button class="material-icons buddhi--title-button" @click="${(e) => this.formatTitle(5)}">filter_5</button>
        <button class="material-icons buddhi--title-button" @click="${(e) => this.formatTitle(6)}">filter_6</button> 
        <span class="buddhi--toolbar-seperator"></span>
        <button class="material-icons buddhi--insert-link-button" @click="${this.insertLink}">insert_link</button>
        <button class="material-icons buddhi--insert-photo-button" @click="${this.insertPhotoFromURL}">insert_photo</button>

    </div>
    <div class="center">
        <div class="buddhi--editor" contenteditable>
        </div>
    </div>
    <div class="buddhi--image-uploader-overlay">
        <div class="buddhi--image-uploader-popup">
            <input id="buddhi--upload-file" type="file"><br>
            <img class="buddhi--image-uploader-preview" src="${this.buddhidummyImg}" height="200" alt="Image preview...">
            <vaadin-button theme="primary" id="buddhi--insert-file"><span>Insert Image</span></vaadin-button>
            <vaadin-button id="buddhi--cancel-btn">Cancel</vaadin-button>
        </div>
    </div>
        `;
    }

    formatBold() {
        document.querySelector('.buddhi--bold-button').blur();
        document.execCommand('bold', false, '');
    }

    formatItalic() {
        document.querySelector('.buddhi--italic-button').blur();
        document.execCommand('italic', false, '');
    }

    formatUnderline() {
        document.querySelector('.buddhi--underline-button').blur();
        document.execCommand('underline', false, '');
    }

    formatStrikethrough() {
        document.querySelector('.buddhi--strikethrough-button').blur();
        document.execCommand('strikethrough', false, '');
    }

    formatAlignLeft() {
        document.querySelector('.buddhi--align-left-button').blur();
        document.execCommand('justifyLeft', false, '');
    }

    formatAlignRight() {
        document.querySelector('.buddhi--align-right-button').blur();
        document.execCommand('justifyRight', false, '');
    }

    formatAlignCenter() {
        document.querySelector('.buddhi--align-center-button').blur();
        document.execCommand('justifyCenter', false, '');
    }

    formatAlignJustify() {
        document.querySelector('.buddhi--align-justify-button').blur();
        document.execCommand('justifyFull', false, '');
    }

    formatListBullet() {
        document.querySelector('.buddhi--list-bullet-button').blur();
        document.execCommand('insertUnorderedList', false, '');
    }

    formatListNumber() {
        document.querySelector('.buddhi--list-number-button').blur();
        document.execCommand('insertOrderedList', false, '');
    }

    formatTitle(heading) {
        document.querySelector('.buddhi--title-button').blur();
        document.execCommand('formatBlock', false, '<h' + heading + '>');
    }

    insertLink() {
        document.querySelector('.buddhi--insert-link-button').blur();
        var url = prompt("Enter the URL");
        document.execCommand("createLink", false, url);
    }

    insertPhotoFromURL() {
        const imageUploadWindow = this.querySelector('.buddhi--image-uploader-overlay');
        const imageUploadBtn = imageUploadWindow.querySelector('#buddhi--upload-file');
        const imageInsertBtn = imageUploadWindow.querySelector('#buddhi--insert-file');
        const cancelBtn = imageUploadWindow.querySelector('#buddhi--cancel-btn');
        const previewImg = imageUploadWindow.querySelector('img');
        let imageBlobUrl = "";

        imageUploadWindow.style.display = 'block';

        imageUploadBtn.onchange = () => {
            var oploadedFile = imageUploadWindow.querySelector('input[type=file]').files[0];
            var readerFile = new FileReader();

            readerFile.addEventListener("load", function() {
                imageBlobUrl = readerFile.result;
                previewImg.src = imageBlobUrl;
            }, false);

            if (oploadedFile) {
                readerFile.readAsDataURL(oploadedFile);
            }
        }

        imageInsertBtn.onclick = () => {
            this.editorFocus(this.querySelector('.buddhi--editor'));
            document.execCommand("insertImage", false, imageBlobUrl);
            imageUploadWindow.style.display = 'none';
            previewImg.src = this.bldummyImg;
        }

        cancelBtn.onclick = () => {
            imageUploadWindow.style.display = 'none';
            this.editorFocus(this.querySelector('.buddhi--editor'));
            previewImg.src = this.bldummyImg;
        }

        /*  */
    }

    getEditorData() {
        const postTitle = this.querySelector('.buddhi--post-title-input').value;
        const postContent = this.querySelector('.buddhi--editor').innerHTML;
        const postData = {
            title: postTitle,
            content: postContent
        }
        return postData;
        //console.log(postData);
    }

    setEditorData(loadTitle, loadContent) {
        this.querySelector('.buddhi--post-title-input').value = loadTitle;
        this.querySelector('.buddhi--editor').innerHTML = loadContent;
        this.editorFocus(this.querySelector('.buddhi--editor'));
    }

    editorFocus(el) {
        el.focus();
        if (typeof window.getSelection != "undefined" &&
            typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    }

    createRenderRoot() {
        return this;
    }
}

customElements.define('buddhi-editor', buddhiEditor);
import { Component, OnInit } from '@angular/core';
import { AzureFaceApiDataService } from '../services/azure-face-api-data.service';

@Component({
  selector: 'app-detect',
  templateUrl: './detect.component.html',
  styleUrls: ['./detect.component.scss']
})
export class DetectComponent implements OnInit {

  nbFaces = 0;
  uploadedFile: File = null;
  faceApiResponse: any;
  url: any;
  width: number;
  height: number;

  constructor(private data: AzureFaceApiDataService) { }

  ngOnInit(): void {
  }

  /**
   * Handles the file input event.           
   * @param {Event} event - the event that triggered this function.           
   * @returns None           
   */
  handleFileInput(event) {

    this.nbFaces = 0;
    this.uploadedFile = event.target.files[0];

    this.data.detectFace_File(this.uploadedFile).subscribe(data => {
      /**
       * Takes in a face api response and stores it in the state.           
       * @param {object} data - the face api response object.           
       * @returns None           
       */
      this.faceApiResponse = { ...data };
    },
      /**
       * Takes in an error and logs it to the console.       
       * @param {Error} error - the error to log       
       * @returns None       
       */
      error => console.log(error));
    this.getPreview(this.uploadedFile);
  }

  /**
   * Takes in a file and returns the URL of the file.           
   * @param {File} file - the file to get the URL of.           
   * @returns None           
   */
  getPreview(file: File) {
    var reader = new FileReader();

    /**
     * Reads the file as a data URL and calls the callback with the data URL.           
     * @param {File} file - the file to read.           
     * @returns None           
     */
    reader.readAsDataURL(file);

    reader.onload = (event) => {
      this.url = (<FileReader>event.target).result;
    }
  }


  /**
   * Gets the height of the image.           
   * @returns {number} The height of the image.           
   */
  getHeight() {
    var image = document.getElementById('pic') as HTMLImageElement; //this will get the actual dimensions of the visible image
    this.height = image.naturalHeight;
    return this.height;
  }

  /**
   * Get the width of the image.           
   * @returns {number} The width of the image.           
   */
  getWidth() {
    var image = document.getElementById('pic') as HTMLImageElement;//Get the image element from the page.
    /**
     * Sets the width of the image to the natural width of the image.           
     * @param {HTMLImageElement} image - the image to set the width of.           
     * @returns None           
     */
    this.width = image.naturalWidth;
    return this.width;
  }

}

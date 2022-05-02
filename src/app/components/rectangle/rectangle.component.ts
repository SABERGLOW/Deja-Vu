import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

/**
 * DISCLAIMER          
 * 
 * This class and its functions are referenced from an multiple Azure tutorials and guides on FACE API implementation
 * 
 * For more details, kindly check here: https://social.technet.microsoft.com/wiki/contents/articles/37893.c-face-detection-and-recognition-with-azure-face-api.aspx
 * 
 * and here: https://gunnarpeipman.com/azure-face-detection/
 * 
 * I take no credit for the implementation methods used in this file, except my own functions.          
 */

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.scss']
})
export class RectangleComponent implements OnInit {

  totalFaces = 0;
  /**
   * Creates a new rectangle with all values set to 0.       
   * @returns {number[][]} - A new rectangle with all values set to 0.       
   */
  rectangle = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];

  /**
   * Takes in a face api response and returns the face bounding box.       
   * @param {any} faceApiResponse - the face api response object       
   * @param {any} width - the width of the image       
   * @param {any} height - the height of the image       
   * @returns {any} the face bounding box       
   */
  @Input() faceApiResponse: any;
  @Input() width: any;
  @Input() height: any;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Gets the rectangle of the face. max 4 for now          
   * @returns None           
   */
  drawRectangle() {
    this.totalFaces = 0;
    for (var i = 0; i < 4; i++) {
      if (this.faceApiResponse[i]) {
        this.totalFaces++;
        let resources = this.faceApiResponse[i];
        let resource = resources["faceRectangle"];
        this.rectangle[i] =
          [
            resource["top"],
            resource["left"],
            resource["width"],
            resource["height"]
          ];
      }
    }
    /**
     * Applies the rectangle filter to the page.       
     * @returns None       
     */
    this.styleRectangle();
    /**
     * Returns a string that describes the number of faces detected.       
     * @returns {string} - A string that describes the number of faces detected.       
     */
    if (this.totalFaces == 1) {
      return this.totalFaces + " face detected...";
    }
    return this.totalFaces + " faces detected";
  }



  /**
   * Applies the rectangle to the page.           
   * @returns None           
   */
  styleRectangle() {
    /**
     * Updates the position of the faces on the screen.           
     * @returns None           
     */
    for (var i = 0; i <= this.totalFaces; i++) {
      let element = document.getElementById((i + 1).toString());
      let factor_height = this.height / 400;
      let factor_width = this.width / 400;
      if (element) {
        element.style.display = "block";
        element.style.top = (this.rectangle[i][0] / factor_height) + "px";
        element.style.left = (this.rectangle[i][1] / factor_width) + "px";
        element.style.width = (this.rectangle[i][2] / factor_width) + "px";
        element.style.height = (this.rectangle[i][3] / factor_height) + "px";
      }
    }

    /**
     * Hides all the faces of the face-swapping avatar.           
     * @returns None           
     */
    for (var j = this.totalFaces + 1; j <= 4; j++) {
      let element2 = document.getElementById(j.toString());
      /**
       * Hides the element if it exists.       
       * @param {HTMLElement | null} element - the element to hide.       
       * @returns None       
       */
      if (element2 != null) {
        element2.style.display = "none";
      }
    }
  }

}

/**
 * Some details on the implementation here
 * 
 * So, the "faceApiResponse" that we get back from Azure's FACE API, contains multiple face attributes.
 * 
 * the first attribute is "faceRectangle", and it looks something like this:
 * 
 * "faceRectangle": {
 *      "top": 131,
 *      "left": 177,
 *      "width": 162,
 *      "height": 162
 *    },
 * 
 * we take a rectangle var array, and push these faceRectangle attributes in it, and then call "styleRectangle()" on it.
 * 
 * for each face detected (max 4), we should apply 4 rectanlges, but since I want to keep it simple, I'm only drawing 1 rectangle and showing 1 table as a result only.        
 * @returns None           
 */
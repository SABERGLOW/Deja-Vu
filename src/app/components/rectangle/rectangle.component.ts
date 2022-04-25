import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

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
   * Gets the rectangle of the face.           
   * @returns None           
   */
  getRectangle() {
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
    this.applyRectangle();
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
  applyRectangle() {
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
      if (element2 != null) {
        element2.style.display = "none";
      }
    }
  }

}

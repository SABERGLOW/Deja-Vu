import { Component, OnInit } from '@angular/core';
import { AzureFaceApiDataService } from '../services/azure-face-api-data.service';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.scss']
})
export class IdentifyComponent implements OnInit {

  //variables using during the comparison between faceIds and Person Id 
  uploadedFiles = [];
  faceIds: string[] = [];
  url: any;
  matchName: string;
  matchId: string;
  matchData: string;

  constructor(private data: AzureFaceApiDataService) { }

  ngOnInit(): void {
  }


  //Handling the face Identification 
  async handleFileInput(event, group_id: string) {
    this.uploadedFiles = event.target.files;
    this.getPreview(this.uploadedFiles[0]);//checking the uploading of the image 
    /**
     * Gets the face IDs of the uploaded image.           
     * @returns None           
     */
    const getIDs = await this.data// Await keyword shall freeze the system until we get the faceId which is coming from the API
      .detectFace_File(this.uploadedFiles[0])
      .toPromise()
      .then(
        (data) => {
          const ressource = data[0];
          this.faceIds[0] = ressource['faceId'];
        },
        (error) => console.log(error)
      );
    /**
     * Identify the faces in the given image.           
     * @param {string} group_id - the group id of the faces to identify           
     * @returns None           
     */
    this.faceIdentify(group_id);
  }

  /**
   * Takes in a group_id and a list of faceIds and returns the personId of the person that       
   * best matches the faceIds.       
   * @param {string} group_id - the group_id of the person to search for       
   * @param {string[]} faceIds - the list of faceIds to search for       
   * @returns None       
   */
  async faceIdentify(group_id: string) {
    const getID = await this.data
      .faceIdentify(group_id, this.faceIds)
      .toPromise()
      .then((data) => (this.matchId = data.body[0].candidates[0].personId));

    const getName = await this.data
      .getPersonFromPersonGroup(group_id, this.matchId)
      .toPromise()//colllect that person which belongs to this group_id and match_id
      .then((data) => {
        this.matchName = data.body['name'];
        this.matchData = data.body['userData'];
      });
  }

  /**
   * Takes in a file and returns the URL of the file.           
   * @param {File} file - the file to get the URL of.           
   * @returns None           
   */
  getPreview(file: File) {
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = (event) => {
      this.url = (event.target as FileReader).result;
    };
  }
}

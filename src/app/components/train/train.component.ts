import { Component, OnInit } from '@angular/core';
import { AzureFaceApiDataService } from '../services/azure-face-api-data.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-train',
  templateUrl: './train.component.html',
  styleUrls: ['./train.component.scss']
})
export class TrainComponent implements OnInit {

  /**
   * main variables to handle user inputs         
   */
  create_group_response: any;
  create_person_response: any;
  add_image_response: any;
  get_person_response: any;
  train_response: any;

  person_image: any = null;

  constructor(private data: AzureFaceApiDataService) { }

  ngOnInit() {
  }

  /**
   * Handles the file input event.           
   * @param {Event} event - the file input event.           
   * @returns None           
   */
  handleFileInput(event) {
    this.person_image = event.target.files[0];
  }

  /**
   * Creates a new PersonGroup in the API.           
   * @param {string} id - The id of the group.           
   * @param {string} name - The name of the group.           
   * @param {string} data - The data of the group.           
   * @returns None           
   */
  createGroup(id: string, name: string, data: string) {
    this.data.createPersonGroup(id, name, data).subscribe(res => { this.create_group_response = res.status }, error => console.log(error));
  }

  /**
   * Creates a new person in the API.           
   * @param {string} group_id - the group id of the group to create the person in.           
   * @param {string} name - the name of the person to create.           
   * @param {string} data - the data of the person to create.           
   * @returns None           
   */
  createPerson(group_id: string, name: string, data: string) {
    this.data.createPerson(group_id, name, data).subscribe(res => { this.create_person_response = res.body }, error => console.log(error));
  }

  /**
   * Adds an image assosiated to the person in the PersonGroup in the API.           
   * @param {string} group_id - the group id of the group to add the image to.           
   * @param {File} image - the image to add.           
   * @param {string} personID - the id of the person to add the image to.           
   * @returns None           
   */
  addImage(group_id: string, image: File, personID: string) {
    this.data.addPersonImageToPersonGroup(group_id, image, personID).subscribe(res => { this.add_image_response = res.body }, error => console.log(error));
  }

  /**
   * Gets a person from the API given the group ID and person ID.           
   * @param {string} groupID - the group ID of the person to get           
   * @param {string} personID - the ID of the person to get           
   * @returns None           
   */
  getPersonFromPersonGroup(groupID: string, personID: string) {
    this.data.getPersonFromPersonGroup(groupID, personID).subscribe(res => { this.get_person_response = res.body }, error => console.log(error));
  }

  /**
   * Trains the group with the given id.           
   * @param {string} group_id - the id of the group to train           
   * @returns None           
   */
  trainPersonGroup(group_id: string) {
    this.data.trainPersonGroup(group_id).subscribe(res => { this.train_response = res.status, console.log(res) }, error => console.log(error));
  }

}

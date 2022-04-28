import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class AzureFaceApiDataService {
  response: any = [];
  private endpoint = "https://waliullah-faceapi-instance.cognitiveservices.azure.com/"; // add your own Endpoint URL here
  private key1 = "thisIsAPlaceHolderHeHe"; // add your own key here 

  /**
   * The URL for the face detection API.       
   * @returns {string} The URL for the face detection API.       
   */
  private detectFaceUrl = this.endpoint + "face/v1.0/detect?returnFaceAttributes=age,gender,headPose,smile,facialHair,glasses,emotion,hair,makeup,occlusion,accessories,blur,exposure,noise";

  /**
   * The URL for the person groups endpoint.       
   * @returns {string} The URL for the person groups endpoint.       
   */
  private personGroupsUrl = this.endpoint + '/face/v1.0/persongroups/';

  /**
   * The URL for the Face API Identify API.           
   * @returns {string} The URL for the Face API Identify API.           
   */
  private faceIdentifyUrl = this.endpoint + '/face/v1.0/identify';


  constructor(private http: HttpClient) { }

  /**
   * Gets the headers for the image upload.           
   * @returns {HttpHeaders} - the headers for the image upload.           
   */
  private get_Image_Upload_Headers() {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/octet-stream');
    headers = headers.set('Ocp-Apim-Subscription-Key', this.key1);
    return headers;
  }

  /**
   * Gets the headers for the API call.           
   * @returns {HttpHeaders} - the headers for the API call.           
   */
  private getHeaders() {
    let headers = new HttpHeaders();
    headers = headers.set('Ocp-Apim-Subscription-Key', this.key1);
    headers = headers.set('Content-Type', 'application/json');
    return headers;
  }

  /**
   * Detects faces in an image.           
   * @param {File} image - the image to detect faces in.           
   * @returns {Observable<any>} - an observable that returns the response from the server.           
   */
  detectFace_File(image: File) {
    return this.http.post<any>(this.detectFaceUrl, image, {
      headers: this.get_Image_Upload_Headers(),
    });
  }

  /**
   * Creates a new person group.       
   * @param {string} group_name - the name of the person group.       
   * @param {string} _name - the name of the person group.       
   * @param {string} _userData - the user data of the person group.       
   * @returns {Observable<HttpResponse<any>>}       
   */
  createPersonGroup(group_name: string, _name: string, _userData: string) {
    return this.http.put<any>(
      this.personGroupsUrl + group_name,
      { name: _name, userData: _userData },
      { headers: this.getHeaders(), responseType: 'json', observe: 'response' }
    );
  }

  /**
   * Creates a new person in the specified group.           
   * @param {string} group_id - the group id of the group to create the person in.           
   * @param {string} _name - the name of the person.           
   * @param {string} _userData - the user data of the person.           
   * @returns {Observable<HttpResponse<any>>} - the response of the request.           
   */
  createPerson(group_id: string, _name: string, _userData: string) {
    return this.http.post<any>(
      this.personGroupsUrl + group_id + '/persons/',
      { name: _name, userData: _userData },
      { headers: this.getHeaders(), responseType: 'json', observe: 'response' }
    );
  }

  /**
   * Adds a person image to the specified person group.           
   * @param {string} group_id - the id of the person group           
   * @param {File} image - the image to add           
   * @param {string} personID - the id of the person           
   * @returns None           
   */
  addPersonImage(group_id: string, image: File, personID: string) {
    return this.http.post<any>(
      this.personGroupsUrl +
      group_id +
      '/persons/' +
      personID +
      '/persistedFaces',
      image,
      {
        headers: this.get_Image_Upload_Headers(),
        responseType: 'json',
        observe: 'response',
      }
    );
  }


  /**
   * Get a person from the specified group.           
   * @param {string} group_id - the group id of the group that the person is in           
   * @param {string} _personID - the id of the person           
   * @returns {Observable<any>} - the person           
   */
  getPerson(group_id: string, _personID: string) {
    return this.http.get<any>(
      this.personGroupsUrl + group_id + '/persons/' + _personID,
      { headers: this.getHeaders(), responseType: 'json', observe: 'response' }
    );
  }

  /**
   * Gets a persisted face from a person.           
   * @param {string} _personGroupID - the person group ID           
   * @param {string} _personID - the person ID           
   * @param {string} _persistedFaceID - the persisted face ID           
   * @returns {Observable<any>} - the response from the API           
   */
  getPersonFace(
    _personGroupID: string,
    _personID: string,
    _persistedFaceID: string
  ) {
    return this.http.get<any>(
      this.personGroupsUrl +
      _personGroupID +
      '/persons/' +
      _personID +
      '/persistedFaces/' +
      _persistedFaceID,
      { headers: this.getHeaders(), responseType: 'json', observe: 'response' }
    );
  }

  /**
   * Trains a group.       
   * @param {string} group_id - the group id to train       
   * @returns None       
   */
  trainGroup(group_id: string) {
    return this.http.post<any>(
      this.personGroupsUrl + group_id + '/train',
      {},
      { headers: this.getHeaders(), responseType: 'json', observe: 'response' }
    );
  }


  /**
   * Identify the faces in the given image.           
   * @param {string} group_id - the id of the group to identify faces in.           
   * @param {string[]} _faceIds - the face ids of the faces to identify.           
   * @returns A promise that resolves to the response from the server.           
   */
  faceIdentify(group_id: string, _faceIds: string[]) {
    return this.http.post<any>(
      this.faceIdentifyUrl,
      { faceIds: _faceIds, personGroupId: group_id },
      { headers: this.getHeaders(), responseType: 'json', observe: 'response' }
    );
  }
}

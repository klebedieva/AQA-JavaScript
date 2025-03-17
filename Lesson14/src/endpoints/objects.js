import { RestClient } from '../restClient';

export default class Objects extends RestClient {
  constructor(baseUrl, configOverrides) {
    super(baseUrl, configOverrides);
    this.url = '/objects'; 
    this.objectId = null; 
  }

  async getAllObjects() {
    return this.sendGet({ url: this.url });
  }

  async getSingleObject() {
    if (!this.objectId) throw new Error('Object ID is not set');
    return this.sendGet({ url: `${this.url}/${this.objectId}` });
  }

  async addObject({ data }) {
    const response = await this.sendPost({ url: this.url, data });
    this.objectId = response.data.id;
    return response;
  }

  async updateObject(objectId, data) {  
    if (!objectId) throw new Error('Object ID is not provided');
    return this.sendPut({ url: `${this.url}/${objectId}`, data });
  }

  async partiallyUpdateObject(objectId, data) {  
    if (!objectId) throw new Error('Object ID is not provided');
    return this.sendPatch({ url: `${this.url}/${objectId}`, data });
  }

  async deleteObject(objectId) {  
    if (!objectId) throw new Error('Object ID is not provided');
    return this.sendDelete({ url: `${this.url}/${objectId}` });
  }
}

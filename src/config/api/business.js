export default class Business {
  constructor(client) {
    this.client = client;
  }

  addBusiness(data) {
    return this.client.post("/organizations/", data);
  }

  getEcosystem() {
    return this.client.get("/ecosystem");
  }

  getOrganization() {
    return this.client.get("/organizations");
  }

  getSubEcosystem() {
    return this.client.get("/sub_ecosystem");
  }
}

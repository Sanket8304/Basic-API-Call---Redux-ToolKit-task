import httpService from "./httpService";

export default class Webservice {
  static GET = async (strURL: any, params: any) => {
    return httpService
      .get(strURL, params)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(`error while ${strURL}`, error);

        return error;
      });
  };
}

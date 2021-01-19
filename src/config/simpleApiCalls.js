
import axios from "axios";
import {
  getFeatureQuestion,
  BASE_URL
} from "./WebServices";


const getAllQuestions = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${getFeatureQuestion}`)
      .then((response) => {
        if (response.data) {
          
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const getUser = (userId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}users/${userId}?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=reputation&filter=default`)
      .then((response) => {
        if (response.data) {
          
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getTags = (userId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}users/${userId}/tags?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=popular&filter=default`)
      .then((response) => {
        if (response.data) {
          
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const getQuestions = (userId) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}users/${userId}/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&filter=default`)
      .then((response) => {
        if (response.data) {
          
          resolve(response);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {
  getAllQuestions,
  getQuestions,
  getTags,
  getUser
 };
// utils/localStorageAccess.js
import { cvData } from '../data/data';

export const getCVDataFromLocalStorage = () => {
  const storedCVData = localStorage.getItem('cvData');
  if (!storedCVData) {
    // If local storage is empty, save data from data.js
    localStorage.setItem('cvData', JSON.stringify(cvData));
    return cvData;
  }
  return JSON.parse(storedCVData);
};

export const updateCVDataInLocalStorage = (updatedCVData) => {
  localStorage.setItem('cvData', JSON.stringify(updatedCVData));
};

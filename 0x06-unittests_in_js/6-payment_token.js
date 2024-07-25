function getPaymentTokenFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      // Optionally, you could reject the promise or handle the failure case
      resolve(); // or reject(new Error('Failed response from the API'));
    }
  });
}

module.exports = getPaymentTokenFromAPI;

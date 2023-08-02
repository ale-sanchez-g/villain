const axios = require("axios");
const monitorConfig = require("./villanHealthScript");

// Replace these with your actual values

const DT_TENANT = "https://vsc32538.live.dynatrace.com";
const DT_API_TOKEN =process.env.DT_API_TOKEN;

async function createHttpMonitor() {
  
  const headers = {
    Authorization: `Api-Token ${DT_API_TOKEN}`,
    "Content-Type": "application/json",
  };

  try {
    // Send the request to create the synthetic monitor
    const url = `${DT_TENANT}/api/v1/synthetic/monitors`;
    const response = await axios.post(url, monitorConfig, { headers });

    if (response.status === 201) {
      console.log('HTTP synthetic monitor created successfully.');
    } else {
      console.error(`Failed to create HTTP synthetic monitor. Status code: ${response.status}`);
      console.error(response.data);
    }
  } catch (error) {
    console.error('Error occurred while creating the HTTP synthetic monitor:', error.message);
  }
}

createHttpMonitor();

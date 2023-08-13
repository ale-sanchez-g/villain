const axios = require("axios");
const fs = require("fs");
//read JSON file and set to monitorConfig const
const monitorConfig = fs.readFileSync(__dirname + "/villanHealthScript.json");
const monitorListConfig = fs.readFileSync(__dirname + "/syntheticList.json");

// Replace these with your actual values

const DT_TENANT = "https://vsc32538.live.dynatrace.com";
const DT_API_TOKEN = process.env.DT_API_TOKEN;

async function createHttpMonitor() {
  const headers = {
    Authorization: `Api-Token ${DT_API_TOKEN}`,
    "Content-Type": "application/json",
  };

  try {
    // Send the request to create the synthetic monitor
    const url = `${DT_TENANT}/api/v1/synthetic/monitors`;
    const response = await axios.post(url, monitorConfig, { headers });

    if (response.status === 201 || response.status === 200) {
      console.log("HTTP synthetic monitor created successfully.");
    } else {
      console.error(
        `Failed to create HTTP synthetic monitor. Status code: ${response.status}`
      );
      console.error(response.data);
    }
  } catch (error) {
    console.error(
      "Error occurred while creating the HTTP synthetic monitor:",
      error.message
    );
  }
}

// Function that compares the current and previous monitor configurations
// and returns true if they are the same, false otherwise
function isMonitorConfigSame(currentConfig, previousConfig) {
  // If the previous config is empty, then this is the first time the script is running
  // so we should return false to create the monitor
  if (!previousConfig) {
    return false;
  }

  // Compare the current and previous configs
  return JSON.stringify(currentConfig) === JSON.stringify(previousConfig);
}

// Get list of all synthetic monitors
async function getMonitors() {
  const headers = {
    Authorization: `Api-Token ${DT_API_TOKEN}`,
    "Content-Type": "application/json",
  };

  try {
    const url = `${DT_TENANT}/api/v1/synthetic/monitors`;
    const response = await axios.get(url, { headers });

    if (response.status === 200 || response.status === 201) {
      return response.data.monitors;
    } else {
      console.error(
        `Failed to get list of synthetic monitors. Status code: ${response.status}`
      );
      console.error(response.data);
    }
  } catch (error) {
    console.error(
      "Error occurred while getting list of synthetic monitors:",
      error.message
    );
  }
}

const monitorListCurrent = getMonitors();

// compare the current and previous monitor configurations
// and returns true if they are the same, false otherwise

const check = isMonitorConfigSame(monitorListCurrent, monitorListConfig);
// Show diff between current and previous monitor configurations JSON

createHttpMonitor();

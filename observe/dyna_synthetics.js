const axios = require("axios");
const fs = require("fs");
const { get } = require("http");
//read JSON file and set to monitorConfig const
const monitorConfig = fs.readFileSync(__dirname + "/villanHealthScript.json");
const monitorListConfig = fs.readFileSync(__dirname + "/syntheticList.json");

// Replace these with your actual values

const DT_TENANT = "https://noj90533.live.dynatrace.com";
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
  // Custom deep comparison function
  function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 == null || obj2 == null) {
      return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (let key of keys1) {
      if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }

    return true;
  }

  // Compare the current and previous configs using the custom deepEqual function
  return deepEqual(currentConfig, previousConfig);
}

// Get list of all synthetic monitors
async function getMonitors(localList) {
  const headers = {
    Authorization: `Api-Token ${DT_API_TOKEN}`,
    "Content-Type": "application/json",
  };

  try {
    const url = `${DT_TENANT}/api/v1/synthetic/monitors`;
    const response = await axios.get(url, { headers });
    // Log status of reuest
    console.log(response.status);
    let monitorListCurrent = response.data.monitors;
    if (response.status === 200 || response.status === 201) {
      
      const check = isMonitorConfigSame(monitorListCurrent, JSON.parse(localList));
      // Show diff between current and previous monitor configurations JSON
      console.log(`Monitor Configs are the same: ${check}`);
      if (!check) {
        console.log("Creating new monitor...");
        createHttpMonitor();
      } else {
        console.log("Monitor already exists");
      };
      return 'sucess';

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

getMonitors(monitorListConfig);
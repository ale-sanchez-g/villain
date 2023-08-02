const monitorConfig = {
    frequencyMin: 60,
    anomalyDetection: {
      outageHandling: {
        globalOutage: true,
        localOutage: true,
        localOutagePolicy: {
          affectedLocations: 1,
          consecutiveRuns: 3,
        },
      },
      loadingTimeThresholds: {
        enabled: true,
        thresholds: [
          {
            type: "TOTAL",
            valueMs: 100,
            requestIndex: 1,
          },
        ],
      },
    },
    type: "HTTP",
    name: "Villan Monitor test",
    locations: ["GEOLOCATION-2FD31C834DE4D601", "GEOLOCATION-4C40D4C0456E7A41"],
    enabled: true,
    script: {
      version: "1.0",
      requests: [
        {
          description: "Villan Health Check",
          url: "https://ancient-sands-86690-5def6b8b9d8a.herokuapp.com/health",
          method: "GET",
          validation: {
            rules: [
              {
                type: "httpStatusesList",
                value: ">=400",
                passIfFound: false,
              },
            ],
          },
          configuration: {
            acceptAnyCertificate: true,
            followRedirects: true,
            shouldNotPersistSensitiveData: false,
          },
        },
      ],
    },
    tags: ["example"],
    events: [],
  };

module.exports = monitorConfig;

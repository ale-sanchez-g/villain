const faker = require("faker");

describe("API tests", () => {
  let authToken;

  it("should create an account and get auth token", () => {
    const email = faker.internet.email();
    const key = faker.internet.password();

    cy.request({
      method: "POST",
      url: "/auth/gentoken",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        key: key,
        email: email,
        returnKey: true,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("token");
      authToken = response.body.token;
    });
  });

  it("should use auth token to get user data", () => {
    cy.wrap(authToken).then((token) => {
      cy.request({
        method: "GET",
        url: "/auth/verifytoken",
        headers: {
          Authorization: `${token}`,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body[0]).to.have.property("app_id");
      });
    });
  });

  it('should register a new user using auth token', () => {
    const username = faker.internet.userName();
    const password = faker.internet.password();

    cy.wrap(authToken).then(token => {
      cy.request({
        method: 'POST',
        url: '/auth/user/register',
        headers: {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
        },
        body: {
          "username": username,
          "password": password
        }
      }).then(response => {
        expect(response.status).to.eq(200);
      });
    });
  });

});

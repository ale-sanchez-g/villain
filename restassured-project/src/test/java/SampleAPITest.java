import com.google.gson.Gson;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import net.datafaker.Faker;
import org.junit.jupiter.api.*;
import java.util.*;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class SampleAPITest {
    private static final Faker faker = new Faker();
    private static String token;

    @BeforeAll
    public static void generateToken() {
        // Set the base URI
        // RestAssured.baseURI =
        // "https://azurevillan.greenmeadow-20cb8861.australiaeast.azurecontainerapps.io";
        // Set Localhost
        RestAssured.baseURI = "http://localhost:3000";

        // Generate random username and email
        var key = faker.name().username();
        var email = faker.internet().emailAddress();

        // Put body key/values in a map
        Map<String, Object> requestBodyMap = new HashMap<>();
        requestBodyMap.put("key", key);
        requestBodyMap.put("email", email);
        requestBodyMap.put("returnKey", true);

        // Convert to JSON
        var requestBodyJsonString = new Gson().toJson(requestBodyMap);

        // Send a POST request and validate the response
        token = given().log().all()
                .contentType(ContentType.JSON)
                .body(requestBodyJsonString)
                .when()
                .post("/auth/gentoken")
                .then().log().all()
                .statusCode(200)
                .body("emailTo", equalTo(email))
                .extract().jsonPath().getString("token");
    }

    @Nested
    class OuterTestSuite {
        @Test
        public void healthCheck() {
            // Send a GET request and validate the response
            given().log().all()
                    .when()
                    .get("/health")
                    .then().log().all()
                    .statusCode(200)
                    .body("message", equalTo("Ok"));
        }

        @Test
        public void verifyToken() {
            given().log().all()
                    .header("Authorization", token)
                    .when()
                    .get("/auth/verifytoken")
                    .then().log().all()
                    .statusCode(200);
        }

        @Nested
        class InnerTestSuite {
            private static String username;
            private static String password;

            @BeforeAll
            public static void generateUsernamePassword() {
                username = faker.name().username();
                password = faker.internet().password();
            }

            @Test
            public void registerUser() {
                Map<String, Object> requestBodyMap = new HashMap<>();
                requestBodyMap.put("username", username);
                requestBodyMap.put("password", password);
                var requestBodyJsonString = new Gson().toJson(requestBodyMap);
                given().log().all()
                        .header("Authorization", token)
                        .contentType(ContentType.JSON)
                        .body(requestBodyJsonString)
                        .when()
                        .post("/auth/user/register")
                        .then().log().all()
                        .statusCode(200);
            }

            @Nested
            class SecondInnerTestSuite {
                @Test
                public void registerUser() {
                    Map<String, Object> requestBodyMap = new HashMap<>();
                    requestBodyMap.put("username", username);
                    requestBodyMap.put("password", password);
                    var requestBodyJsonString = new Gson().toJson(requestBodyMap);
                    System.out.println(requestBodyJsonString);
                    given().log().all()
                            .header("Authorization", token)
                            .contentType(ContentType.JSON)
                            .body(requestBodyJsonString)
                            .when()
                            .post("/auth/user/login")
                            .then().log().all()
                            .statusCode(200);
                }
            }
        }
    }
}

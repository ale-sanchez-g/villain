import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class SampleAPITest {

    @Test
    public void sampleAPITest() {
        // Set the base URI
        RestAssured.baseURI = "https://api.example.com";

        // Send a GET request and validate the response
        Response response = given()
            .when()
            .get("/endpoint")
            .then()
            .statusCode(200)
            .body("someProperty", equalTo("expectedValue"))
            .extract()
            .response();
    }
}

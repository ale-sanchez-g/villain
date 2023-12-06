import org.openqa.selenium.By
import org.openqa.selenium.WebDriver
import org.openqa.selenium.WebElement

// Start the sample
WDS.sampleResult.sampleStart()
WDS.browser.findElement(By.className('header__search')).click()

// Start the sample
WDS.sampleResult.sampleStart()
WDS.browser.findElement(By.className('search-popover__search-input')).sendKeys('training\n')
// validate that search results are displayed
WDS.browser.findElement(By.className('card-layout__cards')).isDisplayed()
WDS.browser.wait(2000)
WDS.sampleResult.sampleEnd()



// // Define the element to wait for (change the locator strategy and value accordingly)
// By elementLocator = By.className("header__search")

// // Set a timeout for the wait
// int timeoutInSeconds = 10
// WebDriverWait wait = new WebDriverWait(WDS.browser, timeoutInSeconds)

// try {
//     // Wait for the element to be present on the page
//     WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(elementLocator))

//     // Perform any additional actions after the element is loaded (if needed)
//     element.click()
//     // End the sample
//     WDS.sampleResult.sampleEnd()
// } catch (Exception e) {
//     // Handle the exception if the element is not found within the specified timeout
//     log.error("Element not found within the specified timeout")
//     WDS.sampleResult.sampleEnd()
// }

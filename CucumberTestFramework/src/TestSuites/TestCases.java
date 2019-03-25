package TestSuites;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestCases {
	
	WebDriver driver;

	/*
	 * @Given("the website is running in chrome") public void environSetup() {
	 * 
	 * System.setProperty("webdriver.chrome.driver",
	 * "C:\\Users\\Avayukt\\Downloads\\chromedriver_win32\\chromedriver.exe");
	 * driver = new ChromeDriver(); driver.get("http://newtours.demoaut.com"); }
	 */
	
	@Given("^the website is running in chrome$")
	public void the_website_is_running_in_chrome() throws Exception {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Avayukt\\Downloads\\chromedriver_win32\\chromedriver.exe");
		driver = new ChromeDriver(); driver.get("http://newtours.demoaut.com"); 
	  	}

	
	@When("^User enters the registered \"([^\"]*)\"$")
	public void user_enters_the_registered(String arg1) throws Exception {
		driver.findElement(By.name("userName")).sendKeys(arg1);
	    
	}
	@When("^User enters the password \"([^\"]*)\"$")
	public void user_enters_the_password(String arg1) throws Exception {
		driver.findElement(By.name("password")).sendKeys(arg1);
	    
	}


	@Then("^clicks on sign in button$")
	public void clicks_on_sign_in_button() throws Exception {
		driver.findElement(By.name("login")).click();
	    
	}
	
	
	
}

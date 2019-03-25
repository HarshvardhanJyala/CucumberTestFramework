package TestSuites;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {"pretty","html:test-output/cucumber-reports"},
		features= {"scenarioOne.feature"},
		glue = {"TestSuites"}

		)

public class testRunner {

}

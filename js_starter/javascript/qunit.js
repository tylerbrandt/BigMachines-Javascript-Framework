/** Font Family and Sizes */

#qunit-tests, #qunit-header, #qunit-banner, #qunit-testrunner-toolbar, #qunit-userAgent, #qunit-testresult {
	font-family: "Helvetica Neue Light", "HelveticaNeue-Light", "Helvetica Neue", Calibri, Helvetica, Arial;
}

#qunit-testrunner-toolbar, #qunit-userAgent, #qunit-testresult, #qunit-tests li { font-size: small; }
#qunit-tests { font-size: smaller; }


/** Resets */

#qunit-tests, #qunit-tests ol, #qunit-header, #qunit-banner, #qunit-userAgent, #qunit-testresult {
	margin: 0;
	padding: 0;
}


/** Header */

#qunit-header {
	padding: 0.5em 0 0.5em 1em;
	
	color: #fff;
	text-shadow: rgba(0, 0, 0, 0.5) 4px 4px 1px;
	background-color: #0d3349;
	
	border-radius: 15px 15px 0 0;
	-moz-border-radius: 15px 15px 0 0;
	-webkit-border-top-right-radius: 15px;
	-webkit-border-top-left-radius: 15px;
}

#qunit-header a {
	text-decoration: none;
	color: white;
}

#qunit-banner {
	height: 5px;
}

#qunit-testrunner-toolbar {
	padding: 0em 0 0.5em 2em;
}

#qunit-userAgent {
	padding: 0.5em 0 0.5em 2.5em;
	background-color: #2b81af;
	color: #fff;
	text-shadow: rgba(0, 0, 0, 0.5) 2px 2px 1px;
}


/** Tests: Pass/Fail */

#qunit-tests {
	list-style-position: inside;
}

#qunit-tests li {
	padding: 0.4em 0.5em 0.4em 2.5em;
	border-bottom: 1px solid #fff;
	list-style-position: inside;
}

#qunit-tests li strong {
	cursor: pointer;
}

#qunit-tests ol {
	margin-top: 0.5em;
	padding: 0.5em;
	
	background-color: #fff;
	
	border-radius: 15px;
	-moz-border-radius: 15px;
	-webkit-border-radius: 15px;
	
	box-shadow: inset 0px 2px 13px #999;
	-moz-box-shadow: inset 0px 2px 13px #999;
	-webkit-box-shadow: inset 0px 2px 13px #999;
}

/*** Test Counts */

#qunit-tests b.counts                       { color: black; }
#qunit-tests b.passed                       { color: #5E740B; }
#qunit-tests b.failed                       { color: #710909; }

#qunit-tests li li {
	margin: 0.5em;
	padding: 0.4em 0.5em 0.4em 0.5em;
	background-color: #fff;
	border-bottom: none;
	list-style-position: inside;
}

/*** Passing Styles */

#qunit-tests li li.pass {
	color: #5E740B;
	background-color: #fff;
	border-left: 26px solid #C6E746;
}

#qunit-tests .pass                          { color: #528CE0; background-color: #D2E0E6; }
#qunit-tests .pass .test-name               { color: #366097; }
 
#qunit-tests .pass .test-actual,
#qunit-tests .pass .test-expected           { color: #999999; }

#qunit-banner.qunit-pass                    { background-color: #C6E746; }

/*** Failing Styles */

#qunit-tests li li.fail {
	color: #710909;
	background-color: #fff;
	border-left: 26px solid #EE5757;
}

#qunit-tests .fail                          { color: #000000; background-color: #EE5757; }
#qunit-tests .fail .test-name,
#qunit-tests .fail .module-name             { color: #000000; }

#qunit-tests .fail .test-actual             { color: #EE5757; }
#qunit-tests .fail .test-expected           { color: green;   }

#qunit-banner.qunit-fail, 
#qunit-testrunner-toolbar                   { background-color: #EE5757; }


/** Footer */

#qunit-testresult {
	padding: 0.5em 0.5em 0.5em 2.5em;

	color: #2b81af;
	background-color: #D2E0E6;

	border-radius: 0 0 15px 15px;
	-moz-border-radius: 0 0 15px 15px;
	-webkit-border-bottom-right-radius: 15px;
	-webkit-border-bottom-left-radius: 15px;
}

/** Fixture */

#qunit-fixture {
	position: absolute;
	top: -10000px;
	left: -10000px;
}

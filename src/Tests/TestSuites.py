import unittest

from Tests.DummyTestCase import DummyTestCase

# Create your own function that returns a suit and then use runner.run inside RunTests to run your suit
# If you see that your tests may be included in existing suit - include if it makes sense to couple them

def get_dummy_test_suit():
    suite = unittest.TestSuite()
    suite.addTest(DummyTestCase("test_DummyNameIsCorrect"))
    suite.addTest(DummyTestCase("test_DummyNameIsChangedCorrectly"))
    return suite

def RunTests():
    runner = unittest.TextTestRunner()
    # runner.run(get_dummy_test_suit()) # uncomment to run dummy tests


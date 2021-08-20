import unittest

from Tests.DummyTestCase import DummyTestCase

def GetMainTestSuite():
    suite = unittest.TestSuite()
    suite.addTest(DummyTestCase("test_DummyNameIsCorrect"))
    suite.addTest(DummyTestCase("test_DummyNameIsChangedCorrectly"))
    return suite

def RunTests():
    runner = unittest.TextTestRunner()
    runner.run(GetMainTestSuite())

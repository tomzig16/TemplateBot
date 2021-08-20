import unittest

class DummyTestCase(unittest.TestCase):
    dummyName = "oldDummyName"

    def setUp(self):
        # keep in mind, setUp is called for every test method in the case. 
        # So it might be a good idea to either have asserts grouped or simply introduce a secondary class
        self.dummyName = "newDummyName"
    
    def test_DummyNameIsCorrect(self):
        self.assertEqual(self.dummyName, "newDummyName", "Dummy still has an old name")
        self.assertNotEqual(self.dummyName, "oldDummyName", "Dummy still has an old name")
    
    def test_DummyNameIsChangedCorrectly(self):
        newName = "EvenNewerDummyName"
        self.dummyName = newName
        self.assertEqual(self.dummyName, newName, "Dummy name is not set to new!")

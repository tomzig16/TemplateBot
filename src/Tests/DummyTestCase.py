import unittest

class DummyTestCase(unittest.TestCase):
    dummy_name = "oldDummyName"

    def setUp(self):
        # keep in mind, setUp is called for every test method in the case. 
        # So it might be a good idea to either have asserts grouped or simply introduce a secondary class
        self.dummy_name = "newDummyName"
    
    def test_Dummy_name_is_correct(self):
        self.assertEqual(self.dummy_name, "newDummyName", "Dummy still has an old name")
        self.assertNotEqual(self.dummy_name, "oldDummyName", "Dummy still has an old name")
    
    def test_dummy_name_is_changed_correctly(self):
        new_name = "EvenNewerDummyName"
        self.dummy_name = new_name
        self.assertEqual(self.dummy_name, new_name, "Dummy name is not set to new!")

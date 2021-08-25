import sys

from Tests import TestSuites

g_arg_environment = ["test", "dev", "prod"]
g_current_environment = "dev" # default should be dev, to make sure we dont do anything to prod.

def setup_dev_environment():
    print("Dev environment is being used")
    pass

def setup_prod_environment():
    print("Prod environment is being used")
    pass

if __name__ == "__main__":
    # Check if testing session - run tests if case, otherwise check for development environment vs production
    if(len(sys.argv) > 1):
        if sys.argv[1] in g_arg_environment:
            g_current_environment = sys.argv[1]
    
    if g_current_environment == "test":
        TestSuites.RunTests()
    elif g_current_environment == "dev":
        setup_dev_environment()
    else:
        setup_prod_environment()

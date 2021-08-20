import sys

from Tests import TestSuites

g_ArgEnvironment = ["test", "dev", "prod"]
g_CurrentEnvironment = "dev" # default should be dev, to make sure we dont do anything to prod.

def SetupDevEnvironment():
    print("Dev environment is being used")
    pass

def SetupProdEnvironment():
    print("Prod environment is being used")
    pass

if __name__ == "__main__":
    # Check if testing session - run tests if case, otherwise check for development environment vs production
    if(len(sys.argv) > 1):
        if sys.argv[1] in g_ArgEnvironment:
            g_CurrentEnvironment = sys.argv[1]
    
    if g_CurrentEnvironment == "test":
        TestSuites.RunTests()
    elif g_CurrentEnvironment == "dev":
        SetupDevEnvironment()
    else:
        SetupProdEnvironment()

var Elections = artifacts.require("./Elections.sol");

contract(Elections, function (accounts) {

    var electionInstance;

    it("Initializes with 2 candidates", function () {
        return Elections.deployed().then(function (instance) {
            return instance.candidatesCount();
        }).then(function (count) {
            assert.equal(count, 3);
        })            
    });

    it("it initializes the candidates with the correct values", function() {
        return Elections.deployed().then(function (instance) {
            electionInstance = instance;
            return electionInstance.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "contains the correct id");
            assert.equal(candidate[1], "Candidate 1", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
            return electionInstance.candidates(2);
        }).then(function(candidate) {
            assert.equal(candidate[0], 2, "contains the correct id");
            assert.equal(candidate[1], "Candidate 2", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
            return electionInstance.candidates(3);
        }).then(function(candidate) {
            assert.equal(candidate[0], 3, "contains the correct id");
            assert.equal(candidate[1], "Candidate 3", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct votes count");
        });
    });

})
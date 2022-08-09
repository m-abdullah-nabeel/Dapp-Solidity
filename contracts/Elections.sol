pragma solidity ^0.5.16;

contract Elections {
    // string public candidate;
    // Model Candidate
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    // Store Candidate

    // Fetch Candidate
    mapping(uint => Candidate) public candidates;
    // Store CandidateCount
    uint public candidatesCount;

    constructor () public {
        // candidate = "Candidate 1";
        addCandidate("Candidate 1");
        addCandidate("Candidate 2");
        addCandidate("Candidate 3");
    }

    function addCandidate (string memory _name) private {
        candidatesCount ++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
    }


}

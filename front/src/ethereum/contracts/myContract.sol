pragma solidity ^0.8.0;
contract information {
    struct Patient{
        string id;
        string nameTitle;
        string firstname;
        string lastname;
        string gender;
        string idCardNo;
        uint256 dob;
        string ethnicity;
        string nation;
        string religion;
        string work;
        string homeNo;
        string subDist;
        string dist;
        string province;
        int zip;
        string congenitalDisease;
        string allergy;
        string blood;
        string boardingHos;
        string personalDoc;
        address addr;
        uint256 date;
    }
    // struct HomeAdd{
    //     string homeNo;
    //     string subDist;
    //     string dist;
    //     string province;
    //     int zip;
    // }
    // struct MedicalInformation{
    //     string congenitalDisease;
    //     string allergy;
    //     string blood;
    //     string boardingHos;
    //     string personalDoc;
    // }
    struct HistoryOfSeeadoc{
        string nameDoc;
        uint256 date;
        string details;
    }
    address public owner;
    address[] public patientList;

    mapping(address => Patient) patients;

    mapping(address=>mapping(address=>bool)) isApproved;
    mapping(address => bool) isPatient;
    
    function Record() public {
        owner = msg.sender;
    }

    function setDetails(string memory _id, string memory _nameTitle, string memory _firstName, string memory _lastName, string memory _gender, string memory _idCardNo, uint256 _dob, string memory _ethnicity, string memory _nation, string memory _religion, string memory _work, string memory _homeNo, string memory _subDist, string memory _dist, string memory _province, int _zip, string memory _congenitalDisease, string memory _allergy, string memory _blood, string memory _boardingHos, string memory _personalDoc) public {
        require(!isPatient[msg.sender]);
        Patient storage p = patients[msg.sender];
        p.id = _id;
        p.nameTitle = _nameTitle;
        p.firstname = _firstName;
        p.lastname = _lastName;
        p.gender = _gender;
        p.idCardNo = _idCardNo;
        p.dob = _dob;
        p.ethnicity =  _ethnicity; 
        p.nation = _nation;
        p.religion = _religion;
        p.work = _work;
        p.homeNo = _homeNo;
        p.subDist = _subDist;
        p.dist = _dist;
        p.province = _province;
        p.zip = _zip;
        p.congenitalDisease = _congenitalDisease;
        p.allergy = _allergy;
        p.boardingHos = _boardingHos;
        p.personalDoc = _personalDoc;
        p.addr = msg.sender;
        p.date = block.timestamp;
        
        patientList.push(msg.sender);
        isPatient[msg.sender] = true;
        isApproved[msg.sender][msg.sender] = true;
}

    //Owner of the record must give permission to doctor only they are allowed to view records
    function givePermission(address _address) public returns(bool success) {
        isApproved[msg.sender][_address] = true;
        return true;
    }

    //Owner of the record can take away the permission granted to doctors to view records
    function RevokePermission(address _address) public returns(bool success) {
        isApproved[msg.sender][_address] = false;
        return true;
    }
}
// 0x1aE3EE6CA61acC529080A0951233179a755aFc50

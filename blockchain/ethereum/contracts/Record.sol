pragma solidity ^0.4.26;
pragma experimental ABIEncoderV2;
contract Record {
    struct Patient{
        string id;
        string nameTitle;
        string firstname;
        string lastname;
        string gender;
        string idCardNo;
        string dob;
        string ethnicity;
        string nation;
        string religion;
        string work;
        string homeNo;
        string subDist;
        string dist;
        string province;
        string zip;
        string congenitalDisease;
        string allergy;
        string blood;
        string boardingHos;
        string personalDoc;
        address addr;
        uint date;
    }

    struct HistoryOfSeeadoc{
        string nameDoc;
        uint date;
        string details;
    }

    address public owner;
    address[] public patientList;

    mapping(address => Patient) patient;

    mapping(address=>mapping(address=>bool)) isApproved;
    mapping(address => bool) isPatient;
    
    function ownerRecord() public {
        owner = msg.sender;
    }

    // function setDetails(string memory _id, string memory _nameTitle, string memory _firstName, string memory _lastName, string memory _gender, string memory _idCardNo, string memory _dob, string memory _ethnicity, string memory _nation, string memory _religion, string memory _work, string memory _homeNo, string memory _subDist, string memory _dist, string memory _province, string memory _zip, string memory _congenitalDisease, string memory _allergy, string memory _blood, string memory _boardingHos, string memory _personalDoc) public {
    //     require(!isPatient[msg.sender]);
        //Patient storage p = patient[msg.sender];
    // function setDetails(string memory _id, string _nameTitle, string _firstName, string _lastName, string _gender, string _idCardNo, string _dob, string _ethnicity, string _nation, string _religion, string _work, string _homeNo, string _subDist, string _dist, string _province, string _zip, string _congenitalDisease, string _allergy, string _blood, string _boardingHos, string _personalDoc) public external{
    //     require(!isPatient[msg.sender]);
    function setDetails(Patient a) public{
        require(!isPatient[msg.sender]);
        var p = patient[msg.sender];
        p.id = a.id;
        p.nameTitle = a.nameTitle;
        p.firstname = a.firstname;
        p.lastname = a.lastname;
        p.gender = a.gender;
        p.idCardNo = a.idCardNo;
        p.dob = a.dob;
        p.ethnicity =  a.ethnicity; 
        p.nation = a.nation;
        p.religion = a.religion;
        p.work = a.work;
        p.homeNo = a.homeNo;
        p.subDist = a.subDist;
        p.dist = a.dist;
        p.province = a.province;
        p.zip = a.zip;
        p.congenitalDisease = a.congenitalDisease;
        p.allergy = a.allergy;
        p.boardingHos = a.boardingHos;
        p.personalDoc = a.personalDoc;
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
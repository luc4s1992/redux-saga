// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

contract MatrixStorage {
    struct validation {
        uint256 val;
        bool isValue;
    }
    mapping(uint => validation) validData;
    string[][] private data;
    uint256 public rowNum;

    constructor() {
        rowNum = 0;
    }

     /**
    *   upload matrix data
    *   @param {_data} array that including the fetched data.
    *   @param {indexs} array that including the validData's key list(same as ID in sql database).
    *   @param {cpus} array that including the cpu_utlisations
    * 
    *   Iterate _data.length'value times.
    *   When cpu_utlisation is over 80, perform like below:
    *       - data is not exists in cotract, push to the contract indexed by rowNum. And increase the rowNum.
    *       - otherwise(data is already exists in cotract), update that.
    */
    function uploadData(string[][] memory _data, uint256[] memory indexs, uint256[] memory cpus) public {
        for(uint256 i = 0; i< _data.length; i++) {
            if (cpus[i] > 80) {
                uint index = indexs[i];
                if(!validData[index].isValue) {
                    data.push(_data[i]);
                    validData[index] = validation(rowNum, true);
                    rowNum = rowNum + 1;
                } else {
                    data[validData[index].val] = _data[i];
                }
            }
        }
    }
    
    /**
    *   get all data
    *   view all uploaded data
    */
    function viewAllData() public view returns(string[][] memory) {
        return data;
    }

    /**
    *   get selected data
    *   view selected data by id
    */
    function viewSelectedData(uint256 id) public view returns (string[] memory) {
        require(validData[id].isValue, "invalid ID");
        return data[validData[id].val];
    }
}
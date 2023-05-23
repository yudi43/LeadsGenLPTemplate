import React, { useState, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import ReactDataGrid from 'react-data-grid';
import * as XLSX from 'xlsx';

const useStyles = makeStyles({
  feeStructure: {
    width: '100%',
    margin: '20px',
    backgroundColor: '#8080ff',
  },
});

const FeeStructure = () => {
  const classes = useStyles();
  const [feeData, setFeeData] = useState([]);

  useEffect(() => {
    const fetchFeeData = async () => {
      try {
        // Load the Excel file
        const filePath = require('../../data/AMCEC_feestructure.xlsx');
        const workbook = XLSX.readFile(filePath.default);

        // Extract data from the first sheet
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Set the data to the feeData state variable
        setFeeData(jsonData);
      } catch (error) {
        const filePath = require('../../data/AMCEC_feestructure.xlsx');
        console.log("This is the path given:", filePath);
        console.error('Error loading fee structure data:', error);
      }
    };

    fetchFeeData();
  }, []);

  return (
    <div className={classes.feeStructure}>
      <h2>Fee Structure</h2>
      <ReactDataGrid
        columns={feeData.length > 0 ? Object.keys(feeData[0]).map((key) => ({ key, name: key })) : []}
        rows={feeData}
      />
    </div>
  );
};

export default FeeStructure;

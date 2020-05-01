import React from 'react';

const types = [
    'Hospital',
    'Clinic',
    'Medical Center',
    'Academic',
    'Doctor\'s Office',
    'Research',
    'Federal Government',
    'State Government',
    'Local Government',
    'Aggregator',
    'Charity',
    'Non-Profit',
    'Association',
    'Manufacturer'
]

 export default types.map(type => (
     <option value={type}>{type}</option>
 ))

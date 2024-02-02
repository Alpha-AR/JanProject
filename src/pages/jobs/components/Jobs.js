import React from 'react';
import JobsNav from './JobsNav';
import Input from '../../../shared/Input';
import CardGrid from '../containers/CardGrid';

const Jobs = ({ jobDetails, handleSortChange, handleCompChange, handlePayChange, handleSearchChange }) => {
    return (
        <div>
            <div className=" mx-auto grid grid-cols-[1fr_4fr] ">
                <JobsNav handleSortChange={handleSortChange} jobDetails={jobDetails} handleCompChange={handleCompChange} handlePayChange={handlePayChange} />
                <div className='flex flex-col px-5'>
                    <Input
                        type="text"
                        placeholder="Search..."
                        value={jobDetails.search}
                        className='bg-gray-50  mb-4 my-5 rounded-xl px-2'
                        handleChange={(event) => handleSearchChange("search", event.target.value)}
                    />
                    <CardGrid jobDetails={jobDetails} />
                </div>
            </div>
        </div>

    );
};
export default Jobs;
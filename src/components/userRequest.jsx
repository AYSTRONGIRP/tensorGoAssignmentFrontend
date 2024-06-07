import React, { useState } from 'react';

const UserRequest = () => {
    const [category, setCategory] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        // You can send the form data to your backend or perform any other actions
        console.log('Category:', category);
        console.log('Comments:', comments);
    };

    return (
        <div>
            <h1>Customer Service Interaction</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="category">Category:</label>
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Select a category</option>
                    <option value="General Queries">General Queries</option>
                    <option value="Product Features Queries">Product Features Queries</option>
                    <option value="Product Pricing Queries">Product Pricing Queries</option>
                    <option value="Product Feature Implementation Requests">Product Feature Implementation Requests</option>
                </select>

                <label htmlFor="comments">Additional Comments:</label>
                <textarea id="comments" value={comments} onChange={(e) => setComments(e.target.value)}></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserRequest;
import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>Question and Answer</h1>

            <div className='mt-4'>
                <h4>Question-01: Difference between authorization and authentication.</h4>
                <p><strong>Answer: <br /> Authentication:</strong> অথেনটিকেশন হলো কোনো ব্যাবহারকারী আসলে তাকে ভেরিফাই করা। এখানেই ইমেল বা থার্ড পার্টি হিসেবে গুগোল বা গিটহাব বা ফেসবুক ইত্যাদির মাধ্যমে ভেরিফাই করা হয়।
                </p>

                <p>
                    <strong>Authorization:</strong> অথোরাইজেশন হলো ব্যবহারকারী যেসব সুবিধা বা তথ্য সেবা একটি অর্গানাইজেশনের থেকে নিতে পারে।</p>
            </div>

            <div className='mt-4'>
                <h4>Question-02: Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>
                    <strong>Answer: <br /> firebase</strong> ইউজ করার কারণ হলো এটা সহজ এবং নিরাপদ। এখানে অনেক ফিচার এবং সুবিধা আছে। যেমন; হোস্টিং, রিরেল টাইম ডাটাবেজ, ফায়ারস্টোর ডাটাবেজ ইত্যাদি।
                </p>
                <p>
                    <strong>firebase</strong> ছাড়াও আরো অনেক অথেনটিকেশন সিস্টেম আছে যেমন,  Octa, Azure, Auth0 etc.
                </p>
            </div>

            <div className='mt-4 mb-5'>
                <h4>Question-03: What other services does firebase provide other than authentication</h4>
                <p> <strong>Answer: <br /> Firebase </strong>
                    authentication ছাড়াও  হোস্টিং সার্ভিস, ডাটাবেজ ইত্যাদি সার্ভিস প্রদান করে।
                </p>
            </div>

        </div>
    );
};

export default Blogs;
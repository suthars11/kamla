

import React from 'react';
import { BiMessage } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';

type Props = {
    blog: {
        id: number;
        date: string;
        comment: string;
        title: string;
        shortDescription: string;
        image: string;
    };
};

const BlogCard = ({ blog }: Props) => {
    return (
        <div className="bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            {/* Image Section */}
            <div>
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-60 object-cover"
                />
            </div>

            {/* Content Section */}
            <div className="p-6">
                {/* Date and Comments */}
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{blog.date}</span>
                    <div className="flex items-center space-x-1">
                        <BiMessage className="text-rose-600" />
                        <span className="text-sm text-gray-700">{blog.comment}</span>
                    </div>
                </div>

                {/* Title and Description */}
                <h1 className="mt-4 font-bold hover:underline cursor-pointer text-lg text-gray-800">
                    {blog.title}
                </h1>
                <p className="mt-2 text-gray-600">{blog.shortDescription}</p>

                {/* Read More Link */}
                <div className="mt-4 flex items-center space-x-2 text-red-600 hover:text-red-800 cursor-pointer">
                    <span className="font-bold">Read More</span>
                    <BsArrowRight />
                </div>
            </div>
        </div>
    );
};

export default BlogCard;

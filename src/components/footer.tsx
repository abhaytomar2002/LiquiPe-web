import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="w-full xl:w-container mx-auto text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} LiquiPe. All rights
          reserved.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

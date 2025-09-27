import React, { useState } from 'react';
import { Link } from 'react-router';

const LoginSignupPages = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fullName: '',
        studentId: '',
        phoneNumber: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (isLogin) {
            console.log('Login attempt:', { email: formData.email, password: formData.password });
        } else {
            console.log('Signup attempt:', formData);
        }
    };

    const handleGoogleAuth = () => {
        console.log('Google OAuth clicked');
    };

    const LoginForm = () => (
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-3 rounded-full shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">
                    CareerCompass
                </h1>
                <p className="text-gray-600 text-sm">Navigate your future with confidence</p>
                <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition duration-200"
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition duration-200"
                        placeholder="Enter your password"
                    />
                </div>

                <div className="text-right">
                    <button
                        type="button"
                        className="text-gray-600 hover:text-gray-800 text-sm transition duration-200"
                    >
                        Forgot your password?
                    </button>
                </div>

                {/* <button */}
                {/*     type="button" */}
                {/*     onClick={handleSubmit} */}
                {/*     className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105" */}
                {/* > */}
                {/*     Sign In */}
                {/* </button> */}

                <Link
                    to="/dashboard"
                    type='button'
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 mt-6"
                >
                    Sign In
                </Link>

                <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                </div>

                <button
                    type="button"
                    onClick={handleGoogleAuth}
                    className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
                >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Continue with Google
                </button>

                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Don't have an account?{' '}
                        <button
                            type="button"
                            onClick={() => setIsLogin(false)}
                            className="text-gray-800 hover:text-gray-900 font-medium transition duration-200"
                        >
                            Sign up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );

    const SignupForm = () => (
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                    <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-3 rounded-full shadow-lg">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                </div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent mb-2">
                    CareerCompass
                </h1>
                <p className="text-gray-600 text-sm">Start your journey today</p>
                <div className="w-16 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto mt-3 rounded-full"></div>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition duration-200"
                        placeholder="Enter your full name"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition duration-200"
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Student ID
                    </label>
                    <input
                        type="text"
                        name="studentId"
                        value={formData.studentId}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition duration-200"
                        placeholder="Enter your student ID"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition duration-200"
                        placeholder="Enter your phone number"
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition duration-200"
                        placeholder="Create a password"
                    />
                </div>

                {/* <button */}
                {/*     type="button" */}
                {/*     onClick={handleSubmit} */}
                {/*     className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 mt-6" */}
                {/* > */}
                {/*     Create Account */}
                {/* </button> */}
                <Link
                    to="/dashboard"
                    type='button'
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 mt-6"
                >
                    Create Account
                </Link>

                <div className="text-center mt-6">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <button
                            type="button"
                            onClick={() => setIsLogin(true)}
                            className="text-gray-800 hover:text-gray-900 font-medium transition duration-200"
                        >
                            Sign in
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
            {isLogin ? <LoginForm /> : <SignupForm />}
        </div>
    );
};

export default LoginSignupPages;
